import ListDetails from "../../components/ListDetails";
import { useRouter } from "next/dist/client/router";

import { MongoClient } from "mongodb";
import { useState } from "react";

export default function Details(props) {
  const [items, setItems] = useState([...props.items]);

  const router = useRouter();
  const { listId } = router.query;

  const navigateBack = () => {
    router.push("/");
  };

  const navigateToAddItems = () => {
    router.push("/items/add/5");
  };

  const navigateToItem = () => {
    router.push("/items/5");
  };

  async function getItemsHandler(listId) {
    const itemsResponse = await fetch(`/api/items/${listId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newItems = await itemsResponse.json();

    setItems([...newItems]);
  }

  const updateItemStatusHandler = async (itemId, status) => {
    await fetch(`/api/items/update-status/${itemId}/${status}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await getItemsHandler(Number(listId));
  };

  return (
    <ListDetails
      updateItemStatusHandler={updateItemStatusHandler}
      items={items}
      navigateBack={navigateBack}
      navigateToAddItems={navigateToAddItems}
      navigateToItem={navigateToItem}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
  );
  const db = client.db();

  const listsCollection = db.collection("lists");

  const lists = await listsCollection.find({}, { serialNumber: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: lists.map((list) => ({
      params: { listId: list.serialNumber.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const listId = Number(context.params.listId);

  const client = await MongoClient.connect(
    "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
  );
  const db = client.db();

  const itemsCollection = db.collection("items");
  const categoriesCollection = db.collection("categories");
  const listsCollection = db.collection("lists");

  const items = await itemsCollection.find({ listId: listId }).toArray();
  const categories = await categoriesCollection.find().toArray();
  const list = await listsCollection.findOne({ serialNumber: listId });

  client.close();

  return {
    props: {
      items: items.map((item) => ({
        serialNumber: item.serialNumber,
        name: item.name,
        isBought: item.isBought,
        categoryIcon: categories.find((c) => c.serialNumber === item.categoryId)
          .icon,
        listName: list.name,
      })),
      revalidate: 1,
    },
  };
}

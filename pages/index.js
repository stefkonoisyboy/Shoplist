import { MongoClient } from "mongodb";
import { useState } from "react";
import { useRouter } from "next/router";

import App from "../components/App";

export default function Home(props) {
  const [lists, setLists] = useState([...props.lists]);
  const router = useRouter();

  const navigateToListDetails = (id) => {
    router.push(`/lists/${id}`);
  } 

  async function getListsHandler() {
    const listsResponse = await fetch("/api/get-lists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newLists = await listsResponse.json();

    setLists([...newLists]);
  }

  async function addListHandler(enteredListData) {
    await fetch("/api/add-list", {
      method: "POST",
      body: JSON.stringify(enteredListData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await getListsHandler();
  }

  async function updateListHandler(enteredListData) {
    await fetch(`/api/update-list/${enteredListData.serialNumber
    }/${enteredListData.name}`, {
      method: "PUT",
      body: JSON.stringify(enteredListData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await getListsHandler();
  }

  async function deleteListHandler(id) {
    const response = await fetch(`/api/delete-list/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await getListsHandler();
  }

  return (
    <App
      add={addListHandler}
      deleteFunc={deleteListHandler}
      updateFunc={updateListHandler}
      navigateToListDetails={navigateToListDetails}
      lists={lists}
    />
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
  );
  const db = client.db();

  const listsCollection = db.collection("lists");

  const lists = await listsCollection.find().toArray();

  client.close();

  return {
    props: {
      lists: lists.map((list) => ({
        id: list._id.toString(),
        name: list.name,
        serialNumber: list.serialNumber,
      })),
      revalidate: 1,
    },
  };
}

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
    );
    const db = client.db();

    const { listId } = req.query;

    const itemsCollection = db.collection("items");
    const categoriesCollection = db.collection("categories");
    const listsCollection = db.collection("lists");

    const items = await itemsCollection
      .find({ listId: Number(listId) })
      .toArray();
    const categories = await categoriesCollection.find().toArray();
    const list = await listsCollection.findOne({ serialNumber: Number(listId) });

    client.close();

    res.status(200).json([
      ...items.map((item) => ({
        serialNumber: item.serialNumber,
        name: item.name,
        isBought: item.isBought,
        categoryIcon: categories.find((c) => c.serialNumber === item.categoryId)
          .icon,
        listName: list.name,
      })),
    ]);
  }
}

export default handler;

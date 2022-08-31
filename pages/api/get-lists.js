import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
    );
    const db = client.db();

    const listsCollection = db.collection("lists");

    const lists = await listsCollection.find().toArray();

    client.close();

    res.status(200).json([...lists]);
  }
}

export default handler;

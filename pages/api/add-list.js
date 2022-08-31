import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
    );
    const db = client.db();

    const listsCollection = db.collection("lists");

    const result = await listsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "List inserted successfully!" });
  }
}

export default handler;

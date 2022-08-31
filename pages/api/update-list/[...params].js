import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const client = await MongoClient.connect(
      "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
    );
    const db = client.db();

    const listsCollection = db.collection("lists");

    const { params } = req.query;
    
    const serialNumber = Number(params[0]);
    const name = params[1].toString();

    await listsCollection.updateOne(
      { serialNumber: serialNumber },
      {
        $set: { name: name },
        $currentDate: { lastModified: true }
      }
    );

    client.close();

    res.status(200).json({ message: "List updated successfully!" });
  }
}

export default handler;

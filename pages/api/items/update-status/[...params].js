import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const client = await MongoClient.connect(
      "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
    );
    const db = client.db();

    const itemsCollection = db.collection("items");

    const { params } = req.query;
    
    const serialNumber = Number(params[0]);
    const isBought = params[1];

    await itemsCollection.updateOne(
      { serialNumber: serialNumber },
      {
        $set: { isBought: isBought },
        $currentDate: { lastModified: true }
      }
    );

    client.close();

    res.status(200).json({ message: "Item status changed successfully!" });
  }
}

export default handler;

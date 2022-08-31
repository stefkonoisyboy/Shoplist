import { MongoClient} from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const client = await MongoClient.connect(
        "mongodb+srv://stefkonoisyboy:Djokera03@cluster0.cnapytt.mongodb.net/shoppinglists?retryWrites=true&w=majority"
      );
      const db = client.db();
  
      const listsCollection = db.collection("lists");
    
      const { listId } = req.query;
      console.log(listId)
      console.log(await listsCollection.deleteOne({ serialNumber: Number(listId) }));
  
      client.close();
  
      res.status(200).json({ message: "List deleted successfully!" });
  }
}

export default handler;

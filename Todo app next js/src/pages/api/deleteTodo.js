import { MongoClient, ObjectId } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/next-todo"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    const { id } = req.body;
    console.log("id ", id);
    const query = { _id: new ObjectId(id) };
    const res = await todosCollection.deleteOne(query);
    res.status(200).json({ message: "item deleted" });
  }
}
export default handler;

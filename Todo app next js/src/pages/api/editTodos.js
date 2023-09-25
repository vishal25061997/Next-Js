import { MongoClient, ObjectId } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/next-todo"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");
    console.log("putt call hua");
    const { id, newData } = req.body;
    console.log("id and new", id, newData);
    const query = { _id: new ObjectId(id) };
    const updatedData = await todosCollection.findOneAndReplace(query, newData);
    console.log("putt call hua", updatedData);
    res.status(200).json({ message: "updated" });
  }
}
export default handler;

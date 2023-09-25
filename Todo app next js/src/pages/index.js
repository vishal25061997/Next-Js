import AddTask from "@/components/AddTask";
import ToDoList from "@/components/ToDoList";
import Todos from "@/components/Todos";
import { MongoClient } from "mongodb";
function Home(props) {
  return (
    <main className="max-w-4xl m-auto mt-4 ">
      <Todos todos={props} />
    </main>
  );
}
export async function getStaticProps() {
  //getting data

  const client = await MongoClient.connect(
    "mongodb://127.0.0.1:27017/next-todo"
  );
  const db = client.db();
  const todosCollection = db.collection("todos");
  const todos = await todosCollection.find().toArray();
  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        text: todo.text,
        id: todo._id.toString(),
        completed: todo.completed,
      })),
    },
    revalidate: 10,
  };
}

export default Home;

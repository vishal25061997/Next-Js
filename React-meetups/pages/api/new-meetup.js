// api/new-meetup
import { MongoClient } from "mongodb"

const handler = async(req,res) => {
  if(req.method=== 'POST'){
    const{title,image,address,description}=data
    const data = req.body

   const client = await MongoClient.connect("mongodb://127.0.0.1:27017/meetup");
   const db = client.db()
   const meetupsCollection = db.collection('allMeetups');
   const result = await meetupsCollection.insertOne(data)
   console.log(result)
   client.close()
   res.status(201).json({msg:"meetup inserted"})
  }
  
}

export default handler

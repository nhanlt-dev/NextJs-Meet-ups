import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function apiHandlerNewMeetup(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://ltnhan19ce:SlKvrl3jyjoWl00p@cluster0.j9zpsgl.mongodb.net/meet-ups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meet-ups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default apiHandlerNewMeetup;

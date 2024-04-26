import clientPromise from "../../lib/mongodb";

export default async function handler(request, response) {
    const mongoClient = await clientPromise;
    const db = mongoClient.db("myFirstDatabase");


    try {
        if (request.method === "POST") {
            try {
                const collection = db.collection('restaurants');
                const restaurant = await collection.insertOne(request.body);
                response.status(201).json({ success: true, data: restaurant });

            } catch (error) {
                response.status(400).json({ success: false, error: "Failed to add restaurant" });
                console.error("Error adding restaurant:", error);
            }
        } else {
            const collection = db.collection("restaurants");

            const results = await collection
                .find({})
                .project({
                    grades: 0,
                    borough: 0,
                    restaurant_id: 0,
                })
                .limit(10)
                .toArray();
            response.status(200).json(results);
        }
    } catch (e) {
        console.error(e);
        response.status(500).json({ error: "Internal server error" });
    }
}

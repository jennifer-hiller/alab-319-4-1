import "dotenv/config";
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Connected to Mongo");
} catch (err) {
  console.log(err);
}

const db = await conn.db("sample_training");
// await db.collection("grades").createIndex({ class_id: 1 });
// await db.collection("grades").createIndex({ learner_id: 1 });
// await db.collection("grades").createIndex({ learner_id: 1, class_id: 1 });

// async () => {
//   await db.createCollection("grades", {
//     // Pass the validator object
//     validator: {
//       // Use the $jsonSchema operator
//       $jsonSchema: {
//         bsonType: "object",
//         title: "Grades Validation",
//         // List required fields
//         required: ["class_id", "learner_id"],
//         properties: {
//           class_id: {
//             bsonType: "number",
//             // and a description that is shown when a document fails validation
//             description: "'class_id' is required, and must be a number",
//             min: 0,
//             max: 300,
//           },
//           learner_id: {
//             bsonType: "number",
//             description: "'learner_id' is required and must be a number",
//             min: 0
//           },
//         },
//       },
//     },
//     validationAction: "warn"
//   });
// };

export default db;

// import { GridFSBucket, } from "mongodb";
// import mongoose from "mongoose";

// let gridFSBucket: GridFSBucket;

// export const getGridFSBucket = () => {
//   try {
//     const db = client
//     mongoose.connection.once("open", () => {
//       gridFSBucket = new GridFSBucket(mongoose.connection.db, {
//         bucketName: "uploads",
//       });
//       console.log("✅ GridFSBucket initialized");
//       return gridFSBucket;
//     });
//   } catch (error) {
//     if (!gridFSBucket) {
//       throw new Error("GridFSBucket is not initialized yet");
//     }
//   }
// };

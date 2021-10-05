import React, { useState, useEffect } from "react";

import { collection, addDoc, getDocs } from "firebase/firestore";

import firebase from "../Firebase/firebase";
import { posts } from "./data";

import Card from "../Card/card.component";

const fb = new firebase();
const db = fb.db;

// // Adds data.js to firebase (already ran!)
// const addStartupsData = async () => {
//   try {
//     posts.map(async (post) => {
//       await addDoc(collection(db, "startups"), post)
//     });
//     console.log("Documents added");
//   } catch (e) {
//     console.error("Error adding documents: ", e);
//   }
// }

const Landing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const readStartupsData = async () => {
      const querySnapshot = await getDocs(collection(db, "startups"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setPosts((prevPosts) => {
          return [...prevPosts, doc.data()];
        });
      });
    };

    readStartupsData();
  }, []);

  console.log(posts);
  return (
    <div>
      <h1>Landing</h1>
      {posts ? posts.map((post) => {
        return <Card {...post} />;
      }) : <p>Couldn't load posts</p>}
    </div>
  );
};

export default Landing;
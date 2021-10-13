import React, { useState, useEffect } from "react";

import { collection, setDoc, getDocs, doc } from "firebase/firestore";

import firebase from "../Firebase/firebase";
import { posts } from "./data";

import Card from "../Card/card.component";
import { withFirebase } from "../Firebase";

// const fb = new firebase();
// const db = fb.db;

// Adds data.js to firebase (already ran!)
// const addStartupsData = async () => {
//   try {
//     posts.map(async (post) => {
//       //adds a UID for reference to startups
//       // const docRef = doc(collection(db, "startups"));
//       // await setDoc(docRef, { ...post, uid: docRef.id });
//     });
//     console.log("Documents added");
//   } catch (e) {
//     console.error("Error adding documents: ", e);
//   }
// };

const StartUpsPage = (props) => {
  const [posts, setPosts] = useState([]);

  const addStartupsData = async () => {
    try {
      posts.map(async (post) => {
        //adds a UID for reference to startups
        // const docRef = doc(collection(db, "startups"));
        // await setDoc(docRef, { ...post, uid: docRef.id });
        await props.firebase.addStartup(post);
      });
      console.log("Documents added");
    } catch (e) {
      console.error("Error adding documents: ", e);
    }
  };

  useEffect(() => {
    // addStartupsData();
    const readStartupsData = async () => {
      const querySnapshot = await props.firebase.getAllStartups();
      querySnapshot.forEach((doc) => {
        setPosts((prevPosts) => {
          return [...prevPosts, doc.data()];
        });
      });
    };

    readStartupsData();
  }, [props.firebase]);

  return (
    <div>
      <h1>StartUps</h1>
      {posts ? (
        posts.map((post) => {
          return <Card {...post} />;
        })
      ) : (
        <p>Couldn't load posts</p>
      )}
    </div>
  );
};

export default withFirebase(StartUpsPage);

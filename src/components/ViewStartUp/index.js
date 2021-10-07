import { doc, getDoc } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";

const ViewStartUpPage = (props) => {
  //   console.log(props);
  const { uid } = useParams();
  const [startupData, setStartupData] = useState(null);

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const docRef = doc(props.firebase.db, "startups", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.data());
        } else {
          console.log("undefined doc");
        }
        setStartupData(docSnap.data());
      } catch (error) {
        console.log(error);
      }
    };
    fetchStartup();
  }, [uid, props.firebase.db]);

  return (
    <div>
      <h1 className="">Startup</h1>
    </div>
  );
};

export default withFirebase(ViewStartUpPage);

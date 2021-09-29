import React from "react";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore();

const addUsersData = async () => {
  try {
    await addDoc(collection(db, "users"), {
      name: "Noel Covarrubias",
      email: "123@gmail.com",
      phoneNumber: 2099999999,
      isAdmin: true,
    });
    await addDoc(collection(db, "users"), {
      name: "Johan Rodriguez",
      email: "johan@gmail.com",
      phoneNumber: 2209999999,
      isAdmin: true,
    });
    await addDoc(collection(db, "users"), {
      name: "Jasmine",
      email: "jasmine123@gmail.com",
      phoneNumber: 5983590483490,
      isAdmin: false,
    })

    console.log("Documents added");
  } catch (e) {
    console.error("Error adding documents: ", e);
  }
};

const addStartupsData = async () => {
  try {
    await addDoc(collection(db, "startups"), {
      startupName: "Tesla",
      startupDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan sit amet nulla.",
      investmentGoal: 1000000,
      numberOfInvestors: 1200,
      investmentMinimum: 5000,
      currentInestmentTotal: 500000,
      investmentDeadline: "01/01/2022",
      author: "Noel Covarrubias",
    });
    await addDoc(collection(db, "startups"), {
      startupName: "Tesla",
      startupDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan sit amet nulla.",
      investmentGoal: 100000,
      numberOfInvestors: 250,
      investmentMinimum: 2500,
      currentInestmentTotal: 55000,
      investmentDeadline: "03/16/2022",
      author: "Johan Rodriguez",
    });

    console.log("Documents added");
  } catch (e) {
    console.error("Error adding documents: ", e);
  }
}

const readUsersData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  })
}

const readStartupsData = async () => {
  const querySnapshot = await getDocs(collection(db, "startups"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  })
}

const Landing = () => {
  readUsersData();
  readStartupsData();
  return (
    <div>
      <h1>Landing</h1>
    </div>
  );
};

export default Landing;

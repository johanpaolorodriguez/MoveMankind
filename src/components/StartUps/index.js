import React, { useState, useEffect } from "react";
import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";

const StartUpsPage = (props) => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    // addStartupsData();
    const readStartupsData = async () => {
      const querySnapshot = await props.firebase.getAllStartups();
      querySnapshot.forEach((doc) => {
        setStartups((prevStartups) => {
          return [...prevStartups, doc.data()];
        });
      });
    };

    readStartupsData();
  }, [props.firebase]);

  return (
    <div>
      <h1 className="py-24 text-4xl text-center">Startups</h1>
      <div className="grid items-start grid-cols-4 mx-auto max-w-7xl">
        {/* <h1>StartUps</h1> */}
        {startups.map((startup, index) => {
          return (
            <div className="w-full h-full max-w-sm col-span-1 px-3 py-6">
              <Link to={`/startups/${startup.uid}`}>
                <div className="overflow-hidden bg-white border border-transparent rounded-lg shadow-xl hover:border-primary">
                  <img
                    src={startup.featureImage}
                    alt=""
                    className="object-cover object-center w-full h-56"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-md">{startup.name}</p>
                    <p className="text-sm">{startup.country}</p>
                    <p className="text-sm">{startup.headQuarters}</p>
                    <p className="text-sm">{startup.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withFirebase(StartUpsPage);

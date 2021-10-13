import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { withFirebase } from "../Firebase";

const ViewStartUpPage = (props) => {
  //   console.log(props);
  const { uid } = useParams();
  const [startup, setStartup] = useState({});

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const docSnap = await props.firebase.getStartupByID(uid);
        let data = docSnap.data();
        setStartup(() => data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStartup();
  }, [props.firebase, uid]);

  return (
    <div>
      {startup && (
        <main className="w-full">
          <div className="w-full bg-gray-200" style={{ height: "50vh" }} />

          <div className="bg-gray-300">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gray-900 rounded-full">
                  <img
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                    className="block w-auto h-16"
                  />
                </div>
                <h1 className="p-4 text-3xl font-extrabold leading-8 text-gray-900">
                  {startup.startupName}
                </h1>
              </div>
              <button className="h-full px-4 py-4 bg-gray-100">Contact</button>
            </div>
          </div>

          <div className="flex py-16 mx-auto max-w-7xl">
            <p className="mt-2 ml-16 text-base text-gray-500">
              {startup.startupDescription}
            </p>
          </div>
        </main>
      )}
    </div>
  );
};

export default withFirebase(ViewStartUpPage);

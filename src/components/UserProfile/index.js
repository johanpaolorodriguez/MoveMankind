import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";
import Table from "../StartUps/table";

/**
 * 1. Display Basic User Information
 * 2. Display Followed Ventures
 * 3. If user is viewing own profile display follow/unfollow button
 */

const UserProfilePage = (props) => {
  const { uid } = useParams();
  const authUser = useContext(AuthUserContext);
  const [user, setUser] = useState({});
  const [startups, setStartups] = useState([]);

  //mount user profile
  //Iq8JwxPsQ0QS60GkoQffChHOJg92
  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await props.firebase.getUserByID(uid);
        console.log(user.following);
        setUser(user);
        const startups = await props.firebase.getAllStartupsWithID(
          user.following
        );
        setStartups(startups);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [props.firebase, uid]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-8">
        <h1 className="mt-16 text-3xl font-bold text-primary">Profile</h1>
        <article className="flex space-x-6">
          <img
            className="inline-block w-24 h-24 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="">
            <h2 className="text-4xl font-bold">{user.username}</h2>
            <p className="text-xl">{user.email}</p>
            <p className="text-xl">Boston, MA, USA</p>
          </div>
        </article>
        <p className="">
          Buck drives strategic partnerships and corporate development at Miso.
          As a technologist and early-stage venture investor, he has a track
          record of building successful businesses at the leading edge of
          technology in transformative, high growth markets. He has held roles
          at Wavemaker Partners and Wavemaker Labs, and founded VC firm Canyon
          Creek Capital.
        </p>
      </div>

      {startups.length !== 0 ? (
        <div>
          <h1 className="mt-16 text-3xl font-bold text-primary">Ventures</h1>
          <Table startups={startups} />
        </div>
      ) : null}
    </div>
  );
};

export default withFirebase(UserProfilePage);

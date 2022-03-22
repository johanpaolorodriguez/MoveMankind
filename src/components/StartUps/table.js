import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "@firebase/firestore";
import FollowButton from "../Follow";
import { AuthUserContext } from "../Session";
import RegisterInterestButton from "../RegisterInterest";
import SignInOrUpPrompt from "../SignIn/SignInOrUpPrompt.js";
import { withFirebase } from "../Firebase";

const Table = ({ startups, firebase }) => {
  const [selected, setSelected] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const authUser = useContext(AuthUserContext);

  useEffect(() => {
    const getUserData = () => {
      if (authUser) {
        try {
          const unsubscribe = onSnapshot(
            doc(firebase.db, "users", authUser.authUser.uid),
            (doc) => {
              setUserData(doc.data());
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUserData();
  }, [authUser, firebase.db]);

  const handleClick = (uid) => {
    setSelected(uid);
  };

  const isSelected = (uid) => {
    return selected === uid;
  };

  return (
    <div className="w-full">
      <SignInOrUpPrompt isOpen={isDialogOpen} setIsOpen={setDialogOpen} />
      {/* mobile */}
      <div className="flex flex-col divide-y divide-solid max-w-[90rem] w-full mx-auto mb-24">
        {startups.map((startup, key) => (
          <div
            onClick={() => handleClick(startup.uid)}
            key={startup.uid}
            className="flex min-h-[14rem] p-5 cursor-pointer space-x-2 | md:min-h-0"
          >
            <div className="flex-none w-24 | md:w-10 md:hidden">
              <img
                src={startup.logo}
                alt=""
                className="object-contain | md:pt-2"
              />
            </div>
            <div
              className="flex flex-col space-y-2.5 w-full | md:grid md:grid-cols-10 md:gap-2"
              style={{ minWidth: 0 }}
            >
              <div className="hidden pt-2 | md:flex w-full md:justify-evenly">
                <FollowButton startupUid={startup.uid} userData={userData} />

                <img
                  src={startup.logo}
                  alt=""
                  className="hidden object-contain | md:block md:h-auto md:w-10 col-span-1"
                />
              </div>

              <div className="flex justify-between w-full | md:col-span-2 md:flex-col lg:col-span-2">
                <div>
                  <h3 className="text-base font-semibold text-primary">
                    {startup.name}
                  </h3>
                  <h4 className="text-sm">
                    {startup.city ? `${startup.city}, ` : ""}
                    {startup.country}
                  </h4>
                </div>
                <span className="md:hidden">
                  <FollowButton startupUid={startup.uid} userData={userData} />
                </span>

                {selected === startup.uid && (
                  <span className="hidden text-sm font-semibold md:block">
                    {startup["funding type"]}
                  </span>
                )}

                <div className="hidden text-[0.6rem] space-x-2 | md:flex md:flex-wrap">
                  {startup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline px-2 py-1 my-1 rounded-md bg-slate-200 font-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2 md:col-span-5 lg:col-span-6 md:flex md:flex-col md:justify-between md:justify-self-start">
                <p
                  className={`${
                    isSelected(startup.uid) ? "" : "line-clamp-3"
                  } text-sm max-w-3xl`}
                >
                  {startup.description}
                </p>
                {selected === startup.uid && (
                  <span className="text-sm font-semibold md:hidden">
                    {startup["funding type"]}
                  </span>
                )}

                {startup.investors ? (
                  <p className="text-sm">Investors: {startup.investors}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="text-xs space-x-2 flex flex-wrap | md:hidden">
                {startup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline px-2 py-1 my-1 rounded-md bg-slate-200 font-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="md:col-span-2 | lg:col-span-1">
                <RegisterInterestButton
                  startupUid={startup.uid}
                  setIsOpen={setDialogOpen}
                  userData={userData}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withFirebase(Table);

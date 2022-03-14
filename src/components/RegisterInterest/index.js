import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { doc, onSnapshot } from "@firebase/firestore";
import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";

const RegisterInterestButton = (props) => {
  const authUser = useContext(AuthUserContext);
  const [userData, setUserData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getUserData = () => {
      if (authUser) {
        try {
          const unsubscribe = onSnapshot(
            doc(props.firebase.db, "users", authUser.authUser.uid),
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
  }, [authUser, props.firebase.db]);

  const userIsInterestedInStartup = () => {
    if (userData && userData.interestedIn) {
      return userData.interestedIn.includes(props.startupUid);
    } else {
      return false;
    }
  };

  const handleOnClick = async () => {
    if (authUser === null) {
      history.push(ROUTES.SIGN_IN);
      return;
    }
    try {
      if (userIsInterestedInStartup()) {
        await props.firebase.doUnregisterStartupAsUser(
          authUser.authUser.uid,
          props.startupUid
        );
      } else {
        await props.firebase.doRegisterStartupAsUser(
          authUser.authUser.uid,
          props.startupUid
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => handleOnClick()}
      className={`${
        userIsInterestedInStartup() ? "text-white bg-primary" : "text-gray-700"
      } w-full p-1  border border-black rounded-sm hover:bg-blue-700 hover:text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 hover:border-none focus:border-none | md:w-32 md:h-8`}
    >
      {userIsInterestedInStartup() ? "Interested" : "I'm Interested"}
    </button>
  );
};

export default withFirebase(RegisterInterestButton);

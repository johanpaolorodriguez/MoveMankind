import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { doc, onSnapshot } from "@firebase/firestore";
import { StarIcon } from "@heroicons/react/outline";
import { StarIcon as StarIconFilled } from "@heroicons/react/solid";
import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const FollowButton = (props) => {
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

  const userIsFollowingStartup = () => {
    if (userData) {
      return userData.following.includes(props.startupUid);
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
      if (userIsFollowingStartup()) {
        await props.firebase.doUnfollowStartupAsUser(
          authUser.authUser.uid,
          props.startupUid
        );
      } else {
        await props.firebase.doFollowStartupAsUser(
          authUser.authUser.uid,
          props.startupUid
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={() => handleOnClick()}>
      {userIsFollowingStartup() ? (
        <StarIconFilled className="w-6 h-6 text-blue-500" />
      ) : (
        <StarIcon className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
};

export default withFirebase(FollowButton);

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkIconFilled } from "@heroicons/react/solid";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";

const FollowButton = ({ firebase, setIsOpen, startupUid, userData }) => {
  const authUser = useContext(AuthUserContext);

  const userIsFollowingStartup = () => {
    if (userData && userData.following) {
      return userData.following.includes(startupUid);
    } else {
      return false;
    }
  };

  const handleOnClick = async () => {
    if (authUser === null) {
      setIsOpen(true);
      return;
    }
    try {
      if (userIsFollowingStartup()) {
        await firebase.doUnfollowStartupAsUser(
          authUser.authUser.uid,
          startupUid
        );
      } else {
        await firebase.doFollowStartupAsUser(authUser.authUser.uid, startupUid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={() => handleOnClick()}>
      {userIsFollowingStartup() ? (
        <BookmarkIconFilled className="w-6 h-6 text-blue-500" />
      ) : (
        <BookmarkIcon className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
};

export default withFirebase(FollowButton);

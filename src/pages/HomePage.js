import React from "react";
import { withAuthorization } from "../components/Session";

const HomePage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <p>Accessible to Authenticated Users</p>
        </div>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
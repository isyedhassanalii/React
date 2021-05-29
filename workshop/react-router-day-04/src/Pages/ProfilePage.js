import React, { useEffect } from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import DeleteProfile from "../components/DeleteProfile";
import EditProfile from "../components/EditProfile";

const ProfilePage = ({ login }) => {
  const history = useHistory();
  const { path, url } = useRouteMatch();
  console.log(path, url);
  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);
  return (
    <>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
        <li>
          <Link to={`${url}/deleteprofile`}>Delete Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/editprofile`} component={EditProfile}></Route>
        <Route path={`${path}/deleteprofile`} component={DeleteProfile}></Route>
      </Switch>
    </>
  );
};

export default ProfilePage;

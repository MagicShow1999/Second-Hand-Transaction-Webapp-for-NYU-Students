// routes for frontend
import * as React from "react";
import Loadable from "./Utils/loadable";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Landing = Loadable("Landing");
const Login = Loadable("Login");
const Signup = Loadable("Signup");
const Home = Loadable("Home");
const Chat = Loadable("Chat");
const Profile = Loadable("Profile");
const PostItem = Loadable("PostItem");
const Listing = Loadable("Listing");

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/me" component={Profile} />
          <Route path="/post-item" component={PostItem} />
          <Route path="/listing" component={Listing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

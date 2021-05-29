import { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Notfound from "./components/Notfound";
import Aboutpage from "./Pages/Aboutpage";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  const [login, setLogin] = useState(false);
  return (
    //This is how we can define base name
    // <BrowserRouter basename="portfolio">
    //   <div>
    //     <Header />
    //   </div>
    //   <Switch>
    //     <Route path="/" exact component={HomePage} />
    //     <Route path="/about" component={Aboutpage} />
    //     <Route path="/profile" component={ProfilePage} />
    //     <Route component={Notfound} />
    //   </Switch>
    // </BrowserRouter>

    //for some you need a refresh feature to re render everthing
    // <BrowserRouter forceRefresh>
    //   <div>
    //     <Header />
    //   </div>
    //   <Switch>
    //     <Route path="/" exact component={HomePage} />
    //     <Route path="/about" component={Aboutpage} />
    //     <Route path="/profile" component={ProfilePage} />
    //     <Route component={Notfound} />
    //   </Switch>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="App">
        <Header />

        <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={Aboutpage} />
          {/* Redirection */}
          {/* <Route path="/profile">
            {login ? <ProfilePage /> : <Redirect to="/" />}
          </Route> */}
          {/* Another way of redirection */}
          <Route path="/profile">
            <ProfilePage login={login} />
          </Route>
          <Route path="/post/:id" component={PostPage}></Route>
          <Route component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Fragment } from "react";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import Header from "../src/components/Header";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      {isAuthenticated && <Header />}
      {isAuthenticated ? <UserProfile /> : <Auth />}
    </Fragment>
  );
}

export default App;

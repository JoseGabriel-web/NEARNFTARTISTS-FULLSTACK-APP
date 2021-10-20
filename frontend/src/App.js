import { useEffect, useState } from "react";
import "./App.css";
import Artists from "./components/Artists";
import CreateProfile from "./components/CreateProfile";
import Home from "./components/Home";
import Logo from "./components/Logo";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { assignWallet } from "./utils";

const App = () => {
  const [wallet, setWallet] = useState();
  const [accountID, setAccountID] = useState();
  const [selectedPage, setSelectedPage] = useState("home");

  useEffect(() => {
    (async () => {
      try {
        setWallet(await assignWallet());
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (wallet && wallet.getAccountId) {
      setAccountID(wallet.getAccountId());
    }
  }, [wallet]);

  return (
    <div className="App">
      <nav>
        <div className="logo-container">
          <Logo />
        </div>
        <div className="nav-controls">
          <div className="pages-links">
            <Link label={"home"} setLink={setSelectedPage} selected={selectedPage} />
            <Link label={"become one"} setLink={setSelectedPage} selected={selectedPage} />
            <Link label={"artists"} setLink={setSelectedPage} selected={selectedPage} />
          </div>
          {!accountID && wallet && <SignIn wallet={wallet} />}
          {accountID && wallet && (
            <SignOut wallet={wallet} setAccountID={setAccountID} />
          )}
        </div>
      </nav>
      <section>
        {selectedPage === "home"? (
          <Home accountID={accountID} />
        ) : selectedPage === "become one"? (
          <CreateProfile wallet={wallet} />
        ) : selectedPage === "artists"? (
          <Artists wallet={wallet} />
        ) : (
          <Home accountID={accountID} />
        )}
      </section>
    </div>
  );
};

const Link = ({ label, setLink, selected }) => {
  const handleClick = () => {
    setLink(label)
  }
  return <h4 className={`${selected === label && "selected-link"}`} onClick={handleClick}>{label}</h4>
}

export default App;

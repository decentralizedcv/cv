import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import { overlayAnimation } from "./App";

const HomeIndex = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(() => {
    overlayAnimation();
  }, []);

  return (
    <Tabs as="div" className="page">

      <TabList as="header" className={`${toggleSidebar ? "header opened" : "header"}`}>
        {/* <!-- logo --> */}
        <div className="logo">
          <Link to={`/`}>
            <span>D</span>
          </Link>
        </div>

        {/* <!-- menu --> */}

        {/* <!-- Started socials --> */}
        <div className="social">
          <a target="_blank" rel="noreferrer" href="https://github.com/decentralizedcv/cv">
            <span className="icon la la-github"></span>
          </a>
        </div>

        {/* <!-- Mobile Menu --> */}
        <span className="menu-btn" onClick={() => setToggleSidebar(!toggleSidebar)}>
          <span className="m-line"></span>
        </span>
      </TabList>

      <div className="container">
        <TabPanel>
          <Hero type="bgImage" />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default HomeIndex;

import React from "react";
import SubFooter from "./SubFooter/Sub";
import MainFooter from "./MainFooter/MainFooter";

const Footer: React.FC = () => {
  {
    /*  Footer  */
  }
  return (
    <>
      <footer>
        {/* Main Footer */}
        <MainFooter />
        {/* <!-- Sub Footer --> */}
        <SubFooter />
      </footer>
    </>
  );
};

export default Footer;

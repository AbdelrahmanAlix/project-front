import React from "react";
import Header from "./HeaderHome.module.css";
// import icon from "../../assets/images/aae82ddcb42f1cfb920a3e739a61aebsss4f-removebg-preview.png";

function HeaderHome() {
  return (
    <section className={Header.intro}>
      <div className={Header.overlay}></div>
      <div className={Header.container}>
        <div className={Header.heroimage}>
          <div className={Header.herotext}>
            <h1 style={{ fontSize: 70 }}>
              <span> مرحبًا بكم </span> في موقعنا 
              <br></br>
              {/* <img src={icon}
                        alt="" /> */}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderHome;

import React from "react";

function Footer() {
  return (
    <footer className="py-5 mt-5 bg-black">
      <div className="container text-center">
      <h6 className="lead fw-normal text-center text-white-50 mb-0">
          GROCERY AND ORGANIC FOOD MARKET
        </h6>
       <br/>
        <p className="m-0 text-center text-white">
          Copyright ©{" Fresh bloom market "}
          <img src="https://cdn-icons-png.freepik.com/512/1901/1901411.png" width={40}/>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: " #32CD32",
              fontWeight: "bold",
            }}
          >
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

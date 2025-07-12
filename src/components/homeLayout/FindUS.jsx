import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUS = () => {
  return (
    <div className="">
      <h2 className="font-bold mb-5">Find us on</h2>
      <div className="">
        <button className="btn join-item w-full justify-start"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item w-full justify-start"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item w-full justify-start"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUS;

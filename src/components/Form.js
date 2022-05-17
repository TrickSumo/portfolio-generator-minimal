import React, { useState, useContext } from "react";
import { MyContext } from "../App";
import { Link, Navigate, useNavigate } from "react-router-dom";

import "./Style.css";

import imgDefault from "../assets/img.svg";

import axios from "axios";

const Form = () => {
  const { nameProp, emailProp, eduProp, expProp, hobProp, thumbnailURLProp } =
    useContext(MyContext);

  const [name, setName] = nameProp;
  const [email, setEmail] = emailProp;
  const [thumbnailURL, setThumbnailURL] = thumbnailURLProp;

  // Lists of Education (edu), Experince (exp) and Hobbies (hob)
  const [edu, setEdu] = eduProp;
  const [exp, setExp] = expProp;
  const [hob, setHob] = hobProp;

  //States for this component only

  const [isValidThumbnailURL, setIsValidThumbnailURL] = useState(false);
  const [isSubmitEnabled, setSubmitEnabled] = useState(true);

  // Create hash of email
  var md5 = require("md5");

  // https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValidThumbnailURL) {
      navigate("/form2");
    } else {
      setSubmitEnabled(false);
    }
  };

  const handleEmailChange = (e) => {
    const hash = md5(e.target.value);
    const tmp = "https://www.gravatar.com/avatar/" + hash + "?s=300&d=404";
    setThumbnailURL(tmp);
    setEmail(hash);

    axios
      .get(tmp)
      .then((response) => {
        // console.log(hash);
        setIsValidThumbnailURL(true);
        setSubmitEnabled(true);
      })
      .catch((error) => {
        //console.log(error);
        setIsValidThumbnailURL(false);
      });
  };

  return (
    <div className="form">
      <div className="form-element-top">
        <figure>
          <img
            src={isValidThumbnailURL ? thumbnailURL : imgDefault}
            height="300px"
          />
          <figcaption>{isValidThumbnailURL && name}</figcaption>
        </figure>
      </div>

      <div className="form-element-bottom">
        <form onSubmit={onSubmit}>
          Name:{" "}
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          Email:{" "}
          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={handleEmailChange}
          />{" "}
          <br />
          {/* {(email && isValidThumbnailURL) ? <span className='emoji'>✅ Email is valid</span> :  <span className='emoji'> <br/> ❌ </span>}  
                 
                {isValidThumbnailURL ? 
                <span className='emoji'>&nbsp;</span> :  
                <span className='emoji'> Please enter email associated with your <a href="https://en.gravatar.com/">Gravatar</a> profile.</span>}  
                <br/>
                 */}
          {email || !isSubmitEnabled ? (
            isValidThumbnailURL ? (
              <span className="noerror">✅ Email is valid</span>
            ) : (
              <span className="error">
                {" "}
                ❌ Please Enter Email Associated With Your{" "}
                <a href="https://en.gravatar.com/" target="_blank" rel="noreferrer">
                  Gravatar
                </a>{" "}
                profile.
              </span>
            )
          ) : (
            ""
          )}
          <br />
          {/* { isValidThumbnailURL && <input type="submit" value="Next" /> } */}
          <input
            className="submitButton"
            type="submit"
            value="Next"
            disabled={!isSubmitEnabled}
          ></input>
          {/* style={{backgroundColor:"rgb(13, 145, 221)" , color:"black"}} */}
        </form>
      </div>
    </div>
  );
};

export default Form;

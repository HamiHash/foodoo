import React, { Fragment, useRef } from "react";
import classes from "./cta.module.css";
import img from "../../assets/eating.jpg";

const Cta = () => {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const selectRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredFullname = fullnameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const selectedOption = selectRef.current.value;
    console.log(enteredFullname, enteredEmail, selectedOption);
  }

  return (
    <Fragment>
      <section className={`card ${classes.container}`}>
        <div className={classes.cta}>
          <h1>Get your first meal for free!</h1>
          <p>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
          <form onSubmit={submitHandler}>
            <div>
              <label>Full Name</label>
              <input
                id="fullname"
                type="text"
                placeholder="ben smith"
                ref={fullnameRef}
                required
              ></input>
            </div>
            <div>
              <label>Where did you hear from us?</label>
              <select ref={selectRef} required>
                <option value>Please choose one option:</option>
                <option value="instagram">Instagram</option>
                <option value="friends">Friends or family</option>
                <option value="youTube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook ad</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label>Email address</label>
              <input
                placeholder="foodoo@example.com"
                type="email"
                ref={emailRef}
                required
              ></input>
            </div>
            <button>Sign up now</button>
          </form>
        </div>
        <img src={img} alt="someone eating" />
      </section>
    </Fragment>
  );
};

export default Cta;

import React, { useState, useContext, useEffect } from "react";
import RegLayout from "@/components/RegLayout";
import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";
import { validateEmail } from "@/utils/validations";
import Link from "next/link";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  useEffect(() => {
    if (
      validateEmail(email) &&
      password.length >= 8 &&
      firstName !== "" &&
      lastName !== "" &&
      confirmPassword === password
    ) {
      setIsDisabled(false);
    }
  }, [email, password, confirmPassword, firstName, lastName]);

  const passwordErrorHandler = () => {
    if (password.length < 8) {
      setPasswordError("Password can not be less than 8 characters");
    } else {
      setPasswordError("");
    }
  };

  return (
    <RegLayout>
      <div className="vp-600:h-full vp-600:w-full">
        <Head>
          <title>Signup | Inso</title>
        </Head>
        <div className="bg-white-white w-500  rounded-md  shadow-lg overflow-hidden mt-50 mb-70  vp-600:m-0 vp-600:w-full vp-600:h-full vp-600:flex-grow   vp-600:rounded-none">
          <div className=" bg-primary-darkGreen h-40 px-51 flex justify-end items-center  vp-600:hidden">
            <Link passHref href="/">
              <button>
                <Image
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1655469179/InsoImages/cancel_white_g248xm.svg"
                  alt="Inso Logo"
                  draggable="false"
                  layout="fixed"
                  width="17"
                  height="17"
                />
              </button>
            </Link>
          </div>
          <div className=" bg-primary-darkGreen h-40 px-22 hidden justify-between items-center vp-600:flex">
            <Link passHref href="/">
              <button>
                <Image
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1655469179/InsoImages/cancel_white_g248xm.svg"
                  alt="Inso Logo"
                  draggable="false"
                  layout="fixed"
                  width="14"
                  height="14"
                />
              </button>
            </Link>
            <h6 className="text-white-white">Create account</h6>
          </div>
          <div className="px-51 vp-600:px-22 py-15 text-center">
            <h4 className="mb-20 font-medium">Create an account</h4>
            <form onSubmit={handleSignUp}>
              <div>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Email"
                  value={email}
                  setValue={setEmail}
                  errorMessage={emailError}
                />
              </div>

              <div className="flex w-full  gap-8">
                <div className="w-full">
                  <Input
                    label="First name"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    setValue={setFirstName}
                    // errorMessage={emailError}
                  />
                </div>

                <div className="w-full">
                  <Input
                    label="Last name"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    setValue={setLastName}
                    // errorMessage={emailError}
                  />
                </div>
              </div>
              <div className="">
                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  setValue={setPassword}
                  type="password"
                  errorMessage={passwordError}
                  keyUpHandler={passwordErrorHandler}
                />
              </div>
              <div className="mb-30">
                <Input
                  label="Confirm password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  type="password"
                  errorMessage={passwordError}
                  keyUpHandler={passwordErrorHandler}
                />
              </div>
              <button className="h-48 text-primary-darkGreen text-xl  w-full mb-16  flex justify-center items-center bg-white-white rounded  shadow-md gap-8">
                <div>
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1655469200/InsoImages/google_kmjhxy.svg"
                    alt="google Icon"
                    draggable="false"
                    layout="fixed"
                    width="20"
                    height="20"
                  />
                </div>
                <h6>Sign up with Google</h6>
              </button>
              <button
                onClick={handleSignUp}
                className="text-md btn h-48 w-full mb-16"
                disabled={isDisabled}
              >
                Sign up
              </button>
            </form>
            <p className="mb-24 text-gray-text">
              Already have an account?{" "}
              <Link passHref href="/auth/login">
                <button className=" font-medium text-primary-darkGreen">
                  {" "}
                  Log in
                </button>
              </Link>
            </p>
            <span style={{ fontSize: "10px" }}>
              {" "}
              By continuing you agree to our Terms & Conditions and Privacy
              Policy.
            </span>
          </div>
        </div>
      </div>
    </RegLayout>
  );
};

export default SignUpPage;

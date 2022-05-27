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
      <div>
        <Head>
          <title>Signup | Inso</title>
        </Head>
        <div className="bg-white-white w-639  rounded-md  shadow-lg overflow-hidden mt-100 mb-100">
          <div className=" bg-primary-darkGreen h-52 px-79 flex justify-end items-center">
            <Link passHref href="/">
              <button>
                <Image
                  src="/icons/cancel_white.svg"
                  alt="Inso Logo"
                  draggable="false"
                  layout="fixed"
                  width="17"
                  height="17"
                />
              </button>
            </Link>
          </div>
          <div className="px-79 py-20 text-center">
            <h3 className="mb-20 font-medium">Create an account</h3>
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
              <div className="mb-53">
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
              <button className="h-60 text-primary-darkGreen text-xl  w-full mb-20  flex justify-center items-center bg-white-white rounded  shadow-md gap-8">
                <div>
                  <Image
                    src="/icons/google.svg"
                    alt="google Icon"
                    draggable="false"
                    layout="fixed"
                    width="20"
                    height="20"
                  />
                </div>
                <span>Sign up with Google</span>
              </button>
              <button
                onClick={handleSignUp}
                className="text-xl btn h-64 w-full mb-20"
                disabled={isDisabled}
              >
                Sign up
              </button>
            </form>
            <h5 className="mb-24 text-gray-text">
              Already have an account?{" "}
              <Link passHref href="/auth/login">
                <button className=" font-medium text-primary-darkGreen">
                  {" "}
                  Log in
                </button>
              </Link>
            </h5>
            <p>
              {" "}
              By continuing you agree to our Terms & Conditions and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </RegLayout>
  );
};

export default SignUpPage;

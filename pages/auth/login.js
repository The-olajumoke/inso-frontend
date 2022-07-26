import React, { useState, useContext, useEffect } from "react";
import RegLayout from "@/components/RegLayout";
import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";
import { validateEmail } from "@/utils/validations";
import Link from "next/link";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (validateEmail(email) && password.length >= 8) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

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
          <title>Login | Inso</title>
        </Head>
        <div className="bg-white-white w-500  rounded-md  shadow-lg overflow-hidden mt-50 mb-70  vp-600:m-0 vp-600:w-full vp-600:h-full vp-600:flex-grow   vp-600:rounded-none">
          <div className=" bg-primary-darkGreen h-40 px-51 flex justify-end items-center vp-600:hidden">
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
          </div>
          <div className=" bg-primary-darkGreen h-40 px-22 hidden justify-between items-center vp-600:flex">
            <Link passHref href="/">
              <button>
                <Image
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1658836883/arrow_left_white_tvknkn.svg"
                  alt="Inso Logo"
                  draggable="false"
                  layout="fixed"
                  width="24"
                  height="24"
                />
              </button>
            </Link>
            <h6 className="text-white-white">Log In</h6>
          </div>
          <div className="px-51 vp-600:px-22 pt-35 text-center">
            <h4 className="mb-61 font-medium">
              Welcome to <span className=" text-primary-darkGreen">Inso</span>
            </h4>
            <form onSubmit={handleLogin}>
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
              <div className="mb-80">
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
              <button className="h-48 text-primary-darkGreen  w-full mb-16  flex justify-center items-center bg-white-white rounded  shadow-md gap-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/insomaryland/image/upload/v1655469200/InsoImages/google_kmjhxy.svg"
                    alt="google Icon"
                    draggable="false"
                    layout="fixed"
                    width="20"
                    height="20"
                  />
                </div>
                <h6>Sign in with Google</h6>
              </button>
              <Link passHref href="/discussions">
                <button
                  className="btn h-48 w-full mb-16 text-md "
                  disabled={isDisabled}
                >
                  Log in
                </button>
              </Link>
            </form>
            <p className="mb-24 text-black-analText">
              If you don&#39;t have an account,{" "}
              <Link passHref href="/auth/signup">
                <button className=" text-primary-darkGreen font-medium">
                  Sign up
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </RegLayout>
  );
};

export default LoginPage;

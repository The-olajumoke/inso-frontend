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
      <div>
        <Head>
          <title>Login | Inso</title>
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
          <div className="px-79 pt-46 text-center">
            <h3 className="mb-77 font-medium">
              Welcome to <span className=" text-primary-darkGreen">Inso</span>
            </h3>
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
              <div className="mb-100">
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
                <span>Sign in with Google</span>
              </button>
              <button
                className="text-xl btn h-64 w-full mb-20"
                disabled={isDisabled}
              >
                Log in
              </button>
            </form>
            <h5 className="mb-24">
              If you don&#39;t have an account,{" "}
              <Link passHref href="/auth/signup">
                <button className=" text-primary-darkGreen font-medium">
                  Sign up
                </button>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </RegLayout>
  );
};

export default LoginPage;

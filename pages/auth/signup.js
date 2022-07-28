import React, { useState, useContext, useEffect } from "react";
import RegLayout from "@/components/RegLayout";
import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";
import { validateEmail } from "@/utils/validations";
import Link from "next/link";
import RegInput from "@/components/RegInput";
import { validatePassword } from "@/utils/validations";
import { register } from "@/context/actions/auth/register";
import { GlobalContext } from "@/context/Provider";

const SignUpPage = () => {
  const API_URL = "http://localhost:3000";
  console.log(API_URL);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    authDispatch,
    authState: {
      auth: { loading, registerSuccess },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    console.log(registerSuccess);
  }, [registerSuccess]);
  useEffect(() => {
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      confirmPassword === password &&
      firstName.length >= 3 &&
      lastName.length >= 3
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password, confirmPassword, firstName, lastName]);

  const emailBlurHandler = () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };
  const confirmFirstNameHandler = () => {
    if (firstName.length < 3) {
      setFirstNameError("Input a valid firstname");
    } else {
      setFirstNameError("");
    }
  };
  const confirmLastNameHandler = () => {
    if (lastName.length < 3) {
      setLastNameError("Input a valid lastname");
    } else {
      setLastNameError("");
    }
  };

  const passwordHandler = () => {
    if (!validatePassword(password)) {
      setPasswordError(
        "8 characters long, include an uppercase, a lowercase, a number and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordHandler = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleRegistration = (evt) => {
    evt.preventDefault();
    //     {
    //   "f_name": "string",
    //   "l_name": "string",
    //   "contact": [
    //     {
    //       "email": "mockemail",
    //       "primary": true
    //     }
    //   ],
    //   "password": "string"
    // }
    const user = {
      f_name: firstName,
      l_name: lastName,
      contact: [
        {
          email: email,
          primary: true,
        },
      ],
      password,
    };
    register(API_URL, user)(authDispatch);
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
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1658836883/arrow_left_white_tvknkn.svg"
                  alt="Inso Logo"
                  draggable="false"
                  layout="fixed"
                  width="24"
                  height="24"
                />
              </button>
            </Link>
            <h6 className="text-white-white">Create account</h6>
          </div>
          <div className="px-51 vp-600:px-22 py-15 text-center">
            <h4 className="mb-20 font-medium">Create an account</h4>
            <form onSubmit={handleRegistration}>
              <div>
                <RegInput
                  label="Email Address"
                  placeholder="Email"
                  value={email}
                  setValue={setEmail}
                  type="email"
                  blurHandler={emailBlurHandler}
                  errorMessage={emailError}
                />
              </div>
              <div className="flex w-full  gap-8">
                <div className="w-full">
                  <RegInput
                    label="First name"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    setValue={setFirstName}
                    errorMessage={firstNameError}
                    keyUpHandler={confirmFirstNameHandler}
                  />
                </div>

                <div className="w-full">
                  <RegInput
                    label="Last name"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    setValue={setLastName}
                    errorMessage={lastNameError}
                    keyUpHandler={confirmLastNameHandler}
                  />
                </div>
              </div>
              <div>
                <RegInput
                  label="Password"
                  placeholder="Create password"
                  value={password}
                  setValue={setPassword}
                  type="password"
                  errorMessage={passwordError}
                  keyUpHandler={passwordHandler}
                />
              </div>
              <div>
                <RegInput
                  label="Confirm Password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  type="password"
                  keyUpHandler={confirmPasswordHandler}
                  errorMessage={confirmPasswordError}
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
                onClick={handleRegistration}
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
// export async function getStaticProps() {
//   const API_URL = process.env.API_URL;
//   return {
//     props: {
//       API_URL,
//     },
//   };
// }
export default SignUpPage;

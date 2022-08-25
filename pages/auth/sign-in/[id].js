import React, { useState, useContext, useEffect } from "react";
import RegLayout from "@/components/RegLayout";
import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";
import { validateEmail, validatePassword } from "@/utils/validations";
import Link from "next/link";
import RegInput from "@/components/RegInput";
import { login } from "@/context/actions/auth/login";
import { GlobalContext } from "@/context/Provider";
import ErrorModal from "@/components/ErrorModal";
import SpinnerLoader from "@/components/SpinnerLoader";
import SuccessModal from "@/components/SuccessModal";
import { getUserProfile } from "@/context/actions/user/getUserProfile";
import GoogleLogin from "react-google-login";
import { signInWithGoogle } from "@/context/actions/auth/signInWithGoogle";
import { useRouter } from "next/router";
import { API_URL } from "@/utils/url";
import { joinDiscussion } from "@/context/actions/discussion/joinDiscussion";
import { loginWithCode } from "@/context/actions/auth/loginWithCode";
import cancel_white from "../../../public/static/icons/cancel_white.svg";
import arrow_left_white from "../../../public/static/icons/arrow_left_white.svg";
import google from "../../../public/static/icons/google.svg";

const LoginPageWithCode = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [userId, setUserId] = useState(null);
  const [accessToken, setAccessToken] = useState("");

  const {
    authDispatch,
    authState: {
      auth: { loginLoading, loginData, loginSuccess, loginError },
    },
  } = useContext(GlobalContext);
  const {
    userDispatch,
    userState: {
      user: { loading, profileData },
    },
  } = useContext(GlobalContext);
  const {
    discussionDispatch,
    discussionState: {
      discussion: { discussionData, joinData },
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setAccessToken(accessToken);
  }, []);
  useEffect(() => {
    if (accessToken !== "") {
      getUserProfile(API_URL, accessToken)(userDispatch);
    }
  }, [accessToken]);
  useEffect(() => {
    if (profileData !== null) {
      const { _id } = profileData;
      setUserId(_id);
    }
  }, [profileData]);

  useEffect(() => {
    setLoginErrorMessage(loginError);
    if (loginData !== null) {
      const access_token = loginData;
      localStorage.setItem("accessToken", access_token);
      setAccessToken(access_token);
      if (userId !== null) {
        console.log(userId);
        joinDiscussion(API_URL, access_token, userId, id)(discussionDispatch);
      }
      // location.replace(`/discussions/view-discussion/${id}`);
      // location.replace(`/discussions`);
    }
    setEmail("");
    setPassword("");
  }, [loginError, loginSuccess, loginData, profileData]);
  console.log(joinData);
  useEffect(() => {
    if (joinData !== null) {
      location.replace(`/discussions/view-discussion/${joinData}`);
    }
  }, [joinData]);

  useEffect(() => {
    if (validateEmail(email) && password.length >= 8) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const passwordHandler = () => {
    if (!validatePassword(password)) {
      setPasswordError(
        "At least 8 characters,  include an uppercase, a lowercase, a number and a special character."
      );
    } else {
      setPasswordError("");
    }
  };
  const emailBlurHandler = () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = async (evt) => {
    evt.preventDefault();

    const user = {
      email,
      password,
    };
    await loginWithCode(API_URL, user)(authDispatch);
    await getUserProfile(API_URL, accessToken)(userDispatch);
  };
  const signInWithGoogleHandler = () => {
    signInWithGoogle(API_URL)(authDispatch);
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
                  src={cancel_white.src}
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
                  src={arrow_left_white.src}
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
            {/* <form onSubmit={handleLogin}> */}
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
            <div className="mb-80">
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

            <button
              className="h-48 text-primary-darkGreen  w-full mb-16  flex justify-center items-center bg-white-white rounded  shadow-md gap-8"
              onClick={signInWithGoogleHandler}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={google.src}
                  alt="google Icon"
                  draggable="false"
                  layout="fixed"
                  width="20"
                  height="20"
                />
              </div>
              <h6>Sign in with Google</h6>
            </button>

            <button
              className="btn h-48 w-full mb-16 text-md "
              disabled={isDisabled}
              onClick={handleLogin}
            >
              {loginLoading ? (
                <div className="flex justify-center items-center">
                  <SpinnerLoader />
                </div>
              ) : (
                "Log in"
              )}
            </button>
            {/* </form> */}
            <p className="mb-24 text-black-analText">
              If you don&#39;t have an account,{" "}
              <Link passHref href={`/auth/sign-up/${id}`}>
                <button className=" text-primary-darkGreen font-medium">
                  Sign up
                </button>
              </Link>
            </p>
          </div>
        </div>
        {loginSuccess && (
          <SuccessModal title="Log in Successful" subTitle="Welcome to Inso." />
        )}
        {loginError && (
          <ErrorModal title="Unable to log in." subTitle={loginErrorMessage} />
        )}
      </div>
    </RegLayout>
  );
};

export default LoginPageWithCode;

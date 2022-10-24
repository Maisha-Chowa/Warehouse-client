import { async } from "@firebase/util";
import React, { useRef } from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // console.log(from);
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading || loadingG || sending) {
    return <Loading></Loading>;
  }
  if (user || userG) {
    navigate(from, { replace: true });
  }
  if (error || errorG) {
    errorElement = <p>Error: {error?.message}</p>;
  }
  const navigateRegister = () => {
    navigate("/register");
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      console.log(email);
      toast("Mail Sent");
    } else {
      toast("Please enter your email address ");
    }
  };
  return (
    <section>
      <h2 className="text-center text-5xl text-indigo-700 mt-6">Login</h2>
      <div className=" flex justify-center m-10">
        <div className="block p-6 rounded-lg shadow-lg bg-white mx-w-96">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <label
                for="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                ref={emailRef}
                type="email"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-6">
              <label
                for="exampleInputPassword2"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="exampleCheck2"
                >
                  Remember me
                </label>
              </div>
              <button
                onClick={resetPassword}
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-indigo-900
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-rose-600 hover:shadow-lg
      focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-rose-600 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Sign in
            </button>
            <p class="text-gray-800 mt-6 text-center">
              Not a member?
              <Link
                to="/register"
                onClick={navigateRegister}
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Register
              </Link>
            </p>
          </form>
          {errorElement}
          <p className="text-center p-4">or</p>
          <div className="border-t-2 border-indigo-500 p-4"></div>
          <button
            onClick={handleGoogleSignIn}
            type="submit"
            className="
      w-full
      mb-6
      px-6
      py-2.5
      bg-indigo-900
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-rose-600 hover:shadow-lg
      focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-rose-600 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign in with Google
          </button>
          <button
            type="submit"
            className="
      w-full
      mb-6
      px-6
      py-2.5
      bg-indigo-900
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-rose-600 hover:shadow-lg
      focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-rose-600 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign in Facebook
          </button>
          <button
            type="submit"
            className="
      w-full
      mb-6
      px-6
      py-2.5
      bg-indigo-900
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-rose-600 hover:shadow-lg
      focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-rose-600 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign in Twitter
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;

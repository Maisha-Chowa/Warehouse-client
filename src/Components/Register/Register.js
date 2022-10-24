import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading) {
    return <Loading></Loading>;
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const fname = firstNameRef.current.value;
    const lname = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
    // firstNameRef.current.value = " ";
    // lastNameRef.current.value = " ";
    emailRef.current.value = " ";
    passwordRef.current.value = " ";
    //console.log(error.message);
  };
  //console.log(error.message);

  return (
    <section>
      <h2 className="text-center text-5xl text-indigo-700 mt-6">Register</h2>
      <div className=" flex justify-center m-10">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-96">
          <form onSubmit={handleRegister}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  type="text"
                  ref={firstNameRef}
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
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  ref={lastNameRef}
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
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                ref={emailRef}
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
                id="exampleInput125"
                placeholder="Email address"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                ref={passwordRef}
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
                id="exampleInput126"
                placeholder="Password"
                required
              />
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
              Sign up
            </button>
            <p className="text-gray-800 mt-6 text-center">
              Already a member? Go to
              <Link
                to="/login"
                onClick={navigateLogin}
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

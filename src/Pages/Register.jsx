import React, { useContext } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/animate/Login Leady.json";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(name, email, password);
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form submitted!");
  //   };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google clicked!");
  };

  const handleGitHubSignIn = () => {
    console.log("Sign in with GitHub clicked!");
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 md:px-16">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Lottie
          animationData={groovyWalkAnimation}
          loop={true}
          className="w-80 md:w-[420px]"
        />
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md md:w-1/2">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
        <div className="mt-6 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          <div className="px-3 text-gray-500 dark:text-gray-400 text-sm">
            OR
          </div>
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="mt-6 space-y-3">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12.0003 4.4172C14.1503 4.4172 15.8203 5.1762 17.0003 6.2992L20.0003 3.2922C17.9503 1.2202 15.1903 0.0432001 12.0003 0.0432001C7.84033 0.0432001 4.16033 2.5082 2.37033 6.0202L5.61033 8.6012C6.54033 6.0082 9.04033 4.4172 12.0003 4.4172Z"
                fill="#EA4335"
              ></path>
              <path
                d="M23.9532 12.0002C23.9532 11.1272 23.8812 10.3202 23.7142 9.5372H12.0002V14.2882H18.7802C18.4742 15.9012 17.5042 17.2662 16.0352 18.2912L16.0392 18.2972L19.3442 20.8992L19.4622 20.9142C21.6662 18.8102 22.9532 15.6562 22.9532 12.0002Z"
                fill="#4285F4"
              ></path>
              <path
                d="M5.60998 15.3999C5.32298 14.5379 5.15398 13.6809 5.15398 12.0009C5.15398 10.3199 5.32298 9.46292 5.60198 8.60092L2.36998 6.01992C1.60398 7.50292 1.15398 9.17192 1.15398 12.0009C1.15398 14.8299 1.60398 16.4979 2.37098 17.9809L5.60998 15.3999Z"
                fill="#FBBC04"
              ></path>
              <path
                d="M12.0004 23.9542C15.2404 23.9542 17.9904 22.8642 19.9504 20.8922L16.0394 18.2972C14.9004 19.0492 13.6214 19.5072 12.0004 19.5072C9.04035 19.5072 6.54035 17.9162 5.61035 15.3232L2.37035 17.9042C4.16035 21.4172 7.84035 23.9542 12.0004 23.9542Z"
                fill="#34A853"
              ></path>
            </svg>
            Sign in with Google
          </button>

          <button
            onClick={handleGitHubSignIn}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2z"></path>
            </svg>
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

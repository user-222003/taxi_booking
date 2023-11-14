import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, auth, provider } from "../../utils/firebase";
const Login = ({ setUser }: any) => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        user.displayName?.length !== 0 ? setUser(false) : setUser(true);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="w-full h-screen gap-20 flex items-center justify-center flex-col">
      <form className="flex flex-col gap-2 border-2 px-3 py-6 rounded-xl">
        <h2 className="font-semibold text-yellow-300 text-center">
          Login Page
        </h2>
        <label htmlFor="name">Enter Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="text-black"
        />
        <button type="submit" className="bg-green-700 p-2 rounded-2xl">
          Submit
        </button>
      </form>
      <button
        onClick={() => handleLogin()}
        className="bg-blue-600 p-2 rounded-xl"
      >
        SignIn With Google
      </button>
    </div>
  );
};

export default Login;

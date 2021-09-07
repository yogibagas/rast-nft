import React from "react";
import * as FaIcons from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Login() {
    const action = "/user/example/edit/"
  return (
    <div className="flex flex-col py-32">
      <div className="box__wrapper w-1/4 mx-auto shadow-box py-12 px-16 space-y-8 items-center ">
        <div className="top__text text-center font-bold">
          Join The Community as an Artist With The Heart of a Lion
        </div>
        <form className="body__form flex flex-col items-center space-y-4" action={action} method={"PUT"}>
            <label className="input-group flex flex-row border-b-1 border-yellow-rasta w-full space-x-2 px-2 py-2 items-center">
                    <div className="icon__user"><FaIcons.FaUserCircle className="fill-current text-gray-600"/></div>
                    <div className="input__field flex-grow-1">
                        <input type="text" className="user focus:outline-none focus:border-none" placeholder="Username"/>
                    </div>
            </label>
            <label className="input-group flex flex-row border-b-1 border-yellow-rasta w-full space-x-2 px-2 py-2 items-center">
                    <div className="icon__user"><FaIcons.FaLock className="fill-current text-gray-600"/></div>
                    <div className="input__field flex-grow-1">
                        <input type="password" className="user focus:outline-none focus:border-none" placeholder="Password"/>
                    </div>
            </label>
            <button className="w-full bg-gradient-to-l from-green-rasta to-yellow-rasta rounded-md text-white py-2">
                Log In
            </button>
            <div className="text">
                <p>You don't Have an account yet? </p>
                <Link to={"/"} className="text-yellow-rasta">Request a Collaboration here</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return (
        <div className="App">
            <section className="min-h-screen flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg bg-gray-100 sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Sign in
                            </h1>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                            </div>
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <a href="#" className="hover:underline">Forgot password?</a>
                        </div>
                        <div className="text-center mt-12">
                            <span>
                                Don't have an account?
                            </span>
                            <Link to="/CreateAccount" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;
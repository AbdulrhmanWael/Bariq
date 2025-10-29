import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
    
    <div className=" flex flex-col justify-center py-12">
      
        <div className="h-[250px] bg-pink-200 flex flex-col items-center justify-center text-center px-4">
            <p className="text-5xl font-semibold text-black mb-4">Sign Up</p>
            <p className="text-lg text-gray-900 max-w-lg">
           Craete Your Account Now!
            </p>
        </div>

        <div className="mt-8 mx-auto w-full max-w-md ">
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-md font-medium text-gray-700">
                       Full Name
                    </label>
                    <div className="mt-1">
                        <input id="name" name="name" type="text" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:border-pink-500 focus:outline-none sm:text-sm h-[50px]"
                            placeholder="Enter your Name"/>
                    </div>
                </div>
                 <div>
                    <label htmlFor="email" className="block text-md font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:border-pink-500 focus:outline-none sm:text-sm h-[50px]"
                            placeholder="Enter your email address"/>
                    </div>
                </div>
                 <div>
                    <label htmlFor="password" className="block text-md font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:border-pink-500 focus:outline-none sm:text-sm h-[50px]"
                            placeholder="Enter your password"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-md font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:border-pink-500 focus:outline-none sm:text-sm h-[50px]"
                            placeholder="Confirm your password"/>
                    </div>
                </div>


                
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className="group relative w-full flex items-center justify-center te py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring-pink-500 h-[50px]">
                        Sign Up
                    </button>
                </div>
            </form>




            <div className="mt-6">

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-100 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                        <a href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>

                    <div>
                        <a href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <i className="fa-brands fa-google"></i>
                        </a>
                    </div>
                    
                    
                </div>
                    <div className=" flex justify-center text-md">
                        <span className="py-5 ">
                          Already have an account?
                        </span>
                        <span  className="p-5 text-pink-600 ">
                            <a href="./pages/Signin"> Sign In </a>
                        </span>
                    </div>
            </div>
        </div>
    </div>


    <div className="w-full space-y-5 lg:space-y-10">
        <div className="text-center text-2xl text-gray-900 ">Why Craete an Account?</div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 w-full">
    
                <div className="flex flex-col items-center text-center space-y-4 py-12">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>

                     </div>
                    <div>
                        <p className="text-lg font-semibold">Save Your Designs</p>
                        <p className="text-gray-600 max-w-xs py-5">Create and save multiple design ideas and return to them anytime.</p>
                     </div>
                 </div>


                <div className="flex flex-col items-center text-center space-y-4 py-12">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                    </div>
                    <div>
                        <p className="text-lg font-semibold"> Track Your Orders</p>
                        <p className="text-gray-600 max-w-xs py-5">Easily view and track all your past and current orders in one place.</p>
                    </div>
                </div>


                <div className="flex flex-col items-center text-center space-y-4 py-12">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                         </svg>

                    </div>
                    <div>
                        <p className="text-lg font-semibold">Exclusive Offers</p>
                        <p className="text-gray-600 max-w-xs py-5">Receive special promotions, early access to new designs, and personalized recommendations.</p>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </div>
    
  );
};

export default Signup;

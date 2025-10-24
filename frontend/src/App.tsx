import React from 'react';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import myImage from './images/image.jpg';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';





function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 

      {/* HOME */}
      <main>

        <section className="mt-12 sm:mt-6 lg:mt-1 w-full px-0 py-0 bg-pink-200">

    <div
        className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row ">
        <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Design Your Own </span>
                <span className="block text-pink-600 xl:inline">Custom Jewelrys</span>
            </h1>
            <p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Create one-of-a-kind charms that tell your unique story. Choose shapes, materials, colors, and add personal engravings.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                    <a href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                       Start Designing. 
                    </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        Shop Collection
                    </a>
                </div>
            </div>
        </div>

        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={myImage} alt="" />
        </div>
        
    </div>
    </section>





    <div className="w-full space-y-5 lg:space-y-10">
        <div className="text-center text-4xl text-gray-900 font-semibold">Why Choose bariq ?</div>
        <div  className=" text-lg text-gray-600 max-w-md text-center mx-auto">We combine traditional craftsmanship with modern technology to create unique jewelry pieces designed by you. </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 w-full">
    
                <div className="flex flex-col items-center text-center space-y-4 py-12 bg-gray-200 m-10 rounded">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>

                     </div>
                    <div>
                        <p className="text-lg font-semibold">Custom Designs</p>
                        <p className="text-gray-600 max-w-xs py-5">Create jewelry that's uniquely yours with our interactive design tool. Choose materials, shapes, and add personal engravings.</p>
                     </div>
                 </div>


                <div className="flex flex-col items-center text-center space-y-4 py-12  bg-gray-200 m-10 rounded">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>

                      
                        

                    </div>
                    <div>
                        <p className="text-lg font-semibold"> Perfect Gifts </p>
                        <p className="text-gray-600 max-w-xs py-5">Design meaningful gifts for loved ones. Save your designs and send them directly as presents.</p>
                    </div>
                </div>


                <div className="flex flex-col items-center text-center space-y-4 py-12  bg-gray-200 m-10 rounded">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>


                    </div>
                    <div>
                        <p className="text-lg font-semibold">Quality Craftsmanship</p>
                        <p className="text-gray-600 max-w-xs py-5"> Each piece is handcrafted by skilled artisans using premium materials to ensure exceptional quality.</p>
                    </div>
                </div>
            </div>
        </div>





        <div className="w-full space-y-5 lg:space-y-10 bg-gray-200 my-10">
        <div className="text-center text-4xl text-gray-900 pt-5 font-semibold">How It Works ?</div>
          <div  className=" text-lg text-gray-600 text-center">Creating your custom jewelry is simple with our easy-to-use design process. </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 w-full">
    
                <div className="flex flex-col items-center text-center space-y-4 py-12">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                        <span>1</span>

                     </div>
                    <div>
                        <p className="text-lg font-semibold">Design</p>
                        <p className="text-gray-600 max-w-xs py-5">Use our interactive tool to create your custom charm with your choice of shapes, materials, and engravings.</p>
                     </div>
                 </div>


                 <div className="flex flex-col items-center text-center space-y-4 py-12">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                        <span>2</span>

                     </div>
                    <div>
                        <p className="text-lg font-semibold">Submit</p>
                        <p className="text-gray-600 max-w-xs py-5">Review your design in 3D preview and submit it for approval once you're satisfied.</p>
                     </div>
                 </div>


                <div className="flex flex-col items-center text-center space-y-4 py-12">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                        <span>3</span>

                    </div>
                    <div>
                        <p className="text-lg font-semibold">Craft</p>
                        <p className="text-gray-600 max-w-xs py-5">Our skilled artisans handcraft your unique piece with attention to every detail.</p>
                    </div>
                </div>


                <div className="flex flex-col items-center text-center space-y-4 py-12">
                    <div className="bg-pink-200 rounded-full p-6 flex items-center justify-center">
                       <span>4</span>

                    </div>
                    <div>
                        <p className="text-lg font-semibold">Delivery</p>
                        <p className="text-gray-600 max-w-xs py-5">Your custom jewelry is carefully packaged and delivered to your doorstep.</p>
                    </div>
                </div>
            </div>
        </div>
      







       <div className="w-full space-y-5 lg:space-y-10 my-5 px-5">
        <div className=" text-4xl text-gray-900 font-semibold ">Featured Collection</div>
        
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full">
    
                <div className="flex flex-col items-center text-center space-y-4 py-12">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src={p1} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-lg font-semibold tracking-tight text-gray-900">Golden Leaf Pendant</h5>
                        </a>
                       
                        <div className="flex items-center justify-between">
                        <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">5.0</span>

                            <span className="text-xl font-bold text-gray-900">$120</span>
                            <a href="#" className=" m-3 text-white bg-pink-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Add to cart</a>
                        </div>
                    </div>
                </div>

                 </div>


                <div className="flex flex-col items-center text-center space-y-4 py-12">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src={p2} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-lg font-semibold tracking-tight text-gray-900">Silver Chain Bracelet</h5>
                        </a>
                       
                        <div className="flex items-center justify-between">
                           <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">4.5</span>

                            <span className="text-xl font-bold text-gray-900 ">$75</span>
                            <a href="#" className=" m-3 text-white bg-pink-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Add to cart</a>
                        </div>
                    </div>
                </div>

                 </div>



                 <div className="flex flex-col items-center text-center space-y-4 py-12">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src={p3} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-lg font-semibold tracking-tight text-gray-900">Rose Gold Hoops</h5>
                        </a>
                       
                        <div className="flex items-center justify-between">
                           <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">3.0</span>

                            <span className="text-xl font-bold text-gray-900 ">$50</span>
                            <a href="#" className=" m-3 text-white bg-pink-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Add to cart</a>
                        </div>
                    </div>
                </div>

                 </div>


                   <div className="flex flex-col items-center text-center space-y-4 py-12">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src={p4} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-lg font-semibold tracking-tight text-gray-900">Personalized Initial Charm</h5>
                        </a>
                       
                        <div className="flex items-center justify-between">
                           <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">4.0</span>

                            <span className="text-xl font-bold text-gray-900 ">$60</span>
                            <a href="#" className=" m-3 text-white bg-pink-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Add to cart</a>
                        </div>
                    </div>
                </div>
                 <a
                  href="#"
                  className="block text-lg text-pink-900 font-semibold text-right hover:underline">
                  See more 
                </a>

                 </div>
            </div>
        </div>




    <div className="w-full space-y-5 lg:space-y-10 bg-gray-100">
      <div className="text-center text-4xl text-gray-900 font-semibold pt-10">
        What Our Customers Say
      </div>

      <div className="text-lg text-gray-600 max-w-md text-center mx-auto ">
      Hear from customers who have created their own unique pieces with bariq.
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 w-full">

        {/* 1️⃣ First Review */}
        <div className="flex flex-col items-center text-center space-y-4 py-5 m-10 rounded">
          <div className="flex flex-col justify-between rounded-md border border-neutral-800 p-8 shadow-sm max-w-sm mx-auto">

            <div className="text-violet-500 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-pink-500"
                  width="20" height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="black"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z" />
                </svg>
              ))}
            </div>

            <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide">
              The quality of the jewelry is outstanding! I was able to customize every detail, and the final piece looks even better than I imagined.
            </p>

            <div className="mt-6 flex items-center gap-6">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/women/44.jpg"
                width="50"
                height="50"
                loading="lazy"
                className="h-10 w-10 rounded-full shadow-sm border border-neutral-800"
              />
              <div>
                <p className="leading-relaxed tracking-wide text-gray-600">Sophie Turner</p>
                <p className="text-xs leading-relaxed tracking-wide text-gray-500">Fashion Blogger</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2️⃣ Second Review */}
        <div className="flex flex-col items-center text-center space-y-4 py-5 m-10 rounded">
          <div className="flex flex-col justify-between rounded-md border border-neutral-800 p-8 shadow-sm max-w-sm mx-auto">

            <div className="text-violet-500 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-pink-500"
                  width="20" height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="black"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z" />
                </svg>
              ))}
            </div>

            <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide ">
              Bariq made the whole process so smooth. Their customer service is amazing, and the delivery was faster than expected!
            </p>

            <div className="mt-6 flex items-center gap-6">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/men/15.jpg"
                width="50"
                height="50"
                loading="lazy"
                className="h-10 w-10 rounded-full shadow-sm border border-neutral-800"
              />
              <div>
                <p className="leading-relaxed tracking-wide text-gray-600">Daniel Carter</p>
                <p className="text-xs leading-relaxed tracking-wide text-gray-500">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3️⃣ Third Review */}
        <div className="flex flex-col items-center text-center space-y-4 py-5 m-10 rounded">
          <div className="flex flex-col justify-between rounded-md border border-neutral-800 p-8 shadow-sm max-w-sm mx-auto">

            <div className="text-violet-500 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-pink-500"
                  width="20" height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="black"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z" />
                </svg>
              ))}
            </div>

            <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide ">
              I love how Bariq blends traditional artistry with modern design tools. The customization options make every piece feel truly personal.
            </p>

            <div className="mt-6 flex items-center gap-6">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/women/28.jpg"
                width="50"
                height="50"
                loading="lazy"
                className="h-10 w-10 rounded-full shadow-sm border border-neutral-800"
              />
              <div>
                <p className="leading-relaxed tracking-wide text-gray-600">Aisha Malik</p>
                <p className="text-xs leading-relaxed tracking-wide text-gray-500">Jewelry Designer</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



    <div className="h-[350px] bg-pink-600 flex flex-col items-center justify-center text-center px-4">
            <p className="text-5xl font-semibold text-white mb-4">Ready to Create Your Unique Piece?</p>
            <p className="text-lg text-gray-300 max-w-lg pb-10">
            Start designing your custom charm today and bring your vision to life with our interactive design tool.
            </p>

            <a href="https://example.com" className="inline-block bg-white text-pink-400 px-4 py-2 rounded-lg hover:bg-pink-900  hover:text-white transition">
              Start Designing Now
            </a>

        </div>




         <div className="w-full space-y-5 lg:space-y-10 ">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 w-full">
    
                <div className="flex flex-col items-center text-center space-y-4 py-5">
                    <div className=" rounded-full pt-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-pink-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                        </svg>


                     </div>
                    <div>
                        <p className="text-sm font-semibold">Free Shipping</p>
                        <p className="text-xs text-gray-600 max-w-xs ">On orders over $100</p>
                     </div>
                 </div>


                 <div className="flex flex-col items-center text-center space-y-4 py-2">
                    <div className=" rounded-full pt-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-pink-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>


                     </div>
                    <div>
                        <p className="text-sm font-semibold">Secure Payment</p>
                        <p className="text-xs text-gray-600 max-w-xs ">100% secure transactions</p>
                     </div>
                 </div>


                <div className="flex flex-col items-center text-center space-y-4 py-2">
                    <div className=" rounded-full pt-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-pink-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>


                    </div>
                    <div>
                        <p className="text-sm font-semibold">Gift Packaging</p>
                        <p className="text-xs text-gray-600 max-w-xs ">Special gift wrapping</p>
                    </div>
                </div>


                <div className="flex flex-col items-center text-center space-y-4 py-2">
                    <div className=" rounded-full pt-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-pink-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>


                    </div>
                    <div>
                        <p className="text-sm font-semibold">Quality Guarantee</p>
                        <p className=" text-xs text-gray-600 max-w-xs ">30-day satisfaction guarantee</p>
                    </div>
                </div>
            </div>
        </div>
      


          
        



        



      </main>

      <Footer /> 
    </div>
  );
}


export default App;

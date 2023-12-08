// Header.js
import React from 'react';
import backgroundImage from '../assets/image/home.jpg'
import logo from '../assets/logo.png'
function Header() {
  return (
     <section class="w-[100%] h-[50vh] sm:h-[50vh] xs:h-[50vh] xl:h-[100vh] lg:h-[100vh] 2xl:h-[100vh]   bg-center bg-cover" style={{
        backgroundImage: `url(${backgroundImage})`, // Path from public folder
      }}>
        <div class="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
        <header class="max-w-[1170px] mx-auto ">
            <div class="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px]  items-center">
                <figure>
                    <img src={logo} class="xl:w-[200px] 2xl:w-[200px] lg:w-[200px] md:w-[200px] xs:w-[200px]"/>
                </figure>
                <div class="flex justify-end gap-7">
                    <div class="relative">
                        <i class="fa-solid fa-globe text-white absolute top-[12px] left-[6px]"></i>
                     <select class="bg-[black] text-white border-[2px] p-[5px_30px] rounded-[5px] h-[40px]">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                     </select>
                    </div>
                    <button class="bg-red-500 text-white p-[5px_20px] h-[40px]  rounded-[5px]">
                        Sign in
                    </button>
                </div>
            </div>
         </header>
         <div class="max-w-[1170px] mx-auto sm:py-[150px] py-[50px] text-center">
                <h1 class="text-4xl text-white font-bold sm:text-[50px]">The biggest Indian hits. Ready to watch here from ₹149.</h1>
                <h4 class="text-[25px] text-white  py-[15px]">Join today. Cancel anytime.</h4>
                <p class="text-[25px] text-white ">Ready to watch? Enter your email to create or restart your membership.</p>
                <div class="max-w-[700px] mx-auto mt-[30px]">
                   <form class="grid sm:grid-cols-[70%_auto] gap-6 sm:grid-cols-1 xs:px-[20px]">
                      <input type="text" class="bg-[transparent] border-[1px] border-[#ccc] h-[50px]  pl-[20px] font-bold rounded-[5px]" placeholder="Email Address"/>
                      <button class="bg-red-600 xs:py-[20px] text-2xl text-white font-bold rounded-[10px]">Get Started </button>
                   </form>
                </div>
         </div>
        </div>
    </section>
  );
}

export default Header;

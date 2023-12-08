import React from 'react'
import logo from '../assets/logo.png'
export const Footer = () => {
  return (
    <footer class="w-[100%]  border-t-[7px] border-t-[#444242] bg-black sm:py-[30px] py-[50px] " >
        <div class="max-w-[1170px] mx-auto px-[20px]">
            <h1 class="text-white text-[18px]">Questions? Call <a class="underline" href="tel:000-800-919-1694">000-800-919-1694</a></h1>
        <div class="py-[30px] grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1">
            <div class="text-white">
               <ul class="">
                <li class="mb-[10px]"><a class="underline">FAQ</a></li>
                <li class="mb-[10px]"><a class="underline">Investor Relations</a></li>
                <li class="mb-[10px]"><a class="underline">Privacy</a></li>
                <li class="mb-[10px]"><a class="underline">Speed Test</a></li>
               </ul>
            </div>
            <div class="text-white">
               <ul class="">
                <li class="mb-[10px]"><a class="underline">FAQ</a></li>
                <li class="mb-[10px]"><a class="underline">Investor Relations</a></li>
                <li class="mb-[10px]"><a class="underline">Privacy</a></li>
                <li class="mb-[10px]"><a class="underline">Speed Test</a></li>
               </ul>
            </div>
            <div class="text-white">
               <ul class="">
                <li class="mb-[10px]"><a class="underline">FAQ</a></li>
                <li class="mb-[10px]"><a class="underline">Investor Relations</a></li>
                <li class="mb-[10px]"><a class="underline">Privacy</a></li>
                <li class="mb-[10px]"><a class="underline">Speed Test</a></li>
               </ul>
            </div>
            <div class="text-white">
               <ul class="">
                <li class="mb-[10px]"><a class="underline">FAQ</a></li>
                <li class="mb-[10px]"><a class="underline">Investor Relations</a></li>
                <li class="mb-[10px]"><a class="underline">Privacy</a></li>
                <li class="mb-[10px]"><a class="underline">Speed Test</a></li>
               </ul>
            </div>
            <div class="pt-[40px]">
                    <div class="relative">
                        <i class="fa-solid fa-globe text-white absolute top-[12px] left-[6px]"></i>
                     <select class="bg-[black] text-white border-[2px] p-[5px_30px] rounded-[5px] h-[40px]">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                     </select>
                    </div>
                    <figure >
                        <img src={logo} class="xl:w-[100px] 2xl:w-[100px] lg:w-[100px] md:w-[100px] xs:w-[50px] sm:w-[70px]"/>
                    </figure>
            </div>
        </div>
        </div>
        
    </footer>
  )
}

import React from 'react'
import mobile from '../assets/image/mobile.jpg'
import boxshot from '../assets/image/boxshot.png'

export const Download = () => {
  return (
    <section class="w-[100%]  border-t-[7px] border-t-[#444242] bg-black sm:py-[100px] py-[50px] " >
        <div class="max-w-[1170px] mx-auto px-[20px]">
            <div class="grid sm:grid-cols-2 sm:grid-cols-1  items-center">
                <figure class=" relative sm:order-1 order-2">
                    <img class="relative" src={mobile} alt=""/>
                    <div class="bg-[transparent] border-[1px] border-[#ccc] h-[90px] px-5 sm:w-[60%] w-[80%] sm:left-[20%] left-[10%] bottom-[10px] absolute grid grid-cols-[70%_auto] text-center rounded-[10px] gap-6">
                        <div class="grid grid-cols-[25%_auto] items-center">
                          <img src={boxshot} class="m-[2px]" alt=""/>
                          <div class="text-white text-center mx-auto ">
                            <h3 class="font-bold">Stringer Things</h3>
                            <span class="text-blue-500">Downloading.....</span>
                          </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-download text-red-500 text-4xl py-5"></i>
                        </div>
                    </div>
                </figure>
                <div class="text-white sm:order-2 order-1" >
                   <h1 class="sm:text-[50px] text-[40px] text-white font-bold sm:text-[50px]">Download your shows to watch offline</h1>
                   <p class="sm:text-[25px] text-[20px] pt-[30px]">Save your favourites easily and always have something to watch.</p>
                </div>
                
            </div>
        </div>
     </section>
  )
}

import React from 'react'
import k from '../assets/image/k.png'
export const Kids = () => {
  return (
    <section class="w-[100%]  border-t-[7px] border-t-[#444242] bg-black sm:py-[100px] py-[50px] " >
        <div class="max-w-[1170px] mx-auto px-[20px]">
            <div class="grid sm:grid-cols-2 sm:grid-cols-1  items-center">
                <figure class=" relative sm:order-1 order-2">
                    <img class="relative" src={k} alt=""/>
                </figure>
                <div class="text-white sm:order-2 order-1" >
                   <h1 class="sm:text-[50px] text-[40px] text-white font-bold sm:text-[50px]">Create profiles for kids </h1>
                   <p class="sm:text-[25px] text-[20px] pt-[30px]">Send kids on adventures with their favourite characters in a space made just for them — free with your membership. </p>
                </div>
                
            </div>
        </div>
     </section>

  )
}

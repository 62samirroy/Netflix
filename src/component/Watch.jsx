import React from 'react'
import device from '../assets/image/device.png'
export const Watch = () => {
    return (
        <section class="w-[100%]  border-t-[7px] border-t-[#444242] bg-black sm:py-[50px] py-[50px] " >
            <div class="max-w-[1170px] mx-auto px-[20px]">
                <div class="grid sm:grid-cols-2 sm:grid-cols-1  items-center">
                    <div class="text-white" >
                        <h1 class="sm:text-[50px] text-[40px] text-white font-bold sm:text-[50px]">Watch everywhere</h1>
                        <p class="sm:text-[25px] text-[20px] pt-[30px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <figure class="relative">
                        <video className="absolute w-[60%] left-[100px] bottom-[40%] z-[1]" autoPlay
                            loop
                            muted>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"  />
                        </video>
                        <img class="relative z-[2]" src={device} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

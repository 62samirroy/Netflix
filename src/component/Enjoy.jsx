import React from 'react'
import tv from '../assets/image/tv.png'
export const Enjoy = () => {
    return (
        <section class="w-[100%]  border-t-[7px] border-t-[#444242] bg-black sm:py-[100px] py-[50px] " >
            <div class="max-w-[1170px] mx-auto px-[20px]">
                <div class="grid sm:grid-cols-2 sm:grid-cols-1  items-center">
                    <div class="text-white" >
                        <h1 class="sm:text-[50px] text-[40px] text-white font-bold sm:text-[50px]">Enjoy on your TV</h1>
                        <p class="sm:text-[25px] text-[20px] pt-[30px]">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <figure class="relative">
                        <video class="absolute w-[80%] left-[80px] bottom-[20%] z-[1]" autoPlay
                            loop
                            muted>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
                        </video>
                        <img class="relative z-[2]" src={tv} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

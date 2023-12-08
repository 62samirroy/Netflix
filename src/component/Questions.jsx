import React from 'react'

export const Questions = () => {
  return (
    <section class="w-[100%]  border-t-[7px] border-t-[#444242] bg-black sm:py-[70px] py-[50px] " >
        <div class="max-w-[1170px] mx-auto px-[20px]">
            <h1 class="sm:text-[50px] text-[40px] text-white font-bold sm:text-[50px] text-center">Frequently Asked Questions</h1>
            <div class="py-[30px]">
                <div class="bg-[#2d2d2d] mb-[12px]">
                  <div class="text-white p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-3000 cursor-pointer	faqQusection"><h3>What is Netflix?</h3><span class="absolute right-[20px] top-[6px] text-6xl">+</span></div> 
                  <div class="text-white text-[20px]  scale-y-0 h-[0px] origin-top duration-300">
                    <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                        </p>
                       <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </p>
                  </div>
                </div>
                <div class="bg-[#2d2d2d] mb-[12px]">
                  <div class="text-white p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-3000 cursor-pointer	faqQusection"><h3>How much does Netflix cost?</h3><span class="absolute right-[20px] top-[6px] text-6xl">+</span></div> 
                  <div class="text-white text-[20px] scale-y-0 h-[0px] origin-top duration-300">
                    <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                    </p>
                  </div>
                </div>
                <div class="bg-[#2d2d2d] mb-[12px]">
                  <div class="text-white p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-3000 cursor-pointer	faqQusection"><h3>Where can I watch?</h3><span class="absolute right-[20px] top-[6px] text-6xl">+</span></div> 
                  <div class="text-white text-[20px] scale-y-0 h-[0px] origin-top duration-300">
                    <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    </p>
                       <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                       </p>
                  </div>
                </div>
                <div class="bg-[#2d2d2d] mb-[12px]">
                  <div class="text-white p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-3000 cursor-pointer	faqQusection"><h3>How do I cancel?</h3><span class="absolute right-[20px] top-[6px] text-6xl">+</span></div> 
                  <div class="text-white text-[20px] scale-y-0 h-[0px] origin-top duration-300">
                    <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </p>
                  </div>
                </div>
                <div class="bg-[#2d2d2d] mb-[12px]">
                  <div class="text-white p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-3000 cursor-pointer	faqQusection"><h3>What can I watch on Netflix?</h3><span class="absolute right-[20px] top-[6px] text-6xl">+</span></div> 
                  <div class="text-white text-[20px] scale-y-0 h-[0px] origin-top duration-300">
                    <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                  </div>
                </div>
                <div class="bg-[#2d2d2d] mb-[12px]">
                  <div class="text-white p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-3000 cursor-pointer	faqQusection"><h3>Is Netflix good for kids?</h3><span class="absolute right-[20px] top-[6px] text-6xl">+</span></div> 
                  <div class="text-white text-[20px] scale-y-0 h-[0px] origin-top duration-300">
                    <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                    </p>
                       <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                    </p>
                  </div>
                </div>
                <div class="max-w-[1170px] mx-auto sm:py-[50px] py-[10px] text-center">
                    <p class="text-[25px] text-white ">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div class="max-w-[700px] mx-auto mt-[30px]">
                       <form class="grid sm:grid-cols-[70%_auto] gap-6 sm:grid-cols-1 xs:px-[20px]">
                          <input type="text" class="bg-[transparent] border-[1px] border-[#ccc] h-[50px]  pl-[20px] font-bold rounded-[5px]" placeholder="Email Address"/>
                          <button class="bg-red-600 xs:py-[20px] text-2xl text-white font-bold rounded-[10px]">Get Started </button>
                       </form>
                    </div>
             </div>
            </div>
        </div>
     </section>
  )
}

import React from "react";


const Hero = () => {
    return (
          <section id="" class="hero pt-20 pb-32">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Transform Your Body, Transform Your Life</h1>
                    <p class="text-xl text-gray-200 mb-8">Premium gym facilities in KRD, Kenya. Join today for just <span class="font-bold">KSH 3,000</span> per month!</p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#membership" class="cta-button bg-black text-white px-8 py-4 font-bold text-lg inline-block text-center">Join Now</a>
                        <a href="#about" class="cta-button bg-white text-black px-8 py-4 font-bold text-lg inline-block text-center">Learn More</a>
                    </div>
                </div>
                <div class="gym-image rounded-lg h-96 hidden md:block"></div>
            </div>
        </div>
    </section>
    );
    
};
export default Hero;
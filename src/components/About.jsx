import React from "react";

const About = () => {
    return (
          <section id="" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold mb-6">About PrimeFit Gym</h2>
                    <p class="text-lg text-gray-700 mb-4">Located in the heart of KRD, PrimeFit Gym is dedicated to helping you achieve your fitness goals. Our modern facility spans over 5,000 square feet and is equipped with the latest training equipment.</p>
                    <p class="text-lg text-gray-700 mb-4">We believe fitness is for everyone, regardless of experience level. Our supportive community and professional staff will help you stay motivated and make consistent progress.</p>
                    <ul class="space-y-2 mb-6">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-black mr-3"></i>
                            <span>24/7 access for all members</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-black mr-3"></i>
                            <span>Locker rooms with showers</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-black mr-3"></i>
                            <span>Free Wi-Fi throughout the facility</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-black mr-3"></i>
                            <span>Nutrition guidance and planning</span>
                        </li>
                    </ul>
                    <a href="#contact" class="inline-block bg-black text-white px-6 py-3 font-bold">Schedule a Tour</a>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64"></div>
                    <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mt-8"></div>
                    <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64"></div>
                    <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mt-8"></div>
                </div>
            </div>
        </div>
    </section>
    );
};
export default About;
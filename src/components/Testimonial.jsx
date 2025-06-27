import React from "react";

const Testimonial = () => {
    return (
        <section id="testimonials" class="py-16 bg-accent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Success Stories</h2>
                <p class="text-lg text-gray-700 max-w-3xl mx-auto">Hear from our members who have transformed their lives at PrimeFit.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="testimonial-card bg-white p-6">
                    <div class="flex items-center mb-4">
                        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"></div>
                        <div class="ml-4">
                            <h4 class="font-bold">James K.</h4>
                            <p class="text-gray-600">Member for 2 years</p>
                        </div>
                    </div>
                    <p class="text-gray-700">"PrimeFit has everything I need - top equipment, great trainers, and an amazing community. Lost 15kg in my first 6 months!"</p>
                </div>
                
                <div class="testimonial-card bg-white p-6">
                    <div class="flex items-center mb-4">
                        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"></div>
                        <div class="ml-4">
                            <h4 class="font-bold">Sarah M.</h4>
                            <p class="text-gray-600">Member for 1 year</p>
                        </div>
                    </div>
                    <p class="text-gray-700">"The group classes are incredible! The energy keeps me motivated and I've made so many friends. Best gym in KRD!"</p>
                </div>
                
                <div class="testimonial-card bg-white p-6">
                    <div class="flex items-center mb-4">
                        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"></div>
                        <div class="ml-4">
                            <h4 class="font-bold">David W.</h4>
                            <p class="text-gray-600">Member for 3 years</p>
                        </div>
                    </div>
                    <p class="text-gray-700">"As a busy professional, the 24/7 access is perfect for my schedule. The trainers helped me create an efficient routine."</p>
                </div>
            </div>
        </div>
    </section>
    );

};
export default Testimonial;
import React from "react";

const Membership = () => {
    return (
        <section id="" class="py-16 bg-accent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Membership Plans</h2>
                <p class="text-lg text-gray-700 max-w-3xl mx-auto">Choose the plan that works best for you. All plans include full access to our facilities and equipment.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="membership-card bg-white p-8 rounded-lg">
                    <h3 class="text-2xl font-bold mb-4">Basic</h3>
                    <div class="text-4xl font-bold mb-4">KSH 3,000<span class="text-lg font-normal">/month</span></div>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>24/7 Gym Access</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>Free Weights Area</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>Cardio Equipment</span>
                        </li>
                        <li class="flex items-center text-gray-400">
                            <i class="fas fa-times mr-3"></i>
                            <span>Group Classes</span>
                        </li>
                        <li class="flex items-center text-gray-400">
                            <i class="fas fa-times mr-3"></i>
                            <span>Personal Training</span>
                        </li>
                    </ul>
                    <a href="#contact" class="cta-button bg-black text-white w-full py-3 text-center font-bold block">Get Started</a>
                </div>
                
                <div class="membership-card bg-white p-8 rounded-lg border-2 border-black relative">
                    <div class="absolute top-0 right-0 bg-black text-white px-4 py-1 font-bold">MOST POPULAR</div>
                    <h3 class="text-2xl font-bold mb-4">Premium</h3>
                    <div class="text-4xl font-bold mb-4">KSH 4,500<span class="text-lg font-normal">/month</span></div>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>All Basic Features</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>Unlimited Group Classes</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>2 Personal Training Sessions</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>Tanning & Hydro Massage</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>10% Supplement Discount</span>
                        </li>
                    </ul>
                    <a href="#contact" class="cta-button bg-black text-white w-full py-3 text-center font-bold block">Get Started</a>
                </div>
                
                <div class="membership-card bg-white p-8 rounded-lg">
                    <h3 class="text-2xl font-bold mb-4">Annual</h3>
                    <div class="text-4xl font-bold mb-4">KSH 36,000<span class="text-lg font-normal">/year</span></div>
                    <p class="mb-4 font-bold">Save 20% with annual membership!</p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>All Premium Features</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>1 Free Month</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>6 Personal Training Sessions</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>20% Supplement Discount</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check text-black mr-3"></i>
                            <span>Free Gym Gear Package</span>
                        </li>
                    </ul>
                    <a href="#contact" class="cta-button bg-black text-white w-full py-3 text-center font-bold block">Get Started</a>
                </div>
            </div>
        </div>
    </section>
    );
};
export default Membership;
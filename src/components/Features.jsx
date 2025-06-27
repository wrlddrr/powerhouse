import React from "react";

const Features = () => {
    return (
        <section class="py-16 bg-accent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Why Choose PrimeFit?</h2>
                <p class="text-lg text-gray-700 max-w-3xl mx-auto">We offer everything you need for your fitness journey in one premium location.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center p-6">
                    <div class="feature-icon mx-auto">
                        <i class="fas fa-dumbbell text-3xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Premium Equipment</h3>
                    <p class="text-gray-700">State-of-the-art machines and free weights for all your training needs.</p>
                </div>
                
                <div class="text-center p-6">
                    <div class="feature-icon mx-auto">
                        <i class="fas fa-users text-3xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Expert Trainers</h3>
                    <p class="text-gray-700">Certified trainers to guide you through personalized workout plans.</p>
                </div>
                
                <div class="text-center p-6">
                    <div class="feature-icon mx-auto">
                        <i class="fas fa-heartbeat text-3xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Group Classes</h3>
                    <p class="text-gray-700">Daily classes including yoga, HIIT, spinning and functional training.</p>
                </div>
            </div>
        </div>
    </section>

    );
};
export default Features;
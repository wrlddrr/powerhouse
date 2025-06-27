import React from "react";

const Suppliments = () => {
    return (
        <section id="" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Premium Supplements</h2>
                <p class="text-lg text-gray-700 max-w-3xl mx-auto">We offer top-quality supplements including creatine, protein, and pre-workouts at competitive prices.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="supplement-card p-6 rounded-lg">
                    <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4"></div>
                    <h3 class="text-xl font-bold mb-2">Creatine Monohydrate</h3>
                    <p class="text-gray-700 mb-4">Pure creatine for increased strength and muscle gains.</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">KSH 1,800</span>
                        <button class="bg-black text-white px-4 py-2 font-bold">Add to Cart</button>
                    </div>
                </div>
                
                <div class="supplement-card p-6 rounded-lg">
                    <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4"></div>
                    <h3 class="text-xl font-bold mb-2">Whey Protein</h3>
                    <p class="text-gray-700 mb-4">24g protein per serving to support muscle recovery.</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">KSH 3,500</span>
                        <button class="bg-black text-white px-4 py-2 font-bold">Add to Cart</button>
                    </div>
                </div>
                
                <div class="supplement-card p-6 rounded-lg">
                    <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4"></div>
                    <h3 class="text-xl font-bold mb-2">Pre-Workout Energizer</h3>
                    <p class="text-gray-700 mb-4">Boost energy, focus and endurance for intense workouts.</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-lg">KSH 2,200</span>
                        <button class="bg-black text-white px-4 py-2 font-bold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};
export default Suppliments;
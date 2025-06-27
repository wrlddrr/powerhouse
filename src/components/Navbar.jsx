import React from "react";

const Navbar = () => {
    return (
      
         <nav class="fixed w-full bg-white z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <div class="flex items-center">
                    <div class="font-bold text-2xl tracking-tight">PRIME<span class="font-normal">FIT</span></div>
                </div>
                
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#home" class="font-medium hover:text-gray-700">Home</a>
                    <a href="#about" class="font-medium hover:text-gray-700">About</a>
                    <a href="#membership" class="font-medium hover:text-gray-700">Membership</a>
                    <a href="#supplements" class="font-medium hover:text-gray-700">Supplements</a>
                    <a href="#testimonials" class="font-medium hover:text-gray-700">Testimonials</a>
                    <a href="#contact" class="font-medium hover:text-gray-700">Contact</a>
                </div>
                
                <div class="md:hidden">
                    <button id="menu-toggle" class="text-black">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
  
        <div id="" class="md:hidden hidden bg-white px-4 py-6 shadow-lg">
            <div class="flex flex-col space-y-4">
                <a href="#home" class="font-medium hover:text-gray-700">Home</a>
                <a href="#about" class="font-medium hover:text-gray-700">About</a>
                <a href="#membership" class="font-medium hover:text-gray-700">Membership</a>
                <a href="#supplements" class="font-medium hover:text-gray-700">Supplements</a>
                <a href="#testimonials" class="font-medium hover:text-gray-700">Testimonials</a>
                <a href="#contact" class="font-medium hover:text-gray-700">Contact</a>
            </div>
        </div>
    </nav>
    );
};
export default Navbar;
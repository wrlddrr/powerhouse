import React from "react";
const Footer = () => {
    return (
         <footer class="bg-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="font-bold text-2xl tracking-tight mb-4">PRIME<span class="font-normal">FIT</span></div>
                    <p class="text-gray-400 mb-4">Your premier fitness destination in KRD, Kenya.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#home" class="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#membership" class="text-gray-400 hover:text-white">Membership</a></li>
                        <li><a href="#supplements" class="text-gray-400 hover:text-white">Supplements</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-4">Services</h3>
                    <ul class="space-y-2">
                        <li class="text-gray-400">Personal Training</li>
                        <li class="text-gray-400">Group Classes</li>
                        <li class="text-gray-400">Nutrition Planning</li>
                        <li class="text-gray-400">Body Composition</li>
                        <li class="text-gray-400">Supplement Store</li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-4">Newsletter</h3>
                    <p class="text-gray-400 mb-4">Subscribe to get special offers and fitness tips.</p>
                    <form class="flex">
                        <input type="email" placeholder="Your email" class="px-4 py-2 w-full rounded-l focus:outline-none" />
                        <button class="bg-white text-black px-4 py-2 rounded-r font-bold">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2023 PrimeFit Gym, KRD Kenya. All rights reserved.</p>
            </div>
        </div>
    </footer>
    );
};
export default Footer;
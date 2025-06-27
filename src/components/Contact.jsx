import React from "react";


const Contact = () => {
    return (
    <section  class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl font-bold mb-6">Get In Touch</h2>
                    <p class="text-lg text-gray-700 mb-8">Have questions? Want to schedule a tour? Contact us and we'll get back to you within 24 hours.</p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-black text-white p-3 rounded-full mr-4">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">Location</h3>
                                <p class="text-gray-700">123 Fitness Street, KRD, Kenya</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-black text-white p-3 rounded-full mr-4">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">Phone</h3>
                                <p class="text-gray-700">+254 712 345 678</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-black text-white p-3 rounded-full mr-4">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">Email</h3>
                                <p class="text-gray-700">info@primefitkrd.co.ke</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-black text-white p-3 rounded-full mr-4">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">Hours</h3>
                                <p class="text-gray-700">Open 24/7 for all members</p>
                                <p class="text-gray-700">Office: Mon-Fri 9AM-6PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <form class="bg-accent p-8 rounded-lg">
                        <div class="mb-6">
                            <label class="block text-gray-700 font-bold mb-2" for="name">Name</label>
                            <input class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" id="name" type="text" placeholder="Your name" />
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
                            <input class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" id="email" type="email" placeholder="your@email.com" />
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-gray-700 font-bold mb-2" for="phone">Phone</label>
                            <input class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" id="phone" type="tel" placeholder="+254" />
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-gray-700 font-bold mb-2" for="message">Message</label>
                            <textarea class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" id="message" rows="4" placeholder="How can we help you?"></textarea>
                        </div>
                        
                        <button class="cta-button bg-black text-white w-full py-4 font-bold">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};
export default Contact;
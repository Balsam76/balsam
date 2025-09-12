import React from 'react';
import { Download, Star, Users, Shield } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-sky-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of users who have already improved their mental health with Balsam. 
              Download now and take the first step towards better well-being.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Person feeling better with mental health support" 
                className="w-full max-w-md mx-auto h-48 object-cover rounded-2xl shadow-lg opacity-90"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-3">
              <Download className="h-6 w-6" />
              <span>Download on Google Play</span>
            </button>
            <button className="group border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Download className="h-6 w-6" />
              <span>Coming Soon to App Store</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-white/20 rounded-full mr-3">
                  <Star className="h-6 w-6 text-yellow-300" />
                </div>
                <span className="text-2xl font-bold text-white">4.8</span>
              </div>
              <p className="text-sky-100">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-white/20 rounded-full mr-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">10K+</span>
              </div>
              <p className="text-sky-100">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-white/20 rounded-full mr-3">
                  <Shield className="h-6 w-6 text-emerald-300" />
                </div>
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <p className="text-sky-100">Secure & Private</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-sky-50 via-white to-emerald-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your pocket companion for{' '}
              <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                mental wellness
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Balsam helps users improve their mental health by offering supportive conversations 
              and personalized guidance in a safe, secure environment.
            </p>
          </div>
          
          <div className="animate-fade-in-up animation-delay-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-3">
                <Download className="h-6 w-6" />
                <span>Download on Google Play</span>
              </button>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Easy to Use</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-600 mt-16">
            <div className="relative max-w-4xl mx-auto">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                alt="Person meditating peacefully in nature" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
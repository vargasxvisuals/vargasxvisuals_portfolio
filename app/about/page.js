"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState('weddings'); // Defaults to weddings

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-800 selection:bg-stone-300 selection:text-stone-900 relative">
      {/* Navigation */}
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-stone-500 transition-colors">
          VARGAS VISUALS
        </Link>
        <Link href="/" className="text-sm uppercase tracking-widest font-medium hover:text-stone-500 transition-colors">
          Back to Portfolio
        </Link>
      </nav>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <div className="relative aspect-[4/5] w-full bg-stone-200 overflow-hidden rounded-sm">
          <Image 
            src="/images/david-portrait.jpg" 
            alt="David Vargas" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Side */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Hi, I'm David.
            </h1>
            <div className="w-12 h-1 bg-stone-800 mb-8"></div>
          </div>
          
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
            <p>
              I am a photographer based right here in the heart of California's Central Valley. For me, photography isn't just about perfectly posed subjects; it's about chasing the golden light, documenting real moments, and capturing the authentic aesthetic of the people and places around me.
            </p>
            <p>
              Having spent time deep on the industry side of camera and technical gear, I know my way around the hardware—but my real passion is what happens in front of the lens. I approach every shoot with the goal of creating warm, timeless visuals that tell your unique story.
            </p>
            <p>
              When I'm not behind the camera or editing a gallery, you can usually find me under the hood of a car doing some DIY wrenching, tracking down the best local spots in the Fresno area, or cheering on the Bulldogs.
            </p>
            <p className="pt-4 font-medium text-stone-800">
              Let's create something great together.
            </p>
          </div>

          <div>
            {/* Trigger Button */}
            <button 
              onClick={() => setIsFormOpen(true)} 
              className="inline-block bg-stone-800 text-stone-50 px-8 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal Overlay */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
          isFormOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Dark blurred background */}
        <div 
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
          onClick={() => setIsFormOpen(false)}
        ></div>
        
        {/* Modal Container */}
        <div 
          className={`bg-[#faf9f6] w-full max-w-2xl p-8 md:p-12 relative shadow-2xl overflow-y-auto max-h-[90vh] transition-all duration-500 ease-out transform ${
            isFormOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
          }`}
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsFormOpen(false)}
            className="absolute top-6 right-6 text-stone-400 hover:text-stone-800 transition-colors text-2xl font-light"
          >
            ✕
          </button>
          
          <div className="text-center mb-10 max-w-lg mx-auto">
            <h2 className="text-4xl italic font-light tracking-tight mb-4">Get In Touch</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              If you're interested in working with me, the best way to reach me is by filling out the inquiry form below. I can't wait to hear from you and document your story!
            </p>
          </div>

          {/* Form Type Selector */}
          <div className="text-center mb-10">
            <span className="block text-xs uppercase tracking-[0.2em] text-stone-400 mb-4">Select a Form</span>
            <div className="flex justify-center space-x-12 font-light italic text-xl text-stone-400">
              <button
                onClick={() => setFormType('weddings')}
                className={`transition-colors ${formType === 'weddings' ? 'text-stone-800' : 'hover:text-stone-600'}`}
              >
                weddings
              </button>
              <button
                onClick={() => setFormType('portraits')}
                className={`transition-colors ${formType === 'portraits' ? 'text-stone-800' : 'hover:text-stone-600'}`}
              >
                portraits
              </button>
            </div>
          </div>
          
          {/* The Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Shared Top Fields */}
              <div>
                <input type="text" placeholder="YOUR NAME (FIRST + LAST)" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
              </div>
              <div>
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
              </div>

              {/* Conditional Fields: Weddings */}
              {formType === 'weddings' && (
                <>
                  <div>
                    <input type="text" placeholder="WEDDING DATE" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
                  </div>
                  <div>
                    <input type="text" placeholder="PHOTOGRAPHY BUDGET" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
                  </div>
                  <div className="md:col-span-2">
                    <input type="text" placeholder="WEDDING VENUE" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
                  </div>
                  <div className="md:col-span-2">
                    <input type="text" placeholder="WHO IS YOUR PLANNER?" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
                  </div>
                </>
              )}

              {/* Conditional Fields: Portraits */}
              {formType === 'portraits' && (
                <>
                  <div>
                    <input type="text" placeholder="REQUESTED DATE" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
                  </div>
                  <div>
                    <input type="text" placeholder="REQUESTED LOCATION" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
                  </div>
                </>
              )}

              {/* Shared Bottom Fields */}
              <div className="md:col-span-2">
                <input type="text" placeholder="HOW DID YOU HEAR ABOUT ME?" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center" />
              </div>
              <div className="md:col-span-2">
                <textarea rows="3" placeholder="TELL ME ALL THE DETAILS" className="w-full bg-transparent border-b border-stone-300 py-3 text-xs uppercase tracking-widest focus:border-stone-800 outline-none transition-colors placeholder:text-stone-400 text-center resize-none"></textarea>
              </div>
            </div>

            <div className="pt-8 flex justify-center">
              <button 
                type="submit" 
                className="bg-[#eeebe6] text-stone-600 px-16 py-5 uppercase tracking-[0.2em] text-xs hover:bg-stone-200 transition-colors"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

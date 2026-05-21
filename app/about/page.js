"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function About() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState('weddings');
  
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        'service_jispdl9',    
        'template_30vz97h',   
        form.current,
        'YaSm_Z0pu5F96Mk6U'     
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          setTimeout(() => {
            setIsFormOpen(false);
            setSubmitStatus(null);
            form.current.reset();
          }, 2000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-800 selection:bg-stone-300 selection:text-stone-900 relative">
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-stone-500 transition-colors">
          VARGAS VISUALS
        </Link>
        <Link href="/" className="text-sm uppercase tracking-widest font-medium hover:text-stone-500 transition-colors">
          Back to Portfolio
        </Link>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] w-full bg-stone-200 overflow-hidden rounded-sm">
          <Image 
            src="/images/david-portrait.jpg" 
            alt="David Vargas" 
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Hi, I'm David.
            </h1>
            <div className="w-12 h-1

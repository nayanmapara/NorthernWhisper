"use client";

import React, { useState, useRef, FormEvent } from 'react';
import { EnvelopeIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import { getPlaneKeyframes } from '@/lib/getPlaneKeyframes';
import { getTrailsKeyframes } from '@/lib/getTrailsKeyframes';

function NewsletterForm() {
  const [input, setInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [active, setActive] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { to, fromTo, set } = gsap;

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const option = selectedOption;
    const button = buttonRef.current;

    if (!email || !option || !button) return;

    if (!active) {
      setActive(true);

      // Animation for plane
      to(button, {
        keyframes: getPlaneKeyframes(set, fromTo, button, setActive, setInput),
      });

      // Animation for trails
      to(button, {
        keyframes: getTrailsKeyframes(button),
      });
    }

    try {
      const response = await fetch('https://db.northernwhisper.tech/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, option }),
      });

      const result = await response.json();

      if (response.ok) {
        switch (result.message) {
          case 'Success':
            setSuccessMessage("We've added you to our waitlist. We'll let you know when we launch!");
            setErrorMessage('');
            break;
          case 'Already subscribed':
            setErrorMessage("You are already added to our waitlist. We'll let you know when we launch!");
            setSuccessMessage('');
            break;
          case 'Updated':
            setSuccessMessage("We've updated your subscription. We'll let you know when we launch!");
            setErrorMessage('');
            break;
          default:
            setErrorMessage("An unexpected error occurred");
            setSuccessMessage('');
        }
      } else {
        throw new Error(result.error || 'Subscription failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setSuccessMessage('');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
        setSuccessMessage('');
      }
    }
  };

  const dismissMessages = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col space-y-8 md:w-[400px]">
      <form className="newsletter-form mt-10 animate-fade-in-3" onSubmit={handleSubmit}>
        <div className="group flex items-center gap-x-4 py-1 pl-4 pr-1 rounded-[9px] bg-[#090D11] hover:bg-[#14171b] shadow-outline-gray hover:shadow-transparent focus-within:bg-[#15141B] focus-within:!shadow-outline-gray-focus transition-all duration-300">
          <EnvelopeIcon className="hidden sm:inline w-6 h-6 text-[#4B4C52] group-focus-within:text-white group-hover:text-white transition-colors duration-300" />
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            type='email' 
            placeholder='Email Address' 
            required
            className="flex-1 text-white text-sm sm:text-base outline-none placeholder-[#4B4C52] group-focus-within:placeholder-white bg-transparent placeholder:transition-colors placeholder:duration-300"
          />
          <button
            ref={buttonRef}
            className={`${
              active && "active"
            } disabled:!bg-[#6D86CB] disabled:grayscale-[65%] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}
            disabled={!input || !selectedOption}
            type="submit"
          >
            <span className="default">Subscribe</span>
            <span className="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Done
            </span>
            <svg className="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className="plane">
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </button>
        </div>

        <div className="text-[#ffffff] flex items-center gap-x-4 py-1 justify-center mt-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="option"
              value="Student"
              checked={selectedOption === "Student"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4"
            />
            <span className="ml-2">Student</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="option"
              value="WorkPermit"
              checked={selectedOption === "WorkPermit"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-4"
            />
            <span className="ml-2">Work Permit</span>
          </label>
        </div>
      </form>

      <div className='relative'>
        {(successMessage || errorMessage) && (
          <div className="flex items-start space-x-2 bg-[#0A0E12] shadow-outline-gray text-white rounded-[9px] py-4 px-6 animate-fade-bottom absolute">
            <div className="h-6 w-6 bg-[#1B2926] flex items-center justify-center rounded-full border border-[#273130] flex-shrink-0">
              {successMessage ? <CheckIcon className="h-4 w-4 text-[#81A89A]" /> : <XMarkIcon className="h-4 w-4 text-[#81A89A]" />}
            </div>
            <div className="text-xs sm:text-sm text-[#4B4C52]">
              {successMessage && (
                <p>
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p>
                  {errorMessage}
                </p>
              )}
            </div>
            <XMarkIcon
              className="h-5 w-5 cursor-pointer flex-shrink-0 text-[#4A4B55]"
              onClick={dismissMessages}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsletterForm;
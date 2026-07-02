import React, { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Provide your Web3Forms access key below
    formData.append("access_key", "e7a73628-a599-4775-bcfe-ee0faa2f2fdb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full bg-black text-white px-6 md:px-14 py-16 md:py-18 flex flex-col gap-16 md:gap-24">
      <div className="w-full">
        <h2 className="text-5xl md:text-6xl font-normal mb-2 tracking-tight">Ask us anything</h2>
        <p className="text-gray-400 text-2xl max-w-2xl leading-relaxed">
          Please use the form below to send us any questions and we will get back to you.
        </p>
      </div>
      
      <div className="md:w-[60vw] md:ml-auto pr-0 md:pr-14">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-[14px] text-gray-400 uppercase tracking-widest font-normal">Full Name *</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Enter your name" 
              className="bg-transparent border-b border-[#222] pb-4 text-2xl md:text-[26px] text-white placeholder-[#333] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[14px] text-gray-400 uppercase tracking-widest font-normal">Email Address *</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="Enter your email address" 
              className="bg-transparent border-b border-[#222] pb-4 text-2xl md:text-[26px] text-white placeholder-[#333] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[14px] text-gray-400 uppercase tracking-widest font-normal">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              placeholder="Enter your phone number" 
              className="bg-transparent border-b border-[#222] pb-4 text-2xl md:text-[26px] text-white placeholder-[#333] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[14px] text-gray-400 uppercase tracking-widest font-normal">Your Enquiry *</label>
            <textarea 
              name="message"
              required
              rows="2"
              className="bg-transparent border-b border-[#222] pb-4 text-2xl md:text-[26px] text-white placeholder-[#333] focus:outline-none focus:border-white transition-colors resize-none"
            ></textarea>
            <div className="text-right text-[14px] text-gray-600 font-medium mt-2">0 / 400</div>
          </div>

          <div className="-mt-10 flex items-center gap-6">
            <button type="submit" className="bg-white text-black text-xs font-medium px-6 py-4 tracking-widest uppercase flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Submit <span>→</span>
            </button>
            {result && <span className="text-[14px] text-gray-400">{result}</span>}
          </div>
        </form>
      </div>
    </div>
  );
}

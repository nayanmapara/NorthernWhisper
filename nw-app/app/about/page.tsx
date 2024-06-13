import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#03040B] flex flex-col min-h-screen text-white">
      <Header />
      <main className="container mx-auto py-16 px-4 flex-grow">
        <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
        
        <div className="container mx-auto py-16 px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="leading-relaxed">
              Welcome to Northern Whisper, your go-to newsletter designed to keep international students and work permit holders in Canada informed and up-to-date. We understand the challenges that come with staying informed about immigration updates, policy changes, and other critical information while navigating life in a new country. Our mission is to bridge this information gap by leveraging advanced technology to automate and streamline the dissemination of important updates, ensuring that you never miss out on crucial information.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              At Northern Whisper, our mission is to empower international students and work permit holders in Canada by providing timely and accurate updates on immigration and policy changes. We aim to simplify the process of staying informed, so you can focus on your studies, work, and life in Canada without the added stress of missing out on important updates.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="leading-relaxed">
              Our vision is to become the leading source of information for international students and work permit holders in Canada. We strive to continually innovate and leverage the latest technology to enhance our newsletter, making it more efficient and comprehensive. We envision a future where every international student and work permit holder in Canada feels confident and informed about the latest updates affecting their lives.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="leading-relaxed mb-4">
              We love hearing from you! If you have any questions, comments, or just want to say hi, drop us a line.
            </p>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 mr-2" />
              <p><a href="mailto:hello@northernwhisper.tech" className="text-blue-500">hello@northernwhisper.tech</a></p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <p>Oakville, ON, Canada</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#03040B] flex flex-col min-h-screen text-white">
      <Header />
      <main className="container mx-auto py-16 px-4 flex-grow">
        <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quos hic at debitis error, ratione perferendis quasi similique dolorem cumque.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nostrum saepe! Voluptate, cumque sint, corporis repudiandae rem aspernatur, corrupti nobis necessitatibus nesciunt quam iure soluta?
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptas eveniet nemo saepe corrupti ratione cum vitae perferendis eaque eius. Possimus libero in itaque pariatur, assumenda ex excepturi architecto veritatis.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-[#1B1C24] p-6 rounded-lg shadow-lg">
                <img src="/path/to/profile1.jpg" alt="John Doe" className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">Nayan Mapara</h3>
                <p className="text-gray-400">Co-Founder</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-[#1B1C24] p-6 rounded-lg shadow-lg">
                <img src="/path/to/profile2.jpg" alt="Jane Smith" className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">Tejas Kannapuzha</h3>
                <p className="text-gray-400">Co-Founder</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, labore.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-[#1B1C24] p-6 rounded-lg shadow-lg">
                <img src="/path/to/profile3.jpg" alt="Bob Johnson" className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">Dhanesh Narayana</h3>
                <p className="text-gray-400">Co-Founder</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quia!</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-[#1B1C24] p-6 rounded-lg shadow-lg">
                <img src="/path/to/profile4.jpg" alt="Alice Williams" className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">Payal Lenka</h3>
                <p className="text-gray-400">Co-Founder</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, laudantium.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="leading-relaxed">
            We love hearing from you! If you have any questions, comments, or just want to say hi, drop us a line.
          </p>
          <p>Email: <a href="mailto:hello@northernwhisper.tech" className="text-blue-500">hello@northernwhisper.tech</a></p>
          <p>Address: Oakville, ON, Canada</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
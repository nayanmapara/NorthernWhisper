import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Introduction</h2>
      <p>Welcome to Northern Whisper&apos;s Privacy Policy. This policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <h3 className="text-lg font-semibold mt-4 mb-2">Personal Information</h3>
      <p>We may collect personal information such as your name, email address, and other contact details when you voluntarily provide them to us.</p>
      
      <h3 className="text-lg font-semibold mt-4 mb-2">Usage Data</h3>
      <p>We may automatically collect information about your usage of our website, such as IP addresses, browser types, referring pages, and pages visited.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Use of Information</h2>
      <p>We use the collected information for:</p>
      <ul className="list-disc pl-6">
        <li>Providing and maintaining our website.</li>
        <li>Improving and customizing the user experience.</li>
        <li>Sending promotional communications, which you can opt out of at any time.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Disclosure of Information</h2>
      <p>We may disclose your information to third parties only under the following circumstances:</p>
      <ul className="list-disc pl-6">
        <li>With your consent.</li>
        <li>To comply with legal obligations.</li>
        <li>To protect our rights or the rights of others.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Security of Information</h2>
      <p>We prioritize the security of your information and implement appropriate measures to protect it from unauthorized access, alteration, disclosure, or destruction.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
      <p>Northern Whisper reserves the right to update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on our website.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at <a href='mailto:hello@northernwhisper.tech'>hello@northernwhisper.tech</a>.</p>
    </div>
  );
};

export default PrivacyPolicy;

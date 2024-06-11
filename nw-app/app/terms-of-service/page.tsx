import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Acceptance of Terms</h2>
      <p>Welcome to Northern Whisper's Terms of Service. By accessing or using our website, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you must not use our website.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Use License</h2>
      <p>We grant you permission to use our website for personal, non-commercial purposes, subject to the following conditions:</p>
      <ul className="list-disc pl-6">
        <li>You must not modify or copy the materials.</li>
        <li>You must not use the materials for any commercial purpose or for any public display (commercial or non-commercial).</li>
        <li>You must not attempt to decompile or reverse engineer any software contained on our website.</li>
        <li>You must not remove any copyright or other proprietary notations from the materials.</li>
        <li>You must not transfer the materials to another person or "mirror" the materials on any other server.</li>
      </ul>
      <p>Unauthorized use may result in termination of this license and may subject you to legal action.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Intellectual Property Rights</h2>
      <p>All content, logos, trademarks, and other intellectual property on our website are owned by Northern Whisper and are protected by copyright, trademark, and other intellectual property laws. You may not use our intellectual property without our prior written consent.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Limitation of Liability</h2>
      <p>In no event shall Northern Whisper, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages, or any damages whatsoever, including, without limitation, damages for loss of data or profit, arising out of your use of our website, even if Northern Whisper has been advised of the possibility of such damages. This limitation of liability applies to the fullest extent permitted by law.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Governing Law</h2>
      <p>These Terms of Service are governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Ontario for the resolution of any disputes arising from these terms or your use of our website.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Changes to This Agreement</h2>
      <p>Northern Whisper reserves the right to modify these Terms of Service at any time. We will notify you of any changes by posting the updated terms on our website. Your continued use of our website after any such changes constitutes your acceptance of the new terms.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p>If you have any questions about these Terms of Service, please contact us at <a href='mailto:hello@northernwhisper.tech'>hello@northernwhisper.tech</a>.</p>
    </div>
  );
};

export default TermsOfService;

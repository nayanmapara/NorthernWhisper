import React from 'react'

function Footer() {
  return (
    <footer className="text-white py-4 text-xs animate-title duration-1000">
      <hr className="w-full border-gray-600 mb-4" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>© 2024 Northern Whisper. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-blue-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
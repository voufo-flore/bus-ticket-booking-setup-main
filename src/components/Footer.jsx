import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-violet-700 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BusConnect CM</h3>
            <p className="text-sm">
              Headquarters: <br/>
              Rue 1.234, Bastos<br/>
              Yaoundé, Cameroon
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacts</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2" /> +237 6 9999 9999
              </li>
              <li>Email: contact@busconnect.cm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FaTwitter className="text-2xl hover:text-violet-200 cursor-pointer" />
              <FaFacebook className="text-2xl hover:text-violet-200 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-violet-200 cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Mobile Apps</h4>
            <div className="space-y-2">
              <button className="w-full p-2 bg-white text-violet-700 rounded-lg">
                Download Android App
              </button>
              <button className="w-full p-2 bg-white text-violet-700 rounded-lg">
                Download iOS App
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-violet-600 text-center">
          <p>© 2024 BusConnect Cameroon. All rights reserved.</p>
        </div>
      </div>
  )
}

export default Footer
    

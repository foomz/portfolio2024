import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-20 -mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Mail className="text-blue-500" />
          Contact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:Jdeluna@nbi.gov.ph"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
          >
            <Mail className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-center">Jdeluna@nbi.gov.ph</p>
          </a>
          
          <a
            href="tel:+639355618179"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
          >
            <Phone className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+639355618179</p>
          </a>
          
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
            <MapPin className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-center">Caloocan, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
}
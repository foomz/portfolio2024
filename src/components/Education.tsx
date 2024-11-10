import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Criminology",
      institution: "Criminal Justice of Colleges",
      location: "Tunasan, Muntinlupa City",
      period: "January 2019 – March 2022"
    },
    {
      degree: "Bachelor of Computer Engineering",
      institution: "Gardner College",
      location: "Diliman Quezon City",
      period: "January 2015 – January 2019"
    },
    {
      institution: "Llano High School",
      location: "De Mundo Village, Caloocan City"
    },
    {
      institution: "Llano Elementary School",
      location: "Llano Road, Caloocan City"
    }
  ];

  return (
    <section id="education" className="pt-20 -mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <GraduationCap className="text-blue-500" />
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              {edu.degree && (
                <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              )}
              <p className="text-blue-400">{edu.institution}</p>
              <p className="text-gray-400">{edu.location}</p>
              {edu.period && (
                <p className="text-sm text-gray-500 mt-2">{edu.period}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
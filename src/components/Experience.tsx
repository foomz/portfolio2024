import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Project Worker",
      company: "National Bureau of Investigation, Regional District Offices",
      department: "Investigation Services",
      period: "March 2024 – Current",
      responsibilities: [
        "Provided administrative support for NBI operations, including data entry, filing, and handling sensitive correspondence."
      ]
    },
    {
      title: "Technology Infrastructure Specialist",
      company: "National Bureau of Investigation",
      department: "Technology Infrastructure Division",
      period: "October 2022 – February 2024",
      responsibilities: [
        "Monitored and maintained the hardware, software, and network infrastructure of the data center",
        "Ensured optimal performance and reliability for NBI Clearance Biometric System"
      ]
    },
    {
      title: "Cybercrime Investigator",
      company: "National Bureau of Investigation",
      department: "Cybercrime Division",
      period: "July 2018 – September 2022",
      responsibilities: [
        "Conducted detailed investigations into cybercrime incidents",
        "Prepared comprehensive reports for legal proceedings",
        "Identified patterns and trends in cybercrime activities",
        "Developed proactive security measures"
      ]
    },
    {
      title: "Digital Forensics Intern",
      company: "National Bureau of Investigation",
      department: "Digital Forensics Laboratory",
      period: "March 2018 – June 2018",
      responsibilities: [
        "Utilized advanced forensic tools for digital evidence collection and analysis",
        "Preserved and analyzed digital evidence for court hearings"
      ]
    }
  ];

  return (
    <section id="experience" className="pt-20 -mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Briefcase className="text-blue-500" />
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-700">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <p className="text-gray-400">{exp.department}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
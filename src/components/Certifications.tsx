import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    "Certificate of Employment at National Bureau of Investigation",
    "Career Essentials in Generative AI by Microsoft and LinkedIn",
    "Microsoft Cybersecurity Architect (SC-100) Certification Exam",
    "AWS Certified Cloud Practitioner by Udemy",
    "DevOps Professional Certificate by PagerDuty and Linkedin",
    "Become a Penetration Tester by Linkedin Learning",
    "Google Cloud Platform for Enterprise Essential Training",
    "Certificate of IT Security Foundations Network Security",
    "Certificate of Docker Foundations Professional",
    "Certificate of Completion Kali Linux for Advanced Pen Testing and Ethical Hacking by Linkedin Learning",
    "Certificate of Completion ISO 27001: 2022 Compliant Cybersecurity The Annex A Controls",
    "Learning GDPR by Linkedin Learning",
    "Certificate of Completion Advanced SOC 2 Auditing Proven Strategies for Auditing the Security Availability and Confidentiality TSCs",
    "ISC2 Certified Information Systems Security Professional (CISSP) (2024) Cert Prep"
  ];

  return (
    <section id="certifications" className="pt-20 -mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Award className="text-blue-500" />
          Certifications & Completions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors"
            >
              <p className="text-gray-300">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
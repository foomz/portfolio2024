import React from 'react';
import { Code, Shield, Building2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="text-blue-500 w-6 h-6" />,
      title: "Web Development",
      skills: [
        "Python", "HTML", "CSS", "JavaScript", "PHP", "SQL",
        "Git & Github", "Responsive Design", "React.js", "Tailwind",
        "Node.js", "Django", "MySQL", "MSSQL Server", "SQLite",
        "REST API", "Command Line", "Basic UI/UX", "Testing and Debug",
        "CI/CD", "AWS, GCP, Linode", "Containerization"
      ]
    },
    {
      icon: <Shield className="text-blue-500 w-6 h-6" />,
      title: "Cyber Security",
      skills: [
        "Python", "Networking", "Web App Security", "IDS & IPS",
        "Firewall", "Linux", "SQLI, XSS & CSRF", "Security Tools",
        "Analytical Skills", "Social Engineering", "OSINT & Reconnaissance",
        "Malware Analysis", "Security Policies", "Forensics",
        "Security Audits", "Risk Management"
      ]
    },
    {
      icon: <Building2 className="text-blue-500 w-6 h-6" />,
      title: "Administrative Support",
      skills: [
        "Microsoft 365", "Word", "Excel", "PowerPoint",
        "Google Sheet", "Troubleshooting", "Communication",
        "Data Entry", "Office Management"
      ]
    }
  ];

  return (
    <section id="skills" className="pt-20 -mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Primary Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["Node.js", "React.js", "OOP", "Django", "Rest API", "Git", "AWS", "OSINT", "VAPT", "Web Applications Development"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
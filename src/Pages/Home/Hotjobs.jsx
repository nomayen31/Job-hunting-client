import React, { useState, useEffect } from 'react'

const Hotjobs = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(error => console.error("Failed to fetch jobs:", error)); 
  }, [])
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10 tracking-tight">
        ✨ Top <span className="text-indigo-600">Hot Jobs</span> Right Now
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {jobs.map(job => (
          <div 
            key={job._id} 
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 p-6 border border-gray-100 flex flex-col justify-between"
          >
            {/* Header: Logo, Title, Company */}
            <div className="flex items-start mb-5">
              <div className="flex-shrink-0 w-16 h-16 mr-4 border-2 border-indigo-100 rounded-full flex items-center justify-center bg-white p-1">
                <img src={job.company_logo} alt={job.company} className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-gray-900 leading-snug">{job.title}</h2>
                <p className="text-sm font-medium text-indigo-600 mt-1">{job.company}</p>
                {/* Status Badge */}
                <span className={`text-xs font-semibold px-2 py-0.5 mt-2 inline-block rounded-full ${
                    job.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                    {job.status}
                </span>
              </div>
            </div>
            {/* Core Details (with better styling) */}
            <div className="mb-5 space-y-3">
              <DetailItem icon="📍" label="Location" value={job.location} />
              <DetailItem icon="💼" label="Category" value={job.category} />
              <DetailItem icon="🗓️" label="Type" value={job.jobType} />
              <DetailItem 
                icon="💰" 
                label="Salary" 
                value={`${job.salaryRange.min} - ${job.salaryRange.max} ${job.salaryRange.currency}`} 
              />
              <DetailItem icon="⏰" label="Deadline" value={job.applicationDeadline} isImportant={true} />
            </div>
            {/* Requirements Section (Collapsed/Styled) */}
            <SectionHeader title="Key Requirements" />
            <ul className="list-disc list-inside text-gray-600 text-sm pl-4 mb-5 max-h-24 overflow-y-auto custom-scrollbar">
              {job.requirements.slice(0, 3).map((req, idx) => (
                <li key={idx} className="mb-1">{req}</li>
              ))}
              {/* Show more/less logic can be added here */}
              {job.requirements.length > 3 && (
                <li className="text-indigo-500 font-medium cursor-pointer mt-1">
                  +{job.requirements.length - 3} more requirements
                </li>
              )}
            </ul>
            {/* HR Contact (Footer) */}
            <div className="pt-4 border-t border-gray-100 mt-auto">
              <p className="text-xs text-gray-500 font-medium">HR Contact: <span className="text-gray-700">{job.hr_name}</span></p>
              <a href={`mailto:${job.hr_email}`} className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition duration-300">
                {job.hr_email}
              </a>
            </div>
            {/* Apply Button - Modern Look */}
            <button className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
                View & Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Helper Components for Clean Code ---

// Reusable component for a single detail item
const DetailItem = ({ icon, label, value, isImportant = false }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500 flex items-center">
            <span className="mr-2 text-base">{icon}</span> {label}:
        </span>
        <span className={`font-medium ${isImportant ? 'text-red-500 font-bold' : 'text-gray-800'}`}>
            {value}
        </span>
    </div>
);

// Reusable component for section headers
const SectionHeader = ({ title }) => (
    <h3 className="text-base font-semibold text-gray-800 border-b border-indigo-100 pb-1 mb-3 mt-4">
        {title}
    </h3>
);

export default Hotjobs
import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: 'Open' | 'Closed' | 'Draft';
  applicants: number;
  postedDate: string;
}

interface Application {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  appliedDate: string;
  status: 'New' | 'Shortlisted' | 'Rejected' | 'Interviewed';
  cvUrl: string;
}

export default function CareersManagement() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'applications'>('jobs');
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Sales Manager',
      department: 'Sales',
      location: 'Mumbai',
      type: 'Full-time',
      status: 'Open',
      applicants: 24,
      postedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Electric Vehicle Technician',
      department: 'Technical',
      location: 'Bangalore',
      type: 'Full-time',
      status: 'Open',
      applicants: 18,
      postedDate: '2024-01-20'
    },
    {
      id: '3',
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Delhi',
      type: 'Full-time',
      status: 'Open',
      applicants: 32,
      postedDate: '2024-01-10'
    },
    {
      id: '4',
      title: 'Customer Support Representative',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
      status: 'Open',
      applicants: 45,
      postedDate: '2024-01-05'
    },
    {
      id: '5',
      title: 'Product Designer',
      department: 'Design',
      location: 'Pune',
      type: 'Contract',
      status: 'Closed',
      applicants: 12,
      postedDate: '2023-12-20'
    }
  ];

  const applications: Application[] = [
    {
      id: '1',
      jobId: '1',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@email.com',
      phone: '+91 98765 43210',
      experience: '5 years',
      appliedDate: '2024-01-22',
      status: 'New',
      cvUrl: '#'
    },
    {
      id: '2',
      jobId: '1',
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      phone: '+91 98765 43211',
      experience: '7 years',
      appliedDate: '2024-01-21',
      status: 'Shortlisted',
      cvUrl: '#'
    },
    {
      id: '3',
      jobId: '2',
      name: 'Amit Kumar',
      email: 'amit.kumar@email.com',
      phone: '+91 98765 43212',
      experience: '3 years',
      appliedDate: '2024-01-23',
      status: 'New',
      cvUrl: '#'
    },
    {
      id: '4',
      jobId: '3',
      name: 'Sneha Reddy',
      email: 'sneha.reddy@email.com',
      phone: '+91 98765 43213',
      experience: '4 years',
      appliedDate: '2024-01-20',
      status: 'Interviewed',
      cvUrl: '#'
    },
    {
      id: '5',
      jobId: '2',
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 98765 43214',
      experience: '6 years',
      appliedDate: '2024-01-19',
      status: 'Rejected',
      cvUrl: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-100 text-green-700';
      case 'Closed': return 'bg-gray-100 text-gray-700';
      case 'Draft': return 'bg-yellow-100 text-yellow-700';
      case 'New': return 'bg-blue-100 text-blue-700';
      case 'Shortlisted': return 'bg-purple-100 text-purple-700';
      case 'Interviewed': return 'bg-teal-100 text-teal-700';
      case 'Rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredApplications = selectedJob 
    ? applications.filter(app => app.jobId === selectedJob)
    : applications;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Careers Management</h1>
            <p className="text-gray-600 mt-1">Manage job postings and applications</p>
          </div>
          <button 
            onClick={() => setShowCreateJob(true)}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-add-line mr-2"></i>
            Post New Job
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-4 font-medium transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                  activeTab === 'jobs'
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-briefcase-line mr-2"></i>
                Job Listings ({jobs.length})
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-6 py-4 font-medium transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                  activeTab === 'applications'
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className="ri-file-user-line mr-2"></i>
                Applications ({applications.length})
              </button>
            </div>
          </div>

          {/* Jobs Tab */}
          {activeTab === 'jobs' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <div key={job.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.department}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
                        <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <i className="ri-user-line text-teal-600"></i>
                        <span className="text-sm font-semibold text-gray-900">{job.applicants} Applicants</span>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedJob(job.id);
                          setActiveTab('applications');
                        }}
                        className="text-teal-600 hover:text-teal-700 font-medium text-sm cursor-pointer"
                      >
                        View Applications →
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <button className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer text-sm">
                        <i className="ri-edit-line mr-2"></i>
                        Edit
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-white rounded-lg transition-colors cursor-pointer">
                        <i className="ri-more-2-fill"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div className="p-6">
              {/* Filter */}
              {selectedJob && (
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-sm text-gray-600">Filtered by job:</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    {jobs.find(j => j.id === selectedJob)?.title}
                  </span>
                  <button 
                    onClick={() => setSelectedJob(null)}
                    className="text-sm text-teal-600 hover:text-teal-700 cursor-pointer"
                  >
                    Clear filter
                  </button>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Candidate</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Job Position</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Experience</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Applied Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredApplications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-gray-900">{app.name}</p>
                            <p className="text-sm text-gray-600">{app.email}</p>
                            <p className="text-sm text-gray-600">{app.phone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                          {jobs.find(j => j.id === app.jobId)?.title}
                        </td>
                        <td className="px-6 py-4 text-gray-900">{app.experience}</td>
                        <td className="px-6 py-4 text-gray-900">
                          {new Date(app.appliedDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              className="w-8 h-8 flex items-center justify-center text-teal-600 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer"
                              title="Download CV"
                            >
                              <i className="ri-download-line"></i>
                            </button>
                            <button 
                              className="w-8 h-8 flex items-center justify-center text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                              title="Shortlist"
                            >
                              <i className="ri-check-line"></i>
                            </button>
                            <button 
                              className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Reject"
                            >
                              <i className="ri-close-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Job Modal */}
      {showCreateJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Post New Job</h3>
              <button 
                onClick={() => setShowCreateJob(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Sales Manager"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer">
                    <option>Sales</option>
                    <option>Technical</option>
                    <option>Marketing</option>
                    <option>Support</option>
                    <option>Design</option>
                    <option>Operations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Remote"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                <textarea
                  rows={6}
                  placeholder="Describe the role, responsibilities, and what you're looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                <textarea
                  rows={4}
                  placeholder="List the qualifications, skills, and experience required..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => setShowCreateJob(false)}
                  className="flex-1 px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Save as Draft
                </button>
                <button 
                  onClick={() => setShowCreateJob(false)}
                  className="flex-1 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Publish Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

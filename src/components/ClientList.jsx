import React from 'react';

const clients = [
  {
    id: '39835',
    avatar: 'https://via.placeholder.com/30', // Placeholder for avatar
    name: 'Arlene McCoy',
    email: 'bill.sanders@example.com',
    phone: '(270) 555-0117',
    dob: 'Jun 10th, 2020',
    location: '4517 Washington Ave, Manchester, Kentucky 38495',
    status: 'Offline',
  },
  {
    id: '43756',
    avatar: 'https://via.placeholder.com/30',
    name: 'Kristin Watson',
    email: 'debra.holt@example.com',
    phone: '(217) 555-0113',
    dob: 'Jun 10th, 2020',
    location: '4140 Parker Rd. Allentown, New Mexico 31134',
    status: 'Online',
  },
  {
    id: '43178',
    avatar: 'https://via.placeholder.com/30',
    name: 'Courtney Henry',
    email: 'tim.jennings@example.com',
    phone: '(319) 555-0115',
    dob: 'Jun 10th, 2020',
    location: '6391 Elgin St. Celina, Delaware 10298',
    status: 'Offline',
  },
  {
    id: '22739',
    avatar: 'https://via.placeholder.com/30',
    name: 'Cameron Williamson',
    email: 'michelle.rivera@example.com',
    phone: '(201) 555-0124',
    dob: 'Jun 10th, 2020',
    location: '8502 Preston Rd. Inglewood, Maine 98380',
    status: 'Online',
  },
  // Add more client data here if needed to fill the table
];

export default function ClientList() {
  return (
    <div className=" bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-7xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Client List</h2>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm mr-2">Type</span>
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm">
                <option>Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  USER ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  USER NAME
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  EMAIL
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PHONE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DATE OF BIRTH
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  LOCATION
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Options</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients.map((client) => (
                <tr key={client.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ID: {client.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img className="h-8 w-8 rounded-full" src={client.avatar} alt="" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{client.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {client.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {client.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {client.dob}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {client.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <span className={`h-2.5 w-2.5 rounded-full mr-2 ${
                        client.status === 'Online' ? 'bg-green-500' : 'bg-red-500'
                      }`}></span>
                      {client.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {/* Three dots icon (placeholder) */}
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <div>Showing 1 to 8 of 16000 entries</div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full text-blue-400 hover:bg-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm">01</button>
            <button className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">02</button>
            <button className="px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 text-sm">03</button>
            <button className="px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 text-sm">04</button>
            <button className="px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 text-sm">05</button>
            <button className="p-2 rounded-full text-blue-400 hover:bg-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { ChevronDown, MoreVertical } from 'lucide-react'; // Using Lucide icons for dropdown and action dots

export default function DonationHistoryList() {
  // Sample data for the donation history table
  const donationHistory = [
    {
      invoiceNo: '3430',
      donationFrom: 'Kashi Viswanath',
      donationReceived: 'Kashi Viswanath',
      paymentMethod: '0077 **** 3814 (Visa)',
      amount: '34300 Rs',
      time: '21-07-01-00:00:00',
    },
    {
      invoiceNo: '3430',
      donationFrom: 'Shiv Mandir',
      donationReceived: 'Shiv Mandir',
      paymentMethod: '0077 **** 3814 (Visa)',
      amount: '34300 Rs',
      time: '21-06-01-10:00:00',
    },
    {
      invoiceNo: '3430',
      donationFrom: 'Pandit Arvindra Maharaj',
      donationReceived: 'Pandit Arvindra Maharaj',
      paymentMethod: '0077 **** 3814 (Visa)',
      amount: '34300 Rs',
      time: '20-06-01-10:00:00',
    },
    {
      invoiceNo: '3430',
      donationFrom: 'Kashi Viswanath',
      donationReceived: 'Kashi Viswanath',
      paymentMethod: '0077 **** 3814 (Visa)',
      amount: '34300 Rs',
      time: '19-07-01-11:30:00',
    },
    {
      invoiceNo: '3430',
      donationFrom: 'Kashi Viswanath',
      donationReceived: 'Kashi Viswanath',
      paymentMethod: '0077 **** 3814 (Visa)',
      amount: '34300 Rs',
      time: '19-07-01-11:30:00',
    },
    // Add more data as needed to fill the table for demonstration
    {
      invoiceNo: '3431',
      donationFrom: 'Ram Temple',
      donationReceived: 'Ram Temple',
      paymentMethod: '0077 **** 1234 (Visa)',
      amount: '25000 Rs',
      time: '18-07-01-09:00:00',
    },
    {
      invoiceNo: '3432',
      donationFrom: 'Sai Baba Trust',
      donationReceived: 'Sai Baba Trust',
      paymentMethod: '0077 **** 5678 (Master)',
      amount: '15000 Rs',
      time: '17-07-01-14:00:00',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Donation History</h2>
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-gray-600">Sort By</span>
          <div className="relative">
            <select className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
              <option>Empty</option>
              <option>Date</option>
              <option>Amount</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto min-h-[300px]"> {/* min-h for consistent look if data is less */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invoice No.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Donation From
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Donation Received
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Method
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {donationHistory.map((entry, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.invoiceNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                  {entry.donationFrom}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                  {entry.donationReceived}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.paymentMethod}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {entry.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                    <MoreVertical size={18} /> {/* Three dots icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <div>20 - 40 of 2,130 items</div>
        <div className="flex items-center space-x-2">
          <span>20 / page</span>
          <div className="relative">
            <select className="block appearance-none bg-white border border-gray-300 text-gray-700 py-1 px-3 pr-6 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
              <ChevronDown size={14} />
            </div>
          </div>
          <button className="p-2 rounded-full text-blue-400 hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm">1</button>
          <button className="px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 text-sm">2</button>
          <button className="px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 text-sm">3</button>
          <button className="px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 text-sm">...</button>
          <button className="px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 text-sm">50</button>
          <button className="p-2 rounded-full text-blue-400 hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="flex items-center space-x-1">
            <span>Go to</span>
            <input
              type="text"
              className="w-12 border border-gray-300 rounded-md p-1 text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="1" // Can be managed with state for actual navigation
            />
          </div>
        </div>
      </div>
    </div>
  );
}
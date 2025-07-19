'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(24);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // EMI Calculation
  useEffect(() => {
    const monthlyRate = interestRate / 12 / 100;
    const emiValue = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                     (Math.pow(1 + monthlyRate, tenure) - 1);
    const totalAmountValue = emiValue * tenure;
    const totalInterestValue = totalAmountValue - loanAmount;
    
    setEmi(Math.round(emiValue));
    setTotalAmount(Math.round(totalAmountValue));
    setTotalInterest(Math.round(totalInterestValue));
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" style={{ fontFamily: '"Pacifico", serif' }}>
                  Financial Sathi
                </h1>
              </Link>
            </div>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* EMI Calculator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EMI Calculator</h1>
          <p className="text-xl text-gray-600">
            Calculate your Equated Monthly Installment for loans and plan your finances better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>
            
            {/* Loan Amount */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-gray-700">Loan Amount</label>
                <span className="text-2xl font-bold text-blue-600">₹{loanAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="10000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹50K</span>
                <span>₹1Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-gray-700">Interest Rate (Annual)</label>
                <span className="text-2xl font-bold text-green-600">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="6"
                max="30"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>6%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-gray-700">Loan Tenure</label>
                <span className="text-2xl font-bold text-purple-600">{tenure} months</span>
              </div>
              <input
                type="range"
                min="6"
                max="360"
                step="6"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>6 months</span>
                <span>30 years</span>
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setLoanAmount(500000);
                  setInterestRate(12);
                  setTenure(36);
                }}
                className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg font-semibold hover:bg-blue-200 transition-colors"
              >
                Personal Loan
                <div className="text-sm font-normal">₹5L, 12%, 3 years</div>
              </button>
              <button
                onClick={() => {
                  setLoanAmount(2500000);
                  setInterestRate(8.5);
                  setTenure(240);
                }}
                className="bg-green-100 text-green-800 py-3 px-4 rounded-lg font-semibold hover:bg-green-200 transition-colors"
              >
                Home Loan
                <div className="text-sm font-normal">₹25L, 8.5%, 20 years</div>
              </button>
              <button
                onClick={() => {
                  setLoanAmount(800000);
                  setInterestRate(9.5);
                  setTenure(84);
                }}
                className="bg-purple-100 text-purple-800 py-3 px-4 rounded-lg font-semibold hover:bg-purple-200 transition-colors"
              >
                Car Loan
                <div className="text-sm font-normal">₹8L, 9.5%, 7 years</div>
              </button>
              <button
                onClick={() => {
                  setLoanAmount(200000);
                  setInterestRate(15);
                  setTenure(18);
                }}
                className="bg-orange-100 text-orange-800 py-3 px-4 rounded-lg font-semibold hover:bg-orange-200 transition-colors"
              >
                Quick Loan
                <div className="text-sm font-normal">₹2L, 15%, 1.5 years</div>
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">EMI Breakdown</h2>
            
            {/* EMI Result */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Monthly EMI</h3>
                <div className="text-4xl font-bold text-blue-600">₹{emi.toLocaleString()}</div>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                <h4 className="text-sm font-semibold text-gray-600 mb-1">Principal Amount</h4>
                <div className="text-xl font-bold text-green-600">₹{loanAmount.toLocaleString()}</div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border-l-4 border-red-500">
                <h4 className="text-sm font-semibold text-gray-600 mb-1">Total Interest</h4>
                <div className="text-xl font-bold text-red-600">₹{totalInterest.toLocaleString()}</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border-l-4 border-purple-500">
                <h4 className="text-sm font-semibold text-gray-600 mb-1">Total Amount</h4>
                <div className="text-xl font-bold text-purple-600">₹{totalAmount.toLocaleString()}</div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border-l-4 border-orange-500">
                <h4 className="text-sm font-semibold text-gray-600 mb-1">Loan Duration</h4>
                <div className="text-xl font-bold text-orange-600">{Math.round(tenure/12)} years</div>
              </div>
            </div>

            {/* Pie Chart Representation */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Payment Breakdown</h4>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 32 32">
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      strokeDasharray={`${(loanAmount / totalAmount) * 75.4} 75.4`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="4"
                      strokeDasharray={`${(totalInterest / totalAmount) * 75.4} 75.4`}
                      strokeDashoffset={`-${(loanAmount / totalAmount) * 75.4}`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-600">Principal</span>
                  </div>
                  <span className="text-sm font-semibold">{Math.round((loanAmount / totalAmount) * 100)}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-600">Interest</span>
                  </div>
                  <span className="text-sm font-semibold">{Math.round((totalInterest / totalAmount) * 100)}%</span>
                </div>
              </div>
            </div>

            {/* Apply for Loan CTA */}
            <div className="mt-8 text-center">
              <Link href="/#products">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all cursor-pointer">
                  Apply for Loan
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 EMI Tips & Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-lightbulb-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lower Interest Rates</h3>
              <p className="text-gray-600 text-sm">
                A lower interest rate can significantly reduce your EMI. Compare rates from different lenders to find the best deal.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-calendar-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Shorter Tenure</h3>
              <p className="text-gray-600 text-sm">
                Choosing a shorter tenure increases EMI but reduces total interest paid. Find the right balance for your budget.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-money-rupee-circle-line text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prepayment Benefits</h3>
              <p className="text-gray-600 text-sm">
                Making prepayments reduces the principal amount and can save significant interest over the loan tenure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Financial Sathi. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
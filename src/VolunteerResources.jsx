import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VolunteerResources() {
  const [selectedRole, setSelectedRole] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [showTraining, setShowTraining] = useState(false);
  const [showPracticeLab, setShowPracticeLab] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{
        background: "#FBF9F3",
      }}
    >
      {/* NAVBAR */}
      <header className="w-full relative z-10" style={{ backgroundColor: '#FBF9F3' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="leading-tight">
            <div className="flex items-baseline gap-2">
              <div>
                <div className="text-xl font-extrabold tracking-tight text-[#39281D]">Triton Tax</div>
                <div className="text-xs font-medium text-[#0F1108] opacity-70">
                  A free tax preparation program
                </div>
            </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1.5 rounded-full bg-transparent border border-[rgba(160,130,90,0.6)] p-2 text-sm font-semibold text-[#39281D] md:flex">
            <Link to="/" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Home</Link>
            <Link to="/faq" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">FAQ</Link>
            <Link to="/volunteer-resources" className="rounded-full bg-[#3C431E] px-3.5 py-2 text-white hover:bg-[#2d3416] whitespace-nowrap">Volunteer Resources</Link>
            <Link to="/contact" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Contact Us</Link>
            <Link to="/signup" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Sign Up</Link>
          </nav>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(160,130,90,0.3)] bg-[#FBF9F3]">
            <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                FAQ
              </Link>
              <Link
                to="/volunteer-resources"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white bg-[#3C431E] hover:bg-[#2d3416] transition-colors"
              >
                Volunteer Resources
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-[1400px] px-6 pt-12 pb-20">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#39281D] mb-4 sm:text-5xl" style={{ lineHeight: '1.2' }}>
            Volunteer Resources
          </h1>
        </div>

        {/* Sidebar + Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left Sidebar - Role Selection */}
          <div className="md:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="p-5 rounded-lg" style={{ backgroundColor: 'rgba(57, 40, 29, 0.03)', border: '1px solid rgba(57, 40, 29, 0.1)' }}>
                <p className="block text-xs font-semibold text-[#39281D] mb-4 uppercase tracking-wide" style={{ opacity: 0.6 }}>
                  Select Your Role
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setSelectedRole(selectedRole === "intake-specialist" ? "" : "intake-specialist");
                      setShowTraining(false);
                    }}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#39281D] transition-all text-left"
                    style={{ 
                      backgroundColor: selectedRole === "intake-specialist" ? '#E0B84F' : 'transparent',
                      border: selectedRole === "intake-specialist" ? 'none' : '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedRole !== "intake-specialist") {
                        e.currentTarget.style.backgroundColor = 'rgba(224, 184, 79, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedRole !== "intake-specialist") {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Client Intake Specialist
                  </button>
                  <button
                    onClick={() => {
                      setSelectedRole(selectedRole === "tax-preparer" ? "" : "tax-preparer");
                      setShowTraining(false);
                      setShowPracticeLab(false);
                    }}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#39281D] transition-all text-left"
                    style={{ 
                      backgroundColor: selectedRole === "tax-preparer" ? '#E0B84F' : 'transparent',
                      border: selectedRole === "tax-preparer" ? 'none' : '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedRole !== "tax-preparer") {
                        e.currentTarget.style.backgroundColor = 'rgba(224, 184, 79, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedRole !== "tax-preparer") {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Tax Preparer
                  </button>
                  <button
                    onClick={() => {
                      setSelectedRole(selectedRole === "senior-tax-preparer" ? "" : "senior-tax-preparer");
                      setShowTraining(false);
                      setShowPracticeLab(false);
                    }}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#39281D] transition-all text-left"
                    style={{ 
                      backgroundColor: selectedRole === "senior-tax-preparer" ? '#E0B84F' : 'transparent',
                      border: selectedRole === "senior-tax-preparer" ? 'none' : '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedRole !== "senior-tax-preparer") {
                        e.currentTarget.style.backgroundColor = 'rgba(224, 184, 79, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedRole !== "senior-tax-preparer") {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Senior Tax Preparer
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {!selectedRole && (
              <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                <div className="mb-6">
                  <svg className="w-16 h-16 mx-auto text-[#39281D]" style={{ opacity: 0.2 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#39281D] mb-2" style={{ opacity: 0.7 }}>
                  Select a role to get started
                </h3>
                <p className="text-base text-[#39281D]" style={{ opacity: 0.5, maxWidth: '400px' }}>
                  Choose a role from the sidebar to view resources, certifications, and training materials.
                </p>
              </div>
            )}

            {/* Role-specific content */}
            {selectedRole && (
              <>
            {selectedRole === "senior-tax-preparer" && (
              <>
                <h2 className="text-2xl font-semibold text-[#39281D] mb-4" style={{ lineHeight: '1.4' }}>
                  Senior Tax Preparer Overview
                </h2>
                <div className="p-6 rounded-lg mb-8" style={{ border: '1px solid rgba(57, 40, 29, 0.15)' }}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                      Requirements
                    </h3>
                    <ul className="space-y-2 text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                      <li>• Advanced IRS VITA course</li>
                      <li>• Advanced certification</li>
                      <li>• One additional specialty certification:
                        <ul className="ml-6 mt-1 space-y-1">
                          <li>• International Student</li>
                          <li>• Military</li>
                          <li>• Foreign Student</li>
                        </ul>
                      </li>
                      <li>• Form 13615, Volunteer Agreement</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                      Responsibilities
                    </h3>
                    <ul className="space-y-2 text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                      <li>• Prepare and assist with complex or non-routine tax returns</li>
                      <li>• Support quality review of returns prepared by Tax Preparers and Client Intake Specialists, as assigned</li>
                      <li>• Provide technical guidance and on-floor assistance during clinics</li>
                      <li>• Assist Site Coordinators with error resolution and compliance support</li>
                      <li>• Uphold and reinforce IRS VITA standards and Triton Tax procedures</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {selectedRole === "tax-preparer" && (
              <>
                <h2 className="text-2xl font-semibold text-[#39281D] mb-4" style={{ lineHeight: '1.4' }}>
                  Tax Preparer Overview
                </h2>
                <div className="p-6 rounded-lg mb-8" style={{ border: '1px solid rgba(57, 40, 29, 0.15)' }}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                      Requirements
                    </h3>
                    <ul className="space-y-2 text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                      <li>• Advanced IRS VITA course</li>
                      <li>• Advanced certification</li>
                      <li>• Form 13615, Volunteer Agreement</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                      Responsibilities
                    </h3>
                    <ul className="space-y-2 text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                      <li>• Prepare full-scope individual tax returns within VITA guidelines</li>
                      <li>• Receive and resolve cases escalated from Client Intake Specialists</li>
                      <li>• Ensure accurate application of tax law, credits, and filing statuses</li>
                      <li>• Participate in quality review when designated by Site Coordinators</li>
                      <li>• Comply with all IRS VITA and Triton Tax operational standards</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {selectedRole === "intake-specialist" && (
              <>
                <h2 className="text-2xl font-semibold text-[#39281D] mb-4" style={{ lineHeight: '1.4' }}>
                  Client Intake Specialist Overview
                </h2>
                <div className="p-6 rounded-lg mb-8" style={{ border: '1px solid rgba(57, 40, 29, 0.15)' }}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                      Requirements
                    </h3>
                    <ul className="space-y-2 text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                      <li>• Basic IRS VITA course</li>
                      <li>• Basic certification</li>
                      <li>• Form 13615, Volunteer Agreement</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                      Responsibilities
                    </h3>
                    <ul className="space-y-2 text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                      <li>• Conduct client intake interviews, including identity verification and document collection</li>
                      <li>• Prepare limited-scope tax returns permitted under Basic certification</li>
                      <li>• Identify complexity and route ineligible cases to a Tax Preparer or Senior Tax Preparer</li>
                      <li>• Support clinic operations and client flow under Site Coordinator direction</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
              </>
            )}

        {/* Training & Resources Section */}
        {selectedRole && (
          <>
            {selectedRole === "senior-tax-preparer" && (
              <>
                <h2 className="text-2xl font-semibold text-[#39281D] mb-4 mt-8" style={{ lineHeight: '1.4' }}>
                  Your Training & Resources
                </h2>
                <div className="p-6 rounded-lg" style={{ border: '1px solid rgba(57, 40, 29, 0.15)' }}>
                  <div>
                    {/* Training */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Training
                      </h3>
                      <p className="text-base text-gray-600 mb-4" style={{ lineHeight: '1.6' }}>
                        Complete the IRS VITA Advanced course and one specialty course (International, Military, or Foreign Student).
                      </p>
                
                      <div className="mb-6">
                  {!showTraining ? (
                    <button
                      onClick={() => setShowTraining(true)}
                      className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                    >
                      Open Training
                    </button>
                  ) : (
                    <>
                      <p className="text-sm text-[#39281D] opacity-60 mb-3">
                        If the training doesn't load below, use the links to access training directly. You also need to complete one specialty course (International, Military, or Foreign Student):{' '}
                        <b>
                        <a
                          href="https://apps.irs.gov/app/vita/01_student.jsp?level=advanced"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Advanced
                        </a>,{' '}
                        <a
                          href="https://apps.irs.gov/app/vita/15_student.jsp?level=international"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          International
                        </a>,{' '}
                        <a
                          href="https://apps.irs.gov/app/vita/12_student.jsp?level=military"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Military
                        </a>, or{' '}
                        <a
                          href="https://apps.irs.gov/app/vita/foreign_student_module.jsp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Foreign Student
                        </a> </b>
                      </p>
                      <button
                        onClick={() => setShowTraining(false)}
                        className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                      >
                        Hide Training
                      </button>
                    </>
                  )}
                </div>
                
                {showTraining && (
                  <div className="mb-4">
                    <iframe
                      src="https://apps.irs.gov/app/vita/01_student.jsp?level=advanced"
                      className="w-full border-0 rounded-lg"
                      style={{ height: '700px', minHeight: '500px', border: '1px solid rgba(57, 40, 29, 0.1)' }}
                      title="IRS VITA Training - Advanced & Specialty"
                    />
                  </div>
                )}
                    </div>

                    {/* Practice Lab */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Practice Lab
                      </h3>
                      <p className="text-base text-gray-600 mb-4" style={{ lineHeight: '1.6' }}>
                        Access the TaxSlayer practice lab to practice preparing tax returns.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-[#39281D] opacity-70 mb-2">
                          Password: <span className="font-mono font-semibold">TRAINPROWEB</span>
                        </p>
                        <p className="text-sm text-[#39281D] opacity-70 mb-3">
                          Note: Leave the site number empty when creating an account.
                        </p>
                        {!showPracticeLab ? (
                          <button
                            onClick={() => setShowPracticeLab(true)}
                            className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                          >
                            Open Practice Lab
                          </button>
                        ) : (
                          <>
                            <p className="text-sm text-[#39281D] opacity-60 mb-3">
                              If the practice lab doesn't load below, use this link to access it directly:{' '}
                              <a
                                href="https://vita.taxslayerpro.com/IRSTraining/en/Account/Access"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                Practice Lab
                              </a>
                            </p>
                            <button
                              onClick={() => setShowPracticeLab(false)}
                              className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                            >
                              Hide Practice Lab
                            </button>
                          </>
                        )}
                      </div>
                      
                      {showPracticeLab && (
                        <div className="mb-4">
                          <iframe
                            src="https://vita.taxslayerpro.com/IRSTraining/en/Account/Access"
                            className="w-full border-0 rounded-lg"
                            style={{ height: '700px', minHeight: '500px', border: '1px solid rgba(57, 40, 29, 0.1)' }}
                            title="TaxSlayer Practice Lab"
                          />
                        </div>
                      )}
                    </div>

                    {/* Test */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Test
                      </h3>
                      <div>
                        <a
                          href="https://linklearncertification.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-[#39281D] underline hover:opacity-75"
                          style={{ lineHeight: '1.6' }}
                        >
                          VITA/TCE Central - Certification Tests
                        </a>
                      </div>
                    </div>

                    {/* Handbooks */}
                    <div style={{ paddingTop: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Handbooks
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4961.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Volunteer Standards of Conduct
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4491x.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Training Supplement
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4012.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Extensive Resource Guide
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {selectedRole === "tax-preparer" && (
              <>
                <h2 className="text-2xl font-semibold text-[#39281D] mb-4 mt-8" style={{ lineHeight: '1.4' }}>
                  Your Training & Resources
                </h2>
                <div className="p-6 rounded-lg" style={{ border: '1px solid rgba(57, 40, 29, 0.15)' }}>
                  <div>
                    {/* Training */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Training
                      </h3>
                      <p className="text-base text-gray-600 mb-4" style={{ lineHeight: '1.6' }}>
                        Complete the IRS VITA Advanced course.
                      </p>
                
                      <div className="mb-6">
                  {!showTraining ? (
                    <button
                      onClick={() => setShowTraining(true)}
                      className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                    >
                      Open Training
                    </button>
                  ) : (
                    <>
                      <p className="text-sm text-[#39281D] opacity-60 mb-3">
                        If the training doesn't load below, use the link to access training directly:{' '}
                        <a
                          href="https://apps.irs.gov/app/vita/01_student.jsp?level=advanced"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Advanced Training
                        </a>
                      </p>
                      <button
                        onClick={() => setShowTraining(false)}
                        className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                      >
                        Hide Training
                      </button>
                    </>
                  )}
                </div>
                
                {showTraining && (
                  <div className="mb-4">
                    <iframe
                      src="https://apps.irs.gov/app/vita/01_student.jsp?level=advanced"
                      className="w-full border-0 rounded-lg"
                      style={{ height: '700px', minHeight: '500px', border: '1px solid rgba(57, 40, 29, 0.1)' }}
                      title="IRS VITA Training - Advanced"
                    />
                  </div>
                )}
                    </div>

                    {/* Practice Lab */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Practice Lab
                      </h3>
                      <p className="text-base text-gray-600 mb-4" style={{ lineHeight: '1.6' }}>
                        Access the TaxSlayer practice lab to practice preparing tax returns.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-[#39281D] opacity-70 mb-2">
                          Password: <span className="font-mono font-semibold">TRAINPROWEB</span>
                        </p>
                        <p className="text-sm text-[#39281D] opacity-70 mb-3">
                          Note: Leave the site number empty when creating an account.
                        </p>
                        {!showPracticeLab ? (
                          <button
                            onClick={() => setShowPracticeLab(true)}
                            className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                          >
                            Open Practice Lab
                          </button>
                        ) : (
                          <>
                            <p className="text-sm text-[#39281D] opacity-60 mb-3">
                              If the practice lab doesn't load below, use this link to access it directly:{' '}
                              <a
                                href="https://vita.taxslayerpro.com/IRSTraining/en/Account/Access"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                Practice Lab
                              </a>
                            </p>
                            <button
                              onClick={() => setShowPracticeLab(false)}
                              className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                            >
                              Hide Practice Lab
                            </button>
                          </>
                        )}
                      </div>
                      
                      {showPracticeLab && (
                        <div className="mb-4">
                          <iframe
                            src="https://vita.taxslayerpro.com/IRSTraining/en/Account/Access"
                            className="w-full border-0 rounded-lg"
                            style={{ height: '700px', minHeight: '500px', border: '1px solid rgba(57, 40, 29, 0.1)' }}
                            title="TaxSlayer Practice Lab"
                          />
                        </div>
                      )}
                    </div>

                    {/* Test */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Test
                      </h3>
                      <div>
                        <a
                          href="https://linklearncertification.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-[#39281D] underline hover:opacity-75"
                          style={{ lineHeight: '1.6' }}
                        >
                          VITA/TCE Central - Certification Tests
                        </a>
                      </div>
                    </div>

                    {/* Handbooks */}
                    <div style={{ paddingTop: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Handbooks
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4961.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Volunteer Standards of Conduct
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4491x.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Training Supplement
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4012.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Extensive Resource Guide
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {selectedRole === "intake-specialist" && (
              <>
                <h2 className="text-2xl font-semibold text-[#39281D] mb-4 mt-8" style={{ lineHeight: '1.4' }}>
                  Your Training & Resources
                </h2>
                <div className="p-6 rounded-lg" style={{ border: '1px solid rgba(57, 40, 29, 0.15)' }}>
                  <div>
                    {/* Training */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Training
                      </h3>
                      <p className="text-base text-gray-600 mb-4" style={{ lineHeight: '1.6' }}>
                        Complete the IRS VITA basic course.
                      </p>
                
                      <div className="mb-6">
                  {!showTraining ? (
                    <button
                      onClick={() => setShowTraining(true)}
                      className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                    >
                      Open Training
                    </button>
                  ) : (
                    <>
                      <p className="text-sm text-[#39281D] opacity-60 mb-3">
                        If the training doesn't load below, use the link to access training directly:{' '}
                        <a
                          href="https://apps.irs.gov/app/vita/01_student.jsp?level=basic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Basic Training
                        </a>
                      </p>
                      <button
                        onClick={() => setShowTraining(false)}
                        className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                      >
                        Hide Training
                      </button>
                    </>
                  )}
                </div>
                
                {showTraining && (
                  <div className="mb-4">
                    <iframe
                      src="https://apps.irs.gov/app/vita/01_student.jsp?level=basic"
                      className="w-full border-0 rounded-lg"
                      style={{ height: '700px', minHeight: '500px', border: '1px solid rgba(57, 40, 29, 0.1)' }}
                      title="IRS VITA Training - Basic"
                    />
                  </div>
                )}
                    </div>

                    {/* Practice Lab */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Practice Lab
                      </h3>
                      <p className="text-base text-gray-600 mb-4" style={{ lineHeight: '1.6' }}>
                        Access the TaxSlayer practice lab to practice preparing tax returns.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-[#39281D] opacity-70 mb-2">
                          Password: <span className="font-mono font-semibold">TRAINPROWEB</span>
                        </p>
                        <p className="text-sm text-[#39281D] opacity-70 mb-3">
                          Note: Leave the site number empty when creating an account.
                        </p>
                        {!showPracticeLab ? (
                          <button
                            onClick={() => setShowPracticeLab(true)}
                            className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                          >
                            Open Practice Lab
                          </button>
                        ) : (
                          <>
                            <p className="text-sm text-[#39281D] opacity-60 mb-3">
                              If the practice lab doesn't load below, use this link to access it directly:{' '}
                              <a
                                href="https://vita.taxslayerpro.com/IRSTraining/en/Account/Access"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                Practice Lab
                              </a>
                            </p>
                            <button
                              onClick={() => setShowPracticeLab(false)}
                              className="inline-block rounded-full bg-[#5A3E30] px-4 py-1.5 text-xs font-semibold text-white text-center transition-colors hover:bg-[#39281D]"
                            >
                              Hide Practice Lab
                            </button>
                          </>
                        )}
                      </div>
                      
                      {showPracticeLab && (
                        <div className="mb-4">
                          <iframe
                            src="https://vita.taxslayerpro.com/IRSTraining/en/Account/Access"
                            className="w-full border-0 rounded-lg"
                            style={{ height: '700px', minHeight: '500px', border: '1px solid rgba(57, 40, 29, 0.1)' }}
                            title="TaxSlayer Practice Lab"
                          />
                        </div>
                      )}
                    </div>

                    {/* Test */}
                    <div style={{ borderBottom: '1px solid rgba(57, 40, 29, 0.12)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Test
                      </h3>
                      <div>
                        <a
                          href="https://linklearncertification.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-[#39281D] underline hover:opacity-75"
                          style={{ lineHeight: '1.6' }}
                        >
                          VITA/TCE Central - Certification Tests
                        </a>
                      </div>
                    </div>

                    {/* Handbooks */}
                    <div style={{ paddingTop: '1rem' }}>
                      <h3 className="text-lg font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                        Handbooks
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4961.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Volunteer Standards of Conduct
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4491x.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Training Supplement
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.irs.gov/pub/irs-pdf/p4012.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-[#39281D] underline hover:opacity-75"
                            style={{ lineHeight: '1.6' }}
                          >
                            Extensive Resource Guide
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
          </div>
        </div>
      </section>

      {/* Bottom curve divider — cream (top) -> green (bottom) */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#3C431E", lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1366 150"
          preserveAspectRatio="none"
          className="block w-full bottom-curve-divider-svg"
          style={{
            height: 150,
            transform: "scaleY(-1)",
            transformOrigin: "center",
          }}
        >
          {/* background */}
          <rect width="1366" height="150" fill="#3C431E" />

          {!isMobile ? (
            <>
              {/* NOTE: Because the SVG is flipped, these fills are intentionally reversed */}

              {/* Back band (visually BOTTOM after flip) -> GREEN */}
              <path
                d="M1276.748,52.869
             c-35.22-6.744-71.762-12.95-108.612-18.444
             -37.2-5.548-75.606-10.5-114.155-14.729
             C1015,15.422,974.935,11.79,934.907,8.9
             c-40.551-2.925-82.058-5.158-123.369-6.637
             C769.618.764,726.876,0,684.5,0
             A3409.759,3409.759,0,0,0,321,19.043
             C207.419,31.274,99.418,49.226,0,72.4
             V150
             H1366
             V71.7
             c-28.969-6.7-59-13.043-89.252-18.834
             Z"
                fill="#FBF9F3"
                opacity=".8"
                transform="translate(0,0)"
              />

              {/* Middle band (visually middle after flip) -> SAGE */}
              <path
                d="M1276.748,66.74
             C1241.528,60,1204.986,53.79,1168.136,48.3
             c-37.2-5.548-75.606-10.5-114.155-14.729
             C1015,29.293,974.935,25.661,934.907,22.773
             c-40.551-2.925-82.058-5.158-123.369-6.637
             -41.92-1.5-84.662-2.262-127.038-2.262
             A3409.759,3409.759,0,0,0,321,32.914
             C207.419,45.145,99.418,63.1,0,86.274
             V150
             H1366
             V85.57
             c-28.969-6.7-59-13.043-89.252-18.834
             Z"
                fill="#FBF9F3"
                opacity=".7"
                transform="translate(0,18)"
              />

              {/* Front band (visually TOP after flip) -> CREAM */}
              <path
                d="M1276.748,80.612
             c-35.22-6.744-71.762-12.95-108.612-18.444
             -37.2-5.548-75.606-10.5-114.155-14.729
             C1015,43.165,974.935,39.533,934.907,36.645
             c-40.551-2.925-82.058-5.158-123.369-6.637
             -41.92-1.5-84.662-2.262-127.038-2.262
             A3409.759,3409.759,0,0,0,321,46.786
             C207.419,59.017,99.418,76.969,0,100.146
             V150
             H1366
             V99.442
             c-28.969-6.7-59-13.043-89.252-18.834
             Z"
                fill="#FBF9F3"
                opacity="1"
                transform="translate(0,36)"
              />
            </>
          ) : (
            <>
              {/* Mobile: same flipped-fill logic as desktop */}

              {/* Back band (visually BOTTOM after flip) -> GREEN */}
              <path
                d="M1276.748,52.869
             c-35.22-6.744-71.762-12.95-108.612-18.444
             -37.2-5.548-75.606-10.5-114.155-14.729
             C1015,15.422,974.935,11.79,934.907,8.9
             c-40.551-2.925-82.058-5.158-123.369-6.637
             C769.618.764,726.876,0,684.5,0
             A3409.759,3409.759,0,0,0,321,19.043
             C207.419,31.274,99.418,49.226,0,72.4
             V150
             H1366
             V71.7
             c-28.969-6.7-59-13.043-89.252-18.834
             Z"
                fill="#FBF9F3"
                opacity=".8"
                transform="translate(0,0)"
              />

              {/* Middle band (visually middle after flip) -> SAGE */}
              <path
                d="M1276.748,66.74
             C1241.528,60,1204.986,53.79,1168.136,48.3
             c-37.2-5.548-75.606-10.5-114.155-14.729
             C1015,29.293,974.935,25.661,934.907,22.773
             c-40.551-2.925-82.058-5.158-123.369-6.637
             -41.92-1.5-84.662-2.262-127.038-2.262
             A3409.759,3409.759,0,0,0,321,32.914
             C207.419,45.145,99.418,63.1,0,86.274
             V150
             H1366
             V85.57
             c-28.969-6.7-59-13.043-89.252-18.834
             Z"
                fill="#FBF9F3"
                opacity=".7"
                transform="translate(0,30)"
              />

              {/* Front band (visually TOP after flip) -> CREAM */}
              <path
                d="M1276.748,80.612
             c-35.22-6.744-71.762-12.95-108.612-18.444
             -37.2-5.548-75.606-10.5-114.155-14.729
             C1015,43.165,974.935,39.533,934.907,36.645
             c-40.551-2.925-82.058-5.158-123.369-6.637
             -41.92-1.5-84.662-2.262-127.038-2.262
             A3409.759,3409.759,0,0,0,321,46.786
             C207.419,59.017,99.418,76.969,0,100.146
             V150
             H1366
             V99.442
             c-28.969-6.7-59-13.043-89.252-18.834
             Z"
                fill="#FBF9F3"
                opacity="1"
                transform="translate(0,60)"
              />
            </>
          )}
        </svg>
      </div>

      {/* FOOTER */}
      <footer className="w-full" style={{ backgroundColor: '#3C431E' }}>
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Column 1: About */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#FBF9F3' }}>
                Triton Tax
              </h3>
              <p className="text-sm mb-4" style={{ color: '#FBF9F3', opacity: 0.8, lineHeight: '1.6' }}>
                An IRS-certified VITA program providing free tax assistance to the UC San Diego community.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#FBF9F3' }}>
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="hover:opacity-100 transition-opacity" to="/" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:opacity-100 transition-opacity" to="/signup" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                    Sign Up to Volunteer
                  </Link>
                </li>
                <li>
                  <Link className="hover:opacity-100 transition-opacity" to="/faq" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="hover:opacity-100 transition-opacity" to="/volunteer-resources" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                    Volunteer Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#FBF9F3' }}>
                Contact
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:support@tritontax.org" className="hover:opacity-100 transition-opacity" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                    support@tritontax.org
                  </a>
                </li>
                <li>
                  <a href="tel:7472145063" className="hover:opacity-100 transition-opacity" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                    (747) 214-5063
                  </a>
                </li>
                <li>
                  <Link className="hover:opacity-100 transition-opacity" to="/contact" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Get Involved */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#FBF9F3' }}>
                Get Involved
              </h3>
              <p className="text-sm mb-4" style={{ color: '#FBF9F3', opacity: 0.8, lineHeight: '1.6' }}>
                Join our team of volunteers and help provide free tax assistance to your community.
              </p>
              <Link 
                to="/signup"
                className="inline-block rounded-full bg-[#FBF9F3] px-6 py-2 text-sm font-semibold text-[#3C431E] text-center transition-opacity hover:opacity-90"
              >
                Sign Up to Volunteer
              </Link>
            </div>
          </div>

          {/* Mobile footer */}
          <div className="md:hidden space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#FBF9F3' }}>
                Triton Tax
              </h3>
              <p className="text-sm mb-4" style={{ color: '#FBF9F3', opacity: 0.8, lineHeight: '1.6' }}>
                An IRS-certified VITA program providing free tax assistance to the UC San Diego community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm" style={{ color: '#FBF9F3' }}>Links</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link className="hover:opacity-100 transition-opacity" to="/faq" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:opacity-100 transition-opacity" to="/contact" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:opacity-100 transition-opacity" to="/volunteer-resources" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm" style={{ color: '#FBF9F3' }}>Contact</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="mailto:support@tritontax.org" className="hover:opacity-100 transition-opacity" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="tel:7472145063" className="hover:opacity-100 transition-opacity" style={{ color: '#FBF9F3', opacity: 0.8 }}>
                      (747) 214-5063
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t pt-6 md:pt-8" style={{ borderColor: 'rgba(252, 248, 238, 0.2)' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: '#FBF9F3', opacity: 0.7 }}>
              <span>© {new Date().getFullYear()} Triton Tax. All rights reserved.</span>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <span>UC San Diego</span>
          </div>
        </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

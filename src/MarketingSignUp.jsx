import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function MarketingSignUp() {
  const [searchParams] = useSearchParams();
  const submitted = searchParams.get('submitted') === 'true';
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
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
            <Link to="/volunteer-resources" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Volunteer Resources</Link>
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
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
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

      {/* FORM SECTION */}
      <section className="mx-auto max-w-3xl px-6 pt-12 pb-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#39281D] mb-4 sm:text-5xl" style={{ lineHeight: '1.2' }}>
            Office of Marketing Application
          </h1>
          <p className="text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
            Apply to join our marketing team and help promote Triton Tax to the UC San Diego community
          </p>
        </div>

        {submitted && (
          <div className="mb-8 p-6 rounded-lg border" style={{ backgroundColor: '#FBF9F3', borderColor: 'rgba(57, 40, 29, 0.2)' }}>
            <p className="text-[#39281D] font-medium text-center">
              Thank you for your application! We'll review your submission and get back to you soon.
            </p>
          </div>
        )}

        <form 
          action="https://formsubmit.co/tritontaxforms@gmail.com" 
          method="POST"
          className="space-y-10"
        >
          {/* Hidden inputs for FormSubmit customization */}
          <input type="hidden" name="_subject" value="Marketing Application - Triton Tax" />
          <input type="hidden" name="_next" value={`${window.location.origin}/marketing-signup?submitted=true`} />
          <input type="hidden" name="_captcha" value="false" />

          {/* A) Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>A) Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#39281D] mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                  style={{ 
                    backgroundColor: '#FBF9F3',
                    border: '1px solid rgba(57, 40, 29, 0.15)',
                    boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                  }}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="ucsdEmail" className="block text-sm font-medium text-[#39281D] mb-2">
                  UCSD Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="ucsdEmail"
                  id="ucsdEmail"
                  required
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                  style={{ 
                    backgroundColor: '#FBF9F3',
                    border: '1px solid rgba(57, 40, 29, 0.15)',
                    boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                  }}
                  placeholder="your.name@ucsd.edu"
                />
              </div>

              <div>
                <label htmlFor="personalEmail" className="block text-sm font-medium text-[#39281D] mb-2">
                  Personal Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="personalEmail"
                  id="personalEmail"
                  required
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                  style={{ 
                    backgroundColor: '#FBF9F3',
                    border: '1px solid rgba(57, 40, 29, 0.15)',
                    boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#39281D] mb-2">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                  style={{ 
                    backgroundColor: '#FBF9F3',
                    border: '1px solid rgba(57, 40, 29, 0.15)',
                    boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                  }}
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-[#39281D] mb-2">
                    College / Major <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="college"
                    id="college"
                    required
                    className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                    style={{ 
                      backgroundColor: '#FBF9F3',
                      border: '1px solid rgba(57, 40, 29, 0.15)',
                      boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                      e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                    }}
                    placeholder="e.g., Sixth College / Computer Science"
                  />
                </div>

                <div>
                  <label htmlFor="gradYear" className="block text-sm font-medium text-[#39281D] mb-2">
                    Graduation Year <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="gradYear"
                    id="gradYear"
                    required
                    className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                    style={{ 
                      backgroundColor: '#FBF9F3',
                      border: '1px solid rgba(57, 40, 29, 0.15)',
                      boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                      e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                    }}
                    placeholder="2025"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* B) Role Selection */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>B) Role Selection</h2>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-[#39281D] mb-2">
                Role Applying For <span className="text-red-600">*</span> <span className="text-sm font-normal opacity-60">(select one)</span>
              </label>
              <select
                name="role"
                id="role"
                required
                className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                style={{ 
                  backgroundColor: '#FBF9F3',
                  border: '1px solid rgba(57, 40, 29, 0.15)',
                  boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                  e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                }}
              >
                <option value="">Select a role...</option>
                <option value="Marketing Director">Marketing Director</option>
                <option value="Content & Social Media Coordinator">Content & Social Media Coordinator</option>
                <option value="Design & Creative Coordinator">Design & Creative Coordinator</option>
                <option value="Web & Digital Coordinator">Web & Digital Coordinator</option>
                <option value="Outreach & Partnerships Coordinator">Outreach & Partnerships Coordinator</option>
              </select>
            </div>
            <div className="space-y-3 p-4 rounded-lg" style={{ backgroundColor: 'rgba(57, 40, 29, 0.03)' }}>
              <div>
                <h4 className="text-sm font-semibold text-[#39281D] mb-1">Marketing Director</h4>
                <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Leads campaigns, timelines, and coordination with Triton Tax leadership.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#39281D] mb-1">Content & Social Media Coordinator</h4>
                <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Creates, schedules, and manages social media content.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#39281D] mb-1">Design & Creative Coordinator</h4>
                <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Designs graphics, flyers, and visual assets.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#39281D] mb-1">Web & Digital Coordinator</h4>
                <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Maintains website, landing pages, and digital tools.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#39281D] mb-1">Outreach & Partnerships Coordinator</h4>
                <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Supports tabling, collaborations, and community outreach.
                </p>
              </div>
            </div>
          </div>

          {/* C) Interest Areas */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>C) Interest Areas</h2>
            <p className="text-sm text-[#39281D] opacity-75 mb-4" style={{ lineHeight: '1.6' }}>
              Select all that apply (supports role assignment) <span className="text-red-600">*</span>
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="interestAreas"
                  id="interestSocialMedia"
                  value="Social Media"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="interestSocialMedia" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Social Media
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="interestAreas"
                  id="interestGraphicDesign"
                  value="Graphic Design"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="interestGraphicDesign" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Graphic Design
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="interestAreas"
                  id="interestWriting"
                  value="Writing / Copy"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="interestWriting" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Writing / Copy
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="interestAreas"
                  id="interestPhotography"
                  value="Photography / Video"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="interestPhotography" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Photography / Video
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="interestAreas"
                  id="interestWeb"
                  value="Web / UI"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="interestWeb" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Web / UI
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="interestAreas"
                  id="interestAnalytics"
                  value="Analytics / Strategy"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="interestAnalytics" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Analytics / Strategy
                </label>
              </div>
            </div>
          </div>

          {/* D) Experience Level */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>D) Experience Level</h2>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-[#39281D] mb-2">
                Relevant marketing experience <span className="text-red-600">*</span>
              </label>
              <select
                name="experience"
                id="experience"
                required
                className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                style={{ 
                  backgroundColor: '#FBF9F3',
                  border: '1px solid rgba(57, 40, 29, 0.15)',
                  boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                  e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                }}
              >
                <option value="">Select experience level...</option>
                <option value="None — eager to learn">None — eager to learn</option>
                <option value="Some — class or personal projects">Some — class or personal projects</option>
                <option value="Significant — prior org or professional experience">Significant — prior org or professional experience</option>
              </select>
            </div>
          </div>

          {/* E) Tools & Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>E) Tools & Skills</h2>
            <p className="text-sm text-[#39281D] opacity-75 mb-4" style={{ lineHeight: '1.6' }}>
              Tools you're comfortable with <span className="text-sm opacity-60">(optional)</span>
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="tools"
                  id="toolCanva"
                  value="Canva"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="toolCanva" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Canva
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="tools"
                  id="toolAdobe"
                  value="Adobe (Photoshop, Illustrator, Premiere)"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="toolAdobe" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Adobe (Photoshop, Illustrator, Premiere)
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="tools"
                  id="toolFigma"
                  value="Figma"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="toolFigma" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Figma
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="tools"
                  id="toolWebflow"
                  value="Webflow / React"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="toolWebflow" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Webflow / React
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="tools"
                  id="toolAnalytics"
                  value="Google Analytics"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="toolAnalytics" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Google Analytics
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="tools"
                  id="toolAds"
                  value="Meta / TikTok Ads"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="toolAds" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Meta / TikTok Ads
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="tools"
                  id="toolOther"
                  value="Other"
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="toolOther" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* F) Portfolio / Links */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>F) Portfolio / Links</h2>
            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-[#39281D] mb-2">
                Portfolio or work links <span className="text-sm opacity-60">(optional)</span>
              </label>
              <p className="text-sm text-[#39281D] opacity-60 mb-3" style={{ lineHeight: '1.5' }}>
                Examples: Google Drive, Behance, personal site, GitHub, Instagram
              </p>
              <input
                type="url"
                name="portfolio"
                id="portfolio"
                className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                style={{ 
                  backgroundColor: '#FBF9F3',
                  border: '1px solid rgba(57, 40, 29, 0.15)',
                  boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                  e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                }}
                placeholder="https://example.com/portfolio"
              />
            </div>
          </div>

          {/* G) Availability & Commitment */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>G) Availability & Commitment</h2>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-[#39281D] mb-2">
                Weekly availability <span className="text-red-600">*</span>
              </label>
              <select
                name="availability"
                id="availability"
                required
                className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-[#39281D] transition-all"
                style={{ 
                  backgroundColor: '#FBF9F3',
                  border: '1px solid rgba(57, 40, 29, 0.15)',
                  boxShadow: '0 1px 2px rgba(57, 40, 29, 0.05)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.3)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(57, 40, 29, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(57, 40, 29, 0.15)';
                  e.currentTarget.style.boxShadow = '0 1px 2px rgba(57, 40, 29, 0.05)';
                }}
              >
                <option value="">Select weekly availability...</option>
                <option value="2–4 hours/week">2–4 hours/week</option>
                <option value="4–6 hours/week">4–6 hours/week</option>
                <option value="6-8 hours/week">6-8 hours/week</option>
                <option value="10+ hours/week">10+ hours/week</option>
              </select>
            </div>
          </div>

          {/* H) Role Flexibility Acknowledgment */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>H) Role Flexibility Acknowledgment</h2>
            <div className="flex items-start">
              <input
                type="checkbox"
                name="roleFlexibility"
                id="roleFlexibility"
                required
                className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                style={{ accentColor: '#5A3E30' }}
              />
              <label htmlFor="roleFlexibility" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                I understand marketing roles may evolve based on project needs and availability. <span className="text-red-600">*</span>
              </label>
            </div>
          </div>

          {/* I) Professional Standards */}
          <div>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-6" style={{ lineHeight: '1.4' }}>I) Professional Standards</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="professionalStandards"
                  id="standardProfessional"
                  value="Will represent Triton Tax professionally"
                  required
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="standardProfessional" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Will represent Triton Tax professionally <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="professionalStandards"
                  id="standardDeadlines"
                  value="Will meet deadlines and communicate clearly"
                  required
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="standardDeadlines" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Will meet deadlines and communicate clearly <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="professionalStandards"
                  id="standardAccurate"
                  value="Information provided is accurate"
                  required
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="standardAccurate" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  Information provided is accurate <span className="text-red-600">*</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-full bg-[#5A3E30] px-8 py-4 text-base font-semibold text-white transition-colors"
              style={{ boxShadow: '0 3px 12px rgba(90, 62, 48, 0.25), 0 1px 4px rgba(57, 40, 29, 0.2)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#39281D'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5A3E30'}
            >
              Submit Application
            </button>
          </div>
        </form>
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

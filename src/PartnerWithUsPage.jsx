import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function PartnerWithUsPage() {
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
                  An IRS VITA Program
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1.5 rounded-full bg-transparent border border-[rgba(160,130,90,0.6)] p-2 text-sm font-semibold text-[#39281D] md:flex">
            <Link to="/" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Home</Link>
            <Link to="/partner-with-us" className="rounded-full bg-[#3C431E] px-3.5 py-2 text-white hover:bg-[#2d3416] whitespace-nowrap">Partner with Us</Link>
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
                to="/partner-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white bg-[#3C431E] hover:bg-[#2d3416] transition-colors"
              >
                Partner with Us
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

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-20">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-[#39281D] mb-4 sm:text-5xl text-center" style={{ lineHeight: '1.2' }}>
            Partner With Triton Tax
          </h1>
          <p className="text-xl text-[#39281D] opacity-75 text-center" style={{ lineHeight: '1.6' }}>
            Supporting free, reliable tax assistance through community collaboration
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#081119] mb-4" style={{ lineHeight: '1.4' }}>
            Who We Are
          </h2>
          <p className="text-lg text-[#39281D] opacity-90 mb-4" style={{ lineHeight: '1.6' }}>
            Triton Tax is an IRS-certified Volunteer Income Tax Assistance (VITA) program based at UC San Diego. We provide free, reliable tax assistance to students and members of the surrounding community while training student volunteers through hands-on, IRS-certified experience.
          </p>
          <p className="text-lg text-[#39281D] opacity-90" style={{ lineHeight: '1.6' }}>
            We are affiliated with the MAAC Project, a non-profit organization that has provided free tax assistance to communities across San Diego County through its VITA program for over 20 years. Through this affiliation, Triton Tax operates in coordination with established VITA best practices and compliance standards.
          </p>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#081119] mb-4" style={{ lineHeight: '1.4' }}>
            Why Partner With Us
          </h2>
          <p className="text-lg text-[#39281D] opacity-90 mb-8" style={{ lineHeight: '1.6' }}>
            Partnerships play a critical role in expanding access to free tax assistance and financial support services. Organizations partner with Triton Tax to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(60, 67, 30, 0.1)', border: '1px solid rgba(60, 67, 30, 0.2)' }}>
              <p className="text-base text-[#39281D] font-medium" style={{ lineHeight: '1.6' }}>
                Expand access to IRS-certified, no-cost tax preparation
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(224, 184, 79, 0.15)', border: '1px solid rgba(224, 184, 79, 0.3)' }}>
              <p className="text-base text-[#39281D] font-medium" style={{ lineHeight: '1.6' }}>
                Support financial stability and tax compliance in the community
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(90, 62, 48, 0.1)', border: '1px solid rgba(90, 62, 48, 0.2)' }}>
              <p className="text-base text-[#39281D] font-medium" style={{ lineHeight: '1.6' }}>
                Engage students in meaningful, service-driven learning
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(160, 130, 90, 0.1)', border: '1px solid rgba(160, 130, 90, 0.2)' }}>
              <p className="text-base text-[#39281D] font-medium" style={{ lineHeight: '1.6' }}>
                Collaborate with an established VITA program operating under federal guidelines
              </p>
            </div>
          </div>
        </div>

        {/* Types of Partnerships We Welcome */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#081119] mb-4" style={{ lineHeight: '1.4' }}>
            Types of Partnerships We Welcome
          </h2>
          <p className="text-lg text-[#39281D] opacity-90 mb-6" style={{ lineHeight: '1.6' }}>
            We work with organizations and institutions interested in expanding access to free tax assistance and supporting individuals and families during tax season. Partnerships vary based on community needs, but commonly include the following:
          </p>
          <style>{`
            .partnership-grid {
              grid-template-columns: 1fr;
            }
            @media (min-width: 768px) {
              .partnership-grid {
                grid-template-columns: 1fr 2fr;
              }
            }
          `}</style>
          <div className="space-y-6 md:space-y-8" style={{ paddingLeft: '3rem' }}>
            <div className="grid gap-6 md:gap-8 md:items-start partnership-grid">
              <h3 className="text-xl font-semibold" style={{ lineHeight: '1.4', color: '#132A3E' }}>
                Community Organizations
              </h3>
              <p className="text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                Nonprofits and service providers that support students, families, or community members who may benefit from free, IRS-certified tax assistance.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:items-start partnership-grid">
              <h3 className="text-xl font-semibold" style={{ lineHeight: '1.4', color: '#132A3E' }}>
                Schools and Educational Institutions
              </h3>
              <p className="text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                Elementary schools, middle and high schools, school districts, and educational programs interested in sharing tax assistance information with families, guardians, or staff.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:items-start partnership-grid">
              <h3 className="text-xl font-semibold" style={{ lineHeight: '1.4', color: '#132A3E' }}>
                Campus Units
              </h3>
              <p className="text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                UC San Diego departments, centers, and programs that work directly with students and are interested in connecting them to on-campus tax support.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:items-start partnership-grid">
              <h3 className="text-xl font-semibold" style={{ lineHeight: '1.4', color: '#132A3E' }}>
                Housing Providers and Housing Organizations
              </h3>
              <p className="text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                Organizations supporting residents or tenants who may benefit from free tax assistance, including affordable housing providers and housing-related service groups.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:items-start partnership-grid">
              <h3 className="text-xl font-semibold" style={{ lineHeight: '1.4', color: '#132A3E' }}>
                Workforce Development and Job Training Programs
              </h3>
              <p className="text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                Programs supporting individuals entering or re-entering the workforce who may benefit from free, IRS-certified tax assistance.
              </p>
            </div>
          </div>
        </div>

        {/* What Partnership Can Look Like */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#081119] mb-4" style={{ lineHeight: '1.4' }}>
            What Partnership Can Look Like
          </h2>
          <p className="text-lg text-[#39281D] opacity-90 mb-4" style={{ lineHeight: '1.6' }}>
            Partnerships are flexible and shaped around shared goals and community needs. Common forms of collaboration include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#39281D] opacity-75 mb-4" style={{ lineHeight: '1.6', paddingLeft: '1.5rem' }}>
            <li>Referring clients, students, or community members to Triton Tax clinics</li>
            <li>Hosting or co-hosting on-site tax assistance or outreach events, when space and scheduling allow</li>
            <li>Coordinating informational or educational sessions during tax season</li>
            <li>Sharing tax assistance information or materials with your community</li>
            <li>Supporting access needs such as transportation or space coordination</li>
            <li>Collaborating on community-focused service initiatives</li>
          </ul>
          <p className="text-lg text-[#39281D] opacity-90 font-medium" style={{ lineHeight: '1.6' }}>
            All services provided through Triton Tax are offered free of charge.
          </p>
        </div>

        {/* Our Standards & Compliance */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#081119] mb-4" style={{ lineHeight: '1.4' }}>
            Our Standards & Compliance
          </h2>
          <p className="text-lg text-[#39281D] opacity-90 mb-4" style={{ lineHeight: '1.6' }}>
            Triton Tax operates under established IRS VITA guidelines and quality standards.
          </p>
          <p className="text-lg text-[#39281D] opacity-90 mb-4" style={{ lineHeight: '1.6' }}>
            Although federal law does not require tax preparers, including paid preparers, to hold formal degrees or licensure, all Triton Tax volunteers complete IRS training and certification, with returns reviewed by senior volunteers who have completed advanced tax law training.
          </p>
          <p className="text-lg text-[#39281D] opacity-90 mb-2" style={{ lineHeight: '1.6' }}>
            Additional standards include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6', paddingLeft: '1.5rem' }}>
            <li>Annual IRS certification for all volunteers</li>
            <li>Strict confidentiality and data protection requirements</li>
            <li>No-cost services for all clients</li>
            <li>Coordination with established VITA partners, including the MAAC Project</li>
          </ul>
        </div>

        {/* Interested in Partnering With Us? */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#081119] mb-6" style={{ lineHeight: '1.4' }}>
            Interested in Partnering With Us?
          </h2>
          <p className="text-lg text-[#39281D] opacity-90 mb-8" style={{ lineHeight: '1.6' }}>
            We welcome conversations with organizations interested in supporting access to free tax assistance.
          </p>
          <p className="text-lg text-[#39281D] opacity-90 mb-8" style={{ lineHeight: '1.6' }}>
            If you'd like to learn more or explore a potential partnership, please reach out to our team.
          </p>
        </div>

        {submitted && (
          <div className="mb-8 max-w-2xl mx-auto p-6 rounded-lg border" style={{ backgroundColor: 'rgba(255, 248, 220, 0.9)', borderColor: 'rgba(57, 40, 29, 0.2)' }}>
            <p className="text-lg text-[#39281D] font-medium text-center">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-6">
            {/* Contact Form */}
            <div className="flex-[4]">
            <form 
              action="https://formsubmit.co/support@tritontax.org" 
              method="POST"
              className="space-y-4"
            >
              {/* Hidden inputs for FormSubmit customization */}
              <input type="hidden" name="_subject" value="New Partnership Inquiry - Triton Tax" />
              <input type="hidden" name="_next" value={`${window.location.origin}/partner-with-us?submitted=true`} />
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-base font-medium text-[#39281D] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-lg text-[#39281D] transition-all"
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
                  placeholder="Your name"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-base font-medium text-[#39281D] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-lg text-[#39281D] transition-all"
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

              {/* Organization field */}
              <div>
                <label htmlFor="organization" className="block text-base font-medium text-[#39281D] mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  required
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-lg text-[#39281D] transition-all"
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
                  placeholder="Your organization"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-base font-medium text-[#39281D] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none text-lg text-[#39281D] resize-vertical transition-all"
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
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#5A3E30] px-5 py-3 text-base font-semibold text-white transition-colors"
                style={{ boxShadow: '0 3px 12px rgba(90, 62, 48, 0.25), 0 1px 4px rgba(57, 40, 29, 0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#39281D'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5A3E30'}
              >
                Send Message
              </button>
            </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 md:pt-0 md:flex-[2] md:self-center">
              <p className="text-base font-medium text-gray-600 mb-4 md:text-right">Or contact us by:</p>
              <div className="md:text-right">
                <h2 className="text-lg font-semibold text-gray-700 mb-2" style={{ lineHeight: '1.4' }}>Email</h2>
                <p className="text-sm leading-relaxed text-[#39281D] opacity-75 mb-2" style={{ lineHeight: '1.5' }}>
                  For partnership inquiries:
                </p>
                <a 
                  href="mailto:partner@tr@@itontax.org" 
                  className="text-base text-[#39281D] hover:opacity-70 underline font-semibold transition-opacity"
                >
                  partner@tritontax.org
                </a>
              </div>

              <div className="md:text-right">
                <h2 className="text-lg font-semibold text-gray-700 mb-2" style={{ lineHeight: '1.4' }}>Phone</h2>
                <p className="text-sm leading-relaxed text-[#39281D] opacity-75 mb-2" style={{ lineHeight: '1.5' }}>
                  Call or text us:
                </p>
                <a 
                  href="tel:7472145063" 
                  className="text-base text-[#39281D] hover:opacity-70 underline font-semibold transition-opacity"
                >
                  (747) 214-5063
                </a>
              </div>

              <div className="md:text-right">
                <h2 className="text-lg font-semibold text-gray-700 mb-2" style={{ lineHeight: '1.4' }}>Schedule a Meeting</h2>
                <p className="text-sm leading-relaxed text-[#39281D] opacity-75 mb-3" style={{ lineHeight: '1.5' }}>
                  Book a 30-minute appointment<br />
                  to discuss partnership opportunities.
                </p>
                <div className="md:flex md:justify-end">
                  <a
                    href="https://calendly.com/dnegreteg0001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[#E0B84F] px-4 py-2 text-sm font-semibold text-[#39281D] text-center transition-colors"
                    style={{ boxShadow: '0 3px 12px rgba(224, 184, 79, 0.35), 0 1px 4px rgba(224, 184, 79, 0.25)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D4A843'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E0B84F'}
                  >
                    Book an Appointment
                  </a>
                </div>
              </div>
            </div>
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

      {/* Footer section with #3C431E background - full width */}
      <footer className="w-full px-6 py-12 md:py-16" style={{ backgroundColor: '#3C431E', marginTop: '-1px' }}>
        <div className="mx-auto max-w-6xl">
          {/* Desktop: Multi-column layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: About */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#FBF9F3' }}>
                Triton Tax
              </h3>
              <p className="text-sm mb-4" style={{ color: '#FBF9F3', opacity: 0.8, lineHeight: '1.6' }}>
                An IRS VITA Program providing free tax assistance to the Triton Tax at UC San Diego community.
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
                    Contact Form
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

          {/* Mobile: Simplified layout */}
          <div className="md:hidden space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#FBF9F3' }}>
                Triton Tax
              </h3>
              <p className="text-sm mb-4" style={{ color: '#FBF9F3', opacity: 0.8, lineHeight: '1.6' }}>
                An IRS VITA Program providing free tax assistance to the Triton Tax at UC San Diego community.
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
                <span>An IRS VITA Program</span>
                <span>•</span>
                <span>Triton Tax at UC San Diego</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

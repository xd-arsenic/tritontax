import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
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
            <Link to="/signup" className="rounded-full bg-[#3C431E] px-3.5 py-2 text-white hover:bg-[#2d3416] whitespace-nowrap">Sign Up</Link>
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
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white bg-[#3C431E] hover:bg-[#2d3416] transition-colors"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* SIGNUP SECTION */}
      <section className="mx-auto max-w-6xl px-6 pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-[#39281D] mb-3 sm:text-5xl" style={{ lineHeight: '1.2' }}>
            Sign Up to Volunteer
          </h1>
          <p className="hidden md:block text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
            Join our team and make a real impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Primary: Tax Preparer Option */}
          <div className="mb-2 rounded-2xl p-4 md:p-6 relative transition-all duration-200" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12), 0 1px 2px rgba(57, 40, 29, 0.08)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 35px rgba(57, 40, 29, 0.22), 0 4px 12px rgba(57, 40, 29, 0.16), 0 2px 4px rgba(57, 40, 29, 0.12)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12), 0 1px 2px rgba(57, 40, 29, 0.08)'}>
            <div className="text-center mb-2 md:mb-4">
              <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-1.5 md:mb-3 rounded-full bg-[#1E4262] flex items-center justify-center" style={{ boxShadow: '0 3px 10px rgba(30, 66, 98, 0.35)' }}>
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#39281D] mb-1 md:mb-2" style={{ lineHeight: '1.4' }}>Tax Preparer</h2>
              <p className="text-xs md:text-base text-[#39281D] opacity-75 max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
                Our most needed role. Gain hands-on experience with tax preparation and financial skills.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-3 md:mb-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#39281D] mb-2 md:mb-2.5 text-left md:text-center" style={{ lineHeight: '1.4' }}>What you'll do</h3>
                <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-[#39281D] opacity-75 md:mx-auto md:max-w-fit" style={{ lineHeight: '1.6' }}>
                  <li className="flex items-start">
                    <span className="text-[#1E4262] mr-2.5 font-bold">•</span>
                    <span>Prepare tax returns for community members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E4262] mr-2.5 font-bold">•</span>
                    <span>Work directly with clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E4262] mr-2.5 font-bold">•</span>
                    <span>Receive on-site support and supervision</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#39281D] mb-2 md:mb-2.5 text-left md:text-center" style={{ lineHeight: '1.4' }}>What you'll get</h3>
                <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-[#39281D] opacity-75 md:mx-auto md:max-w-fit" style={{ lineHeight: '1.6' }}>
                  <li className="flex items-start">
                    <span className="text-[#1E4262] mr-2.5 font-bold">•</span>
                    <span>IRS Basic or Advanced certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E4262] mr-2.5 font-bold">•</span>
                    <span>Hands-on tax preparation training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E4262] mr-2.5 font-bold">•</span>
                    <span>Resume-ready experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/tax-preparer-signup"
                className="inline-block rounded-full bg-[#5A3E30] px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold text-white text-center transition-colors"
                style={{ boxShadow: '0 3px 12px rgba(90, 62, 48, 0.25), 0 1px 4px rgba(57, 40, 29, 0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#39281D'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5A3E30'}
              >
                Become a Tax Preparer
              </Link>
            </div>
          </div>

          {/* Secondary: Other Roles */}
          <div className="mb-8 pt-8">
            <div className="text-center mb-6">
              <p className="text-base text-[#39281D] opacity-60" style={{ lineHeight: '1.6' }}>
                Other opportunities available
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#E0B84F] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#39281D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#39281D] mb-2" style={{ lineHeight: '1.4' }}>Office of Marketing</h3>
                <p className="text-base text-[#39281D] opacity-75 mb-4" style={{ lineHeight: '1.6' }}>
                  We're also recruiting graphic designers, social media managers, and content creators to promote our program and engage with our community.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/marketing-signup"
                  className="inline-block rounded-full border border-[#39281D] border-opacity-30 px-6 py-2.5 text-sm font-semibold text-[#39281D] text-center transition-colors hover:bg-[rgba(160,130,90,0.12)]"
                >
                  Learn More
                </Link>
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

          {/* Mobile: Simplified layout */}
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
                <span>A free tax preparation program</span>
                <span>•</span>
                <span>UC San Diego</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

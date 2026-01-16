import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MarketingContentPage() {
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
      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.11]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/sandpaper.png')",
          backgroundRepeat: "repeat",
          willChange: 'transform',
          transform: 'translateZ(0)',
          contain: 'layout style paint',
        }}
      />

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

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-20 relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#39281D] mb-4 sm:text-5xl" style={{ lineHeight: '1.2' }}>
            Marketing Content
          </h1>
          <p className="text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
            Create and manage marketing materials for Triton Tax
          </p>
        </div>

        {/* Content area - ready for marketing content */}
        <div className="space-y-8">
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12)' }}>
            <h2 className="text-2xl font-semibold text-[#39281D] mb-4" style={{ lineHeight: '1.4' }}>
              Content Section
            </h2>
            <p className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
              Add your marketing content here. This page is not linked from the main navigation, making it accessible only via direct URL.
            </p>
          </div>

          {/* Placeholder sections for different content types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 4px 16px rgba(57, 40, 29, 0.12)' }}>
              <h3 className="text-xl font-semibold text-[#39281D] mb-3">Social Media</h3>
              <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                Social media content and templates
              </p>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 4px 16px rgba(57, 40, 29, 0.12)' }}>
              <h3 className="text-xl font-semibold text-[#39281D] mb-3">Graphics & Design</h3>
              <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                Visual assets and design resources
              </p>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 4px 16px rgba(57, 40, 29, 0.12)' }}>
              <h3 className="text-xl font-semibold text-[#39281D] mb-3">Copy & Messaging</h3>
              <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                Marketing copy and messaging guidelines
              </p>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 4px 16px rgba(57, 40, 29, 0.12)' }}>
              <h3 className="text-xl font-semibold text-[#39281D] mb-3">Campaigns</h3>
              <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                Campaign planning and tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom curve divider */}
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
          <rect width="1366" height="150" fill="#3C431E" />

          {!isMobile ? (
            <>
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
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#FBF9F3' }}>
                Triton Tax
              </h3>
              <p className="text-sm mb-4" style={{ color: '#FBF9F3', opacity: 0.8, lineHeight: '1.6' }}>
                An IRS VITA Program providing free tax assistance to the Triton Tax at UC San Diego community.
              </p>
            </div>

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
                <span>Triton Tax at UC San Diego</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

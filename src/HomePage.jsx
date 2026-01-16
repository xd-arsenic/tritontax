import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import bgrndImage from "./assets/bgrnd.png";
import HeroCurveRipple from "./components/HeroCurveRipple";

const styles = `
.float {
  animation: float 2.8s ease-in-out infinite;
  will-change: transform;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
  100% { transform: translateY(0px); }
}

@media (prefers-reduced-motion: reduce) {
  .float { animation: none !important; }
}

@media (min-width: 768px) {
  .steps-grid-5 {
    grid-template-columns: 1fr auto 1fr auto 1fr;
  }
}
`;

export default function HomePage() {
  const [showRotateMessage, setShowRotateMessage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hasSnappedRef = useRef(false);
  const learnMoreRef = useRef(null);
  const curveDividerRef = useRef(null);
  const howItWorksRef = useRef(null);

  useEffect(() => {
    const checkOrientation = () => {
      const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
      const isPortrait = window.innerHeight > window.innerWidth;

      if (isTablet && isPortrait) {
        setShowRotateMessage(true);
      } else {
        setShowRotateMessage(false);
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkOrientation();
    checkMobile();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (hasSnappedRef.current) return;

    let lastScrollY = window.scrollY;
    let scrollTimeout;
    let ticking = false;

    const handleScroll = () => {
      if (hasSnappedRef.current || ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        if (hasSnappedRef.current) {
          ticking = false;
          return;
        }

        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;

        // If scrolling down from near the top (within first 100px)
        if (scrollDelta > 0 && currentScrollY < 100 && lastScrollY < 100) {
          hasSnappedRef.current = true;

          // Scroll so the bottom of the viewport is just above the "Getting started is simple" section
          const howItWorksSection = howItWorksRef.current;
          if (howItWorksSection) {
            const sectionTop = howItWorksSection.getBoundingClientRect().top + window.scrollY;
            const viewportHeight = window.innerHeight;
            // Position so bottom of viewport = top of section (add small offset to ensure section is completely hidden)
            const targetScroll = sectionTop - viewportHeight - 15;
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
          }

          // Disable scroll snap permanently
          document.documentElement.style.scrollSnapType = 'none';

          // Remove listener after snapping
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            window.removeEventListener('scroll', handleScroll);
          }, 500);
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* Rotate screen message for tablets in portrait */}
      {showRotateMessage && (
        <div className="fixed inset-0 bg-[#f5f5f4] z-[10000] flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <svg
                className="w-24 h-24 mx-auto animate-spin text-[#39281D]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#39281D] mb-4">Please Rotate Your Device</h2>
            <p className="text-[#39281D] text-lg opacity-90">
              For the best experience, please rotate your tablet to landscape mode.
            </p>
          </div>
        </div>
      )}

      <main
        className="min-h-screen text-zinc-900 relative isolate"
        style={{
          background: "#FBF9F3",
        }}
      >


        {/* subtle texture overlay (covers everything) - optimized for performance */}
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
        <header className="w-full relative z-10">
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

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1.5 rounded-full bg-transparent border border-[rgba(160,130,90,0.6)] p-2 text-sm font-semibold text-[#39281D] md:flex">
              <Link to="/faq" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">FAQ</Link>
              <Link to="/volunteer-resources" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Volunteer Resources</Link>
              <Link to="/contact" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Contact Us</Link>
              <Link to="/signup" className="rounded-full bg-[#1E4262] px-3.5 py-2 text-white hover:bg-[#15304a] whitespace-nowrap">Sign Up</Link>
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
            <div className="md:hidden border-t border-[rgba(160,130,90,0.3)] bg-[#f5f5f4]">
              <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-2">
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
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-white bg-[#1E4262] hover:bg-[#15304a] transition-colors"
                >
                  Sign Up
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* HERO */}
        <section className="w-full relative overflow-hidden min-h-screen pt-6 pb-16 -mt-2 hero-section md:pt-8 md:pb-20">
          <div className="mx-auto relative max-w-6xl px-6 h-full flex flex-col gap-0 desktop-layout">
            {/* Left: headline + copy + CTAs */}
            <div className="order-2 md:order-1 md:w-1/2 md:pr-8 text-center md:text-left -mt-4 md:mt-0">
              <h1 className="text-5xl font-semibold tracking-tight leading-tight sm:text-6xl md:hidden" style={{ color: '#291D14' }}>
                Join Triton Tax
              </h1>
              <h1 className="hidden md:block text-5xl font-semibold tracking-tight leading-tight sm:text-6xl" style={{ color: '#291D14' }}>
                Become a Certified Tax Preparer with Triton Tax
              </h1>



              <div className="mt-3 max-w-xl mx-auto md:mx-0">
                <p className="text-base leading-relaxed text-[#39281D] opacity-75 sm:text-lg hide-between-md-desktop">
                  Gain hands-on experience as a student Tax Preparer, with quick and easy IRS certification, training, and on-campus support. No prior experience required.              </p>
                <br></br>
                <p className="text-base leading-relaxed text-[#39281D] opacity-55 sm:text-md hide-between-md-desktop">
                  A limited number of roles are also available in Marketing & Communications.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <Link
                    to="/signup"
                    className="rounded-full bg-[#5A3E30] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#39281D]"
                  >
                    Sign Up
                  </Link>
                  <a
                    href="#learn-more"
                    className="rounded-full border border-[#39281D] border-opacity-20 px-6 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(90,62,48,0.08)]"
                    style={{ backgroundColor: 'rgba(255, 255, 0, 0.1)' }}
                  >
                    Learn More
                  </a>
                </div>

                <div className="mt-10 text-[#39281D] opacity-60 flex justify-center md:justify-start">
                  <a href="#learn-more" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 cursor-pointer">
                    <span aria-hidden="true">↓</span> Scroll
                  </a>
                </div>
              </div>
            </div>

            {/* Right: image - overlapping on desktop, stacked on mobile */}
            <div className="image-container flex items-end justify-center md:justify-end relative md:absolute md:bottom-0 md:right-6 md:-translate-x-[-30px] -translate-y-[30px] md:translate-y-[50px] mt-6 mb-0 md:mb-auto md:mt-0 md:z-10 order-1 md:order-2">
              <div className="relative h-[185px] w-full max-w-[262px] sm:h-[300px] sm:max-w-[420px] md:h-[480px] md:max-w-[560px] progressive-image-size hero-image-shrink">
                <img
                  src={bgrndImage}
                  alt="Volunteer tax preparation"
                  className="float h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

    {/* Ripple curve divider (MAX HEIGHT 150px) */}
      <div
        ref={curveDividerRef}
        className="relative w-full overflow-hidden curve-divider-container"
        style={{ backgroundColor: "#FBF9F3", lineHeight: 0, }}
      >
          <svg
            viewBox="0 0 1366 150"
            preserveAspectRatio="none"
            className="block w-full curve-divider-svg"
            style={{ height: 150 }}
          >
            {/* background */}
            <rect width="1366" height="150" fill="#FBF9F3" />

            {!isMobile ? (
              <>
                {/* Desktop: Back band */}
                <path
                  className="curve-band-back"
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
                  fill="#4A3327"
                  opacity="0.9"
                  transform="translate(0,0)"
                />

                {/* Desktop: Middle band */}
                <path
                  className="curve-band-middle"
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
                  fill="#4A3327"
                  opacity="0.7"
                  transform="translate(0,18)"
                />

                {/* Desktop: Front band (matches next section bg) */}
                <path
                  className="curve-band-front"
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
                  fill="#4A3327"
                  opacity="1"
                  transform="translate(0,36)"
                />
              </>
            ) : (
              <>
                {/* Mobile: Back band - tighter spacing */}
                <path
                  className="curve-band-back"
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
                  fill="#4A3327"
                  opacity="0.9"
                  transform="translate(0,0)"
                />

                {/* Mobile: Middle band - increased spacing for visibility */}
                <path
                  className="curve-band-middle"
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
                  fill="#4A3327"
                  opacity="0.7"
                  transform="translate(0,30)"
                />

                {/* Mobile: Front band - increased spacing for visibility */}
                <path
                  className="curve-band-front"
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
                  fill="#4A3327"
                  opacity="1"
                  transform="translate(0,60)"
                />
              </>
            )}
          </svg>
        </div>




        {/* BENEFITS */}
        <section id="learn-more" ref={learnMoreRef} className="relative w-full overflow-hidden pt-0 pb-24" style={{ backgroundColor: '#4A3327' , marginTop: '-1px' }}>
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-3" style={{ lineHeight: '1.3' }}>
                Why join Triton Tax?
              </h2>
              <p className="text-lg text-[#F5F5F4] max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
                Build skills, make an impact, and grow your network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Benefit 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F5F5F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F5F4] mb-2" style={{ lineHeight: '1.4' }}>IRS Certified in 2 Weeks</h3>
                  <p className="text-base text-[#F5F5F4]" style={{ lineHeight: '1.6' }}>Earn official certification through quick, accessible training</p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F5F5F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F5F4] mb-2" style={{ lineHeight: '1.4' }}>Resume-Ready Experience</h3>
                  <p className="text-base text-[#F5F5F4]" style={{ lineHeight: '1.6' }}>Build practical skills that employers value</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F5F5F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F5F4] mb-2" style={{ lineHeight: '1.4' }}>Make Real Impact</h3>
                  <p className="text-base text-[#F5F5F4]" style={{ lineHeight: '1.6' }}>Help Triton Tax at UC San Diego community access free tax services</p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F5F5F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#F5F5F4] mb-2" style={{ lineHeight: '1.4' }}>Network & Grow</h3>
                  <p className="text-base text-[#F5F5F4]" style={{ lineHeight: '1.6' }}>Connect with peers and professionals in your field</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" ref={howItWorksRef} className="mx-auto max-w-6xl px-6 py-20" style={{ backgroundColor: '#FBF9F3' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#39281D] mb-8 text-center sm:text-4xl" style={{ lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              How It Works
            </h2>

            <div className="relative">
              <div className="steps-grid-5 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-stretch">
                {/* Step Card 1 */}
                <div className="col-span-1 md:col-span-1 rounded-2xl p-8 transition-all duration-200 flex flex-col" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12), 0 1px 2px rgba(57, 40, 29, 0.08)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 35px rgba(57, 40, 29, 0.22), 0 4px 12px rgba(57, 40, 29, 0.16), 0 2px 4px rgba(57, 40, 29, 0.12)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12), 0 1px 2px rgba(57, 40, 29, 0.08)'}>
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-[#1E4262] text-white flex items-center justify-center text-2xl font-bold relative z-10" style={{ boxShadow: '0 3px 10px rgba(30, 66, 98, 0.35)', backgroundColor: '#1E4262' }}>
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#39281D] mb-3 text-center" style={{ lineHeight: '1.4' }}>
                    You sign up
                  </h3>
                  <p className="text-base text-[#39281D] mb-4 text-center" style={{ lineHeight: '1.6', opacity: 0.75 }}>
                    Complete our volunteer application—it takes just a few minutes.
                  </p>
                  <div className="text-center mt-6">
                    <Link
                      to="/signup"
                      className="inline-flex items-center text-base font-semibold text-[#39281D] hover:opacity-75 transition-opacity"
                    >
                      Apply Now <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="flex md:hidden col-span-1 items-center justify-center py-4">
                  <div className="flex flex-col items-center">
                    <div className="w-1 flex-1" style={{ backgroundColor: '#39281D', height: '2rem' }}></div>
                    <div style={{ 
                      width: 0, 
                      height: 0, 
                      borderTop: '10px solid #39281D',
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      marginTop: '-1px'
                    }}></div>
                  </div>
                </div>
                <div className="hidden md:flex col-span-1 items-center justify-center py-8" style={{ width: '2rem', minWidth: '2rem', maxWidth: '2rem' }}>
                  <div className="flex items-center w-full">
                    <div className="h-1 flex-1" style={{ backgroundColor: '#39281D' }}></div>
                    <div style={{ 
                      width: 0, 
                      height: 0, 
                      borderLeft: '10px solid #39281D',
                      borderTop: '6px solid transparent',
                      borderBottom: '6px solid transparent',
                      marginLeft: '-1px'
                    }}></div>
                  </div>
                </div>

                {/* Step Card 2 */}
                <div className="col-span-1 md:col-span-1 rounded-2xl p-8 transition-all duration-200 flex flex-col" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12), 0 1px 2px rgba(57, 40, 29, 0.08)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 35px rgba(57, 40, 29, 0.22), 0 4px 12px rgba(57, 40, 29, 0.16), 0 2px 4px rgba(57, 40, 29, 0.12)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12), 0 1px 2px rgba(57, 40, 29, 0.08)'}>
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-[#3C431E] text-white flex items-center justify-center text-2xl font-bold relative z-10" style={{ boxShadow: '0 3px 10px rgba(60, 67, 30, 0.35)', backgroundColor: '#3C431E' }}>
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#39281D] mb-3 text-center" style={{ lineHeight: '1.4' }}>
                    You get certified
                  </h3>
                  <p className="text-base text-[#39281D] mb-4 text-center" style={{ lineHeight: '1.6', opacity: 0.75 }}>
                    Complete the IRS certification course and pass the exam within two weeks.
                  </p>
                  <div className="text-center mt-6">
                    <Link
                      to="/volunteer-resources"
                      className="inline-flex items-center text-base font-semibold text-[#39281D] hover:opacity-75 transition-opacity"
                    >
                      Volunteer Resources <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="flex md:hidden col-span-1 items-center justify-center py-4">
                  <div className="flex flex-col items-center">
                    <div className="w-1 flex-1" style={{ backgroundColor: '#39281D', height: '2rem' }}></div>
                    <div style={{ 
                      width: 0, 
                      height: 0, 
                      borderTop: '10px solid #39281D',
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      marginTop: '-1px'
                    }}></div>
                  </div>
                </div>
                <div className="hidden md:flex col-span-1 items-center justify-center py-8" style={{ width: '2rem', minWidth: '2rem', maxWidth: '2rem' }}>
                  <div className="flex items-center w-full">
                    <div className="h-1 flex-1" style={{ backgroundColor: '#39281D' }}></div>
                    <div style={{ 
                      width: 0, 
                      height: 0, 
                      borderLeft: '10px solid #39281D',
                      borderTop: '6px solid transparent',
                      borderBottom: '6px solid transparent',
                      marginLeft: '-1px'
                    }}></div>
                  </div>
                </div>

                {/* Step Card 3 */}
                <div className="col-span-1 md:col-span-1 rounded-2xl p-8 transition-all duration-200 flex flex-col" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12), 0 1px 2px rgba(57, 40, 29, 0.08)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 35px rgba(57, 40, 29, 0.22), 0 4px 12px rgba(57, 40, 29, 0.16), 0 2px 4px rgba(57, 40, 29, 0.12)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 6px 24px rgba(57, 40, 29, 0.18), 0 2px 8px rgba(57, 40, 29, 0.12), 0 1px 2px rgba(57, 40, 29, 0.08)'}>
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-[#E0B84F] text-white flex items-center justify-center text-2xl font-bold relative z-10" style={{ boxShadow: '0 3px 10px rgba(224, 184, 79, 0.35)', backgroundColor: '#E0B84F' }}>
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#39281D] mb-3 text-center" style={{ lineHeight: '1.4' }}>
                    You start helping
                  </h3>
                  <p className="text-base text-[#39281D] mb-4 text-center" style={{ lineHeight: '1.6', opacity: 0.75 }}>
                    Attend on-campus training, then begin volunteering with our supportive team.
                  </p>
                  <div className="text-center mt-6">
                    <Link
                      to="/signup"
                      className="inline-flex items-center text-base font-semibold text-[#39281D] hover:opacity-75 transition-opacity"
                    >
                      Get Started <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR GOAL */}
        <section className="mx-auto max-w-6xl px-6 py-16" style={{ backgroundColor: '#FBF9F3', marginBottom: '-10px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-[#39281D] mb-6 sm:text-4xl" style={{ lineHeight: '1.3' }}>
              Our Goal
            </h2>
            <div className="mb-6">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#39281D] mb-3" style={{ lineHeight: '1' }}>
                7,500
              </div>
              <p className="text-lg text-[#39281D] mb-4" style={{ lineHeight: '1.6', opacity: 0.8 }}>
                People we aim to serve this tax season
              </p>
            </div>
            <p className="text-md text-[#39281D] mb-3 mx-auto" style={{ lineHeight: '1.7', opacity: 0.8, maxWidth: '680px' }}>
              Our goal is to provide free, reliable tax assistance to at least 7,500 members of the Triton Tax at UC San Diego community and surrounding areas this tax season, while training student volunteers through hands-on, IRS-certified experience.
            </p>
            <p className="text-md text-[#39281D] italic mb-6" style={{ lineHeight: '1.6', opacity: 0.6 }}>
              With your support, we can make that goal a reality.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <div>
              <h3 className="text-3xl font-semibold text-[#39281D] mb-3" style={{ lineHeight: '1.4' }}>
                Be part of the work behind that goal.
              </h3>
              <p className="text-lg text-[#39281D] mb-6" style={{ lineHeight: '1.6', opacity: 0.8 }}>
                Become a Triton Tax volunteer and make a real impact.
              </p>
              <Link
                to="/signup"
                className="inline-block rounded-full bg-[#E0B84F] px-8 py-4 text-base font-semibold text-[#39281D] text-center transition-colors"
                style={{ boxShadow: '0 3px 12px rgba(224, 184, 79, 0.35), 0 1px 4px rgba(224, 184, 79, 0.25)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D4A843'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E0B84F'}
              >
                Sign Up to Volunteer
              </Link>
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
    </>
  );
}

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import bgrndImage from "./assets/bgrnd.png";

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

export default function InstagramLandingPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const isScrollingRef = useRef(false);
  const hasTriggeredRef = useRef(false);
  const initialScrollYRef = useRef(window.scrollY);

  useEffect(() => {
    window.scrollTo(0, 0);
    initialScrollYRef.current = 0;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Don't do anything if we're programmatically scrolling
          if (isScrollingRef.current) {
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          // Only proceed if user is actively scrolling down (not on page load)
          const scrollDelta = currentScrollY - lastScrollY;
          if (scrollDelta <= 0 || hasTriggeredRef.current) {
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          // Make sure user has scrolled at least 100px from initial position
          if (currentScrollY < 100) {
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          const formSection = document.getElementById('signup-form');
          const howItWorksSection = document.querySelector('section[style*="background-color: #4A3327"]');
          
          if (!formSection || !howItWorksSection) {
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          const formTop = formSection.getBoundingClientRect().top;
          const howItWorksBottom = howItWorksSection.getBoundingClientRect().bottom;

          // Only trigger if user has scrolled past the cards section and form is not yet at top
          // This makes it feel like it's just completing their scroll
          if (howItWorksBottom < 0 && formTop > 50 && formTop < 300) {
            hasTriggeredRef.current = true;
            isScrollingRef.current = true;
            
            // Complete the scroll to form section
            formSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            // Reset flags after scroll completes
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 1000);
          }

          // Reset trigger if user scrolls back up past the cards
          if (howItWorksBottom > 50) {
            hasTriggeredRef.current = false;
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Small delay to ensure page is loaded
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{styles}</style>

      <main
        className="min-h-screen text-zinc-900 relative isolate"
        style={{
          background: "#FBF9F3",
        }}
      >
        {/* subtle texture overlay */}
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

        {/* HERO */}
        <section className="w-full relative overflow-hidden min-h-screen pt-6 pb-16 -mt-2 hero-section md:pt-8 md:pb-20">
          <div className="mx-auto relative max-w-6xl px-6 h-full flex flex-col gap-0 desktop-layout">
            {/* Logo at top */}
            <div className="mb-8 md:mb-10 text-left">
              <div className="text-xl font-extrabold tracking-tight text-[#39281D]">Triton Tax</div>
              <div className="text-xs font-medium text-[#0F1108] opacity-70">
                An IRS VITA Program
              </div>
            </div>

            {/* Left: headline + copy + CTAs */}
            <div className="order-2 md:order-1 md:w-1/2 md:pr-8 text-center md:text-left -mt-4 md:mt-0">
              <h1 className="text-5xl font-semibold tracking-tight leading-tight sm:text-6xl md:hidden text-center" style={{ color: '#291D14' }}>
                Join Triton Tax
              </h1>
              <h1 className="hidden md:block text-5xl font-semibold tracking-tight leading-tight sm:text-6xl" style={{ color: '#291D14' }}>
                Become a Certified Tax Preparer with Triton Tax
              </h1>

              <div className="mt-3 max-w-xl mx-auto">
                <p className="text-base leading-relaxed text-[#39281D] opacity-75 sm:text-lg">
                  Get IRS-certified, gain real experience, and make an impact at UC San Diego
                </p>
                
                <div className="mt-5 space-y-3 flex flex-col items-start max-w-fit mx-auto md:mx-0">
                  {/* IRS Certified in 2 Weeks */}
                  <div className="flex gap-3 items-center justify-start">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#291D14] bg-opacity-15 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#291D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-lg text-[#291D14] opacity-85 sm:text-xl" style={{ lineHeight: '1.5' }}>
                      IRS Certified in 2 Weeks
                    </p>
                  </div>

                  {/* Resume-Ready Experience */}
                  <div className="flex gap-3 items-center justify-start">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#291D14] bg-opacity-15 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#291D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-lg text-[#291D14] opacity-85 sm:text-xl" style={{ lineHeight: '1.5' }}>
                      Resume-Ready Experience
                    </p>
                  </div>

                  {/* Network & Grow */}
                  <div className="flex gap-3 items-center justify-start">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#291D14] bg-opacity-15 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#291D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-lg text-[#291D14] opacity-85 sm:text-xl" style={{ lineHeight: '1.5' }}>
                      Network & Grow
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <a
                    href="#signup-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="rounded-full bg-[#E0B84F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D0A83F] transition-all cursor-pointer"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="image-container flex items-end justify-center md:justify-end relative md:absolute md:bottom-0 md:right-6 md:-translate-x-[-30px] md:translate-y-[150px] -mx-6 md:mx-0 -mt-[15px] md:mt-0 mb-0 md:mb-auto md:z-10 order-1 md:order-2">
              <div className="relative h-[240px] w-full max-w-none sm:h-[300px] sm:max-w-[420px] md:h-[480px] md:max-w-[560px] progressive-image-size hero-image-shrink">
                <img
                  src={bgrndImage}
                  alt="Volunteer tax preparation"
                  className="float h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ripple curve divider (cream -> brown) */}
        <div
          className="relative w-full overflow-hidden curve-divider-container"
          style={{ backgroundColor: "#FBF9F3", lineHeight: 0 }}
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
                {/* Mobile: Back band */}
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

                {/* Mobile: Middle band */}
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

                {/* Mobile: Front band */}
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

        {/* HOW IT WORKS - Brown background */}
        <section className="relative w-full overflow-hidden pt-0 pb-24" style={{ backgroundColor: '#4A3327', marginTop: '-1px' }}>
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center sm:text-4xl" style={{ lineHeight: '1.2', letterSpacing: '-0.02em' }}>
              How It Works
            </h2>

            <div className="relative">
              <div className="steps-grid-5 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-stretch">
                {/* Step Card 1 */}
                <div className="col-span-1 md:col-span-1 rounded-2xl p-8 transition-all duration-200 flex flex-col relative" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.2), 0 3px 12px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.12)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'}>
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
                    <div className="w-1 flex-1" style={{ backgroundColor: '#F5F5F4', height: '2rem' }}></div>
                    <div style={{ 
                      width: 0, 
                      height: 0, 
                      borderTop: '10px solid #F5F5F4',
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      marginTop: '-1px'
                    }}></div>
                  </div>
                </div>
                <div className="hidden md:flex col-span-1 items-center justify-center py-8" style={{ width: '2rem', minWidth: '2rem', maxWidth: '2rem' }}>
                  <div className="flex items-center w-full">
                    <div className="h-1 flex-1" style={{ backgroundColor: '#F5F5F4' }}></div>
                    <div style={{ 
                      width: 0, 
                      height: 0, 
                      borderLeft: '10px solid #F5F5F4',
                      borderTop: '6px solid transparent',
                      borderBottom: '6px solid transparent',
                      marginLeft: '-1px'
                    }}></div>
                  </div>
                </div>

                {/* Step Card 2 */}
                <div className="col-span-1 md:col-span-1 rounded-2xl p-8 transition-all duration-200 flex flex-col relative" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.2), 0 3px 12px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.12)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'}>
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
                    <div className="w-1 flex-1" style={{ backgroundColor: '#F5F5F4', height: '2rem' }}></div>
                    <div style={{ 
                      width: 0, 
                      height: 0, 
                      borderTop: '10px solid #F5F5F4',
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      marginTop: '-1px'
                    }}></div>
                  </div>
                </div>
                <div className="hidden md:flex col-span-1 items-center justify-center py-8" style={{ width: '2rem', minWidth: '2rem', maxWidth: '2rem' }}>
                  <div className="flex items-center w-full">
                    <div className="h-1 flex-1" style={{ backgroundColor: '#F5F5F4' }}></div>
                    <div style={{ 
                      width: 0, 
                      height: 0, 
                      borderLeft: '10px solid #F5F5F4',
                      borderTop: '6px solid transparent',
                      borderBottom: '6px solid transparent',
                      marginLeft: '-1px'
                    }}></div>
                  </div>
                </div>

                {/* Step Card 3 */}
                <div className="col-span-1 md:col-span-1 rounded-2xl p-8 transition-all duration-200 flex flex-col relative" style={{ backgroundColor: '#FBF9F3', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.2), 0 3px 12px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.12)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'}>
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

        {/* SIGNUP FORM SECTION - White background */}
        <section id="signup-form" className="mx-auto max-w-3xl px-6 pt-12 pb-20" style={{ backgroundColor: '#FBF9F3' }}>
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-[#39281D] mb-4 sm:text-5xl" style={{ lineHeight: '1.2' }}>
              Become a Tax Preparer
            </h1>
            <p className="text-lg text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
              Apply to join our team and help provide free tax assistance to the Triton Tax at UC San Diego community
            </p>
          </div>

          <form 
            action="https://formsubmit.co/tritontaxforms@gmail.com" 
            method="POST"
            className="space-y-10"
          >
            {/* Hidden inputs for FormSubmit customization */}
            <input type="hidden" name="_subject" value="Tax Preparer Application - Triton Tax" />
            <input type="hidden" name="_next" value={`${window.location.origin}/signup-confirmation`} />
            <input type="hidden" name="_captcha" value="false" />

            {/* A) Contact Information */}
            <div>
              <h2 className="text-xl font-semibold mb-6" style={{ lineHeight: '1.4', color: '#2F2015' }}>A) Contact Information</h2>
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
                    placeholder="yourname@ucsd.edu"
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
              <h2 className="text-xl font-semibold mb-6" style={{ lineHeight: '1.4', color: '#2F2015' }}>B) Role Selection</h2>
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-[#39281D] mb-2">
                  Role Applying For <span className="text-red-600">*</span>
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
                  <option value="Senior Tax Preparer">Senior Tax Preparer</option>
                  <option value="Tax Preparer">Tax Preparer</option>
                  <option value="Client Intake Specialist">Client Intake Specialist</option>
                </select>
              </div>
              <div className="space-y-3 p-4 rounded-lg" style={{ backgroundColor: 'rgba(57, 40, 29, 0.03)' }}>
                <p className="text-sm font-medium text-[#39281D] mb-3" style={{ lineHeight: '1.6' }}>
                  Certification and training for all roles can be completed within 2 weeks.
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-[#39281D] mb-1">Senior Tax Preparer</h4>
                  <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                    Certs: Advanced IRS VITA + one specialty (International or Military).<br />
                    Role: Support complex cases, assist with quality review, provide technical support.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#39281D] mb-1">Tax Preparer</h4>
                  <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                    Certs: Advanced IRS VITA.<br />
                    Role: Prepare full-scope tax returns and handle cases escalated from intake.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#39281D] mb-1">Client Intake Specialist</h4>
                  <p className="text-sm text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                    Certs: Basic IRS VITA.<br />
                    Role: Conduct client intake, prepare limited-scope returns, and route complex cases.
                  </p>
                </div>
              </div>
            </div>

            {/* C) Certification Awareness */}
            <div>
              <h2 className="text-xl font-semibold mb-6" style={{ lineHeight: '1.4', color: '#2F2015' }}>C) Certification Awareness</h2>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="certificationAware"
                  id="certificationAware"
                  required
                  className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                  style={{ accentColor: '#5A3E30' }}
                />
                <label htmlFor="certificationAware" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                  I understand IRS VITA certification is required for my role by the start of the tax season, and training/support will be provided before the season begins. <span className="text-red-600">*</span>
                </label>
              </div>
            </div>

            {/* D) Experience Level */}
            <div>
              <h2 className="text-xl font-semibold mb-6" style={{ lineHeight: '1.4', color: '#2F2015' }}>D) Experience Level</h2>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-[#39281D] mb-2">
                  Tax preparation experience <span className="text-red-600">*</span>
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
                  <option value="None — new, willing to train">None — new, willing to train</option>
                  <option value="Some — helped before (non-VITA)">Some — helped before (non-VITA)</option>
                  <option value="VITA volunteer — 1 season">VITA volunteer — 1 season</option>
                  <option value="VITA volunteer — 2+ seasons">VITA volunteer — 2+ seasons</option>
                </select>
              </div>
            </div>

            {/* E) Languages */}
            <div>
              <h2 className="text-xl font-semibold mb-6" style={{ lineHeight: '1.4', color: '#2F2015' }}>E) Languages</h2>
              <div>
                <label htmlFor="languages" className="block text-sm font-medium text-[#39281D] mb-2">
                  Languages spoken fluently <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="languages"
                  id="languages"
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
                  placeholder="Example: English, Spanish, Mandarin"
                />
              </div>
            </div>

            {/* F) Availability & Commitment */}
            <div>
              <h2 className="text-xl font-semibold mb-6" style={{ lineHeight: '1.4', color: '#2F2015' }}>F) Availability & Commitment</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-[#39281D] mb-2">
                    Availability during tax season (Feb–April) <span className="text-red-600">*</span>
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
                    <option value="">Select availability...</option>
                    <option value="2–4 hours/week">2–4 hours/week</option>
                    <option value="4–6 hours/week">4–6 hours/week</option>
                    <option value="6+ hours/week">6+ hours/week</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDays" className="block text-sm font-medium text-[#39281D] mb-2">
                    Preferred clinic days <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="preferredDays"
                    id="preferredDays"
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
                    <option value="">Select preference...</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Either">Either</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="seasonCommitment" className="block text-sm font-medium text-[#39281D] mb-2">
                    Season commitment <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="seasonCommitment"
                    id="seasonCommitment"
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
                    <option value="">Select commitment...</option>
                    <option value="Can commit full season">Can commit full season</option>
                    <option value="Partial season">Partial season</option>
                  </select>
                </div>
              </div>
            </div>

            {/* G) Compliance & Reliability */}
            <div>
              <h2 className="text-xl font-semibold mb-6" style={{ lineHeight: '1.4', color: '#2F2015' }}>G) Compliance & Reliability</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="confidentiality"
                    id="confidentiality"
                    required
                    className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                    style={{ accentColor: '#5A3E30' }}
                  />
                  <label htmlFor="confidentiality" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                    Will maintain confidentiality of taxpayer information <span className="text-red-600">*</span>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="training"
                    id="training"
                    required
                    className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                    style={{ accentColor: '#5A3E30' }}
                  />
                  <label htmlFor="training" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                    Will complete required training before working with taxpayers <span className="text-red-600">*</span>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="accuracy"
                    id="accuracy"
                    required
                    className="mt-1 mr-3 w-5 h-5 rounded border-[#39281D] border-opacity-30 text-[#5A3E30] focus:ring-[#39281D]"
                    style={{ accentColor: '#5A3E30' }}
                  />
                  <label htmlFor="accuracy" className="text-base text-[#39281D] opacity-75" style={{ lineHeight: '1.6' }}>
                    Information provided is accurate <span className="text-red-600">*</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-full bg-[#5A3E30] px-5 py-3 text-base font-semibold text-white transition-colors"
                style={{ boxShadow: '0 3px 12px rgba(90, 62, 48, 0.25), 0 1px 4px rgba(57, 40, 29, 0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#39281D'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5A3E30'}
              >
                Submit Application
              </button>
            </div>
            
            {/* Marketing link - discreet */}
            <div className="mt-6 text-center">
              <p className="text-sm text-[#39281D] opacity-50">
                Interested in marketing instead?{' '}
                <Link 
                  to="/marketing-signup" 
                  className="underline hover:opacity-70 transition-opacity"
                >
                  Apply for Office of Marketing
                </Link>
              </p>
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

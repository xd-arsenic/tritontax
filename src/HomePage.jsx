import React, { useState, useEffect, useRef } from "react";
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
`;

export default function HomePage() {
  const [showRotateMessage, setShowRotateMessage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasSnappedRef = useRef(false);
  const learnMoreRef = useRef(null);

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

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
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
          
          // Snap to "Our goal" section
          const learnMoreSection = learnMoreRef.current;
          if (learnMoreSection) {
            learnMoreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        background: "#f5f5f4",
      }}
      >
      

      {/* Gradient extends to bottom of page for smooth fade */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div
          className="absolute -right-40 top-16 h-[200vh] w-[200vh] rounded-full blur-[200px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at center, rgba(90,62,48,0.35) 0%, rgba(90,62,48,0.25) 8%, rgba(90,62,48,0.18) 15%, rgba(90,62,48,0.12) 22%, rgba(90,62,48,0.08) 30%, rgba(90,62,48,0.05) 38%, rgba(90,62,48,0.03) 46%, rgba(90,62,48,0.02) 54%, rgba(90,62,48,0.012) 62%, rgba(90,62,48,0.006) 70%, rgba(90,62,48,0.003) 78%, rgba(245,245,244,0.002) 85%, rgba(245,245,244,0.001) 92%, transparent 100%)",
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
      </div>

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
            <div className="text-xl font-extrabold tracking-tight text-[#39281D]">
              Triton Tax
            </div>
            <div className="text-xs font-medium text-[#39281D] opacity-70">
              A Tax Preparation Assistance Program
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1.5 rounded-full bg-transparent border border-[rgba(160,130,90,0.6)] p-2 text-sm font-semibold text-[#39281D] md:flex">
            <a href="#learn-more" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Our Goal</a>
            <a href="#faq" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">FAQ</a>
            <a href="#contact" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Contact Us</a>
            <Link to="/volunteer-resources" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Volunteer Resources</Link>
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
              <a
                href="#learn-more"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                Our Goal
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                Contact Us
              </a>
              <Link
                to="/volunteer-resources"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                Volunteer Resources
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
      <section className="w-full relative overflow-hidden min-h-screen pt-6 pb-40 -mt-2 hero-section md:pt-8 md:pb-56">
        <div className="mx-auto relative max-w-6xl px-6 h-full flex flex-col desktop-layout">
          {/* Left: headline + copy + CTAs */}
          <div className="order-2 md:order-1 md:w-1/2 md:pr-8 text-center md:text-left">
            <h1 className="text-5xl font-semibold tracking-tight leading-tight sm:text-6xl" style={{ color: '#291D14' }}>
              Be Part of Triton Tax
            </h1>

            

            <div className="mt-3 max-w-xl mx-auto md:mx-0">
              <p className="text-base leading-relaxed text-[#39281D] opacity-75 sm:text-lg hide-between-md-desktop">
              Looking for hands-on experience? We’re hiring students as Tax Preparers, with a few positions also available in the Office of Marketing and Communications. No experience needed.
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
          <div className="image-container flex items-end justify-center md:justify-end relative md:absolute md:bottom-0 md:right-6 mt-6 md:mt-0 md:z-10 order-1 md:order-2">
            <div className="relative h-[240px] w-full max-w-[340px] sm:h-[300px] sm:max-w-[420px] md:h-[480px] md:max-w-[560px] progressive-image-size">
              <img
                src={bgrndImage}
                alt="Volunteer tax preparation"
                className="float h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* OUR GOAL */}
      <section id="learn-more" ref={learnMoreRef} className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our goal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
            Triton Tax aims to provide free, accessible, and reliable tax assistance to UC San Diego students and staff, including campus employees across all roles. While our primary focus is serving the UCSD community, we also support individuals and families in the surrounding area. <br /> <br /> To maximize accessibility, approximately 75% of our tax clinics are held on campus, with free transportation provided for off-campus community members.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="rounded-full bg-[#1E4262] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#15304a]"
              >
                Get started
              </Link>
              <a
                href="#faq"
                className="rounded-full border border-[#39281D] border-opacity-20 border-opacity-40 px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-transparent bg-opacity-15"
              >
                FAQs
              </a>
            </div>
          </div>

            <div id="how-it-works" className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 p-6" style={{ backgroundColor: 'rgba(60, 67, 30, 0.85)' }}>
            <h3 className="text-lg font-semibold text-white">How it works (becoming a tax preparer)</h3>
            <ol className="mt-4 space-y-3 text-white">
              <li>
                <span className="font-medium text-white">1.</span> Complete the volunteer sign‑up form and indicate your interests.
              </li>
              <li>
                <span className="font-medium text-white">2.</span> Start the IRS certification course (Basic required; Advanced encouraged).
              </li>
              <li>
                <span className="font-medium text-white">3.</span> Pass the IRS certification exam by the required deadline indicated in the email you recieve after submitting your interest form.
              </li>
              <li>
                <span className="font-medium text-white">4.</span> Attend on-campus training sessions to recieve hands-on training and support needed to fulfill your role.
              </li>
              <li>
                <span className="font-medium text-white">5.</span> Begin volunteering during tax season with on‑site support and supervision.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 p-6" style={{ backgroundColor: 'rgba(90, 62, 48, 0.85)' }}>
            <h3 className="text-lg font-semibold text-white">Sign up</h3>
            <p className="mt-2 text-sm text-white opacity-90">
              Sign up to become a tax preparer or join the Office of Marketing. <br></br><br></br>
              Tax preparers interested in additional responsibility and commitment may apply for leadership roles.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Become a Tax Preparer
              </Link>
              <Link
                to="/signup"
                className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Join Marketing
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 p-6" style={{ backgroundColor: 'rgba(255, 255, 0, 0.05)' }}>
            <h3 className="text-lg font-semibold text-[#39281D]">Benefits</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>Earn IRS certification (Basic or Advanced)</li>
              <li>Gain valuable tax preparation and financial skills</li>
              <li>Make a meaningful impact in your community</li>
              <li>Build your resume with real-world experience</li>
              <li>Network with peers and professionals</li>
              <li>Receive hands-on training and support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 p-6" style={{ backgroundColor: 'rgba(30, 66, 98, 0.87)' }}>
          <h3 className="text-lg font-semibold mb-6 text-white">Frequently Asked Questions</h3>
          <div className="space-y-8">
            <div>
              <p className="font-semibold text-white opacity-90">Who can volunteer with Triton Tax?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                Any UC San Diego student is welcome to apply. No prior tax or finance experience is required.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">Do I need tax experience to volunteer?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                No. All volunteers receive training, and IRS certification is provided before participating in tax clinics.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">What training is required?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                All volunteers must complete at least the IRS <strong>Basic</strong> certification. The <strong>Advanced</strong> certification is encouraged for those with additional availability or interest.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">How long does the training take?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                Training typically takes <strong>7–20 hours</strong>, depending on the certification level selected and prior experience.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">When do tax clinics take place?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                Tax clinics typically begin in early February and run throughout the tax season. We will aim to hold around <strong>75% of our clinics on campus</strong>.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">Who does Triton Tax serve?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                Triton Tax primarily serves UC San Diego students and staff, including campus employees across all roles. We also provide services to members of the surrounding community.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">Is transportation provided for off-campus clinics?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                Yes. Free transportation is provided for events held off-campus. If you have your own car, you can also recieve a gas voucher but we ask that you carpool with other volunteers if possible.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">What roles are available?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                Within the Office of operations, we offer the role of <strong>tax preparer</strong>. This is our most needed role and is prefect for students who are interested in gaining hands-on experience with tax preparation and financial skills and are looking to build their resume. 
                For those interested in more senior roles within the Office of Operations, we are also recruting <strong>senior tax preparers</strong> who must complete advanced training and certification. 
                <br></br>
                Additionally, the Office of Marketing is looking for <strong>graphic designers, social media managers, and content creators</strong> who are interested in promoting our program and engaging with our community.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">How much time does volunteering require?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                Time commitments vary by role, but most volunteers participate during scheduled clinics and periodic meetings throughout the tax season.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white opacity-90">How do I sign up?</p>
              <p className="mt-2 text-sm text-white opacity-85">
                You can apply through our <Link to="/signup" className="underline hover:opacity-75">volunteer registration form</Link>. Once your application is reviewed, you'll receive role-specific next steps by email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER INFO */}
      <section id="volunteer" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 bg-white p-6">
          <h3 className="text-lg font-semibold">For Current Volunteers</h3>
          <p className="mt-2 text-sm text-zinc-700">
            Access educational materials, training resources, and volunteer tools to support your role. Find everything you need to prepare for tax season and stay up-to-date with procedures and policies.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/volunteer-resources"
              className="rounded-full bg-[#E0B84F] px-5 py-2.5 text-sm font-semibold text-[#39281D] hover:bg-[#d4a842]"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 p-6">
          <h3 className="text-lg font-semibold">Contact us</h3>
          <p className="mt-2 text-sm text-zinc-700">
            Add your program email and office hours here.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-transparent bg-opacity-15 px-4 py-2 text-zinc-900">
              Email: tritontax@ucsd.edu
            </span>
            <span className="rounded-full bg-transparent bg-opacity-15 px-4 py-2 text-zinc-900">
              Location: UC San Diego
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#39281D] border-opacity-20 border-opacity-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} Triton Tax</span>
          <div className="flex gap-4">
            <a className="hover:text-zinc-900" href="#learn-more">
              Our goal
            </a>
            <a className="hover:text-zinc-900" href="#volunteer">
              Volunteer info
            </a>
            <Link className="hover:text-zinc-900" to="/volunteer-resources">
              Volunteer Resources
            </Link>
            <a className="hover:text-zinc-900" href="#contact">
              Contact
            </a>
            <Link className="hover:text-zinc-900" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}

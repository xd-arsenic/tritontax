import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function VolunteerResources() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
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

      {/* subtle texture overlay - optimized for performance */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.08]"
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
            <Link to="/" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Home</Link>
            <Link to="/volunteer-resources" className="rounded-full bg-[#3C431E] px-3.5 py-2 text-white hover:bg-[#2d3416] whitespace-nowrap">Resources</Link>
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
          <div className="md:hidden border-t border-[rgba(160,130,90,0.3)] bg-[#f5f5f4]">
            <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#39281D] hover:bg-[rgba(160,130,90,0.12)] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/volunteer-resources"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white bg-[#3C431E] hover:bg-[#2d3416] transition-colors"
              >
                Resources
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

      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#39281D] sm:text-5xl">
            Volunteer Resources
          </h1>
          <p className="mt-4 text-base text-[#39281D] opacity-75 sm:text-lg max-w-2xl mx-auto">
            Educational materials and resources for current Triton Tax volunteers
          </p>
        </div>
      </section>

      {/* RESOURCES CONTENT */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="space-y-6">
          {/* IRS Certification */}
          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 bg-transparent bg-opacity-15 p-6">
            <h2 className="text-xl font-semibold text-[#39281D] mb-4">IRS Certification Materials</h2>
            <p className="text-sm text-zinc-700 mb-4">
              Access training materials and resources for IRS Basic and Advanced certifications.
            </p>
            <div className="space-y-3">
              <a
                href="https://www.irs.gov/individuals/irs-link-learn-taxes"
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">IRS Link & Learn Taxes</div>
                <div className="text-sm text-zinc-600 mt-1">Official IRS training portal for tax preparers</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Basic Certification Study Guide</div>
                <div className="text-sm text-zinc-600 mt-1">Review materials for Basic certification exam</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Advanced Certification Study Guide</div>
                <div className="text-sm text-zinc-600 mt-1">Review materials for Advanced certification exam</div>
              </a>
            </div>
          </div>

          {/* Training Materials */}
          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 bg-transparent bg-opacity-15 p-6">
            <h2 className="text-xl font-semibold text-[#39281D] mb-4">Training Materials</h2>
            <p className="text-sm text-zinc-700 mb-4">
              Download training presentations, handouts, and reference guides.
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Tax Preparation Training Slides</div>
                <div className="text-sm text-zinc-600 mt-1">Comprehensive training presentation for new volunteers</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Intake Process Guide</div>
                <div className="text-sm text-zinc-600 mt-1">Step-by-step guide for client intake procedures</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Quality Review Checklist</div>
                <div className="text-sm text-zinc-600 mt-1">Checklist for quality review procedures</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Common Tax Forms Reference</div>
                <div className="text-sm text-zinc-600 mt-1">Quick reference guide for common tax forms (W-2, 1099, etc.)</div>
              </a>
            </div>
          </div>

          {/* Software & Tools */}
          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 bg-transparent bg-opacity-15 p-6">
            <h2 className="text-xl font-semibold text-[#39281D] mb-4">Software & Tools</h2>
            <p className="text-sm text-zinc-700 mb-4">
              Access tax preparation software and volunteer tools.
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Tax Software Login</div>
                <div className="text-sm text-zinc-600 mt-1">Access the tax preparation software portal</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Volunteer Portal</div>
                <div className="text-sm text-zinc-600 mt-1">Sign up for shifts and view your schedule</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Resource Library</div>
                <div className="text-sm text-zinc-600 mt-1">Browse additional resources and documentation</div>
              </a>
            </div>
          </div>

          {/* Policies & Procedures */}
          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 bg-transparent bg-opacity-15 p-6">
            <h2 className="text-xl font-semibold text-[#39281D] mb-4">Policies & Procedures</h2>
            <p className="text-sm text-zinc-700 mb-4">
              Important policies, procedures, and compliance information.
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Privacy & Confidentiality Policy</div>
                <div className="text-sm text-zinc-600 mt-1">Guidelines for handling client information</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Volunteer Code of Conduct</div>
                <div className="text-sm text-zinc-600 mt-1">Standards and expectations for volunteers</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4 hover:bg-opacity-70 transition-colors"
              >
                <div className="font-semibold text-[#39281D]">Clinic Procedures Manual</div>
                <div className="text-sm text-zinc-600 mt-1">Step-by-step procedures for running tax clinics</div>
              </a>
            </div>
          </div>

          {/* Support & Contact */}
          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 bg-transparent bg-opacity-15 p-6">
            <h2 className="text-xl font-semibold text-[#39281D] mb-4">Support & Contact</h2>
            <p className="text-sm text-zinc-700 mb-4">
              Need help? Reach out to the Triton Tax team.
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4">
                <div className="font-semibold text-[#39281D]">Email Support</div>
                <div className="text-sm text-zinc-600 mt-1">tritontax@ucsd.edu</div>
              </div>
              <div className="rounded-lg border border-[#39281D] border-opacity-20 bg-white bg-opacity-50 p-4">
                <div className="font-semibold text-[#39281D]">Office Hours</div>
                <div className="text-sm text-zinc-600 mt-1">Monday - Friday, 9:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#39281D] border-opacity-20 border-opacity-30 mt-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} Triton Tax</span>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-zinc-900">Home</Link>
            <Link to="/volunteer-resources" className="hover:text-zinc-900">Volunteer Resources</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

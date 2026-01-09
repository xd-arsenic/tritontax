import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          <nav className="hidden items-center gap-1.5 rounded-full bg-transparent border border-[rgba(160,130,90,0.6)] p-2 text-sm font-semibold text-[#39281D] md:flex">
            <Link to="/" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Home</Link>
            <Link to="/volunteer-resources" className="rounded-full px-3.5 py-2 hover:bg-[rgba(160,130,90,0.12)] whitespace-nowrap">Resources</Link>
            <Link to="/signup" className="rounded-full bg-[#3C431E] px-3.5 py-2 text-white hover:bg-[#2d3416] whitespace-nowrap">Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* SIGNUP OPTIONS */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-[#39281D] sm:text-5xl mb-4">
            Sign Up to Volunteer
          </h1>
          <p className="text-base text-[#39281D] opacity-75 sm:text-lg max-w-2xl mx-auto">
            Choose the role that interests you most
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Tax Preparers Option */}
          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1E4262] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#39281D] mb-2">Tax Preparers</h2>
              <p className="text-sm text-zinc-600">
                Prepare tax returns for community members
              </p>
            </div>
            <ul className="space-y-3 mb-6 text-sm text-zinc-700">
              <li className="flex items-start">
                <span className="text-[#1E4262] mr-2">•</span>
                <span>IRS Basic or Advanced certification</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1E4262] mr-2">•</span>
                <span>Hands-on tax preparation training</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1E4262] mr-2">•</span>
                <span>Work directly with clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1E4262] mr-2">•</span>
                <span>On-site support and supervision</span>
              </li>
            </ul>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-full bg-[#1E4262] px-6 py-3 text-sm font-semibold text-white text-center hover:bg-[#15304a] transition-colors"
            >
              Become a Tax Preparer
            </a>
          </div>

          {/* Marketing Option */}
          <div className="rounded-2xl border border-[#39281D] border-opacity-20 border-opacity-30 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E0B84F] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#39281D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#39281D] mb-2">Marketing</h2>
              <p className="text-sm text-zinc-600">
                Office of Marketing and Communications
              </p>
            </div>
            <ul className="space-y-3 mb-6 text-sm text-zinc-700">
              <li className="flex items-start">
                <span className="text-[#E0B84F] mr-2">•</span>
                <span>Marketing and outreach initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E0B84F] mr-2">•</span>
                <span>Communications and content creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E0B84F] mr-2">•</span>
                <span>Social media and digital presence</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E0B84F] mr-2">•</span>
                <span>Program promotion and engagement</span>
              </li>
            </ul>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-full bg-[#E0B84F] px-6 py-3 text-sm font-semibold text-[#39281D] text-center hover:bg-[#d4a842] transition-colors"
            >
              Join Marketing
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-sm text-[#39281D] opacity-70 hover:opacity-100 underline"
          >
            ← Back to home
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#39281D] border-opacity-20 border-opacity-30 mt-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} Triton Tax</span>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-zinc-900">Home</Link>
            <Link to="/volunteer-resources" className="hover:text-zinc-900">Volunteer Resources</Link>
            <Link to="/signup" className="hover:text-zinc-900">Sign up</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./HomePage";
import VolunteerResources from "./VolunteerResources";
import SignUpPage from "./SignUpPage";
import FAQPage from "./FAQPage";
import ContactUsPage from "./ContactUsPage";
import TaxPreparerSignUp from "./TaxPreparerSignUp";
import MarketingSignUp from "./MarketingSignUp";
import ScheduleRedirect from "./ScheduleRedirect";
import MarketingContentPage from "./MarketingContentPage";
import SignUpConfirmation from "./SignUpConfirmation";
import PartnerWithUsPage from "./PartnerWithUsPage";
import InstagramLandingPage from "./InstagramLandingPage";

// Component to track page views on route changes
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-FHYPGTRTJW', {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volunteer-resources" element={<VolunteerResources />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tax-preparer-signup" element={<TaxPreparerSignUp />} />
        <Route path="/marketing-signup" element={<MarketingSignUp />} />
        <Route path="/marketing" element={<Navigate to="/marketing-signup" replace />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/schedule" element={<ScheduleRedirect />} />
        <Route path="/mkt-content" element={<MarketingContentPage />} />
        <Route path="/signup-confirmation" element={<SignUpConfirmation />} />
        <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
        <Route path="/instagram-landing" element={<InstagramLandingPage />} />
      </Routes>
    </Router>
  );
}

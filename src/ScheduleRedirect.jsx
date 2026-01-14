import { useEffect } from "react";

export default function ScheduleRedirect() {
  useEffect(() => {
    window.location.href = "https://calendly.com/dnegreteg0001/30min";
  }, []);

  return null;
}

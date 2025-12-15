import { useEffect } from "react";
import Home from "@/pages/home";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Canary Foundation";
    const timeout = setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        return;
      }

      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return <Home />;
}


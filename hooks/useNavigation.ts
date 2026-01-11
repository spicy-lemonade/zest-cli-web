import { useState } from "react";

export type View = "landing" | "about" | "tos" | "changelog" | "privacy" | "docs" | "report" | "faq";

export const useNavigation = () => {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (view: View, sectionId?: string) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    if (sectionId && view === "landing") {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    currentView,
    isMenuOpen,
    setIsMenuOpen,
    handleNav,
  };
};

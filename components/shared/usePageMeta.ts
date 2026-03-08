import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

export const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    document.title = `${title} | Zest CLI`;

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = "Zest CLI - Local AI by Spicy Lemonade";
      if (meta) {
        meta.setAttribute(
          "content",
          "Zest CLI is a privacy-first, 100% offline natural language CLI tool for macOS. Convert plain English to shell commands locally — no cloud, no subscription."
        );
      }
    };
  }, [title, description]);
};

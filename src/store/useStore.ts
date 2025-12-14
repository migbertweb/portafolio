import { create } from "zustand";
import i18n from "../i18n/config";

interface PortfolioState {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

export const useStore = create<PortfolioState>((set) => ({
  currentLanguage: "pt",
  setLanguage: (lang: string) => {
    i18n.changeLanguage(lang);
    set({ currentLanguage: lang });
  },
  activeSection: "home",
  setActiveSection: (section: string) => set({ activeSection: section }),
  theme: "system",
  setTheme: (theme) => set({ theme }),
}));

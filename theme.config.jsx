import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Sun, Moon, LucideGithub, Search } from "lucide-react";
import SearchBar from './comp/searchBar'; // Assurez-vous d'importer le composant SearchBar

const Layout = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const getTheme = () => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          return savedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    };
    setIsDarkMode(getTheme());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const title = `${props.pageOpts.title} | Notes`;

  return (
    <div className="min-h-screen py-4 px-4 md:py-16 flex-col text-neutral-900 dark:text-foreground gap-4 items-center justify-start transition flex bg-neutral-50 dark:bg-background">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="md:w-1/2 h-full pb-6 px-2 border-b-[1px] border-neutral-200 dark:border-contrast w-full xl:w-2/5 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <a href="/" className="md:text-2xl flex text-md items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/110931544?v=4"
              className="h-10 rounded-full"
            />
          </a>
          <button onClick={toggleTheme} className="" aria-label="Toggle theme">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={toggleSearch} className="" aria-label="Toggle search">
            <Search size={24} />
          </button>
        </div>
        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/levraiardox/"
            className="text-md border-neutral-300 bg-white hover:bg-neutral-50 dark:bg-background-2 dark:hover:bg-surface-2 transition px-4 py-2 border-[1px] dark:border-contrast rounded-md flex items-center gap-2"
          >
            <LucideGithub size={20} />
            <p>Github</p>
          </a>
        </div>
      </div>

      {isSearchOpen && (
        <div className="w-full md:w-1/2 xl:w-2/5 px-2 mb-4">
          <SearchBar mdxFiles={props.mdxFiles || []} />
        </div>
      )}

      <div className="md:w-1/2 px-2 w-full grow markdown-content xl:w-2/5">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
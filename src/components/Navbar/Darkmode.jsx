import React, { useEffect, useState } from 'react';
import darkpng from '../../Asset/image/dark.png';
import lightpng from '../../Asset/image/light.png';

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      <img
        src={lightpng}
        alt="Light Mode"
       onClick={() => setTheme(theme === 'dark'? 'light' : "dark")}
        className={`absolute right-0 z-10 w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0,1)] transition-all duration-300 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={darkpng}
        alt="Dark Mode"
        onClick={() => setTheme(theme === 'dark'? 'light' : "dark")}
        className={" w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0,1)] transition-all duration-300 "}
      />
    </div>
  );
};

export default Darkmode;

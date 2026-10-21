import { useState } from 'react';
import { FaHome, FaUser, FaCode, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', link: '#home', icon: FaHome },
    { name: 'About', link: '#about', icon: FaUser },
    { name: 'Skills', link: '#skills', icon: FaCode },
    { name: 'Certificates', link: '#certificates', icon: FaCertificate },
    { name: 'Projects', link: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', link: '#contact', icon: FaEnvelope },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-4 w-[95%] max-w-4xl"
      >
        <div className="relative rounded-2xl border border-white/20 bg-gradient-to-r from-red-600 to-red-800 px-3 py-2 shadow-2xl backdrop-blur-xl">
          <div className="absolute -top-5 right-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="rounded-full bg-gray-900 p-2 text-white transition-colors backdrop-blur-sm dark:bg-gray-100 dark:text-black"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4 lg:h-5 lg:w-5" /> : <Moon className="h-4 w-4 lg:h-5 lg:w-5" />}
            </motion.button>
          </div>

          <div className="flex items-center justify-around gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <motion.a
                  key={item.name}
                  href={item.link}
                  onClick={() => setActiveTab(item.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative flex flex-1 flex-col items-center gap-0.5 px-2 py-1.5"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-white"
                    />
                  )}
                  <Icon
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}
                  />
                  <span className="text-[10px] uppercase tracking-wide text-white/80">
                    {item.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
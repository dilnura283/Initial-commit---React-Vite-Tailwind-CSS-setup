import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div className={darkMode ? 'bg-gradient-to-br from-gray-900 via-[#2e0d10] to-red-900 min-h-screen' : 'bg-gradient-to-br from-gray-50 to-red-50 min-h-screen'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
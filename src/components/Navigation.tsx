
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Calendar, Feather, LineChart, User, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', icon: Moon, label: 'Accueil' },
    { path: '/calendar', icon: Calendar, label: 'Calendrier' },
    { path: '/journal', icon: Feather, label: 'Journal' },
    { path: '/insights', icon: LineChart, label: 'Insights' },
    { path: '/profile', icon: User, label: 'Profil' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-moonIndigo-900/80 backdrop-blur-md border-b border-moonIndigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-moonIndigo-50 text-xl font-medium">
              Moon is a Girl
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-md p-2 text-moonIndigo-50 hover:bg-moonIndigo-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(path)
                      ? 'text-moonIndigo-50 bg-moonIndigo-800'
                      : 'text-moonIndigo-100 hover:text-moonIndigo-50 hover:bg-moonIndigo-800/50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-40 w-64 bg-moonIndigo-900/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="pt-20 pb-3 space-y-1">
          {links.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-3 px-6 py-3 text-base font-medium ${
                isActive(path)
                  ? 'text-moonIndigo-50 bg-moonIndigo-800'
                  : 'text-moonIndigo-100 hover:text-moonIndigo-50 hover:bg-moonIndigo-800/50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;

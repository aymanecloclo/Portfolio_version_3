import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  // Gestion du thème au chargement de la page
  useEffect(() => {
    // Vérifier la préférence de thème du système (dark ou light)
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Vérifier si un thème est sauvegardé dans localStorage
    const savedTheme = localStorage.getItem('theme');

    // Utiliser le thème sauvegardé ou le thème système par défaut
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(systemTheme); // Si aucun thème n'est sauvegardé, utiliser celui du système
    }

    // Appliquer la classe du thème au document HTML
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Fonction pour changer de thème
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme); // Sauvegarder le thème dans localStorage
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded"
      >
        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </>
  );
}

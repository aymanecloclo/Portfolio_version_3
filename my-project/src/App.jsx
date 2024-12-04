import { useState, useEffect } from 'react';
import Header from './components/Header'; // ton composant de header

export default function App() {
  const [theme, setTheme] = useState('');

  // Effet pour vérifier la préférence de l'utilisateur au démarrage
  useEffect(() => {
    // Vérifier la préférence du mode sombre du système
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme); // Ajoute la classe 'dark' ou 'light'
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = prefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme); // Ajoute la classe en fonction de la préférence système
    }
  }, []);

  // Fonction pour basculer entre les modes sombre et clair
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme); // Retirer l'ancienne classe
    document.documentElement.classList.add(newTheme); // Ajouter la nouvelle classe
    localStorage.setItem('theme', newTheme); // Enregistrer le thème dans le localStorage
  };

  return (
    <div>
      <Header />
      <button onClick={toggleTheme} className="p-2 m-4 bg-blue-500 text-white rounded">
        Toggle Dark Mode
      </button>
      {/* Le reste de ton contenu */}
    </div>
  );
}

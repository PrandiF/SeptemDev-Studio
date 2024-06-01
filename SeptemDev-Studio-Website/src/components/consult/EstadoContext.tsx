import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


interface EstadoContextProps {
  showConsult: boolean;
  showPresupuesto: boolean;
  setShowConsult: (value: boolean) => void;
  setShowPresupuesto: (value: boolean) => void;
  handleFormChangeButton: (form: 'consult' | 'presupuesto') => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const EstadoContext = createContext<EstadoContextProps | undefined>(undefined);

export const useEstado = (): EstadoContextProps => {
  const context = useContext(EstadoContext);
  if (!context) {
    throw new Error('useEstado must be used within an EstadoProvider');
  }
  return context;
};

interface EstadoProviderProps {
  children: ReactNode;
}

export const EstadoProvider: React.FC<EstadoProviderProps> = ({ children }) => {
  const [showConsult, setShowConsult] = useState(true);
  const [showPresupuesto, setShowPresupuesto] = useState(false);

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFormChangeButton = (form: 'consult' | 'presupuesto') => {
    if (form === 'consult') {
      setShowConsult(true);
      setShowPresupuesto(false);
    } else if (form === 'presupuesto') {
      setShowConsult(false);
      setShowPresupuesto(true);
    }
  };

  return (
    <EstadoContext.Provider
      value={{
        showConsult,
        showPresupuesto,
        setShowConsult,
        setShowPresupuesto,
        handleFormChangeButton,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </EstadoContext.Provider>
  );
};
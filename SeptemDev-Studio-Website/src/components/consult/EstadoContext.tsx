import React, { createContext, useContext, useState, ReactNode } from 'react';


interface EstadoContextProps {
  showConsult: boolean;
  showPresupuesto: boolean;
  setShowConsult: (value: boolean) => void;
  setShowPresupuesto: (value: boolean) => void;
  handleFormChangeButton: () => void;
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

  const handleFormChangeButton = () => {
    setShowConsult((prev) => !prev);
    setShowPresupuesto((prev) => !prev);
  };

  return (
    <EstadoContext.Provider
      value={{ showConsult, showPresupuesto, setShowConsult, setShowPresupuesto, handleFormChangeButton }}
    >
      {children}
    </EstadoContext.Provider>
  );
};
import { createContext, useContext, useState } from "react";

// Create the context
const ShowContext = createContext();

// Define the provider component
const ShowProvider = ({ children }) => {
  const [hire, setShowHire] = useState(false);
  const [language, setLanguage] = useState('en'); 

  return (
    <ShowContext.Provider value={{ hire, setShowHire ,setLanguage,language}}>
      {children}
    </ShowContext.Provider>
  );
};

// Custom hook for accessing the context
export const useShowContext = () => {
  return useContext(ShowContext);
};

export default ShowProvider;

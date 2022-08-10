import React, { createContext, useContext, useState } from 'react'

interface LanguageStateProps {
  state: boolean
  setState: React.Dispatch<boolean>
}

export const isLanguageEnglish = createContext<LanguageStateProps | null>(null);


export function useEnglishLanguage() {
  return useContext(isLanguageEnglish)
}
export function LanguageContext({children}: any) {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  const LanguageState: LanguageStateProps = {
    state: isEnglishLanguage,
    setState: setIsEnglishLanguage
  };

  return (
    <isLanguageEnglish.Provider value={LanguageState}>
        {children}
    </isLanguageEnglish.Provider>
  );
}
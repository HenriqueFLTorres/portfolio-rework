import React, { createContext, useContext, useState } from 'react';

export const isLanguageEnglish = createContext<
  [boolean, React.Dispatch<boolean>] | null
>(null);

export function useEnglishLanguage() {
  return useContext(isLanguageEnglish);
}
export function LanguageContext({ children }: any) {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  const LanguageState: [boolean, React.Dispatch<boolean>] = [
    isEnglishLanguage,
    setIsEnglishLanguage
  ];

  return (
    <isLanguageEnglish.Provider value={LanguageState}>
      {children}
    </isLanguageEnglish.Provider>
  );
}

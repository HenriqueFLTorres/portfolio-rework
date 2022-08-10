import React, { createContext, useContext, useState } from 'react'

export const isLanguageEnglish = createContext<boolean | null>(true);
export const isLanguageEnglishUpdate = createContext<React.SetStateAction<boolean>>(true);


export function useEnglishLanguage() {
  return useContext(isLanguageEnglish)
}

export function useEnglishLanguageUpdate() {
  return useContext(isLanguageEnglishUpdate)
}


export function LanguageContext({children}: any) {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  return (
    <isLanguageEnglish.Provider value={isEnglishLanguage}>
      <isLanguageEnglishUpdate.Provider value={setIsEnglishLanguage}>
        {children}
      </isLanguageEnglishUpdate.Provider>
    </isLanguageEnglish.Provider>
  );
}
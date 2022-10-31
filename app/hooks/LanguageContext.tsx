import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState
} from 'react';

export type LanguageProviderProps = {
  isEnglish: boolean;
  setIsEnglish: React.Dispatch<boolean>;
};

export const isLanguageEnglish = createContext<LanguageProviderProps>({
  isEnglish: true,
  setIsEnglish: null as unknown as React.Dispatch<boolean>
});

export function useEnglishLanguage() {
  return useContext(isLanguageEnglish);
}
export const LanguageContext: React.FC<React.ReactNode> = ({ children }) => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);

  useLayoutEffect(() => {
    const languageStorage = localStorage.getItem('isEnglishLanguage');

    if ('isEnglishLanguage' in localStorage)
      return setIsEnglishLanguage(languageStorage === 'true' ? true : false);

    return localStorage.setItem('isEnglishLanguage', 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('isEnglishLanguage', String(isEnglishLanguage));
  }, [isEnglishLanguage]);

  const LanguageState: {
    isEnglish: boolean;
    setIsEnglish: React.Dispatch<boolean>;
  } = {
    isEnglish: isEnglishLanguage,
    setIsEnglish: setIsEnglishLanguage
  };

  return (
    <isLanguageEnglish.Provider value={LanguageState}>
      {children}
    </isLanguageEnglish.Provider>
  );
};

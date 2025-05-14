//언어상태를 관리하기 위한 

"use client";

import { createContext, useState } from "react";

export const LanguageContext = createContext();

function LanguageProvider({children}){
    const [language, setLanguage] = useState("ko");

    const handleSetLanguage = (language) => {
        if(language === ("ko")){
            setLanguage("en");
        }else
    }
}
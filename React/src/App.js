//lesson 1

// import './App.css';
// import Welcome from  './lesson_1/components/comp_1';

// function App() {
//   return(
//     <Welcome></Welcome>
//   )
// }

//lesson 3
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import ContactUs from './lesson_3/components/ContactUs';
// import Thank_you from './lesson_3/components/Thank_you';

//   const App = () => {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">ContactUs</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<ContactUs />}/>
//         <Route path="/thank" element={<Thank_you />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


//lesson 4- i18n
import React, { useState } from 'react';
import { I18nContext, i18n } from './lesson_4_i18next/lang';
import Header from './lesson_4_i18next/components/Header';
import Greeter from './lesson_4_i18next/components/Greeter';
import LanguageSelector from './lesson_4_i18next/components/LanguageSelector';

const translationFunctions = {
  en: id => i18n.en[id],
  he: id => i18n.he[id]
};

function App() {
  const [lang, setLang] = useState("en");

  function toggleLang() {
    setLang(lang === "en" ? "he" : "en");
  }

  return (
    <I18nContext.Provider value={translationFunctions[lang]}>
      <div className="App">
        <Header />
        <Greeter />
        <LanguageSelector toggleLang={toggleLang} />
      </div>
    </I18nContext.Provider>
  );
}

export default App;
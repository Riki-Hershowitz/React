import { createContext } from "react";

export const i18n = {
  en: {
    hello: "hello",
    whats_your_name: "who are you?",
    byebye: "Bye Bye",
    nice_to_meet_you: "Nice to meet you",
    change_lang: "Change Language",
    current_lang: "English",
    current_lang_label: "Current Language: "
  },
  he: {
    hello: "שלום",
    whats_your_name: "איך קוראים לך?",
    byebye: "להתראות",
    nice_to_meet_you: "נעים להכיר",
    change_lang: "שנה שפה",
    current_lang: "עברית",
    current_lang_label: "השפה הנוכחית היא: "
  }
};

export const I18nContext = createContext(id => i18n.en[id]); 
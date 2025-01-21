import React, { useContext } from "react";
import { I18nContext } from "../lang";

export default function LanguageSelector(props) {
    const t = useContext(I18nContext);

  return <button onClick={props.toggleLang}>{t("change_lang")}</button>;
}
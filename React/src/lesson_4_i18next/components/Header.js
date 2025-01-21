import React from "react";
import { I18nContext } from "../lang";


export default class Header extends React.Component {
  render() {
    return (
      <I18nContext.Consumer>
        {t => (
          <p>
            {t("current_lang_label")} {t("current_lang")}
          </p>
        )}
      </I18nContext.Consumer>
    );
  }
}
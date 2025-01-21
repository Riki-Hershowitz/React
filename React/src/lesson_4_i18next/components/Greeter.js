import React, { useState, useContext } from "react";
import { I18nContext } from "../lang";
import "./Greeter.css";


export default function Greeter(props) {
  const [name, setName] = useState("");
  const t = useContext(I18nContext);

  return (
    <>
      <label>
        {t("hello")}, {t("whats_your_name")}<tr></tr>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <p>
        {t("nice_to_meet_you")} {name}
      </p>
    </>
  );
}
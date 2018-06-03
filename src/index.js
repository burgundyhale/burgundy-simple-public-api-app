import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import getStore from "./store";
import AmiibosApp from "./containers/amiibos-app";

import translations from "../public/translations";
import "./assests/amiibos.css";

ReactDOM.render(
  <IntlProvider messages={translations.messages} locale={translations.locale}>
    <Provider store={getStore()}>
      <AmiibosApp />
    </Provider>
  </IntlProvider>,
  document.getElementById("root"),
);

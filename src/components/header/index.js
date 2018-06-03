import React from "react";
import { FormattedMessage } from "react-intl";

const Header = () => (
  <div className="bsa-flex">
    <h1 className="bsa-h1 bsa-green">
      <FormattedMessage id="simple.app.title" />
    </h1>
  </div>
);

export default Header;

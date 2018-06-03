import React from "react";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";

const LoadingStatus = ({ intl }) => (
  <div className="bsa-center">
    <i className="fa fa-spinner fa-spin fa-3x bsa-green" />
    <h1 className="bsa-green">
      <FormattedMessage id="simple.app.status.loading" />
    </h1>
  </div>
);

LoadingStatus.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(LoadingStatus);

import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import { FormattedMessage } from "react-intl";

const AmiiboDetails = ({ amiibo }) => {
  const amiiboRelease = release =>
    map(release, (value, key) => (
      <li key={`${key}-${value}`}>
        <FormattedMessage
          id="simple.app.amiibo.details.detail.format"
          values={{
            0: key,
            1: value,
          }}
        />
      </li>
    ));

  const details = map(amiibo, (value, key) => {
    if (key === "release") {
      return (
        <li key={`${key}-${value}`}>
          <span className="bsa-bold">
            <FormattedMessage id="simple.app.amiibo.details.release" />
          </span>
          <ul className="bsa-ul">{amiiboRelease(value)}</ul>
        </li>
      );
    }

    return (
      <li key={`${key}-${value}`}>
        <span className="bsa-bold">
          <FormattedMessage id={`simple.app.amiibo.details.${key}`} />
        </span>
        <span>{value}</span>
      </li>
    );
  });

  return (
    <ul className="bsa-ul bsa-ul-no-padding bsa-amiibo-wrapper">{details}</ul>
  );
};

AmiiboDetails.propTypes = {
  amiibo: PropTypes.object,
};

export default AmiiboDetails;

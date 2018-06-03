import React, { Component } from "react";
import PropTypes from "prop-types";
import { map } from "lodash";

import { statusType } from "../constants/types";
import Header from "./header";
import AmiiboDetails from "./amiibo-details";
import LoadingStatus from "./component-status/loading-status";

class AmiibosApp extends Component {
  componentDidMount() {
    if (this.props.status === statusType.INITIAL) {
      this.props.getAmiiboData();
    }
  }

  render() {
    let child = <LoadingStatus />;

    if (this.props.status === statusType.COMPLETE) {
      const amiibos = map(this.props.amiiboData, (amiibo, index) => (
        <AmiiboDetails key={index} amiibo={amiibo} />
      ));

      child = (
        <div>
          <Header />
          {amiibos}
        </div>
      );
    }

    return <div className="bsa">{child}</div>;
  }
}

AmiibosApp.propTypes = {
  amiiboData: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string,
  getAmiiboData: PropTypes.func,
};

export default AmiibosApp;

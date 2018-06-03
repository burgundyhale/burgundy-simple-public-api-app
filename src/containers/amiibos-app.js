import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AmiibosApp from "../components/amiibos-app";
import getAmiiboData from "../actions/get-amiibo-data";

const mapStateToProps = ({ amiibos }) => ({
  amiiboData: amiibos.amiiboData,
  status: amiibos.status,
});

const mapDispatchToProps = dispatch => ({
  getAmiiboData: bindActionCreators(getAmiiboData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AmiibosApp);

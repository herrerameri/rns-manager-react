import { StartAuctionComponent } from '../components';
import { parse } from 'query-string';
import { connect } from 'react-redux';
import { startAuction } from '../operations';
import { mapMetamaskResponseTypeToBootstrapVariant } from '../../../selectors';

const mapStateToProps = state => ({
  domain: parse(state.router.location.search).domain,
  response: state.startAuction.response ? {
    variant: mapMetamaskResponseTypeToBootstrapVariant(state.startAuction.response.type),
    message: state.startAuction.response.message
  } : null
});

const mapDispatchToProps = dispatch => ({
  startAuction: (domain) => dispatch(startAuction(domain))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartAuctionComponent);

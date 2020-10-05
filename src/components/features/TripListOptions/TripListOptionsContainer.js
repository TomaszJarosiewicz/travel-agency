import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addFilterTags, removeFilterTags, searchDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addFilterTags: tags => dispatch(addFilterTags(tags)),
  removeFilterTags: tags => dispatch(removeFilterTags(tags)),
  searchDuration: duration => dispatch(searchDuration(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

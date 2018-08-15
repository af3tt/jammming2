import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search(searchTerm) {
    this.props.onSearch(searchTerm);
  }
  handleTermChange(event) {
   this.setState({term: event.target.value});
  }
  render() { return (
    <div className="SearchResults">
      <h2>Results</h2>

         <TrackList tracks={this.props.searchResults}
                    onAdd={this.props.onAdd}
                    isRemomval="false" />
    </div>
  );
 }
}

export default SearchResults;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
    // to bind the new "this" value on onInputChange function
    // to prevent mishandling of value when onInputChange is called
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
 }

 // for searchbar input
 // to get the value on the searchbar
 // this is a callback function for searchbar
 onInputChange(event){
   this.setState({ term: event.target.value });
 }

// prevent the browser on submitting the form when
// you click submit or push enter
onFormSubmit(event) {
  event.preventDefault();
  // to fetch the value of input and send to fetchWeather action creator
 this.props.fetchWeather(this.state.term);
  // to clear searchbar after every submit
  this.setState({ term: '' });
}

  render() {
    return (
       <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          //callback
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
       </form>
    );
  }
}

// binds action creator to props
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}
// maps dispatch to props
export default connect(null, mapDispatchToProps)(SearchBar);

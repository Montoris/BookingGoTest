import React, { Component } from 'react'
import Suggestions from './Suggestions'
import axios from 'axios'
import './booking.css'
const API_URL = 'https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }

    handleInputChange() {
        this.setState({
            query: this.search.value
          }, () => {
            if (this.state.query && this.state.query.length >= 2) {
                this.getInfo()
            } else {
                this.setState({
                    results: []
                })
            }
        });
    }

    getInfo() {
        var encTerm = encodeURIComponent(this.state.query);
        axios.get(`${API_URL}&solrRows=6&solrTerm=${encTerm}`)
            .then(({ data }) => {
                //console.log(data.results);
                this.setState({
                    results: data.results.docs
                })
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="search" className="c-searchbox-label">Pick-up Location</label>
                <input id="search" placeholder="city, airport, station, region and district..." ref={input => this.search = input}
                    onChange={this.handleInputChange} className="input c-search-input" />
                <Suggestions results={this.state.results} />
            </div>
        )
    }
}

export default Search

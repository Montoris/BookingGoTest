import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search from './Search'
import 'bulma/bulma'
import './booking.css'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return(
        <div className="content">
            <div className="container">
                <section className="section">
                    <div id="searchbox">
                        <form autoComplete="off" className="c-searchbox">
                            <h2 className="c-searchbox-title">Where are you going?</h2>
                            <div>
                                <Search />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
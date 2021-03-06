import React, { Component } from 'react';
import './Graph.css'

class DataParser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    const csvFilePath = require('./data_graph.csv');
    let Papa = require('papaparse/papaparse.min.js');
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData,
    });
  }

  updateData(result) {
    const data = result.data;
    console.log(data);
    this.setState({
      data,
    });
  }

  render() {
    return (
      <div className="text">
        Je n'ai malheureusement pas pu faire cette page. En revanche, j'ai
        réussi à récupérer les données. C'est la raison pour laquelle, j'ai
        laissé volontairement un "console.log" (ligne 33).{' '}
      </div>
    );
  }
}

export default DataParser;

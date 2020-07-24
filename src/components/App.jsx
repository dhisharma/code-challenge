import React, { useState, useEffect } from 'react';
import { getNews } from '../actions'
import { connect } from 'react-redux';
import Header from './Header';
import Abody from './Abody';

function App(props) {
  useEffect(() => {
    props.getNews()
  });

  debugger
  return (<div>

    <Header productDetails={props.productDetails} />
    <Abody productDetails={props.productDetails} />


  </div>

  )
}

const mapStateToProps = state => {
  return { productDetails: state.productDetails }
}

App = connect(
  mapStateToProps,
  { getNews },
)(App);

export default App;

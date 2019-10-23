import React from 'react';
import ReactDOM from 'react-dom';
import Recommendation from './components/App.jsx';
// import '../dist/style.css';

ReactDOM.render(<Recommendation time={Date.now()}/>, document.getElementById('recommendations'));
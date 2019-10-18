// import react, axios, recommendations list
import React from 'react';
import Axios from 'axios';
import List from './RecommendationsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: []
    };
    
    this.getAllData = this.getAllData.bind(this);
  }
  
  // get all data from database and set state to data
  getAllData() {
    Axios.get('/api/recommendations')
      .then((res) => {
        console.log('API CALL: ', res.data);
        this.setState({
          recommendations: res.data
        });
      })
      // log state to test state is set correctly
      .then(() => {
        console.log(this.state);
      });
  }

  // call getAllData on rendering app
  componentDidMount() {
    this.getAllData();
  }

  render() {
    return (
      <div>
        <p className="time">Time: {this.props.time}</p>
        <List listings={this.state.recommendations}/>
      </div>
    );
  }
}

export default App;
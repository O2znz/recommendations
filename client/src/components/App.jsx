import React from 'react';
// import data from '../../../database/dummy-data.json';
import Axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: ''
    };
    
    this.getAllData = this.getAllData.bind(this);
  }
  
  getAllData() {
    Axios.get('/api/recommendations')
      .then((res) => {
        console.log('API CALL: ', res.data);
        this.setState({
          recommendations: res.data
        });
      })
      .then(() => {
        console.log(this.state);
      });
  }

  componentDidMount() {
    this.getAllData();

  }

  render() {
    return (
      <div>
        <p>Time: {this.props.time}</p>
      </div>
    );
  }
}

export default App;
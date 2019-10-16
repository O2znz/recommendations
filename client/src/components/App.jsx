// import react and axios
import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: ''
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
        <p>Time: {this.props.time}</p>
      </div>
    );
  }
}

export default App;
// import react, axios, recommendations list
import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import List from './RecommendationsList.jsx';

const Time = styled.p`
  text-align: center;
  color: green;
`;

const Wrapper = styled.div`
  background-color: green;
`;

// make Recommendations styled div to encompass entire module
// make styled title div from RecommendationsList
// referencing style from airbnb
const Recommendations = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const TitleDiv = styled.div`
  margin-bottom: 24px:
`;

const Title = styled.h2`
  tabindex: -1;
`;

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
        <Time>
        Time: {this.props.time}
        </Time>
        <Recommendations>
          <TitleDiv>
            <Title>
                More homes you may like
              <List listings={this.state.recommendations}/>
            </Title>
          </TitleDiv>
        </Recommendations>
      </div>
    );
  }
}

export default App;
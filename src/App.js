import React from 'react';
import axios from 'axios';
import Grades from './Grades';
import './App.css';
import * as config from './config';

class App extends React.Component {
  state = {
    isLoading: true,
    avg: 0,
    class_list: []
  };

  getGrades = async () => {
    this.setState({ isLoading: true });
    const link = 'http://192.168.0.6:5000/api?id=' + config.ID + '&pw=' + config.PW;
    const { data: { avg, class_list } } = await axios.get(link);
    this.setState({ avg: avg, class_list: class_list, isLoading: false });
  }

  componentDidMount() {
    this.getGrades();
  }
  render() {
    const { isLoading, avg, class_list } = this.state;
    return (
      <div>
        <div id="top">
          <div id="avg_box">
            <p>평균학점:</p> <p id="avg_score">{avg}</p>
          </div>
        </div>
        {
          class_list.map(element => {
            return <Grades
              key={element.id}
              id={element.id}
              title={element.title}
              grade={element.grade}
              professor={element.professor}
              score={element.score} />
          })
        }
        <div id="bottom">
          <button id="refresh" onClick={this.getGrades}>{isLoading ? 'Loading...' : 'Refresh'}</button>
        </div>
      </div >
    )
  }
}

export default App;

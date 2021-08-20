import React from "react";
import { Fragment } from "react";
import Header from "./components/header/Header";
import News from "./components/news/News";
import { Footer } from "./components/footer/Footer";
import { fetchStory } from './data/data'

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
      counter: 10,
      news: [],
    };
  }
  
  componentDidMount() {
    // const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        let arrPromise = [];
        for (let index = 0; index < this.state.counter; index++) {
          arrPromise.push(fetchStory(data[index]));
        }
        Promise.all(arrPromise).then((storyes) => {
          this.setState({
            news: storyes,
          });
        });
      });
  }
  
  loadMore = () => {
    this.setState({
      counter: this.state.counter + 10,
    })
    this.componentDidMount()
  }
  render() {
    return (
      <Fragment>
        <Header loadMore={this.loadMore} />
        <News id={this.state.news} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;

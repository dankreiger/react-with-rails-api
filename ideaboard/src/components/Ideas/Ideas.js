import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import Idea from '../Idea/Idea';
import { IdeaWrapper } from './Ideas.style';

export default class Ideas extends Component {
  state = { ideas: [] }
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/ideas').then(response => {
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }  
  render() {
    const { ideas } = this.state;
    return (
      <>
      {ideas.length ? 
      ideas.map(idea => (
        <IdeaWrapper key={idea.id}>
          <Idea {...idea}/>
        </IdeaWrapper>
      ))
      : (<Spinner />)}
      </>
    )

  }
}

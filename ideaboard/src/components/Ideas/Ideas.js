import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import Idea from '../Idea/Idea';
import { IdeasContainer } from './Ideas.style';

export default class Ideas extends Component {
  state = { ideas: [] };
  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/ideas')
      .then(response => {
        this.setState({ ideas: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    const { ideas } = this.state;
    return (
      <IdeasContainer>
        <Row>
          {ideas.length ? (
            ideas.map(idea => (
              <Col xs="12" md="6" key={idea.id}>
                <Idea {...idea} />
              </Col>
            ))
          ) : (
            <Spinner />
          )}
        </Row>
      </IdeasContainer>
    );
  }
}

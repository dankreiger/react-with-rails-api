import React, { Component } from 'react';
import { Row, Button, Col } from 'reactstrap';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import Idea from '../Idea/Idea';
import { IdeasContainer } from './Ideas.style';
import update from 'immutability-helper';

export default class Ideas extends Component {
  state = { ideas: [], editingIdeaId: null };
  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/ideas.json')
      .then(response => {
        this.setState({ ideas: response.data });
      })
      .catch(error => console.log(error));
  }
  addNewIdea = () => {
    axios
      .post('http://localhost:3001/api/v1/ideas', {
        idea: { title: '', body: '' },
      })
      .then(response => {
        console.log(response);
        const ideas = update(this.state.ideas, {
          $splice: [[0, 0, response.data]],
        });
        this.setState({ ideas, editingIdeaId: response.data.id });
      })
      .catch(error => console.log(error));
  };
  updateIdea = idea => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id);
    const ideas = update(this.state.ideas, {
      [ideaIndex]: { $set: idea },
    });
    this.setState({ ideas });
  };
  render() {
    const { editingIdeaId, ideas } = this.state;
    return (
      <IdeasContainer fluid>
        {ideas.length ? (
          <>
            <Row>
              {ideas.map(idea => (
                <Col xs="12" sm="6" md="4" key={idea.id}>
                  <Idea
                    {...idea}
                    updateIdea={this.updateIdea}
                    currentlyEditing={editingIdeaId === idea.id}
                  />
                  }
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                <Button color="primary" onClick={this.addNewIdea}>
                  New Idea
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          <Spinner />
        )}
      </IdeasContainer>
    );
  }
}

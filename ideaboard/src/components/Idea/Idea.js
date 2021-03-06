import React, { Component } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { IdeaWrapper, IdeaBodyText, IdeaTitleText } from './Idea.styles';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body,
      currentlyEditing: this.props.currentlyEditing,
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBlur = () => {
    axios
      .put(`http://localhost:3001/api/v1/ideas/${this.props.id}`, {
        idea: { title: this.state.title, body: this.state.body },
      })
      .then(response => {
        console.log(response);
        this.setState({
          currentlyEditing: !this.state.title.length || !this.state.body.length,
        });
        this.props.updateIdea(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { body, title, currentlyEditing } = this.state;
    return (
      <IdeaWrapper>
        {currentlyEditing ? (
          <Form onBlur={this.handleBlur} className="w-100">
            <FormGroup row>
              <Col>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={this.handleInput}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Input
                  type="textarea"
                  name="body"
                  placeholder="Idea"
                  onChange={this.handleInput}
                />
              </Col>
            </FormGroup>
          </Form>
        ) : (
          <>
            <IdeaTitleText className="lead">{title}</IdeaTitleText>
            <IdeaBodyText>{body}</IdeaBodyText>
          </>
        )}
      </IdeaWrapper>
    );
  }
}

Idea.defaultProps = {
  currentlyEditing: false,
};
Idea.propTypes = {
  idea: shape({
    body: string,
    currentlyEditing: bool,
    title: string,
    updateIdea: func,
  }),
};

export default Idea;

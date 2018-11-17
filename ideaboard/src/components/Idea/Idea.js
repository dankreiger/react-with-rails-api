import React from 'react';
import { shape, string } from 'prop-types';
import { IdeaWrapper, IdeaBodyText } from './Idea.styles';

const Idea = ({ title, body }) => {
  return (
    <IdeaWrapper>
      <p className="lead">{title}</p>
      <IdeaBodyText>{body}</IdeaBodyText>
    </IdeaWrapper>
  );
};

Idea.propTypes = {
  idea: shape({
    title: string,
    body: string
  })
};

export default Idea;

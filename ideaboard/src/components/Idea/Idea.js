import React from 'react';
import { shape, string } from 'prop-types';

const Idea = ({title, body}) => {
  return (
    <>
    <h1>{title}</h1>
    <p>{body}</p>
    </>
  );
}

Idea.propTypes = {
  idea: shape({
    title: string,
    body: string
  })
};

export default Idea;

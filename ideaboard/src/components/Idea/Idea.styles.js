import styled from 'styled-components';
import { Card } from 'reactstrap';

const fontSize = 16;
const lineHeight = 1.2;
const linesToShow = 3;
const fallbackHeight = fontSize * lineHeight * linesToShow;

export const IdeaWrapper = styled(Card)`
  margin-bottom: 20px;
  padding: 20px;
`;

export const IdeaBodyText = styled.p`
  display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  height: ${fallbackHeight}px; /* Fallback for non-webkit */
  margin-bottom: 0;
  font-size: ${fontSize}px;
  line-height: ${lineHeight};
  -webkit-line-clamp: ${linesToShow};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

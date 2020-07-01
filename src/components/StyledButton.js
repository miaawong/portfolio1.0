import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const ButtonFrame = styled.div`
  width: 6rem;
  height: 2.5rem;
  border: 2px solid black;
  position: absolute;
  transform: translate(-1px, -14px);
  z-index: -1;
`;

export const StyledButton = styled(Link)`
  width: 6rem;
  padding: 0.5rem;
  background: black;
  color: white;
  font-size: 20px;
  position: relative;
  z-index: 1;
`;

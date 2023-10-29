import styled from 'styled-components';

export const blueb = (o?: number): string => !o
  ? '#83A598' : `rgba(131, 165, 152, ${ o })`;

export const Header = styled.h1``;

export const ComponentContainer = styled.span`
  background: ${blueb(0.4)};
`;

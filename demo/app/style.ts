import styled, {createGlobalStyle} from 'styled-components';

// TODO: colors must go to theme-service
export const white = (o?: number): string => !o
  ? '#AFA882' : `rgba(175, 168, 130, ${ o })`;
export const cyan = (o?: number): string => !o
  ? '#5C5130' : `rgba(92, 81, 48, ${ o })`;
export const magenta = (o?: number): string => !o
  ? '#865D5D' : `rgba(134, 93, 93, ${ o })`;
export const blue = (o?: number): string => !o
  ? '#57786B' : `rgba(87, 120, 107, ${ o })`;
export const yellow = (o?: number): string => !o
  ? '#CB8F04' : `rgba(203, 143, 4, ${ o })`;
export const green = (o?: number): string => !o
  ? '#7D822E' : `rgba(125, 130, 46, ${ o })`;
export const red = (o?: number): string => !o
  ? '#C25700' : `rgba(194, 87, 0, ${ o })`;
export const black = (o?: number): string => !o
  ? '#000000' : `rgba(0, 0, 0, ${ o })`;

// b in the end of the color name stands for Bright
export const whiteb = (o?: number): string => !o
  ? '#FDF4C1' : `rgba(254, 244, 193, ${ o })`;
export const cyanb = (o?: number): string => !o
  ? '#847545' : `rgba(132, 117, 69, ${ o })`;
export const magentab = (o?: number): string => !o
  ? '#B39292' : `rgba(179, 146, 146, ${ o })`;
export const blueb = (o?: number): string => !o
  ? '#83A598' : `rgba(131, 165, 152, ${ o })`;
export const yellowb = (o?: number): string => !o
  ? '#FABD2F' : `rgba(250, 189, 47, ${ o })`;
export const greenb = (o?: number): string => !o
  ? '#B8BB26' : `rgba(184, 187, 38, ${ o })`;
export const redb = (o?: number): string => !o
  ? '#FE8019' : `rgba(254, 128, 25, ${ o })`;
export const blackb = (o?: number): string => !o
  ? '#1f1f1f' : `rgba(31, 31, 31, ${ o })`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Courier New;
    margin: 0;
    background: ${whiteb(0.3)};
    color: ${blackb()};
  }
`;

export const Container = styled.div`
  padding: 1rem;
`;

// TODO: move Header to theme-service
export const Header = styled.h1``;

export const InputContainer = styled.span`
  background: ${blueb(0.4)};
`;

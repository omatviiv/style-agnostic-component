import React from 'react';

// THIS IS PUBLICK DEMO
// DON'T IMPORT ANYTHING from demo except demo/style.ts or component from ../
// DON'T USE IMPORT ALIASES
import Component from '../';
import { ComponentContainer } from './style';

const PublicDemo: React.FC = () => <>
  <h1>Your component name here</h1>
  Demonstrate the component here:
  <ComponentContainer><Component/></ComponentContainer>
</>;

export default PublicDemo;

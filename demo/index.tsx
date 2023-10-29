import React from 'react';

import Component from '../';
import {
  Header, ComponentContainer,
} from './style';

// move all of the components used here into theme-service
// which in turn will be moved to theme-service repository
const DefaultInputDemo: React.FC = () => <>
  <Header>Your component name here</Header>
  Demonstrate the component here:
  <ComponentContainer><Component/></ComponentContainer>
</>;

export default DefaultInputDemo;

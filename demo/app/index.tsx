import React from 'react';

import PublicDemo from '../';
import {
  GlobalStyle, Container,
} from './style';

const Application: React.FC = () => <Container>
  <GlobalStyle/>
  <PublicDemo/>
</Container>;

export default Application;

import React from 'react';
import trident from 'demo/assets/trident.svg?url';
import Trident from 'demo/assets/trident.svg';
import {Container, Header, Image} from './style';
import Input from '../../';

const Application: React.FC = () => <Container>
  <Header>This is simple react app</Header>
  <br/>
  Svgr: svg as react component:
  <Trident height='1.5rem'/>
  <br/>
  Svgr: svg as url:
  <Image src={trident}/>

  Input component:
  <Input label='Name'/>
</Container>;

export default Application;

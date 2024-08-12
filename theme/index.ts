import styled from 'styled-components';

export type ComponentThemeType = {
  Container: React.ElementType,
  Label: React.ElementType,
  Input: React.ElementType,
};

const ComponentTheme: ComponentThemeType = {
  Container: styled.div``,
  Label: styled.div`
    color: lightgrey;
  `,
  Input: styled.input`
    color: darkblue;
  `,
};

export default ComponentTheme;

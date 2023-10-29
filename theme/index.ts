import styled, {StyledComponent} from 'styled-components';

export type ComponentThemeType = {
  Container: StyledComponent<'div', object, object>,
  Label: StyledComponent<'div', object, object>,
  Input: StyledComponent<'input', object, object>,
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

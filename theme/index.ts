import styled, { StyledComponent } from 'styled-components';

export type InputThemeType = {
  Container: StyledComponent<'div', object, object>,
  Label: StyledComponent<'div', object, object>,
  Input: StyledComponent<'input', object, object>,
};

const InputTheme: InputThemeType = {
  Container: styled.div``,
  Label: styled.div`
    color: lightgrey;
  `,
  Input: styled.input`
    color: darkblue;
  `,
};

export default InputTheme;

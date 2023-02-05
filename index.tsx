import React, {useState} from 'react';
import InputTheme, {InputThemeType} from './theme';

const Input: React.FC<{
  label: string,
  value?: string,
  theme?: InputThemeType,
}> = ({
  label,
  value = '',
  theme = InputTheme,
}) => {
  const [val, setVal] = useState(value);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setVal(e.target.value);

  return <theme.Container>
    <theme.Label>{label}</theme.Label>
    <theme.Input value={val} onChange={onInputChange} />
  </theme.Container>;
};

export default Input;

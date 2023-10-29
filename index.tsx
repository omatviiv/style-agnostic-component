import React, {useState} from 'react';
import ComponentTheme, {ComponentThemeType} from './theme';

// replace-oncreate: the whole componenent ofcourse :)
const Component: React.FC<{
  label?: string,
  value?: string,
  theme?: ComponentThemeType,
}> = ({
  label = '',
  value = '',
  theme = ComponentTheme,
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

export default Component;

import styled from 'styled-components';
import { Input as CommonInput } from 'antd';

export const Search = styled(CommonInput.Search)`
  align-items: center;
  background-color: hsl(0,0%,100%);
  border-color: hsl(0,0%,80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  display: flex;
  justify-content: space-between;
  min-height: 38px;
  outline: 0 !important;
  position: relative;
  transition: all 100ms;
  box-sizing: border-box;
  flex-wrap: nowrap;
  max-width: 250px;
  margin: 0 auto;
`;




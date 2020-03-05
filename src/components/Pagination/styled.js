import styled from 'styled-components';

import { Button as CommonButton } from 'antd';

export const Wrapper = styled.div`
  border-color: hsl(0,0%,80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0;
`;
export const PaginationItem = styled(CommonButton)`
  margin: 5px;
`;

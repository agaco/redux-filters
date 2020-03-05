import styled from 'styled-components';
import { Comment as CommonComment} from 'antd';

export const Wrapper = styled.div`
  background-color: hsl(0,0%,100%);
  padding: 10px;
  height: 60vh;
  overflow: auto;
  border-color: hsl(0,0%,80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  margin: 20px 0;
`;
export const Comment = styled(CommonComment)`
`;

import styled from 'styled-components';
import { Comment as CommonComment} from 'antd';

export const Wrapper = styled.div`
   padding: 10px;
   height: 60vh;
   overflow: auto;
   border: 1px solid red;
  ;
`;
export const Comment = styled(CommonComment)`
`;

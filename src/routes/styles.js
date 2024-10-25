import styled from 'styled-components';

export const ContainTopBar = styled.section`
  height: ${props => props.roleStatus && '166px'};
  position: ${props => props.roleStatus && 'fixed'};
  z-index: ${props => props.roleStatus && 9};
`;
export const ContainRoute = styled.section`
  width: 100%;
  margin-top: ${props => props.roleStatus && '200px'};
  margin-bottom: 20px;
  position: relative;
`;

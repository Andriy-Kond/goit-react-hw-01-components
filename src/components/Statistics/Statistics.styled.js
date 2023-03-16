import styled from 'styled-components';

export const Statistics = styled.section`
  padding: 20px;
`;
export const Title = styled.h2`
  margin: 0;
  padding: 20px;
  text-align: center;
  font-size: 40px;
  background-color: darkgrey;
`;
export const StatList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  background-color: antiquewhite;
  height: 100px;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 18px;
`;
export const Label = styled.span`
  padding-bottom: 10px;
`;
export const Percentage = styled.span`
  font-size: 28px;
`;

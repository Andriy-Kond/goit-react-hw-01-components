import styled from 'styled-components';

export const Profile = styled.div`
  width: 300px;
  margin: auto;

  border: 2px solid grey;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Name = styled.p`
  font-size: 30px;
  margin: 0;
`;

export const Tag = styled.p`
  margin: 0;
`;
export const Location = styled.p`
  margin: 0;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 70px;
  background-color: lightgray;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-size: 20px;
`;

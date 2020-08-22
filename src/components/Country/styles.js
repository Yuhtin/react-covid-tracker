import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 6px;
  background: #262626;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Description = styled.Text.attrs({numberOfLines: 2})`
  color: #8c8c8c;
  margin-top: 5px;
  line-height: 20px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const StatCount = styled.Text`
  color: #a6a6a6;
  margin-left: 6px;
`;

export const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #6bd4c1;
  margin-left: 5px;
`;

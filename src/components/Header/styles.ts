import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 234px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 66px 24px;
`;

export const Image = styled.Image`
  width: 135px;
  height: 31.21px;
`;

export const NewTransactionButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.background};
  width: 130px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  /* padding: 15px; */
  font-family: ${({ theme }) => theme.colors.background};
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: #ffff;
`;

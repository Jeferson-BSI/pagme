import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};
  width: 300px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.colors.background};
  font-style: normal;
  font-size: 14px;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Content = styled.View`
  margin-top: 16px;
  padding: 16px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.colors.background};
  font-size: 30px;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.background};
`;

export const LastOutcome = styled.Text`
  font-family: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.background};
`;

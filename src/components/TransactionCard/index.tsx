import { ImageProps } from 'react-native';
import {
  Container,
  HeaderCard,
  Title,
  Image,
  Content,
  Amount,
  LastOutcome,
} from './styles';

type TransactionCardProps = {
  cardValues: {
    title: string;
    amount: number;
    image: ImageProps;
    last: string;
  };
};

export function TransactionCard({ cardValues }: TransactionCardProps) {
  const { title, amount, image, last } = cardValues;

  return (
    <Container>
      <HeaderCard>
        <Title>{title}</Title>
        <Image source={image} resizeMode={'cover'} />
      </HeaderCard>
      <Content>
        <Amount>R$ {amount}</Amount>
        <LastOutcome>{last}</LastOutcome>
      </Content>
    </Container>
  );
}

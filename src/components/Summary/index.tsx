import { TransactionCard } from '../TransactionCard';
import { Container } from './styles';
import { TransactionCardTypes } from '../../utils/TransactionCardTypes';
import { ScrollView } from 'react-native';

export function Summary() {
  const amount = 1000.0;
  const last = 'Última entrada dia 13 de abril';

  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {Object.entries(TransactionCardTypes).map(([key, value]) => (
        <TransactionCard
          key={key}
          cardValues={{
            title: value.title,
            image: value.image,
            amount,
            last,
          }}
        />
      ))}
    </Container>
  );
}

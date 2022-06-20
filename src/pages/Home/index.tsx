import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Summary } from '../../components/Summary';

export function Home() {
  return (
    <Container>
      <Header />
      <Summary />
    </Container>
  );
}
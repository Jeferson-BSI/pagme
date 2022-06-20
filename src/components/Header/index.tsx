import LogoImg  from '../../assets/Logo.png';

import { 
  Container, 
  Content, 
  Image, 
  NewTransactionButton,
  TextButton
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Image source={LogoImg} resizeMode={'cover'}/>
          <NewTransactionButton activeOpacity={0.4}>
            <TextButton>
              Nova Transação
            </TextButton>
          </NewTransactionButton>
      </Content>
    </Container>
  );
}
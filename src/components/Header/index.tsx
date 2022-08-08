import { Container, Content } from "./styles";

interface HeadProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeadProps) {
  return (
    <Container>
      <Content>
        <h1>Financias Pessoais</h1>
        <button type="button" onClick={() => onOpenNewTransactionModal()}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

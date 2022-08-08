import Modal from "react-modal";
import {
  Container,
  HeaderContainer,
  TransactionTypeContainer,
  RadioBox,
} from "./styles";
import IconX from "../../assets/x.svg";
import IconSeta from "../../assets/down-arrow.svg";
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const { createTransaction } = useContext(TransactionsContext)

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      amount,
      category,
      title,
      type
    })

    setTitle("")
    setAmount(0)
    setCategory("")
    setType("deposit")

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={(event) => handleCreateNewTransaction(event)}>
        <HeaderContainer>
          <h2>Cadastrar Transação</h2>

          <button type="button" onClick={onRequestClose}>
            <img src={IconX} alt="Fechar" />
          </button>
        </HeaderContainer>

        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            activeColor="green"
            type="button"
          >
            <img className="setaPraCima" src={IconSeta} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            isActive={type === "widhdraw"}
            onClick={() => setType("widhdraw")}
            activeColor="red"
            type="button"
          >
            <img src={IconSeta} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

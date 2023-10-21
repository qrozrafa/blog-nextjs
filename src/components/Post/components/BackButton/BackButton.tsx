import * as S from './styles';

export function BackButton() {
  return (
    <S.Link href="/" className="">
      <S.IconContainer className="">
        <S.Icon size={20} />
      </S.IconContainer>
      <S.Text>Voltar à listagem</S.Text>
    </S.Link>
  );
}

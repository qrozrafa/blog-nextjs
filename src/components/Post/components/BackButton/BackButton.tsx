import * as S from './styles';

type BackButtonProps = {
  textInfo?: string;
};

export function BackButton({
  textInfo = 'Voltar à listagem'
}: BackButtonProps) {
  return (
    <S.Link href="/">
      <S.IconContainer>
        <S.Icon size={20} />
      </S.IconContainer>
      <S.Text>{textInfo}</S.Text>
    </S.Link>
  );
}

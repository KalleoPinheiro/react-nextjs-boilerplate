import * as S from './styles'

const Main = ({
  title = 'React NextJs Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title} 🚀 </S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main

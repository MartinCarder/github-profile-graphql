import styled from 'styled-components'

export const ProfileImg = styled.div`
  width: 230px;
  height: 230px;

  background: url('${props => props.img}') no-repeat center center;
  background-size: cover;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 auto;
`

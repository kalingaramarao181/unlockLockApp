import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(#0b0c1e, #3c2940);
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  height: 100px;
  width: 100px;
`

export const Description = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: white;
`

export const LockButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: white;
  background-color: #06b6d4;
  border-width: 0px;
`

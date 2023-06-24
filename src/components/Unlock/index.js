import {useState} from 'react'
import {
  MainContainer,
  LockContainer,
  Logo,
  Description,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLockStatus] = useState(false)

  const onClickLock = () => {
    setLockStatus(prevState => !prevState)
  }

  const description = isLocked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const lockText = isLocked ? 'Lock' : 'Unlock'

  return (
    <MainContainer>
      <LockContainer>
        <Logo
          src={
            isLocked
              ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
          }
          alt={isLocked ? 'unlock' : 'lock'}
        />
        <Description>{description}</Description>
      </LockContainer>
      <LockButton type="button" onClick={onClickLock}>
        {lockText}
      </LockButton>
    </MainContainer>
  )
}
export default Unlock

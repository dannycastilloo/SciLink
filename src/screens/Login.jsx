import { LoginForm } from "../components/LoginForm"
import { LogButton } from "../components/LogButton"

export const Login = () => {
  return (
    <>
      <div className="login-container">
        <LoginForm></LoginForm>
        <div className="vlarge"></div>
        <LogButton></LogButton>
      </div>
    </>
  )
}

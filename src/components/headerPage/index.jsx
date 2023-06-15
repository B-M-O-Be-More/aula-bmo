import { HeaderStyle } from "./style"
import Logo from "../../assets/logoBlue.png"

export const HeaderComponent = () => {

  return (
    <HeaderStyle>
      <img src={Logo} alt="" />

      <div className="DivA">
        <a href="/">Dash</a>
        <a href="/login">Login</a>
        <a href="/register">Registro</a>
      </div>
    </HeaderStyle>
  )
}

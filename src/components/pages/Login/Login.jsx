
import { Input } from "../../Input";
import logo from "../../img/logo-fv.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";



export function Login() {

  const navigate = useNavigate()
  const handleToSignin = async () => {
    navigate('/Cadastrovazio')
  }


  return (
    <main className="mainlogin">
      <div id="login" className="login">
        <header>
          <img className="logologin" src={logo} alt="logo" />
          <h1>Bem Vinda!</h1>
        </header>
        <form action="">
          <label>E-mail ou número de telefone:</label>
          <Input type="text" placeholder="Insira o seu e-mail ou telefone..." />
          <label>Senha:</label>
          <Input type="password" placeholder="•••••••••••" />

          <button className="entrar" onClick={handleToSignin}>ENTRAR</button>
          <div className="link">
            <a href="#">Não tem uma conta?</a>
          </div>
          <div className="separator">OU</div>
          <button className="facebook">Continue pelo Facebook</button>
          <button className="instagram">Continue pelo Instagram</button>
          <button className="email">Continue pelo E-mail</button>
        </form>
      </div>
    </main>
  );
} 

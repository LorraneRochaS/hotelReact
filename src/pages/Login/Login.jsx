import React, { useState } from "react";
import { postUser } from "../../service/api";
import Button from "../../components/Button/Button";
import S from './Login.module.css'
import { Link } from "react-router-dom";

function Login() {
  // Estado inicial dos inputs
  const [user, setUser] = useState({
    NOME: "",
    SOBRENOME: "",
    CPF: "",
    DATA_DE_NASCIMENTO: "",
    TELEFONE: "",
    EMAIL: "",
    ENDEREÇO: ""
  });

  // Estado inicial das Msg de Alerta
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  //Receber os dados do formulário
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

    // function handleChange (target, key) {
    //   const value = target.value;
    //   setUser({ ...user, [key]: value });
    // }

  //Enviar os dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();
    //para enviar para API
    postUser();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!",
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado com sucesso!",
      });
    }
  };

  function validate() {
    if (!user.name)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo nome!",
      });
    if (!user.email)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo e-mail!",
      });
    if (!user.password)
      return setStatus({
        type: "error",
        mensagem: "Erro: Necessário preencher o campo senha!",
      });
    if (user.password.length < 6)
      return setStatus({
        type: "error",
        mensagem: "Erro: A senha precisa ter pelo menos seis caracteres!",
      });

    return true;
  }

  return (
    <div className={S.container}>
      <h1 className={S.title} style={{ color: "black" }}>Cadastrar Usuário</h1>

      {status.type === "success" ? (
        <p style={{ color: "green" }}>{status.mensagem}</p>
      ) : (
        ""
      )}
      {status.type === "error" ? (
        <p style={{ color: "red" }}>{status.mensagem}</p>
      ) : (
        ""
      )}

      <form className={S.form} onSubmit={addUser}>
        <label>Nome*: </label>
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          onChange={valueInput}
          value={user.name}
        />
        <br />
        <br />
        <label>E-mail*: </label>
        <input
          type="email"
          name="email"
          placeholder="Email@example.com"
          onChange={valueInput}
          value={user.email}
        />
        <br />
        <br />
        <label>Senha*: </label>
        <input className={S.senha}
          type="password"
          name="password"
          placeholder="Senha"
          autoComplete="on"
          onChange={valueInput}
          value={user.password}
        />
        <br />
        <br />
        <h6>* Campos obrigatórios</h6>
        <br />
        <br />
        {/* após validação e inserção de dados na api, trocar 5 por params id */}
        <Link to="/perfil/3" className={S.link}><Button text="Cadastrar" onCLick={addUser}/></Link>
        
      </form>
    </div>
  );
}

export default Login;

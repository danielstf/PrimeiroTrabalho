import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 controle de inputs

  // gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  //enviando formulario

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enviando formulario");
    console.log(name, email, bio, role);

    // 7 - limpar fomulario
    setName("");
    setEmail("");
    setBio("");
  };
  return (
    <div>
      {/* Envio de formulario*/}

      {/* Criação de Forms*/}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite Seu Nome"
            onChange={handleName}
            value={name}
          />
        </div>

        {/* Label envolvendo input*/}

        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        {/*Input textarea */}

        <label>
          <span>Bio: </span>
          <textarea
            name="bio"
            placeholder="Descrição do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/*Função sistema*/}

        <label>
          <span> função do sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user"> Usuario</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

export interface LoginScenario {
  descricao: string;
  usuario: string;
  senha: string;
  sucesso: boolean;
  mensagemEsperada: string;
}

export const listaUsuarios: LoginScenario[] = [
  {
    descricao: "Usuario Valido Standard",
    usuario: "standard_user",
    senha: "secret_sauce",
    sucesso: true,
    mensagemEsperada: "Products"
  },
  {
    descricao: "Usuario Bloqueado",
    usuario: "locked_out_user",
    senha: "secret_sauce",
    sucesso: false,
    mensagemEsperada: "Epic sadface: Sorry, this user has been locked out."
  },
  {
    descricao: "Senha Incorreta",
    usuario: "standard_user",
    senha: "senha_errada",
    sucesso: false,
    mensagemEsperada: "Epic sadface: Username and password do not match any user in this service"
  }
];
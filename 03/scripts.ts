import { writeFile, readFile } from "../01/scripts";
import { Dados } from "../02/scripts";

function detailUser(cpf: string): Dados {
  const bd = readFile() as Dados[];
  const user = bd.find((user) => {
    return user.cpf === cpf;
  });

  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  return user;
}

function updateUser(cpf: string, usuario: Dados): Dados {
  const bd = readFile() as Dados[];
  const user = bd.find((user) => {
    return user.cpf === cpf;
  });

  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  Object.assign(user, usuario);

  writeFile(bd);

  return usuario;
}

const newUser: Dados = {
  nome: "João",
  email: "joao@gmail.com",
  cpf: "43845943593",
  profissao: "Marceneiro",
  endereco: {
    cep: 123943597,
    rua: "Poeta Ruben Prado",
    complemento: "Perto do",
    bairro: "Parque do Sol",
    cidade: "Guaratinguetá",
  },
};

updateUser("43845943593", newUser);

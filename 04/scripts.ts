import { writeFile, readFile } from "../01/scripts";
import { Dados } from "../02/scripts";

function deleteUser(cpf: string | number): any {
  const bd = readFile() as Dados[];
  const user = bd.find((user) => {
    return user.cpf === cpf;
  });

  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  const exclusao = bd.filter((user) => {
    return user.cpf !== cpf;
  });

  writeFile(exclusao);

  return user;
}

deleteUser(43845943593);

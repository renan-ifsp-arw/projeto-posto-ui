import * as moment from 'moment';

export class User {
  id!: number;
  name!: string;
  email!: string;
  age!: number;
  password!: string;
  active = true;

}

export class Cliente {
  id!: number;
  nome!: string;
  documento!: string;

  static toJson(cliente: Cliente): any {
    return {
      id: cliente.id,
      nome: cliente.nome,
      documento:cliente.documento,
    }
  }
}

export class Funcionario {
  id!: number;
  nome!: string;
  cpf!: string;
  cargo!: string;
}

export class Bomba {
  id!: number;
  combustivel!: string;
  preco!: number;
  quantidadeAtual!: number;
  capacidade!: number;
}

export class Abastecimento {
  id: number = 0;
  preco?: number;
  dataVenda?: Date = new Date();
  quantidade?: number;
  bombaId?: number;
  clienteId?: number;
}


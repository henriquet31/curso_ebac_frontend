class Pessoa {
    constructor(nome, idade, cpf, email) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.email = email;
    }

    exibirDados() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, CPF: ${this.cpf}, Email: ${this.email}`;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, cpf, email, curso) {
        super(nome, idade, cpf, email);
        this.curso = curso;
    }

    exibirDados() {
        return `${super.exibirDados()}, Curso: ${this.curso}`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, cpf, email, disciplina) {
        super(nome, idade, cpf, email);
        this.disciplina = disciplina;
    }

    exibirDados() {
        return `${super.exibirDados()}, Disciplina: ${this.disciplina}`;
    }
}

const pessoa1 = new Pessoa("Henrique", 25, "123.456.789-00", "henrique@email.com");
const estudante1 = new Estudante("Ana", 20, "987.654.321-00", "ana@email.com", "Engenharia");
const professor1 = new Professor("Carlos", 40, "456.789.123-00", "carlos@email.com", "Matemática");

function mostrarDados(pessoas) {
    pessoas.forEach(pessoa => console.log(pessoa.exibirDados()));
}

mostrarDados([pessoa1, estudante1, professor1]);
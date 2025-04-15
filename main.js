function criarPessoa(nome, idade, cpf, email) {
    return {
        nome: nome,
        idade: idade,
        cpf: cpf,
        email: email
    };
}

function criarEstudante(nome, idade, cpf, email, curso) {
    let estudante = criarPessoa(nome, idade, cpf, email);
    estudante.curso = curso;
    estudante.exibirDados = function() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, CPF: ${this.cpf}, Email: ${this.email}, Curso: ${this.curso}`;
    };
    return estudante;
}

function criarProfessor(nome, idade, cpf, email, disciplina) {
    let professor = criarPessoa(nome, idade, cpf, email);
    professor.disciplina = disciplina;
    professor.exibirDados = function() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, CPF: ${this.cpf}, Email: ${this.email}, Disciplina: ${this.disciplina}`;
    };
    return professor;
}

const pessoa1 = criarPessoa("Henrique", 25, "123.456.789-00", "henrique@email.com");
const estudante1 = criarEstudante("Ana", 20, "987.654.321-00", "ana@email.com", "Engenharia");
const professor1 = criarProfessor("Carlos", 40, "456.789.123-00", "carlos@email.com", "Matemática");

function mostrarDados(pessoas) {
    pessoas.forEach(pessoa => console.log(pessoa.exibirDados ? pessoa.exibirDados() : pessoa));
}

mostrarDados([pessoa1, estudante1, professor1]);
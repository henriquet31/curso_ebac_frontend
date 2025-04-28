const alunos = [
    { nome: "Henrique", nota: 10 },
    { nome: "João", nota: 5 },
    { nome: "Luana", nota: 5 },
    { nome: "Carlos", nota: 6.5 },
    { nome: "Paula", nota: 7 },
    { nome: "Lucas", nota: 10 },
    { nome: "Ana", nota: 3 },
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);

console.log(aprovados);
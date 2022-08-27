
const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias Silvana',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 7350.25,
    },
];
// 1. Imprima no console a quantidade de pessoas Total.
console.log(`O número total de pessoas é: ${data.length}`);
console.log("\n\n");
// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.

const peopleFemale = data.filter((value) => value.sexo == "F");
console.log(`Total de mulheres: ${peopleFemale.length}`);
console.log("São elas:", peopleFemale);
console.log("\n\n");

// 3. Imprima no console a soma do salário de todas as pessoas.

const salaryPeople = data.reduce((total, value) => total += value.salario, 0).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
console.log(`A soma do salário de geral é: ${salaryPeople}`);
console.log("\n\n");

// 4. Imprima no console a soma do salario de todos as pessoas do sexo Masculino

const salaryPeopleMale = (data.filter((value) => value.sexo !== "F")).reduce((total, value) => total += value.salario, 0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });

console.log(`O total da soma do salário dos homens é: ${salaryPeopleMale}`);
console.log("\n\n");

// 5. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.

let higherSalary = data.some((value) => value.salario > 7000);
console.log(higherSalary);

let peopleWhoHave = (data.filter((value) => value.salario > 7000)).map((value) => value.nome);

console.log(`Quem recebe mais do que R$7.000,00 é: ${peopleWhoHave}.`);
console.log("\n\n");

// 6. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.

let evaPosition = data.findIndex((value) => value.nome == "Eva Trindade");

console.log(`Eva Trindade está na posição: ${evaPosition}`);
console.log("\n\n");

// 7. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".

let ownsSilva = data.filter((value) => value.nome.toLocaleLowerCase().match(/silva\b/));

console.log(ownsSilva)
console.log("\n\n");

// 8 Imprima os nomes ultilizando o MAP.

let allNames = data.map((value) => value.nome);
console.log(allNames)


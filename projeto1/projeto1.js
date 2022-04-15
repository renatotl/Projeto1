console.log("historia");

console.log();

const prompt = require(`prompt-sync`)();

console.log(`Em uma padaria italiana, o senhor Mário Bros precisava de farinha para fazer pão francês.
O caminhão com a mercadoria e ingredientes chegou de tarde por volta das 13:00 PM.
O senhor Mario teve sorte porque seu ajudando Luigi não vendeu as férias dele e pode trabalhar neste dia
Mario e Luigi conseguiram fazer os pães e continuar com as vendas.`);

console.log();

console.log(
  "Para as questões a seguir digite sim para verdadeiro e nao para falso"
);

console.log();

let resposta1 = prompt(
  "tinha farinha para fazer pão frances antes das 13:00 pm? "
).toLowerCase();
let resposta2 = prompt(
  "o senhor mário deve alguma ajuda com algum funcionário? "
).toLowerCase();
let resposta3 = prompt(
  " Mario e Luigi conseguiram fazer os pães?"
).toLowerCase();
let resposta4 = prompt("o caminhão chegaou antes das 14:00? ").toLowerCase();
let resposta5 = prompt(
  "eles tinhão ingredientes para fazer pão frances no dia seguinte? "
).toLowerCase();

console.log();

let variavelRespostas = 0;

if (resposta1 == "sim") {
  variavelRespostas++;
}

if (resposta2 == "sim") {
  variavelRespostas++;
}

if (resposta3 == "sim") {
  variavelRespostas++;
}

if (resposta4 == "sim") {
  variavelRespostas++;
}
if (resposta5 == "sim") {
  variavelRespostas++;
}
console.log(variavelRespostas);

if (variavelRespostas == 0) {
  console.log("voce fracassou miseravelmente");
} else if (variavelRespostas == 1 || variavelRespostas == 2) {
  console.log("voce falha mas sai vivo");
} else if (variavelRespostas == 3) {
  console.log(
    "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
  );
} else if (variavelRespostas == 4) {
  console.log(
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
} else {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
}

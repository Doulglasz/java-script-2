// exercicio 1
    let numero;

    do {
        numero = Number(prompt("Digite um número de 1 a 7:"));

        if (numero < 1 || numero > 7) {
            alert("Número inválido!");
        }
    } while (numero < 1 || numero > 7);

    switch (numero) {
        case 1:
            console.log("Domingo - Final de semana");
            break;
        case 2:
            console.log("Segunda-feira - Dia útil");
            break;
        case 3:
            console.log("Terça-feira - Dia útil");
            break;
        case 4:
            console.log("Quarta-feira - Dia útil");
            break;
        case 5:
            console.log("Quinta-feira - Dia útil");
            break;
        case 6:
            console.log("Sexta-feira - Dia útil");
            break;
        case 7:
            console.log("Sábado - Final de semana");
            break;
    }


// exercicio 2
    let numeros = 30;

    while (numeros >= 1) {
        if (numeros % 3 == 0 && numeros % 5 == 0) {
            console.log(numeros + " - PingPong");
        } else if (numeros % 3 == 0) {
            console.log(numeros + " - Ping");
        } else if (numeros % 5 == 0) {
            console.log(numeros + " - Pong");
        } else {
            console.log(numeros);
        }

        numeros--;
    }


// exercicio 3
    let tentativas = 0;
    let login;
    let senha;
    let acertou = false;

    do {
        login = prompt("Digite o login:");
        senha = prompt("Digite a senha:");

        if (login == "admin" && senha == "1234") {
            console.log("Acesso liberado");
            acertou = true;
        } else {
            console.log("Login ou senha incorretos");
        }

        tentativas++;
    } while (tentativas < 3 && acertou == false);

    if (acertou == false) {
        console.log("Conta bloqueada");
    }


// exercicio 4
    let number = Number(prompt("Digite um número de 1 a 10:"));
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let resultado = number * i;

        if (resultado % 4 == 0) {
            console.log(number + " x " + i + " = " + resultado);
            soma = soma + resultado;
        }
    }

    console.log("Soma: " + soma);


// exercicio 5
    for (let numeroa = 1; numeroa <= 100; numeroa++) {
        let primo = true;

        if (numeroa < 2) {
            primo = false;
        }

        for (let i = 2; i < numeroa; i++) {
            if (numeroa % i == 0) {
                primo = false;
            }
        }

        if (numeroa % 7 == 0 && primo == true) {
            console.log("Número encontrado: " + numeroa);
            break;
        }
    }


// exercicio 6
    for (let numero1 = 1; numero1 <= 50; numero1++) {
        if (numero1 % 2 == 0) {
            continue;
        }

        if (numero1 % 3 == 0 || numero1 % 7 == 0) {
            continue;
        }

        console.log(numero1);
    }


// exercicio 7
    let numeror = 1;
    let soma1 = 0;

    while (numeror <= 20) {
        if (numeror % 2 == 0 && numeror % 4 != 0) {
            soma1 = soma1 + numeror;
        }

        numeror++;
    }

    console.log("Resultado: " + soma1);


// exercicio 8
    let numerog;

    do {
        numerog = Number(prompt("Digite um número maior que 0:"));
    } while (numerog <= 0);

    console.log("Números primos:");

    for (let i = 2; i <= numerog; i++) {
        let primou = true;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                primou = false;
            }
        }

        if (primou == true) {
            console.log(i);
        }
    }


// exercicio 9
    for (let numerot = 2; numerot <= 30; numerot += 2) {
        let quadrado = numerot * numerot;
        let cubo = numerot * numerot * numerot;

        console.log(numerot + "² = " + quadrado + " | " + numerot + "³ = " + cubo);
    }


// exercicio 10
    for (let numeroy = 1; numeroy <= 12; numeroy++) {
        switch (numeroy) {
            case 1:
                console.log("Janeiro");
                break;
            case 2:
                console.log("Fevereiro - 28 ou 29 dias");
                break;
            case 3:
                console.log("Março");
                break;
            case 4:
                console.log("Abril");
                break;
            case 5:
                console.log("Maio - Mês de provas");
                break;
            case 6:
                console.log("Junho");
                break;
            case 7:
                console.log("Julho - Férias");
                break;
            case 8:
                console.log("Agosto - Mês de provas");
                break;
            case 9:
                console.log("Setembro");
                break;
            case 10:
                console.log("Outubro - Mês de provas");
                break;
            case 11:
                console.log("Novembro");
                break;
            case 12:
                console.log("Dezembro - Férias");
                break;
        }
    }


// exercicio 11
    let numerou = Number(prompt("Digite um número de 1 a 7:"));
    let somou = 0;

    switch (numerou) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
    }

    for (let i = 1; i <= numerou; i++) {
        if (i > 20) {
            break;
        }

        if (i % 2 != 0) {
            console.log(i);
            somou = somou + i;
        }
    }

    console.log("Soma: " + somou);

    let primoy = true;

    if (somou < 2) {
        primoy = false;
    }

    for (let i = 2; i < somou; i++) {
        if (somou % i == 0) {
            primoy = false;
        }
    }

    if (primoy == true) {
        console.log("A soma é um número primo");
    } else {
        console.log("A soma não é um número primo");
    }

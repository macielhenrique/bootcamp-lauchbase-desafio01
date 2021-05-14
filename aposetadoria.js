//Crie um programa para calcular a aposentadoria de uma pessoa.

    const nome = 'Silvana' ;
    const sexo = 'F';
    const idade = 68;
    const contribuicao = 30;

    const calculoContribuicao = idade + contribuicao;

    //essa variaveis irão retorna verdadeiro ou falso

    const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95;
    const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 90;

    
    if (homemPodeAposentar || mulherPodeAposentar){
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você  não pode se aposentar!`)

    }
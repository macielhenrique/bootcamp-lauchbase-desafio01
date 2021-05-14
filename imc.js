//Crie um programa calcula o IMC e nível de obesidade de uma pessoa.
    const nome = "Carlos" ;
    const peso = 84;
    const altura= 1.88;
    
    const imc= peso/(altura*altura);
//Se o IMC maior ou igual a 30: Carlos você está acima do peso;
    if(imc >= 30){
        console.log(`${nome} você ésta acima do peso`);
    }else{
        console.log(`${nome}  você não está acima do peso`);

    }
//Se o IMC menor que 29.9: Carlos você não está acima do peso;
   
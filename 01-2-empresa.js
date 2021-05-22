const usario = {
    nome : 'Diego',
    empresa:{
        nome: "Rocketseat",
        cor:"roxo",
        foco: "Programação",
        endereco:{
            rua:"rua Guilherme Gembala",
            numero: 260
        }
    }
}

console.log(`A empresa ${usario.empresa.nome} está localizada em ${usario.empresa.endereco.rua},${usario.empresa.endereco.numero}`)
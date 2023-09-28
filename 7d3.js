
//Escolhas do usuario
//1. Front-End ou Back-End?
//2.1 Caso Front-End, React ou Vue?
//2.2 Caso Back-End, C# ou Java?
//3. Após esses finalizar, gostaria de continuar com formação "x" ou migrar para Fullstack?
//3.1 atualizar Formação.
//4. Dentro da Formação "x", qual tecnologia gostaria de se especializar?
//4.1 "Muito boa escolha!! Não irá se arrepender de escolhar a tecnologia "x"!
//5. Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite "1". Se não, digite "2"
//5.1. Se sim, volta para pergunta 4.
//5.2. se não, finaliza com mensagem: "boa sorte na sua caminhada do Conhecimento na Formação "X".


let formacao = null;
let cursoFormacao = null;
let continuar = "SIM";


//Execução do código
curso()
posCurso()
maisCurso()


//FUNÇÕES

//Função escrever na tela
function escreve (texto) {
    document.write(texto)
    document.write("<br>")
    document.write("<br>")
}

//Função Identifica o a formação pretendida e verifica valor digitado em loop até opção correta.
function curso() {
    while (formacao == null) { 
        
        formacao = prompt('Qual Formação deseja seguir? Front-End ou Back-End. Digite abaixo:')

        if (formacao == 'Front-End' ) {
            while (cursoFormacao == null) {
                cursoFormacao = prompt(`Dentro da formação ${formacao}, deseja seguir com React ou Vue?`)
                    if (cursoFormacao == 'React' || cursoFormacao == 'Vue') {
                        
                    }
                    else {
                        alert('Não reconheço a formação digitada. Tente novamente!!')
                        cursoFormacao = null
                    }
            }
        }
        else if (formacao == 'Back-End') {
            while (cursoFormacao == null) {
                cursoFormacao = prompt(`Dentro da formação ${formacao}, deseja seguir com C# ou Java?`)
                    if (cursoFormacao == 'C#' || cursoFormacao == 'Java') {
                            
                    }
                    else {
                        alert('Não reconheço a formação digitada. Tente novamente!!')
                        cursoFormacao = null
                    }
            }
        }
        else {
            alert('Não reconheço a formação digitada. Tente novamente!!')
            formacao = null        
        }
        
        
}
    escreve(`Formação inicial ${formacao} em ${cursoFormacao}!`)

}

//Função Identifica se usuario pretende continuar na formação atual ou iniciar em Fullstack.
function posCurso () {
    for (var formacaoPos = null; formacaoPos == null;) {
        
        formacaoPos = prompt(`Após finalizar o curso, se gostaria de continuar a especialização na formação ${formacao}, responda "1" ou  migrar para Fullstack, responda "2" ? `)
    
        if (formacaoPos == "1" ) {
                        
        }
        else if (formacaoPos == "2") {
            formacao = "Fullstack"
            escreve(`2ª formação será em ${formacao}`)
            
        }
        else {
            alert('Não reconheço a formação digitada. Tente novamente!!')
            formacaoPos = null
        }
    }
}





function maisCurso () {

    while(continuar == "SIM") {

        let especializacao = prompt (`Dentro da formação ${formacao}, em qual tecnologia gostaria de se especializar?`)

        alert (`Boa escolha!! A tecnologia ${especializacao} é amplamente utilizada!`)

        escreve(`especialização a realizar em ${especializacao}`)

        continuar = prompt("Tem mais alguma tecnologia que gostaria de aprender? digite SIM ou NÃO");
        if (continuar == "NÃO") {
            alert("boa sorte ")
        }
    //console.log(continuar)
}
}

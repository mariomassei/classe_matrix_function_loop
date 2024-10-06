
/*Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
  */
// guerreiro, mago, monge, ninja

class heroi {
    nome;
    idade;
    tipo;

    constructor(nome, idade, tipo){
            this.nome = nome;
            this.idade = idade;
            this.tipo = tipo;

    }

    
    
    /* descrever() {
        if (this.tipo === "guerreiro") {
        
        let ataque = "espada"
    
        return `o ${this.tipo} atacou usando ${ataque}`
  
    
        }
       else if (this.tipo === "mago") {
        
            let ataque = "magia"
        
            return `o ${this.tipo} atacou usando ${ataque}`
      
        
            }
       else if (this.tipo === "monge") {
        
            let ataque = "artes marciais"
        
            return `o ${this.tipo} atacou usando ${ataque}`
        
            }
        else if (this.tipo === "ninja") {
        
            let ataque = "shuriken"
        
            return `o ${this.tipo} atacou usando ${ataque},`
      
        }
            
    }*/
    descrever() {
        const oHeroi = [
            ["guerreiro","espada"],
            ["mago","magia"],
            ["monge","artes marciais"],
            ["ninja","shuriken"]
        ];
        for (let i = 0; i < oHeroi.length; i++) {
            
            if (oHeroi[i][0] === this.tipo) {
                const ataque = oHeroi[i][1]
                return `o ${this.tipo} atacou usando ${ataque}`
            }
            
        }
    }

}

const heroi1 = new heroi("Mario", 30, "guerreiro");
const heroi2 = new heroi("joao", 30, "mago");
const heroi3 = new heroi("Ze", 30, "monge");
const heroi4 = new heroi("Ryu", 30, "ninja");


console.log(heroi1.descrever(), heroi2.descrever(), heroi3.descrever(), heroi4.descrever());
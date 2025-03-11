
abstract class Aluno {
    nome: string
    sobrenome: string
    private _ra: string = ""

    constructor(nome: string, sobrenome: string, ra: string) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.ra = ra
    }

    set ra(ra: string) {
        if (/^\d+$/.test(ra)) {
            this._ra = ra
        } else {
            throw new Error("RA must be digits")
        }
    }

    toString() : string {
        return `nome: ${this.nome} \n`
            + `sobrenome: ${this.sobrenome}\n`
            + `ra: ${this.ra}\n`
    }
}

class AlunoGrad extends Aluno {
    curso: string

    constructor(nome: string, sobrenome: string, ra: string , curso: string) {
        super(nome, sobrenome, ra)
        this.curso = curso
    }

    override toString() : string {
        return super.toString() + `curso: ${this.curso}\n`
    }
}

class AlunoPos extends Aluno {
    programa: string
    orientador: string

    constructor(nome: string, sobrenome: string, ra: string, 
        programa: string, orientador: string) {
        super(nome, sobrenome, ra)
        this.programa = programa
        this.orientador = orientador
    }

    override toString() : string {
        return super.toString() + `programa: ${this.programa}\n`
            + `orientador: ${this.orientador}`
    }
}

// const a0 = new Aluno('joao', 'silva', '1234')
const a1 = new AlunoGrad('joao', 'silva', '1234', 'bcc')
const a2 = new AlunoPos('maria', 'pereira', '5678', 'ppgcc','cassio silva')

// console.log(a0 + "");
console.log(a1 + "")
console.log(a2 + "")

export {}
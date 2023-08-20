export class DiscosModels {
    constructor (
      private id: number,
      private nome: string,
      private artista: string,
      private ano: number,
      private capa: string,
      private musicas: {
        id: number,
        nome: string,
        duração: number
      }  
    ) {}

    public getId (): number {
        return this.id
    }

    public setId (value: number): void {
        this.id = value
    }

    public getNome (): string {
        return this.nome
    }

    public setNome (value: string): void {
        this.nome = value
    }

    public getArtist (): string {
        return this.artista
    }

    public setArtista (value: string): void {
        this.artista = value
    }

    public getAno (): number {
        return this.ano
    }

    public setAno (value: number): void {
        this.ano = value
    }

    public getCapa (): string {
        return this.capa
    }

    public setCapa (value: string): void {
        this.capa = value
    }

    // public setToDB () {

    // }

    public getToDB () {
        return {
            id: this.id,
            nome: this.nome,
            artista: this.artista,
            ano: this.ano,
            capa: this.capa,
            musicas: this.musicas
        }
    }
}
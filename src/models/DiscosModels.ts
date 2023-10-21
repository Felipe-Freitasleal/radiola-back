export class PostAlbumModel {
  constructor(
    private nome: string,
    private artista: string,
    private ano: number,
    private capa: string
  ) {}

  public getNome(): string {
    return this.nome;
  }

  public setNome(value: string): void {
    this.nome = value;
  }

  public getArtista(): string {
    return this.artista;
  }

  public setArtista(value: string): void {
    this.artista = value;
  }

  public getCapa(): any {
    return this.capa;
  }

  public setCapa(value: any): void {
    this.capa = value;
  }

  public getAno(): number {
    return this.ano;
  }

  public setAno(value: number): void {
    this.ano = value;
  }

  public albumIntoDB() {
    return {
      nome: this.nome,
      artista: this.artista,
      ano: this.ano,
      capa: this.capa,
    };
  }
}

export class GetAlbuns {
  constructor(
    private id: number,
    private nome: string,
    private artista: string,
    private ano: number,
    private capa: string
  ) {}

  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(value: string): void {
    this.nome = value;
  }

  public getArtista(): string {
    return this.artista;
  }

  public setArtista(value: string): void {
    this.artista = value;
  }

  public getCapa(): any {
    return this.capa;
  }

  public setCapa(value: any): void {
    this.capa = value;
  }

  public getAno(): number {
    return this.ano;
  }

  public setAno(value: number): void {
    this.ano = value;
  }

  public albumFromDB() {
    return {
      id: this.id,
      nome: this.nome,
      artista: this.artista,
      ano: this.ano,
      capa: this.capa,
    };
  }
}

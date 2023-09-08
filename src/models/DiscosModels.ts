export class DiscosModels {
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

  public setId(value: number): void {
    this.id = value;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(value: string): void {
    this.nome = value;
  }

  public getArtist(): string {
    return this.artista;
  }

  public setArtista(value: string): void {
    this.artista = value;
  }

  public getAno(): number {
    return this.ano;
  }

  public setAno(value: number): void {
    this.ano = value;
  }

  public getCapa(): string {
    return this.capa;
  }

  public setCapa(value: string): void {
    this.capa = value;
  }

  public getOnlyDIscosDB() {
    return {
      id: this.id,
      nome: this.nome,
      artista: this.artista,
      ano: this.ano,
      capa: this.capa,
    };
  }
}

export class MusicasModels {
  constructor(
    private id: number,
    private nome: string,
    private duracao: number,
    private compositor: string,
    private disco_id: number
  ) {}

  public getId(): number {
    return this.id;
  }

  public setId(value: number): void {
    this.id = value;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(value: string): void {
    this.nome = value;
  }

  public getArtist(): number {
    return this.duracao;
  }

  public setArtista(value: number): void {
    this.duracao = value;
  }

  public getAno(): string {
    return this.compositor;
  }

  public setAno(value: string): void {
    this.compositor = value;
  }

  public getCapa(): number {
    return this.disco_id;
  }

  public setCapa(value: number): void {
    this.disco_id = value;
  }

  public geOnlyMusicasDB() {
    return {
      id: this.id,
      nome: this.nome,
      duracao: this.duracao,
      compositor: this.compositor,
      disco_id: this.disco_id,
    };
  }
}

export class PostAlbumModel {
  constructor(
    private nome: string,
    private artista: string,
    private ano: number,
    private capa: any
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

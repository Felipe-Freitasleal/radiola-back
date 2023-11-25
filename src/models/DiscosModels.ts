export class PostAlbumModel {
  constructor(
    private nome: string,
    private artista: string,
    private ano: number,
    private capa: string,
    private genero: string,
    private preco: number
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

  public getGenero(): string {
    return this.genero;
  }

  public setGenero(value: string): void {
    this.genero = value;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(value: number): void {
    this.preco = value;
  }

  public albumIntoDB() {
    return {
      nome: this.nome,
      artista: this.artista,
      ano: this.ano,
      capa: this.capa,
      genero: this.genero,
      preco: this.preco,
    };
  }
}

export class GetAlbuns {
  constructor(
    private id: number,
    private nome: string,
    private artista: string,
    private ano: number,
    private capa: string,
    private genero: string,
    private preco: number
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

  public getGenero(): string {
    return this.genero;
  }

  public setGenero(value: string): void {
    this.genero = value;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(value: number): void {
    this.preco = value;
  }

  public albumFromDB() {
    return {
      id: this.id,
      nome: this.nome,
      artista: this.artista,
      ano: this.ano,
      capa: this.capa,
      genero: this.genero,
      preco: this.preco,
    };
  }
}

export class PostSongsModel {
  constructor(
    private nome: string,
    private duracao: number,
    private compositor: string,
    private disco_id: number
  ) {}

  public getNome(): string {
    return this.nome;
  }

  public setNome(value: string): void {
    this.nome = value;
  }

  public getCompositor(): string {
    return this.compositor;
  }

  public setCompositor(value: string): void {
    this.compositor = value;
  }

  public getDuracao(): any {
    return this.duracao;
  }

  public setDuracao(value: number): void {
    this.duracao = value;
  }

  public getDiscos_id(): number {
    return this.disco_id;
  }

  public setDiscos_id(value: number): void {
    this.disco_id = value;
  }

  public songsIntoDB() {
    return {
      nome: this.nome,
      duracao: this.duracao,
      compositor: this.compositor,
      disco_id: this.disco_id,
    };
  }
}

export class GetSongsModel {
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

  public getCompositor(): string {
    return this.compositor;
  }

  public setCompositor(value: string): void {
    this.compositor = value;
  }

  public getDuracao(): any {
    return this.duracao;
  }

  public setDuracao(value: number): void {
    this.duracao = value;
  }

  public getDiscos_id(): number {
    return this.disco_id;
  }

  public setDiscos_id(value: number): void {
    this.disco_id = value;
  }

  public songsFromDB() {
    return {
      id: this.id,
      nome: this.nome,
      duracao: this.duracao,
      compositor: this.compositor,
      disco_id: this.disco_id,
    };
  }
}

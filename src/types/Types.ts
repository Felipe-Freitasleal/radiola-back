export interface OnlyDiscosDB {
  id: number;
  nome: string;
  artista: string;
  ano: number;
  capa: string;
}

export interface OnlyMusicasDB {
  id: number;
  nome: string;
  duracao: number;
  compositor: string;
  disco_id: number;
}

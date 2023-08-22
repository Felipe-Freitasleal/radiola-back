export interface DiscosFromDB {
  id: number;
  nome: string;
  artista: string;
  ano: number;
  capa: string;
  musicas: {
    id: number;
    nome: string;
    duração: number;
  };
}

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
  duração: number;
  compositor: string;
  disco_id: number;
}

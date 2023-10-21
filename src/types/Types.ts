export interface postAlbumToDB {
  nome: string;
  artista: string;
  ano: number;
  capa: string;
}

export interface getDiscosFromDB {
  id: number;
  nome: string;
  artista: string;
  ano: number;
  capa: string;
}

export interface postSongs {
  nome: string;
  duracao: number;
  compositor: string;
  disco_id: number;
}

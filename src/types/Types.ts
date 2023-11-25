export interface postAlbumToDB {
  nome: string;
  artista: string;
  ano: number;
  capa: string;
  genero: string;
  preco: number;
}

export interface getDiscosFromDB {
  id: number;
  nome: string;
  artista: string;
  ano: number;
  capa: string;
  genero: string;
  preco: number;
}

export interface postSongs {
  nome: string;
  duracao: number;
  compositor: string;
  disco_id: number;
}

export interface getSongsFromDB {
  id: number;
  nome: string;
  duracao: number;
  compositor: string;
  disco_id: number;
}

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

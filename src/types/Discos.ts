export interface DiscosFromDB {
     id: number,
     nome: string,
     artista: string,
     ano: number,
     capa: string,
     musicas: {
      id: number,
      nome: string,
      duração: number
    }  
}
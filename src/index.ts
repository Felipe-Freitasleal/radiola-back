import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import { get } from 'https';

const app = express();

app.use(express.json());

app.use(cors());

app.listen(8080, () => {
    console.log('Servidor na porta 8080');
});

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong!')
});

app.get('/cors', (req: Request, res: Response) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.status(200).send('O CORS funcionou!')
})

let array: any[] = []

const getArtist = async () => {
    let a = await axios.get(`https://api.deezer.com/artist/1`)
}

console.log("console da função", getArtist())

app.get('/artists', (req: Request, res: Response) => {
    try{
        res.set('Access-Control-Allow-Origin', '*')
        res.status(200).send('Porta funcionando')
    } catch(error: any){
        console.log(error.message)
        if (res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }

})
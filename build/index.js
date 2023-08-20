"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(8080, () => {
    console.log("Servidor na porta 8080");
});
app.get("/ping", (req, res) => {
    res.send("pong!");
});
app.get("/cors", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send("O CORS funcionou!");
});
app.get("/artists", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lengthList = 30;
        const artistsLits = [];
        for (let i = 1; lengthList > i; i++) {
            try {
                const response = yield axios_1.default.get(`https://api.deezer.com/artist/${i}`);
                if (response.status !== 200)
                    throw new Error("Deu merda em pegar os artistas.");
                const artistObject = response.data;
                artistsLits.push(artistObject);
            }
            catch (error) {
                console.log(error);
            }
        }
        if (artistsLits.length > 0) {
            res.status(200).send(artistsLits);
        }
    }
    catch (error) {
        console.log(error.message);
        if (res.statusCode === 200) {
            res.status(500);
        }
        if (error instanceof Error) {
            res.send(error);
        }
        else {
            res.send("Erro inesperado");
        }
    }
}));
//# sourceMappingURL=index.js.map
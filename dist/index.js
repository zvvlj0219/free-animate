"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// load .env
dotenv_1.default.config();
// init app
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type']
};
app.use((0, cors_1.default)(corsOptions));
app.get('/api', (req, res) => res.send({ result: 'ok' }));
// handle production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express_1.default.static(path_1.default.resolve(__dirname)));
    // handle spa
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, './index.html'));
    });
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`NODE_ENV is ${String(process.env.NODE_ENV)}`);
    console.log(`server running port 5000 at http://localhost:${port}`);
});

import express from 'express';
import cors from "cors"

const app = express()
const port = 5000;

import { ListTrips } from './functions/list-trips';
import { SearchTrips } from './functions/search-trips';

app.use(cors({
    origin: 'http://localhost:3000', // Allow only this origin
}));

app.get('/trips', async (req: any, res: any) => {
    const keyword = req.query.keyword;
    if (keyword) {
        res.send(await SearchTrips({ keyword }))
    } else {
        res.send(await ListTrips())
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
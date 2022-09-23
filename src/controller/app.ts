import express from "express"
import cors from "cors"
import {AddressInfo} from "net" 

const app = express ();
app.use(cors());
const server= app.listen(process.env.PORT || 3003, () =>{
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://${address.address}:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`) ;
    }
});

export default app;
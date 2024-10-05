import { Router } from "express";

export class IndexRoute {
    constructor() {
        this.router = Router();
        this.init();
        this.getUser();
    }

    init() {
        this.router.get("/", (req, res) => {
            res.send("This is the main route running!");
        });
    }

    getUser() {
        this.router.get("/user", (req, res) => {
            res.send("This is the user route running!");
        });
    }
    
}

export default new IndexRoute().router;

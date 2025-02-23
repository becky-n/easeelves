import {Router} from "express";
import { getElves, getElfById, createElf } from "../controllers/CreateElfController";
import { deleteElf } from "../controllers/DeleteElfController";
import { updateElf } from "../controllers/UpdateElfController";


const elfRoutes: Router = Router();

elfRoutes.get("/:name", getElves);
elfRoutes.get("/id/:id", getElfById);
elfRoutes.post("/", createElf);
elfRoutes.delete("/:id", deleteElf);
elfRoutes.patch("/:id", updateElf);

export default elfRoutes;



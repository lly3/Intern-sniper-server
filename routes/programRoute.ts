import express from "express";
import * as programController from "../controllers/programController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/", programController.getAllPrograms);

router.post("/create", authenticateToken, programController.createProgram);

router.post("/favorite/:id", authenticateToken, programController.favoriteProgram);

router.get("/favorited", authenticateToken, programController.myFavorite)

router.get("/mostFavorite", programController.mostFavorite)

router.get("/:id", programController.getProgramByid);

export default router;

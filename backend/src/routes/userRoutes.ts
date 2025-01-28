import { Router } from "express";
import { registrerUser,getAllUsers,getUserById } from "../controllers/userController";

const router = Router();

router.post('/register', registrerUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);

export default router;
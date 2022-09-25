import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployee);

/* PUT para actualizar todos los datos. PATCH para actualizar parcialmente */
router.patch("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);

export default router;

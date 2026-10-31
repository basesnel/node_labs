const express = require("express");

const control = require("../../controllers/versions");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/versions");

const router = express.Router();

router.get("/", control.getAll);

router.get("/:id", control.getById);

router.post("/", validateBody(schemas.addVersion), control.add);

router.put("/:id", validateBody(schemas.addVersion), control.updateById);

router.delete("/:id", control.deleteById);

module.exports = router;

const express = require("express");

const control = require("../../controllers/versions");

const router = express.Router();

router.get("/", control.getAll);

router.get("/:id", control.getById);

router.post("/", control.add);

router.put("/:id", control.updateById);

router.delete("/:id", control.deleteById);

module.exports = router;

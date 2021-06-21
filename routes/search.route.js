const { Router } = require("express");
// const { check } = require("express-validator");
const { getImages, getImage } = require("../controllers/searchImages");

const router = Router();

router.get("/:term", getImage);
router.post("/", getImages);

module.exports = router;

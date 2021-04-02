const { Router } = require("express");
const router = Router();
const mainCont = require("../controller/mainConts");

router.post("/signup", mainCont.sign_post);

router.post("/login",mainCont.login_post);

router.get("/data/all", mainCont.all_data);

router.get("/data/:id", mainCont.id)

router.put('/edit/:id', mainCont.edit);

router.post('/new', mainCont.new);
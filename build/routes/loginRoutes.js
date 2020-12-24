"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const requireAuth = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
    }
    else {
        res.status(403).send("This route is protected");
    }
};
const router = express_1.Router();
exports.router = router;
router.get("/protected", requireAuth, (req, res) => {
    res.send("So this is is protected route; Looking very nice!");
});
router.get("/login", (req, res) => {
    res.send(`
    <form METHOD="post">
      <label for="userName">User Name: </label>
      <input type="text" name = "userName" id="userName" />
      <br/><br/>
      <label for="userEmail">Email:</label>
      <input type="password" name = "userEmail" id="userEmail" />
      <br/><br/>
      <button type="submit">Submit</button>
    </form>
  `);
});
router.get("/", (req, res) => {
    res.send(`
    <div>
      <p>Logged IN</p>
      <a href="/logout">LogOut</a>
    </div>
  `);
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.send("Logged Out");
});
router.post("/login", (req, res) => {
    const { userName, userEmail } = req.body;
    if (userName === undefined || userEmail === undefined) {
        if (!userName) {
            res.send("userName must be provided");
        }
        else if (!userEmail) {
            res.send("userEmail must be provided");
        }
    }
    else {
        if (userName === "piyal" && userEmail === "1234") {
            req.session = { loggedIn: true };
            res.redirect("/");
        }
        else {
            res.send("Invalid Credentials");
            res.redirect("/login");
        }
    }
});
router.get("/check", (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send("Session exist");
    }
    else {
        res.send("session doesn't exits");
    }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = express_1.Router();
exports.router = router;
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
        res.send(`UserName is ${userName} & UserEmail is ${userEmail}`);
    }
});

import { Router,Response,Request } from "express";
const router = Router();
router.get("/login", (req: Request, res: Response) => {
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
  `)
});

router.post("/login", (req: Request, res: Response) => {
  console.log(req.body);
  res.send(`userName is ${req.body.userName} & userEmail is ${req.body.userEmail}`);
})

export { router };
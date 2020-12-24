import { Router,Response,Request } from "express";
interface RequestWithBody extends Request{
  body: { [key: string]: (string | undefined) };
}

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

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { userName, userEmail } = req.body;
  if (userName === undefined || userEmail === undefined) {
    if (!userName) {
      res.send("userName must be provided");
    } else if(!userEmail) {
      res.send("userEmail must be provided");
    }
  } else {
    res.send(`UserName is ${userName} & UserEmail is ${userEmail}`);
  }
})

export { router };
import { Router, Response, Request, NextFunction } from "express";
interface RequestWithBody extends Request{
  body: { [key: string]: (string | undefined) };
}

const requireAuth = (req: Request, res: Response, next: NextFunction):void => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(403).send("This route is protected");
  }
}

const router = Router();


router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("So this is is protected route; Looking very nice!");
})


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

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <div>
      <p>Logged IN</p>
      <a href="/logout">LogOut</a>
    </div>
  `);
})

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.send("Logged Out");
})

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { userName, userEmail } = req.body;
  if (userName === undefined || userEmail === undefined) {
    if (!userName) {
      res.send("userName must be provided");
    } else if(!userEmail) {
      res.send("userEmail must be provided");
    }
  } else {
    if (userName === "piyal" && userEmail === "1234") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid Credentials");
      res.redirect("/login");
    }
    
  }
})

router.get("/check", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send("Session exist");
  }else{
    res.send("session doesn't exits");
  }
} )

export { router };
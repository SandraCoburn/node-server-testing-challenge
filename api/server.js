const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const restricted = require("../auth/restricted-middleware");

const server = express();

//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Routes endpoints
server.use("/api/auth", authRouter);
server.use("/api/users", restricted, checkRole("user"), usersRouter);

server.get("/", (req, res) => {
  res.send({ api: "It's alive!" });
});

module.exports = server;

function checkRole(role) {
  return (req, res, next) => {
    if (
      req.decodedToken &&
      req.decodedToken.role &&
      req.decodedToken.role.toLowerCase() === role
    ) {
      next();
    } else {
      res.status(403).json({ you: "Shall not pass" });
    }
  };
}

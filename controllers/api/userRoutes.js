const router = require("express").Router();
const { sequelize } = require("sequelize");
const { User } = require("../../models");
//boilerplate code from class activity. Not tested for this project
//see the withAuth helper function and use it in the other routes pages.

// CREATE new user
//route at api/user
router.post("/", async (req, res) => {
  try {
    const checkUsername = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (checkUsername) {
      res
        .status(400)
        .json({ message: "This username is already taken. Please try again." });
      return;
    }

    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message:
        "Please enter a valid username and password (at least 8 alphanumeric characters})",
    });
  }
});

// Login
//route at api/user/login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res.status(400).json({
        message:
          "Invalid username or password. Username must be 8-15 characters, password must be at least 8 alphanumeric characters.",
      });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message:
          "Invalid username or password. Username must be 8-15 characters, password must be at least 8 alphanumeric characters.",
      });
      return;
    }

    req.session.save(() => {
      req.session.id = dbUserData.id;
      req.session.loggedIn = true;
      console.log(
        "🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie",
        req.session.cookie
      );

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
//at api/user/logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
   
  }
});

module.exports = router;

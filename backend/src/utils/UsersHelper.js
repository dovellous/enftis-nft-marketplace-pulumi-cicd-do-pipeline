const userHasRole = (req, res, next, roleName, User, Role) => {

  User.findById(req.userId).exec((err, user) => {

    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === roleName) {
            next();
            return;
          }
        }

        res.status(403).send({ message: `Required role [${roleName}] was not found` });

        return;

      }

    );

  });

}

module.exports = { userHasRole }

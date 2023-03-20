const userHasRole = (req: any, res: any, next: any, roleName: string, User: any, Role: any) => {

  User.findById(req.userId).exec((err: any, user: any) => {

    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err: any, roles: any) => {
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

export { userHasRole }

const router = require('express').Router();
const models = require('../models');
const config = require('../bin/config');
const tools = require('./tools');
const jwtDecode = require('jwt-decode');

router.get('/me', tools.verifyToken, (req, res, next) => {
  let decoded = jwtDecode(token);
  if (!decoded)
    return res.status(403).json({
      status: 403,
      success: false,
      msg: "Token is invalid"
    });
  else {
    return models.Users.findOne({
      where : {
        email: decoded.email
      }
    }).then((user) => {
      models.Favorites.findAll({
        where: {
          user_id: user.id
        },
        include : [
          {
            model: models.Books,
            as: 'book',
            include: [
              {
                model: models.Users,
                as: 'author',
                attributes: ['username', 'id', 'first_name', 'last_name']
              }
            ]
          }
        ]
      }).then((fav) => {
        return res.status(200).json({
          status: 200,
          favorites: fav,
          msg: "User favorites successfully retrieved.",
          success: true
        });
      });
    }).catch((err) => next(err));
  }
});

router.get('/me/public', tools.verifyToken, (req, res, next) => {
  let decoded = jwtDecode(token);
  if (!decoded)
    return res.status(403).json({
      status: 403,
      success: false,
      msg: "Token is invalid"
    });
  else {
    return models.Users.findOne({
      where : {
        email: decoded.email
      }
    }).then((user) => {
      models.Favorites.findAll({
        where: {
          user_id: user.id,
          pub_type: "p"
        },
        include : [
          {
            model: models.Books,
            as: 'book',
            include: [
              {
                model: models.Users,
                as: 'author',
                attributes: ['username', 'id', 'first_name', 'last_name']
              }
            ]
          }
        ]
      }).then((fav) => {
        return res.status(200).json({
          status: 200,
          favorites: fav,
          msg: "User favorites successfully retrieved.",
          success: true
        });
      });
    }).catch((err) => next(err));
  }
});

router.get('/me/private', tools.verifyToken, (req, res, next) => {
  let decoded = jwtDecode(token);
  if (!decoded)
    return res.status(403).json({
      status: 403,
      success: false,
      msg: "Token is invalid"
    });
  else {
    return models.Users.findOne({
      where : {
        email: decoded.email
      }
    }).then((user) => {
      models.Favorites.findAll({
        where: {
          user_id: user.id,
          pub_type: "v"
        },
        include : [
          {
            model: models.Books,
            as: 'book',
            include: [
              {
                model: models.Users,
                as: 'author',
                attributes: ['username', 'id', 'first_name', 'last_name']
              }
            ]
          }
        ]
      }).then((fav) => {
        return res.status(200).json({
          status: 200,
          favorites: fav,
          msg: "User favorites successfully retrieved.",
          success: true
        });
      });
    }).catch((err) => next(err));
  }
});

router.post('/:id', tools.verifyToken, (req, res, next) => {
  let decoded = jwtDecode(token);
  if (!decoded)
    return res.status(403).json({status: 403, success: false, msg: "Token is invalid"});
  else {
    return models.Books.findOne({
      where: {
        id: req.params.id
      }
    }).then((book) => {
      if (book)
        return models.Users.findOne({
          where: {
            email: decoded.email
          }
        }).then((user) => {
          return models.Favorites.findOne({
            where: {
              user_id: user.id,
              book_id: book.id
            }}
          ).then((fav) => {
            if (!fav)
              models.Favorites.create({
                type: book.type,
                title: book.title,
                user_id: user.id,
                book_id: book.id,
                pub_type: "v"
              }).then((fav) => {
                return res.status(200).json({
                  status: 200,
                  favorites: fav,
                  msg: "User favorite successfully added.",
                  success: true
                });
              });
            else
              return res.status(409).json({
                status: 409,
                msg: "User already has this book in favorite.",
                success: false
              });
          });
        });
      else
        return res.status(404).json({
          status: 404,
          msg: "Book not found.",
          success: false
        });
    }).catch((err) => next(err));
  }
});

router.patch('/:id', tools.verifyToken, (req, res, next) => {
  let userId;
  if (!req.body.pub_type) {
    return res.status(422).json({
      status: 422,
      success: false,
      msg: 'A pub_type is required.'
    });
  }
  let decoded = jwtDecode(token);
  if (!decoded)
    return res.status(403).json({
      status: 403,
      success: false,
      msg: "Token is invalid"
    });
  return models.Users.findOne({
    where : {
      email: decoded.email
    }
  }).then((usr) => {
    userId = usr.dataValues.id;
    return models.Favorites.findByPk(req.params.id).then((fav) => {
      if (!fav) {
        return res.status(404).json({
          status: 404,
          msg: 'Favorite not found.',
          success: false
        })
      } else if (fav.dataValues.user_id !== userId) {
        return res.status(403).json({
          status: 403,
          success: false,
          msg: 'This favorites doesn\'t belong to you'
        })
      } else {
        fav.update({
          pub_type: req.body.pub_type
        }).then((favorite) => {
          return res.status(200).json({
            status: 200,
            success: true,
            favorites: favorite,
            msg: "Favorite successfully patched."
          })
        })
      }
    })
  }).catch((err) => next(err));
});

router.delete('/:id', tools.verifyToken, (req, res, next) =>  {
  let decoded = jwtDecode(token);
  if (!decoded)
    return res.status(403).json({
      status: 403,
      success: false,
      msg: "Token is invalid"
    });
  return models.Users.findOne({
    where : {
      email: decoded.email
    }
  }).then((usr) => {
    return models.Favorites.findOne({
      where: {
        book_id: req.params.id,
        user_id: usr.id
      }
    }).then((fav) => {
      if (fav)
        models.Favorites.destroy({
          where: {
            book_id: req.params.id,
            user_id: usr.id
          }
        }).then(() => {
          return res.status(200).json({
            status: 200,
            msg: "Favorite successfully deleted.",
            success: true
          });
        });
      else
        return res.status(404).json({
          status: 404,
          msg: "User doesn't have this book in favorite.",
          success: false
        });
    })
  }).catch((err) => next(err));
});

router.get('/:id', tools.verifyToken, (req, res, next) =>  {
  return models.Favorites.findById(req.params.id,
    {
      include :[
        {
          model: models.Books,
          as: 'book',
          include: [
            {
              model: models.Users,
              as: 'author',
              attributes: ['username', 'id', 'first_name', 'last_name']
            }
          ]
        }
      ]
    }).then((fav) => {
    if (fav)
      return res.status(200).json({
        status: 200,
        favorites: fav,
        msg: "Favorite successfully retrieved.",
        success: true
      });
    else
      return res.status(404).json({
        status: 404,
        msg: "Favorite with this id not found",
        success: false
      });
  }).catch((err) => next(err));
});

module.exports = router;
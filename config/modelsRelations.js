let models = require('../models');

models.Favorites.belongsTo(models.Books, {foreignKey: 'book_id', as : 'book'});

models.Comments.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user'});
models.Comments.belongsTo(models.Books, {foreignKey: 'book_id', as: 'book'});

models.Books.belongsTo(models.Users, {foreignKey: 'user_id', as: 'author'});

models.Reviewers.belongsTo(models.Users, {foreignKey: 'reviewer_id', as: 'reviewer'});
models.Reviewers.belongsTo(models.Users, {foreignKey: 'author_id', as: 'author'});

models.Messages.belongsTo(models.Users, {foreignKey: 'receiver_id', as: 'receiver'});

models.ReviewsRequest.hasMany(models.Reviews, {foreignKey: 'review_request_id', as: 'review'});
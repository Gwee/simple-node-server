'use strict';
module.exports = function(app) {
  var restCommands = require('../controllers/serverController');

  // todoList Routes
  app.route('/rest')
    .get(restCommands.get)
    .post(restCommands.post);


//   app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
};
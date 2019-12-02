module.exports = app => {
const Task = app.models.tasks;
app.get("/tasks", (req, res) => {
   Task.findAll({}, (tasks) => {
       res.json({tasks: tasks});
   });
  });
};

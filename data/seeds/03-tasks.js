exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { associated_project: 1, task_name: 'gather cleaning supplies', task_completed: false },
    { associated_project: 1, task_name: 'clean room', task_completed: false },
    { associated_project: 2, task_name: 'start lawnmower', task_completed: false },
    { associated_project: 2, task_name: 'mow lawn', task_completed: false }
  ]);
};

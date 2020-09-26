exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { project_name: 'clean my room', project_completed: false },
    { project_name: 'mow the lawn', project_completed: false }
  ]);
};


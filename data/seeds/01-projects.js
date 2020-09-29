exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { project_name: 'clean my room', project_description: 'make your room presentable', project_completed: false },
    { project_name: 'mow the lawn', project_description: 'make the yard look like a golf course', project_completed: false }
  ]);
};


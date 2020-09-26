exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    { resource_name: 'cleaning supplies' },
    { resource_name: 'lawnmower' }
  ]);
};


exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 128).notNullable().unique()
            tbl.boolean('project_completed').defaultTo(false)
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 128).notNullable().unique()
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('task_name', 128).notNullable()
        })
        .createTable('project_resources', tbl => {
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resources.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('project_tasks', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_tasks')
    .dropTableIfExists('project_reources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};

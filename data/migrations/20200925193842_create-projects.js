
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name', 128).notNullable().unique()
            tbl.boolean('project_completed').defaultTo(false).notNullable()
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 128).notNullable().unique()
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.integer('associated_project')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.string('task_name', 128).notNullable()
            tbl.boolean('task_completed').defaultTo(false).notNullable()
        })
        .createTable('project_resources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resources.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.primary(['project_id', 'resource_id']);
        })
        // .createTable('project_tasks', tbl => {
        //     tbl.integer('project_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('projects.id')
        //         .onDelete('CASCADE')
        //         .onUpdate('CASCADE');
        //     tbl.integer('task_id')
        //         .unsigned()
        //         .notNullable()
        //         .references('tasks.id')
        //         .onDelete('CASCADE')
        //         .onUpdate('CASCADE');
        //     tbl.primary(['project_id', 'task_id']);
        //     })
  
};

exports.down = function(knex) {
  return knex.schema
    // .dropTableIfExists('project_tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};

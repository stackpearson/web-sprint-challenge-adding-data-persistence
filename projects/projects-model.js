const db = require('../data/db-config.js');

function getProjects() {
    return db('projects')
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
}

function getResources() {
    return db('resources')
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
}

function getTasks(id) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.associated_project')
        .select('t.task_name', 'p.project_name', 'p.project_description')
        .where({associated_project:id})
}

function addTask(task) {
    return db('tasks')
        .insert(task)
}

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask
}
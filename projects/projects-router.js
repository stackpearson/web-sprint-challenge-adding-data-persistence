const express = require('express');

const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get projects'})
    })
});

router.post('/', (req, res) => {
    const project = req.body;

    Projects.addProject(project)
        .then(ids => {
            res.status(201).json({created: ids[0] });
        })
        .catch(err => {
            res.status(500).json({message: 'failed to create project'})
        })
});

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get resources'})
    })
});

router.post('/resources', (req, res) => {
    const resource = req.body;

    Projects.addResource(resource)
        .then(ids => {
            res.status(201).json({created: ids[0] });
        })
        .catch(err => {
            res.status(500).json({message: 'failed to create resource'})
        })
});

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;

    Projects.getTasks(id)
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'could not retrieve tasks'})
        })
})

router.post('/tasks', (req, res) => {
    const task = req.body;

    Projects.addTask(task)
        .then(ids => {
            res.status(201).json({created: ids[0] });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'failed to create task'})
        })
});


module.exports = router;
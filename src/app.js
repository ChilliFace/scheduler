const schedule = require('node-schedule');
const jobsPath = require("path").join(__dirname, "../tasks/");
const validator = require('./task-validator');
var taskErrors = [];
let tasks=[];

//Get all the jobs
require("fs").readdirSync(jobsPath)
  .forEach(file => {
    var task=require(jobsPath+file);

    if (validator.validateTask(task)) {
      tasks.push(task);
    }
  }
);

  tasks.forEach(t => {
    console.log('progress ');
    t.progress();
  })



// need to start a job on a given time and have access to that job's stop end-point

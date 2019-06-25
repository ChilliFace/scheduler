const schedule = require('node-schedule');
const jobsPath = require("path").join(__dirname, "../tasks/");
const validator = require('./task-validator');
var taskErrors = [];
let tasks=[];

//Get all the jobs
require("fs").readdirSync(jobsPath)
  .forEach(file=>{
    var task=require(jobsPath+file);

    if (validator.validateTask(task)) {
      tasks.push(task);
    } else {
      console.log (validator.errors);
    }
  }
);

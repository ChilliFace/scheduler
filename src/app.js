const schedule = require('node-schedule');

let tasks=[];
var jobsPath = require("path").join(__dirname, "tasks/");

//Get all the jobs
require("fs").readdirSync(jobsPath) 
  .forEach(file=>{
    if (validator.validateTask(file)) {
      jobs.push(require("./tasks/"+file));
    }
  }
);

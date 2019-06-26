module.exports = {
  errors:[],

  expectedFunctions: [ 'start', 'stop', 'progress'],

  validateTask: function (task) {
    this.errors=[];
    if (typeof task.schedule === 'undefined'){
      this.errors.push('has no scheudule');
    }

    this.expectedFunctions.forEach(func => {
      if (typeof task[func] !== 'function') {
        this.errors.push('has no ' + func + ' function');
      }
    })

    if(this.errors.length !== 0) {
      return false;
    }

    return true;
  },
};

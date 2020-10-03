'use strict'

const Antl = use('Antl')

class Task {
  get rules () {
    return {
      title: "required",
      due_data: 'date'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Task

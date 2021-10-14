const Employee = require('../models/employee');
const JobTitle = require('../models/job-title');

/**
 * Vo kontrolerite ja cuvame biznis logikata.
 */

module.exports = {
  getAll: async (req, res) => {
    const employees = await Employee.find().populate('job_title');
    console.log(employees);

    res.render('employees/index', { employees: employees });
  },
  getCreate: async (req, res) => {
    const jobTitles = await JobTitle.find();

    res.render('employees/create', { jobTitles: jobTitles });
  },
  getUpdate: async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    res.render('employees/update', { employee: employee })
  },
  postCreate: async (req, res) => {
    try {
      req.body.email += '@north-company-admin.com';

      await Employee.create(req.body);

      res.redirect('/employees');
    } catch (error) {
      res.render('employees/create', { error: error.message })
    }
  },
  delete: async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
  
    res.send('ok');
  }
}

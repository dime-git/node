const Employee = require('../models/employee');

module.exports = {
  getAll: async (req, res) => {
    const employees = await Employee.find();

    res.render('employees/index', { employees: employees });
  },
  getCreate: (req, res) => {
    res.render('employees/create');
  },
  getUpdate: async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    res.render('employees/update', { employee: employee })
  },
  postCreate: async (req, res) => {
    req.body.email += '@north-company-admin.com';
    await Employee.create(req.body);

    res.redirect('/employees');
  },
  postUpdate: async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/employees');
  } 
}
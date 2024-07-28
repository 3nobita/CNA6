// models/EmpStaForm 
const mongoose = require('mongoose');

const EmpStaFormSchema = new mongoose.Schema({
    employeeCode: String,
    requisitionerName: String,
    department: String,
    date: Date,
    itemDescription: String,
    quantity: Number,
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    }
});

module.exports = mongoose.model('EmpStaForm', EmpStaFormSchema);

// models/HodStaForm 
const mongoose = require('mongoose');

const HodStaFormSchema = new mongoose.Schema({
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

module.exports = mongoose.model('HodStaForm', HodStaFormSchema);

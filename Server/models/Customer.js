const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    passengers_count: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    pickup_location: { type: String, required: true },
    drop_location: { type: String, required: true },
    vehicle_type: { type: String, required: true },
    trip_distance:{type:Number,required: true},
    trip_duration:{type:Number,required:true}
});

module.exports = mongoose.model('Customer', CustomerSchema);
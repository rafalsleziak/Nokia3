'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReservationSchema =new Schema( {
  startDate: {
    type: Date,
    required: true
   },
  endDate: {
    type: Date,
    required: true
   },
  numOfPeople: {
    type: Number,
    required: true,
    min: 0,
    max: 12
  },
  option: {
    type: String,
    enum: ['MakerSpace', 'OpenSpace', 'WholeSpace'],
    required: true
  }
});

/*ReservationSchema.virtual('Reservation_startDate').get(function() {
  return this.startDate;
});

ReservationSchema.virtual('Reservation_endDate').get(function() {
  return this.endDate;
});

ReservationSchema.virtual('Reservation_numOfPeople').get(function() {
  return this.numOfPeople;
});

ReservationSchema.virtual('Reservation_option').get(function() {
  return this.option;
});*/

ReservationSchema
.virtual('url')
.get(function(){
  return '/api/reservations/'+ this._id;
});

module.exports = mongoose.model('Reservation', ReservationSchema);

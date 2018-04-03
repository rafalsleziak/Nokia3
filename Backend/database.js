var DeviceItem = require('./models/device.js');
var ReservationItem = require('./models/reservations.js');


  //mongoose.connection.db.dropDataBase();

  var seedDevices = [{
    name: "3d printer",
    numLeft: 5
  },{
    name: "pc",
    numLeft: 7
  }];

  var seedReservations = [{
    startDate: '2018-03-25T23:10:15.000Z',
    endDate: '2018-03-25T23:11:00.000Z',
    numOfPeople: 3,
    option: 'WholeSpace'
  },{
    startDate: '2018-03-25T23:11:05.000Z',
    endDate: '2018-03-25T23:18:00.000Z',
    numOfPeople: 10,
    option: 'MakerSpace'
  }];

  DeviceItem.remove({}, ()=>{
    seedDevices.forEach(function(item){
      new DeviceItem(item).save();
    })
  })

  ReservationItem.remove({}, ()=>{
    seedReservations.forEach(function(item){
      new ReservationItem(item).save();
    })
  })

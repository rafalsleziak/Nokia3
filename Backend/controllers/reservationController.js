var Device = require('../models/device');
var Reservation=require('../models/reservations');
exports.index = function(req, res, next) {
  res.json({express: 'API works!'});
  console.log('hello there');
}


export.reservation_list = function (req, res, next) {
  Reservation.find(function(err reservations)) {
    if (err)
    res.send(err);
    res.json(reservations);

    export.index=function(res,req) {
      req.render('index');
    }
  }
}

exports.reservation_list = function(req, res) {
  models.reservations.findAll({  }).then((result) => {
  });
};

export.reservation_detail=function(req,res) {
models.reservations.findOne ({where:{id:req.params.id }}.then(res))

}

exports.reservation_create_get = function(req, res) {


}

exports.device_create_post = function(req, res) {
  var reservation = new Reservation();
  (req.body.startDate) ? reservation.startDate = req.body.startDate : null;
  (req.body.endDate) ? reservation.endDate= req.body.endDate : null;
    (req.body.NumOfPeople) ? reservation.NumOfPeople= req.body.NumOfPeople : null;
    (req.body.Options) ? reservation.Options= req.body.Options : null;


  reservation.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Reservation successfully added!' });
  });
}
var stream = require('stream');
const db = require('../config/db.config.js');

const Covid = db.covid;
 
exports.uploadFile = (req, res) => {
    var csv = require('csv');

    var parser = csv.parse(req.file.buffer, {
      delimiter: ',',
      columns: true
    });

    // Catch any error
    parser.on('error', function(err){
      console.error(err.message)
    });

    index = 0;

    // Use the readable stream api
    parser.on('readable', function(){
      let record
      prev_num_flight_change_percent = 0;
      prev_us_gas_price = 3;
      while (record = parser.read()) {
        console.log('Processing record ' + ++index);
        if (record.num_flight_change_percent == '') {
          record.num_flight_change_percent = prev_num_flight_change_percent;
        } else {
          prev_num_flight_change_percent = record.num_flight_change_percent;
        }

        if (record.us_gas_price == '') {
          record.us_gas_price = prev_us_gas_price;
        } else {
          prev_us_gas_price = record.us_gas_price;
        }

        console.log(record);
        Covid.create(record)
          .then(function() {
            console.log('Record created')
          })
          .catch(function(err) {
            console.log('Error encountered: ' + err)
          });
      }
    });
  
    parser.on('end', function() {
      res.json({msg:'CSV File uploaded successfully! -> filename = ' + req.file.originalname});
    });

}
 
exports.listAllFiles = (req, res) => {
  File.findAll({attributes: ['id', 'name']}).then(files => {
    res.json(files);
  }).catch(err => {
    console.log(err);
    res.json({msg: 'Error', detail: err});
  });
}
 
exports.downloadFile = (req, res) => {
  File.findById(req.params.id).then(file => {
    var fileContents = Buffer.from(file.data, "base64");
    var readStream = new stream.PassThrough();
    readStream.end(fileContents);
    
    res.set('Content-disposition', 'attachment; filename=' + file.name);
    res.set('Content-Type', file.type);
 
    readStream.pipe(res);
  }).catch(err => {
    console.log(err);
    res.json({msg: 'Error', detail: err});
  });
}

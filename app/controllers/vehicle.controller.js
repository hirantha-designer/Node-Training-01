const db =require('../models')
const Vehicle = db.vehicle;

exports.getAllVehicle = (req, res)=>{
    Vehicle.findAll()
    .then(data =>{
        if (data.length != 0) {
            res.status(200).send(data);
        } else {
            res.status(401).send('Vehicle are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
    }

exports.getSingleVehicle = (req, res)=>{
    const id = req.params.id;

    Vehicle.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });

}
exports.createVehicle = async (req, res)=>{

    const vehicle = {
        vehi_type: req.body.vehi_type,
        status: req.body.status,

         
    }
    await Vehicle.create(vehicle)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });


    
}

exports.updateVehicle = async (req, res)=>{
    const vehicle = {
        vehi_type: req.body.vehi_type,
        status: req.body.status,
         
    }
    await Vehicle.update(
        vehicle, {
        where: { id: req.body.id, }})
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });

}

exports.deleteVehicle = (req, res)=>{
    res.status(200).send(' Vehicle Delete  Success')
}
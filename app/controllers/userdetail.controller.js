const db =require('../models')
const UserDetail = db.userdetail;

exports.getAllUserDetail = (req, res)=>{
    UserDetail.findAll()
    .then(data =>{
        if (data.length != 0) {
            res.status(200).send(data);
        } else {
            res.status(401).send('UserDetails are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
    }

exports.getSingleUserDetail = (req, res)=>{
    const id = req.params.id;

    UserDetail.findByPk(id)
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
exports.createUserDetail = async (req, res)=>{

    const userdetail = {
        name_en: req.body.name_en,
        name_si: req.body.name_si,
        name_ta: req.body.name_ta,
        dob: req.body.dob,
        salary: req.body.salary,
        special_req: req.body.special_req,

    
    }
    await UserDetail.create(userdetail)
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

exports.updateUserDetail = async (req, res)=>{

    const userdetail = {
        name_en: req.body.name_en,
        name_si: req.body.name_si,
        name_ta: req.body.name_ta,
        dob: req.body.dob,
        salary: req.body.salary,
        special_req: req.body.special_req,

    }

    await UserDetail.update(
        userdetail, {
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

exports.deleteUserDetail = (req, res)=>{
    res.status(200).send('Delete  Success')
}
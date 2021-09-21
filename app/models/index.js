const dbConfig =require("../config/db.config");
const Sequelize =require("sequelize");
const { DB } =require("../config/db.config");

const sequelize =new Sequelize( dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize =Sequelize;
db.sequelize =sequelize;

sequelize
  .authenticate()
  .then(()=>{
      console.log("success");
  })
  .catch(err =>{
      console.error('erorr', err);
  })

  db.user=require("./user.model")(sequelize, Sequelize);
  db.role=require("./role.model")(sequelize, Sequelize);
  db.userdetail=require("./userdetail.model")(sequelize, Sequelize);
  db.vehicle=require("./vehicle.model")(sequelize, Sequelize);
  
  db.user.belongsToMany(db.role,{
    through: "user_role",
    as: "roles",
    foreignKey: "role_id"
});

db.role.belongsToMany(db.user,{
  through: "user_role",
  as: "users",
  foreignKey: "user_id"
});

db.user.hasOne(db.userdetail, {});
db.userdetail.belongsTo(db.user);

db.user.hasMany(db.vehicle, {});
db.vehicle.belongsTo(db.user);


  module.exports=db;
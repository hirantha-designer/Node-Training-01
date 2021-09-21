module.exports = (sequelize, Sequelize) =>{
    const Userdetails = sequelize.define("userdetail",{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        name_en: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        name_si: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        name_ta: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        dob: {
            type: Sequelize.DATEONLY,
            unique: true,
            allowNull: false,
        },
        salary: {
            type: Sequelize.FLOAT,
            unique: true,
            allowNull: false,
        },
        special_req: {
            type: Sequelize.STRING(100),
            unique: true,
            allowNull: false,
        }
    })

    return Userdetails;
}
module.exports = (sequelize, Sequelize) =>{
    const Vehicle = sequelize.define("vehicle",{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        vehi_type: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING(30),
            unique: true,
            allowNull: false,
        }
    })

    return Vehicle;
}
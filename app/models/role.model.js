module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define("role",{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        role_name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING(30),
            unique: false,
            allowNull: false,
        }
    })

    return Role;
}
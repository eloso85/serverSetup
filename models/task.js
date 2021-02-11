module.export = function(sequelize, DataTypes){
    const Model = sequelize.define('Task', {
        text:DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    })
    return Model
}
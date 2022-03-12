
var sql=require('sequelize')
var Sql=require('./database.js')
var Store=Sql.define("store",{
    id:{
        type:sql.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    
        allowNull:false
    },
    name:{
        type:sql.STRING,
        allowNull:false
    }, 
    address:{
        type:sql.STRING,
        allowNull:false
    },
    number:{
        type:sql.STRING,
        allowNull:false
    },
    email:{
        type:sql.STRING,
        allowNull:false
    },

})

module.exports=Store
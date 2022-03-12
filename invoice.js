
var sql=require('sequelize')
var Sql=require('./database.js')
var Invoice=Sql.define("invoice",{
    id:{
        type:sql.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    
        allowNull:false
    },
    buyer_name:{
        type:sql.STRING,
        allowNull:false
    }, 
    buyer_number:{
        type:sql.STRING,
        allowNull:false
    },
    date:{
        type:sql.DATE,
        allowNull:false,
        defaultValue:()=>Date.now()
    },
    paid:{
        type:sql.BOOLEAN,
        allowNull:false
    },
   
    storeId:{
        type:sql.INTEGER,
        references:{
            model:'stores',
            key:'id'
        }
    }





})

module.exports=Invoice
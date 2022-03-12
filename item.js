
var sql=require('sequelize')
var Sql=require('./database.js')
var Items=Sql.define("items",{
    id:{
        type:sql.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    
        allowNull:false
    },
    item_name:{
        type:sql.STRING,
        allowNull:false
    }, 
    item_price:{
        type:sql.INTEGER,
        allowNull:false
    },
    item_q:{
        type:sql.INTEGER,
        allowNull:false,
       
    },
    item_dis:{
        type:sql.INTEGER,
        allowNull:false,
       
    },
    item_gst:{
        type:sql.INTEGER,
        allowNull:false,
    },
    item_tot:{
        type:sql.INTEGER,
        allowNull:false

    },
    invoiceId:{
        type:sql.INTEGER,
        references:{
        model:'invoices',
        key:'id'
        }
    }




})

module.exports=Items
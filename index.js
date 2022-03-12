var express=require('express')
var path=require('path')
var app=express()
var db=require('./database.js')
var Item=require('./item.js')
var Invoice=require('./invoice.js')
var Store=require('./store.js')
Store.hasMany(Invoice)
Invoice.hasMany(Item)

db.sync().then(async (result)=>{
  }).catch((err)=>{
    console.log(err)
})
app.use(express.static("./"));

app.use(express.json())
app.post('/createstore',async(req,res)=>{
    var {name,address,number,email}=req.body
    console.log(name)
    const store_un=await Store.findAll({where:{name:name}})
    console.log(store_un.name)
    if(name.length>0 && store_un.length==0 ){
        try{
        const store=await Store.create({name:name,address:address,number:number,email:email})
        res.send({'status':"transaction has been inserted"})

        }
        catch(e){
            console.log(e)
            res.send({'error':" request failed"})
        }
    }
    else{
        res.send({'error':"store already exists"})
    }
})



app.post('/createinvoice',async(req,res)=>{
    var {store_name,buyer_name,buyer_number,paid,items}=req.body
    console.log(req.body)
    const store_un=await Store.findAll({where:{name:store_name}})
    
    if(store_un.length>0){

        try{
            const invoice=await Invoice.create({buyer_name:buyer_name,
                buyer_number:buyer_number,paid:paid,storeId:store_un[0].id})

         for (i=0;i<items.length;i++){
             var {item_dis,item_name,item_price,item_q}=items[i]
        const gst=item_price*item_q*(1-item_dis*0.01)*0.18
        const total_cost=gst+item_price*item_q*(1-item_dis*0.01)
        const item=await Item.create({item_name:item_name,
            item_price:item_price,
            item_q:item_q,item_dis:item_dis,item_gst:gst,item_tot:total_cost,invoiceId:invoice.id
   
        })
    }
        res.send({'status':"transaction has been inserted"})
        }






        catch(e){
            console.log(e)
            res.send({'error':"request failed"})
        }
    }
    else{
        var {store_name,buyer_name,buyer_number,paid,items,address,number,email}=req.body
        try{
        const store=await Store.create({name:store_name,address:address,number:number,email:email})
        console.log(store.id)
        const invoice=await Invoice.create({buyer_name:buyer_name,
            buyer_number:buyer_number,paid:paid,storeId:store.id})

            for (i=0;i<items.length;i++){
                var {item_dis,item_name,item_price,item_q}=items[i]
           const gst=item_price*item_q*(1-item_dis*0.01)*0.18
           const total_cost=gst+item_price*item_q*(1-item_dis*0.01)
           const item=await Item.create({item_name:item_name,
               item_price:item_price,
               item_q:item_q,item_dis:item_dis,item_gst:gst,item_tot:total_cost,invoiceId:invoice.id
      
           })
           res.send({'status':"transaction has been inserted"})

        }
    }catch(e){
        console.log(e)
        res.send({'error':'request failed'})
    }



    }
})

app.get('/store',(req,res)=>{
 res.sendFile(path.join(__dirname,'./store.html'))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./store.html'))
})

app.get('/customerid/:id',(req,res)=>{

})
app.listen(process.env.PORT, ()=>{
     

})
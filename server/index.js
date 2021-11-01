const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());

//creating routes


//-----------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------Operations on Truck Table-------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------

//truck insert
app.post("/api/truck/insert",async(req,res)=>{
    console.log(req.body);
    try{

        const insertTruck = await pool.query(
            "INSERT INTO truck(truck_id, capacity, is_ref) VALUES($1,$2,$3)",
            [req.body.truck_id, req.body.capacity, req.body.is_ref]
        );
        console.log(res);
        res.json('Entered to Truck table!!')

    }catch(err){
        console.error(err.message);
    }
})


// get all

app.get("/api/truck", async(req,res) => {
    try{
        const all_trucks = await pool.query("SELECT * FROM TRUCK");
        res.json(all_trucks.rows)
    }
    catch(err){
        console.error(err.message);
    }
});

//get one

app.get("/api/truck/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const get_one_truck = await pool.query("SELECT * FROM TRUCK WHERE  truck_id = $1 ",[
            id
        ]
        );
    res.json(get_one_truck.rows );
    }
    catch(err){
        console.error(err.message);
    }
});


//update one

app.put("/api/truck/:id", async (req,res) => {
    const {id} = req.params;
    console.log(req.params);
    try {
        const update = await pool.query("UPDATE truck SET capacity = $1,  is_ref = $2 where truck_id = $3",[req.body.capacity,
              req.body.is_ref, req.params.id])
              console.log(req.body);
        res.json("Truck details updated..")      
    }
    catch(err){
        console.error(err.message);
    }
    
})


//delete 

app.delete("/api/truck/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const delete_truck = await pool.query("DELETE FROM TRUCK WHERE  truck_id = $1 ",[
            id
        ]
        );
    res.json("Success!");
    }
    catch(err){
        console.error(err.message);
    }
});

//-----------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------Operations on Food Table--------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------

//Insert
app.post("/api/food/insert",async(req,res)=>{
    console.log(req.body);
    try{

        const insertFood = await pool.query(
            "INSERT INTO food(exp_date, is_ref, name, item_id) VALUES($1,$2,$3,$4)",
            [req.body.exp_date, req.body.is_ref, req.body.name, req.body.item_id]
        );
        console.log(res);
        res.json("Entered to Food table!!")

    }catch(err){
        console.error(err.message);
    }
})

//Get all
app.get("/api/food", async(req,res) => {
    try{
        const all_foods = await pool.query("SELECT * FROM FOOD");
        res.json(all_foods.rows)
    }
    catch(err){
        console.error(err.message);
    }
});

//Get one
app.get("/api/food/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const get_one_food = await pool.query("SELECT * FROM FOOD WHERE  item_id = $1 ",[
            id
        ]
        );
    res.json(get_one_food.rows );
    }
    catch(err){
        console.error(err.message);
    }
});

//Update One
app.put("/api/food/:id", async (req,res) => {
    const {id} = req.params;
    console.log(req.params);
    try {
        const updateFood = await pool.query("UPDATE food SET exp_date = $4, is_ref = $1, name = $2 where item_id = $3",[
              req.body.is_ref, req.body.name, req.params.id,req.body.exp_date])
              console.log(req.body);
        res.json("Food details updated..")      
    }
    catch(err){
        console.error(err.message);
    }
    
})

//Delete One
app.delete("/api/food/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const delete_truck = await pool.query("DELETE FROM FOOD WHERE  item_id = $1 ",[
            id
        ]
        );
    res.json("Success!");
    }
    catch(err){
        console.error(err.message);
    }
});


//-----------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------Operations on Items Table-------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------


//Insert
app.post("/api/items/insert",async(req,res)=>{
    console.log(req.body);
    try{
        const insertItems = await pool.query(
            "INSERT INTO items(item_id,quantity,weight,mgr_id,del_id) VALUES($1,$2,$3,$4,$5)",
            [req.body.item_id, req.body.quantity, req.body.weight, req.body.mgr_id, req.body.del_id]
        );
        console.log(res[1]);
        res.json("Entered to items table!!")

    }catch(err){
        console.error(err.message);
    }
})


//Get all
app.get("/api/items", async(req,res) => {
    try{
        const all_items = await pool.query("SELECT * FROM ITEMS");
        res.json(all_items.rows)
    }
    catch(err){
        console.error(err.message);
    }
});

//Get One
app.get("/api/items/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const get_one_items = await pool.query("SELECT * FROM items WHERE  item_id = $1 ",[
            id
        ]
        );
    res.json(get_one_items.rows );
    }
    catch(err){
        console.error(err.message);
    }
});

//Update One
app.put("/api/items/:id", async (req,res) => {
    const {id} = req.params;
    console.log(req.params);
    try {
        const updateitems = await pool.query("UPDATE items SET quantity=$1, weight=$2, mgr_id=$3, del_id=$4 WHERE item_id=$5",[
              req.body.quantity, req.body.weight, req.body.mgr_id,req.body.del_id,req.params.id])
              console.log(req.body);
              //console.log(updateitems)
        res.json("Items details updated..")      
    }
    catch(err){
        console.error(err.message);
    }
    
})

//Delete One
app.delete("/api/items/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const delete_truck = await pool.query("DELETE FROM items WHERE  item_id = $1 ",[
            id
        ]
        );
    res.json("Success!");
    }
    catch(err){
        console.error(err.message);
    }
});

//-----------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------Operations on Items Table-------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------


//Insert
app.post("/api/manager/insert",async(req,res)=>{
    console.log(req.body);
    try{
        const insertmanager = await pool.query(
            "INSERT INTO manager(mgr_id) VALUES ($1)",[req.body.mgr_id]
        );
        console.log(res[1]);
        res.json("Entered to manager table!!")

    }catch(err){
        console.error(err.message);
    }
})

//Get all
app.get("/api/manager", async(req,res) => {
    try{
        const all_manager = await pool.query("SELECT * FROM manager");
        res.json(all_manager.rows)
    }
    catch(err){
        console.error(err.message);
    }
});

//Get One
app.get("/api/manager/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const get_one_manager = await pool.query("SELECT * FROM manager WHERE  item_id = $1 ",[
            id
        ]
        );
    res.json(get_one_manager.rows );
    }
    catch(err){
        console.error(err.message);
    }
});

//Update one
app.put("/api/manager/:id", async (req,res) => {
    const {id} = req.params;
    console.log(req.params);
    try {
        const updatemanager = await pool.query("UPDATE manager SET mgr_id=$1 WHERE mgr_id=$2",[
              req.body.mgr_id,req.params.id])
              console.log(req.body);
              //console.log(updatemanager)
        res.json("manager details updated..")      
    }
    catch(err){
        console.error(err.message);
    }
    
})

//delete One
app.delete("/api/manager/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const delete_truck = await pool.query("DELETE FROM manager WHERE  mgr_id = $1 ",[
            id
        ]
        );
    res.json("Success!");
    }
    catch(err){
        console.error(err.message);
    }
});

//-----------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------Operations on Non-food Table-----------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------

//Insert one
app.post("/api/non_food/insert",async(req,res)=>{
    console.log(req.body);
    try{
        const insertnon_food = await pool.query(
            "INSERT INTO non_food(category,name,item_id) VALUES($1,$2,$3)",
            [req.body.category, req.body.name, req.body.item_id,]
        );
        console.log(res[1]);
        res.json("Entered to non_food table!!")

    }catch(err){
        console.error(err.message);
    }
})

//Get all
app.get("/api/non_food", async(req,res) => {
    try{
        const all_non_food = await pool.query("SELECT * FROM non_food");
        res.json(all_non_food.rows)
    }
    catch(err){
        console.error(err.message);
    }
});

//Get One
app.get("/api/non_food/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const get_one_non_food = await pool.query("SELECT * FROM non_food WHERE  item_id = $1 ",[
            id
        ]
        );
    res.json(get_one_non_food.rows );
    }
    catch(err){
        console.error(err.message);
    }
});

//Update One
app.put("/api/non_food/:id", async (req,res) => {
    const {id} = req.params;
    console.log(req.params);
    try {
        const update_non_food = await pool.query("UPDATE non_food SET category=$1, name=$2 WHERE item_id=$3",[
              req.body.category, req.body.name, req.params.id])
              console.log(req.body);
              //console.log(updatenon_food)
        res.json("non_food details updated..")      
    }
    catch(err){
        console.error(err.message);
    }
    
})

//delete One
app.delete("/api/non_food/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const delete_truck = await pool.query("DELETE FROM non_food WHERE item_id = $1 ",[
            id
        ]
        );
    res.json("Success!");
    }
    catch(err){
        console.error(err.message);
    }
});


app.listen(5000,() => {
    console.log("Server successfully running on port 5000");
});

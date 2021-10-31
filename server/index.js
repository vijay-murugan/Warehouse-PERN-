const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());

//creating routes


//create new
//truck insert
app.post("/api/truck/insert",async(req,res)=>{
    console.log(req.body);
    try{

        const res = await pool.query(
            "INSERT INTO truck(truck_id, capacity, is_ref) VALUES($1,$2,$3)",
            [req.body.truck_id, req.body.capacity, req.body.is_ref]
        );
        console.log(res);

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

app.put("/api/truck/:id", async(req,res) => {
    const {id} = req.params;
    console.log(req.params);
    try {
        const res = await pool.query("UPDATE truck SET capacity = $1,  is_ref = $2 where truck_id = $3",[req.body.capacity,
              req.body.is_ref, req.params.id])
              console.log(req.body);
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




app.listen(5000,() => {
    console.log("Server successfully running on port 5000");
});

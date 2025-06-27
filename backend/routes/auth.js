const express=require('express')
const router=express.Router();
router.get('/', (req, res) => {
 obj={
    a:"laiba",
    num:34
 }
 res.json(obj)
})
module.exports=router
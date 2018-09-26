var express = require('express');
var router = express.Router();
var googleModel = require('../model/class')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/today',(req,res)=>{
  let {pn=1,size=10} = req.query
  pn = parseInt(pn)
  size = parseInt(size)
  googleModel.find().limit(size).skip((pn-1)*size).then(data=>{
    res.json({
      code:200,
      data
    })
  })
})
router.post('/today',(req,res)=>{
  let {name,age,desc} = req.body
  googleModel.create({name,age,desc}).then(data=>{
    console.log(data)
    res.json({
      code:200,
      data
    })
  })
})
router.put('/today/:id',(req,res)=>{
  let {desc} = req.body
  let {id} = req.params
  googleModel.updateOne({_id:id},{$set:{desc}}).then(doc=>{
    res.json({
      code:200,
      doc:doc
    })
  })
})
router.get('/today/:id',(req,res)=>{
  const {id} = req.params
  googleModel.findById(id).then(doc=>{
    res.json({
      code:200,
      data:doc
    })
  })
})
router.delete('/today/:id',(req,res)=>{
  const {id} = req.params
  googleModel.deleteOne({_id:id}).then(desc=>{
    console.log(desc);
    res.json({
      code:200,
      desc
    })
  })
})
module.exports = router;

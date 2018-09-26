//mongoose 的骨架
var mongoose = require('mongoose')
const googleClass = new mongoose.Schema({
    name:String,
    age:Number
})   

//mongoose 的model模型
const googleModel = mongoose.model('today',googleClass,'today')
//导出模型
module.exports = googleModel
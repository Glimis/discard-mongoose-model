var mongoose=require('mongoose')
var Schema = mongoose.Schema;

module.exports =new Schema({
   //指标名
   name:String,
   //权重/分值
   score:String,
   //类型,1/2/3 前端记忆
   type:String
});

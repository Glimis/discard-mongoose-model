var mongoose=require('mongoose')
var Schema = mongoose.Schema;
var indicattemplate =require('./indicattemplate');


module.exports = new Schema({
   //项目名
   name:String,
   //所选专家,全局唯一,需要再专家管理处修改
   experts:[{type:String,ref:'expert'}],
   //选择指标模板,并修改
   //修改内容对模板无影响
   indicat:[indicattemplate]
});


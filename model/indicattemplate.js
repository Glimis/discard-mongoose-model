var mongoose=require('mongoose')
var indicat=require('./indicat');

var Schema = mongoose.Schema;
//指标模板,模板下的指标与模板强连接,不允许单独获取指标信息
module.exports =new Schema({
   //模板名称
   name:String,
   //模板类型,1,2,由前端记忆
   type:String,
   //备注
   remark:String,
   indicats:[indicat]
});

var mongoose=require('mongoose')
var Schema = mongoose.Schema;

//专家单独维护,其他地方不允许直接使用
module.exports =new Schema({
   //专家名
   name:String,
    //专业描述
   remark:String,
   //所属公司
   dept:String
});

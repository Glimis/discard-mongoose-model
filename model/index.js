var expert =require('./expert');
var indicattemplate=require('./indicattemplate');
var project =require('./project');
var mongoose=require('mongoose')


var M=global.M={};
M.expert=mongoose.model('expert', expert); 
M.indicattemplate=mongoose.model('indicattemplate', indicattemplate);
M.project=mongoose.model('project', project); 

M.expert.create({
    name:"xxxx"
},function(e,expert){

    M.project.create({
        name:"project",
        experts:[expert._id]
    },function(e,project){
        console.log('project',project)
    })
})
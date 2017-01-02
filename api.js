var express=require('express');
var app = express();
var mongoose = require('mongoose');
var multiparty=require('multiparty');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/static'));

mongoose.connect('mongodb://localhost:27017/server',  {
        user: '',
        pass: ''
      }); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var _ =require('lodash')
require('./model/index')

/**
 * table代表表名
 * query
 *   page 1 页码,最小1
 *   pagesize 10 页数
 *   expend  关联,包含N+1特性,本身并不建议使用
 *
 *   other
 *     其他过滤条件
 *   
 */
app.get('/api/:table',function(req,res){
    var table=M[req.params.table];
    if(!table){
      res.json({
        status:0,
        msg:'传递数据有误'
      })
    }else{
      //默认参数与获取的所有数据
      var query=_.extend({
        page:1,
        pagesize:10,
        expend:'',
      },req.query);

      //获取过滤信息
      var filterObj=_.pick(query,_.keys(table.schema.obj));
      //获取分页信息
      var pageObj=_.pick(query, ['page', 'pagesize']);
      //获取是否展开信息
      var expend=query.expend;

      //创建查询
      var q=table.find(filterObj);
      if(expend){
        q.populate(expend);
      }
      q.exec(function(e,d){
          res.json(d);
      });
    }
})


app.post('/api/:table', function(req,res){
    var table=M[req.params.table];
    if(!table){
      res.json({
        status:0,
        msg:'传递数据有误'
      })
    }else{
      var obj=req.body;
      table.create(obj,function(error,data){
          res.json(data);
        })
    }
})


var server = app.listen(60000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('biz远程服务启动 http://%s:%s', host, port);
});



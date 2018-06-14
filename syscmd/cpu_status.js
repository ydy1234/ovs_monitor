
var client_manager = require("../lib/client-manager.js")();
var utils = require("../lib/utils.js");

function getCPU(req, res, next) {
	var spa = require('child_process');
	var cmdStr='top -b -n 1';
	spa.exec(cmdStr,function callback(err,stdout,stderr){
        if(err)
        {
           console.log(err);
           res.send(err);
		}
		else
		{
		  /*
          var fs = require("fs");
          //var data="宋茂林是好人";
          fs.writeFile('./wfile.txt',stdout,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
          if(err){
               console.log("文件写入失败")
          }else{
             console.log("文件写入成功");

           }

          })
          */
		  res.send(stdout.replace(/\n/g,"<br/>"));
		  //res.send(JSON.stringify(stdout));
		}
		}).on('exit',function(code){
            console.log('child process quit'+code);
		});
}

exports.getCPU=getCPU;

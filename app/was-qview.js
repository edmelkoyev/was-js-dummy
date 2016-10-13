var was = {};
was.createQuestion = function (mqId, elmId){
   "use strict";
   var obj = {};
   obj.id = mqId;
   obj.elId = elmId;
   obj.render = function(){
      document.getElementById(obj.elId).innerHTML = "<article style='border:1px solid #8b008b; padding: 0 8px;'><h2>Question ["+ this.id +"]</h2><p>Question Statement</p><ul><li>Option A</li><li>Option B</li></ul></article>";
   };
    return obj;
};
!function(){"use strict";angular.module("app",["ionic"])}(),function(){"use strict";function e(e,t,i,a,n,o,s){function l(){m.listItem=null,m.selectType="",m.disabled=!0,m.startRows=0,m.rowsCount=1,m.pageSize=10,m.isActive=!1,m.dataTips="",r()}function r(){var t={"docType.s":"jtqb_end_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.rowsCount*m.pageSize,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){m.isActive=!0,m.code=t.data.res[0].h[0]["code.i"],0==m.code?(m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listItem=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listData.length<m.pageSize?(m.disabled=!1,0==m.listData.length?m.dataTips="":m.dataTips="数据已全部加载!"):(m.disabled=!0,m.dataTips="")):s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")},function(t){m.isActive=!0,s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")})}function c(){o(function(){m.startRows=0,m.rowsCount=1,m.getDatas()},50),m.disabled=!0}function d(){var t={"docType.s":"jtqb_end_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.rowsCount*m.pageSize,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){if(m.code=t.data.res[0].h[0]["code.i"],0==m.code){m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;var i=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;if(i.length>0){for(var a=0;a<i.length;a++)m.listItem.push(i[a]);m.rowsCount++}else m.disabled=!1,m.dataTips="数据已全部加载完成";e.$broadcast("scroll.infiniteScrollComplete")}else s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3})},function(e){s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3})})}var m=this;m.init=l,m.getDatas=r,m.pathReload=c,m.nextPage=d,m.init()}angular.module("app").controller("QbCtrl",e),e.$inject=["$scope","$state","$stateParams","$rootScope","dataService","$timeout","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o,s){function l(){m.listItem=null,m.name="查看列表",m.disabled=!0,m.startRows=0,m.rowsCount=1,m.pageSize=10,m.isActive=!1,m.dataTips="",m.getDatas()}function r(){var t={"docType.s":"yy_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.startRows,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){m.isActive=!0,m.code=t.data.res[0].h[0]["code.i"],0==m.code?(m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listItem=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listData.length<m.pageSize?(m.disabled=!1,0==m.listData.length?m.dataTips="":m.dataTips="数据已全部加载!"):(m.disabled=!0,m.dataTips="")):s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")},function(t){m.isActive=!0,s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")})}function c(){o(function(){m.startRows=0,m.rowsCount=1,m.getDatas()},50),m.disabled=!0}function d(){var t={"docType.s":"yy_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.rowsCount*m.pageSize,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){if(m.code=t.data.res[0].h[0]["code.i"],0==m.code){m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;var i=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;if(i.length>0){for(var a=0;a<i.length;a++)m.listItem.push(i[a]);m.rowsCount++}else m.disabled=!1,m.dataTips="数据已全部加载完成";e.$broadcast("scroll.infiniteScrollComplete")}else s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3})},function(e){s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3})})}var m=this;m.init=l,m.getDatas=r,m.pathReload=c,m.nextPage=d,m.init()}angular.module("app").controller("YyCtrl",e),e.$inject=["$scope","$state","$stateParams","$rootScope","dataService","$timeout","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o,s){function l(){m.listItem=null,m.name="查看列表",m.disabled=!0,m.startRows=0,m.rowsCount=1,m.pageSize=10,m.isActive=!1,m.dataTips="",m.getDatas()}function r(){var t={"docType.s":"yb_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.startRows,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){m.isActive=!0,m.code=t.data.res[0].h[0]["code.i"],0==m.code?(m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listItem=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listData.length<m.pageSize?(m.disabled=!1,0==m.listData.length?m.dataTips="":m.dataTips="数据已全部加载!"):(m.disabled=!0,m.dataTips="")):s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")},function(t){m.isActive=!0,s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")})}function c(){o(function(){m.startRows=0,m.rowsCount=1,m.getDatas()},50),m.disabled=!0}function d(){var t={"docType.s":"yb_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.rowsCount*m.pageSize,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){if(m.code=t.data.res[0].h[0]["code.i"],0==m.code){m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;var i=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;if(i.length>0){for(var a=0;a<i.length;a++)m.listItem.push(i[a]);m.rowsCount++}else m.disabled=!1,m.dataTips="数据已全部加载完成";e.$broadcast("scroll.infiniteScrollComplete")}else s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3})},function(e){s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3})})}var m=this;m.init=l,m.getDatas=r,m.pathReload=c,m.nextPage=d,m.init()}angular.module("app").controller("YbCtrl",e),e.$inject=["$scope","$state","$stateParams","$rootScope","dataService","$timeout","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o,s){function l(){m.listItem=null,m.name="查看列表",m.disabled=!0,m.startRows=0,m.rowsCount=1,m.pageSize=10,m.isActive=!1,m.dataTips="",m.getDatas()}function r(){var t={"docType.s":"dy_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.startRows,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){m.isActive=!0,m.code=t.data.res[0].h[0]["code.i"],0==m.code?(m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listItem=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listData.length<m.pageSize?(m.disabled=!1,0==m.listData.length?m.dataTips="":m.dataTips="数据已全部加载!"):(m.disabled=!0,m.dataTips="")):s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")},function(t){m.isActive=!0,s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")})}function c(){o(function(){m.startRows=0,m.rowsCount=1,m.getDatas()},50),m.disabled=!0}function d(){var t={"docType.s":"dy_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.rowsCount*m.pageSize,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){if(m.code=t.data.res[0].h[0]["code.i"],0==m.code){m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;var i=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;if(i.length>0){for(var a=0;a<i.length;a++)m.listItem.push(i[a]);m.rowsCount++}else m.disabled=!1,m.dataTips="数据已全部加载完成";e.$broadcast("scroll.infiniteScrollComplete")}else s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3})},function(e){s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3})})}var m=this;m.init=l,m.getDatas=r,m.pathReload=c,m.nextPage=d,m.init()}angular.module("app").controller("DyCtrl",e),e.$inject=["$scope","$state","$stateParams","$rootScope","dataService","$timeout","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o,s){function l(){if(m.listItem=null,m.name="查看列表",m.disabled=!0,m.startRows=0,m.rowsCount=1,m.pageSize=10,m.isActive=!1,m.dataTips="",""==a.ssoTickey&&""==sessionStorage.getItem("ssoTicket"))console.log(12);else{var e={"agencyCode.s":"001","password.s":"lele940329","userName.s":"wangzining1"};n.post("com.nqsky.meap.api.sso.service.ISsoAPIService","login",e,function(e){0==parseInt(e.data.res[0].h[0]["code.i"])?(a.ssoTickey=e.data.res[1].b[3].ssoCertification[0]["access_token.s"],a.realName=e.data.res[1].b[1].UserAccount[0]["realName.s"],a.userName=e.data.res[1].b[1].UserAccount[0]["userName.s"],m.getDatas()):s.show({template:"登陆失败！",noBackdrop:!0,duration:3e3})},function(e){}),""==a.ssoTicket&&(a.ssoTicket=sessionStorage.getItem("ssoTicket"))}}function r(){var t={"docType.s":"db_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.startRows,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){m.isActive=!0,m.code=t.data.res[0].h[0]["code.i"],0==m.code?(m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listItem=JSON.parse(t.data.res[1].b[0]["data.s"]).datas,m.listData.length<m.pageSize?(m.disabled=!1,0==m.listData.length?m.dataTips="":m.dataTips="数据已全部加载!"):(m.disabled=!0,m.dataTips="")):s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")},function(t){m.isActive=!0,s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3}),e.$broadcast("scroll.refreshComplete")})}function c(){o(function(){m.startRows=0,m.rowsCount=1,m.getDatas()},50),m.disabled=!0}function d(){var t={"docType.s":"db_list","ssoTicket.s":a.ssoTickey,"cnName.s":a.userName,"start.s":m.rowsCount*m.pageSize,"size.s":m.pageSize};n.post("com.cecic.moa.base.action.RestAction","findDocList",t,function(t){if(m.code=t.data.res[0].h[0]["code.i"],0==m.code){m.listData=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;var i=JSON.parse(t.data.res[1].b[0]["data.s"]).datas;if(i.length>0){for(var a=0;a<i.length;a++)m.listItem.push(i[a]);m.rowsCount++}else m.disabled=!1,m.dataTips="数据已全部加载完成";e.$broadcast("scroll.infiniteScrollComplete")}else s.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3})},function(e){s.show({template:"网络连接错误",noBackdrop:!0,duration:3e3})})}var m=this;m.init=l,m.getDatas=r,m.pathReload=c,m.nextPage=d,m.init()}angular.module("app").controller("DbCtrl",e),e.$inject=["$scope","$state","$stateParams","$rootScope","dataService","$timeout","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o){function s(){}var l=this;l.init=s,l.init()}angular.module("app").controller("RecordCtrl",e),e.$inject=["$scope","$rootScope","dataService","$ionicTabsDelegate","$state","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o){function s(){console.log(JSON.stringify(t.historyEntities))}var l=this;l.init=s,l.init()}angular.module("app").controller("ProcessCtrl",e),e.$inject=["$scope","$rootScope","dataService","$ionicTabsDelegate","$state","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o){function s(){l.historyList=t.optionInfos}var l=this;l.init=s,l.init()}angular.module("app").controller("HistoryCtrl",e),e.$inject=["$scope","$rootScope","dataService","$ionicTabsDelegate","$state","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o){function s(){r.fileIetm=t.fiels}function l(e){console.log(e)}var r=this;r.init=s,r.downloadFile=l,r.init()}angular.module("app").controller("FileListCtrl",e),e.$inject=["$scope","$rootScope","dataService","$ionicTabsDelegate","$state","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o){function s(){}var l=this;l.init=s,l.init()}angular.module("app").controller("DoCtrl",e),e.$inject=["$scope","$rootScope","dataService","$ionicTabsDelegate","$state","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o){function s(){}var l=this;l.init=s,l.init()}angular.module("app").controller("DetailQbCtrl",e),e.$inject=["$scope","$rootScope","dataService","$ionicTabsDelegate","$state","$ionicLoading"]}(),function(){"use strict";function e(e,t,i,a,n,o){function s(){}function l(){if(void 0==t.deptName){var e={"ssoTicket.s":t.ssoTickey,"userCode.s":t.userName};i.post("com.cecic.moa.base.action.RestAction","gwUrl",e,function(e){if(c.menu=!0,c.code=e.data.res[0].h[0]["code.i"],0==c.code){t.deptName=JSON.parse(e.data.res[1].b[0]["data.s"])[0].menuName,t.docDealUrl=JSON.parse(e.data.res[1].b[0]["data.s"])[0].doc_deal_url,t.docEndUrl=JSON.parse(e.data.res[1].b[0]["data.s"])[0].doc_end_url;var i={deptName:JSON.parse(e.data.res[1].b[0]["data.s"])[0].menuName};c.menuList.push(i)}else o.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3})},function(e){})}else c.menu=!0;c.listDept=c.menuList}function r(e){switch(c.menu=!1,a.select(4),c.deptType="jtqb",e){case"集团签报":n.go("main.qb");break;case"集团收文":n.go("main.sw");break;case"集团发文":n.go("main.fw");break;default:n.go("main.dept")}}var c=this;c.init=s,c.menuSelect=l,c.hrefkip=r,c.menuList=[{deptName:"集团签报"},{deptName:"集团收文"},{deptName:"集团发文"}],c.init()}angular.module("app").controller("MainCtrl",e),e.$inject=["$scope","$rootScope","dataService","$ionicTabsDelegate","$state","$ionicLoading"]}(),function(){"use strict";function e(e,t){function i(){n.id=t.id,n.getDatas()}function a(){n.items=["AAA","BBB","CCC"]}var n=this;n.init=i,n.getDatas=a,n.init()}angular.module("app").controller("ListCtrl",e),e.$inject=["$scope","$stateParams"]}(),function(){"use strict";function e(e,t,i,a,n,o){function s(){l("table"),n.back=""}function l(e){r.scheduleState=e,n.backUrl=t.backUrl,console.log(n.backUrl);var s={"url.s":t.id,"ssoTicket.s":n.ssoTickey,"cnName.s":n.userName};a.post("com.cecic.moa.sign.action.SignAction","findGsign",s,function(e){if(0==parseInt(e.data.res[0].h[0]["code.i"])){var t=JSON.parse(e.data.res[1].b[0]["data.s"]);n.fiels=void 0==t.fiels?"":t.fiels,n.optionInfos=void 0==t.optionInfos?"":t.optionInfos,n.historyEntities=void 0==t.historyEntities?"":t.historyEntities,n.DocumentAuthors=""==t.DocumentAuthors?"":t.DocumentAuthors,n.stat=""==t.stat?"":t.stat,n.notifyRecord=void 0==t.notifyRecord?"":t.notifyRecord,n.selectOptions=void 0==t.selectOptions?"":t.selectOptions,n.operate=JSON.parse(void 0==t.operate?"":t.operate),n.detailFrom=""}else o.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3})},function(e){o.show({template:"Sorry，数据加载出错！",noBackdrop:!0,duration:3e3})}),i.go("detail."+e)}var r=this;r.init=s,r.tabSelectCss=l,r.init()}angular.module("app").controller("DetailCtrl",e),e.$inject=["$scope","$stateParams","$state","dataService","$rootScope","$ionicLoading"]}(),function(){"use strict";function e(e,t,i){function a(a,n,o,s,l,r){var c,d="";return d="login"==o?t:i,c="post"==a?{method:a,url:d,data:{req:[{h:[{"u.s":"?i="+n+"&m="+o}]},{b:[s]}]},headers:{"Content-Type":"application/x-www-form-urlencoded"}}:{method:a,url:d,params:{req:[{h:[{"u.s":"?i="+n+"&m="+o}]},{b:[s]}]}},e(c).then(function(e){l&&l(e)})["catch"](function(e,t,i,a){r&&r(e)})}function n(e,t,i,n,o){return a("get",e,t,i,n,o)}function o(e,t,i,n,o,s){return a("post",e,t,i,n,o)}var s={get:n,post:o};return s}function t(){function e(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(i){"QuotaExceededError"==i.name&&(console.log("超出本地存储限额！"),localStorage.clear(),localStorage.setItem(e,JSON.stringify(t)))}}function t(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(i){return t}}function i(e){localStorage.removeItem(e)}function a(){localStorage.clear()}var n={setLocalStorage:e,getLocalStorage:t,delLocalStorage:i,delAllLocalStorage:a};return n}e.$inject=["$http","serviceUrl","serviceUrlOa"],angular.module("app").factory("dataService",e).factory("toolService",t)}(),function(){"use strict";function e(){return function(e,t){var i=new Date(e);if("Invalid Date"!=i){var a=t;return a=a.replace("yyyy",i.getFullYear()),a=a.replace("yy",(i.getFullYear()+"").substring(2,4)),a=a.replace("MM",i.getMonth()+1),a=a.replace("dd",i.getDate()),a=a.replace("HH",i.getHours()),a=a.replace("mm",i.getMinutes()),a=a.replace("ss",i.getSeconds()),a=a.replace("fff",i.getMilliseconds())}return e}}angular.module("app").filter("formatDate",e)}(),function(){"use strict";angular.module("app").directive("header",function(){return{restrict:"AE",replace:!0,templateUrl:"template/header.html",link:function(e,t,i){}}})}(),function(e,t){function i(){var e=t.documentElement.clientWidth,i=10*e/320;t.getElementsByTagName("html")[0].style.fontSize=((i>10?i:10)>20?20:i)+"px"}i(),e.addEventListener("resize",i,!1)}(window,document),function(e){function t(e,t){for(var i in t)e[i]=void 0!==e[i]?e[i]:t[i]}function i(e,i){"undefined"==typeof WebViewJavascriptBridge&&console.log("factory WebViewJavascriptBridge未定义");var a=i||{},n=function(t){console.log("默认成功回调",e,t)},s=function(t){console.log("默认失败回调",e,t)};a.onSuccess&&(n=a.onSuccess,delete a.onSuccess),a.onFail&&(s=a.onFail,delete a.onFail);var l=function(e){try{var t=JSON.parse(e)}catch(i){var a="客户端返回response解析错误，错误描述："+i+"response信息："+e,t={code:"1",obj:a}}var o=t.code;"0"==o?n(t):s(t)};switch(e){case"device.start":t(a,{URLScheme:"",intent:""}),o.android?delete a.URLScheme:o.ios&&(delete a.intent,a.URLScheme=a.URLScheme+"://");break;case"runtime.networkPost":case"runtime.networkGet":t(a,{group:"",isCompres:!1,isSalt:!1,encryptionType:"01",Ishttps:"02",targetUrl:"",isExternal:!1});break;case"runtime.selectUserFromContact":case"runtime.selectDepartmentFromOrgan":case"runtime.contact":t(a,{maxSelectNum:1});break;case"runtime.keyboard":WebViewJavascriptBridge.registerHandler("keyboardInput",function(e,t){a.callBack(e)});break;case"runtime.menu":if(""!==a.method){a.items=[];var r=a.methodFn;delete a.methodFn,WebViewJavascriptBridge.registerHandler(a.method,function(e,t){r(e)})}else if(""==a.method&&a.items instanceof Array&&a.items.length>0){a.hasOwnProperty("methodFn")&&delete a.methodFn;for(var c=0;c<a.items.length;c++){var d=a.items[c].methodFn;delete a.items[c].methodFn,WebViewJavascriptBridge.registerHandler(a.items[c].method,d)}}else console.log("设置更多菜单参数错误，请检查");break;case"runtime.uploadFile":t(a,{fileName:"",uploadCallBack:""});var m=a.uploadCallBack;a.uploadCallBack="uploadCallBack",WebViewJavascriptBridge.registerHandler("uploadCallBack",m);break;case"runtime.downloadFile":void 0!==a.url&&void 0!==a.fileToken&&delete a.fileToken,t(a,{dowloadCallBack:""});var m=a.dowloadCallBack;a.dowloadCallBack="dowloadCallBack",WebViewJavascriptBridge.registerHandler("dowloadCallBack",m);break;case"runtime.sharePerence":("remove"==a.opt||"get"==a.opt||"clear"==a.opt&&void 0!==a.value)&&delete a.value,"clear"==a.opt&&void 0!==a.key&&delete a.key;break;case"runtime.photoBorwser":t(a,{index:"0",isFullPath:!1});break;case"runtime.selectDocuments":t(a,{multiple:!1});break;case"device.startCaptureQRCode":t(a,{codeType:"0",needResult:!1});break;case"runtime.startLightApp":t(a,{fromKey:"",toKey:"",action:"",type:""})}var u=e.split("."),p=u.pop();WebViewJavascriptBridge.callHandler(p,a,l)}var a=["device.start","device.getBatteryinfo","device.getConnection","device.getDeviceImei","device.getDeviceSysVersion","device.getDeviceModelName","device.getScreenSize","device.location","device.imagePicker","device.startCaptureQRCode","runtime.networkPost","runtime.networkGet","runtime.uploadFile","runtime.downloadFile","runtime.showPasswordLock","runtime.contact","runtime.selectUserFromContact","runtime.addressBook","runtime.sharePerence","runtime.setTitleBG","runtime.setTitleColor","runtime.setTitle","runtime.closePage","runtime.menu","runtime.getUserInfoById","runtime.showUserInfoById","runtime.getDepartmentInfoById","runtime.selectDepartmentFromOrgan","runtime.selectUserFromOrgan","runtime.appAuthorization","runtime.photoBorwser","runtime.userinfo","runtime.share","runtime.keyboard","runtime.selectDocuments","runtime.login","runtime.loginout","runtime.startLightApp","runtime.hiddenNavBar","runtime.camera","runtime.appProfileInfo","runtime.openAPIRequest","runtime.appInfo","runtime.statistics","runtime.parkPlatformInfo"],n=e.navigator.userAgent,o={version:"2.0.9",ios:/iPhone|iPad|iPod/i.test(n),android:/Android/i.test(n),ready:function(e){var t=function(e,t){if(e||console.log("bridge初始化失败"),e.init(function(e,t){t(data)}),void 0!=t)for(var i in t)"push"==i&&e.registerHandler("push",function(e,i){t.push(e)}),"intent"==i&&e.registerHandler("intent",function(e,i){t.intent(e)}),"pluginInit"==i&&e.registerHandler("pluginInitFinished",function(e,i){t.pluginInit()}),"init"==i&&e.registerHandler("init",function(e,i){t.init(e)})};window.WebViewJavascriptBridge?t(WebViewJavascriptBridge,e):document.addEventListener("WebViewJavascriptBridgeReady",function(){t(WebViewJavascriptBridge,e)},!1)}},s=function(e,t){for(var i=e.split("."),a=o,n=0,s=i.length;s>n;n++)n===s-1&&(a[i[n]]=t),"undefined"==typeof a[i[n]]&&(a[i[n]]={}),a=a[i[n]]};a.forEach(function(e){s(e,function(t){i(e,t)})}),o._nameSpace=s,e.ns=o}(this),function(){"use strict";function e(e,t,i){if("Win32"==navigator.platform)e.ssoTicket="ssoTicket";else{ns.ready({pluginInit:function(){ns.runtime.appAuthorization({onSuccess:function(t){e.ssoTicket=t.obj.ssoTicket},onFail:function(e){console.log("推送异常：获取ssoTicket失败",JSON.stringify(e)),alert("推送异常：获取ssoTicket失败",JSON.stringify(e))}})}});var a={"agencyCode.s":"001","password.s":"1234qwer","userName.s":"mengweiqiang"};i.post("com.nqsky.meap.api.sso.service.ISsoAPIService","login",a,function(i){0==parseInt(i.data.res[0].h[0]["code.i"])?(e.ssoTickey=i.data.res[1].b[3].ssoCertification[0]["access_token.s"],e.realName=i.data.res[1].b[1].UserAccount[0]["realName.s"],e.userName=i.data.res[1].b[1].UserAccount[0]["userName.s"]):t.show({template:"登陆失败！",noBackdrop:!0,duration:3e3})},function(e){})}}e.$inject=["$rootScope","$ionicLoading","dataService"],angular.module("app").run(e)}(),function(){"use strict";angular.module("app").config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("main",{url:"/main",templateUrl:"template/main.html",controller:"MainCtrl",cache:!1,controllerAs:"vm"}).state("main.db",{url:"/db",views:{"tab-db":{templateUrl:"template/list/db.html",controller:"DbCtrl",cache:!1,controllerAs:"vm"}}}).state("main.yb",{url:"/yb",views:{"tab-yb":{templateUrl:"template/list/yb.html",controller:"YbCtrl",cache:!1,controllerAs:"vm"}}}).state("main.dy",{url:"/dy",views:{"tab-dy":{templateUrl:"template/list/dy.html",controller:"DyCtrl",cache:!1,controllerAs:"vm"}}}).state("main.yy",{url:"/yy",views:{"tab-yy":{templateUrl:"template/list/yy.html",controller:"YyCtrl",cache:!1,controllerAs:"vm"}}}).state("main.qb",{url:"/qb",views:{"tab-menu":{templateUrl:"template/list/jtqb.html",controller:"QbCtrl",cache:!1,controllerAs:"vm"}}}).state("detail",{url:"/detail",params:{id:"",type:"",backUrl:""},templateUrl:"template/detail.html",controller:"DetailCtrl",cache:!1,controllerAs:"vm"}).state("detail.table",{url:"/table",views:{"tab-detail-table":{templateUrl:"template/detail/qb.html",controller:"DetailQbCtrl",cache:!1,controllerAs:"vm"}}}).state("detail.fileList",{url:"/fileList",views:{"tab-detail-table":{templateUrl:"template/detail/fileList.html",controller:"FileListCtrl",cache:!1,controllerAs:"vm"}}}).state("detail.history",{url:"/history",views:{"tab-detail-table":{templateUrl:"template/detail/history.html",controller:"HistoryCtrl",cache:!1,controllerAs:"vm"}}}).state("detail.process",{url:"/process",views:{"tab-detail-table":{templateUrl:"template/detail/process.html",controller:"ProcessCtrl",cache:!1,controllerAs:"vm"}}}).state("detail.record",{url:"/record",views:{"tab-detail-table":{templateUrl:"template/detail/record.html",controller:"RecordCtrl",cache:!1,controllerAs:"vm"}}}).state("detail.do",{url:"/do",views:{"tab-detail-table":{templateUrl:"template/detail/do.html",controller:"DoCtrl",cache:!1,controllerAs:"vm"}}}),t.otherwise("/main")}])}(),function(){"use strict";angular.module("app").constant("serviceUrl","http://ntfront.cecep.cn:8090/nqsky-meap-front/service.jws?app.key=com.nqsky.rmad&appToken=40287f60565422fc01565a21b83000a9&format=json").constant("serviceUrlOa","http://ntfront.cecep.cn:8088/nqsky-meap-appnest-cwoa/service.jws")}(),angular.module("app").run(["$templateCache",function(e){e.put("template/detail.html","<ion-view view-title=\"公文详情\" hide-back-button=\"true\"><ion-nav-buttons side=\"left\"><button class=\"button button-icon icon ion-ios-arrow-back\" ng-click=\"$ionicGoBack()\">返回</button></ion-nav-buttons><div class=\"picturesholder\"><ion-scroll direction=\"x\" scrollbar-x=\"false\"><span ng-class=\"{true: 'detail-item-action', false: ''}[vm.scheduleState == 'table']\" ng-click=\"vm.tabSelectCss('table')\">主表单</span> <span ng-class=\"{true: 'detail-item-action', false: ''}[vm.scheduleState == 'fileList']\" ng-click=\"vm.tabSelectCss('fileList')\">正文/附件</span> <span ng-class=\"{true: 'detail-item-action', false: ''}[vm.scheduleState == 'history']\" ng-click=\"vm.tabSelectCss('history')\">历史意见</span> <span ng-class=\"{true: 'detail-item-action', false: ''}[vm.scheduleState == 'process']\" ng-click=\"vm.tabSelectCss('process')\">流程跟踪</span> <span ng-class=\"{true: 'detail-item-action', false: ''}[vm.scheduleState == 'record']\" ng-click=\"vm.tabSelectCss('record')\">待阅记录</span> <span ng-class=\"{true: 'detail-item-action', false: ''}[vm.scheduleState == 'do']\" ng-click=\"vm.tabSelectCss('do')\">文件办理</span></ion-scroll></div><ion-nav-view name=\"tab-detail-table\" class=\"detail-view\"></ion-nav-view></ion-view>"),e.put("template/list.html",'<ion-view view-title="list"><ion-header-bar align-title="center" class="bar-positive"><h1 class="title">标题</h1></ion-header-bar><ion-content><ul class="list"><li class="item" ng-repeat="item in vm.items"><a class="button icon icon-right ion-chevron-right" ui-sref="detail" ng-bind="item"></a></li></ul><div><img src="img/loading.gif"/></div></ion-content></ion-view>'),e.put("template/main.html",'<ion-view view-title="公文" hide-back-button="true"><ion-nav-buttons side="left"><button class="button button-icon icon ion-ios-arrow-back" ng-click="$ionicGoBack()">返回</button></ion-nav-buttons><ion-tabs class="tabs-icon-only tabs-top"><ion-tab title="待办" href="#/main/db" on-select="vm.menu = false"><ion-nav-view name="tab-db"></ion-nav-view></ion-tab><ion-tab title="已办" href="#/main/yb" on-select="vm.menu = false"><ion-nav-view name="tab-yb"></ion-nav-view></ion-tab><ion-tab title="待阅" href="#/main/dy" on-select="vm.menu = false"><ion-nav-view name="tab-dy"></ion-nav-view></ion-tab><ion-tab title="已阅" href="#/main/yy" on-select="vm.menu = false"><ion-nav-view name="tab-yy"></ion-nav-view></ion-tab><ion-tab title="公文" ng-click="vm.menuSelect()"><ion-nav-view name="tab-menu"></ion-nav-view></ion-tab></ion-tabs><div class="menu-div" ng-if="vm.menu"><div><h3 ng-repeat="item in vm.listDept" ng-click="vm.hrefkip(\'{{item.deptName}}\')" ng-bind="item.deptName"></h3></div></div></ion-view>'),e.put("template/list/db.html",'<ion-view style="background:#f8f9fa" view-title="公文"><ion-content overflow-scrolling="false"><ion-refresher pulling-text="下拉刷新" on-refresh="vm.pathReload()"></ion-refresher><div class="main-container"><div ng-if="vm.isActive"></div><div class="main-list"><div class="list-default" ng-if="vm.listItem.length == 0">暂无内容</div><div class="list-content" ng-repeat="item in vm.listItem" ng-if="vm.listItem.length > 0" ui-sref="detail({id:item.href,type:item.column7,backUrl:\'db\'})"><h3 ng-bind="item.column2"></h3><dl><dt><img src="../../img/user.png"><dd ng-bind="item.column4"></dd></dt><dt><img src="../../img/yj.png"><dd ng-bind="item.column5"></dd></dt><dd ng-bind="item.column6.substring(0,10)"></dd></dl></div><div class="dataAll" ng-show="!vm.disabled" ng-bind="vm.dataTips"></div></div><ion-infinite-scroll ng-if="vm.disabled" on-infinite="vm.nextPage()" distance="1%" immediate-check="false"></ion-infinite-scroll></div></ion-content><div class="loading-mask" ng-class="{true:\'loading-mask active\', false:\'loading-mask\'}[vm.isActive]"></div></ion-view>'),e.put("template/list/dy.html",'<ion-view style="background:#f8f9fa" view-title="公文"><ion-content overflow-scrolling="false"><ion-refresher pulling-text="下拉刷新" on-refresh="vm.pathReload()"></ion-refresher><div class="main-container"><div ng-if="vm.isActive"></div><div class="main-list"><div class="list-default" ng-if="vm.listItem.length == 0">暂无内容</div><div class="list-content" ng-repeat="item in vm.listItem" ng-if="vm.listItem.length > 0" ui-sref="detail({id:item.href,type:item.column7,backUrl:\'dy\'})"><h3 ng-bind="item.column2"></h3><dl><dt><img src="../../img/user.png"><dd ng-bind="item.column3"></dd></dt><dt><img src="../../img/yj.png"><dd ng-bind="item.column5"></dd></dt><dd ng-bind="item.column6.substring(0,10)"></dd></dl></div><div class="dataAll" ng-show="!vm.disabled" ng-bind="vm.dataTips"></div></div><ion-infinite-scroll ng-if="vm.disabled" on-infinite="vm.nextPage()" distance="1%" immediate-check="false"></ion-infinite-scroll></div></ion-content><div class="loading-mask" ng-class="{true:\'loading-mask active\', false:\'loading-mask\'}[vm.isActive]"></div></ion-view>'),e.put("template/list/jtqb.html",'<ion-view style="background:#f8f9fa" view-title="集团签报"><ion-content overflow-scrolling="false"><ion-refresher pulling-text="下拉刷新" on-refresh="vm.pathReload()"></ion-refresher><div class="main-container"><div ng-if="vm.isActive"></div><div class="main-list"><div class="list-default" ng-if="vm.listItem.length == 0">暂无内容</div><div class="list-content" ng-repeat="item in vm.listItem" ng-if="vm.listItem.length > 0" ui-sref="detail({id:item.href,type:item.column7})"><h3 ng-bind="item.column2"></h3><dl><dt><img src="../../img/user.png"><dd ng-bind="item.column4"></dd></dt><dt><img src="../../img/yj.png"><dd ng-bind="item.column3"></dd></dt><dd ng-bind="item.column1"></dd></dl></div><div class="dataAll" ng-show="!vm.disabled" ng-bind="vm.dataTips"></div></div><ion-infinite-scroll ng-if="vm.disabled" on-infinite="vm.nextPage()" distance="1%" immediate-check="false"></ion-infinite-scroll></div></ion-content><div class="loading-mask" ng-class="{true:\'loading-mask active\', false:\'loading-mask\'}[vm.isActive]"></div></ion-view>'),e.put("template/list/yb.html",'<ion-view style="background:#f8f9fa" view-title="公文"><ion-content overflow-scrolling="false"><ion-refresher pulling-text="下拉刷新" on-refresh="vm.pathReload()"></ion-refresher><div class="main-container"><div ng-if="vm.isActive"></div><div class="main-list"><div class="list-default" ng-if="vm.listItem.length == 0">暂无内容</div><div class="list-content" ng-repeat="item in vm.listItem" ng-if="vm.listItem.length > 0" ui-sref="detail({id:item.href,type:item.column7,backUrl:\'yb\'})"><h3 ng-bind="item.column1"></h3><dl><dt><img src="../../img/user.png"><dd ng-bind="item.column3"></dd></dt><dt><img src="../../img/yj.png"><dd ng-bind="item.column4"></dd></dt><dd ng-bind="item.column5"></dd></dl></div><div class="dataAll" ng-show="!vm.disabled" ng-bind="vm.dataTips"></div></div><ion-infinite-scroll ng-if="vm.disabled" on-infinite="vm.nextPage()" distance="1%" immediate-check="false"></ion-infinite-scroll></div></ion-content><div class="loading-mask" ng-class="{true:\'loading-mask active\', false:\'loading-mask\'}[vm.isActive]"></div></ion-view>'),e.put("template/list/yy.html",'<ion-view style="background:#f8f9fa" view-title="公文"><ion-content overflow-scrolling="false"><ion-refresher pulling-text="下拉刷新" on-refresh="vm.pathReload()"></ion-refresher><div class="main-container"><div ng-if="vm.isActive"></div><div class="main-list"><div class="list-default" ng-if="vm.listItem.length == 0">暂无内容</div><div class="list-content" ng-repeat="item in vm.listItem" ng-if="vm.listItem.length > 0" ui-sref="detail({id:item.href,type:item.column7,backUrl:\'yy\'})"><h3 ng-bind="item.column1"></h3><dl><dt><img src="../../img/user.png"><dd ng-bind="item.column3"></dd></dt><dt><img src="../../img/yj.png"><dd ng-bind="item.column4"></dd></dt><dd ng-bind="item.column5"></dd></dl></div><div class="dataAll" ng-show="!vm.disabled" ng-bind="vm.dataTips"></div></div><ion-infinite-scroll ng-if="vm.disabled" on-infinite="vm.nextPage()" distance="1%" immediate-check="false"></ion-infinite-scroll></div></ion-content><div class="loading-mask" ng-class="{true:\'loading-mask active\', false:\'loading-mask\'}[vm.isActive]"></div></ion-view>'),
e.put("template/detail/do.html",'<ion-view style="background:#f8f9fa" view-title=""><ion-content overflow-scrolling="false" class="detail-view-content"><div>666</div></ion-content></ion-view>'),e.put("template/detail/fileList.html",'<ion-view style="background:#f8f9fa" view-title=""><ion-nav-buttons side="left"><button class="button button-icon icon ion-ios-arrow-back detail-button-back" ng-click="$ionicGoBack()">返回</button></ion-nav-buttons><ion-content overflow-scrolling="false" class="detail-view-content"><ion-list><ion-item class="item-thumbnail-left file-item" ng-repeat=" item in vm.fileIetm"><img ng-src="img/icon_tab_file1.png"><h2>{{ item.fileName }}</h2><div ng-click="vm.downloadFile(\'{{ item.dowloadUrl }}\')">下载</div><p>{{ item.createTime }}</p></ion-item></ion-list></ion-content></ion-view>'),e.put("template/detail/history.html",'<ion-view style="background:#f8f9fa" view-title="详情"><ion-nav-buttons side="left"><button class="button button-icon icon ion-ios-arrow-back" ng-click="$ionicGoBack()">返回</button></ion-nav-buttons><ion-content overflow-scrolling="false" class="detail-view-content"><ion-list><ion-item class="item-histort" ng-repeat=" item in vm.historyList"><span>{{ item.optionNo}}</span><div><h2>{{ item.dealStatus }}</h2><h3>{{ item.dealOption }}</h3><bt>{{ item.dealUser }}</bt><bt>{{ item.dealTime}}</bt></div></ion-item></ion-list></ion-content></ion-view>'),e.put("template/detail/process.html",'<ion-view style="background:#f8f9fa" view-title=""><ion-content overflow-scrolling="false" class="detail-view-content"><div>444444</div></ion-content></ion-view>'),e.put("template/detail/qb.html",'<ion-view style="background:#f8f9fa" view-title="签报"><ion-nav-buttons side="left"><button class="button button-icon icon ion-ios-arrow-back" ng-click="$ionicGoBack()">返回</button></ion-nav-buttons><ion-content overflow-scrolling="false" class="detail-view-content">11111</ion-content></ion-view>'),e.put("template/detail/record.html",'<ion-view style="background:#f8f9fa" view-title=""><ion-content overflow-scrolling="false" class="detail-view-content"><div>555555</div></ion-content></ion-view>')}]);
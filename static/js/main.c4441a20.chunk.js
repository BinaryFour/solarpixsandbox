(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){e.exports=a(306)},306:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),s=a.n(o),c=a(15),i=a(13),l=a(133),u=a(134),p=a(83),d=a.n(p),m=a(7),b=a(8),h=a(10),f=a(9),g=a(11),v=a(312),y=a(311),j=a(26),E=a(3),O=a.n(E),S=a(6),w=a(34),k=a.n(w),x=a(141),C=a(24),I=a(138),N=a.n(I).a.create({baseURL:"https://binaryfour.github.io/"}),T=a(51),J=a.n(T),D=a(85),A=a.n(D),U=a(86),R=a.n(U),L=a(47),P=new L.b.Entity("pictureReqs"),_=new L.b.Entity("jobs",{pictureReqs:P}),M=new(a(139).a)("empowerDb");M.version(3).stores({job1:"photoId, uploadStatus",job2:"photoId, uploadStatus",job3:"photoId, uploadStatus",job4:"photoId, uploadStatus",job5:"photoId, uploadStatus",job6:"photoId, uploadStatus",job7:"photoId, uploadStatus",job8:"photoId, uploadStatus",job9:"photoId, uploadStatus",job0:"photoId, uploadStatus"});var q=M,F=function(e){var t={auth:{username:"upload",password:"nD2Qm9t4"},crossDomain:!0},a=new FormData;return a.append("upload",e),N.post("https://cors-anywhere.herokuapp.com/http://upload.empower-solar.com/index2.php",a,t)},B=function(e){return{type:"SET_JOBCOUNTER",payload:e}},Q=function(e){return{type:"SET_CURRENTJOB",payload:e}},G=function(e,t,a){return{type:"UPDATE_CATUPLOADSTATUS",payload:{status:t,categoryId:e,photoReq:a}}},V=a(310),Y=a(309),W=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).renderInput=function(e){var t=e.label,n=e.input,o=e.meta,s="field ".concat(o.error&&o.touched?"error":"");return r.a.createElement("div",{className:s},r.a.createElement("label",null,t),r.a.createElement("input",Object.assign({},n,{autoComplete:"off"})),a.renderError(o))},a.renderDropdown=function(e,t){var n=e.label,o=e.input,s=e.meta,c="field ".concat(s.error&&s.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,n),r.a.createElement("select",o,r.a.createElement("option",{value:"install"},"Install"),r.a.createElement("option",{value:"pcsv"},"PCSV"),r.a.createElement("option",{value:"salessv"},"Sales SV")),a.renderError(s))},a.onSubmit=function(e){a.props.onSubmit(e)},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"renderList",value:function(){var e=this;return this.props.fields.map(function(t){return r.a.createElement(V.a,{name:t.name,label:t.label,key:t.key,component:{input:e.renderInput,dropdown:e.renderDropdown}[t.component],validate:t.validate})})}},{key:"render",value:function(){return r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},this.renderList(),r.a.createElement("br",null),r.a.createElement("button",{className:"fluid ui button primary"},"Submit"))}}]),t}(r.a.Component),X=Object(Y.a)({form:"inputForm"})(W),H=function(e){return e?void 0:"You must enter a Project Name"},K=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={toCategories:!1,toDelete:!1,toSignin:!1,jobId:""},a.getOpenJobId=function(){var e=a.props.jobs;if(Object.keys(a.props.jobs).length>=10)return null;for(var t=0;t<10;t++)if(!k.a.findKey(e,{id:"job".concat(t)}))return t},a.onSubmit=function(){var e=Object(S.a)(O.a.mark(function e(t){var n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.projectName.toUpperCase(),!localStorage.getItem("state").includes('"sessions":{}')){e.next=8;break}return e.next=4,a.props.createJobList(n,t.profileName,0);case 4:return e.next=6,a.props.setCurrentJob("job0");case 6:e.next=17;break;case 8:if(r=a.getOpenJobId(),!Number.isInteger(r)){e.next=16;break}return e.next=12,a.props.addNewJob(n,t.profileName,r);case 12:return e.next=14,a.props.setCurrentJob("job".concat(r));case 14:e.next=17;break;case 16:console.log("There are already 10 jobs");case 17:a.setState({toCategories:!0,jobId:a.props.currentJob});case 18:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("state").includes('"userData":{}')&&(console.log("entered redirect"),this.setState({toSignin:!0}))}},{key:"render",value:function(){return this.state.toCategories?r.a.createElement(x.a,{to:"/".concat(this.state.jobId,"/categories")}):this.state.toDelete?r.a.createElement(x.a,{to:"/delete"}):this.state.toSignin?r.a.createElement(x.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"New Job"),r.a.createElement(X,{onSubmit:this.onSubmit,initialValues:{profileName:"install"},fields:[{name:"projectName",label:"Project Name (try to use one word, all use same)",component:"input",key:"field1",validate:H},{name:"profileName",label:"Profile",component:"dropdown",key:"field2"}]}))}}]),t}(r.a.Component),z=Object(c.b)(function(e){try{return{currentJob:e.jobMeta.currentJob,counter:e.jobMeta.jobCounter,jobs:k.a.pickBy(e.sessions.entities.jobs,void 0)}}catch(t){return console.log("jobs dont exist yet"),{currentJob:e.jobMeta.currentJob,counter:e.jobMeta.jobCounter}}},{addNewJob:function(e,t,n){return function(){var r=Object(S.a)(O.a.mark(function r(o){var s,c,i,l,u,p,d,m,b,h;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:s=a(69),c=[],i=[],l=0,r.t0=t,r.next="install"===r.t0?7:"pcsv"===r.t0?11:"salessv"===r.t0?15:19;break;case 7:return r.next=9,N.get(J.a);case 9:return u=r.sent,r.abrupt("break",23);case 11:return r.next=13,N.get(A.a);case 13:return u=r.sent,r.abrupt("break",23);case 15:return r.next=17,N.get(R.a);case 17:return u=r.sent,r.abrupt("break",23);case 19:return r.next=21,N.get(J.a);case 21:return u=r.sent,r.abrupt("break",23);case 23:u.data.split(/\n/).forEach(function(e){if(e){var t=e.split("|"),a={id:l,title:t[0],description:t[1],photoQty:0,catUploadStatus:"neutral"};c.push(a),i.push(a.title[0]),l+=1}}),p=Object(C.a)(new Set(i)),d=11,p.length>11&&(d=p.length),m=s({colormap:"hsv",nshades:d,format:"rgba",alpha:.2}),c.forEach(function(e){e.cellColor=m[parseInt(e.title[0])]}),b="job".concat(n),h="pictureReq".concat(n),o({type:"ADD_JOB",payload:{jobId:b,pictureReqId:h,jobData:{id:b,projectName:e,profileName:t,pictureReqs:h,color:""},pictureReqData:{id:h,jobId:b,categories:c}}});case 35:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},createJobList:function(e,t,n){return function(){var r=Object(S.a)(O.a.mark(function r(o){var s,c,i,l,u,p,d,m,b,h,f,g;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:s=a(69),c=[],i=[],l=0,r.t0=t,r.next="install"===r.t0?7:"pcsv"===r.t0?11:"salessv"===r.t0?15:19;break;case 7:return r.next=9,N.get(J.a);case 9:return u=r.sent,r.abrupt("break",23);case 11:return r.next=13,N.get(A.a);case 13:return u=r.sent,r.abrupt("break",23);case 15:return r.next=17,N.get(R.a);case 17:return u=r.sent,r.abrupt("break",23);case 19:return r.next=21,N.get(J.a);case 21:return u=r.sent,r.abrupt("break",23);case 23:u.data.split(/\n/).forEach(function(e){if(e){var t=e.split("|"),a={id:l,title:t[0],description:t[1],photoQty:0,catUploadStatus:"neutral"};c.push(a),i.push(a.title[0]),l+=1}}),p=Object(C.a)(new Set(i)),d=11,p.length>11&&(d=p.length),m=s({colormap:"hsv",nshades:d,format:"rgba",alpha:.2}),c.forEach(function(e){e.cellColor=m[parseInt(e.title[0])]}),b="job".concat(n),h="pictureReq".concat(n),f={id:b,projectName:e,profileName:t,pictureReqs:{id:h,jobId:b,categories:c},color:""},g=Object(L.a)(f,_),o({type:"CREATE_JOBLIST",payload:g});case 35:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},setCurrentJob:Q,setJobCounter:B})(K),$=a(307),Z=a(308),ee=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"renderList",value:function(e){var t="".concat(100/this.props.links.length,"%");return this.props.links.map(function(e){return r.a.createElement($.a,{to:e.path,className:"item",key:e.id,style:{width:t}},e.label)})}},{key:"render",value:function(){var e="ui bottom fixed ".concat(this.props.links.length," item huge menu");return r.a.createElement("div",{className:e},this.renderList())}}]),t}(r.a.Component),te=[{path:"/joblist",id:"jobList",label:"Back"},{path:"/upload",id:"uploadAll",label:"Upload All"}],ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={toSignin:!1},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("state").includes('"userData":{}')&&this.setState({toSignin:!0}),this.props.pageLocation&&window.scrollTo(0,this.props.pageLocation)}},{key:"componentWillUnmount",value:function(){this.props.saveLocation(window.pageYOffset)}},{key:"renderList",value:function(){return this.props.categories.map(function(e){return r.a.createElement($.a,{to:"categories/".concat(e.id),className:"item",key:e.id,style:{backgroundColor:"rgba(".concat(e.cellColor[0],",").concat(e.cellColor[1],",").concat(e.cellColor[2],",").concat(e.cellColor[3],")")}},r.a.createElement("div",{className:"right floated middle aligned content"},r.a.createElement("div",{className:"description"},"Pics",r.a.createElement("div",{style:{textAlign:"center"}},e.photoQty))),{success:r.a.createElement("i",{className:"large middle aligned inverted green check icon"}),fail:r.a.createElement("i",{className:"large middle aligned inverted red x icon"}),neutral:r.a.createElement("i",{className:"large middle aligned inverted gray minus icon"}),waiting:r.a.createElement("i",{className:"large middle aligned cog loading icon"})}[e.catUploadStatus],r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"description"},e.description)))})}},{key:"render",value:function(){return this.state.toSignin?r.a.createElement(Z.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h2",null,"Category List: ",this.props.job.projectName),r.a.createElement("div",{className:"ui celled list"},this.renderList()),r.a.createElement("div",{className:"padding",style:{display:"block",height:"48px"}}),r.a.createElement(ee,{links:te}))}}]),t}(r.a.Component),ne=Object(c.b)(function(e,t){var a=e.jobMeta.currentJob,n=e.sessions.entities.jobs[a].pictureReqs;return{userName:e.userData,job:e.sessions.entities.jobs[a],categories:Object.values(e.sessions.entities.pictureReqs[n].categories),pageLocation:e.pageLocation.yValue}},{readTextFile:function(e){return function(){var t=Object(S.a)(O.a.mark(function t(n){var r,o,s,c,i,l,u;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a(69),o=[],s=[],c=0,t.next=6,N.get(e);case 6:t.sent.data.split(/\n/).forEach(function(e){if(e){var t=e.split("|"),a={id:c,title:t[0],description:t[1],photoQty:0,catUploadStatus:"neutral"};o.push(a),s.push(a.title[0]),c+=1}}),i=Object(C.a)(new Set(s)),l=11,i.length>11&&(l=i.length),u=r({colormap:"hsv",nshades:l,format:"rgba",alpha:.2}),o.forEach(function(e){e.cellColor=u[parseInt(e.title[0])]}),n({type:"READ_TXT_FILE",payload:o});case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},saveLocation:function(e){return{type:"SAVE_PAGELOCATION",payload:e}}})(ae),re=a(89),oe={display:"none"},se=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleImage=function(e){a.props.onSubmit(e.target.files[0])},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui fluid labeled big input"},r.a.createElement("input",{className:"inputfile",id:"file",onChange:this.handleImage,type:"file",accept:"image/*;capture=camera",style:oe}),r.a.createElement("label",{className:"ui fluid button large primary",htmlFor:"file"},"Use Camera App"))}}]),t}(r.a.Component),ce=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return s.a.createPortal(r.a.createElement("div",{className:"ui dimmer modals visible active",style:{display:this.props.show}},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},this.props.title),r.a.createElement("div",{className:"content"},this.props.content),r.a.createElement("img",{className:"ui medium rounded centered image",alt:"",src:this.props.image,style:{marginBottom:"10px"}}),r.a.createElement("div",{className:"actions"},this.props.actions))),document.querySelector("#modal"))}}]),t}(r.a.Component),ie=a(66),le=a.n(ie),ue=(a(305),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r))))._isMounted=!1,a.testVar=!1,a.state={categoryId:a.props.match.params.id,image:{},showImage:"",imageTitle:"",imageId:"",imageQty:"",thumbnails:[],showModal:"none",showPermissionsMsg:!1,os:re.osVersion},a.componentDidMount=Object(S.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a._isMounted=!0,q.isOpen()){e.next=4;break}return e.next=4,q.open();case 4:a.getThumbnails();case 5:case"end":return e.stop()}},e)})),a.srcToFile=function(){var e=Object(S.a)(O.a.mark(function e(t){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("entered srcToFile"),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.abrupt("return",a.arrayBuffer());case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),a.countLocalPhotos=Object(S.a)(O.a.mark(function e(){var t,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===a.props.category.photoQty){e.next=14;break}return t="neutral",e.prev=3,e.next=6,q.table(a.props.currentJob).where("uploadStatus").equals("notUploaded").and(function(e){return e.photoId.split("_")[0]==="".concat(a.state.categoryId)}).count();case 6:n=e.sent,t=0===n?"success":"fail",a.props.updateCatUploadStatus(a.state.categoryId,t,a.props.job.pictureReqs),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("Query failed: ",e.t0);case 14:case"end":return e.stop()}},e,null,[[3,11]])})),a.onClickThumbnail=function(){var e=Object(S.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=URL.createObjectURL(t.photo),e.next=3,a.setState({showModal:"",image:t.photo,showImage:n,imageId:t.photoId});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.uploadFile=Object(S.a)(O.a.mark(function e(){var t,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.imageId,n=a.state.image,e.next=4,a.setState({showModal:"none",image:{},showImage:"",imageId:""});case 4:return a.toastSettings("Uploading File...","info"),e.prev=5,e.next=8,F(n);case 8:a.toastSettings("Uploaded Image!","success"),a.updateStatusTrue(t),a._isMounted&&a.getThumbnails(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),a.toastSettings("FAIL: Image upload fail.  You can click on the thumbnail to re-attempt upload","error");case 17:case"end":return e.stop()}},e,null,[[5,13]])})),a.verifyImage=function(){var e=Object(S.a)(O.a.mark(function e(t){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("entered verifyImage"),a=URL.createObjectURL(t),e.prev=2,e.next=5,fetch(a);case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(2),console.log("GET Failed, ".concat(a),e.t0),console.log("exit"),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),a.onAddPhoto=function(){var e=Object(S.a)(O.a.mark(function e(t){var n,r,o,s,c,i,l,u,p;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,r="N","string"!=typeof t){e.next=7;break}return e.next=5,a.srcToFile(t);case 5:n=e.sent,r="E";case 7:return o=a.props.job,s=a.props.userName,c=Math.floor(Date.now()/1e3),i=a.state.imageQty+1,l="".concat(o.projectName,"-").concat(o.profileName,"_").concat(a.props.category.title,"-").concat(i,"_").concat(s,"{av").concat("2.4.16","-").concat(re.osName,"_").concat(a.state.os,"-ca").concat(r,"}"),u="".concat(a.state.categoryId,"_").concat(c),p=new File([n],l+".jpeg",{type:"image/jpeg"}),console.log("This is imageTitle: ",l,"This is renamedFile: ",p),e.next=17,a.setState({imageTitle:l,imageId:u});case 17:return e.prev=17,e.next=20,a.saveToDb(p);case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(17),a.toastSettings("FAIL: Image NOT Saved.  Please re-take the photo. ".concat(e.t0),"error");case 25:if(a.getThumbnails(),a.toastSettings("Uploading File...","info"),!a.verifyImage(p)){e.next=42;break}return e.prev=28,e.next=31,F(p);case 31:a.toastSettings("SUCCESS: Uploaded Image!","success"),a.updateStatusTrue(u),a._isMounted&&a.getThumbnails(),e.next=40;break;case 36:e.prev=36,e.t1=e.catch(28),console.log(e.t1),a.toastSettings("FAIL: Image NOT uploaded.  Please check your internet connection and try again. ".concat(e.t1),"error");case 40:e.next=43;break;case 42:a.toastSettings("FAIL: Image corrupted, Please re-take the photo","error");case 43:case"end":return e.stop()}},e,null,[[17,22],[28,36]])}));return function(t){return e.apply(this,arguments)}}(),a.saveToDb=function(e){return q.table(a.props.currentJob).add({photoId:"".concat(a.state.imageId),fileName:a.state.imageTitle,uploadStatus:"notUploaded",photo:e,job:a.props.currentJob,pictureReq:a.props.job.pictureReqs})},a.updateStatusTrue=function(e){return q.table(a.props.currentJob).update(e,{uploadStatus:"uploaded"})},a.getThumbnails=Object(S.a)(O.a.mark(function e(){var t,n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Enter getThumbnails"),t=[],n=0,r=a.state.categoryId,e.prev=4,e.next=7,q.table(a.props.currentJob).where("photoId").startsWith("".concat(r,"_")).toArray();case 7:t=e.sent,n=t.length,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log("No Photos",e.t0);case 14:a.props.updatePhotoQty(r,n,a.props.job.pictureReqs),a.setState({imageQty:n,thumbnails:t});case 16:case"end":return e.stop()}},e,null,[[4,11]])})),a.toastSettings=function(e,t){a.props.toastManager.add(e,{appearance:t,autoDismiss:!0})},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.countLocalPhotos()}},{key:"onCameraError",value:function(e){console.log("This is the camera Error: ",e),this.setState({showPermissionsMsg:!0})}},{key:"renderActions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.uploadFile()},className:"ui button primary"},"Upload"),r.a.createElement("button",{onClick:function(){return e.setState({showModal:"none",image:{},showImage:"",imageId:""})},className:"ui button"},"Cancel"))}},{key:"renderList",value:function(){var e=this;return this.state.thumbnails.map(function(t){if(t){var a=URL.createObjectURL(t.photo);return r.a.createElement("div",{onClick:function(a){return e.onClickThumbnail(t)},className:"item",key:t.photoId},r.a.createElement("img",{className:"ui small rounded centered image",src:a,alt:"",style:{marginBottom:"5px"}}),r.a.createElement("div",{className:"description"},"uploaded"===t.uploadStatus?"Uploaded!":"Not Uploaded"))}return r.a.createElement("div",null)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ce,{show:this.state.showModal,title:this.state.image.name,image:this.state.showImage,content:"Content",actions:this.renderActions(),onDismiss:function(){return e.setState({showModal:"none"})}}),r.a.createElement("h2",null,this.props.category.title),r.a.createElement("h3",null,this.props.category.description),r.a.createElement("h4",{style:this.state.showPermissionsMsg?{}:{display:"none"}},"You must allow access to the Camera.  If you denied the permission, please go to your chrome settings and enable the Camera permission for this site"),r.a.createElement("div",null,r.a.createElement(se,{onSubmit:this.onAddPhoto}),r.a.createElement(le.a,{onTakePhoto:function(t){e.onAddPhoto(t)},idealFacingMode:ie.FACING_MODES.ENVIRONMENT,imageType:ie.IMAGE_TYPES.JPG,isImageMirror:!1,isMaxResolution:!0,onCameraError:function(t){e.onCameraError(t)}}),r.a.createElement("h3",null,"Photos: ",this.state.imageQty),r.a.createElement("div",{className:"ui huge horizontal selection celled list",style:{marginBottom:"60px"}},this.renderList())),r.a.createElement(ee,{links:[{path:"/".concat(this.props.currentJob,"/categories"),id:"categoryList",label:"Back"}]}))}}]),t}(r.a.Component)),pe=Object(j.withToastManager)(ue),de=Object(c.b)(function(e,t){var a=e.jobMeta.currentJob,n=e.sessions.entities.jobs[a].pictureReqs;return{category:e.sessions.entities.pictureReqs[n].categories[t.match.params.id],job:e.sessions.entities.jobs[a],userName:e.userData,currentJob:a}},{getCategory:function(e){return function(t,a){var n=a().currentJob,r=a().sessions.entities.jobs[n].pictureReqs;t({type:"GET_CATEGORY",payload:a().sessions.entities.pictureReqs[r].categories[e]})}},addPhoto:function(e,t,a){return{type:"ADD_PHOTO",payload:{id:e,photoQty:t,photoQueue:a}}},updatePhotoQty:function(e,t,a){return{type:"UPDATE_PHOTOQTY",payload:{categoryId:e,photoQty:t,photoReq:a}}},updateCatUploadStatus:G})(pe),me=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={cancel:!1,toPath:!1},a.resetData=Object(S.a)(O.a.mark(function e(){var t,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.currentJobId,n=a.props.currentPictureReq,e.prev=2,q.table(t).clear(),a.props.setCurrentJob(""),e.next=7,a.props.deleteJob(t,n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Table did not clear",e.t0);case 12:a.setState({toPath:!0});case 13:case"end":return e.stop()}},e,null,[[2,9]])})),a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"renderActions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:Object(S.a)(O.a.mark(function t(){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.resetData();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),className:"ui button negative"},"Delete Job"),r.a.createElement($.a,{to:"/joblist",className:"ui button"},"Cancel"))}},{key:"render",value:function(){var e=this;return this.state.cancel?r.a.createElement(Z.a,{to:"/joblist"}):this.state.toPath?r.a.createElement(Z.a,{to:"/joblist"}):r.a.createElement("div",null,r.a.createElement(ce,{title:"Delete Job: ".concat(this.props.currentJob.projectName),content:"Please ensure all photos are uploaded for this job.  You will lose all the photos for this job.",path:"/joblist",actions:this.renderActions(),onDismiss:function(){return e.setState({toPath:!0})}}))}}]),t}(r.a.Component),be=Object(c.b)(function(e){try{if(e.jobMeta.currentJob){var t=e.jobMeta.currentJob;return{currentJobId:t,currentJobCounter:e.jobMeta.jobCounter,currentJob:e.sessions.entities.jobs[t],currentPictureReq:e.sessions.entities.jobs[t].pictureReqs}}return{currentJobId:"",currentJobCounter:"",currentJob:"",currentPictureReq:""}}catch(a){console.log(a)}},{deleteJob:function(e,t){return{type:"DELETE_JOB",payload:{jobId:e,pictureReq:t}}},setJobCounter:B,setCurrentJob:Q})(me),he=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={cancel:!1},a.getLocalPhotos=Object(S.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.table(a.props.currentJob).where("uploadStatus").equals("notUploaded").toArray();case 2:0!==(t=e.sent).length?a.uploadFiles(t):(a.toastSettings("No photos to Upload!","warning"),a.setState({cancel:!0}));case 4:case"end":return e.stop()}},e)})),a.uploadFiles=function(){var e=Object(S.a)(O.a.mark(function e(t){var n,r,o,s,c,i,l,u;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({cancel:!0}),n=[],r=[],a.toastSettings("Uploading Files...","info"),o=0;case 5:if(!(o<t.length)){e.next=24;break}return e.prev=6,s=t[o].photoId.split("_"),c=s[0],a.props.updateCatUploadStatus(c,"waiting",a.props.pictureReq),e.next=12,F(t[o].photo);case 12:a.updateStatusTrue(t[o].photoId),n.push(c),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(6),console.log(e.t0),i=t[o].photoId.split("_"),r.push(i[0]);case 21:o++,e.next=5;break;case 24:0!==n.length&&(a.toastSettings("Uploaded images!","success"),l=Object(C.a)(new Set(n)),a.checkCategoryUploadStatus(l)),0!==r.length&&(a.toastSettings("Some images failed","error"),u=Object(C.a)(new Set(r)),a.checkCategoryUploadStatus(u));case 26:case"end":return e.stop()}},e,null,[[6,16]])}));return function(t){return e.apply(this,arguments)}}(),a.checkCategoryUploadStatus=function(){var e=Object(S.a)(O.a.mark(function e(t){var n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=O.a.mark(function e(n){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.table(a.props.currentJob).where("uploadStatus").equals("notUploaded").and(function(e){return e.photoId.split("_")[0]==="".concat(t[n])}).count();case 3:0===e.sent?a.props.updateCatUploadStatus(t[n],"success",a.props.pictureReq):a.props.updateCatUploadStatus(t[n],"fail",a.props.pictureReq),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}),r=0;case 2:if(!(r<t.length)){e.next=7;break}return e.delegateYield(n(r),"t0",4);case 4:r++,e.next=2;break;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.updateStatusTrue=function(){var e=Object(S.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.table(a.props.currentJob).update(t,{uploadStatus:"uploaded"});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.toastSettings=function(e,t){a.props.toastManager.add(e,{appearance:t,autoDismiss:!0})},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"renderActions",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.getLocalPhotos()},className:"ui button positive"},"Upload"),r.a.createElement($.a,{to:"".concat(this.props.currentJob,"/categories"),className:"ui button"},"Cancel"))}},{key:"render",value:function(){var e=this;return this.state.cancel?r.a.createElement(Z.a,{to:"".concat(this.props.currentJob,"/categories")}):r.a.createElement("div",null,r.a.createElement(ce,{title:"Upload local photos",content:"Upload all photos that have not been uploaded yet?",path:"".concat(this.props.currentJob,"/categories"),actions:this.renderActions(),onDismiss:function(){return e.setState({toPath:!0})}}))}}]),t}(r.a.Component),fe=Object(j.withToastManager)(he),ge=Object(c.b)(function(e){var t=e.jobMeta.currentJob;return{currentJob:t,pictureReq:e.sessions.entities.jobs[t].pictureReqs}},{updateCatUploadStatus:G})(fe),ve=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={toCategories:!1,toDelete:!1,toSignin:!1,jobId:""},a.checkForPhotoCompletion=function(){var e=Object(S.a)(O.a.mark(function e(t){var n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.table(t).where("uploadStatus").equals("notUploaded").count();case 3:return n=e.sent,e.next=6,q.table(t).count();case 6:r=e.sent,0===n&0!==r?(console.log("Green",t),a.props.updateJobColor(t,"rgba(75, 225, 75, 0.2)")):0!==n&&a.props.updateJobColor(t,"rgba(225, 75, 75, 0.2)"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),a.onJobClick=function(){var e=Object(S.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.setCurrentJob(t);case 2:return e.next=4,a.setState({toCategories:!0,jobId:t});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onDeleteClick=function(){var e=Object(S.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.setCurrentJob(t);case 2:a.setState({toDelete:!0,jobId:t});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){try{localStorage.getItem("state").includes('"userData":{}')&&(console.log("entered redirect"),this.setState({toSignin:!0}))}catch(t){console.log("get State error: ",t),this.setState({toSignin:!0})}q.isOpen()||q.open();try{for(var e=0;e<this.props.sessionData.length;e++)this.checkForPhotoCompletion(this.props.sessionData[e].id)}catch(t){console.log(t)}}},{key:"renderList",value:function(){var e=this;if(this.props.sessionData)return this.props.sessionData.map(function(t){return r.a.createElement("div",{className:"item",key:t.id,style:{backgroundColor:"".concat(t.color)}},r.a.createElement("div",{className:"right floated middle aligned content"},r.a.createElement("button",{className:"ui negative button",onClick:function(){e.onDeleteClick(t.id)}},"Delete")),r.a.createElement("div",{onClick:function(){e.onJobClick(t.id)}},t.projectName))})}},{key:"render",value:function(){if(this.state.toCategories)return r.a.createElement(x.a,{to:"/".concat(this.state.jobId,"/categories")});if(this.state.toDelete)return r.a.createElement(x.a,{to:"/delete"});if(this.state.toSignin)return r.a.createElement(x.a,{to:"/"});try{return r.a.createElement("div",null,r.a.createElement("h1",null,"Job List"),r.a.createElement("div",{className:"ui massive celled list"},r.a.createElement("div",{className:"item",key:"warning",style:{visibility:10===this.props.sessionData.length?"visible":"hidden"}},"Limit 10 jobs.  Delete jobs to make space."),r.a.createElement($.a,{to:"/newjob",className:"item",key:"newJob",style:{visibility:10===this.props.sessionData.length?"hidden":"visible"}},r.a.createElement("i",{className:"large plus square outline icon"}),r.a.createElement("div",{className:"content"},"New Job")),this.renderList()))}catch(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Job List"),r.a.createElement("div",{className:"ui massive celled list"},r.a.createElement($.a,{to:"/newjob",className:"item",key:"newJob"},r.a.createElement("i",{className:"large plus square outline icon"}),r.a.createElement("div",{className:"content"},"New Job")),this.renderList()))}}}]),t}(r.a.Component),ye=Object(j.withToastManager)(ve),je=Object(c.b)(function(e){try{return{userName:e.userData,sessionData:k.a.compact(Object.values(e.sessions.entities.jobs))}}catch(t){return{userName:e.userData}}},{setCurrentJob:Q,updateJobColor:function(e,t){return{type:"UPDATE_JOBCOLOR",payload:{color:t,jobId:e}}}})(ye),Ee=function(e){return e&&e.length>3?"You must enter a User Name (Max 3 characters)":void 0},Oe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={toJobList:!1,toSignIn:!1},a.onSubmit=function(e){e.userName=e.userName.toUpperCase(),a.props.setUsername(e.userName),a.setState({toJobList:!0})},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){try{!localStorage.getItem("state").includes('"sessions":{}')&!localStorage.getItem("state").includes('"userData":{}')&&(console.log("going to joblist"),this.setState({toJobList:!0}))}catch(e){console.log("localStorage check failed: ",e)}}},{key:"render",value:function(){return this.state.toJobList?r.a.createElement(x.a,{to:"/joblist"}):r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"SolarPix 2.0"),r.a.createElement("h4",{style:{textAlign:"center"}},"Please Sign In with your Initials"),r.a.createElement(X,{initialValues:{key:"signIn"},onSubmit:this.onSubmit,fields:[{name:"userName",label:"User Initials",component:"input",key:"field1",validate:Ee}]}))}}]),t}(r.a.Component),Se=Object(c.b)(null,{setUsername:function(e){return{type:"SET_USERNAME",payload:e}}})(Oe),we=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){try{return r.a.createElement(j.ToastProvider,null,r.a.createElement("p",null,"v","2.4.16"),r.a.createElement("div",{className:"ui container"},r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(y.a,{path:"/newjob",exact:!0,component:z}),r.a.createElement(y.a,{path:"/:job/categories",exact:!0,component:ne}),r.a.createElement(y.a,{path:"/:job/categories/:id",exact:!0,component:de}),r.a.createElement(y.a,{path:"/delete",exact:!0,component:be}),r.a.createElement(y.a,{path:"/upload",exact:!0,component:ge}),r.a.createElement(y.a,{path:"/joblist",exact:!0,component:je}),r.a.createElement(y.a,{path:"/",exact:!0,component:Se})))))}catch(e){return console.log("Router broken: ",e),r.a.createElement("div",null,"If you're seeing this message, screenshot this page and send this error message to IT:",r.a.createElement("div",null,e))}}}]),t}(r.a.Component),ke=a(313),xe=a(14),Ce=a(50),Ie={currentJob:"",jobCounter:0},Ne=Object(i.combineReducers)({uploadStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPLOAD_ALLIMAGES_STATUS":return Object(xe.a)({},e),t.payload;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERNAME":return Object(xe.a)({},e),t.payload;default:return e}},jobMeta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENTJOB":return Object(xe.a)({},e,{currentJob:t.payload});case"SET_JOBCOUNTER":var a=e.jobCounter+t.payload;return Object(xe.a)({},e,{jobCounter:a});default:return e}},categoryData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"READ_TXT_FILE":return Object(xe.a)({},e,k.a.mapKeys(t.payload,"id"));case"ENCODE_IMAGE":case"GET_CATEGORY":return Object(xe.a)({},e,Object(Ce.a)({},t.payload.id,t.payload));case"GET_LOCALSTORAGE":return Object(xe.a)({},e,{categories:t.payload});default:return e}},sessions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_JOBLIST":var a=Object(xe.a)({},e);return a=t.payload;case"UPDATE_PHOTOQTY":return(a=Object(xe.a)({},e)).entities.pictureReqs[t.payload.photoReq].categories[t.payload.categoryId].photoQty=t.payload.photoQty,a;case"DELETE_JOB":return(a=Object(xe.a)({},e)).entities.jobs[t.payload.jobId]=void 0,a.entities.pictureReqs[t.payload.pictureReq]=void 0,a;case"ADD_JOB":return(a=Object(xe.a)({},e)).entities.jobs[t.payload.jobId]=t.payload.jobData,a.entities.pictureReqs[t.payload.pictureReqId]=t.payload.pictureReqData,a;case"UPDATE_CATUPLOADSTATUS":return(a=Object(xe.a)({},e)).entities.pictureReqs[t.payload.photoReq].categories[t.payload.categoryId].catUploadStatus=t.payload.status,a;case"UPDATE_JOBCOLOR":return(a=Object(xe.a)({},e)).entities.jobs[t.payload.jobId].color=t.payload.color,a;default:return e}},form:ke.a,pageLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_PAGELOCATION":return Object(xe.a)({},e,{yValue:t.payload});default:return e}}}),Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Je(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var De=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.compose,Ue=Object(i.createStore)(Ne,De,Ae(Object(i.applyMiddleware)(l.a),Object(u.offline)(d.a)));Ue.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({userData:Ue.getState().userData,sessions:Ue.getState().sessions,jobMeta:Ue.getState().jobMeta,db:Ue.getState().db})}),s.a.render(r.a.createElement(c.a,{store:Ue},r.a.createElement(we,null)),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("/solarpixsandbox",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/solarpixsandbox","/service-worker.js");Te?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Je(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Je(t,e)})}}()},51:function(e,t,a){e.exports=a.p+"static/media/categoryListFile_install.c5af7465.bin"},85:function(e,t,a){e.exports=a.p+"static/media/categoryListFile_pcsv.1ad94596.bin"},86:function(e,t,a){e.exports=a.p+"static/media/categoryListFile_salessv.f15da299.bin"}},[[143,1,2]]]);
//# sourceMappingURL=main.c4441a20.chunk.js.map
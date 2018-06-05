(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[1],{"./column/component.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=p(t("./node_modules/babel-runtime/helpers/extends.js")),c=p(t("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=p(t("./node_modules/babel-runtime/helpers/classCallCheck.js")),s=p(t("./node_modules/babel-runtime/helpers/createClass.js")),i=p(t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),a=p(t("./node_modules/babel-runtime/helpers/inherits.js")),d=p(t("./node_modules/react/index.js")),r=p(t("./node_modules/vc-cake/index.js"));function p(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function n(){return(0,l.default)(this,n),(0,i.default)(this,(n.__proto__||(0,c.default)(n)).apply(this,arguments))}return(0,a.default)(n,e),(0,s.default)(n,[{key:"getContent",value:function(e,n){var t=r.default.getService("document").get(this.props.atts.parent),c=this.props.children;return"top"===t.contentPosition?d.default.createElement("div",(0,o.default)({className:"vce-col-inner"},n,e),c):d.default.createElement("div",(0,o.default)({className:"vce-col-inner"},n,e),d.default.createElement("div",{className:"vce-col-content"},c))}},{key:"render",value:function(){var e=this.props,n=e.id,c=e.atts,l=e.editor,s=e.isBackend,i=c.size,a=c.customClass,p=c.metaCustomId,v=c.designOptionsAdvanced,m=c.lastInRow,u=c.firstInRow,x=c.hidden,b=c.disableStacking,f=t("./node_modules/classnames/index.js"),w={},g=["vce-col"];g.push(this.getBackgroundClass(v)),x&&s&&g.push("vce-wpbackend-element-hidden"),b&&r.default.env("DISABLE_COLUMN_STACKING")?(g.push("vce-col--xs-"+(i?i.replace("/","-").replace("%","p").replace(",","-").replace(".","-"):"auto")),m&&g.push("vce-col--all-last"),u&&g.push("vce-col--all-first")):(g.push("vce-col--md-"+(i?i.replace("/","-").replace("%","p").replace(",","-").replace(".","-"):"auto")),g.push("vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first"),m&&g.push("vce-col--md-last vce-col--lg-last vce-col--xl-last"),u&&g.push("vce-col--md-first vce-col--lg-first vce-col--xl-first")),"string"==typeof a&&a.length&&g.push(a);var h=f(g);p&&(w.id=p),w["data-vce-element-content"]=!0;var k=this.applyDO("background border"),y=this.applyDO("padding margin animation");return d.default.createElement("div",(0,o.default)({className:h},{},{id:"el-"+n},l,k),this.getBackgroundTypeContent(),this.getContainerDivider(),this.getContent(y,w))}}]),n}(r.default.getService("api").elementComponent);n.default=v},"./column/index.js":function(e,n,t){"use strict";var o=l(t("./node_modules/vc-cake/index.js")),c=l(t("./column/component.js"));function l(e){return e&&e.__esModule?e:{default:e}}(0,o.default.getService("cook").add)(t("./column/settings.json"),function(e){e.add(c.default)},{css:t("./node_modules/raw-loader/index.js!./column/styles.css"),editorCss:t("./node_modules/raw-loader/index.js!./column/editor.css")},"")},"./column/settings.json":function(e){e.exports={size:{type:"string",access:"public",value:"100%"},disableStacking:{type:"string",access:"public",value:!1},lastInRow:{type:"string",access:"public",value:!1},firstInRow:{type:"string",access:"public",value:!1},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},designOptionsAdvanced:{type:"designOptionsAdvanced",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["metaCustomId","customClass"],options:{label:"General"}},dividers:{type:"divider",access:"public",value:{},options:{label:"Dividers"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptionsAdvanced","dividers"]},containerFor:{type:"group",access:"protected",value:["General"]},relatedTo:{type:"group",access:"protected",value:["Column"]},parentWrapper:{type:"string",access:"protected",value:"row"},backendView:{type:"string",access:"protected",value:"frontend"},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"column"},hidden:{type:"string",access:"public",value:!1}}},"./node_modules/raw-loader/index.js!./column/editor.css":function(e,n){e.exports=".vce-col {\n  min-height: 1em;\n}"},"./node_modules/raw-loader/index.js!./column/styles.css":function(e,n){e.exports="/* ----------------------------------------------\n * Column\n * ---------------------------------------------- */\n.vce-col {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 1em;\n  position: relative;\n}\n.vce-col--auto {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.vce-col-content,\n.vce-col-inner {\n  position: relative;\n  overflow-wrap: break-word;\n}\n.vce-col-inner {\n  width: 100%;\n}\n.vce-col-direction--rtl {\n  direction: rtl;\n}\n.vce-row-content--top > .vce-row-content > .vce-element--has-background > .vce-col-inner,\n.vce-row-content--middle > .vce-row-content > .vce-element--has-background > .vce-col-inner > .vce-col-content,\n.vce-row-content--bottom > .vce-row-content > .vce-element--has-background > .vce-col-inner > .vce-col-content {\n  padding-top: 30px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n/* styles for mobile-portrait */\n@media (min-width: 0) {\n  .vce-col--xs-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--xs-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 544px) {\n  .vce-col--sm-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 768px) {\n  .vce-col--md-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 992px) {\n  .vce-col--lg-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 1200px) {\n  .vce-col--xl-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n@media (min-width: 0) and (max-width: 543px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--xs--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--xs--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--xs--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 544px) and (max-width: 767px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--sm--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--sm--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--sm--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--md--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--md--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--md--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--lg--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--lg--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--lg--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 1200px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--xl--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--xl--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--xl--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n"}},[["./column/index.js"]]]);
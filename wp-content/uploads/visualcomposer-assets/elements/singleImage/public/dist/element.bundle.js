(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[1],{"./node_modules/raw-loader/index.js!./singleImage/editor.css":function(e,t){e.exports=".vce-single-image-container {\n  min-height: 1em;\n}\n\n.vce-single-image canvas {\n  max-width: 100%;\n  vertical-align: top;\n}\n\n.vce-single-image.vcvhelper {\n  display: inline-block;\n  vertical-align: top;\n}"},"./node_modules/raw-loader/index.js!./singleImage/styles.css":function(e,t){e.exports="a.vce-single-image-inner {\n  color: transparent;\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\na.vce-single-image-inner:hover,\na.vce-single-image-inner:focus {\n  text-decoration: none;\n  box-shadow: none;\n  border-bottom: 0;\n}\n\n.vce-single-image-inner {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1;\n  max-width: 100%;\n}\n\n.vce-single-image-wrapper {\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  vertical-align: top;\n}\n\n.vce-single-image-wrapper img {\n  vertical-align: top;\n  max-width: 100%;\n}\n\n.vce-single-image--border-rounded {\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.vce-single-image--border-round {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.vce-single-image--size-custom {\n  background-size: cover;\n  background-position: center;\n  max-width: 100%;\n}\n\n.vce-single-image--size-custom::after {\n  content:'';\n  display: block;\n  padding-bottom: 66.66%;\n}\n\n.vce-single-image--border-round.vce-single-image--size-custom::after {\n  padding-bottom: 100%;\n}\n\n.vce-single-image--size-custom .vce-single-image {\n  opacity: 0;\n  position: absolute;\n  max-width: 100%;\n  height: auto;\n}\n\n.vce-single-image--align-center {\n  text-align: center;\n}\n\n.vce-single-image--align-right {\n  text-align: right;\n}\n\n.vce-single-image--align-left {\n  text-align: left;\n}\n\n.vce-single-image-wrapper figure {\n  margin: 0;\n}\n\n.vce-single-image-wrapper figcaption {\n  font-style: italic;\n  margin-top: 10px;\n}\n\n.vce-single-image {\n  position: relative;\n}\n\n.vce-single-image-container .vce-single-image-inner .vce-single-image {\n  box-shadow: none;\n}\n"},"./singleImage/component.js":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(i("./node_modules/babel-runtime/helpers/extends.js")),n=d(i("./node_modules/babel-runtime/helpers/typeof.js")),l=d(i("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),s=d(i("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=d(i("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),r=d(i("./node_modules/babel-runtime/helpers/createClass.js")),c=d(i("./node_modules/babel-runtime/helpers/inherits.js")),g=d(i("./node_modules/react/index.js")),u=d(i("./node_modules/vc-cake/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}var m=u.default.getService("api"),p=u.default.getService("renderProcessor"),v=function(e){function t(e){(0,s.default)(this,t);var i=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return i.promise=null,i.state={imgElement:null,parsedWidth:null,parsedHeight:null,naturalWidth:null,naturalHeight:null},i.setImage=i.setImage.bind(i),i.setImageState=i.setImageState.bind(i),i.setError=i.setError.bind(i),i}return(0,c.default)(t,e),(0,r.default)(t,null,[{key:"drawImageProp",value:function(e,t,i,a,n,l,s,o){2===arguments.length&&(i=a=0,n=e.canvas.width,l=e.canvas.height),s="number"==typeof s?s:.5,o="number"==typeof o?o:.5,s<0&&(s=0),o<0&&(o=0),s>1&&(s=1),o>1&&(o=1);var r=t.width,c=t.height,g=Math.min(n/r,l/c),u=r*g,d=c*g,m=void 0,p=void 0,v=void 0,h=void 0,b=1;Math.round(u)<n&&(b=n/u),Math.round(d)<l&&(b=l/d),p=(c-(h=c/((d*=b)/l)))*o,(m=(r-(v=r/((u*=b)/n)))*s)<0&&(m=0),p<0&&(p=0),v>r&&(v=r),h>c&&(h=c),e.imageSmoothingQuality="high",e.drawImage(t,m,p,v,h,i,a,n,l)}}]),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.promise=new window.Promise(function(t,i){e.resolve=t,e.setImage(e.props)}),p.add(this.promise)}},{key:"componentWillUnmount",value:function(){t.image&&t.image.removeEventListener("load",this.setImageState),t.image&&t.image.removeEventListener("error",this.setError)}},{key:"componentWillReceiveProps",value:function(e){this.setImage(e)}},{key:"parseSize",value:function(e,t,i,a){var l=!0;"string"==typeof e?e=e.replace(/\s/g,"").replace(/px/g,"").toLowerCase().split("x"):"object"===(void 0===e?"undefined":(0,n.default)(e))&&(l=e.crop,e=[e.width,e.height]),i=parseInt(i),a=parseInt(a);var s=parseInt(e[0])<i,o=parseInt(e[1])<a;if(l)e[0]=parseInt(e[0])<i?parseInt(e[0]):i,e[1]=parseInt(e[1])<a?parseInt(e[1]):a;else{if(e[0]=s?parseInt(e[0]):i,e[1]=o?parseInt(e[1]):a,s&&!o){var r=e[0]/i;e[1]=parseInt(a*r)}if(o&&!s){var c=e[1]/a;e[0]=parseInt(i*c)}if(o&&s)if(a<i){var g=e[0]/i;e[1]=parseInt(a*g)}else{var u=e[1]/a;e[0]=parseInt(i*u)}}if(t){var d=e[0]>=e[1]?e[1]:e[0];e={width:d,height:d}}else e={width:e[0],height:e[1]};return e}},{key:"checkRelatedSize",value:function(e){var t=null;return window.vcvImageSizes&&window.vcvImageSizes[e]&&(t=window.vcvImageSizes[e]),t}},{key:"getSizes",value:function(e,t){var i=e.size,a=e.shape,n="";return{width:(n=(i=i.replace(/\s/g,"").replace(/px/g,"").toLowerCase()).match(/\d+(x)\d+/)?this.parseSize(i,"round"===a,t.width,t.height):(n=this.checkRelatedSize(i))?this.parseSize(n,"round"===a,t.width,t.height):this.parseSize({width:t.width,height:t.height},"round"===a,t.width,t.height)).width,height:n.height}}},{key:"setImage",value:function(e){var i=this.getImageUrl(e.atts.image);t.image&&t.image.removeEventListener("load",this.setImageState),t.image&&t.image.removeEventListener("error",this.setError),t.image=new window.Image,t.image.addEventListener("load",this.setImageState),t.image.addEventListener("error",this.setError),i?t.image.src=i:this.setError(),i||this.setState({imgElement:null,parsedWidth:null,parsedHeight:null,naturalWidth:null,naturalHeight:null})}},{key:"setImageState",value:function(e){var t=this,i=e.currentTarget,a=this.getSizes(this.props.atts,i);this.setState({imgElement:e.currentTarget,parsedWidth:a.width,parsedHeight:a.height,naturalWidth:i.width,naturalHeight:i.height},function(){t.resolve&&t.resolve(!0)})}},{key:"setError",value:function(){this.resolve&&this.resolve(!1)}},{key:"resizeImage",value:function(){var e=this.state,i=e.imgElement,a=e.parsedWidth,n=e.parsedHeight,l=e.naturalWidth,s=e.naturalHeight;if(this.canvas){var o=this.canvas.getContext("2d");i?(this.canvas.width=a,this.canvas.height=n,this.canvas.naturalWidth=l,this.canvas.naturalHeight=s,t.drawImageProp(o,i,0,0,a,n,.5,.5)):o.clearRect(0,0,a,n)}}},{key:"getImageShortcode",value:function(e){var t=e.props,i=e.classes,a=e.isDefaultImage,n=e.src,l='[vcvSingleImage class="'+i+'" data-width="'+(this.state.parsedWidth||0)+'" data-height="'+(this.state.parsedHeight||0)+'" src="'+n+'" data-img-src="'+t["data-img-src"]+'" alt="'+t.alt+'" title="'+t.title+'"';return a&&(l+=' data-default-image="true"'),l+="]"}},{key:"render",value:function(){var e=this,t=this.props,i=t.id,n=t.atts,l=t.editor,s=n.image,o=n.shape,r=n.clickableOptions,c=n.showCaption,u=n.customClass,d=n.size,m=n.alignment,p=n.metaCustomId,v="vce-single-image-container",h="vce-single-image-inner",b={},f={},w={},_="div",I={},k=this.getImageUrl(s);if(I["data-img-src"]=k,I.alt=s&&s.alt?s.alt:"",I.title=s&&s.title?s.title:"","string"==typeof u&&u&&(v+=" "+u),"url"===r&&s&&s.link&&s.link.url){_="a";var y=s.link,x=y.url,z=y.title,E=y.targetBlank,S=y.relNofollow;b={href:x,title:z,target:E?"_blank":void 0,rel:S?"nofollow":void 0}}else"imageNewTab"===r?(_="a",b={href:k,target:"_blank"}):"lightbox"===r?(_="a",b={href:k,"data-lightbox":"lightbox-"+i}):"zoom"===r?h+=" vce-single-image-zoom-container":"photoswipe"===r&&(_="a",b={href:k,"data-photoswipe-image":i,"data-photoswipe-index":0},w["data-photoswipe-item"]="photoswipe-"+i,c&&(b["data-photoswipe-caption"]=s.caption),f["data-photoswipe-gallery"]=i);m&&(v+=" vce-single-image--align-"+m),"rounded"===o&&(h+=" vce-single-image--border-rounded"),"round"===o&&(h+=" vce-single-image--border-round"),b.key="customProps:"+i+"-"+k+"-"+r+"-"+o+"-"+d,p&&(f.id=p);var j=this.applyDO("all"),C=null;s&&s.caption&&(C=g.default.createElement("figcaption",null,s.caption)),s&&s.filter&&"normal"!==s.filter&&(h+=" vce-image-filter--"+s.filter);var O="",W={props:I,classes:"vce-single-image",isDefaultImage:!(s&&s.id),src:k};return k&&(O=g.default.createElement("span",(0,a.default)({className:"vce-single-image vcvhelper"},I,{"data-vcvs-html":this.getImageShortcode(W)}),g.default.createElement("canvas",{ref:function(t){e.canvas=t}}))),"full"===d&&"round"!==o&&(O=g.default.createElement("img",(0,a.default)({className:"vce-single-image",src:k},I))),this.resizeImage(),g.default.createElement("div",(0,a.default)({className:v},l,f),g.default.createElement("div",(0,a.default)({className:"vce vce-single-image-wrapper"},w,{id:"el-"+i},j),g.default.createElement("figure",null,g.default.createElement(_,(0,a.default)({},b,{className:h,ref:"imageContainer"}),O),C)))}}]),t}(m.elementComponent);v.image=null,t.default=v},"./singleImage/index.js":function(e,t,i){"use strict";var a=l(i("./node_modules/vc-cake/index.js")),n=l(i("./singleImage/component.js"));function l(e){return e&&e.__esModule?e:{default:e}}i("./singleImage/migrationWPB.js"),(0,a.default.getService("cook").add)(i("./singleImage/settings.json"),function(e){e.add(n.default)},{css:i("./node_modules/raw-loader/index.js!./singleImage/styles.css"),editorCss:i("./node_modules/raw-loader/index.js!./singleImage/editor.css")},"")},"./singleImage/migrationWPB.js":function(e,t,i){"use strict";var a,n=i("./node_modules/babel-runtime/core-js/object/assign.js"),l=(a=n)&&a.__esModule?a:{default:a},s=i("./node_modules/vc-cake/index.js");var o=(0,s.getService)("cook"),r=(0,s.getStorage)("migration");r.on("migrateElement",function(e){if("vc_single_image"===e.tag){var t=(0,l.default)({title:"",source:"media_library",image:"",img_size:"thumbnail",external_img_size:"",add_caption:"",alignment:"left",style:"",external_style:"",border_color:"grey",external_border_color:"grey",onclick:"",img_link_target:"_self",css_animation:""},e._attrs),i=(0,l.default)({},function(e,t){var i=(0,l.default)({size:"thumbnail",alignment:"left"},e,{tag:"singleImage"}),a=window.VCV_API_WPBAKERY_WPB_MEDIA?window.VCV_API_WPBAKERY_WPB_MEDIA():[],n=parseInt(t.image);return"media_library"===t.source&&n?i.image={id:n,full:a[n]}:"featured_image"===t.source?(n=a.featuredImageId,i.image={id:n,full:a.featuredImage}):"external_link"===t.source&&(i.image={full:t.custom_src,ids:[],urls:[t.custom_src]}),t.img_size&&(i.size=t.img_size),t.add_caption&&"yes"===t.add_caption&&(i.showCaption=!0,i.image.caption=a[i.image.id+"_caption"]),t.alignment&&(i.alignment=t.alignment),t.style.match("rounded")?i.shape="rounded":t.style.match("circle|round")&&(i.shape="round"),"img_link_large"===t.onclick?i.clickableOptions="imageNewTab":"link_image"===t.onclick?i.clickableOptions="lightbox":"zoom"===t.onclick?i.clickableOptions="zoom":"custom_link"===t.onclick&&(i.clickableOptions="url",i.image.link={relNofollow:!1,targetBlank:"_blank"===t.img_link_target,title:"",url:t.link}),i}(e._generalElementAttributes,t)),a=o.get(i);r.trigger("add",a.toJS()),e._migrated=!0}})},"./singleImage/settings.json":function(e){e.exports={image:{type:"attachimage",access:"public",value:"single-image.jpg",options:{label:"Image",multiple:!1,defaultValue:"single-image.jpg",onChange:{rules:{clickableOptions:{rule:"value",options:{value:"url"}}},actions:[{action:"attachImageUrls"}]},url:!1,imageFilter:!0}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["clickableOptions","showCaption","image","shape","size","alignment","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},metaOrder:{type:"number",access:"protected",value:4},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},size:{type:"string",access:"public",value:"large",options:{label:"Size",description:"Enter image size (Example: 'thumbnail', 'medium', 'large', 'full' or other sizes defined by theme). Alternatively enter size in pixels (Example: 200x100 (Width x Height))."}},clickableOptions:{type:"dropdown",access:"public",value:"",options:{label:"OnClick action",values:[{label:"None",value:""},{label:"Lightbox",value:"lightbox"},{label:"PhotoSwipe",value:"photoswipe"},{label:"Zoom",value:"zoom"},{label:"Open Image in New Tab",value:"imageNewTab"},{label:"Link selector",value:"url"}]}},showCaption:{type:"toggle",access:"public",value:!1,options:{label:"Show image caption in gallery view",onChange:{rules:{clickableOptions:{rule:"value",options:{value:"photoswipe"}}},actions:[{action:"toggleVisibility"}]}}},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["clickableOptions"]},{value:["image"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"singleImage"},metaPublicJs:{access:"protected",type:"string",value:{libraries:[{rules:{clickableOptions:{rule:"value",options:{value:"zoom"}}},libPaths:["public/dist/singleImage.min.js"]}]}},sharedAssetsLibrary:{access:"protected",type:"string",value:{libraries:[{rules:{clickableOptions:{rule:"value",options:{value:"lightbox"}}},libsNames:["lightbox"]},{rules:{clickableOptions:{rule:"value",options:{value:"zoom"}}},libsNames:["zoom"]},{rules:{clickableOptions:{rule:"value",options:{value:"photoswipe"}}},libsNames:["photoswipe"]}]}}}}},[["./singleImage/index.js"]]]);
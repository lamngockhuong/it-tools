import{d as defineComponent,a4 as useI18n,r as ref,ai as useITStorage,L as computedAsync,o as openBlock,j as createBlock,w as withCtx,a as createBaseVNode,k as createVNode,l as unref,m as isRef,c as createElementBlock,H as toDisplayString,O as createCommentVNode,G as createTextVNode,aV as _sfc_main$1,ah as _sfc_main$2,ae as __unplugin_components_0,ag as __unplugin_components_2,af as __unplugin_components_1$1}from"./index-1de3a68b.js";import{_ as __unplugin_components_4}from"./TextareaCopyable-4c7847d0.js";import{l as languages,p as printToLanguage}from"./ascii-lang-utils-a10dd64a.js";import{N as NSlider}from"./Slider-2188f4ca.js";import{_ as __unplugin_components_1}from"./FormItem-be347854.js";import{_ as __unplugin_components_8}from"./Divider-1cfe394a.js";import{_ as __unplugin_components_4$1}from"./Spin-77df4589.js";import"./base64-11d7ac16.js";import"./index-a6f01dde.js";import"./downloadBase64-019ab93a.js";import"./index-581869fd.js";import"./index-8d2abd5e.js";import"./Copy-ac81edee.js";import"./Scrollbar-1e49f8ac.js";import"./context-589fe33b.js";var imageToAsciiArt={exports:{}};(function(module,exports){(function(r,t){module.exports=t()})(window,function(){return function(m){var r={};function t(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return m[e].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=m,t.c=r,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(n&1&&(e=t(e)),n&8||n&4&&typeof e=="object"&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),n&2&&typeof e!="string")for(var _ in e)t.d(a,_,function(p){return e[p]}.bind(null,_));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/image-to-ascii-art.ts")}({"./src/image-to-ascii-art.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageToAsciiArt", function() { return ImageToAsciiArt; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


class ImageToAsciiArt {
  // If remove canvas dom when destroy.If "canvas" param of this Class was passed,it will be true.

  /**\r
   * @param canvas optional,the canvas used to generate ascii art.If it isn't passed,a hidden canvas will be append to body automatically.\r
   * @param config configuration\r
   */
  constructor({
    canvas,
    config = {}
  } = {}) {
    if (canvas instanceof HTMLCanvasElement) {
      this.canvas = canvas;
      this.canvasIsStable = true;
    } else {
      this.canvas = document.createElement('canvas');
      this.canvas.style.display = 'none';
      document.body.appendChild(this.canvas);
    }

    this.canvasCtx = this.canvas.getContext('2d');
    this.setConfig(config);
  }

  setConfig(config) {
    this.config = new _model__WEBPACK_IMPORTED_MODULE_0__["Config"](config);
  }
  /**\r
   * convert an image to an ascii art\r
   * @param image a HTMLImageElement instance or an URL of a image\r
   */


  convert(image) {
    let _image;

    if (image instanceof HTMLImageElement) {
      _image = image;
    } else {
      _image = new Image();
      _image.src = image;
    }

    return new Promise(resolve => {
      let doConvert = () => {
        _image.removeEventListener('load', doConvert);

        let drawWidth = this.config.drawWidth <= 1 ? this.config.drawWidth * _image.naturalWidth : this.config.drawWidth;
        let drawHeight = this.config.drawHeight <= 1 ? this.config.drawHeight * _image.naturalHeight : this.config.drawHeight;

        if (!this.canvasIsStable) {
          this.canvas.width = drawWidth;
          this.canvas.height = drawHeight;
        }

        this.canvasCtx.drawImage(_image, 0, 0, drawWidth, drawHeight);
        const imageData = this.canvasCtx.getImageData(0, 0, drawWidth, drawHeight);
        const imageDataArr = imageData.data;
        const imageDataHeight = imageData.height;
        const imageDataWidth = imageData.width;
        let arrGray = [];

        for (let h = 0; h < imageDataHeight; h += this.config.pickDensityHorizontal) {
          for (let w = 0; w < imageDataWidth; w += this.config.pickDensityVertical) {
            let index = (w + imageDataWidth * h) * 4;
            let r = imageDataArr[index];
            let g = imageDataArr[index + 1];
            let b = imageDataArr[index + 2];
            arrGray.push(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rgbToGray"])(r, g, b));
          } // -1 stands for '\\r\\n'


          arrGray.push(-1);
        }

        resolve(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["grayToAsciiString"])(arrGray, [...this.config.greyRangeChar, {
          from: -1,
          to: -1,
          char: '\\r\\n'
        }]));
      };

      if (!_image.complete) {
        _image.addEventListener('load', doConvert);
      } else {
        doConvert();
      }
    });
  }

  destroy() {
    if (!this.canvasIsStable) {
      document.body.removeChild(this.canvas);
    }
  }

}

//# sourceURL=webpack:///./src/image-to-ascii-art.ts?`)},"./src/model.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
 // set the char replace the grey between [from,to]

class Config {
  constructor(config) {
    this.drawWidth = Config.dealDrawParam(config.drawWidth, '"drawWith" config is invalid', 1);
    this.drawHeight = Config.dealDrawParam(config.drawHeight, '"drawHeight" config is invalid', 1);
    this.pickDensityHorizontal = Config.dealPickDensity(config.pickDensityHorizontal, '"pickDensityHorizontal" config is invalid', 1);
    this.pickDensityVertical = Config.dealPickDensity(config.pickDensityVertical, '"pickDensityVertical" config is invalid', 1);
    this.greyRangeChar = Config.dealGreyRangeChar(config.greyRangeChar, '"greyRangeChar" config is invalid', [{
      from: 0,
      to: 30,
      char: '#'
    }, {
      from: 31,
      to: 60,
      char: '&'
    }, {
      from: 61,
      to: 120,
      char: '$'
    }, {
      from: 121,
      to: 150,
      char: '*'
    }, {
      from: 151,
      to: 180,
      char: 'o'
    }, {
      from: 181,
      to: 210,
      char: '!'
    }, {
      from: 211,
      to: 240,
      char: ';'
    }]);
    this.defaultGreyChar = ' ';
  }

  static dealDrawParam(param, err, defaultValue) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(param)) {
      return defaultValue;
    }

    if (isNaN(param) || param <= 0) {
      throw new Error(err);
    } else if (param > 1) {
      param = Math.floor(param);
    }

    return param;
  }

  static dealPickDensity(param, err, defaultValue) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(param)) {
      return defaultValue;
    }

    if (isNaN(param) || param <= 1) {
      throw new Error(err);
    }

    return Math.floor(param);
  }

  static dealGreyRangeChar(param, err, defaultValue) {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(param)) {
      return defaultValue;
    }

    const result = [];

    for (let i = 0; i < param.length; i++) {
      if (param[i].from > param[i].to) {
        throw new Error(err);
      }

      result.push({
        from: Math.floor(param[i].from),
        to: Math.floor(param[i].to),
        char: param[i].char
      });
    }

    return result;
  }

}

//# sourceURL=webpack:///./src/model.ts?`)},"./src/utils.ts":function(module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToGray", function() { return rgbToGray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayToAsciiString", function() { return grayToAsciiString; });
function isDef(val) {
  return val !== undefined && val !== null;
}
function rgbToGray(r, g, b) {
  return Math.round(0.299 * r + 0.587 * g + 0.114 * b);
}
function grayToAsciiString(gray, greyRangeChar, defaultChar = ' ') {
  const greyCharHash = {};

  for (let i = 0; i < greyRangeChar.length; i++) {
    const item = greyRangeChar[i];

    for (let j = item.from; j <= item.to; j++) {
      greyCharHash[j] = item.char;
    }
  }

  return gray.map(item => {
    return greyCharHash[item] || defaultChar;
  }).join('');
}

//# sourceURL=webpack:///./src/utils.ts?`)}})})})(imageToAsciiArt);var imageToAsciiArtExports=imageToAsciiArt.exports;const _hoisted_1={style:{flex:"0 0 100%"}},_hoisted_2={"mx-auto":"","max-w-600px":""},_hoisted_3={key:0,flex:"","items-center":"","justify-center":""},_hoisted_4={class:"ml-2"},_sfc_main=defineComponent({__name:"image-to-ascii-art",setup(m){const{t:r}=useI18n(),t=ref(""),e=useITStorage("image-to-ascii-art:language","raw"),n=ref(100),a=ref(!1),_=ref(!1);function p(o){return new Promise((i,l)=>{const s=new FileReader;s.readAsDataURL(o),s.onload=()=>i(s.result?.toString()??""),s.onerror=c=>l(c)})}const f=languages.map(o=>({value:o.id,label:o.name})),d=computedAsync(async()=>{const o=t.value;if(!o)return"";const i=n.value/100,l=e.value;let s="";_.value=!0;try{a.value=!1;const c=new imageToAsciiArtExports.ImageToAsciiArt({config:{drawWidth:i,drawHeight:i*.4}});s=printToLanguage(await c.convert(o),l),c.destroy()}catch{a.value=!0}return _.value=!1,s});async function h(o){t.value=await p(o)}return(o,i)=>{const l=_sfc_main$1,s=NSlider,c=_sfc_main$2,g=__unplugin_components_1,w=__unplugin_components_0,y=__unplugin_components_8,v=__unplugin_components_4$1,b=__unplugin_components_2,x=__unplugin_components_1$1;return openBlock(),createBlock(x,null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createVNode(l,{title:unref(r)("tools.image-to-ascii-art.texts.title-drag-and-drop-a-image-file-here-or-click-to-select-a-file"),"paste-image":"",onFileUpload:h},null,8,["title"])])]),createVNode(g,{label:unref(r)("tools.image-to-ascii-art.texts.label-output-scale"),"label-placement":"left","mt-2":""},{default:withCtx(()=>[createVNode(s,{value:unref(n),"onUpdate:value":i[0]||(i[0]=u=>isRef(n)?n.value=u:null),step:1,min:1,max:100,"mr-2":""},null,8,["value"]),createVNode(c,{value:unref(n),"onUpdate:value":i[1]||(i[1]=u=>isRef(n)?n.value=u:null),size:"small",min:1,max:100},null,8,["value"])]),_:1},8,["label"]),createVNode(w,{value:unref(e),"onUpdate:value":i[2]||(i[2]=u=>isRef(e)?e.value=u:null),options:unref(f),searchable:"","mt-3":""},null,8,["value","options"]),createVNode(y),unref(_)?(openBlock(),createElementBlock("div",_hoisted_3,[createVNode(v,{size:"medium"}),createBaseVNode("span",_hoisted_4,toDisplayString(unref(r)("tools.image-to-ascii-art.texts.tag-processing")),1)])):createCommentVNode("",!0),unref(a)?(openBlock(),createBlock(b,{key:1,"mt-1":"","text-center":"",type:"error"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(r)("tools.image-to-ascii-art.texts.tag-current-settings-resulted-in-error")),1)]),_:1})):createCommentVNode("",!0),!unref(_)&&!unref(a)?(openBlock(),createBlock(g,{key:2,label:unref(r)("tools.image-to-ascii-art.texts.label-ascii-art-text")},{default:withCtx(()=>[createVNode(__unplugin_components_4,{value:unref(d),"mb-1":"","mt-1":"","copy-placement":"outside"},null,8,["value"])]),_:1},8,["label"])):createCommentVNode("",!0)]),_:1})}}}),imageToAsciiArt_vue_vue_type_style_index_0_lang="";export{_sfc_main as default};

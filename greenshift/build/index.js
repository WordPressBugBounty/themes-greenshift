(()=>{var e={6942:(e,n)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=i(e,s(t)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)o.call(e,t)&&e[t]&&(n=i(n,t));return n}function i(e,n){return n?e?e+" "+n:e+n:e}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=t(6942),n=t.n(e);const o=window.wp.element,a=window.ReactJSXRuntime;wp.hooks.addFilter("blocks.registerBlockType","greenshift/extraglobal",(function(e,n){return void 0!==e.attributes&&("core/cover"!=n&&"core/column"!=n&&"core/columns"!=n&&"core/group"!=n&&"core/image"!=n&&"core/button"!=n||(e.attributes=Object.assign(e.attributes,{gshideOnMobile:{type:"boolean"},gshideOnTablet:{type:"boolean"},gshideOnDesktop:{type:"boolean"}})),"core/group"==n&&(e.attributes=Object.assign(e.attributes,{gsStickyHeader:{type:"boolean"},gsStickyLogoHeight:{type:"number"},gsStickyHeaderUp:{type:"boolean"},gsStickyHeaderShadow:{type:"boolean"},gsStickyBg:{type:"string"},gsStickyColor:{type:"string"}})),"core/template-part"==n&&(e.attributes=Object.assign(e.attributes,{gsHeaderAlpha:{type:"boolean"}})),"core/navigation-submenu"==n&&(e.attributes=Object.assign(e.attributes,{gsSubWidth:{type:"number"},gsSubPadding:{type:"number"},gsPaddingB:{type:"number"},gsId:{type:"string"},gsReusableMenuId:{type:"number"},gsMenuType:{type:"string"},gsMenuImageGap:{type:"number"},gsInheritBg:{type:"boolean"}})),"core/navigation-link"==n&&(e.attributes=Object.assign(e.attributes,{gsReusableMenuId:{type:"number"},gsReusableAjax:{type:"boolean"},gsMenuImageGap:{type:"number"},gsPaddingB:{type:"number"},gsId:{type:"string"}})),"core/navigation"==n&&(e.attributes=Object.assign(e.attributes,{gsReusableMobileTopId:{type:"number"},gsReusableMobileBottomId:{type:"number"},gsPaddingV:{type:"number"},gsPaddingH:{type:"number"},gsMenuHoverColor:{type:"string"},gsMenuHoverBg:{type:"string"},gsSubMenuHoverColor:{type:"string"},gsSubMenuHoverBg:{type:"string"},gsMenuHoverDisableLine:{type:"boolean"},gsId:{type:"string"},gsMenuMobileBg:{type:"string"},gsMenuMobileColor:{type:"string"},gsMenuMobileArrowBg:{type:"string"},gsMenuMobileArrowColor:{type:"string"}})),"core/site-logo"!=n&&"core/image"!=n||(e.attributes=Object.assign(e.attributes,{stickyLogoSrc:{type:"string"},stickyLogoId:{type:"number"},mobileLogoSrc:{type:"string"},mobileLogoId:{type:"number"},darkLogoSrc:{type:"string"},darkLogoId:{type:"number"},darkMobileLogoSrc:{type:"string"},darkMobileLogoId:{type:"number"}}))),e}));const s=wp.compose.createHigherOrderComponent((e=>n=>{const{__}=wp.i18n,{ToggleControl:t,ColorPalette:o,BaseControl:s,PanelBody:i,RangeControl:r,SelectControl:l,Button:g}=wp.components,{InspectorAdvancedControls:c,InspectorControls:d,MediaUpload:u,MediaUploadCheck:b}=wp.blockEditor,{attributes:m,setAttributes:p,isSelected:h,clientId:k}=n;if("core/cover"!=n.name&&"core/column"!=n.name&&"core/columns"!=n.name&&"core/group"!=n.name&&"core/image"!=n.name&&"core/button"!=n.name){if("core/template-part"==n.name&&"header"==n.attributes.tagName)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{...n}),h&&(0,a.jsx)(c,{children:(0,a.jsx)(t,{label:__("Transparent Header?","greenshift"),checked:!!m.gsHeaderAlpha,onChange:e=>p({gsHeaderAlpha:!m.gsHeaderAlpha})})})]});if("core/site-logo"==n.name)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{...n}),h&&(0,a.jsxs)(d,{children:[(0,a.jsx)(i,{title:__("Mobile Logo","greenshift"),initialOpen:!1,children:(0,a.jsx)(b,{children:(0,a.jsxs)(s,{className:"gs-poster-editor",children:[__("Logo for mobile devices","greenshift"),(0,a.jsx)("div",{style:{marginBottom:5}}),(0,a.jsx)(u,{onSelect:e=>{p({mobileLogoSrc:e.url,mobileLogoId:e.id})},allowedTypes:["image"],render:({open:e})=>(0,a.jsx)("div",{className:"poster-preview",children:(0,a.jsxs)("div",{className:"image",children:[!m.mobileLogoSrc&&(0,a.jsx)(g,{onClick:e,className:"editor-post-featured-image__toggle",children:__("Add Mobile logo","greenshift")}),m.mobileLogoSrc&&(0,a.jsx)("img",{src:m.mobileLogoSrc,onClick:e})]})})}),!!m.mobileLogoSrc&&(0,a.jsx)(g,{onClick:()=>{p({mobileLogoSrc:"",mobileLogoId:null})},className:"poster-remove",isSmall:!0,variant:"secondary",children:__("Clear Media","greenshift")})]})})}),(0,a.jsx)(i,{title:__("Sticky Header Logo","greenshift"),initialOpen:!1,children:(0,a.jsx)(b,{children:(0,a.jsxs)(s,{className:"gs-poster-editor",children:[__("Logo for sticky header","greenshift"),(0,a.jsx)("div",{style:{marginBottom:5}}),(0,a.jsx)(u,{onSelect:e=>{p({stickyLogoSrc:e.url,stickyLogoId:e.id})},allowedTypes:["image"],render:({open:e})=>(0,a.jsx)("div",{className:"poster-preview",children:(0,a.jsxs)("div",{className:"image",children:[!m.stickyLogoSrc&&(0,a.jsx)(g,{onClick:e,className:"editor-post-featured-image__toggle",children:__("Add Sticky image","greenshift")}),m.stickyLogoSrc&&(0,a.jsx)("img",{src:m.stickyLogoSrc,onClick:e})]})})}),!!m.stickyLogoSrc&&(0,a.jsx)(g,{onClick:()=>{p({stickyLogoSrc:"",stickyLogoId:null})},className:"poster-remove",isSmall:!0,variant:"secondary",children:__("Clear Media","greenshift")})]})})})]})]});if("core/navigation-submenu"==n.name){let o=wp.data.select("core").getEntityRecords("postType","wp_block",{per_page:-1}),c=Array.isArray(o)?o.map((e=>({label:e.title.raw,value:e.id}))):o;return c&&(c=[{label:__("Select Reusable template","greenshift"),value:""}].concat(c)),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{...n}),h&&(0,a.jsx)(d,{children:(0,a.jsxs)(i,{title:__("GreenShift Extra Settings","greenshift"),children:[(0,a.jsx)(l,{label:__("Use Megamenu for sub items","greenshift"),value:m.gsMenuType,onChange:e=>p({gsMenuType:e}),options:[{label:__("Select menu type","greenshift"),value:""},{label:__("Columned menu","greenshift"),value:"megamenu"},{label:__("Columned menu from right","greenshift"),value:"megamenuright"},{label:__("Full width menu","greenshift"),value:"megamenufull"}]}),(0,a.jsx)(r,{label:__("Submenu Width","greenshift"),value:m.gsSubWidth,onChange:e=>p({gsSubWidth:e,gsId:k}),min:0,max:1e3,step:1,allowReset:!0}),(0,a.jsx)(r,{label:__("Submenu Padding","greenshift"),value:m.gsSubPadding,onChange:e=>p({gsSubPadding:e,gsId:k}),min:0,max:1e3,step:1,allowReset:!0}),(0,a.jsx)(r,{label:__("Bottom Margin","greenshift"),value:m.gsPaddingB,onChange:e=>p({gsPaddingB:e,gsId:k}),min:0,max:1e3,step:1,allowReset:!0}),(0,a.jsx)(r,{help:__("You can add image into menu label by clicking on arrow in toolbar, then select Inline Image","greenshift"),label:__("Menu image gap","greenshift"),value:m.gsMenuImageGap,onChange:e=>p({gsMenuImageGap:e,gsId:k}),min:0,max:30,step:.1,allowReset:!0}),(0,a.jsxs)(s,{help:__("Make sure that you added inner Menu link in sub item with the same Reusable template","greenshift"),children:[(0,a.jsx)(l,{label:__("Ajax loading trigger","greenshift"),value:m.gsReusableMenuId,onChange:e=>p({gsReusableMenuId:parseInt(e)}),options:c}),m.gsReusableMenuId&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{isSecondary:!0,onClick:()=>{let e=[];e.push(wp.blocks.createBlock("core/navigation-link",{label:"MEGAMENU",description:"",url:"MEGAMENU",kind:"custom",isTopLevelLink:!1,gsReusableMenuId:m.gsReusableMenuId,gsReusableAjax:!0})),wp.data.dispatch("core/block-editor").replaceInnerBlocks(k,e,!1)},children:__("Create sub item for template","greenshift")}),(0,a.jsx)("div",{style:{marginTop:10}}),(0,a.jsx)(t,{label:__("Inherit background from template?","greenshift"),checked:!!m.gsInheritBg,onChange:e=>p({gsInheritBg:!m.gsInheritBg,gsId:k})})]})]})]})})]})}if("core/navigation"==n.name){let g=wp.data.select("core").getEntityRecords("postType","wp_block",{per_page:-1}),c=Array.isArray(g)?g.map((e=>({label:e.title.raw,value:e.id}))):g;return c&&(c=[{label:__("Select Reusable template","greenshift"),value:""}].concat(c)),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{...n}),h&&(0,a.jsx)(d,{children:(0,a.jsxs)(i,{title:__("GreenShift Extra Settings","greenshift"),children:[(0,a.jsx)("div",{style:{marginTop:10}}),(0,a.jsx)(t,{label:__("Disable Hover Inline?","greenshift"),checked:!!m.gsMenuHoverDisableLine,onChange:e=>p({gsMenuHoverDisableLine:!m.gsMenuHoverDisableLine,gsId:k})}),(0,a.jsx)("div",{style:{marginBottom:6},children:__("Hover color","greenshift")}),(0,a.jsx)(o,{label:__("Hover color","greenshift"),value:m.gsMenuHoverColor,onChange:e=>p({gsMenuHoverColor:e,gsId:k}),enableAlpha:!0}),(0,a.jsx)("div",{style:{marginBottom:6},children:__("Hover Background color","greenshift")}),(0,a.jsx)(o,{label:__("Hover Background color","greenshift"),value:m.gsMenuHoverBg,onChange:e=>p({gsMenuHoverBg:e,gsId:k}),enableAlpha:!0}),(0,a.jsx)("div",{style:{marginBottom:6},children:__("Sub menu Hover color","greenshift")}),(0,a.jsx)(o,{label:__("Sub menu Hover color","greenshift"),value:m.gsSubMenuHoverColor,onChange:e=>p({gsSubMenuHoverColor:e,gsId:k}),enableAlpha:!0}),(0,a.jsx)("div",{style:{marginBottom:6},children:__("Sub menu Hover Background color","greenshift")}),(0,a.jsx)(o,{label:__("Sub menu Hover Background color","greenshift"),value:m.gsSubMenuHoverBg,onChange:e=>p({gsSubMenuHoverBg:e,gsId:k}),enableAlpha:!0}),(0,a.jsx)("div",{style:{marginBottom:6},children:__("Mobile Menu Background color","greenshift")}),(0,a.jsx)(o,{label:__("Mobile Menu Background color","greenshift"),value:m.gsMenuMobileBg,onChange:e=>p({gsMenuMobileBg:e,gsId:k}),enableAlpha:!0}),(0,a.jsx)("div",{style:{marginBottom:6},children:__("Mobile Menu text color","greenshift")}),(0,a.jsx)(o,{label:__("Mobile Menu text color","greenshift"),value:m.gsMenuMobileColor,onChange:e=>p({gsMenuMobileColor:e,gsId:k}),enableAlpha:!0}),(0,a.jsx)("div",{style:{marginBottom:6},children:__("Mobile Menu Arrow Background","greenshift")}),(0,a.jsx)(o,{label:__("Mobile Menu Arrow Background","greenshift"),value:m.gsMenuMobileArrowBg,onChange:e=>p({gsMenuMobileArrowBg:e,gsId:k}),enableAlpha:!0}),(0,a.jsx)("div",{style:{marginBottom:6},children:__("Mobile Menu Arrow color","greenshift")}),(0,a.jsx)(o,{label:__("Mobile Menu Arrow color","greenshift"),value:m.gsMenuMobileArrowColor,onChange:e=>p({gsMenuMobileArrowColor:e,gsId:k}),enableAlpha:!0}),(0,a.jsx)(r,{label:__("Menu Item Padding Vertical","greenshift"),value:m.gsPaddingV,onChange:e=>p({gsPaddingV:e,gsId:k}),min:0,max:50,step:1,allowReset:!0}),(0,a.jsx)(r,{label:__("Menu Item Padding Horizontal","greenshift"),value:m.gsPaddingH,onChange:e=>p({gsPaddingH:e,gsId:k}),min:0,max:50,step:1,allowReset:!0}),(0,a.jsx)("div",{style:{marginTop:10}}),(0,a.jsxs)(s,{help:__("This works only on frontend side","greenshift"),children:[(0,a.jsx)(l,{label:__("Mobile Menu top area template","greenshift"),value:m.gsReusableMobileTopId,onChange:e=>p({gsReusableMobileTopId:parseInt(e)}),options:c}),(0,a.jsx)(l,{label:__("Mobile Menu bottom area template","greenshift"),value:m.gsReusableMobileBottomId,onChange:e=>p({gsReusableMobileBottomId:parseInt(e)}),options:c})]})]})})]})}if("core/navigation-link"==n.name){let o=wp.data.select("core").getEntityRecords("postType","wp_block",{per_page:-1}),s=Array.isArray(o)?o.map((e=>({label:e.title.raw,value:e.id}))):o;return s&&(s=[{label:__("Select Reusable template","greenshift"),value:""}].concat(s)),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{...n}),h&&(0,a.jsx)(d,{children:(0,a.jsxs)(i,{title:__("GreenShift Menu Settings","greenshift"),children:[(0,a.jsx)(r,{help:__("You can add image into menu label by clicking on arrow in toolbar, then select Inline Image","greenshift"),label:__("Menu image gap","greenshift"),value:m.gsMenuImageGap,onChange:e=>p({gsMenuImageGap:e,gsId:k}),min:0,max:30,step:.1,allowReset:!0}),(0,a.jsx)(r,{label:__("Bottom Margin","greenshift"),value:m.gsPaddingB,onChange:e=>p({gsPaddingB:e,gsId:k}),min:0,max:1e3,step:1,allowReset:!0}),(0,a.jsx)(l,{label:__("Show Reusable template as Menu item","greenshift"),value:m.gsReusableMenuId,onChange:e=>p({gsReusableMenuId:parseInt(e)}),options:s}),(0,a.jsx)(t,{label:__("Ajax loading?","greenshift"),checked:!!m.gsReusableAjax,onChange:e=>p({gsReusableAjax:!m.gsReusableAjax})})]})})]})}return(0,a.jsx)(e,{...n})}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{...n}),h&&(0,a.jsxs)(c,{children:["core/group"==n.name&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{label:__("Sticky to Head on scroll?","greenshift"),checked:!!m.gsStickyHeader,onChange:e=>p({gsStickyHeader:!m.gsStickyHeader})}),m.gsStickyHeader&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{label:__("Sticky only on scroll Up?","greenshift"),checked:!!m.gsStickyHeaderUp,onChange:e=>p({gsStickyHeaderUp:!m.gsStickyHeaderUp})}),(0,a.jsx)(t,{label:__("Disable shadow?","greenshift"),checked:!!m.gsStickyHeaderShadow,onChange:e=>p({gsStickyHeaderShadow:!m.gsStickyHeaderShadow})}),(0,a.jsx)(s,{help:__("Replace Background when header is sticked?","greenshift"),children:(0,a.jsx)(o,{value:m.gsStickyBg,onChange:e=>p({gsStickyBg:e}),enableAlpha:!0})}),(0,a.jsx)(s,{help:__("Replace Text color when header is sticked?","greenshift"),children:(0,a.jsx)(o,{value:m.gsStickyColor,onChange:e=>p({gsStickyColor:e}),enableAlpha:!0})}),(0,a.jsx)(r,{label:__("Logo height for sticky header","greenshift"),value:m.gsStickyLogoHeight,onChange:e=>p({gsStickyLogoHeight:e}),min:10,max:150,step:1,allowReset:!0})]})]}),(0,a.jsx)(t,{label:__("Hide on desktop","greenshift"),checked:!!m.gshideOnDesktop,onChange:e=>p({gshideOnDesktop:!m.gshideOnDesktop})}),(0,a.jsx)(t,{label:__("Hide on tablet","greenshift"),checked:!!m.gshideOnTablet,onChange:e=>p({gshideOnTablet:!m.gshideOnTablet})}),(0,a.jsx)(t,{label:__("Hide on mobile","greenshift"),checked:!!m.gshideOnMobile,onChange:e=>p({gshideOnMobile:!m.gshideOnMobile})})]})]})}),"addFRhideControls");wp.hooks.addFilter("editor.BlockEdit","greenshift/extraglobal-control",s);const i=wp.compose.createHigherOrderComponent((e=>t=>{const{attributes:{gshideOnDesktop:s,gshideOnTablet:i,gshideOnMobile:r,gsStickyHeader:l,gsStickyHeaderUp:g,gsHeaderAlpha:c,gsSubWidth:d,gsReusableMenuId:u,gsMenuType:b,gsMenuImageGap:m,gsSubPadding:p,gsPaddingB:h,gsInheritBg:k,gsMenuHoverDisableLine:y,gsMenuHoverBg:v,gsMenuHoverColor:x,gsSubMenuHoverBg:M,gsSubMenuHoverColor:j,gsPaddingV:f,gsPaddingH:S,gsMenuMobileArrowBg:w,gsMenuMobileArrowColor:_,gsMenuMobileBg:I,gsMenuMobileColor:H},className:C,name:B,clientId:L}=t;if((0,o.useEffect)((()=>{if("megamenufull"==b){const e=document.querySelectorAll('[name="editor-canvas"]');let n=document;for(let o=0;o<e.length;o++)if(null!==e[o].contentDocument.getElementById("block-"+t.clientId)){n=e[o].contentDocument;break}let o=n.querySelectorAll(".wp-block-navigation-item.is-style-gs-megamenufull");for(let e=0;e<o.length;e++){let n=o[e],t=n.getBoundingClientRect(),a=t.y+t.height-.1;n.querySelector(".wp-block-navigation__submenu-container").style.top=a+"px"}}}),[b]),"core/navigation-submenu"==B)return(0,a.jsxs)(a.Fragment,{children:[d&&d>0&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] > .wp-block-navigation__submenu-container, [data-block="${L}"].has-child.is-selected > .wp-block-navigation__submenu-container, [data-block="${L}"].has-child.has-child-selected > .wp-block-navigation__submenu-container { min-width: ${t.attributes.gsSubWidth}px !important; }`}}),p&&p>0&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] > .wp-block-navigation__submenu-container, [data-block="${L}"].has-child.is-selected > .wp-block-navigation__submenu-container, [data-block="${L}"].has-child.has-child-selected > .wp-block-navigation__submenu-container { padding: ${t.attributes.gsSubPadding}px !important; }`}}),k&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] > .wp-block-navigation__submenu-container {background:none !important; box-shadow:none !important; }`}}),h&&h>0&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] { padding-bottom: ${t.attributes.gsPaddingB}px !important; }`}}),m&&m>0&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] > .wp-block-navigation-item__content > .wp-block-navigation-item__label {gap: ${t.attributes.gsMenuImageGap}px !important; }`}}),(0,a.jsx)(e,{className:n()(C,b&&"megamenu"==b?"is-style-mega-menu-right":"",b&&"megamenuright"==b?"is-style-mega-menu-left":"",b&&"megamenufull"==b?"is-style-gs-megamenufull":"",u?`gs-el-onhover load-block-${u}`:""),...t})]});if("core/navigation"==B)return(0,a.jsxs)(a.Fragment,{children:[x&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`@media(min-width:600px){[data-block="${L}"] .wp-block-navigation__container > .wp-block-navigation-item:hover{color: ${t.attributes.gsMenuHoverColor} !important; }}`}}),v&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`@media(min-width:600px){[data-block="${L}"] .wp-block-navigation__container > .wp-block-navigation-item:hover{background-color: ${t.attributes.gsMenuHoverBg} !important; }}`}}),I&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] .wp-block-navigation__responsive-container.is-menu-open{background-color: ${t.attributes.gsMenuMobileBg} !important; }`}}),H&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content.wp-block-navigation-item__content{color: ${t.attributes.gsMenuMobileColor} !important; }[data-block="${L}"] .wp-block-navigation__responsive-container-close svg{fill: ${t.attributes.gsMenuMobileColor} !important;}`}}),w&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__submenu-icon{background-color: ${t.attributes.gsMenuMobileArrowBg} !important; }`}}),_&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-submenu .wp-block-navigation__submenu-icon svg{stroke: ${t.attributes.gsMenuMobileArrowColor} !important; }`}}),f&&f>0&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`@media(min-width:600px){[data-block="${L}"] .wp-block-navigation__container > .wp-block-navigation-item{padding-top: ${t.attributes.gsPaddingV}px; padding-bottom: ${t.attributes.gsPaddingV}px;}}`}}),S&&S>0&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`@media(min-width:600px){[data-block="${L}"] .wp-block-navigation__container > .wp-block-navigation-item{padding-left: ${t.attributes.gsPaddingH}px; padding-right: ${t.attributes.gsPaddingH}px;}}`}}),j&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] .wp-block-navigation__submenu-container > .wp-block-navigation-item:hover{color: ${t.attributes.gsSubMenuHoverColor} !important; }`}}),M&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] .wp-block-navigation__submenu-container > .wp-block-navigation-item:hover{background-color: ${t.attributes.gsSubMenuHoverBg} !important; }`}}),(0,a.jsx)(e,{className:n()(C,y?"is-style-gs-disablemenuline":""),...t})]});if("core/navigation-link"==B){const{BlockPreview:o}=wp.blockEditor,{createBlock:s}=wp.blocks;return(0,a.jsxs)(a.Fragment,{children:[m&&m>0&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] > .wp-block-navigation-item__content > .wp-block-navigation-item__label {gap: ${t.attributes.gsMenuImageGap}px !important; }`}}),h&&h>0&&(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`[data-block="${L}"] { padding-bottom: ${t.attributes.gsPaddingB}px !important; }`}}),u&&u>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{...t,className:n()(C,"gs-preview-block-link")}),(0,a.jsx)(o,{viewportWidth:0,blocks:s("core/block",{ref:u})})]}):(0,a.jsx)(e,{...t})]})}return"core/cover"!=B&&"core/column"!=B&&"core/columns"!=B&&"core/group"!=B&&"core/template-part"!=B&&"core/image"!=B&&"core/button"!=B?(0,a.jsx)(e,{...t}):(0,a.jsx)(e,{...t,className:n()(C,l?"gs-sticky-header":"",g?"gs-sticky-header-up":"",s?"gs-desktop-hide":"",i?"gs-tablet-hide":"",r?"gs-mobile-hide":"",c?"gs-header-alpha":"")})}),"withClientIdClassName");wp.hooks.addFilter("editor.BlockListBlock","greenshift/extraglobal-editor-class",i),wp.hooks.addFilter("blocks.getSaveContent.extraProps","greenshift/extraglobal-apply-class",(function(e,n,t){if("core/cover"==n.name||"core/column"==n.name||"core/columns"==n.name||"core/group"==n.name||"core/image"==n.name||"core/button"==n.name){const{gshideOnMobile:n,gshideOnTablet:o,gshideOnDesktop:a}=t;void 0!==n&&n&&(e.className=e.className+" gs-mobile-hide"),void 0!==a&&a&&(e.className=e.className+" gs-desktop-hide"),void 0!==o&&o&&(e.className=e.className+" gs-tablet-hide")}if("core/group"==n.name){const{gsStickyHeader:n,gsStickyHeaderUp:o}=t;void 0!==n&&n&&(e.className=e.className+" gs-sticky-header",void 0!==o&&o&&(e.className=e.className+" gs-sticky-header-up"))}else if("core/template-part"==n.name){const{gsHeaderAlpha:n}=t;void 0!==n&&n&&(e.className=e.className+" gs-header-alpha")}return e}))})()})();
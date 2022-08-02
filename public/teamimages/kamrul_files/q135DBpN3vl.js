if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null};e.exports=a}),null);
__d("CometFeedVideoPlayerPlaceholder_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedVideoPlayerPlaceholder_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerCometFeedThumbnail_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react",["CometImage.react","CometPressable.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={image:{height:"qypqp5cg",width:"q676j6op"},interactiveArea:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",width:"k4urcfbm"},root:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",position:"l9j0dhe7",textAlign:"hzawbc8m"},smallImage:{height:"jnigpg78",width:"odw8uiq3"},smallText:{lineHeight:"jiuqdcnw",paddingStart:"b3onmgus",position:"l9j0dhe7",whiteSpace:"g0qnabr5"},text:{lineHeight:"jiuqdcnw",paddingStart:"tw6a2znq",position:"l9j0dhe7",whiteSpace:"g0qnabr5"},textLinkDisplay:{marginTop:"aahdfvyu",maxWidth:"nlp0uwpm"}};function a(a){var b=a.buttonSize;b=b===void 0?"large":b;var d=a.iconImageUri,e=a.label,f=a.linkDisplay,g=a.title,j=a.triggerRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["buttonSize","iconImageUri","label","linkDisplay","title","triggerRef"]);return b==="small"?h.jsxs("div",{className:c("stylex")(i.root),children:[h.jsx(c("CometImage.react"),{alt:e,src:d,xstyle:i.smallImage}),h.jsx("div",{className:c("stylex")(i.smallText),children:h.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"body4",children:g})}),h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{label:e,ref:j,xstyle:i.interactiveArea}))]}):h.jsxs("div",{className:c("stylex")(i.root),children:[h.jsx(c("CometImage.react"),{alt:e,src:d,xstyle:i.image}),h.jsxs("div",{className:c("stylex")(i.text),children:[h.jsx(c("TetraText.react"),{color:"primaryOnMedia",type:"headlineEmphasized3",children:g}),f!=null&&b!=="large_without_link"?h.jsx("div",{className:c("stylex")(i.textLinkDisplay),children:h.jsx(c("TetraText.react"),{color:"primaryOnMedia",numberOfLines:1,type:"headline3",children:f})}):null]}),h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{label:e,ref:j,xstyle:i.interactiveArea}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction.react",["CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql","CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e,f,g=a.actionLink;a=a.buttonSize;a=a===void 0?"large":a;g=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql"),g);g=g.action_link;if(g==null||g.url==null||g.title==null)return null;var j=g.url;e=(e=g.title)!=null?e:"";f=(f=g.link_display)!=null?f:"";g=(g=(g=g.link_video_endscreen_icon)==null?void 0:g.uri)!=null?g:"/images/calltoaction/videoendscreen/learnmore_40dp-2x.png";j={rel:"nofollow",target:"_blank",url:j};return i.jsx(c("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{buttonSize:a,iconImageUri:g,label:e,linkDisplay:f,linkProps:j,title:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedVideoPlayerPlaceholder.react",["fbt","CometFeedVideoPlayerPlaceholder_video.graphql","CometPressable.react","CometRelay","VideoPlayerCometFeedThumbnail.react","VideoPlayerPlayButton.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k={pressable:{cursor:"nhd2j8a9",display:"a8c37x1j",pointerEvents:"mrt03zmi"},root:{alignItems:"bp9cbjyn",bottom:"i09qtzwb",boxSizing:"rq0escxv",display:"j83agx80",end:"n7fi1qx3",justifyContent:"taijpn5t",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"}};function a(a){var e=d("CometRelay").useFragment(i!==void 0?i:i=b("CometFeedVideoPlayerPlaceholder_video.graphql"),a.video);e=j.jsxs(j.Fragment,{children:[j.jsx(c("VideoPlayerCometFeedThumbnail.react"),{video:e}),j.jsx(c("VideoPlayerPlayButton.react"),{isVisible:!0})]});return typeof a.onClick==="function"?j.jsx(c("CometPressable.react"),{display:"block",label:h._("__JHASH__pymzrO9zrya__JHASH__"),onPress:a.onClick,overlayDisabled:!0,xstyle:[k.root,k.pressable],children:e}):j.jsx("div",{className:c("stylex")(k.root),children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometComposerStoryLinkAttachmentPreviewContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=h.createContext(!1);function a(a){return h.jsx(j.Provider,{value:!0,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";function b(){return i(j)}g.CometComposerStoryLinkAttachmentPreviewContextProvider=a;g.useCometComposerStoryLinkAttachmentPreviewContext=b}),98);
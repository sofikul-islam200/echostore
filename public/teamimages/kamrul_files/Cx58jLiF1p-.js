if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("FriendingCometMutualFriendsSocialContext_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:16,kind:"LocalArgument",name:"iconSize"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"FriendingCometMutualFriendsSocialContext_user",selections:[a,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"social_context_top_mutual_friends",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:[{kind:"Variable",name:"height",variableName:"iconSize"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"iconSize"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"User",abstractKey:null}}();e.exports=a}),null);
__d("FriendingCometManageFriendsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4492728260832692"}),null);
__d("FriendingCometManageFriendsDialogQuery$Parameters",["FriendingCometManageFriendsDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendingCometManageFriendsDialogQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometManageFriendsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FriendingCometPYMKCard_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"},{defaultValue:230,kind:"LocalArgument",name:"size"}],kind:"Fragment",metadata:null,name:"FriendingCometPYMKCard_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"size"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"size"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:[{kind:"Literal",name:"iconSize",value:16}],kind:"FragmentSpread",name:"FriendingCometMutualFriendsSocialContext_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4776188739159440"}),null);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql",["FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ProactiveFriendingAlertImpressionUpdateResponsePayload",kind:"LinkedField",name:"proactive_friending_alert_impression_update",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",selections:c},params:{id:b("FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("NullStatePeople",["cr:3586"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:3586")}),98);
__d("NullStatePeopleFB",["IconSource"],(function(a,b,c,d,e,f,g){"use strict";a={dark:new(c("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/people/null_states_people_dark_mode.svg",112),"default":new(c("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg",112)};g["default"]=a}),98);
__d("CometFeedHScrollComponent.react",["CometCard.react","CometHScroll.react","TetraButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var e=a.backgroundColor;e=e===void 0?"white":e;var f=a.borderHighlightAnimation;f=f===void 0?!0:f;var g=a.button,i=a.dropShadow;i=i===void 0?1:i;var j=a.gap;j=j===void 0?8:j;a.maxWidth;var k=a.title;a=babelHelpers.objectWithoutPropertiesLoose(a,["backgroundColor","borderHighlightAnimation","button","dropShadow","gap","maxWidth","title"]);return h.jsx(c("CometCard.react"),{background:e,borderHighlightAnimation:f,dropShadow:i,ref:b,children:h.jsxs("div",{className:"stjgntxs ni8dbmo4"+(k==null?" ecm0bbzt":""),children:[k!=null&&h.jsx("div",{className:"dati1w0a e5nlhep0 hv4rvrfc pybr56ya i1fnvgqd btwxx1t3 j83agx80",children:h.jsx("div",{className:"tkr6xdv7 buofh1pr",children:k})}),h.jsx("div",{children:h.jsx(d("CometHScroll.react").Container,babelHelpers["extends"]({},a,{gap:j,peek:!0,peekPaddingStart:16}))}),g!=null?h.jsx("div",{className:"dati1w0a a5h7je3r hv4rvrfc cxgpxx05 taijpn5t jnigpg78 j83agx80 bp9cbjyn",children:h.jsx(c("TetraButton.react"),{label:g.title,linkProps:g.linkProps,onPress:g.onPress,reduceEmphasis:!0,testid:void 0,type:"secondary"})}):null]})})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("FriendingCometHScrollEndCard.react",["fbt","ix","Locale","TetraCircleButton.react","TetraText.react","XCometFriendingControllerRouteBuilder","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){return j.jsxs("div",{className:"k4urcfbm taijpn5t datstx6m cbu4d94t j83agx80 bp9cbjyn",children:[j.jsx(c("TetraCircleButton.react"),{color:"primary",icon:d("Locale").isRTL()?d("fbicon")._(i("528307"),24):d("fbicon")._(i("514456"),24),label:h._("__JHASH__63lGa9WUHkl__JHASH__"),linkProps:{passthroughProps:{ref:a.sourceRef},url:c("XCometFriendingControllerRouteBuilder").buildURL({})},size:48,type:"normal"}),j.jsx("div",{className:"n1l5q3vz",children:j.jsx(c("TetraText.react"),{color:"secondary",type:"body2",children:h._("__JHASH__63lGa9WUHkl__JHASH__")})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometHScrollGlimmerCard.react",["BaseGlimmer.react","CometCard.react","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.onVisible;a=c("useVisibilityObserver")({onVisible:a,options:{rootMargin:200}});return h.jsx("div",{className:"k4urcfbm datstx6m j83agx80",ref:a,children:h.jsxs(c("CometCard.react"),{background:"white",border:"solid",dropShadow:1,children:[h.jsx("div",{className:"k4urcfbm d5it6em2",children:h.jsx(c("BaseGlimmer.react"),{className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",index:0})}),h.jsxs("div",{className:"tw6a2znq f10w8fjw d1544ag0 pybr56ya hdvgg9ib",children:[h.jsx(c("BaseGlimmer.react"),{className:"r1eg49ei rs0gx3tq i4qgphn6 kv0toi1t j6sty90h jos75b7i t0qjyqq4",index:0}),h.jsx(c("BaseGlimmer.react"),{className:"n99xedck ku2m03ct cyypbtt7 kv0toi1t j6sty90h jos75b7i t0qjyqq4",index:0})]})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometMutualFriendsText.react",["CometLazyTooltip.react","CometPressable.react","CometProfileListDialog.entrypoint","JSResourceForInteraction","TetraText.react","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useRef,j=c("JSResourceForInteraction")("FriendingCometMutualFriendsSocialContextTooltipContent.react").__setRef("FriendingCometMutualFriendsText.react"),k={socialContextText:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",textOverflow:"ltmttdrg"}};function a(a){var b=a.textType,d=a.truncateContextText,e=i(null),f=c("useCometEntryPointDialog")(c("CometProfileListDialog.entrypoint"),{listType:"MUTUAL_FRIENDS",sourceID:a.id},"button"),g=f[0],l=f[1],m=f[2];f=f[3];return h.jsx(c("CometLazyTooltip.react"),{align:"start",delayContentMs:0,delayTooltipMs:100,tooltipProps:{userID:a.id},tooltipResource:j,children:h.jsx(c("CometPressable.react"),{"aria-labelledby":a.socialContextText,display:"inline",onHoverIn:l,onHoverOut:m,onPress:function(){return g({actionsByPriorityMapping:{User:[{hookConfig:{messengerWebEntryPoint:"mutualFriendsDialog"},type:"message"}]}})},onPressIn:f,overlayDisabled:!0,ref:e,xstyle:k.socialContextText,children:h.jsx(c("TetraText.react"),{color:"secondary",numberOfLines:d===!0?1:null,type:b,children:a.socialContextText})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometMutualFriendsSocialContext.react",["CometRelay","FriendingCometMutualFriendsSocialContext_user.graphql","FriendingCometMutualFriendsText.react","TetraOverlappingFacepileUnstyled.react","actorHovercardContainer","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={facepile:{paddingEnd:"ph5uu5jm"},root:{alignItems:"bp9cbjyn",display:"j83agx80",paddingTop:"ggysqto6",width:"k4urcfbm"}},k={16:{minHeight:"frgo5egb"},24:{minHeight:"dumg13m2"},32:{minHeight:"jklb3kyz"},40:{minHeight:"kbf60n1y"},48:{minHeight:"ek66kcfh"}};function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("FriendingCometMutualFriendsSocialContext_user.graphql"),a.user),f=a.iconSize,g=a.socialContextText,l=e.id;e=e.social_context_top_mutual_friends;var m=a.shouldShowFacepile;m=m===void 0?!0:m;if(l==null)return null;var n=[];m&&(n=e.map(function(a){var b=a.id,d=a.name,e=a.url;a=(a=a.profile_picture)==null?void 0:a.uri;return b!=null&&d!=null&&e!=null&&a!=null?{alt:d,containerComponent:c("actorHovercardContainer")(b),linkProps:{url:e},source:{uri:a}}:null}).filter(Boolean));m=n.length>0;return g!==""?i.jsx("div",{className:c("stylex")(j.root,k[f]),children:m?i.jsx("div",{className:c("stylex")(j.facepile),children:i.jsx(c("TetraOverlappingFacepileUnstyled.react"),{isTextInline:!0,items:n,size:f,text:i.jsx(c("FriendingCometMutualFriendsText.react"),{id:l,shouldAlignToFacepile:m,socialContextText:g,textType:a.textType,truncateContextText:a.truncateContextText})})}):i.jsx(c("FriendingCometMutualFriendsText.react"),{id:l,shouldAlignToFacepile:m,socialContextText:g,textType:a.textType,truncateContextText:a.truncateContextText})}):null}a.displayName=a.name+" [from "+f.id+"]";e=i.memo(a);g["default"]=e}),98);
__d("FriendingCometNullStateView.react",["fbt","CometContentArea.react","NullStatePeople","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.hasRequestsOrSuggestions;a=a?h._("__JHASH__gulzVE2DQt6__JHASH__"):h._("__JHASH__3eebHJDyj0l__JHASH__");return i.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:i.jsx(c("TetraNullState.react"),{headline:a,icon:c("NullStatePeople")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometPanel.react",["CometUnitHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"rtmu0sqt qzhwtbm6",children:h.jsx(c("CometUnitHeader.react"),{action:a.headlineAddOn,actionLinkProps:a.headlineAddOnLinkProps,headline:a.heading,level:3,onActionPress:a.onHeadlineAddOnPress})}),a.children]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometManageFriendsDialog.entrypoint",["FriendingCometManageFriendsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:b("FriendingCometManageFriendsDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("FriendingCometManageFriendsDialog.react").__setRef("FriendingCometManageFriendsDialog.entrypoint")};g["default"]=a}),98);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation",["CometRelay","FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql");function a(a,b,c){return d("CometRelay").commitMutation(a,{mutation:i,onError:c,variables:{input:b}})}g.commit=a}),98);
__d("ManageFriendsEntryPointClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743888");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_click",a);e.exports=c}),null);
__d("ManageFriendsEntryPointDismissalFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743889");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_dismissal",a);e.exports=c}),null);
__d("ManageFriendsEntryPointImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743890");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_impression",a);e.exports=c}),null);
__d("FriendingCometFriendLimitWarning.react",["fbt","ix","CometCard.react","CometRelay","FriendingCometManageFriendsDialog.entrypoint","FriendingCometProactiveFriendingAlertImpressionUpdateMutation","ManageFriendsEntryPointClickFalcoEvent","ManageFriendsEntryPointDismissalFalcoEvent","ManageFriendsEntryPointImpressionFalcoEvent","TetraButton.react","TetraCircleButton.react","TetraIcon.react","TetraTextPairing.react","fbicon","react","useCometEntryPointDialog","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useRef;function a(a){var b=d("CometRelay").useRelayEnvironment();a=c("useCometEntryPointDialog")(c("FriendingCometManageFriendsDialog.entrypoint"),{});var e=a[0],f=l(!1);a=k(function(){f.current||(d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation").commit(b,{}),c("ManageFriendsEntryPointImpressionFalcoEvent").log(function(){return{entry_point:"proactive_module"}}),f.current=!0)},[b]);a=c("useVisibilityObserver")({onVisible:a});var g=j.jsx("div",{className:"datstx6m",children:j.jsx("div",{className:"ciadx1gn l9j0dhe7 a8nywdso qt6c0cv9 rz4wbd8a jb3vyjys taijpn5t mudddibn j83agx80 rq0escxv sk4xxmp2 agehan2d n8ej3o3l rt8b4zig spb7xbtv bkmhp75w emlxlaya s45kfl79 ibgm0fz6 bp9cbjyn",children:j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("502061"),16)})})}),m=j.jsx("div",{className:"knvmm38d h676nmdw oi9244e8 ama3r5zh buofh1pr",children:j.jsx(c("TetraTextPairing.react"),{body:h._("__JHASH__sAaqZqNPSPl__JHASH__"),headline:h._("__JHASH__4QzB8gvKrrv__JHASH__"),level:3})}),n=j.jsx("div",{className:"datstx6m",children:j.jsx(c("TetraCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("478238"),20),label:h._("__JHASH__tka7rMJuL69__JHASH__"),onPress:function(){d("CometRelay").commitLocalUpdate(b,function(a){a=a.get(d("CometRelay").VIEWER_ID);a==null?void 0:a.setValue(!1,"should_show_proactive_friending_alert")}),c("ManageFriendsEntryPointDismissalFalcoEvent").log(function(){return{entry_point:"proactive_module"}})},size:32})}),o=j.jsx(c("TetraButton.react"),{label:h._("__JHASH__WZrupv7wVsU__JHASH__"),onPress:function(){e({}),c("ManageFriendsEntryPointClickFalcoEvent").log(function(){return{entry_point:"proactive_module"}})},padding:"wide",type:"secondary"});return j.jsx("div",{className:"jei6r52m dhix69tm wkznzc2l n851cfcs",ref:a,children:j.jsx(c("CometCard.react"),{dropShadow:2,children:j.jsxs("div",{className:"lb8aey2d a5h7je3r oj5qckz4 p6qk8glf",children:[j.jsxs("div",{className:"j83agx80",children:[g,m,n]}),o]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometRecommendationsUnitCard.react",["fbt","ix","ActorHovercard.react","CometAspectRatioContainer.react","CometBackgroundImage.react","CometCard.react","CometColumn.react","CometColumnItem.react","CometImage.react","CometLink.react","TetraButton.react","TetraCircleButton.react","TetraTextPairing.react","fbicon","react","stylex","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");e=b.forwardRef;var k=b.useCallback,l=b.useRef,m={cardContext:{alignItems:"bp9cbjyn",display:"j83agx80",height:"gl3lb2sf",width:"k4urcfbm"},container:{width:"k4urcfbm"},contentColumn:{maxWidth:"d2edcug0"},contentRoot:{display:"j83agx80"},contentRowShort:{height:"bq79dmyb"},contentRowStandard:{height:"fbzcu06b"},contentRowTall:{height:"lz9ov98a"},image:{height:"datstx6m",objectFit:"bixrwtb6",width:"k4urcfbm"},imageContainer:{paddingBottom:"d5it6em2",position:"l9j0dhe7",width:"k4urcfbm"},imageLink:{bottom:"i09qtzwb",boxSizing:"rq0escxv",display:"a8c37x1j",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},inset:{bottom:"i09qtzwb",boxShadow:"oaz4zybt",height:"ay7djpcl",position:"pmk7jnqg",width:"k4urcfbm"},xoutButton:{end:"swmj3c3o",position:"pmk7jnqg",top:"fcg2cn6m"}};function a(a,b){var e=a.accessibilityLabel,f=a.actorID,g=a.badge,n=a.body,o=a.cardAction,p=a.cardContentHeightLevel,q=a.cardContext;q=q===void 0?null:q;var r=a.cardFooter;r=r===void 0?null:r;var s=a.dropShadow;s=s===void 0?2:s;var t=a.headline,u=a.imageAlt,v=a.imageAspectRatio,w=a.imageSrc,x=a.isCardContextHidden;x=x===void 0?!1:x;var y=a.linkURI,z=a.meta,A=a.onClick,B=a.onHeadlineClick,C=a.onImageClick,D=a.onImpression,E=a.onRemove;a=a.testid;var F=l(!1);a=k(function(){if(f==null)return;F.current||(D&&D(),F.current=!0)},[f,D]);a=c("useVisibilityObserver")({onVisible:a});var G=function(){A&&A(),C&&C()},H=function(){A&&A(),B&&B()};return j.jsx("div",{className:c("stylex")(m.container),"data-testid":void 0,ref:a,children:j.jsx(c("CometCard.react"),{background:"white",border:"solid",dropShadow:s,ref:b,children:j.jsxs("div",{className:c("stylex")(m.contentRoot),children:[j.jsxs(c("CometColumn.react"),{expanding:!0,paddingTop:0,paddingVertical:12,spacing:12,xstyle:m.contentColumn,children:[j.jsx(c("CometColumnItem.react"),{children:v==null?j.jsxs("div",{className:c("stylex")(m.imageContainer),children:[j.jsx(c("CometLink.react"),{"aria-hidden":e==null,"aria-label":e,href:y,onClick:G,xstyle:m.imageLink,children:j.jsx(c("CometImage.react"),{alt:u,src:w,xstyle:m.image})}),j.jsx("div",{className:c("stylex")(m.inset)})]}):j.jsx(c("CometLink.react"),{href:y,onClick:G,children:j.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:v,children:j.jsx(c("CometBackgroundImage.react"),{alt:u,src:w})})})}),j.jsx(c("CometColumnItem.react"),{paddingHorizontal:12,xstyle:[p===0&&m.contentRowShort,p===1&&m.contentRowStandard,p===2&&m.contentRowTall],children:j.jsx(c("TetraTextPairing.react"),{body:n,bodyColor:"secondary",headline:j.jsx(c("ActorHovercard.react"),{actorID:f,children:function(a){return j.jsxs(j.Fragment,{children:[j.jsx(c("CometLink.react"),{"aria-hidden":!1,href:y,onClick:H,ref:a,children:t}),g]})}}),headlineLineLimit:p==null?1:2,level:3,meta:z})}),!x&&j.jsx(c("CometColumnItem.react"),{paddingHorizontal:12,children:j.jsx("div",{className:c("stylex")(m.cardContext),children:q})}),o!=null&&j.jsx(c("CometColumnItem.react"),{expanding:!0,paddingHorizontal:12,verticalAlign:"bottom",children:j.jsx(c("TetraButton.react"),babelHelpers["extends"]({},o,{reduceEmphasis:(a=o.reduceEmphasis)!=null?a:!0}))}),r&&j.jsx(c("CometColumnItem.react"),{paddingHorizontal:12,children:r})]}),E!=null?j.jsx("div",{className:c("stylex")(m.xoutButton),children:j.jsx(c("TetraCircleButton.react"),{icon:d("fbicon")._(i("478233"),20),label:h._("__JHASH__tnRfHlva-bL__JHASH__"),onPress:E,size:32,type:"dark-overlay"})}):null]})})})}a.displayName=a.name+" [from "+f.id+"]";b=e(a);g["default"]=b}),98);
__d("FriendingCometTestIDHelper",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({getFriendsTabFriendRequestsConfirmedTestID:function(a){return"comet_friends_tab_requests-"+a+"-confirmed"},getFriendsTabFriendRequestsDeletedTestID:function(a){return"comet_friends_tab_requests-"+a+"-deleted"},getFriendsTabFriendRequestsTestID:function(a){return"comet_friends_tab_requests-"+a},getFriendsTabPYMKTestID:function(a){return"comet_friends_tab_pymk-"+a},getGriffinTabFriendRequestsTestID:function(a){return"comet_griffin_tab_requests-"+a}});f["default"]=a}),66);
__d("FriendingCometPYMKCard.react",["fbt","ix","CometRecommendationsUnitCard.react","CometRelay","FriendingCometErrorHandler.react","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestSendMutation","FriendingCometMutualFriendsSocialContext.react","FriendingCometPYMKCard_user.graphql","FriendingCometTestIDHelper","TetraButton.react","TetraText.react","fbicon","react","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useCallback,m=e.useRef;function a(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("FriendingCometPYMKCard_user.graphql"),a.user),f=a.addFriendSource,g=a.cancelRequestSource,n=a.dropShadow;n=n===void 0?2:n;var o=a.hasButtonIcons;o=o===void 0?!0:o;var p=a.hasRemoveTextButton;p=p===void 0?!1:p;var q=a.logAddFriend,r=a.logClick,s=a.logImpression,t=a.onRemove,u=a.profileURI,v=a.pymkLocation;a=e.friendship_status;var w=e.id,x=e.name,y=e.profile_picture;y=y==null?void 0:y.uri;var z=d("CometRelay").useRelayEnvironment(),A=m(!1),B=m(a),C=B.current!==a;C&&(B.current=a);var D=d("FriendingCometErrorHandler.react").useFriendingErrorHandler({addFriendId:(B=w)!=null?B:"0",addFriendSource:f}),E=c("useMinifiedProductAttribution")();B=l(function(){w!=null&&(d("FriendingCometFriendRequestSendMutation").commit({environment:z,navigationChain:E,onError:D,pymkLocation:v,receiverID:w,source:f}),q!=null&&q())},[f,z,D,w,q,E,v]);var F=l(function(){w!=null&&(A.current=!0,d("FriendingCometFriendRequestCancelMutation").commit({environment:z,navigationChain:E,onError:D,receiverID:w,source:g}))},[g,z,D,w,E]);if(w==null||y==null||x==null)return null;var G=void 0,H=null,I=null;switch(a){case"CAN_REQUEST":G={icon:o?d("fbicon")._(i("497883"),16):null,label:h._("__JHASH__Z4PyBRj_DqQ__JHASH__"),onPress:B,testid:"add_button"};H=p?k.jsx("div",{className:"k4urcfbm hddg9phg",children:k.jsx(c("TetraButton.react"),{icon:o?d("fbicon")._(i("664704"),16):null,label:h._("__JHASH__NBfMiFm79R7__JHASH__"),onPress:t,testid:void 0,type:"secondary"})}):null;I=A.current?h._("__JHASH__MJNiftGCp6X__JHASH__"):null;break;case"OUTGOING_REQUEST":G=p?void 0:{icon:o?d("fbicon")._(i("664704"),16):null,label:h._("__JHASH__USkLBq6Dqcv__JHASH__"),onPress:F,reduceEmphasis:!1,testid:"cancel_request_button",type:"secondary"};H=p?k.jsxs("div",{className:"k4urcfbm cbu4d94t j83agx80",children:[k.jsx("div",{className:"k4urcfbm m7zwrmfr"}),k.jsx("div",{className:"k4urcfbm hddg9phg",children:k.jsx(c("TetraButton.react"),{icon:o?d("fbicon")._(i("664704"),16):null,label:h._("__JHASH__USkLBq6Dqcv__JHASH__"),onPress:F,testid:void 0,type:"secondary"})})]}):null;I=h._("__JHASH__TEOr0XFFOKy__JHASH__");break}a=null;if(C&&I!=null)a=k.jsx(c("TetraText.react"),{color:"secondary",numberOfLines:1,type:"body3",children:I});else{F=(o=(B=e.social_context)==null?void 0:B.text)!=null?o:"";a=F!==""?k.jsx(c("FriendingCometMutualFriendsSocialContext.react"),{iconSize:16,socialContextText:F,textType:"body3",truncateContextText:!0,user:e}):null}A.current=!1;return k.jsx(c("CometRecommendationsUnitCard.react"),{actorID:w,cardAction:G,cardContext:a,cardFooter:H,dropShadow:n,headline:x,imageAlt:x!==""?h._("__JHASH__fFxebUIHbMc__JHASH__",[h._param("name",x)]):h._("__JHASH__YYtsNPwzoFr__JHASH__"),imageSrc:y,linkURI:u,onClick:r,onImpression:s,onRemove:p?void 0:t,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometFriendRequestStrings",["fbt","qex"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return c("qex")._("1134")?h._("__JHASH__dFVgEtnSoyi__JHASH__"):h._("__JHASH__f_ykVlwvlha__JHASH__")}function b(){return c("qex")._("1134")?h._("__JHASH__uiVutfBPFAE__JHASH__"):h._("__JHASH___GUB3O7_qji__JHASH__")}function d(){return c("qex")._("1134")?h._("__JHASH___CcxhzW4RYN__JHASH__"):h._("__JHASH__bqYwCmtC0yw__JHASH__")}function e(){return h._("__JHASH__MBSKqmuWv9I__JHASH__")}g.requestRejected=a;g.reject=b;g.rejectRequest=d;g.acceptRequest=e}),98);
__d("XCometFriendingSectionControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/friends/{friending_section}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("FriendingCometProfileRedirectUriBuilder",["XCometFriendingSectionControllerRouteBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return h("requests",a,b)}function b(a,b){return h("suggestions",a,b)}function h(a,b,d){if(c("gkx")("1684809")){return c("XCometFriendingSectionControllerRouteBuilder").buildURL({friending_section:a,profile_id:(a=b)!=null?a:""})}return d}g.getFriendRequestsProfileUri=a;g.getPYMKProfileUri=b}),98);
__d("FriendsCenterOpenedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743630");c=b("FalcoLoggerInternal").create("friends_center_opened",a);e.exports=c}),null);
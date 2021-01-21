(this["webpackJsonpmango-shop"]=this["webpackJsonpmango-shop"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(72),n(0)),i=n.n(r),s=n(21),c=n.n(s),o=n(27),l=n(29),u=n(7),d=n(9),p=n(8),h=(n(80),n(68)),b=n(31),j=n.p+"static/media/logo.f676183c.svg";function f(){var e=Object(u.a)(["\n  height: 25px;\n"]);return f=function(){return e},e}var g=p.a.img(f()),v=function(){return Object(a.jsxs)(b.a,{bg:"light",expand:"lg","aria-label":"navbar",children:[Object(a.jsx)(b.a.Brand,{children:Object(a.jsx)("a",{href:"https://shop.mango.com/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(g,{src:j,alt:"logo","aria-label":"mango logo"})})}),Object(a.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsx)(h.a,{className:"mr-auto",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{"aria-label":"exercise1",activeClassName:"active",className:"nav-link",to:"/exercise1",exact:!0,children:"Normal range"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{"aria-label":"exercise2",activeClassName:"active",className:"nav-link",to:"/exercise2",exact:!0,children:"Fixed values range"})})]})})}),Object(a.jsx)(b.a.Brand,{children:Object(a.jsx)("a",{href:"https://github.com/javmurillo/mango-shop",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(g,{src:"/mango-shop/github-logo.png",alt:"logo","aria-label":"github logo"})})})]})},x=n(107),O=function(){return Object(a.jsxs)("div",{"aria-label":"not found",children:[Object(a.jsx)(b.a,{}),Object(a.jsx)(x.a,{variant:"dark","aria-label":"not found alert",children:"The page you are looking for was not found!"})]})},m=n(15),y=n(16),S=n(18),I=n(17),A=n(108),k=n(105);function C(){var e=Object(u.a)(["\n  padding: 2px;\n  background: transparent;\n  text-align: center;\n  border: none;\n"]);return C=function(){return e},e}function D(){var e=Object(u.a)(["\n  width: 16rem;\n  margin: 2rem;\n"]);return D=function(){return e},e}function w(){var e=Object(u.a)(["\n  color: darkred;\n  text-decoration: line-through;\n"]);return w=function(){return e},e}function M(){var e=Object(u.a)(["\n  color: green;\n  font-size: 20px;\n  margin-left: 6px;\n"]);return M=function(){return e},e}function V(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return V=function(){return e},e}var N=p.a.div(V()),L=p.a.span(M()),E=p.a.span(w()),B=Object(p.a)(A.a)(D()),T=Object(p.a)(A.a.Footer)(C()),F=function(e){var t=e.article;return Object(a.jsxs)(B,{"aria-label":"article-card",children:[Object(a.jsx)(A.a.Img,{variant:"top",src:t.img}),Object(a.jsxs)(A.a.Body,{children:[Object(a.jsx)(A.a.Title,{children:t.name}),Object(a.jsx)(A.a.Text,{children:t.description})]}),Object(a.jsx)(T,{children:t.oldPrice?Object(a.jsx)(k.a,{variant:"success",children:"Deal of the day!"}):null}),Object(a.jsx)(A.a.Footer,{className:"text-muted",children:Object(a.jsxs)(N,{children:[t.oldPrice?Object(a.jsxs)(E,{children:[t.oldPrice," \u20ac"]}):null,Object(a.jsxs)(L,{children:[t.currentPrice," \u20ac"]})]})})]})};function P(){var e=Object(u.a)(["\n  margin-top: 2rem;\n"]);return P=function(){return e},e}function R(){var e=Object(u.a)(["\n  justify-content: center;\n"]);return R=function(){return e},e}var H=p.a.div(R()),_=Object(p.a)(x.a)(P()),z=function(e){return 0===e.articlesList.length?Object(a.jsx)(_,{variant:"dark",children:"There are no articles to show matching the given filters!"}):Object(a.jsx)(H,{className:"row","aria-label":e.ariaLabel,children:e.articlesList.map((function(e){return Object(a.jsx)(F,{article:e},e.id)}))})},K="SET_ARTICLES",W="FETCH_ARTICLES_FAILED",X="FILTER_ARTICLES",G=n(40),J=n.n(G),U="https://demo4557431.mockable.io",q=function(e,t){return{type:X,payload:{min:e,max:t}}},Q=function(){return function(e){J.a.get("".concat(U,"/articles")).then((function(t){var n;e((n=t.data,{type:K,payload:{articles:n}}))})).catch((function(t){e({type:W})}))}},Y="SET_RANGE_DATA",Z="FETCH_RANGE_DATA_FAILED",$=function(){return function(e){J.a.get("".concat(U,"/range-data")).then((function(t){var n;e((n=t.data,{type:Y,payload:{rangeData:n}}))})).catch((function(t){e({type:Z})}))}},ee=n(106);function te(){var e=Object(u.a)(["\n  text-align: center;\n"]);return te=function(){return e},e}function ne(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return ne=function(){return e},e}var ae=p.a.div(ne()),re=Object(p.a)(ee.a)(te()),ie=function(e){return e.error?Object(a.jsx)("div",{"aria-label":"spinner",children:Object(a.jsx)("p",{"aria-label":"error message",children:e.message})}):Object(a.jsx)(ae,{"aria-label":"spinner",children:Object(a.jsx)(re,{animation:"border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})},se=n(41),ce=n(5),oe=n(69);function le(){var e=Object(u.a)(["\n  font-weight: bold;\n  margin-right: 1rem;\n"]);return le=function(){return e},e}function ue(){var e=Object(u.a)(["\n  display: flex;\n"]);return ue=function(){return e},e}function de(){var e=Object(u.a)(["\n  border: none;\n  text-align: right;\n  outline: none;\n  width: 50px;\n  font-weight: bold;\n"]);return de=function(){return e},e}var pe=p.a.input(de()),he=p.a.div(ue()),be=p.a.span(le()),je=function(e){var t=Object(r.useState)(e.value.toString()),n=Object(oe.a)(t,2),i=n[0],s=n[1];Object(r.useEffect)((function(){s(e.value.toString())}),[e.value]);return Object(a.jsxs)(he,{children:[Object(a.jsx)(pe,{"aria-label":e.ariaLabel,type:"number",min:"0",value:i,onChange:function(t){!function(t){var n=t.target.value;isNaN(Number(n))||(s(n),e.onChange&&e.onChange(t,e.rangeKey))}(t)},style:e.disabled?{cursor:"not-allowed"}:{},disabled:e.disabled}),Object(a.jsx)(be,{children:"\u20ac"})]})},fe={handle:{position:"absolute",display:"inline-block",cursor:"grab",height:30,width:30,backgroundColor:"black",border:"1px solid #052350",borderRadius:"50%"},focusedHandle:{border:"2px solid 052350"},hoveredHandle:{backgroundColor:"white",border:"2px solid #052350",boxShadow:"0px 0px 5px 0px gray",height:"38px",width:"38px"},activeHandle:{backgroundColor:"white",border:"2px solid #052350",cursor:"grabbing",boxShadow:"inset 0px 0px 5px 0px gray",height:"35px",width:"35px"}},ge=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={hovered:!1,focused:!1,active:!1},a.style=void 0,a.lastPos=void 0,a.currentPos=void 0,a.onMouseEnterBullet=function(){a.style=a.getBulletStyle(Object(ce.a)(Object(ce.a)({},a.state),{},{hovered:!0}),a.props),a.setState({hovered:!0})},a.onMouseLeaveBullet=function(){a.style=a.getBulletStyle(Object(ce.a)(Object(ce.a)({},a.state),{},{hovered:!1}),a.props),a.setState({hovered:!1})},a.onMouseDownBullet=function(e){a.setBulletToStartMoving(e,e.pageX)},a.onBulletMouseMove=function(e){a.state.active&&a.move(e,e.clientX)},a.onBulletMouseUp=function(e){a.state.active&&(a.move(e,e.pageX),a.moveEnd())},a.setBulletToStartMoving=function(e,t){e.preventDefault(),e.stopPropagation(),a.style=a.getBulletStyle(Object(ce.a)(Object(ce.a)({},a.state),{},{active:!0}),a.props),a.currentPos=t,a.lastPos=t,a.setState({active:!0})},a.move=function(e,t){e.preventDefault(),e.stopPropagation();var n=a.props,r=n.factor,i=n.step,s=n.handleMove,c=t-a.lastPos,o=t-a.currentPos,l=c>0?1:-1,u=1===l?i.right:i.left;c*o>(r||1)*u&&(s&&s(l),a.currentPos+=r*u*l),a.lastPos=t},a.moveEnd=function(){a.style=a.getBulletStyle(Object(ce.a)(Object(ce.a)({},a.state),{},{active:!1}),a.props),a.setState({active:!1})},a.style=Object(ce.a)(Object(ce.a)({},fe.handle),{},{left:a.props.offset}),a}return Object(y.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.onBulletMouseMove),document.addEventListener("mouseup",this.onBulletMouseUp)}},{key:"getBulletStyle",value:function(e,t){var n=e.hovered,a=e.focused,r=e.active,i=t.offset,s=n?fe.hoveredHandle:void 0,c=a?fe.focusedHandle:void 0,o=r?fe.activeHandle:void 0;return Object(ce.a)(Object(ce.a)(Object(ce.a)(Object(ce.a)(Object(ce.a)({},fe.handle),s),c),o),{},{left:i})}},{key:"render",value:function(){return this.style=this.getBulletStyle(this.state,this.props),Object(a.jsx)("div",{"aria-label":this.props.ariaLabel,ref:this.props.handleRef,style:this.style,onMouseEnter:this.onMouseEnterBullet,onMouseLeave:this.onMouseLeaveBullet,onMouseDown:this.onMouseDownBullet})}}]),n}(r.Component);function ve(){var e=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  margin-top: 11px;\n  border-radius: 10%;\n  background-color: white;\n  border: 3px solid black;\n"]);return ve=function(){return e},e}var xe=p.a.div(ve()),Oe=function(e){return Object(a.jsx)(xe,{ref:e.trackRef,"aria-label":e.ariaLabel})};function me(){var e=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: 34px;\n"]);return me=function(){return e},e}var ye=p.a.div(me()),Se=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(e){var a;Object(m.a)(this,n),(a=t.call(this,e)).state=void 0,a.factor=1,a.startSteps=void 0,a.endSteps=void 0,a.startIndex=0,a.endIndex=0,a.setTrackDimensions=function(e){if(e){var t=e.clientWidth;a.setState({trackLength:t})}},a.setHandleSize=function(e){if(e){var t=e.clientWidth;a.state.handleSize||a.setState({handleSize:t})}},a.startHandleMove=function(e){var t=a.state.start,n=a.getStartStep(e,a.props.step,a.startSteps);Array.isArray(a.props.step)&&(a.updateIndexes(e,a.props.step,a.startIndex,a.endIndex,"start"),a.updateSteps(a.props.step,a.startIndex,a.endIndex,"start"));var r=t+e*n,i=a.getStartValue(r,a.props.min,a.state.end);i!==t&&(a.updateState(i,a.state.end),a.onChange(i,a.state.end))},a.endHandleMove=function(e){var t=a.state.end,n=a.getEndStep(e,a.props.step,a.endSteps);Array.isArray(a.props.step)&&(a.updateIndexes(e,a.props.step,a.startIndex,a.endIndex,"end"),a.updateSteps(a.props.step,a.startIndex,a.endIndex,"end"));var r=t+e*n,i=a.getEndValue(r,a.state.start,a.props.max);i!==t&&(a.updateState(a.state.start,i),a.onChange(a.state.start,i))},a.updateState=function(e,t){a.setState({start:e,end:t})},a.onChange=function(e,t){var n=Number(e.toFixed(2)),r=Number(t.toFixed(2));a.props.onChange&&a.props.onChange({start:n,end:r})};var r=e.rangeValue.start,i=e.rangeValue.end,s=e.step;a.state={start:r,end:i};var c=s,o=s,l=s,u=s;return Array.isArray(s)&&(a.startIndex=0,a.endIndex=s.length-1,c=0,o=s[a.startIndex+1]-s[a.startIndex],l=s[a.endIndex]-s[a.endIndex-1],u=0),a.startSteps={left:c,right:o},a.endSteps={left:l,right:u},a}return Object(y.a)(n,[{key:"updateIndexes",value:function(e,t,n,a,r){"start"===r?1===e&&n<t.length-1?this.startIndex++:-1===e&&n>0&&this.startIndex--:"end"===r&&(1===e&&a<t.length-1?this.endIndex++:-1===e&&a>0&&this.endIndex--)}},{key:"updateSteps",value:function(e,t,n,a){if("start"===a){var r=e[t]-e[t-1],i=e[t+1]-e[t];this.startSteps={left:isNaN(r)?0:r,right:isNaN(i)?0:i}}else if("end"===a){var s=e[n+1]-e[n],c=e[n]-e[n-1];this.endSteps={left:isNaN(c)?0:c,right:isNaN(s)?0:s}}}},{key:"getStartStep",value:function(e,t,n){return Array.isArray(t)?1===e?n.right:n.left:t}},{key:"getEndStep",value:function(e,t,n){return Array.isArray(t)?1===e?n.right:n.left:t}},{key:"getStartValue",value:function(e,t,n){return e<t?t:e>n?n:e}},{key:"getEndValue",value:function(e,t,n){return e>n?n:e<t?t:e}},{key:"render",value:function(){var e=0,t=0,n=1,r=this.state,i=r.handleSize,s=r.trackLength,c=r.start,o=r.end,l=this.props,u=l.min,d=l.max,p=l.ariaLabel;if(s&&i){var h=s-i;this.factor=h/(d-u),e=(c-u)*this.factor,t=(o-u)*this.factor,n=100/s}return Object(a.jsxs)(ye,{"aria-label":p,children:[Object(a.jsx)(Oe,{trackRef:this.setTrackDimensions}),Object(a.jsx)(ge,{offset:"".concat(e*n,"%"),handleRef:this.setHandleSize,handleMove:this.startHandleMove,factor:this.factor,step:this.startSteps}),Object(a.jsx)(ge,{offset:"".concat(t*n,"%"),handleRef:this.setHandleSize,handleMove:this.endHandleMove,factor:this.factor,step:this.endSteps})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.rangeValue.start!==t.start||e.rangeValue.end!==t.end?{start:e.rangeValue&&e.rangeValue.start,end:e.rangeValue&&e.rangeValue.end}:null}}]),n}(r.Component);function Ie(){var e=Object(u.a)(["\n  width: 512px;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 16px;\n"]);return Ie=function(){return e},e}var Ae=p.a.div(Ie()),ke=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(e){var a;Object(m.a)(this,n),(a=t.call(this,e)).state=void 0,a.onChange=function(e){a.setState({rangeValue:e}),a.props.onChange&&a.props.onChange(e.start,e.end)},a.handleInputChange=function(e,t){var n=e.target,r=Number(n.value),i=a.state,s=i.min,c=i.max,o=i.rangeValue;"start"===t?r?r>=s&&r<=o.end&&a.patchState(t,r):a.patchState(t,s):"end"===t&&(r?r<=c&&r>=o.start&&a.patchState(t,r):a.patchState(t,c))},a.patchState=function(e,t){a.setState((function(n){return Object(ce.a)(Object(ce.a)({},n),{},{rangeValue:Object(ce.a)(Object(ce.a)({},n.rangeValue),{},Object(se.a)({},e,t))})}),(function(){a.props.onChange&&a.props.onChange(a.state.rangeValue.start,a.state.rangeValue.end)}))};var r=e.min,i=e.max,s=e.step;return Array.isArray(s)&&(r=s[0],i=s[s.length-1]),a.state={min:r,max:i,rangeValue:{start:r,end:i}},a}return Object(y.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(Ae,{"aria-label":this.props.ariaLabel,children:[Object(a.jsx)(je,{onChange:this.handleInputChange,value:this.state.rangeValue.start,rangeKey:"start",disabled:this.props.disableInputs}),Object(a.jsx)(Se,{min:this.state.min,max:this.state.max,step:this.props.step,rangeValue:this.state.rangeValue,onChange:this.onChange,ariaLabel:"range-slider"}),Object(a.jsx)(je,{onChange:this.handleInputChange,value:this.state.rangeValue.end,rangeKey:"end",disabled:this.props.disableInputs})]})}}]),n}(r.Component),Ce=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).filterArticles=function(t,n){e.props.onFilterArticles(t,n)},e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitArticles()}},{key:"render",value:function(){var e=this.props.articles,t=e.articles,n=e.error,r=Object(a.jsx)(ie,{error:n,message:"Articles can't be loaded!"});return t&&(r=Object(a.jsx)(z,{articlesList:t})),Object(a.jsxs)("div",{children:[Object(a.jsx)(ke,{min:0,max:100,step:[9.99,29.99,39.99,59.99,79.99,99.99],onChange:this.filterArticles,disableInputs:!0}),r]})}}]),n}(r.Component),De=Object(o.b)((function(e){return{articles:{articles:e.articles&&e.articles.articles,error:e.articles&&e.articles.error},rangeData:{min:e.rangeData.min,max:e.rangeData.max,rangeValues:e.rangeData.rangeValues,error:e.rangeData.error}}}),(function(e){return{onInitArticles:function(){return e(Q())},onFilterArticles:function(t,n){return e(q(t,n))},onInitRangeData:function(){return e($())}}}))(Ce),we=function(e){Object(S.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).filterArticles=function(t,n){e.props.onFilterArticles(t,n)},e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitArticles(),this.props.onInitRangeData()}},{key:"render",value:function(){var e=this.props.articles,t=e.articles,n=e.error,r=Object(a.jsx)(ie,{error:n,message:"Articles can't be loaded!"});return t&&(r=Object(a.jsx)(z,{articlesList:t})),Object(a.jsxs)("div",{children:[Object(a.jsx)(ke,{min:this.props.rangeData.min||0,max:this.props.rangeData.max||100,step:5,onChange:this.filterArticles,disableInputs:!1}),r]})}}]),n}(r.Component),Me=Object(o.b)((function(e){return{articles:{articles:e.articles&&e.articles.articles,error:e.articles&&e.articles.error},rangeData:{min:e.rangeData.min,max:e.rangeData.max,rangeValues:e.rangeData.rangeValues,error:e.rangeData.error}}}),(function(e){return{onInitArticles:function(){return e(Q())},onFilterArticles:function(t,n){return e(q(t,n))},onInitRangeData:function(){return e($())}}}))(we);function Ve(){var e=Object(u.a)(["\n  width: 75%;\n  margin: 1rem auto;\n"]);return Ve=function(){return e},e}var Ne=p.a.main(Ve()),Le=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(v,{}),Object(a.jsx)(Ne,{children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/exercise1",component:Me}),Object(a.jsx)(d.b,{exact:!0,path:"/exercise2",component:De}),Object(a.jsx)(d.b,{exact:!0,path:"/not-found",component:O}),Object(a.jsx)(d.a,{exact:!0,from:"/",to:"/exercise1"}),Object(a.jsx)(d.a,{to:"/not-found"})]})})]})},Ee=(n(102),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))}),Be=n(26),Te=n(66),Fe=n(67),Pe={error:!1},Re=function(e,t){return Object(ce.a)(Object(ce.a)({},e),{},{articles:t.payload.articles,cachedArticles:t.payload.articles,error:!1})},He=function(e){return Object(ce.a)(Object(ce.a)({},e),{},{error:!0})},_e=function(e,t){var n=t.payload,a=n.min,r=n.max;return Object(ce.a)(Object(ce.a)({},e),{},{articles:e.cachedArticles&&e.cachedArticles.filter((function(e){return e.currentPrice>=a&&e.currentPrice<=r}))})},ze={error:!1},Ke=function(e,t){return Object(ce.a)(Object(ce.a)({},e),{},{min:t.payload.rangeData.min,max:t.payload.rangeData.max,rangeValues:t.payload.rangeData.rangeValues,error:!1})},We=function(e){return Object(ce.a)(Object(ce.a)({},e),{},{error:!0})},Xe=Object(Be.combineReducers)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Re(e,t);case W:return He(e);case X:return _e(e,t);default:return e}},rangeData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Ke(e,t);case Z:return We(e);default:return e}}}),Ge=Object(Be.createStore)(Xe,Object(Te.composeWithDevTools)(Object(Be.applyMiddleware)(Fe.a)));c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(o.a,{store:Ge,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(Le,{})})})}),document.getElementById("root")),Ee()},80:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.adf4ab82.chunk.js.map
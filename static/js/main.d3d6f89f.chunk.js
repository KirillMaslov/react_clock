(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),r=n(3),s=n(5),i=n(4),l=n(1),u=n.n(l),d=(n(12),n(0)),m=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.timerId=0,e.setNewDate=function(){e.setState({today:new Date}),console.info(e.state.today.toUTCString().slice(-12,-4))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.setNewDate,1e3)}},{key:"componentDidUpdate",value:function(e){if(e.name!==this.props.name){var t=e.name,n=this.props.name;console.debug("Renamed from ".concat(t," to ").concat(n))}}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.PureComponent);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.newDateId=0,e.setClockName=function(){e.setState({clockName:h()})},e.documentClickHandler=function(){e.setState({hasClock:!0})},e.contextMenuHandler=function(t){t.preventDefault(),e.state.hasClock&&e.setState({hasClock:!1})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.setClockName,3300),document.addEventListener("click",this.documentClickHandler),document.addEventListener("contextmenu",this.contextMenuHandler)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(m,{name:n})]})}}]),n}(u.a.PureComponent);a.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d3d6f89f.chunk.js.map
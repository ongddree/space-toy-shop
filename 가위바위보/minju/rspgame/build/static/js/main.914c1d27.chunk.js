(this.webpackJsonprspgame=this.webpackJsonprspgame||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(4),i=s.n(c),r=s(5),l=s(6),h=s(2),o=s(8),u=s(7),j=(s(13),s(0));var b=function(e){var t=e.onClick,s=e.children;return Object(j.jsx)("button",{onClick:t,className:"btn",children:s})};s(15);var v=function(e){var t=e.player,s=e.children;return Object(j.jsxs)("div",{className:"userInfo ".concat(t),children:[Object(j.jsx)("div",{className:"player",children:t}),Object(j.jsxs)("div",{className:"score",children:[s,"\uc810"]})]})},d=(s(16),function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={values:{0:{value:"rock",emoji:"\u270a"},1:{value:"scissor",emoji:"\u270c\ufe0f"},2:{value:"paper",emoji:"\ud83d\udd90"}},show:0,gamer:0,user:0},a.checkResult=a.checkResult.bind(Object(h.a)(a)),a.restart=a.restart.bind(Object(h.a)(a)),a.clear=a.clear.bind(Object(h.a)(a)),a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.restart()}},{key:"componentWillUnmount",value:function(){clearInterval(this.showValues)}},{key:"checkResult",value:function(e){var t=this;clearInterval(this.showValues),this.state.show===e?alert("\ube44\uacbc\ub2e4."):this.state.show<2?this.state.show+1===e?this.lose():this.win():0===e?this.lose():this.win(),setTimeout((function(){t.restart()}),300)}},{key:"restart",value:function(){var e=this;this.showValues=setInterval((function(){var t=0===e.state.show?1:1===e.state.show?2:2===e.state.show&&0;e.setState({show:t})}),100)}},{key:"win",value:function(){alert("\uc774\uacbc\ub2e4!!!!"),this.setState((function(e){return{user:e.user+1}}))}},{key:"lose",value:function(){alert("\uc84c\ub2e4!!!!!!!!"),this.setState((function(e){return{gamer:e.gamer+1}}))}},{key:"clear",value:function(){this.setState({user:0,gamer:0})}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{className:"gameName",children:"\uac00\uc704\ubc14\uc704\ubcf4"})," \uac8c\uc784\uc744 \ud574\ubd05\uc2dc\ub2e4."]}),Object(j.jsx)(v,{player:"gamer",children:this.state.gamer}),Object(j.jsx)("div",{className:"gamerValue",children:this.state.values[this.state.show].emoji}),Object(j.jsx)(v,{player:"user",children:this.state.user}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)(b,{onClick:this.checkResult.bind(this,0),children:this.state.values[0].emoji}),Object(j.jsx)(b,{onClick:this.checkResult.bind(this,1),children:this.state.values[1].emoji}),Object(j.jsx)(b,{onClick:this.checkResult.bind(this,2),children:this.state.values[2].emoji}),Object(j.jsx)(b,{onClick:this.clear,children:"\ud83d\udd04"})]})]})}}]),s}(n.a.Component));s(17);i.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.914c1d27.chunk.js.map
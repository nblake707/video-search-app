(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),o=a(8),s=a.n(o),l=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),h=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",onChange:this.onInputChange,value:this.state.term}))))}}]),t}(i.a.Component),f=a(17),b=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:5,type:"video",key:"".concat("AIzaSyChD6tn8GWqzOgD--FCJkTAdl0OmaJM2v4")}}),E=(a(42),function(e){var t=e.video,a=e.onVideoSelect;return(i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{className:"ui image",alt:t.snippet.description,src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title))))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(E,{key:e.id.videoId,video:e,onVideoSelect:a})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},g=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"videoPlayer",src:a})),i.a.createElement("div",{className:"ui segments"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("Urban Gardening")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(h,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(g,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(S,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(y,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.36a5ebfa.chunk.js.map
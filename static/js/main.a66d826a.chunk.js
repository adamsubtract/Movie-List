(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(17),n(7)),l=n(8),s=n(1),u=n(2),d=n(5),m=n(3),b=n(6),f=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var h=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var p=n(4),v=n.n(p),g=function(e){var t=e.itemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChange,o=Math.ceil(t/n);if(1===o)return null;var i=v.a.range(1,o+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},i.map(function(e){return r.a.createElement("li",{key:e,className:e===a?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){return c(e)}},e))})))};var k=function(e){var t=e.items,n=e.textProperty,a=e.valueProperty,c=e.onItemSelect,o=e.selectedItem;return r.a.createElement("ul",{className:"list-group"},t.map(function(e){return r.a.createElement("li",{onClick:function(){return c(e)},key:e[a],className:e===o?"list-group-item active":"list-group-item"},e[n])}))};k.defaultProps={textProperty:"name",valueProperty:"_id"};var y=k,S=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).raiseSort=function(e){var t=Object(i.a)({},n.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"acs":(t.path=e,t.order="asc"),n.props.onSort(t)},n.renderSortIcon=function(e){var t=n.props.sortColumn;return e.path!==t.path?null:"asc"===t.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map(function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))})))}}]),t}(a.Component),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).renderCell=function(e,t){return t.content?t.content(e):v.a.get(e,t.path)},n.createKey=function(e,t){return e._id+(t.path||t.key)},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return r.a.createElement("tbody",null,n.map(function(t){return r.a.createElement("tr",{key:t._id},a.map(function(n){return r.a.createElement("td",{key:e.createKey(t,n)},e.renderCell(t,n))}))}))}}]),t}(a.Component),_=function(e){var t=e.columns,n=e.sortColumn,a=e.onSort,c=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(C,{columns:t,sortColumn:n,onSort:a}),r.a.createElement(E,{columns:t,data:c}))},O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).columns=[{path:"title",label:"Title"},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"Like",content:function(e){return r.a.createElement(S,{liked:e.liked,onClick:function(){return n.props.onLike(e)}})}},{key:"delete",content:function(e){return r.a.createElement("button",{onClick:function(){return n.props.onDelete(e)},className:"btn-danger btn-sm"},"Delete")}}],n.raiseSort=function(e){var t=Object(i.a)({},n.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"acs":(t.path=e,t.order="asc"),n.props.onSort(t)},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.sortColumn,a=e.onSort;return r.a.createElement(_,{columns:this.columns,data:t,sortColumn:n,onSort:a})}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],genres:[],currentPage:1,pageSize:4,sortColumn:{path:"title",order:"asc"}},n.handleDelete=function(e){var t=n.state.movies.filter(function(t){return t._id!==e._id});n.setState({movies:t})},n.handleLike=function(e){var t=Object(l.a)(n.state.movies),a=t.indexOf(e);t[a]=Object(i.a)({},t[a]),t[a].liked=!t[a].liked,n.setState({movies:t})},n.handlePageChange=function(e){n.setState({currentPage:e})},n.handleGenreSelect=function(e){n.setState({selectedGenre:e,currentPage:1})},n.handleSort=function(e){n.setState({sortColumn:e})},n.getPageData=function(){var e=n.state,t=e.pageSize,a=e.currentPage,r=e.movies,c=e.selectedGenre,o=e.sortColumn,i=c&&c._id?r.filter(function(e){return e.genre._id===c._id}):r,l=function(e,t,n){var a=(t-1)*n;return v()(e).slice(a).take(n).take(n).value()}(v.a.orderBy(i,[o.path],[o.order]),a,t);return{totalCount:i.length,data:l}},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=[{_id:"",name:"All Genres"}].concat(Object(l.a)(f.filter(function(e){return e})));this.setState({movies:h,genres:e})}},{key:"render",value:function(){var e=this.state.movies.length,t=this.state,n=t.pageSize,a=t.currentPage,c=t.sortColumn;if(0===e)return r.a.createElement("p",null,"There are no movies in the datatbase");var o=this.getPageData(),i=o.totalCount,l=o.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(y,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Showing ",i," movies in the database."),r.a.createElement(O,{movies:l,sortColumn:c,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),r.a.createElement(g,{itemsCount:i,pageSize:n,currentPage:a,onPageChange:this.handlePageChange})))}}]),t}(a.Component);n(19);var R=function(){return r.a.createElement("main",{className:"container"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(20),n(21);o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.a66d826a.chunk.js.map
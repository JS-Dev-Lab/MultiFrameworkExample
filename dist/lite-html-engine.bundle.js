(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{4:function(e,t,n){"use strict";n.r(t),n.d(t,"UiEngine",(function(){return s}));var r=n(15);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var s=function(){function e(t,n){c(this,e),this._template=n,this._element=t}return f(e,[{key:"initialRender",value:function(e){return new l(i({},e),this._element,this._template)}}]),e}(),l=function(){function e(t,n,u){c(this,e),this._state=Object.freeze(t),this._element=n,this._template=u,window.state=this._state,Object(r.b)(u(this._state),n)}return f(e,[{key:"update",value:function(t){var n=i({},this._state);return t(n),new e(n,this._element,this._template)}}]),e}()},9:function(e,t,n){"use strict";n.r(t);var r=n(4),u=n(15);function i(){var e=s(["<li>","</li>"]);return i=function(){return e},e}function o(){var e=s(["<ul>\n      ","\n      </ul>"]);return o=function(){return e},e}function c(){var e=s(["<p>","</p>"]);return c=function(){return e},e}function a(){var e=s(["<p>loading...</p>"]);return a=function(){return e},e}function f(){var e=s(["\n    <h1>","</h1>\n    <form @submit=",'>\n      <input type="text" name="query" value="','"/>\n      <button>Search</button>\n    </form>\n    ',""]);return f=function(){return e},e}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"engine",(function(){return p}));var l=document.getElementById("app"),p=new r.UiEngine(l,(function(e){var t=e.commands,n=e.name,r=e.status,s=e.lastSearch,l=e.result;return Object(u.a)(f(),n,(function(e){t.load(e.target.query.value),e.preventDefault()}),s,"loading"===r?Object(u.a)(a()):"found result"!==r?Object(u.a)(c(),r||""):Object(u.a)(o(),l._embedded.quotes.map((function(e){return Object(u.a)(i(),e.value)}))))}))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWV3b3Jrcy9saXRlLWh0bWwvaW5mcmEvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXdvcmtzL2xpdGUtaHRtbC9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1ld29ya3MvbGl0ZS1odG1sL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbIlVpRW5naW5lIiwiZWxlbWVudCIsInRlbXBsYXRlIiwidGhpcyIsIl90ZW1wbGF0ZSIsIl9lbGVtZW50Iiwic3RhdGUiLCJWaWV3IiwiX3N0YXRlIiwiT2JqZWN0IiwiZnJlZXplIiwid2luZG93IiwicmVuZGVyIiwidXBkYXRlciIsIm5ld1N0YXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVuZ2luZSIsImNvbW1hbmRzIiwibmFtZSIsInN0YXR1cyIsImxhc3RTZWFyY2giLCJyZXN1bHQiLCJodG1sIiwiZXZlbnQiLCJsb2FkIiwidGFyZ2V0IiwicXVlcnkiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiX2VtYmVkZGVkIiwicXVvdGVzIiwibWFwIiwicXVvdGUiXSwibWFwcGluZ3MiOiI4b0NBRU1BLEUsV0FDSixXQUFZQyxFQUFTQyxHQUFVLFVBQzdCQyxLQUFLQyxVQUFZRixFQUNqQkMsS0FBS0UsU0FBV0osRSxnREFHSkssR0FDWixPQUFPLElBQUlDLEVBQUosS0FBY0QsR0FBU0gsS0FBS0UsU0FBVUYsS0FBS0MsZSxLQUloREcsRSxXQUNKLFdBQVlELEVBQU9MLEVBQVNDLEdBQVUsVUFDcENDLEtBQUtLLE9BQVNDLE9BQU9DLE9BQU9KLEdBQzVCSCxLQUFLRSxTQUFXSixFQUNoQkUsS0FBS0MsVUFBWUYsRUFDakJTLE9BQU9MLE1BQVFILEtBQUtLLE9BQ3BCSSxZQUFPVixFQUFTQyxLQUFLSyxRQUFTUCxHLHlDQUd6QlksR0FDTCxJQUFNQyxFQUFXLEVBQUgsR0FBUVgsS0FBS0ssUUFFM0IsT0FEQUssRUFBUUMsR0FDRCxJQUFJUCxFQUFLTyxFQUFVWCxLQUFLRSxTQUFVRixLQUFLQyxlLCtxQkN6QmxELHVDQUdBLElBQU1ILEVBQVVjLFNBQVNDLGVBQWUsT0FDbENDLEVBQVMsSUFBSWpCLFdBQVNDLEdDRjVCLFlBQWtFLElBQTlDaUIsRUFBOEMsRUFBOUNBLFNBQVVDLEVBQW9DLEVBQXBDQSxLQUFNQyxFQUE4QixFQUE5QkEsT0FBUUMsRUFBc0IsRUFBdEJBLFdBQVlDLEVBQVUsRUFBVkEsT0FLdEQsT0FBT0MsWUFBUCxJQUNRSixHQUxPLFNBQUNLLEdBQ2ROLEVBQVNPLEtBQUtELEVBQU1FLE9BQU9DLE1BQU1DLE9BQ2pDSixFQUFNSyxtQkFLcUNSLEVBRzlCLFlBQVhELEVBQXVCRyxZQUF2QixLQUNZLGlCQUFYSCxFQUE2QkcsWUFBN0IsSUFBdUNILEdBQVUsSUFDaERHLFlBREQsSUFFQ0QsRUFBT1EsVUFBVUMsT0FBT0MsS0FBSSxTQUFBQyxHQUFLLE9BQUlWLFlBQUosSUFBZVUsRUFBTUwiLCJmaWxlIjoibGl0ZS1odG1sLWVuZ2luZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlbmRlcn0gZnJvbSAnbGl0LWh0bWwnO1xyXG5cclxuY2xhc3MgVWlFbmdpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRlbXBsYXRlKSB7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsUmVuZGVyKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gbmV3IFZpZXcoeyAuLi5zdGF0ZSB9LCB0aGlzLl9lbGVtZW50LCB0aGlzLl90ZW1wbGF0ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuICBjb25zdHJ1Y3RvcihzdGF0ZSwgZWxlbWVudCwgdGVtcGxhdGUpIHtcclxuICAgIHRoaXMuX3N0YXRlID0gT2JqZWN0LmZyZWV6ZShzdGF0ZSk7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICB3aW5kb3cuc3RhdGUgPSB0aGlzLl9zdGF0ZTtcclxuICAgIHJlbmRlcih0ZW1wbGF0ZSh0aGlzLl9zdGF0ZSksIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHVwZGF0ZXIpIHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi50aGlzLl9zdGF0ZSB9O1xyXG4gICAgdXBkYXRlcihuZXdTdGF0ZSk7XHJcbiAgICByZXR1cm4gbmV3IFZpZXcobmV3U3RhdGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RlbXBsYXRlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFVpRW5naW5lIH07XHJcbiIsImltcG9ydCB7IFVpRW5naW5lIH0gZnJvbSBcIi4vaW5mcmEvZW5naW5lXCI7XHJcbmltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcclxuXHJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3QgZW5naW5lID0gbmV3IFVpRW5naW5lKGVsZW1lbnQsIHRlbXBsYXRlKTtcclxuXHJcbmV4cG9ydCB7IGVuZ2luZSB9O1xyXG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWh0bWwnO1xyXG5cclxuZnVuY3Rpb24gdGVtcGxhdGUoeyBjb21tYW5kcywgbmFtZSwgc3RhdHVzLCBsYXN0U2VhcmNoLCByZXN1bHQgfSkge1xyXG4gIGNvbnN0IHN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgY29tbWFuZHMubG9hZChldmVudC50YXJnZXQucXVlcnkudmFsdWUpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG4gIHJldHVybiBodG1sYFxyXG4gICAgPGgxPiR7bmFtZX08L2gxPlxyXG4gICAgPGZvcm0gQHN1Ym1pdD0ke3N1Ym1pdH0+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJxdWVyeVwiIHZhbHVlPVwiJHtsYXN0U2VhcmNofVwiLz5cclxuICAgICAgPGJ1dHRvbj5TZWFyY2g8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgICR7c3RhdHVzID09PSAnbG9hZGluZycgPyBodG1sYDxwPmxvYWRpbmcuLi48L3A+YCA6XHJcbiAgICAgIChzdGF0dXMgIT09ICdmb3VuZCByZXN1bHQnKSA/IGh0bWxgPHA+JHtzdGF0dXMgfHwgJyd9PC9wPmAgOlxyXG4gICAgICAgIGh0bWxgPHVsPlxyXG4gICAgICAke3Jlc3VsdC5fZW1iZWRkZWQucXVvdGVzLm1hcChxdW90ZSA9PiBodG1sYDxsaT4ke3F1b3RlLnZhbHVlfTwvbGk+YCl9XHJcbiAgICAgIDwvdWw+YFxyXG4gICAgfWA7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRlbXBsYXRlIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
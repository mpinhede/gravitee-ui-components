import{LitElement as t,html as e}from"lit-element";import{dispatchCustomEvent as i}from"../lib/events";import{repeat as r}from"lit-html/directives/repeat";import"../atoms/gv-nav-link";export class GvNav extends t{static get properties(){return{routes:{type:Array}}}t({detail:{title:t}}){this.routes=this.routes.map(e=>Promise.resolve(e).then(e=>(e.title===t?(e.isActive=!0,i(this,"change",e)):delete e.isActive,e)))}render(){return e`<nav>${r(this.routes,t=>t,t=>e`<gv-nav-link @gv-nav-link_click="${this.t}" .route="${t}"></gv-nav-link>`)}</nav>`}}window.customElements.define("gv-nav",GvNav);
//# sourceMappingURL=gv-nav.js.map
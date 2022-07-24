"use strict";(self.webpackChunkFrontEnd=self.webpackChunkFrontEnd||[]).push([[457],{7457:(X,u,c)=>{c.r(u),c.d(u,{ProtectedModule:()=>E});var a=c(9808),r=c(3476),t=c(1223);const f=[{routeLink:"inicio",icon:"fal fa-home",label:"Inicio"},{routeLink:"documento/busqueda",icon:"fal fa-file",label:"Documentos"},{routeLink:"entregas",icon:"fal fa-file-import",label:"Entregas"},{routeLink:"citas",icon:"fal fa-file-check",label:"Citas"},{routeLink:"administrarusuario",icon:"fal fa-user",label:"Administrar Usuarios"},{routeLink:"calendario",icon:"fal fa-calendar-alt",label:"Calendario"},{routeLink:"propuestas",icon:"fal fa-file-powerpoint",label:"Propuestas"},{routeLink:"perfil",icon:"fal fa-user-circle",label:"Perfil"},{routeLink:"notificaciones",icon:"fal fa-bell-exclamation",label:"Notificaciones"}];var h=c(6518);function _(e,n){1&e&&(t.TgZ(0,"div",11),t._uU(1,"Angular"),t.qZA())}function Z(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){return t.CHM(o),t.oxw().closeSidenav()}),t._UZ(1,"i",13),t.qZA()}}function v(e,n){if(1&e&&(t.TgZ(0,"span",17),t._uU(1),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.Oqu(o.label)}}const C=function(e){return[e]},T=function(){return{exact:!0}};function A(e,n){if(1&e&&(t.TgZ(0,"li",14)(1,"a",15),t._UZ(2,"i",16),t.YNc(3,v,2,1,"span",10),t.qZA()()),2&e){const o=n.$implicit,i=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(5,C,o.routeLink))("routerLinkActiveOptions",t.DdM(7,T)),t.xp6(1),t.Tol(o.icon),t.xp6(1),t.Q6J("ngIf",i.collapsed)}}function b(e,n){1&e&&(t.TgZ(0,"span",17),t._uU(1,"Cerrar sesion"),t.qZA())}let U=(()=>{class e{constructor(o,i){this.router=o,this.AuthService=i,this.opened=!1,this.onToggleSideNav=new t.vpe,this.collapsed=!1,this.screenWidth=0,this.navData=f}get usuario(){return this.AuthService.usuario}ngOnInit(){this.screenWidth=window.innerWidth}logout(){this.router.navigateByUrl("/auth"),this.AuthService.logout()}toogleSidebar(){this.opened=!this.opened}toogleCollapse(){this.collapsed=!this.collapsed,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})}closeSidenav(){this.collapsed=!1,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.F0),t.Y36(h.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main"]],outputs:{onToggleSideNav:"onToggleSideNav"},decls:12,vars:5,consts:[[1,"sidenav",3,"ngClass"],[1,"logo-container"],[1,"logo",3,"click"],["class","logo-text",4,"ngIf"],["class","btn-close",3,"click",4,"ngIf"],[1,"sidenav-nav"],["class","sidenav-nav-item",4,"ngFor","ngForOf"],[1,"sidenav-nav-item",3,"click"],[1,"sidenav-nav-link"],[1,"sidenav-link-icon","fal","fa-power-off"],["class","sidenav-link-text",4,"ngIf"],[1,"logo-text"],[1,"btn-close",3,"click"],[1,"fal","fa-times","close-icon"],[1,"sidenav-nav-item"],["routerLinkActive","active",1,"sidenav-nav-link",3,"routerLink","routerLinkActiveOptions"],[1,"sidenav-link-icon"],[1,"sidenav-link-text"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return i.toogleCollapse()}),t._uU(3,"A"),t.qZA(),t.YNc(4,_,2,0,"div",3),t.YNc(5,Z,2,0,"button",4),t.qZA(),t.TgZ(6,"ul",5),t.YNc(7,A,4,8,"li",6),t.TgZ(8,"li",7),t.NdJ("click",function(){return i.logout()}),t.TgZ(9,"a",8),t._UZ(10,"i",9),t.YNc(11,b,2,0,"span",10),t.qZA()()()()),2&o&&(t.Q6J("ngClass",i.collapsed?"sidenav-collapsed":""),t.xp6(4),t.Q6J("ngIf",i.collapsed),t.xp6(1),t.Q6J("ngIf",i.collapsed),t.xp6(2),t.Q6J("ngForOf",i.navData),t.xp6(4),t.Q6J("ngIf",i.collapsed))},directives:[a.mk,a.O5,a.sg,r.yS,r.Od],encapsulation:2}),e})(),k=(()=>{class e{constructor(){this.collapsed=!1,this.screenWidth=0}ngOnInit(){}getBodyClass(){let o="";return this.collapsed&&this.screenWidth>768?o="inicio-trimmed":this.collapsed&&this.screenWidth<=768&&this.screenWidth>0&&(o="inicio-md-screen"),""}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-body"]],inputs:{collapsed:"collapsed",screenWidth:"screenWidth"},decls:2,vars:1,consts:[[1,"inicio",3,"ngClass"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA()),2&o&&t.Q6J("ngClass",i.getBodyClass())},directives:[a.mk,r.lC],encapsulation:2}),e})(),q=(()=>{class e{constructor(){this.isSideNavCollapsed=!1,this.screenWidth=0}onToggleSideNav(o){this.screenWidth=o.screenWidth,this.isSideNavCollapsed=o.collapsed}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:4,vars:2,consts:[[3,"onToggleSideNav"],[3,"collapsed","screenWidth"]],template:function(o,i){1&o&&(t.TgZ(0,"div")(1,"div")(2,"app-main",0),t.NdJ("onToggleSideNav",function(p){return i.onToggleSideNav(p)}),t.qZA(),t._UZ(3,"app-body",1),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("collapsed",i.isSideNavCollapsed)("screenWidth",i.screenWidth))},directives:[U,k],encapsulation:2}),e})(),x=(()=>{class e{constructor(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inicio"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"h1"),t._uU(1," INICIO "),t.qZA())},encapsulation:2}),e})(),y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-administrar-usuario"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"administrar-usuario works!"),t.qZA())},encapsulation:2}),e})(),w=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-calendario"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"calendario works!"),t.qZA())},encapsulation:2}),e})(),N=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-citas"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"citas works!"),t.qZA())},encapsulation:2}),e})(),S=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-entregas"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"entregas works!"),t.qZA())},encapsulation:2}),e})(),F=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-notificaciones"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"notificaciones works!"),t.qZA())},encapsulation:2}),e})(),O=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-perfil"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"perfil works!"),t.qZA())},encapsulation:2}),e})(),I=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-propuestas"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"propuestas works!"),t.qZA())},encapsulation:2}),e})();var d=c(520);let m=(()=>{class e{constructor(o){this.http=o,this.buscadorUrl="http://proyecto-ucen.herokuapp.com/api/auth/bdocumento",this.categoriasUrl="http://proyecto-ucen.herokuapp.com/api/auth/bcategoria"}buscarDocumento(o){return this.http.get(`${this.buscadorUrl}/${o}`)}buscarCategoria(o){return this.http.get(`${this.categoriasUrl}/${o}`)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(d.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function L(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){const p=t.CHM(o).$implicit;return t.oxw().activaCategoria(p)}),t._uU(1),t.ALo(2,"titlecase"),t.qZA()}if(2&e){const o=n.$implicit,i=t.oxw();t.Tol(o===i.categoriaActiva?"btn btn-primary":"btn btn-outline-primary"),t.xp6(1),t.hij(" ",t.lcZ(2,3,o)," ")}}function P(e,n){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"a",13),t._uU(11," Ir... "),t.qZA()(),t.TgZ(12,"td")(13,"a",13),t._uU(14," Ir... "),t.qZA()()()),2&e){const o=n.$implicit,i=n.index;t.xp6(2),t.hij(" ",i+1,""),t.xp6(2),t.hij(" ",o.titulo," "),t.xp6(2),t.hij(" ",o.autor," "),t.xp6(2),t.hij(" ",o.categoria," "),t.xp6(2),t.s9C("href",o.linkB,t.LSH),t.xp6(3),t.s9C("href",o.linkR,t.LSH)}}function M(e,n){if(1&e&&(t.TgZ(0,"div",7)(1,"div",5)(2,"table",11)(3,"thead")(4,"tr")(5,"th"),t._uU(6," # "),t.qZA(),t.TgZ(7,"th"),t._uU(8," Titulo "),t.qZA(),t.TgZ(9,"th"),t._uU(10," Autor "),t.qZA(),t.TgZ(11,"th"),t._uU(12," Categoria"),t.qZA(),t.TgZ(13,"th"),t._uU(14," Biblioteca "),t.qZA(),t.TgZ(15,"th"),t._uU(16," Repositorio "),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,P,15,6,"tr",12),t.qZA()()()()),2&e){const o=t.oxw();t.xp6(18),t.Q6J("ngForOf",o.documentos)}}let B=(()=>{class e{constructor(o){this.paginaService=o,this.categorias=["ia","desarrollo web","desarrollo mobile","base de datos"],this.categoriaActiva="",this.documentos=[]}activaCategoria(o){this.categoriaActiva=o,this.paginaService.buscarCategoria(o).subscribe(i=>this.documentos=i)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-porcategoria"]],decls:24,vars:5,consts:[[1,"row","container","mt-4"],[1,"col-3",2,"width","auto !important"],[1,"list-group"],["routerLink","../busqueda","routerLinkActive","active",1,"list-group-item"],["routerLink","../porcategoria","routerLinkActive","active",1,"list-group-item"],[1,"col"],[2,"margin","5px"],[1,"row"],[3,"class","click",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[3,"click"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3," Busquedas "),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"ul",2)(6,"li",3),t._uU(7,"Buscador"),t.qZA(),t.TgZ(8,"li",4),t._uU(9,"Por categoria"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div")(12,"h2"),t._uU(13," Categorias: "),t.TgZ(14,"small"),t._uU(15),t.ALo(16,"titlecase"),t.qZA()(),t._UZ(17,"hr"),t.TgZ(18,"h5",6),t._uU(19," Seleccione la categoria "),t.qZA(),t.TgZ(20,"div",7)(21,"div",5),t.YNc(22,L,3,5,"button",8),t.YNc(23,M,19,1,"div",9),t.qZA()()()()()),2&o&&(t.xp6(15),t.Oqu(t.lcZ(16,3,i.categoriaActiva)),t.xp6(7),t.Q6J("ngForOf",i.categorias),t.xp6(1),t.Q6J("ngIf",i.documentos.length>0))},directives:[r.rH,r.Od,a.sg,a.O5],pipes:[a.rS],styles:["li[_ngcontent-%COMP%]{cursor:pointer}button[_ngcontent-%COMP%]{margin-right:5px!important}"]}),e})();var s=c(2382);function J(e,n){1&e&&(t.TgZ(0,"div",11),t._uU(1," No se encontro el documento con ese titulo "),t.qZA())}function W(e,n){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"a",15),t._uU(11," Ir... "),t.qZA()(),t.TgZ(12,"td")(13,"a",15),t._uU(14," Ir... "),t.qZA()()()),2&e){const o=n.$implicit,i=n.index;t.xp6(2),t.hij(" ",i+1,""),t.xp6(2),t.hij(" ",o.titulo," "),t.xp6(2),t.hij(" ",o.autor," "),t.xp6(2),t.hij(" ",o.categoria," "),t.xp6(2),t.s9C("href",o.linkB,t.LSH),t.xp6(3),t.s9C("href",o.linkR,t.LSH)}}function Q(e,n){if(1&e&&(t.TgZ(0,"div",12)(1,"div",6)(2,"table",13)(3,"thead")(4,"tr")(5,"th"),t._uU(6," # "),t.qZA(),t.TgZ(7,"th"),t._uU(8," Titulo "),t.qZA(),t.TgZ(9,"th"),t._uU(10," Autor "),t.qZA(),t.TgZ(11,"th"),t._uU(12," Categoria"),t.qZA(),t.TgZ(13,"th"),t._uU(14," Biblioteca "),t.qZA(),t.TgZ(15,"th"),t._uU(16," Repositorio "),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,W,15,6,"tr",14),t.qZA()()()()),2&e){const o=t.oxw();t.xp6(18),t.Q6J("ngForOf",o.documentos)}}const g=function(){return{exact:!0}},Y=[{path:"",component:q,children:[{path:"inicio",component:x},{path:"administrarusuario",component:y},{path:"calendario",component:w},{path:"citas",component:N},{path:"documento/busqueda",component:(()=>{class e{constructor(o){this.paginaService=o,this.hayError=!1,this.termino="",this.documentos=[]}buscar(){this.hayError=!1,console.log(this.termino),this.paginaService.buscarDocumento(this.termino).subscribe(o=>{console.log(o),0===o.length&&(this.hayError=!0),this.documentos=o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-buscador"]],decls:20,vars:7,consts:[[1,"row","container","mt-4"],[1,"col-3",2,"width","auto !important"],[1,"list-group"],["routerLink","../busqueda","routerLinkActive","active",1,"list-group-item",3,"routerLinkActiveOptions"],["routerLink","../porcategoria","routerLinkActive","active",1,"list-group-item",3,"routerLinkActiveOptions"],[1,"col-8"],[1,"col"],["autocomplete","off",3,"ngSubmit"],["type","text","name","termino","placeholder","Buscar documento por titulo",1,"form-control",3,"ngModel","ngModelChange"],["class","alert alert-danger",4,"ngIf"],["class","row",4,"ngIf"],[1,"alert","alert-danger"],[1,"row"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3," Busquedas "),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"ul",2)(6,"li",3),t._uU(7,"Buscador"),t.qZA(),t.TgZ(8,"li",4),t._uU(9,"Por categoria"),t.qZA()()(),t.TgZ(10,"div",5)(11,"h2"),t._uU(12," Buscador "),t.qZA(),t._UZ(13,"hr"),t.TgZ(14,"div",6)(15,"form",7),t.NdJ("ngSubmit",function(){return i.buscar()}),t.TgZ(16,"input",8),t.NdJ("ngModelChange",function(p){return i.termino=p}),t.qZA()()(),t._UZ(17,"hr"),t.YNc(18,J,2,0,"div",9),t.YNc(19,Q,19,1,"div",10),t.qZA()()),2&o&&(t.xp6(6),t.Q6J("routerLinkActiveOptions",t.DdM(5,g)),t.xp6(2),t.Q6J("routerLinkActiveOptions",t.DdM(6,g)),t.xp6(8),t.Q6J("ngModel",i.termino),t.xp6(2),t.Q6J("ngIf",i.hayError),t.xp6(1),t.Q6J("ngIf",i.documentos.length>0))},directives:[r.rH,r.Od,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,a.O5,a.sg],styles:["li[_ngcontent-%COMP%]{cursor:pointer}"]}),e})()},{path:"documento/porcategoria",component:B},{path:"entregas",component:S},{path:"notificaciones",component:F},{path:"perfil",component:O},{path:"propuestas",component:I},{path:"**",redirectTo:"inicio"}]}];let D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.Bz.forChild(Y)],r.Bz]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,D,d.JF,s.u5]]}),e})()}}]);
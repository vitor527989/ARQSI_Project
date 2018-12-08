(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_encomenda_encomenda_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/encomenda/encomenda.component */ "./src/app/view/encomenda/encomenda.component.ts");
/* harmony import */ var _view_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/sobre/sobre.component */ "./src/app/view/sobre/sobre.component.ts");
/* harmony import */ var _view_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/catalogo/catalogo.component */ "./src/app/view/catalogo/catalogo.component.ts");
/* harmony import */ var _view_produto_produto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/produto/produto.component */ "./src/app/view/produto/produto.component.ts");
/* harmony import */ var _view_editar_produto_editar_produto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/editar-produto/editar-produto.component */ "./src/app/view/editar-produto/editar-produto.component.ts");
/* harmony import */ var _view_criar_encomenda_criar_encomenda_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/criar-encomenda/criar-encomenda.component */ "./src/app/view/criar-encomenda/criar-encomenda.component.ts");
/* harmony import */ var _view_criar_produto_criar_produto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/criar-produto/criar-produto.component */ "./src/app/view/criar-produto/criar-produto.component.ts");
/* harmony import */ var _view_criar_item_produto_criar_item_produto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/criar-item-produto/criar-item-produto.component */ "./src/app/view/criar-item-produto/criar-item-produto.component.ts");
/* harmony import */ var _view_trata_filhos_trata_filhos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/trata-filhos/trata-filhos.component */ "./src/app/view/trata-filhos/trata-filhos.component.ts");
/* harmony import */ var _view_listar_item_prod_listar_item_prod_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/listar-item-prod/listar-item-prod.component */ "./src/app/view/listar-item-prod/listar-item-prod.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'encomenda', component: _view_encomenda_encomenda_component__WEBPACK_IMPORTED_MODULE_2__["EncomendaComponent"] },
    { path: 'sobre', component: _view_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_3__["SobreComponent"] },
    { path: 'catalogo', component: _view_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_4__["CatalogoComponent"] },
    { path: 'criar-encomenda', component: _view_criar_encomenda_criar_encomenda_component__WEBPACK_IMPORTED_MODULE_7__["CriarEncomendaComponent"] },
    { path: 'editar-produto', component: _view_editar_produto_editar_produto_component__WEBPACK_IMPORTED_MODULE_6__["EditarProdutoComponent"] },
    { path: 'criar-produto', component: _view_criar_produto_criar_produto_component__WEBPACK_IMPORTED_MODULE_8__["CriarProdutoComponent"] },
    { path: 'produto', component: _view_produto_produto_component__WEBPACK_IMPORTED_MODULE_5__["ProdutoComponent"] },
    { path: 'criar-item-produto', component: _view_criar_item_produto_criar_item_produto_component__WEBPACK_IMPORTED_MODULE_9__["CriarItemProdutoComponent"] },
    { path: 'trata-filhos', component: _view_trata_filhos_trata_filhos_component__WEBPACK_IMPORTED_MODULE_10__["TrataFilhosComponent"] },
    { path: 'listar-item-prod', component: _view_listar_item_prod_listar_item_prod_component__WEBPACK_IMPORTED_MODULE_11__["ListarItemProdComponent"] },
    { path: '', redirectTo: '/encomenda', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: rgb(131, 63, 14);\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\nli a, .dropbtn {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover, .dropdown:hover .dropbtn {\r\n    background-color: red;\r\n}\r\n\r\nli.dropdown {\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUNBQW1DO0NBQ3RDOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7O0FBRUQsMkJBQTJCLHlCQUF5QixDQUFDOztBQUVyRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgNjMsIDE0KTtcclxufVxyXG5cclxubGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxufVxyXG5cclxubGkgYSwgLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5saS5kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjF9XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n\r\n<img [src]=\"'../assets/img/closet.jpg'\" alt=\"Closet\" style=\"width:100%\">\r\n<ul>\r\n    <li><a routerLink='/encomenda'>Encomendas</a></li>\r\n    <li><a routerLink='/produto'>Catalogo</a></li>\r\n    <li><a routerLink='/criar-encomenda'>Criar Encomenda</a></li>\r\n    <li><a routerLink=\"/listar-item-prod\">Listar Itens Produto</a></li>\r\n    <li><a routerLink='/sobre'>Sobre</a></li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SiCFrontEnd';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _view_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/catalogo/catalogo.component */ "./src/app/view/catalogo/catalogo.component.ts");
/* harmony import */ var _view_produto_produto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/produto/produto.component */ "./src/app/view/produto/produto.component.ts");
/* harmony import */ var _view_componente_componente_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/componente/componente.component */ "./src/app/view/componente/componente.component.ts");
/* harmony import */ var _view_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/sobre/sobre.component */ "./src/app/view/sobre/sobre.component.ts");
/* harmony import */ var _view_encomenda_encomenda_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/encomenda/encomenda.component */ "./src/app/view/encomenda/encomenda.component.ts");
/* harmony import */ var _view_editar_produto_editar_produto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/editar-produto/editar-produto.component */ "./src/app/view/editar-produto/editar-produto.component.ts");
/* harmony import */ var _view_criar_encomenda_criar_encomenda_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/criar-encomenda/criar-encomenda.component */ "./src/app/view/criar-encomenda/criar-encomenda.component.ts");
/* harmony import */ var _view_criar_produto_criar_produto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/criar-produto/criar-produto.component */ "./src/app/view/criar-produto/criar-produto.component.ts");
/* harmony import */ var _view_criar_item_produto_criar_item_produto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/criar-item-produto/criar-item-produto.component */ "./src/app/view/criar-item-produto/criar-item-produto.component.ts");
/* harmony import */ var _view_trata_filhos_trata_filhos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/trata-filhos/trata-filhos.component */ "./src/app/view/trata-filhos/trata-filhos.component.ts");
/* harmony import */ var _view_listar_item_prod_listar_item_prod_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view/listar-item-prod/listar-item-prod.component */ "./src/app/view/listar-item-prod/listar-item-prod.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _view_catalogo_catalogo_component__WEBPACK_IMPORTED_MODULE_6__["CatalogoComponent"],
                _view_produto_produto_component__WEBPACK_IMPORTED_MODULE_7__["ProdutoComponent"],
                _view_componente_componente_component__WEBPACK_IMPORTED_MODULE_8__["ComponenteComponent"],
                _view_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_9__["SobreComponent"],
                _view_encomenda_encomenda_component__WEBPACK_IMPORTED_MODULE_10__["EncomendaComponent"],
                _view_editar_produto_editar_produto_component__WEBPACK_IMPORTED_MODULE_11__["EditarProdutoComponent"],
                _view_criar_produto_criar_produto_component__WEBPACK_IMPORTED_MODULE_13__["CriarProdutoComponent"],
                _view_criar_encomenda_criar_encomenda_component__WEBPACK_IMPORTED_MODULE_12__["CriarEncomendaComponent"],
                _view_criar_item_produto_criar_item_produto_component__WEBPACK_IMPORTED_MODULE_14__["CriarItemProdutoComponent"],
                _view_trata_filhos_trata_filhos_component__WEBPACK_IMPORTED_MODULE_15__["TrataFilhosComponent"],
                _view_listar_item_prod_listar_item_prod_component__WEBPACK_IMPORTED_MODULE_16__["ListarItemProdComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/itemProduto.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/itemProduto.model.ts ***!
  \********************************************/
/*! exports provided: ItemProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemProduto", function() { return ItemProduto; });
var ItemProduto = /** @class */ (function () {
    function ItemProduto(nome, desc, preco, materiais, categoria, categoria_pai, comp, larg, alt, nomeProdPai) {
        this.nome = nome;
        this.desc = desc;
        this.preco = preco;
        this.materiais = materiais;
        this.categoria = categoria;
        this.categoria_pai = categoria_pai;
        this.comp = comp;
        this.larg = larg;
        this.alt = alt;
        this.nomeProdPai = nomeProdPai;
    }
    return ItemProduto;
}());



/***/ }),

/***/ "./src/app/service/encomenda.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/encomenda.service.ts ***!
  \**********************************************/
/*! exports provided: EncomendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncomendaService", function() { return EncomendaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncomendaService = /** @class */ (function () {
    function EncomendaService(http) {
        this.http = http;
        this.uriHeroku = 'https://sicencomendas-vitor-telmo.herokuapp.com/api/Encomenda/';
    }
    EncomendaService.prototype.getEncomendas = function () {
        return this.http.get(this.uriHeroku);
    };
    EncomendaService.prototype.getEncomenda = function (id) {
        return this.http.get(this.uriHeroku + id);
    };
    EncomendaService.prototype.insertEncomenda = function (encomenda) {
        return this.http.post(this.uriHeroku, encomenda);
    };
    EncomendaService.prototype.updateEncomenda = function (encomenda) {
        return this.http.put(this.uriHeroku, encomenda);
    };
    EncomendaService.prototype.deleteEncomenda = function (id) {
        return this.http.delete(this.uriHeroku + id);
    };
    EncomendaService.prototype.getItensEncomenda = function (id) {
        return this.http.get(this.uriHeroku + id + '/Itens');
    };
    EncomendaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EncomendaService);
    return EncomendaService;
}());



/***/ }),

/***/ "./src/app/service/item-prod-transfer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/item-prod-transfer.service.ts ***!
  \*******************************************************/
/*! exports provided: ItemProdTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemProdTransferService", function() { return ItemProdTransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemProdTransferService = /** @class */ (function () {
    function ItemProdTransferService() {
    }
    ItemProdTransferService.prototype.seleccionaItemProd = function (itpr, id, u) {
        this.idProdOriginal = id;
        this.ip = itpr;
        this.utilizador = u;
    };
    ItemProdTransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ItemProdTransferService);
    return ItemProdTransferService;
}());



/***/ }),

/***/ "./src/app/service/prod-user-transfer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/prod-user-transfer.service.ts ***!
  \*******************************************************/
/*! exports provided: ProdutoUserTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoUserTransferService", function() { return ProdutoUserTransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProdutoUserTransferService = /** @class */ (function () {
    function ProdutoUserTransferService() {
        this.matEscolhido = [];
    }
    ProdutoUserTransferService.prototype.seleccionaProdUser = function (p, u, m) {
        this.prodEscolhido = p;
        this.userEscolhido = u;
        this.matEscolhido = m;
    };
    ProdutoUserTransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProdutoUserTransferService);
    return ProdutoUserTransferService;
}());



/***/ }),

/***/ "./src/app/service/produto-transfer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/produto-transfer.service.ts ***!
  \*****************************************************/
/*! exports provided: ProdutoTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoTransferService", function() { return ProdutoTransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProdutoTransferService = /** @class */ (function () {
    function ProdutoTransferService() {
    }
    ProdutoTransferService.prototype.seleccionaProd = function (p) {
        this.escolhido = p;
    };
    ProdutoTransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProdutoTransferService);
    return ProdutoTransferService;
}());



/***/ }),

/***/ "./src/app/service/produto.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/produto.service.ts ***!
  \********************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdutoService = /** @class */ (function () {
    function ProdutoService(http) {
        this.http = http;
        this.uriAzure = 'http://sic-api.azurewebsites.net/api/';
    }
    ProdutoService.prototype.getProdutos = function () {
        return this.http.get(this.uriAzure + "Produto/");
    };
    ProdutoService.prototype.getProduto = function (id) {
        return this.http.get(this.uriAzure + "Produto/" + id);
    };
    ProdutoService.prototype.insertProduto = function (ProdutoPost) {
        return this.http.post(this.uriAzure + "Produto/", ProdutoPost);
    };
    ProdutoService.prototype.updateProduto = function (ProdutoPost) {
        return this.http.put(this.uriAzure + "Produto/" + ProdutoPost.id, ProdutoPost);
    };
    ProdutoService.prototype.deleteProduto = function (id) {
        return this.http.delete(this.uriAzure + "Produto/" + id);
    };
    ProdutoService.prototype.getFilhos = function (id) {
        return this.http.get(this.uriAzure + "Produto/" + id + "/Partes/");
    };
    ProdutoService.prototype.getMateriais = function () {
        return this.http.get(this.uriAzure + "Material/");
    };
    ProdutoService.prototype.postProdutoMaterial = function (produtoMaterial) {
        return this.http.post(this.uriAzure + "ProdutoMaterial/", produtoMaterial);
    };
    ProdutoService.prototype.getProdutosMateriais = function () {
        return this.http.get(this.uriAzure + "ProdutoMaterial/");
    };
    ProdutoService.prototype.eliminarProdutoMaterial = function (id) {
        return this.http.delete(this.uriAzure + "ProdutoMaterial/" + id);
    };
    ProdutoService.prototype.createNovaDimensao = function (dimensaoPost) {
        return this.http.post(this.uriAzure + "Dimensao/", dimensaoPost);
    };
    ProdutoService.prototype.createNovaMedida = function (medida) {
        return this.http.post(this.uriAzure + "Medida/", medida);
    };
    ProdutoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProdutoService);
    return ProdutoService;
}());



/***/ }),

/***/ "./src/app/service/utilizador.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/utilizador.service.ts ***!
  \***********************************************/
/*! exports provided: UtilizadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilizadorService", function() { return UtilizadorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilizadorService = /** @class */ (function () {
    function UtilizadorService(http) {
        this.http = http;
        this.uriAzure = 'http://sic-api.azurewebsites.net/api/Utilizador/';
    }
    UtilizadorService.prototype.getUtilizadores = function () {
        return this.http.get(this.uriAzure);
    };
    UtilizadorService.prototype.getUtilizador = function (id) {
        return this.http.get(this.uriAzure + id);
    };
    UtilizadorService.prototype.insertUtilizador = function (Utilizador) {
        return this.http.post(this.uriAzure, Utilizador);
    };
    UtilizadorService.prototype.updateUtilizador = function (Utilizador) {
        return this.http.put(this.uriAzure, Utilizador);
    };
    UtilizadorService.prototype.deleteUtilizador = function (id) {
        return this.http.delete(this.uriAzure + id);
    };
    UtilizadorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UtilizadorService);
    return UtilizadorService;
}());



/***/ }),

/***/ "./src/app/view/catalogo/catalogo.component.css":
/*!******************************************************!*\
  !*** ./src/app/view/catalogo/catalogo.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY2F0YWxvZ28vY2F0YWxvZ28uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/catalogo/catalogo.component.html":
/*!*******************************************************!*\
  !*** ./src/app/view/catalogo/catalogo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  catalogo works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/catalogo/catalogo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/view/catalogo/catalogo.component.ts ***!
  \*****************************************************/
/*! exports provided: CatalogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoComponent", function() { return CatalogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogoComponent = /** @class */ (function () {
    function CatalogoComponent() {
    }
    CatalogoComponent.prototype.ngOnInit = function () {
    };
    CatalogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalogo',
            template: __webpack_require__(/*! ./catalogo.component.html */ "./src/app/view/catalogo/catalogo.component.html"),
            styles: [__webpack_require__(/*! ./catalogo.component.css */ "./src/app/view/catalogo/catalogo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CatalogoComponent);
    return CatalogoComponent;
}());



/***/ }),

/***/ "./src/app/view/componente/componente.component.css":
/*!**********************************************************!*\
  !*** ./src/app/view/componente/componente.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY29tcG9uZW50ZS9jb21wb25lbnRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/componente/componente.component.html":
/*!***********************************************************!*\
  !*** ./src/app/view/componente/componente.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  componente works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/componente/componente.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/componente/componente.component.ts ***!
  \*********************************************************/
/*! exports provided: ComponenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponenteComponent", function() { return ComponenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponenteComponent = /** @class */ (function () {
    function ComponenteComponent() {
    }
    ComponenteComponent.prototype.ngOnInit = function () {
    };
    ComponenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-componente',
            template: __webpack_require__(/*! ./componente.component.html */ "./src/app/view/componente/componente.component.html"),
            styles: [__webpack_require__(/*! ./componente.component.css */ "./src/app/view/componente/componente.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponenteComponent);
    return ComponenteComponent;
}());



/***/ }),

/***/ "./src/app/view/criar-encomenda/criar-encomenda.component.css":
/*!********************************************************************!*\
  !*** ./src/app/view/criar-encomenda/criar-encomenda.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY3JpYXItZW5jb21lbmRhL2NyaWFyLWVuY29tZW5kYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/criar-encomenda/criar-encomenda.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/view/criar-encomenda/criar-encomenda.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n  <h1>Criação de Encomenda</h1>\r\n</div>\r\n\r\n<div style=\"margin-left:10%;margin-top:5%;float:left\">\r\n\r\n  <form>\r\n    <h2>Escolha um utilizador:</h2>\r\n    <section>\r\n      <article class=\"utilizador\" *ngFor=\"let utilizador of utilizadores\">\r\n        <header><h3>{{utilizador.nome}}</h3></header>\r\n        <button (click)=\"selecionaUtilizador(utilizador, $event)\">Escolher</button>\r\n      </article>\r\n    </section>\r\n\r\n    <h2>Escolha um Produto:</h2>\r\n    <section>\r\n      <article class=\"encomenda\" *ngFor=\"let produto of produtos\">\r\n        <header><h3>{{produto.nome}}</h3></header>\r\n        <button (click)=\"selecionaProduto(produto, $event)\">Escolher</button>\r\n      </article>\r\n    </section>\r\n    <br>\r\n    <a routerLink='/criar-item-produto'><button (click)=\"transferProdUser()\">Confirmar</button></a>\r\n  </form>\r\n\r\n</div>\r\n\r\n<div style=\"margin-right:10%;margin-top:5%;float:right\" >\r\n\r\n  <div *ngIf=\"userSelec\">\r\n    <h1>Utilizador Selecionado:</h1>\r\n    <p>Nome: {{userSelec.nome}}</p>\r\n    <p>Email: {{userSelec.email}}</p> \r\n  </div>\r\n\r\n  <div *ngIf=\"prodSelec\">\r\n  <h1>Produto Selecionado:</h1>\r\n  <p>Nome: {{prodSelec.nome}}</p>\r\n  <p>Descrição: {{prodSelec.descricao}}</p>\r\n  <p>Preço: {{prodSelec.preco}}</p>\r\n\r\n  <div *ngIf=\"prodSelec.dimensao.comprimento.min==-1\">\r\n    <p>Comprimento: {{prodSelec.dimensao.comprimento.max}}</p>\r\n  </div>\r\n  <div *ngIf=\"prodSelec.dimensao.comprimento.min>-1\">\r\n    <p>Comprimento Máximo: {{prodSelec.dimensao.comprimento.max}}</p>\r\n    <p>Comprimento Mínimo: {{prodSelec.dimensao.comprimento.min}}</p>\r\n</div>\r\n\r\n  <div *ngIf=\"prodSelec.dimensao.largura.min==-1\">\r\n    <p>Largura: {{prodSelec.dimensao.largura.max}}</p>\r\n  </div>\r\n  <div *ngIf=\"prodSelec.dimensao.largura.min>-1\">\r\n    <p>Largura Máximo: {{prodSelec.dimensao.largura.max}}</p>\r\n    <p>Largura Mínimo: {{prodSelec.dimensao.largura.min}}</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"prodSelec.dimensao.altura.min==-1\">\r\n    <p>Altura: {{prodSelec.dimensao.altura.max}}</p>\r\n  </div>\r\n  <div *ngIf=\"prodSelec.dimensao.altura.min>-1\">\r\n    <p>Altura Máximo: {{prodSelec.dimensao.altura.max}}</p>\r\n    <p>Altura Mínimo: {{prodSelec.dimensao.altura.min}}</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"prodSelec.minPercentagem==0\">\r\n    <p>Percentagem de ocupação máxima: {{prodSelec.maxPercentagem}}</p>\r\n  </div>\r\n  <div *ngIf=\"prodSelec.minPercentagem>0\">\r\n    Percentagem de ocupação minima: {{prodSelec.minPercentagem}}\r\n    Percentagem de ocupação máxima: {{prodSelec.maxPercentagem}}\r\n  </div>\r\n  <h3>Materiais</h3>\r\n  <div *ngFor=\"let material of matSelect; let nMat = index\">\r\n    <p>Material {{nMat + 1}}</p>\r\n    <p>Nome: {{material.nome}}</p>\r\n    <div *ngFor=\"let acabamento of material.acabamentos; let nAca = index\">\r\n      <p>Acabamento {{nAca + 1}}</p>\r\n      <p>Nome: {{acabamento.nome}}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/view/criar-encomenda/criar-encomenda.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/criar-encomenda/criar-encomenda.component.ts ***!
  \*******************************************************************/
/*! exports provided: CriarEncomendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarEncomendaComponent", function() { return CriarEncomendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_utilizador_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/utilizador.service */ "./src/app/service/utilizador.service.ts");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/produto.service */ "./src/app/service/produto.service.ts");
/* harmony import */ var _service_prod_user_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/prod-user-transfer.service */ "./src/app/service/prod-user-transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CriarEncomendaComponent = /** @class */ (function () {
    function CriarEncomendaComponent(usrService, prodService, putService) {
        this.usrService = usrService;
        this.prodService = prodService;
        this.putService = putService;
        this.utilizadores = [];
        this.produtos = [];
        this.matSelect = [];
    }
    CriarEncomendaComponent.prototype.ngOnInit = function () {
        this.getUtilizadores();
        this.getProdutos();
    };
    CriarEncomendaComponent.prototype.getUtilizadores = function () {
        var _this = this;
        this.usrService.getUtilizadores()
            .subscribe(function (usr) {
            _this.utilizadores = usr;
        });
    };
    CriarEncomendaComponent.prototype.getProdutos = function () {
        var _this = this;
        this.prodService.getProdutos()
            .subscribe(function (enc) {
            _this.produtos = enc;
        });
    };
    CriarEncomendaComponent.prototype.selecionaUtilizador = function (utilizador, event) {
        event.preventDefault();
        this.userSelec = utilizador;
    };
    CriarEncomendaComponent.prototype.selecionaProduto = function (produto, event) {
        event.preventDefault();
        this.prodSelec = produto;
        this.matSelect = produto.materiais;
    };
    CriarEncomendaComponent.prototype.transferProdUser = function () {
        this.putService.seleccionaProdUser(this.prodSelec, this.userSelec, this.matSelect);
    };
    CriarEncomendaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-criar-encomenda',
            template: __webpack_require__(/*! ./criar-encomenda.component.html */ "./src/app/view/criar-encomenda/criar-encomenda.component.html"),
            styles: [__webpack_require__(/*! ./criar-encomenda.component.css */ "./src/app/view/criar-encomenda/criar-encomenda.component.css")]
        }),
        __metadata("design:paramtypes", [_service_utilizador_service__WEBPACK_IMPORTED_MODULE_1__["UtilizadorService"],
            _service_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"],
            _service_prod_user_transfer_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoUserTransferService"]])
    ], CriarEncomendaComponent);
    return CriarEncomendaComponent;
}());



/***/ }),

/***/ "./src/app/view/criar-item-produto/criar-item-produto.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/view/criar-item-produto/criar-item-produto.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY3JpYXItaXRlbS1wcm9kdXRvL2NyaWFyLWl0ZW0tcHJvZHV0by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/criar-item-produto/criar-item-produto.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/view/criar-item-produto/criar-item-produto.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n  <h1>Dados do Produto</h1>\r\n</div>\r\n\r\n<div style=\"margin-left:10%;margin-top:5%;float:left\">\r\n  <div *ngIf=\"prodSelec.dimensao.comprimento.min>-1\">\r\n    <p>Comprimento [{{prodSelec.dimensao.comprimento.min}} - {{prodSelec.dimensao.comprimento.max}}]: <input name=\"comp\" type=\"number\" \r\n    [(ngModel)]=\"comprimento\" [(value)]=\"comprimento\" (ngModelChange)=\"setComp(comprimento)\"required></p>\r\n    <button (click)=\"setComp(comprimento)\">Atribuir Comprimento</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"prodSelec.dimensao.largura.min>-1\">\r\n    <p>Largura [{{prodSelec.dimensao.largura.min}} - {{prodSelec.dimensao.largura.max}}]: <input name=\"larg\" type=\"number\" \r\n    [(ngModel)]=\"largura\" [(value)]=\"largura\" (ngModelChange)=\"setLarg(largura)\"required></p>\r\n    <button (click)=\"setLarg(largura)\">Atribuir Largura</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"prodSelec.dimensao.altura.min>-1\">\r\n    <p>Altura [{{prodSelec.dimensao.altura.min}} - {{prodSelec.dimensao.altura.max}}]: <input name=\"alt\" type=\"number\" \r\n    [(ngModel)]=\"altura\" [(value)]=\"altura\" (ngModelChange)=\"setAlt(altura)\"required></p>\r\n    <button (click)=\"setAlt(altura)\">Atribuir Altura</button>\r\n  </div>\r\n\r\n\r\n  <h2>Escolha um Material:</h2>\r\n  <section>\r\n    <article class=\"material\" *ngFor=\"let material of matSelect\">\r\n      <header><h3>{{material.nome}}</h3><button (click)=\"selectMaterial(material, $event)\">Escolher</button></header>\r\n    </article>\r\n  </section>\r\n  <br>\r\n  <a routerLink='/trata-filhos'><button (click)=\"transferItemProduto()\">Confirmar</button></a>\r\n\r\n\r\n</div>\r\n\r\n<div style=\"margin-right:10%;margin-top:5%;float:right\">\r\n\r\n  <div *ngIf=\"userSelec\">\r\n    <h1>Utilizador Selecionado:</h1>\r\n    <p>Nome: {{userSelec.nome}}</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"prodSelec\">\r\n    <h1>Produto Escolhido:</h1>\r\n    <p>Nome: {{prodSelec.nome}}</p>\r\n    <p>Descrição: {{prodSelec.descricao}}</p>\r\n    <p>Preço: {{prodSelec.preco}}</p>\r\n    <p>Categoria: {{prodSelec.categoria}}</p>\r\n    <p>Comprimento: {{comprimento}}</p>\r\n    <p>Largura: {{largura}}</p>\r\n    <p>Altura: {{altura}}</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"matSelect\">\r\n    <h3>Materiais</h3>\r\n    <div *ngFor=\"let material of matSelect; let nMat = index\">\r\n      <p>Material {{nMat + 1}}</p>\r\n      <p>Nome: {{material.nome}}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div style=\"margin-right:10%; margin-top:5%; margin-left:10%; float:right\" >\r\n\r\n  <div *ngIf=\"mSelect.length>0\">\r\n    <h3>Materiais Selecionados</h3>\r\n    <div *ngFor=\"let material of mSelect; let nMat = index\">\r\n      <p>Nome: {{material.nome}}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/view/criar-item-produto/criar-item-produto.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/view/criar-item-produto/criar-item-produto.component.ts ***!
  \*************************************************************************/
/*! exports provided: CriarItemProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarItemProdutoComponent", function() { return CriarItemProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_prod_user_transfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/prod-user-transfer.service */ "./src/app/service/prod-user-transfer.service.ts");
/* harmony import */ var _service_item_prod_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/item-prod-transfer.service */ "./src/app/service/item-prod-transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriarItemProdutoComponent = /** @class */ (function () {
    function CriarItemProdutoComponent(putService, iptService) {
        this.putService = putService;
        this.iptService = iptService;
        this.matSelect = [];
        this.matIp = [];
        this.ip = {
            nome: "", desc: "", preco: 0, materiais: this.matIp, comp: 0, larg: 0, alt: 0, categoria: "", categoria_pai: "", nomeProdPai: ""
        };
        this.mSelect = [];
    }
    CriarItemProdutoComponent.prototype.ngOnInit = function () {
        this.prodSelec = this.putService.prodEscolhido;
        this.userSelec = this.putService.userEscolhido;
        this.matSelect = this.putService.matEscolhido;
        this.inicializar();
    };
    CriarItemProdutoComponent.prototype.inicializar = function () {
        this.ip.nome = this.prodSelec.nome;
        this.ip.desc = this.prodSelec.descricao;
        this.ip.preco = this.prodSelec.preco;
        this.ip.categoria = this.prodSelec.categoria;
        this.ip.categoria_pai = this.prodSelec.categoria_pai;
        this.ip.nomeProdPai = this.prodSelec.prodPai;
        if (this.prodSelec.dimensao.comprimento.min == -1) {
            this.ip.comp = this.prodSelec.dimensao.comprimento.max;
            this.comprimento = this.prodSelec.dimensao.comprimento.max;
            this.setComp(this.prodSelec.dimensao.comprimento.max);
        }
        if (this.prodSelec.dimensao.largura.min == -1) {
            this.ip.larg = this.prodSelec.dimensao.largura.max;
            this.largura = this.prodSelec.dimensao.largura.max;
            this.setLarg(this.prodSelec.dimensao.largura.max);
        }
        if (this.prodSelec.dimensao.altura.min == -1) {
            this.ip.alt = this.prodSelec.dimensao.altura.max;
            this.altura = this.prodSelec.dimensao.altura.max;
            this.setAlt(this.prodSelec.dimensao.altura.max);
        }
    };
    CriarItemProdutoComponent.prototype.setComp = function (comprimento) {
        if (this.prodSelec.dimensao.comprimento.min <= comprimento && this.prodSelec.dimensao.comprimento.max >= comprimento) {
            this.ip.comp = comprimento;
        }
    };
    CriarItemProdutoComponent.prototype.setLarg = function (largura) {
        if (this.prodSelec.dimensao.largura.min <= largura && this.prodSelec.dimensao.largura.max >= largura) {
            this.ip.comp = largura;
        }
    };
    CriarItemProdutoComponent.prototype.setAlt = function (altura) {
        if (this.prodSelec.dimensao.altura.min <= altura && this.prodSelec.dimensao.altura.max >= altura) {
            this.ip.comp = altura;
        }
    };
    CriarItemProdutoComponent.prototype.selectMaterial = function (mat, event) {
        event.preventDefault();
        this.mSelect.push(mat);
    };
    CriarItemProdutoComponent.prototype.transferItemProduto = function () {
        this.ip.materiais = this.mSelect;
        this.iptService.seleccionaItemProd(this.ip, this.prodSelec.id, this.userSelec);
    };
    CriarItemProdutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-criar-item-produto',
            template: __webpack_require__(/*! ./criar-item-produto.component.html */ "./src/app/view/criar-item-produto/criar-item-produto.component.html"),
            styles: [__webpack_require__(/*! ./criar-item-produto.component.css */ "./src/app/view/criar-item-produto/criar-item-produto.component.css")]
        }),
        __metadata("design:paramtypes", [_service_prod_user_transfer_service__WEBPACK_IMPORTED_MODULE_1__["ProdutoUserTransferService"],
            _service_item_prod_transfer_service__WEBPACK_IMPORTED_MODULE_2__["ItemProdTransferService"]])
    ], CriarItemProdutoComponent);
    return CriarItemProdutoComponent;
}());



/***/ }),

/***/ "./src/app/view/criar-produto/criar-produto.component.css":
/*!****************************************************************!*\
  !*** ./src/app/view/criar-produto/criar-produto.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY3JpYXItcHJvZHV0by9jcmlhci1wcm9kdXRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/criar-produto/criar-produto.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/view/criar-produto/criar-produto.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Novo nome: <input name=\"nNome\" type=\"text\"\r\n  [(ngModel)]=\"novoNome\" [(value)]=\"novoNome\" (ngModelChange)=\"setNome(novoNome)\"\r\n  required></p>\r\n<p>Nova Descricao: <input name=\"nDescricao\" type=\"text\"\r\n  [(ngModel)]=\"novaDescricao\" [(value)]=\"novaDescricao\" (ngModelChange)=\"setDescricao(novaDescricao)\"\r\n  required></p>\r\n<p>Novo Preço: <input name=\"nPreco\" type=\"number\"\r\n  [(ngModel)]=\"novoPreco\" [(value)]=\"novoPreco\" (ngModelChange)=\"setPreco(novoPreco)\"\r\n  required></p>\r\n<p>Novo Comprimento Minimo: <input name=\"nCompMin\" type=\"number\"\r\n  [(ngModel)]=\"novoCompMin\" [(value)]=\"novoCompMin\" (ngModelChange)=\"setCompMin(novoCompMin)\"\r\n  required></p>\r\n<p>Novo Comprimento Maximo: <input name=\"nCompMax\" type=\"number\"\r\n  [(ngModel)]=\"novoCompMax\" [(value)]=\"novoCompMax\" (ngModelChange)=\"setCompMax(novoCompMax)\"\r\n  required></p>\r\n<p>Nova Largura Minima: <input name=\"nLargMin\" type=\"number\"\r\n  [(ngModel)]=\"novaLargMin\" [(value)]=\"novaLargMin\" (ngModelChange)=\"setLargMin(novaLargMin)\"\r\n  required></p>\r\n<p>Nova Largura Maxima: <input name=\"nLargMax\" type=\"number\"\r\n  [(ngModel)]=\"novaLargMax\" [(value)]=\"novaLargMax\" (ngModelChange)=\"setLargMax(novaLargMax)\"\r\n  required></p>\r\n<p>Nova Altura Minima: <input name=\"nAltMin\" type=\"number\"\r\n  [(ngModel)]=\"novaAltMin\" [(value)]=\"novaAltMin\" (ngModelChange)=\"setAltMin(novaAltMin)\"\r\n  required></p>\r\n<p>Nova Altura Maxima: <input name=\"nAltMax\" type=\"number\"\r\n  [(ngModel)]=\"novaAltMax\" [(value)]=\"novaAltMax\" (ngModelChange)=\"setAltMax(novaAltMax)\"\r\n  required></p>\r\n<a><button (click)=\"addComprimento(comprimento,largura,altura)\">Criar Produto</button></a>\r\n<section>\r\n  <article class=\"material\" *ngFor=\"let material of materiais\">\r\n    <p>{{material.nome}}<a><button (click)=\"postProdutoMaterial(material.id)\">Adicionar Material</button></a></p>\r\n  </article>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/view/criar-produto/criar-produto.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/criar-produto/criar-produto.component.ts ***!
  \***************************************************************/
/*! exports provided: CriarProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarProdutoComponent", function() { return CriarProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_produto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/produto.service */ "./src/app/service/produto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CriarProdutoComponent = /** @class */ (function () {
    function CriarProdutoComponent(prodService) {
        this.prodService = prodService;
        this.produtoMaterial = { idProduto: -1, idMaterial: -1 };
        this.materiais = [];
        this.idAux = 1;
        this.dimensaoPost = {
            comprimentoId: -1, larguraId: -1, alturaId: -1
        };
        this.comprimento = {
            min: -1, max: -1
        };
        this.largura = {
            min: -1, max: -1
        };
        this.altura = {
            min: -1, max: -1
        };
        this.dimensao = {
            id: -1, comprimento: this.comprimento, largura: this.largura, altura: this.altura
        };
        this.produtoPost = {
            nome: "", descricao: "", idDimensao: -1, preco: -1, categoriaId: -1, produtoPaiId: -1
        };
    }
    CriarProdutoComponent.prototype.ngOnInit = function () {
        this.getMateriais();
    };
    CriarProdutoComponent.prototype.getMateriais = function () {
        var _this = this;
        this.prodService.getMateriais().subscribe(function (enc) {
            _this.materiais = enc;
        });
    };
    CriarProdutoComponent.prototype.postProdutoMaterial = function (idMaterial) {
        this.produtoMaterial.idProduto = this.idProdutoPost;
        this.produtoMaterial.idMaterial = idMaterial;
        this.prodService.postProdutoMaterial(this.produtoMaterial).subscribe();
    };
    CriarProdutoComponent.prototype.add = function (produtoPost) {
        this.prodService.insertProduto(produtoPost).subscribe(function () { }, function () { }, function () { });
    };
    CriarProdutoComponent.prototype.addComprimento = function (comprimento, largura, altura) {
        var _this = this;
        this.prodService.createNovaMedida(comprimento).subscribe(function (valor) {
            _this.compTemp = valor;
            _this.prodService.createNovaMedida(largura).subscribe(function (valor1) {
                _this.largTemp = valor1;
                _this.prodService.createNovaMedida(altura).subscribe(function (valor2) {
                    _this.altTemp = valor2;
                    _this.dimensaoPost.comprimentoId = _this.compTemp.id;
                    _this.dimensaoPost.larguraId = _this.largTemp.id;
                    _this.dimensaoPost.alturaId = _this.altTemp.id;
                    _this.prodService.createNovaDimensao(_this.dimensaoPost).subscribe(function (valor3) {
                        _this.dimensaoTemp = valor3;
                        _this.produtoPost.idDimensao = _this.dimensaoTemp.id;
                        _this.prodService.insertProduto(_this.produtoPost).subscribe(function (valor4) { _this.idProdutoPost = valor4.id; });
                    });
                });
            });
        });
    };
    CriarProdutoComponent.prototype.setNome = function (novoNome) {
        this.produtoPost.categoriaId = this.idAux;
        this.produtoPost.produtoPaiId = 1;
        //this.produtoPost.produtoPaiId = this.produto.produtoPaiId;
        //this.produtoPost.preco = this.produto.preco;
        //this.produtoPost.idDimensao = this.produto.dimensao.id;
        this.produtoPost.nome = novoNome;
    };
    CriarProdutoComponent.prototype.setDescricao = function (novaDescricao) {
        this.produtoPost.descricao = novaDescricao;
    };
    CriarProdutoComponent.prototype.setPreco = function (novoPreco) {
        this.produtoPost.preco = novoPreco;
    };
    CriarProdutoComponent.prototype.setCompMin = function (novoCompMin) {
        this.comprimento.min = novoCompMin;
    };
    CriarProdutoComponent.prototype.setCompMax = function (novoCompMax) {
        this.comprimento.max = novoCompMax;
    };
    CriarProdutoComponent.prototype.setLargMin = function (novaLargMin) {
        this.dimensao.largura.min = novaLargMin;
    };
    CriarProdutoComponent.prototype.setLargMax = function (novaLargMax) {
        this.dimensao.largura.max = novaLargMax;
    };
    CriarProdutoComponent.prototype.setAltMin = function (novaAltMin) {
        this.dimensao.altura.min = novaAltMin;
    };
    CriarProdutoComponent.prototype.setAltMax = function (novaAltMax) {
        this.dimensao.altura.max = novaAltMax;
    };
    CriarProdutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-criar-produto',
            template: __webpack_require__(/*! ./criar-produto.component.html */ "./src/app/view/criar-produto/criar-produto.component.html"),
            styles: [__webpack_require__(/*! ./criar-produto.component.css */ "./src/app/view/criar-produto/criar-produto.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_produto_service__WEBPACK_IMPORTED_MODULE_1__["ProdutoService"]])
    ], CriarProdutoComponent);
    return CriarProdutoComponent;
}());



/***/ }),

/***/ "./src/app/view/editar-produto/editar-produto.component.css":
/*!******************************************************************!*\
  !*** ./src/app/view/editar-produto/editar-produto.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZWRpdGFyLXByb2R1dG8vZWRpdGFyLXByb2R1dG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/editar-produto/editar-produto.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/view/editar-produto/editar-produto.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Nome: {{produto.nome}}</p>\r\n<p>Novo nome: <input name=\"nNome\" type=\"text\"\r\n  [(ngModel)]=\"novoNome\" [(value)]=\"novoNome\" (ngModelChange)=\"setNome(novoNome)\"\r\n  required></p>\r\n\r\n<p>Descricao: {{produto.descricao}}</p>\r\n<p>Nova Descricao: <input name=\"nDescricao\" type=\"text\"\r\n  [(ngModel)]=\"novaDescricao\" [(value)]=\"novaDescricao\" (ngModelChange)=\"setDescricao(novaDescricao)\"\r\n  required></p>\r\n\r\n<p>Comprimento Minimo: {{produto.dimensao.comprimento.min}}</p>\r\n<p>Novo Comprimento Minimo: <input name=\"nCompMin\" type=\"number\"\r\n  [(ngModel)]=\"novoCompMin\" [(value)]=\"novoCompMin\" (ngModelChange)=\"setCompMin(novoCompMin)\"\r\n  required></p>\r\n\r\n<p>Comprimento Máximo: {{produto.dimensao.comprimento.max}}</p>\r\n<p>Novo Comprimento Maximo: <input name=\"nCompMax\" type=\"number\"\r\n  [(ngModel)]=\"novoCompMax\" [(value)]=\"novoCompMax\" (ngModelChange)=\"setCompMax(novoCompMax)\"\r\n  required></p>\r\n\r\n<p>Largura Minima: {{produto.dimensao.largura.min}}</p>\r\n<p>Nova Largura Minima: <input name=\"nLargMin\" type=\"number\"\r\n  [(ngModel)]=\"novaLargMin\" [(value)]=\"novaLargMin\" (ngModelChange)=\"setLargMin(novaLargMin)\"\r\n  required></p>\r\n\r\n<p>Largura Máxima: {{produto.dimensao.largura.max}}</p>\r\n<p>Nova Largura Maxima: <input name=\"nLargMax\" type=\"number\"\r\n  [(ngModel)]=\"novaLargMax\" [(value)]=\"novaLargMax\" (ngModelChange)=\"setLargMax(novaLargMax)\"\r\n  required></p>\r\n\r\n<p>Altura Minima: {{produto.dimensao.altura.min}}</p>\r\n<p>Nova Altura Minima: <input name=\"nAltMin\" type=\"number\"\r\n  [(ngModel)]=\"novaAltMin\" [(value)]=\"novaAltMin\" (ngModelChange)=\"setAltMin(novaAltMin)\"\r\n  required></p>\r\n\r\n<p>Altura Máxima: {{produto.dimensao.altura.max}}</p>\r\n<p>Nova Altura Maxima: <input name=\"nAltMax\" type=\"number\"\r\n  [(ngModel)]=\"novaAltMax\" [(value)]=\"novaAltMax\" (ngModelChange)=\"setAltMax(novaAltMax)\"\r\n  required></p>\r\n  \r\n  <a><button (click)=\"addComprimento(comprimento,largura,altura)\">Fazer Alterações</button></a>\r\n\r\n<h3>Eliminar Materiais do Produto:</h3>\r\n<section>\r\n  <article class=\"material\" *ngFor=\"let material of materiaisProd\">\r\n    <p>{{material.nome}} <button (click)=\"eliminarProdutoMaterial(material.id)\">Eliminar Material</button></p>\r\n  </article>\r\n</section>\r\n\r\n<h3>Adicionar Materiais ao Produto:</h3>\r\n<section>\r\n  <article class=\"material1\" *ngFor=\"let material1 of materiais\">\r\n    <p>{{material1.nome}}<a><button (click)=\"postProdutoMaterial(material1.id)\">Adicionar Material</button></a></p>\r\n  </article>\r\n</section>"

/***/ }),

/***/ "./src/app/view/editar-produto/editar-produto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/editar-produto/editar-produto.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditarProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProdutoComponent", function() { return EditarProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/produto.service */ "./src/app/service/produto.service.ts");
/* harmony import */ var _service_produto_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/produto-transfer.service */ "./src/app/service/produto-transfer.service.ts");
/* harmony import */ var src_app_service_prod_user_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/prod-user-transfer.service */ "./src/app/service/prod-user-transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditarProdutoComponent = /** @class */ (function () {
    function EditarProdutoComponent(prodService, ptServ, puServ) {
        this.prodService = prodService;
        this.ptServ = ptServ;
        this.puServ = puServ;
        this.produtoMaterial = { idProduto: -1, idMaterial: -1 };
        this.produtosMateriais = [];
        this.materiaisProd = [];
        this.materiais = [];
        this.dimensaoPost = {
            comprimentoId: -1, larguraId: -1, alturaId: -1
        };
        this.comprimento = {
            min: -1, max: -1
        };
        this.largura = {
            min: -1, max: -1
        };
        this.altura = {
            min: -1, max: -1
        };
        this.dimensao = {
            id: -1, comprimento: this.comprimento, largura: this.largura, altura: this.altura
        };
        this.produtoPost = {
            nome: "", descricao: "", idDimensao: -1, preco: -1, categoriaId: -1, produtoPaiId: -1
        };
    }
    EditarProdutoComponent.prototype.ngOnInit = function () {
        this.produto = this.ptServ.escolhido;
        this.materiaisProd = this.puServ.matEscolhido;
        this.getMateriais();
        this.getProdutosMateriais();
    };
    EditarProdutoComponent.prototype.eliminarProdutoMaterial = function (idMaterial) {
        var _this = this;
        this.produtosMateriais.forEach(function (element) {
            if (element.idMaterial == idMaterial && element.idProduto == _this.produto.id) {
                _this.idProdutoMaterial = element.id;
            }
        });
        this.prodService.eliminarProdutoMaterial(this.idProdutoMaterial).subscribe();
    };
    EditarProdutoComponent.prototype.postProdutoMaterial = function (idMaterial) {
        this.produtoMaterial.idProduto = this.produto.id;
        this.produtoMaterial.idMaterial = idMaterial;
        this.prodService.postProdutoMaterial(this.produtoMaterial).subscribe();
    };
    EditarProdutoComponent.prototype.getProdutosMateriais = function () {
        var _this = this;
        this.prodService.getProdutosMateriais().subscribe(function (pm) {
            _this.produtosMateriais = pm;
        });
    };
    EditarProdutoComponent.prototype.getMateriais = function () {
        var _this = this;
        this.prodService.getMateriais().subscribe(function (enc) {
            _this.materiais = enc;
        });
    };
    EditarProdutoComponent.prototype.add = function (produtoPost) {
        this.prodService.updateProduto(produtoPost).subscribe(function () { }, function () { }, function () { });
    };
    EditarProdutoComponent.prototype.addComprimento = function (comprimento, largura, altura) {
        var _this = this;
        this.prodService.createNovaMedida(comprimento).subscribe(function (valor) {
            _this.compTemp = valor;
            _this.prodService.createNovaMedida(largura).subscribe(function (valor1) {
                _this.largTemp = valor1;
                _this.prodService.createNovaMedida(altura).subscribe(function (valor2) {
                    _this.altTemp = valor2;
                    _this.dimensaoPost.comprimentoId = _this.compTemp.id;
                    _this.dimensaoPost.larguraId = _this.largTemp.id;
                    _this.dimensaoPost.alturaId = _this.altTemp.id;
                    _this.prodService.createNovaDimensao(_this.dimensaoPost).subscribe(function (valor3) {
                        _this.dimensaoTemp = valor3;
                        _this.produtoPost.idDimensao = _this.dimensaoTemp.id;
                        _this.add(_this.produtoPost);
                    });
                });
            });
        });
    };
    //addDimensao(dimensao: Dimensao): void{
    //  this.prodService.createNovaDimensao(dimensao).subscribe(
    //    () =>  {},
    //    () => {},
    //    () => {}
    //  );
    //}
    EditarProdutoComponent.prototype.setNome = function (novoNome) {
        this.produto.nome = novoNome;
        this.produtoPost.id = this.produto.id;
        this.produtoPost.categoriaId = this.produto.categoriaId;
        this.produtoPost.produtoPaiId = this.produto.produtoPaiId;
        this.produtoPost.preco = this.produto.preco;
        //this.produtoPost.idDimensao = this.produto.dimensao.id;
        this.produtoPost.nome = novoNome;
    };
    EditarProdutoComponent.prototype.setDescricao = function (novaDescricao) {
        this.produto.descricao = novaDescricao;
        this.produtoPost.descricao = novaDescricao;
    };
    EditarProdutoComponent.prototype.setCompMin = function (novoCompMin) {
        this.produto.dimensao.comprimento.min = novoCompMin;
        this.comprimento.min = novoCompMin;
    };
    EditarProdutoComponent.prototype.setCompMax = function (novoCompMax) {
        this.produto.dimensao.comprimento.max = novoCompMax;
        this.comprimento.max = novoCompMax;
    };
    EditarProdutoComponent.prototype.setLargMin = function (novaLargMin) {
        this.produto.dimensao.largura.min = novaLargMin;
        this.dimensao.largura.min = novaLargMin;
    };
    EditarProdutoComponent.prototype.setLargMax = function (novaLargMax) {
        this.produto.dimensao.largura.max = novaLargMax;
        this.dimensao.largura.max = novaLargMax;
    };
    EditarProdutoComponent.prototype.setAltMin = function (novaAltMin) {
        this.produto.dimensao.altura.min = novaAltMin;
        this.dimensao.altura.min = novaAltMin;
    };
    EditarProdutoComponent.prototype.setAltMax = function (novaAltMax) {
        this.produto.dimensao.altura.max = novaAltMax;
        this.dimensao.altura.max = novaAltMax;
    };
    EditarProdutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar-produto',
            template: __webpack_require__(/*! ./editar-produto.component.html */ "./src/app/view/editar-produto/editar-produto.component.html"),
            styles: [__webpack_require__(/*! ./editar-produto.component.css */ "./src/app/view/editar-produto/editar-produto.component.css")]
        }),
        __metadata("design:paramtypes", [_service_produto_service__WEBPACK_IMPORTED_MODULE_1__["ProdutoService"],
            _service_produto_transfer_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoTransferService"],
            src_app_service_prod_user_transfer_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoUserTransferService"]])
    ], EditarProdutoComponent);
    return EditarProdutoComponent;
}());



/***/ }),

/***/ "./src/app/view/encomenda/encomenda.component.css":
/*!********************************************************!*\
  !*** ./src/app/view/encomenda/encomenda.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".encomenda{\r\n    border: 1px rgb(131, 63, 14) solid;\r\n    width: 300px;\r\n    min-height: 250px;\r\n    float: left;\r\n    padding: 5px;\r\n    margin: 30px;\r\n}\r\n\r\nsection{\r\n    min-width: 500px;\r\n    margin-left: 200px;\r\n    overflow: hidden;\r\n}\r\n\r\n.fixfloat{\r\n    clear: both;\r\n}\r\n\r\nnav{\r\n    float: left;\r\n    width: 250px;\r\n}\r\n\r\ndiv#wrapper{\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: grey;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9lbmNvbWVuZGEvZW5jb21lbmRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlldy9lbmNvbWVuZGEvZW5jb21lbmRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5jb21lbmRhe1xyXG4gICAgYm9yZGVyOiAxcHggcmdiKDEzMSwgNjMsIDE0KSBzb2xpZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZpeGZsb2F0e1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbm5hdntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5kaXYjd3JhcHBlcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/view/encomenda/encomenda.component.html":
/*!*********************************************************!*\
  !*** ./src/app/view/encomenda/encomenda.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left:15%\">\r\n\r\n  <section>\r\n    <article class=\"encomenda\" *ngFor=\"let encomenda of encomendas; let nEnc = index\">\r\n      <header><h3>Encomenda {{nEnc + 1}}</h3></header>\r\n      <p><h5>Data: {{encomenda.encomenda_data | date:\"MM/dd/yyyy 'às' HH:mm:ss\"}}</h5>\r\n      <p><h5>Encomenda feita por: {{encomenda.encomenda_user[0].utilizador_nome}}</h5>\r\n      <!--<a routerLink='/editar-encomenda'><button (click)=\"escolherEncomenda(encomenda)\">Escolher Encomenda</button></a>-->\r\n    </article>\r\n  </section>\r\n  \r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/view/encomenda/encomenda.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/view/encomenda/encomenda.component.ts ***!
  \*******************************************************/
/*! exports provided: EncomendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncomendaComponent", function() { return EncomendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_encomenda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/encomenda.service */ "./src/app/service/encomenda.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncomendaComponent = /** @class */ (function () {
    function EncomendaComponent(encService) {
        this.encService = encService;
        this.encomendas = [];
    }
    EncomendaComponent.prototype.ngOnInit = function () {
        this.getEncomendas();
    };
    EncomendaComponent.prototype.getEncomendas = function () {
        var _this = this;
        this.encService.getEncomendas()
            .subscribe(function (enc) {
            _this.encomendas = enc;
        });
    };
    EncomendaComponent.prototype.escolherEncomenda = function (encomendaEsc) {
        this.encomendaEscolhida = encomendaEsc;
    };
    EncomendaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encomenda',
            template: __webpack_require__(/*! ./encomenda.component.html */ "./src/app/view/encomenda/encomenda.component.html"),
            styles: [__webpack_require__(/*! ./encomenda.component.css */ "./src/app/view/encomenda/encomenda.component.css")]
        }),
        __metadata("design:paramtypes", [_service_encomenda_service__WEBPACK_IMPORTED_MODULE_1__["EncomendaService"]])
    ], EncomendaComponent);
    return EncomendaComponent;
}());



/***/ }),

/***/ "./src/app/view/listar-item-prod/listar-item-prod.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/view/listar-item-prod/listar-item-prod.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listItemProd{\r\n    border: 1px rgb(131, 63, 14) solid;\r\n    width: 300px;\r\n    min-height: 350px;\r\n    float: left;\r\n    padding: 5px;\r\n    margin: 30px;\r\n}\r\n\r\nsection{\r\n    min-width: 500px;\r\n    margin-left: 200px;\r\n    overflow: hidden;\r\n}\r\n\r\n.fixfloat{\r\n    clear: both;\r\n}\r\n\r\nnav{\r\n    float: left;\r\n    width: 250px;\r\n}\r\n\r\ndiv#wrapper{\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: grey;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9saXN0YXItaXRlbS1wcm9kL2xpc3Rhci1pdGVtLXByb2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3L2xpc3Rhci1pdGVtLXByb2QvbGlzdGFyLWl0ZW0tcHJvZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RJdGVtUHJvZHtcclxuICAgIGJvcmRlcjogMXB4IHJnYigxMzEsIDYzLCAxNCkgc29saWQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5maXhmbG9hdHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5uYXZ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuZGl2I3dyYXBwZXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view/listar-item-prod/listar-item-prod.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/view/listar-item-prod/listar-item-prod.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1>Itens de Produto</h1>\n</div>\n\n<div style=\"margin-left:15%\">\n\n  <section>\n    <article class=\"listItemProd\" *ngFor=\"let itemProd of itensProduto\">\n      <header><h3>{{itemProd.nome}}</h3></header>\n      <p>Descrição: {{itemProd.desc}}</p>\n      <p>Preço: {{itemProd.preco}}</p>\n      <p>Categoria: {{itemProd.categoria}}</p>\n      <p>Categoria Pai: {{itemProd.categoria_pai}}</p>\n      <p>Comprimento: {{itemProd.comp}}</p>\n      <p>Largura: {{itemProd.larg}}</p>\n      <p>Altura: {{itemProd.alt}}</p>\n      <div *ngFor=\"let material of materiais; let nMat = index\">\n        <p>Material {{nMat + 1}}: {{material.material_nome}}</p>\n        <div *ngFor=\"let acabamento of material.material_acabamentos; let nAca = index\">\n          <p>Acabamento {{nAca + 1}}: {{acabamento}}</p>\n        </div>\n      </div>\n    </article>\n  </section>\n  \n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/view/listar-item-prod/listar-item-prod.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/view/listar-item-prod/listar-item-prod.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListarItemProdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarItemProdComponent", function() { return ListarItemProdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_encomenda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/encomenda.service */ "./src/app/service/encomenda.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListarItemProdComponent = /** @class */ (function () {
    function ListarItemProdComponent(encService) {
        this.encService = encService;
        this.itensProduto = [];
        this.materiais = [];
    }
    ListarItemProdComponent.prototype.ngOnInit = function () {
        this.getItensProduto();
    };
    ListarItemProdComponent.prototype.getItensProduto = function () {
        var _this = this;
        this.encService.getEncomendas()
            .subscribe(function (encs) {
            encs.forEach(function (enc) {
                enc.encomenda_produtos.forEach(function (ip) {
                    _this.itensProduto.push(ip);
                    _this.materiais = ip.materiais;
                });
            });
            console.log(_this.materiais);
        });
    };
    ListarItemProdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-item-prod',
            template: __webpack_require__(/*! ./listar-item-prod.component.html */ "./src/app/view/listar-item-prod/listar-item-prod.component.html"),
            styles: [__webpack_require__(/*! ./listar-item-prod.component.css */ "./src/app/view/listar-item-prod/listar-item-prod.component.css")]
        }),
        __metadata("design:paramtypes", [_service_encomenda_service__WEBPACK_IMPORTED_MODULE_1__["EncomendaService"]])
    ], ListarItemProdComponent);
    return ListarItemProdComponent;
}());



/***/ }),

/***/ "./src/app/view/produto/produto.component.css":
/*!****************************************************!*\
  !*** ./src/app/view/produto/produto.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produto{\r\n    border: 1px rgb(131, 63, 14) solid;\r\n    width: 300px;\r\n    min-height: 250px;\r\n    float: left;\r\n    padding: 5px;\r\n    margin: 30px;\r\n}\r\n\r\nsection{\r\n    min-width: 500px;\r\n    margin-left: 200px;\r\n    overflow: hidden;\r\n}\r\n\r\n.fixfloat{\r\n    clear: both;\r\n}\r\n\r\nnav{\r\n    float: left;\r\n    width: 250px;\r\n}\r\n\r\ndiv#wrapper{\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: grey;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9wcm9kdXRvL3Byb2R1dG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3L3Byb2R1dG8vcHJvZHV0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1dG97XHJcbiAgICBib3JkZXI6IDFweCByZ2IoMTMxLCA2MywgMTQpIHNvbGlkO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZml4ZmxvYXR7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxubmF2e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbmRpdiN3cmFwcGVye1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG5cclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/view/produto/produto.component.html":
/*!*****************************************************!*\
  !*** ./src/app/view/produto/produto.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left:15%\">\r\n\r\n  <section>\r\n    <article class=\"produto\" *ngFor=\"let produto of produtos\">\r\n      <header><h3>{{produto.nome}}</h3></header>\r\n      <p><h5>Descrição: {{produto.descricao}}</h5>\r\n      <p><h5>Preço: {{produto.preco}}</h5>\r\n      <a routerLink='/editar-produto'><button (click)=\"escolherProduto(produto);transferProdUser()\">Editar Produto</button></a>\r\n      <a><button (click)=\"eliminarProduto(produto)\">Remover Produto</button></a>\r\n    </article>\r\n  </section>\r\n  <a routerLink='/criar-produto'><button>Criar Produto</button></a>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/view/produto/produto.component.ts":
/*!***************************************************!*\
  !*** ./src/app/view/produto/produto.component.ts ***!
  \***************************************************/
/*! exports provided: ProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoComponent", function() { return ProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/produto.service */ "./src/app/service/produto.service.ts");
/* harmony import */ var _service_produto_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/produto-transfer.service */ "./src/app/service/produto-transfer.service.ts");
/* harmony import */ var src_app_service_prod_user_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/prod-user-transfer.service */ "./src/app/service/prod-user-transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProdutoComponent = /** @class */ (function () {
    function ProdutoComponent(prodService, ptServ, puServ) {
        this.prodService = prodService;
        this.ptServ = ptServ;
        this.puServ = puServ;
        this.produtos = [];
        this.matSel = [];
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        this.getProdutos();
    };
    ProdutoComponent.prototype.getProdutos = function () {
        var _this = this;
        this.prodService.getProdutos()
            .subscribe(function (enc) {
            _this.produtos = enc;
        });
    };
    ProdutoComponent.prototype.eliminarProduto = function (prod) {
        this.prodService.deleteProduto(prod.id).subscribe(function () { }, function () { }, function () { window.location.reload(); });
    };
    ProdutoComponent.prototype.escolherProduto = function (produtoEsc) {
        this.ptServ.seleccionaProd(produtoEsc);
        this.produtoSel = produtoEsc;
        this.matSel = produtoEsc.materiais;
    };
    ProdutoComponent.prototype.transferProdUser = function () {
        this.puServ.seleccionaProdUser(this.produtoSel, null, this.matSel);
    };
    ProdutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produto',
            template: __webpack_require__(/*! ./produto.component.html */ "./src/app/view/produto/produto.component.html"),
            styles: [__webpack_require__(/*! ./produto.component.css */ "./src/app/view/produto/produto.component.css")]
        }),
        __metadata("design:paramtypes", [_service_produto_service__WEBPACK_IMPORTED_MODULE_1__["ProdutoService"],
            _service_produto_transfer_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoTransferService"],
            src_app_service_prod_user_transfer_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoUserTransferService"]])
    ], ProdutoComponent);
    return ProdutoComponent;
}());



/***/ }),

/***/ "./src/app/view/sobre/sobre.component.css":
/*!************************************************!*\
  !*** ./src/app/view/sobre/sobre.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvc29icmUvc29icmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/sobre/sobre.component.html":
/*!*************************************************!*\
  !*** ./src/app/view/sobre/sobre.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<p>\n  Trabalho criado por:\n</p>\n<p>\n  - Telmo Coelho\n</p>\n<p>\n  - Vitor Cardoso\n</p>\n"

/***/ }),

/***/ "./src/app/view/sobre/sobre.component.ts":
/*!***********************************************!*\
  !*** ./src/app/view/sobre/sobre.component.ts ***!
  \***********************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sobre',
            template: __webpack_require__(/*! ./sobre.component.html */ "./src/app/view/sobre/sobre.component.html"),
            styles: [__webpack_require__(/*! ./sobre.component.css */ "./src/app/view/sobre/sobre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());



/***/ }),

/***/ "./src/app/view/trata-filhos/trata-filhos.component.css":
/*!**************************************************************!*\
  !*** ./src/app/view/trata-filhos/trata-filhos.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdHJhdGEtZmlsaG9zL3RyYXRhLWZpbGhvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/trata-filhos/trata-filhos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/view/trata-filhos/trata-filhos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n  <h1>Tratamento de Produtos Filhos</h1>\r\n</div>\r\n\r\n<div *ngIf=\"filhos.length>0\" style=\"margin-left:10%;margin-top:5%;float:left\">\r\n  <div *ngFor=\"let filho of filhos\">\r\n    <p>Nome: {{filho.nome}}</p>\r\n    <p>Descrição: {{filho.descricao}}</p>\r\n    <p>Preço: {{filho.preco}}</p>\r\n    <p>Categoria: {{filho.categoria}}</p>\r\n    <div *ngIf=\"filho.dimensao.comprimento.min>-1\">\r\n      <p>Comprimento [{{filho.dimensao.comprimento.min}} - {{filho.dimensao.comprimento.max}}]: <input name=\"comp\" type=\"number\" \r\n      [(ngModel)]=\"comprimento\" [(value)]=\"comprimento\" (ngModelChange)=\"setComp(comprimento)\"required></p>\r\n    </div>\r\n  \r\n    <div *ngIf=\"filho.dimensao.largura.min>-1\">\r\n      <p>Largura [{{filho.dimensao.largura.min}} - {{filho.dimensao.largura.max}}]: <input name=\"larg\" type=\"number\" \r\n      [(ngModel)]=\"largura\" [(value)]=\"largura\" (ngModelChange)=\"setLarg(largura)\"required></p>\r\n    </div>\r\n  \r\n    <div *ngIf=\"filho.dimensao.altura.min>-1\">\r\n      <p>Altura [{{filho.dimensao.altura.min}} - {{filho.dimensao.altura.max}}]: <input name=\"alt\" type=\"number\" \r\n      [(ngModel)]=\"altura\" [(value)]=\"altura\" (ngModelChange)=\"setAlt(altura)\" required></p>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"filho.dimensao.comprimento.min>-1 && filho.dimensao.largura.min>-1 && filho.dimensao.altura.min>-1\">\r\n      <button (click)=\"setDimensoes(comprimento, largura, altura, filho)\">Atribuir Dimensões</button>\r\n    </div>\r\n    <div *ngIf=\"filho.dimensao.comprimento.min==-1 && filho.dimensao.largura.min==-1 && filho.dimensao.altura.min==-1\">\r\n      <button (click)=\"setDimensoes(comprimento, largura, altura, filho)\">Confirmar Produto</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"filhos.length==0\" style=\"margin-right:10%;margin-top:5%;float:left\">\r\n  <p>O produto Selecionado não tem produtos filhos</p>\r\n</div>\r\n\r\n<div style=\"margin-left:10%;margin-top:30%;float:left\">\r\n  <a routerLink=\"/encomenda\"><button (click)=\"postEncomenda()\">Terminar</button></a>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/view/trata-filhos/trata-filhos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/view/trata-filhos/trata-filhos.component.ts ***!
  \*************************************************************/
/*! exports provided: TrataFilhosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrataFilhosComponent", function() { return TrataFilhosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_itemProduto_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/itemProduto.model */ "./src/app/model/itemProduto.model.ts");
/* harmony import */ var _service_item_prod_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/item-prod-transfer.service */ "./src/app/service/item-prod-transfer.service.ts");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/produto.service */ "./src/app/service/produto.service.ts");
/* harmony import */ var _service_encomenda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/encomenda.service */ "./src/app/service/encomenda.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrataFilhosComponent = /** @class */ (function () {
    function TrataFilhosComponent(iptService, prodService, encService) {
        this.iptService = iptService;
        this.prodService = prodService;
        this.encService = encService;
        this.filhos = [];
        this.filhosIp = [];
        this.prodsEncomenda = [];
        this.enc = {
            utilizador_email: null, encomenda_produtos: null
        };
    }
    TrataFilhosComponent.prototype.ngOnInit = function () {
        this.idProdOrig = this.iptService.idProdOriginal;
        this.ip = this.iptService.ip;
        this.prodsEncomenda.push(this.ip);
        this.user = this.iptService.utilizador;
        this.getFilhos();
        this.criarItemProdFilhos();
    };
    TrataFilhosComponent.prototype.getFilhos = function () {
        var _this = this;
        this.prodService.getFilhos(this.idProdOrig).subscribe(function (f) { _this.filhos = f; });
    };
    TrataFilhosComponent.prototype.criarItemProdFilhos = function () {
        var _this = this;
        this.filhos.forEach(function (filho) {
            var f = new _model_itemProduto_model__WEBPACK_IMPORTED_MODULE_1__["ItemProduto"](filho.nome, filho.descricao, filho.preco, filho.materiais, filho.categoria, filho.categoria_pai, 0, 0, 0, filho.prodPai);
            if (filho.dimensao.comprimento.min == -1) {
                f.comp = filho.dimensao.comprimento.max;
            }
            if (filho.dimensao.largura.min == -1) {
                f.larg = filho.dimensao.largura.max;
            }
            if (filho.dimensao.altura.min == -1) {
                f.alt = filho.dimensao.altura.max;
            }
            _this.filhosIp.push(f);
        });
    };
    TrataFilhosComponent.prototype.setDimensoes = function (c, l, a, ip) {
        if (c) {
            ip.comp = c;
        }
        if (l) {
            ip.larg = l;
        }
        if (a) {
            ip.alt = a;
        }
        this.prodsEncomenda.push(ip);
    };
    TrataFilhosComponent.prototype.postEncomenda = function () {
        this.enc.utilizador_email = this.user.email;
        this.enc.encomenda_produtos = this.prodsEncomenda;
        this.encService.insertEncomenda(this.enc).subscribe();
    };
    TrataFilhosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trata-filhos',
            template: __webpack_require__(/*! ./trata-filhos.component.html */ "./src/app/view/trata-filhos/trata-filhos.component.html"),
            styles: [__webpack_require__(/*! ./trata-filhos.component.css */ "./src/app/view/trata-filhos/trata-filhos.component.css")]
        }),
        __metadata("design:paramtypes", [_service_item_prod_transfer_service__WEBPACK_IMPORTED_MODULE_2__["ItemProdTransferService"],
            _service_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"],
            _service_encomenda_service__WEBPACK_IMPORTED_MODULE_4__["EncomendaService"]])
    ], TrataFilhosComponent);
    return TrataFilhosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vitor\Desktop\ARQSI_Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
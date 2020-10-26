(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DWY":
/*!****************************************************************!*\
  !*** ./src/app/routing/delete-by-id/delete-by-id.component.ts ***!
  \****************************************************************/
/*! exports provided: DeleteByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteByIdComponent", function() { return DeleteByIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isAuth/user/nav-bar-user/navbarUser.service */ "5B2U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "toggled": a0 }; };
class DeleteByIdComponent {
    constructor(navBarServiceUser) {
        this.navBarServiceUser = navBarServiceUser;
    }
    ngOnInit() {
    }
    getSideBarState() {
        return this.navBarServiceUser.getSidebarState();
    }
}
DeleteByIdComponent.ɵfac = function DeleteByIdComponent_Factory(t) { return new (t || DeleteByIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"])); };
DeleteByIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteByIdComponent, selectors: [["app-delete-by-id"]], decls: 11, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "page-wrapper", 3, "ngClass"], [1, "page-content"], ["type", "button", 1, "btn", "btn-primary", 2, "display", "block", "margin-left", "150px"]], template: function DeleteByIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.getSideBarState()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRpbmcvZGVsZXRlLWJ5LWlkL2RlbGV0ZS1ieS1pZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteByIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-by-id',
                templateUrl: './delete-by-id.component.html',
                styleUrls: ['./delete-by-id.component.css']
            }]
    }], function () { return [{ type: _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hmersch\Desktop\Projet\Angular_Nodes\Angular\src\main.ts */"zUnb");


/***/ }),

/***/ "1NIe":
/*!***********************************************************************!*\
  !*** ./src/app/isAuth/admin/nav-bar-admin/nav-bar-admin.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavBarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarAdminComponent", function() { return NavBarAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _navbarAdmin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbarAdmin.service */ "Rpoh");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");








function NavBarAdminComponent_li_42_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r4.title);
} }
function NavBarAdminComponent_li_42_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", menu_r4.badge.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r4.badge.text);
} }
function NavBarAdminComponent_li_42_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarAdminComponent_li_42_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggle(menu_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavBarAdminComponent_li_42_a_2_span_4_Template, 2, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](menu_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.badge);
} }
function NavBarAdminComponent_li_42_div_3_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submenu_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", submenu_r16.badge.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](submenu_r16.badge.text);
} }
function NavBarAdminComponent_li_42_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarAdminComponent_li_42_div_3_li_2_span_3_Template, 2, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submenu_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", submenu_r16.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", submenu_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submenu_r16.badge);
} }
function NavBarAdminComponent_li_42_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarAdminComponent_li_42_div_3_li_2_Template, 4, 3, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slide", ctx_r7.getState(menu_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menu_r4.submenus);
} }
const _c0 = function (a0, a1, a2) { return { "active": a0, "sidebar-dropdown": a1, "header-menu": a2 }; };
function NavBarAdminComponent_li_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarAdminComponent_li_42_span_1_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarAdminComponent_li_42_a_2_Template, 5, 5, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarAdminComponent_li_42_div_3_Template, 3, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, menu_r4.active, menu_r4.type === "dropdown", menu_r4.type === "header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.type === "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.type !== "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.type === "dropdown");
} }
function NavBarAdminComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 6 minutes ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Yesterday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "View all notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarAdminComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Jhon doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Jhon doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Jhon doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "View all messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarAdminComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "toggled": a0 }; };
class NavBarAdminComponent {
    constructor(navBarServiceAdmin, auth, router) {
        this.navBarServiceAdmin = navBarServiceAdmin;
        this.auth = auth;
        this.router = router;
        this.menus = [];
        this.menus = navBarServiceAdmin.getMenuList();
    }
    ngOnInit() {
    }
    // Open/close nav
    toggleSidebar() {
        this.navBarServiceAdmin.setSidebarState(!this.navBarServiceAdmin.getSidebarState());
    }
    getSideBarState() {
        return this.navBarServiceAdmin.getSidebarState();
    }
    // Permet de recuperer le service
    toggle(currentMenu) {
        if (currentMenu.type === 'dropdown') {
            this.menus.forEach(element => {
                if (element === currentMenu) {
                    currentMenu.active = !currentMenu.active;
                }
                else {
                    element.active = false;
                }
            });
        }
    }
    getState(currentMenu) {
        if (currentMenu.active) {
            return 'down';
        }
        else {
            return 'up';
        }
    }
    // logout session
    logout() {
        this.auth.logout();
        this.router.navigate(['/auth/login'], { queryParams: { loggedOut: 'success' } });
    }
}
NavBarAdminComponent.ɵfac = function NavBarAdminComponent_Factory(t) { return new (t || NavBarAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbarAdmin_service__WEBPACK_IMPORTED_MODULE_2__["NavBarServiceAdmin"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NavBarAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarAdminComponent, selectors: [["app-nav-bar-admin"]], decls: 64, vars: 4, consts: [["lang", "en"], ["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["name", "description", "content", "Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3"], [1, "page-wrapper", 3, "ngClass"], ["id", "show-sidebar", 1, "btn", "btn-sm", "btn-dark", 3, "click"], [1, "fas", "fa-bars"], ["id", "sidebar", 1, "sidebar"], [1, "sidebar-content"], [1, "sidebar-header"], ["href", "/"], ["id", "close-sidebar", 3, "click"], [1, "fas", "fa-times"], [1, "sidebar-profile"], [1, "user-pic"], ["src", "https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg", "alt", "User picture", 1, "img-responsive", "img-rounded"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "user-status"], [1, "fa", "fa-circle"], [1, "sidebar-search"], [1, "input-group"], ["type", "text", "placeholder", "Search...", 1, "form-control", "search-menu"], [1, "input-group-append"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "sidebar-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], ["dropdown", "", 1, "dropdown"], ["href", "#", "dropdownToggle", ""], [1, "fa", "fa-bell"], [1, "badge", "badge-pill", "badge-warning", "notification"], ["class", "dropdown-menu notifications", 4, "dropdownMenu"], [1, "fa", "fa-envelope"], [1, "badge", "badge-pill", "badge-success", "notification"], ["class", "dropdown-menu messages", 4, "dropdownMenu"], ["dropdownToggle", ""], [1, "fa", "fa-cog"], [1, "badge-sonar"], ["class", "dropdown-menu", 4, "dropdownMenu"], ["href", "#", 3, "click"], [1, "fa", "fa-power-off"], [3, "ngClass"], [4, "ngIf"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "sidebar-submenu", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["class", "badge badge-pill", 3, "ngClass", 4, "ngIf"], [1, "badge", "badge-pill", 3, "ngClass"], [1, "sidebar-submenu"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"], [1, "dropdown-menu", "notifications"], [1, "notifications-header"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item"], [1, "notification-content"], [1, "icon"], [1, "fas", "fa-check", "text-success", "border", "border-success"], [1, "content"], [1, "notification-detail"], [1, "notification-time"], [1, "fas", "fa-exclamation", "text-info", "border", "border-info"], [1, "fas", "fa-exclamation-triangle", "text-warning", "border", "border-warning"], ["href", "#", 1, "dropdown-item", "text-center"], [1, "dropdown-menu", "messages"], [1, "messages-header"], [1, "message-content"], [1, "pic"], ["src", "https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg", "alt", ""], [1, "message-title"], [1, "message-detail"], [1, "dropdown-menu"], ["href", "/profile", 1, "dropdown-item"]], template: function NavBarAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sidebar template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarAdminComponent_Template_a_click_10_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarAdminComponent_Template_div_click_17_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Jhon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NavBarAdminComponent_li_42_Template, 4, 8, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, NavBarAdminComponent_div_49_Template, 35, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, NavBarAdminComponent_div_55_Template, 38, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, NavBarAdminComponent_div_60_Template, 7, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarAdminComponent_Template_a_click_62_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.getSideBarState()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: ["@keyframes swing {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    10% {\r\n      transform: rotate(10deg);\r\n    }\r\n    30% {\r\n      transform: rotate(0deg);\r\n    }\r\n    40% {\r\n      transform: rotate(-10deg);\r\n    }\r\n    50% {\r\n      transform: rotate(0deg);\r\n    }\r\n    60% {\r\n      transform: rotate(5deg);\r\n    }\r\n    70% {\r\n      transform: rotate(0deg);\r\n    }\r\n    80% {\r\n      transform: rotate(-5deg);\r\n    }\r\n    100% {\r\n      transform: rotate(0deg);\r\n    }\r\n  }\r\n  @keyframes sonar {\r\n    0% {\r\n      transform: scale(0.9);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      transform: scale(2);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0px;\r\n    z-index: 999;\r\n    transition: left .3s ease;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    transition: color .3s ease;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\r\n    max-height: calc(100% - 30px);\r\n    height: calc(100% - 30px);\r\n    overflow-y: auto;\r\n    position: relative;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    flex-grow: 1;\r\n    text-decoration: none;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n    transition: color .3s ease;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    overflow: hidden;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 60px;\r\n    padding: 2px;\r\n    border-radius: 12px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    object-fit: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    margin-top: 4px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 8px;\r\n    margin-right: 4px;\r\n    color: #5cb85c;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    border-left: 0;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n    padding-bottom: 10px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    padding: 15px 20px 5px 20px;\r\n    display: inline-block;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    position: relative;\r\n    padding: 8px 30px 8px 20px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    font-size: 12px;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    border-radius: 4px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]::before {\r\n    color: #16c7ff;\r\n    display: inline-block;\r\n    animation: swing ease-in-out .5s 1 alternate;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 8px;\r\n    margin-left: 5px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    background: 0 0;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 14px;\r\n    transition: transform .3s ease;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 5px 0;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    content: \"\\f111\";\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    display: inline-block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    margin-right: 10px;\r\n    font-size: 8px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 0px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    transform: rotate(90deg);\r\n    right: 15px;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n    display: flex;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    position: static;\r\n    display: flex;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    bottom: 31px !important;;\r\n    left: 0 !important;\r\n    top: initial !important;\r\n    right: 0 !important;\r\n    transform: none !important;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    font-size: .9rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    padding: .25rem 1rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .messages-header[_ngcontent-%COMP%] {\r\n    padding: 0 1rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    object-fit: cover;\r\n    height: 100%;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    line-height: 1.6;\r\n    padding-left: 5px;\r\n    width: calc(100% - 40px);\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-detail[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    padding: .25rem 1rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notifications-header[_ngcontent-%COMP%] {\r\n    padding: 0 1rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    text-align: center;\r\n    line-height: 35px;\r\n    border-radius: 4px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    line-height: 1.6;\r\n    padding-left: 5px;\r\n    width: calc(100% - 40px);\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\r\n    font-size: .7rem;\r\n    color: #828282;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification-detail[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .badge-sonar[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background: #980303;\r\n    border-radius: 50%;\r\n    height: 8px;\r\n    width: 8px;\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .badge-sonar[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border: 2px solid #980303;\r\n    opacity: 0;\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    height: 100%;\r\n    animation: sonar 1.5s infinite;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%] {\r\n    background-color: #1d1d1d;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #2b2b2b;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    border-color: #2b2b2b;\r\n    box-shadow: none;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n    color: #bdbdbd;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\r\n    color: red;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus    + span[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    background-color: #2b2b2b;\r\n    border: none;\r\n    margin-left: 1px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #6c7b88;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\r\n    background-color: #131212;;\r\n    box-shadow: 0px -1px 5px #131212;\r\n    border-top: 1px solid #3a3a3a;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n    border-left: none;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\r\n    border-right: none;\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: rgba(29, 29, 29, 0.8);\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    border-color: rgba(255, 255, 255, 0.1);\r\n    box-shadow: none;\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\r\n    background-color: rgba(43, 43, 43, 0.5);\r\n    box-shadow: 0px -1px 5px rgba(43, 43, 43, 0.5);\r\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n  }\r\n  \r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n        background: #31353D;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n        border-top: 1px solid #3a3f48;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n        border-color: transparent;\r\n        box-shadow: none;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #818896;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n        color: #b8bfce;\r\n    }\r\n  .page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n        color: #bdbdbd;\r\n    }\r\n  .page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\r\n        color: #ffffff;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        color: #16c7ff;\r\n        text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n        background: #3a3f48;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #6c7b88;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNBdXRoL2FkbWluL25hdi1iYXItYWRtaW4vbmF2LWJhci1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDRTtJQUNFO01BRVUsdUJBQXVCO0lBQ2pDO0lBQ0E7TUFFVSx3QkFBd0I7SUFDbEM7SUFDQTtNQUVVLHVCQUF1QjtJQUNqQztJQUNBO01BRVUseUJBQXlCO0lBQ25DO0lBQ0E7TUFFVSx1QkFBdUI7SUFDakM7SUFDQTtNQUVVLHVCQUF1QjtJQUNqQztJQUNBO01BRVUsdUJBQXVCO0lBQ2pDO0lBQ0E7TUFFVSx3QkFBd0I7SUFDbEM7SUFDQTtNQUVVLHVCQUF1QjtJQUNqQztFQUNGO0VBYUE7SUFDRTtNQUVVLHFCQUFxQjtNQUM3QixVQUFVO0lBQ1o7SUFDQTtNQUVVLG1CQUFtQjtNQUMzQixVQUFVO0lBQ1o7RUFDRjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUVaLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UscUJBQXFCO0lBRXJCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFFbEIsYUFBYTtJQUVMLG1CQUFtQjtFQUM3QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUVULFlBQVk7SUFDcEIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUVmLDBCQUEwQjtFQUM1QjtFQUVBLDJEQUEyRDtFQUMzRDtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFFSyxpQkFBaUI7SUFDcEIsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0VBSUYsZ0VBQWdFO0VBQzlEO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBRUEsOERBQThEO0VBQzlEO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7SUFFYiw0Q0FBNEM7RUFDdEQ7RUFDQTs7SUFFRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFHVCw4QkFBOEI7RUFFaEM7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLGVBQWU7RUFDakI7RUFDQTtJQUVVLHdCQUF3QjtJQUNoQyxXQUFXO0VBQ2I7RUFFQSxzRUFBc0U7RUFDdEU7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFFVCxhQUFhO0VBQ2Y7RUFDQTtJQUVVLFlBQVk7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBRWhCLGFBQWE7RUFDZjtFQUNBO0lBRVUsWUFBWTtFQUN0QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBRVgsMEJBQTBCO0lBQ2xDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFFSyxpQkFBaUI7SUFDcEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBRUosOEJBQThCO0VBQ3hDO0VBRUEsK0VBQStFO0VBQy9FO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7OztJQUdFLDZCQUE2QjtFQUMvQjtFQUNBOztJQUVFLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7RUFDQTs7Ozs7Ozs7SUFRRSxjQUFjO0VBQ2hCO0VBQ0E7Ozs7OztJQU1FLGNBQWM7RUFDaEI7RUFFQTtJQUNFLFVBQVU7RUFDWjtFQUVBOzs7O0lBSUUsY0FBYztFQUNoQjtFQUNBOzs7O0lBSUUseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHVDQUF1QztFQUN6QztFQUNBOzs7SUFHRSw4Q0FBOEM7RUFDaEQ7RUFDQTs7SUFFRSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0VBQ2xCO0VBQ0E7Ozs7SUFJRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLHVDQUF1QztJQUN2Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0VBQ2hEO0VBR0UsOEZBQThGO0VBRTlGO1FBQ0ksbUJBQW1CO0lBQ3ZCO0VBRUE7OztRQUdJLDZCQUE2QjtJQUNqQztFQUVBOztRQUVJLHlCQUF5QjtRQUN6QixnQkFBZ0I7SUFDcEI7RUFFQTs7Ozs7O1FBTUksY0FBYztJQUNsQjtFQUVBOzs7O1FBSUksY0FBYztJQUNsQjtFQUVBO1FBQ0ksY0FBYztJQUNsQjtFQUVBO1FBQ0ksY0FBYztJQUNsQjtFQUVBOzs7O1FBSUksY0FBYztRQUNkLGdEQUFnRDtJQUNwRDtFQUVBOzs7O1FBSUksbUJBQW1CO0lBQ3ZCO0VBRUE7UUFDSSxjQUFjO0lBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaXNBdXRoL2FkbWluL25hdi1iYXItYWRtaW4vbmF2LWJhci1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHN3aW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc29uYXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc29uYXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IC4zcyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLWhlYWRlciA+IGEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLWhlYWRlciAjY2xvc2Utc2lkZWJhciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1oZWFkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItcHJvZmlsZSAudXNlci1waWMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItcGljIGltZyB7XHJcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItcHJvZmlsZSAudXNlci1pbmZvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItcHJvZmlsZSAudXNlci1pbmZvIC51c2VyLXJvbGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyAudXNlci1zdGF0dXMge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyAudXNlci1zdGF0dXMgaSB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgY29sb3I6ICM1Y2I4NWM7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1zZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItc2VhcmNoID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLW1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSAuaGVhZGVyLW1lbnUgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweCA1cHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCAuc2lkZWJhci1tZW51IHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogOHB4IDMwcHggOHB4IDIwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSB1bCBsaSBhIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCAuc2lkZWJhci1tZW51IHVsIGxpIGE6aG92ZXIgPiBpOjpiZWZvcmUge1xyXG4gICAgY29sb3I6ICMxNmM3ZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgLjVzIDEgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHN3aW5nIGVhc2UtaW4tb3V0IC41cyAxIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCAuc2lkZWJhci1tZW51IHVsIGxpIGEgc3Bhbi5sYWJlbCxcclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmJhZGdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biA+IGE6YWZ0ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSB1bCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjExMVwiO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhIC5iYWRnZSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhIC5sYWJlbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93bi5hY3RpdmUgPiBhOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICByaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlLWZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgPiBkaXYge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgPiBkaXYgPiBhIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyID4gZGl2IGEgLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3R0b206IDMxcHggIWltcG9ydGFudDs7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2VzLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCAucGljIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5tZXNzYWdlcyAubWVzc2FnZS1jb250ZW50IC5waWMgaW1nIHtcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCAuY29udGVudCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCAuY29udGVudCAubWVzc2FnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCAuY29udGVudCAubWVzc2FnZS1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5ub3RpZmljYXRpb25zIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgLm5vdGlmaWNhdGlvbnMgLm5vdGlmaWNhdGlvbnMtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5ub3RpZmljYXRpb25zIC5ub3RpZmljYXRpb24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubm90aWZpY2F0aW9ucyAubm90aWZpY2F0aW9uLWNvbnRlbnQgLmljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubm90aWZpY2F0aW9ucyAubm90aWZpY2F0aW9uLWNvbnRlbnQgLmljb24gaSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgLm5vdGlmaWNhdGlvbnMgLm5vdGlmaWNhdGlvbi1jb250ZW50IC5jb250ZW50IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5ub3RpZmljYXRpb25zIC5ub3RpZmljYXRpb24tY29udGVudCAuY29udGVudCAubm90aWZpY2F0aW9uLXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgLm5vdGlmaWNhdGlvbnMgLm5vdGlmaWNhdGlvbi1jb250ZW50IC5jb250ZW50IC5ub3RpZmljYXRpb24tZGV0YWlsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAuYmFkZ2Utc29uYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzk4MDMwMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5iYWRnZS1zb25hcjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTgwMzAzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNvbmFyIDEuNXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc29uYXIgMS41cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1kZWZhdWx0IHRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1wcm9maWxlLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXNlYXJjaCxcclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMmIyYjJiO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzJiMmIyYjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyAudXNlci1yb2xlLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyAudXNlci1zdGF0dXMsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuICAuc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgPiBhLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgPiBkaXYgPiBhLFxyXG4gIC5zaWRlYmFyICNjbG9zZS1zaWRlYmFyIHtcclxuICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IHVsIGxpOmhvdmVyID4gYSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSA+IGEsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItcHJvZmlsZSAudXNlci1pbmZvLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWhlYWRlciA+IGE6aG92ZXIsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyID4gZGl2ID4gYTpob3ZlciBpLFxyXG4gIC5zaWRlYmFyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIHVsIGxpOmhvdmVyIGEgaSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6aG92ZXI6YmVmb3JlLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudTpmb2N1cyArIHNwYW4sXHJcbiAgLnNpZGViYXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93bi5hY3RpdmUgYSBpIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IHVsIGxpIGEgaSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcclxuICAuc2lkZWJhciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcclxuICAgIGNvbG9yOiAjNmM3Yjg4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTIxMjs7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggIzEzMTIxMjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2EzYTNhO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciA+IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyOSwgMjksIDAuOCk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLnNpZGViYXItYmcgLnNpZGViYXItcHJvZmlsZSxcclxuICAuc2lkZWJhci5zaWRlYmFyLWJnIC5zaWRlYmFyLXNlYXJjaCxcclxuICAuc2lkZWJhci5zaWRlYmFyLWJnIC5zaWRlYmFyLW1lbnUge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICB9XHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuc2lkZWJhci5zaWRlYmFyLWJnIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpLFxyXG4gIC5zaWRlYmFyLnNpZGViYXItYmcgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biBkaXYsXHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIH1cclxuICAuc2lkZWJhci5zaWRlYmFyLWJnIC5zaWRlYmFyLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggcmdiYSg0MywgNDMsIDQzLCAwLjUpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICB9XHJcblxyXG4gIFxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoaWxsZXItdGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMTM1M0Q7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2gsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2EzZjQ4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItcm9sZSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItc3RhdHVzLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQ+YSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogIzgxODg5NjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpOmhvdmVyPmEsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlPmEsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZD5hOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2I4YmZjZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXIge1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhcjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgdWwgbGk6aG92ZXIgYSBpLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6aG92ZXI6YmVmb3JlLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnU6Zm9jdXMrc3BhbixcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93bi5hY3RpdmUgYSBpIHtcclxuICAgICAgICBjb2xvcjogIzE2YzdmZjtcclxuICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggcmdiYSgyMiwgMTk5LCAyNTUsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIGksXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gZGl2LFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNhM2Y0ODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzZjN2I4ODtcclxuICAgIH1cclxuXHJcblxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('up <=> down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar-admin',
                templateUrl: './nav-bar-admin.component.html',
                styleUrls: ['./nav-bar-admin.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('up <=> down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200))
                    ])
                ]
            }]
    }], function () { return [{ type: _navbarAdmin_service__WEBPACK_IMPORTED_MODULE_2__["NavBarServiceAdmin"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "5B2U":
/*!****************************************************************!*\
  !*** ./src/app/isAuth/user/nav-bar-user/navbarUser.service.ts ***!
  \****************************************************************/
/*! exports provided: NavBarServiceUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarServiceUser", function() { return NavBarServiceUser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavBarServiceUser {
    constructor() {
        this.toggled = false;
        this.menus = [
            {
                title: 'General',
                type: 'header'
            },
            {
                title: 'Dashboard',
                icon: 'fa fa-tachometer-alt',
                active: false,
                type: 'dropdown',
                badge: {
                    text: '',
                    class: ''
                },
                submenus: [
                    {
                        title: 'AddUser',
                        badge: {
                            text: '0',
                            class: 'badge-dark'
                        },
                        href: '/addUser'
                    },
                    {
                        title: 'GetUser',
                        badge: {
                            text: '0',
                            class: 'badge-dark'
                        },
                        href: '/getUser'
                    },
                ]
            },
            {
                title: 'E-commerce',
                icon: 'fa fa-shopping-cart',
                active: false,
                type: 'dropdown',
                badge: {
                    text: '',
                    class: ''
                },
                submenus: [
                    {
                        title: 'updateID',
                        badge: {
                            text: '0 ',
                            class: 'badge-dark'
                        },
                        href: '/updateID'
                    },
                    {
                        title: 'deleteID',
                        badge: {
                            text: '0',
                            class: 'badge-dark'
                        },
                        href: '/deleteID'
                    },
                    {
                        title: 'Other',
                        badge: {
                            text: '0',
                            class: 'badge-dark'
                        },
                        href: '/'
                    },
                ]
            },
            {
                title: 'Components',
                icon: 'far fa-gem',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'General',
                    },
                    {
                        title: 'Panels'
                    },
                    {
                        title: 'Tables'
                    },
                    {
                        title: 'Icons'
                    },
                    {
                        title: 'Forms'
                    }
                ]
            },
            {
                title: 'Charts',
                icon: 'fa fa-chart-line',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'Pie chart',
                    },
                    {
                        title: 'Line chart'
                    },
                    {
                        title: 'Bar chart'
                    },
                    {
                        title: 'Histogram'
                    }
                ]
            },
            {
                title: 'Maps',
                icon: 'fa fa-globe',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'Google maps',
                    },
                    {
                        title: 'Open street map'
                    }
                ]
            },
            {
                title: 'Extra',
                type: 'header'
            },
            {
                title: 'Documentation',
                icon: 'fa fa-book',
                active: false,
                type: 'simple',
                badge: {
                    text: 'Beta',
                    class: 'badge-primary'
                },
            },
            {
                title: 'Calendar',
                icon: 'fa fa-calendar',
                active: false,
                type: 'simple'
            },
            {
                title: 'Examples',
                icon: 'fa fa-folder',
                active: false,
                type: 'simple'
            }
        ];
    }
    toggle() {
        this.toggled = !this.toggled;
    }
    getSidebarState() {
        return this.toggled;
    }
    setSidebarState(state) {
        this.toggled = state;
    }
    getMenuList() {
        return this.menus;
    }
}
NavBarServiceUser.ɵfac = function NavBarServiceUser_Factory(t) { return new (t || NavBarServiceUser)(); };
NavBarServiceUser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavBarServiceUser, factory: NavBarServiceUser.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarServiceUser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* That means, if the user is not logged in and tries to access a specific route, then it will redirect back to /auth/login.
Another scenario is that, if the user is logged in and tries to access the/auth/register or /auth/login page,
 then it will be redirected to the home page and can’t access these routes because he is already logged in. */
/*So, basically what I have done is that first, it will check if the user is logged in or not using isAuthenticated() method.
 If it is logged in, then it will return the authState() function.
 That function then will check if the user is trying to access the /auth/register or /auth/login page.
If it does, then we will redirect to the home page; otherwise, it will continue.
 If the user is not logged in, then it will return the noAuthState() function. In which, we will be redirected to /auth/login page.
 So, this guard will act as middleware, and if we want to activate on a particular route, then we can do it where we have defined the routes.
*/




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    authState() {
        if (this.isLoginOrRegister()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
    notAuthState() {
        if (this.isLoginOrRegister()) {
            return true;
        }
        this.router.navigate(['/auth/login']);
        return false;
    }
    isLoginOrRegister() {
        if (this.url.includes('/auth/login') || this.url.includes('/auth/register')) {
            return true;
        }
        return false;
    }
    canActivate(next, state) {
        this.url = state.url;
        if (this.auth.isAuthenticated()) {
            return this.authState();
        }
        return this.notAuthState();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Rpoh":
/*!*******************************************************************!*\
  !*** ./src/app/isAuth/admin/nav-bar-admin/navbarAdmin.service.ts ***!
  \*******************************************************************/
/*! exports provided: NavBarServiceAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarServiceAdmin", function() { return NavBarServiceAdmin; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavBarServiceAdmin {
    constructor() {
        this.toggled = false;
        this.menus = [
            {
                title: 'General',
                type: 'header'
            },
            {
                title: 'Dashboard',
                icon: 'fa fa-tachometer-alt',
                active: false,
                type: 'dropdown',
                badge: {
                    text: '',
                    class: ''
                },
                submenus: [
                    {
                        title: 'AddUser',
                        badge: {
                            text: '0',
                            class: 'badge-dark'
                        },
                        href: '/addUser'
                    },
                    {
                        title: 'GetUser',
                        badge: {
                            text: '0',
                            class: 'badge-dark'
                        },
                        href: '/getUser'
                    },
                ]
            },
            {
                title: 'E-commerce',
                icon: 'fa fa-shopping-cart',
                active: false,
                type: 'dropdown',
                badge: {
                    text: '',
                    class: ''
                },
                submenus: [
                    {
                        title: 'updateID',
                        badge: {
                            text: '0 ',
                            class: 'badge-dark'
                        },
                        href: '/updateID'
                    },
                    {
                        title: 'deleteID',
                        badge: {
                            text: '0',
                            class: 'badge-dark'
                        },
                        href: '/deleteID'
                    },
                    {
                        title: 'Other',
                        badge: {
                            text: '0',
                            class: 'badge-dark'
                        },
                        href: '/'
                    },
                ]
            },
            {
                title: 'Components',
                icon: 'far fa-gem',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'General',
                    },
                    {
                        title: 'Panels'
                    },
                    {
                        title: 'Tables'
                    },
                    {
                        title: 'Icons'
                    },
                    {
                        title: 'Forms'
                    }
                ]
            },
            {
                title: 'Charts',
                icon: 'fa fa-chart-line',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'Pie chart',
                    },
                    {
                        title: 'Line chart'
                    },
                    {
                        title: 'Bar chart'
                    },
                    {
                        title: 'Histogram'
                    }
                ]
            },
            {
                title: 'Maps',
                icon: 'fa fa-globe',
                active: false,
                type: 'dropdown',
                submenus: [
                    {
                        title: 'Google maps',
                    },
                    {
                        title: 'Open street map'
                    }
                ]
            },
            {
                title: 'Extra',
                type: 'header'
            },
            {
                title: 'Documentation',
                icon: 'fa fa-book',
                active: false,
                type: 'simple',
                badge: {
                    text: 'Beta',
                    class: 'badge-primary'
                },
            },
            {
                title: 'Calendar',
                icon: 'fa fa-calendar',
                active: false,
                type: 'simple'
            },
            {
                title: 'Examples',
                icon: 'fa fa-folder',
                active: false,
                type: 'simple'
            }
        ];
    }
    toggle() {
        this.toggled = !this.toggled;
    }
    getSidebarState() {
        return this.toggled;
    }
    setSidebarState(state) {
        this.toggled = state;
    }
    getMenuList() {
        return this.menus;
    }
}
NavBarServiceAdmin.ɵfac = function NavBarServiceAdmin_Factory(t) { return new (t || NavBarServiceAdmin)(); };
NavBarServiceAdmin.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavBarServiceAdmin, factory: NavBarServiceAdmin.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarServiceAdmin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _isNotAuth_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isNotAuth/header/header.component */ "qAfB");
/* harmony import */ var _isAuth_user_nav_bar_user_nav_bar_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isAuth/user/nav-bar-user/nav-bar-user.component */ "g3e5");
/* harmony import */ var _isAuth_admin_nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isAuth/admin/nav-bar-admin/nav-bar-admin.component */ "1NIe");








function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar-admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.auth.isAdmin());
} }
class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'Front Dev';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _isNotAuth_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _isAuth_user_nav_bar_user_nav_bar_user_component__WEBPACK_IMPORTED_MODULE_5__["NavBarUserComponent"], _isAuth_admin_nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_6__["NavBarAdminComponent"]], styles: [".page-wrapper[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n  }\r\n  .page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n    transition: padding-left .3s ease;\r\n  }\r\n  @media screen and (min-width: 768px) {\r\n    .page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n      padding-left: 300px;\r\n    }\r\n  }\r\n  .page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 998;\r\n    background: #000;\r\n    opacity: .5;\r\n    display: none;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]   .overlay.show[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n  }\r\n  .page-wrapper[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\r\n    left: 0px;\r\n  }\r\n  .page-wrapper.toggled[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n  }\r\n  .page-wrapper[_ngcontent-%COMP%]   .attribution[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    letter-spacing: 1px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUJBQWlCO0lBRWpCLGlDQUFpQztFQUNuQztFQUNBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtFQUNBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBwYWRkaW5nLWxlZnQgLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLWxlZnQgLjNzIGVhc2U7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCAub3ZlcmxheS5zaG93IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYWdlLXdyYXBwZXIgLnNpZGViYXIge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuICAucGFnZS13cmFwcGVyLnRvZ2dsZWQgLnBhZ2UtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5wYWdlLXdyYXBwZXIgLmF0dHJpYnV0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "TmP7":
/*!****************************************************************!*\
  !*** ./src/app/routing/update-by-id/update-by-id.component.ts ***!
  \****************************************************************/
/*! exports provided: UpdateByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateByIdComponent", function() { return UpdateByIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isAuth/user/nav-bar-user/navbarUser.service */ "5B2U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "toggled": a0 }; };
class UpdateByIdComponent {
    constructor(navBarServiceUser) {
        this.navBarServiceUser = navBarServiceUser;
    }
    ngOnInit() {
    }
    getSideBarState() {
        return this.navBarServiceUser.getSidebarState();
    }
}
UpdateByIdComponent.ɵfac = function UpdateByIdComponent_Factory(t) { return new (t || UpdateByIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"])); };
UpdateByIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateByIdComponent, selectors: [["app-update-by-id"]], decls: 11, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "page-wrapper", 3, "ngClass"], [1, "page-content"], ["type", "button", 1, "btn", "btn-primary", 2, "display", "block", "margin-left", "150px"]], template: function UpdateByIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.getSideBarState()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRpbmcvdXBkYXRlLWJ5LWlkL3VwZGF0ZS1ieS1pZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateByIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-by-id',
                templateUrl: './update-by-id.component.html',
                styleUrls: ['./update-by-id.component.css']
            }]
    }], function () { return [{ type: _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"] }]; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isAuth/user/nav-bar-user/navbarUser.service */ "5B2U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "toggled": a0 }; };
class ProfileComponent {
    constructor(navBarServiceUser) {
        this.navBarServiceUser = navBarServiceUser;
    }
    ngOnInit() {
    }
    getSideBarState() {
        return this.navBarServiceUser.getSidebarState();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "page-wrapper", 3, "ngClass"], [1, "page-content"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " profil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.getSideBarState()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"] }]; }, null); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "LS6v");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "P+IX");












const routes = [
    {
        path: 'auth',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] }
        ]
    },
];
class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _isNotAuth_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isNotAuth/header/header.component */ "qAfB");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _routing_post_user_post_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/post-user/post-user.component */ "uEnK");
/* harmony import */ var _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-content/home-content.component */ "fmvc");
/* harmony import */ var _routing_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routing/get-user/get-user.component */ "d2Ar");
/* harmony import */ var _routing_delete_by_id_delete_by_id_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routing/delete-by-id/delete-by-id.component */ "+DWY");
/* harmony import */ var _routing_update_by_id_update_by_id_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routing/update-by-id/update-by-id.component */ "TmP7");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _multiple_cards_multiple_cards_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./multiple-cards/multiple-cards.component */ "eJma");
/* harmony import */ var _isAuth_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isAuth/admin/admin.component */ "ral3");
/* harmony import */ var _isAuth_user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isAuth/user/user.component */ "e3Ke");
/* harmony import */ var _isAuth_user_nav_bar_user_nav_bar_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./isAuth/user/nav-bar-user/nav-bar-user.component */ "g3e5");
/* harmony import */ var _isAuth_admin_nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./isAuth/admin/nav-bar-admin/nav-bar-admin.component */ "1NIe");
// General






// Modules

// Components




// Components Home




//ngx_bootstrap










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_15__["AlertModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _isNotAuth_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_11__["HomeContentComponent"],
        _routing_post_user_post_user_component__WEBPACK_IMPORTED_MODULE_10__["PostUserComponent"],
        _routing_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_12__["GetUserComponent"],
        _routing_delete_by_id_delete_by_id_component__WEBPACK_IMPORTED_MODULE_13__["DeleteByIdComponent"],
        _routing_update_by_id_update_by_id_component__WEBPACK_IMPORTED_MODULE_14__["UpdateByIdComponent"],
        _multiple_cards_multiple_cards_component__WEBPACK_IMPORTED_MODULE_17__["MultipleCardsComponent"],
        _isAuth_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
        _isAuth_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
        _isAuth_user_nav_bar_user_nav_bar_user_component__WEBPACK_IMPORTED_MODULE_20__["NavBarUserComponent"],
        _isAuth_admin_nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_21__["NavBarAdminComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_15__["AlertModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _isNotAuth_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                    _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_11__["HomeContentComponent"],
                    _routing_post_user_post_user_component__WEBPACK_IMPORTED_MODULE_10__["PostUserComponent"],
                    _routing_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_12__["GetUserComponent"],
                    _routing_delete_by_id_delete_by_id_component__WEBPACK_IMPORTED_MODULE_13__["DeleteByIdComponent"],
                    _routing_update_by_id_update_by_id_component__WEBPACK_IMPORTED_MODULE_14__["UpdateByIdComponent"],
                    _multiple_cards_multiple_cards_component__WEBPACK_IMPORTED_MODULE_17__["MultipleCardsComponent"],
                    _isAuth_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                    _isAuth_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                    _isAuth_user_nav_bar_user_nav_bar_user_component__WEBPACK_IMPORTED_MODULE_20__["NavBarUserComponent"],
                    _isAuth_admin_nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_21__["NavBarAdminComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_15__["AlertModule"].forRoot(),
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function RegisterComponent_div_8_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r11);
} }
function RegisterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_8_ul_1_Template, 3, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.errors);
} }
function RegisterComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_13_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors.required);
} }
function RegisterComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_19_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
} }
function RegisterComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_25_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.required);
} }
function RegisterComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_31_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);
} }
class RegisterComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formData = {};
        this.errors = [];
    }
    ngOnInit() {
    }
    register() {
        this.errors = [];
        this.auth.register(this.formData)
            .subscribe(() => {
            this.router.navigate(['/auth/login'], { queryParams: { registered: 'success' } });
        }, (errorResponse) => {
            this.errors.push(errorResponse.error.message);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 34, vars: 10, consts: [[1, "container"], [1, "row"], [1, "col-md-5"], [1, "page-title"], ["registerForm", "ngForm"], [1, "form-group"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "username"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["for", "email"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "passwordConfirmation"], ["type", "password", "name", "passwordConfirmation", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordConfirmation", "ngModel"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled", "click"], [1, "alert", "alert-danger"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) { return ctx.formData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) { return ctx.formData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) { return ctx.formData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_29_listener($event) { return ctx.formData.passwordConfirmation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_div_31_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_32_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.passwordConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.notify, " ");
} }
function LoginComponent_div_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r5, " ");
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_8_p_1_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.errors);
} }
function LoginComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must be a valid email format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_12_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loginForm.controls["email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loginForm.controls["email"].errors.pattern);
} }
function LoginComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_17_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loginForm.controls["password"].errors.required);
} }
class LoginComponent {
    constructor(auth, router, fb, route) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.errors = [];
    }
    ngOnInit() {
        this.initForm();
        this.route.queryParams.subscribe((params) => {
            const key1 = 'registered';
            const key2 = 'loggedOut';
            if (params[key1] === 'success') {
                this.notify = 'You have been successfully registered. Please Log in';
            }
            if (params[key2] === 'success') {
                this.notify = 'You have been loggedout successfully';
            }
        });
    }
    initForm() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    isValidInput(fieldName) {
        return this.loginForm.controls[fieldName].invalid &&
            (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
    }
    login() {
        this.errors = [];
        this.auth.login(this.loginForm.value)
            .subscribe((token) => {
            this.router.navigate(['/']);
        }, (errorResponse) => {
            this.errors.push(errorResponse.error.message);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 6, consts: [[1, "container"], [1, "row"], [1, "col-md-5"], [1, "page-title"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "formControlName", "email", 1, "form-control"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notify);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValidInput("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValidInput("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "d2Ar":
/*!********************************************************!*\
  !*** ./src/app/routing/get-user/get-user.component.ts ***!
  \********************************************************/
/*! exports provided: GetUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserComponent", function() { return GetUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isAuth/user/nav-bar-user/navbarUser.service */ "5B2U");
/* harmony import */ var _routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routing.service */ "epPz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var _multiple_cards_multiple_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../multiple-cards/multiple-cards.component */ "eJma");







function GetUserComponent_span_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "alert", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClosed", function GetUserComponent_span_9_div_1_Template_alert_onClosed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const alert_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onClosed(alert_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r3.type)("dismissible", ctx_r2.dismissible)("dismissOnTimeout", alert_r3.timeout);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alert_r3.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alert_r3.msg, " ");
} }
function GetUserComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GetUserComponent_span_9_div_1_Template, 6, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.alerts);
} }
function GetUserComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-multiple-cards", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx_r1.users);
} }
const _c0 = function (a0) { return { "toggled": a0 }; };
class GetUserComponent {
    constructor(navBarServiceUser, routingService) {
        this.navBarServiceUser = navBarServiceUser;
        this.routingService = routingService;
        this.alerts = [];
        this.dismissible = true;
        this.btndisabled = false;
        this.users = {};
    }
    ngOnInit() {
        this.dashboard = this.navBarServiceUser.menus[1];
    }
    getSideBarState() {
        return this.navBarServiceUser.getSidebarState();
    }
    onClosed(dismissedAlert) {
        this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }
    getData() {
        this.routingService.getData()
            .subscribe(data => {
            this.btndisabled = true;
            // tslint:disable-next-line:no-string-literal
            this.dashboard.submenus[1].badge.text = data.length;
            this.dashboard.submenus[1].badge.class = 'badge-success';
            this.dashboard.badge.text = 'New';
            this.dashboard.badge.class = 'badge-success';
            this.alerts.push({
                type: 'success',
                status: 'Status 200',
                msg: 'Sucess Request',
                timeout: 5000
            });
            this.users = data;
        }, (errorResponse) => {
            const status = `Status ${errorResponse.status} ${errorResponse.statusText} on ${errorResponse.url}`;
            this.alerts.push({
                type: 'danger',
                status: `${status}`,
                msg: errorResponse.error.message,
                timeout: 5000
            });
            this.dashboard.badge.class = 'badge-warning';
            this.dashboard.badge.text = 'Echec';
            this.dashboard.badge.class = 'badge-danger';
            this.dashboard.submenus[1].badge.class = 'badge-danger';
        });
    }
}
GetUserComponent.ɵfac = function GetUserComponent_Factory(t) { return new (t || GetUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"])); };
GetUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetUserComponent, selectors: [["app-get-user"]], decls: 13, vars: 6, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "page-wrapper", 3, "ngClass"], [1, "page-content"], ["class", "alert", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 2, "display", "block", "margin-left", "150px", 3, "disabled", "click"], [4, "ngIf"], [1, "alert"], [4, "ngFor", "ngForOf"], [3, "type", "dismissible", "dismissOnTimeout", "onClosed"], [3, "users"]], template: function GetUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GetUserComponent_span_9_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetUserComponent_Template_button_click_10_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Get Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GetUserComponent_div_12_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.getSideBarState()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alerts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.btndisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _multiple_cards_multiple_cards_component__WEBPACK_IMPORTED_MODULE_5__["MultipleCardsComponent"]], styles: [".alert[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    float: right;\r\n    font-size: x-small;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZy9nZXQtdXNlci9nZXQtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yb3V0aW5nL2dldC11c2VyL2dldC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-get-user',
                templateUrl: './get-user.component.html',
                styleUrls: ['./get-user.component.css']
            }]
    }], function () { return [{ type: _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"] }, { type: _routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"] }]; }, null); })();


/***/ }),

/***/ "e3Ke":
/*!***********************************************!*\
  !*** ./src/app/isAuth/user/user.component.ts ***!
  \***********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 2, vars: 0, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzQXV0aC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eJma":
/*!************************************************************!*\
  !*** ./src/app/multiple-cards/multiple-cards.component.ts ***!
  \************************************************************/
/*! exports provided: MultipleCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleCardsComponent", function() { return MultipleCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isAuth/user/nav-bar-user/navbarUser.service */ "5B2U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MultipleCardsComponent_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCardsComponent_div_9_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCardsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultipleCardsComponent_div_9_div_6_Template, 5, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultipleCardsComponent_div_9_ng_template_7_Template, 4, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "card", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r6.isPublic)("ngIfElse", _r9);
} }
function MultipleCardsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCardsComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCardsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collegue_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", collegue_r11, " ");
} }
function MultipleCardsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carriere_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" compagnie : ", carriere_r12.compagnie, " date : ", carriere_r12.date, " ");
} }
const _c0 = function (a0) { return { "toggled": a0 }; };
class MultipleCardsComponent {
    constructor(navBarServiceUser) {
        this.navBarServiceUser = navBarServiceUser;
        this.color = "background-color" + ":" + '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        this.pageIsOpen = false;
        this.userClicked = {};
    }
    ngOnInit() {
    }
    /**
     *
     *
     * @memberof MultipleCardsComponent
     */
    ngAfterViewInit() {
        this.init();
    }
    /**
     *
     *
     * @returns {boolean}
     * @memberof MultipleCardsComponent
     */
    getSideBarState() {
        return this.navBarServiceUser.getSidebarState();
    }
    /**
     * initiate the process
     *
     * @memberof MultipleCardsComponent
     */
    init() {
        console.log('1');
        this.resize();
        this.selectElements();
        this.attachListeners();
    }
    /**
     * select all the elements in the DOM that are going to be used
     *
     * @memberof MultipleCardsComponent
     */
    selectElements() {
        console.log('2');
        this.cards = document.getElementsByClassName('card');
        this.nCards = this.cards.length;
        this.cover = document.getElementById('cover');
        this.openContent = document.getElementById('open-content');
        this.openContentImage = document.getElementById('open-content-image');
        this.closeContent = document.getElementById('close-content');
    }
    /**
     * Attaching three event listeners here:
     *  - a click event listener for each card
     * - a click event listener to the close button
     * - a resize event listener on the window
     *
     * @memberof MultipleCardsComponent
     */
    attachListeners() {
        console.log('3', this.nCards);
        for (let i = 0; i < this.nCards; i++) {
            this.attachListenerToCard(i);
        }
        this.closeContent.addEventListener('click', this.onCloseClick.bind(this));
        window.addEventListener('resize', this.resize.bind(this));
    }
    /**
     *
     *
     * @param {*} i
     * @memberof MultipleCardsComponent
     */
    attachListenerToCard(i) {
        console.log('4');
        this.cards[i].addEventListener('click', (e) => {
            const card = this.getCardElement(e.target);
            this.onCardClick(card, i);
        });
    }
    /**
     * When a card is clicked
     *
     * @param {*} card
     * @param {*} i
     * @memberof MultipleCardsComponent
     */
    onCardClick(card, i) {
        console.log('5');
        // set the current card
        this.currentCard = card;
        // add the 'clicked' class to the card, so it animates out
        this.currentCard.className += ' clicked';
        // animate the card 'cover' after a 500ms delay
        setTimeout(() => { this.animateCoverUp(this.currentCard); }, 500);
        // animate out the other cards
        this.animateOtherCards(this.currentCard, true);
        // add the open class to the page content
        this.openContent.className += ' open';
    }
    /**
     * This effect is created by taking a separate 'cover' div, placing
     * it in the same position as the clicked card, and animating it to
     * become the background of the opened 'page'.
     * It looks like the card itself is animating in to the background,
     * but doing it this way is more performant (because the cover div is
     * absolutely positioned and has no children), and there's just less
     * having to deal with z-index and other elements in the card
     *
     * @param {*} card
     * @memberof MultipleCardsComponent
     */
    animateCoverUp(card) {
        console.log('6');
        // get the position of the clicked card
        const cardPosition = card.getBoundingClientRect();
        // get the style of the clicked card
        const cardStyle = getComputedStyle(card);
        this.idCardCurrent = card.id.split('card')[1];
        this.userClicked = this.users[this.idCardCurrent];
        this.setCoverPosition(cardPosition);
        this.setCoverColor(cardStyle);
        this.scaleCoverToFillWindow(cardPosition);
        this.openContentImage.src = card.children[1].src;
        setTimeout(() => {
            // update the scroll position to 0 (so it is at the top of the 'opened' page)
            window.scroll(0, 0);
            // set page to open
            this.pageIsOpen = true;
        }, 300);
    }
    /**
     *
     *
     * @param {*} card
     * @memberof MultipleCardsComponent
     */
    animateCoverBack(card) {
        console.log('7');
        const cardPosition = card.getBoundingClientRect();
        this.setCoverPosition(cardPosition);
        this.scaleCoverToFillWindow(cardPosition);
        // animate scale back to the card size and position
        this.cover.style.transform = 'scaleX(' + 1 + ') scaleY(' + 1 + ') translate3d(' + (0) + 'px, ' + (0) + 'px, 0px)';
        setTimeout(() => {
            // set content back to empty
            this.openContentImage.src = '';
            // style the cover to 0x0 so it is hidden
            this.cover.style.width = '0px';
            this.cover.style.height = '0px';
            this.pageIsOpen = false;
            // remove the clicked class so the card animates back in
            this.currentCard.className = this.currentCard.className.replace(' clicked', '');
        }, 301);
    }
    /**
     *
     *
     * @param {*} cardPosition
     * @memberof MultipleCardsComponent
     */
    setCoverPosition(cardPosition) {
        console.log('8');
        // style the cover so it is in exactly the same position as the card
        this.cover.style.left = cardPosition.left + 'px';
        this.cover.style.top = cardPosition.top + 'px';
        this.cover.style.width = cardPosition.width + 'px';
        this.cover.style.height = cardPosition.height + 'px';
    }
    /**
     *
     *
     * @param {*} cardStyle
     * @memberof MultipleCardsComponent
     */
    setCoverColor(cardStyle) {
        console.log('9');
        // style the cover to be the same color as the card
        this.cover.style.backgroundColor = cardStyle.backgroundColor;
    }
    /**
     *
     *
     * @param {*} cardPosition
     * @memberof MultipleCardsComponent
     */
    scaleCoverToFillWindow(cardPosition) {
        console.log('10');
        // calculate the scale and position for the card to fill the page,
        const scaleX = this.windowWidth / cardPosition.width;
        const scaleY = this.windowHeight / cardPosition.height;
        const offsetX = (this.windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
        const offsetY = (this.windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
        // set the transform on the cover - it will animate because of the transition set on it in the CSS
        this.cover.style.transform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ') translate3d(' + (offsetX) + 'px, ' + (offsetY) + 'px, 0px)';
    }
    /**
     *  When the close is clicked
     *
     * @memberof MultipleCardsComponent
     */
    onCloseClick() {
        console.log('11');
        // remove the open class so the page content animates out
        this.openContent.className = this.openContent.className.replace(' open', '');
        // animate the cover back to the original position card and size
        this.animateCoverBack(this.currentCard);
        // animate in other cards
        this.animateOtherCards(this.currentCard, false);
    }
    /**
     *
     *
     * @param {*} card
     * @param {*} out
     * @memberof MultipleCardsComponent
     */
    animateOtherCards(card, out) {
        console.log('12');
        let delay = 100;
        for (let i = 0; i < this.nCards; i++) {
            // animate cards on a stagger, 1 each 100ms
            if (this.cards[i] === card) {
                continue;
            }
            if (out) {
                this.animateOutCard(this.cards[i], delay);
            }
            else {
                this.animateInCard(this.cards[i], delay);
                delay += 100;
            }
        }
    }
    /**
     * animations on individual cards (by adding/removing card names)
     *
     * @param {*} card
     * @param {*} delay
     * @memberof MultipleCardsComponent
     */
    animateOutCard(card, delay) {
        console.log('13');
        setTimeout(() => {
            card.className += ' out';
        }, delay);
    }
    /**
     *
     * @param {*} card
     * @param {*} delay
     * @memberof MultipleCardsComponent
     */
    animateInCard(card, delay) {
        console.log('14');
        setTimeout(() => {
            card.className = card.className.replace(' out', '');
        }, delay);
    }
    /**
     * this function searches up the DOM tree until it reaches the card element that has been clicked
     *
     * @param {*} el
     * @returns {*}
     * @memberof MultipleCardsComponent
     */
    getCardElement(el) {
        console.log('15');
        if (el.className.indexOf('card') > -1) {
            return el;
        }
        else {
            return this.getCardElement(el.parentElement);
        }
    }
    /**
     * resize function - records the window width and height
     *
     * @memberof MultipleCardsComponent
     */
    resize() {
        console.log('16');
        if (this.pageIsOpen) {
            // update position of cover
            const cardPosition = this.currentCard.getBoundingClientRect();
            this.setCoverPosition(cardPosition);
            this.scaleCoverToFillWindow(cardPosition);
        }
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    }
}
MultipleCardsComponent.ɵfac = function MultipleCardsComponent_Factory(t) { return new (t || MultipleCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"])); };
MultipleCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultipleCardsComponent, selectors: [["app-multiple-cards"]], inputs: { users: "users" }, decls: 27, vars: 10, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "page-wrapper", 3, "ngClass"], [1, "page-content"], ["class", "card-column column-0", 4, "ngFor", "ngForOf"], ["id", "cover", 1, "cover"], ["id", "open-content", 1, "open-content"], ["id", "close-content", 1, "close-content"], [1, "x-1"], [1, "x-2"], ["id", "open-content-image", "src", ""], ["id", "open-content-text", 1, "text"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngFor", "ngForOf"], [1, "card-column", "column-0"], [1, "card", 3, "id"], [1, "border"], ["src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg"], [1, "user-status-public"], [1, "fa", "fa-circle"], [1, "user-status-prive"]], template: function MultipleCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MultipleCardsComponent_div_9_Template, 9, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MultipleCardsComponent_div_19_Template, 5, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MultipleCardsComponent_ng_template_20_Template, 4, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " collegues : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MultipleCardsComponent_div_25_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MultipleCardsComponent_div_26_Template, 2, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.getSideBarState()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userClicked.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userClicked.isPublic)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userClicked.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userClicked.collegues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userClicked.carriere);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["a[_ngcontent-%COMP%]{\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    line-height: 1.5;\r\n  }\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n\r\n\r\n.card-column[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    padding: 4%;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n.column-1[_ngcontent-%COMP%] {\r\n    padding-top: 100px;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 92%;\r\n    max-width: 340px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    background: #00BFFF;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    margin-bottom: 60px;\r\n  }\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 6px;\r\n    border: 2px solid black !important;\r\n    opacity: 0.5;\r\n    left: -6px;\r\n    top: -6px;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 190px 0px 100px 10px;\r\n    width: 90%;\r\n    color:black\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    position: absolute;\r\n    top: -6%;\r\n    left: -6%;\r\n  }\r\n\r\n.card-color-0[_ngcontent-%COMP%] {\r\n    background-color: #00BFFF;\r\n  }\r\n\r\n\r\n\r\n.cover[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    background: #00BFFF;\r\n    z-index: 100;\r\n    transform-origin: 50% 50%;\r\n  }\r\n\r\n\r\n\r\n.open-content[_ngcontent-%COMP%] {\r\n    z-index: 110;\r\n    position: absolute;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n  }\r\n\r\n.open-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 90%;\r\n    margin-left: 3%;\r\n    margin-top: 20px;\r\n    z-index: 5;\r\n  }\r\n\r\n.open-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    margin-top: -56%;\r\n    padding: 60% 5% 5% 5%;\r\n    width: 80%;\r\n    margin-left: 5%;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n.open-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .open-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    max-width: 700px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n.close-content[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n    right: 12px;\r\n    top: -72px;\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n.close-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background: #222;\r\n    width: 30px;\r\n    height: 6px;\r\n    display: block;\r\n    position: absolute;\r\n    top: 14px;\r\n  }\r\n\r\n.x-1[_ngcontent-%COMP%] {\r\n    transform: rotate(45deg);\r\n  }\r\n\r\n.x-2[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg);\r\n  }\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    transition: opacity 200ms linear 320ms, transform 200ms ease-out 320ms;\r\n  }\r\n\r\n.border[_ngcontent-%COMP%] {\r\n    transition: opacity 200ms linear, transform 200ms ease-out;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: opacity 200ms linear 0ms, transform 200ms ease-in 0ms;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    transform: translate3d(20%, 0px, 0px);  \r\n    transition: opacity 200ms linear 120ms, transform 200ms ease-in 120ms;\r\n  }\r\n\r\n\r\n\r\n.card.clicked[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: translate3d(0px, -40px, 0px);\r\n    opacity: 0;\r\n  }\r\n\r\n.card.clicked[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    transform: scale(1.3);\r\n  }\r\n\r\n.card.out[_ngcontent-%COMP%], .card.out[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: translate3d(0px, -40px, 0px);\r\n    opacity: 0;\r\n  }\r\n\r\n.card.out[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .card.clicked[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    transform: translate3d(20%, -40px, 0px);\r\n    opacity: 0;\r\n  }\r\n\r\n.cover[_ngcontent-%COMP%] {\r\n    transition: transform 300ms ease-in-out;\r\n  }\r\n\r\n.open-content[_ngcontent-%COMP%] {\r\n    transition: opacity 200ms linear 0ms;\r\n  }\r\n\r\n.open-content.open[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n    transition-delay: 1000ms;\r\n  }\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    .card-column[_ngcontent-%COMP%] {\r\n      width: 90%;\r\n    }\r\n    \r\n    .column-1[_ngcontent-%COMP%] {\r\n      padding-top: 0px;\r\n    }\r\n    \r\n    .open-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      margin-top: 40px;\r\n    }\r\n  }\r\n\r\n\r\n\r\n.user-status-public[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 8px;\r\n    margin-right: 4px;\r\n    color: #5cb85c;\r\n    margin-bottom: 20px; \r\n}\r\n\r\n.user-status-prive[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 8px;\r\n    margin-right: 4px;\r\n    color: red;\r\n    margin-bottom: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlwbGUtY2FyZHMvbXVsdGlwbGUtY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQzs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0FBRUEsVUFBVTs7QUFDVjtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWO0VBQ0Y7O0FBRUE7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUEscUNBQXFDOztBQUNyQztJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztBQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBOztHQUVDOztBQUVEO0lBQ0Usc0VBQXNFO0VBQ3hFOztBQUVBO0lBQ0UsMERBQTBEO0VBQzVEOztBQUVBO0lBQ0UsaUVBQWlFO0VBQ25FOztBQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLHFFQUFxRTtFQUN2RTs7QUFFQSxpQkFBaUI7O0FBQ2pCO0lBQ0UsdUNBQXVDO0lBQ3ZDLFVBQVU7RUFDWjs7QUFFQTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsVUFBVTtFQUNaOztBQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLFVBQVU7RUFDWjs7QUFFQTtJQUNFLHVDQUF1QztFQUN6Qzs7QUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsd0JBQXdCO0VBQzFCOztBQUVBOztHQUVDOztBQUVEO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjs7QUFFQTs7R0FFQzs7QUFFRDtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFHRTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL211bHRpcGxlLWNhcmRzL211bHRpcGxlLWNhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuKiogTGF5b3V0LCBUZXh0ICYgQ29sb3JzIFxyXG4qL1xyXG5cclxuYXtcclxuICAgIGNvbG9yOiAtd2Via2l0LWxpbms7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENhcmRzICovXHJcbiAgLmNhcmQtY29sdW1uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbi0xIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgIG1heC13aWR0aDogMzQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMEJGRkY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbGVmdDogLTZweDtcclxuICAgIHRvcDogLTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgaDEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTkwcHggMHB4IDEwMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgY29sb3I6YmxhY2tcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgPiBpbWcge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTYlO1xyXG4gICAgbGVmdDogLTYlO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1jb2xvci0wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEJGRkY7XHJcbiAgfVxyXG5cclxuICAvKiBUaGUgY292ZXIgKGV4cGFuZGluZyBiYWNrZ3JvdW5kKSAqL1xyXG4gIC5jb3ZlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBCRkZGO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIG9wZW4gcGFnZSBjb250ZW50ICovXHJcbiAgLm9wZW4tY29udGVudCB7XHJcbiAgICB6LWluZGV4OiAxMTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcGVuLWNvbnRlbnQgaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcbiAgXHJcbiAgLm9wZW4tY29udGVudCAudGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogLTU2JTtcclxuICAgIHBhZGRpbmc6IDYwJSA1JSA1JSA1JTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLm9wZW4tY29udGVudCAudGV4dCBoMSwgLm9wZW4tY29udGVudCAudGV4dCBwIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIHRvcDogLTcycHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlLWNvbnRlbnQgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAueC0xIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLngtMiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIH1cclxuICBcclxuICAvKiBcclxuICAqKiBUcmFuc2l0aW9uc1xyXG4gICovXHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBsaW5lYXIgMzIwbXMsIHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dCAzMjBtcztcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhciwgdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBsaW5lYXIgMG1zLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbiAwbXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIGgxIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwcHgsIDBweCk7ICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyIDEyMG1zLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbiAxMjBtcztcclxuICB9XHJcbiAgXHJcbiAgLyogQ2xpY2tlZCBjYXJkICovXHJcbiAgLmNhcmQuY2xpY2tlZCBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC00MHB4LCAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQuY2xpY2tlZCAuYm9yZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLm91dCwgLmNhcmQub3V0IGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLTQwcHgsIDBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC5vdXQgaDEsIC5jYXJkLmNsaWNrZWQgaDEge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIC00MHB4LCAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLm9wZW4tY29udGVudCB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhciAwbXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcGVuLWNvbnRlbnQub3BlbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEwMDBtcztcclxuICB9XHJcbiAgXHJcbiAgLyogXHJcbiAgKiogTWVkaWEgUXVlcmllc1xyXG4gICovXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jYXJkLWNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2x1bW4tMSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5vcGVuLWNvbnRlbnQgaW1nIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogXHJcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEVuZCBDYXJkXHJcbiAgKi9cclxuXHJcbiAgLnVzZXItc3RhdHVzLXB1YmxpYyBpIHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBjb2xvcjogIzVjYjg1YztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxyXG59XHJcbiAgXHJcblxyXG4gIC51c2VyLXN0YXR1cy1wcml2ZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultipleCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multiple-cards',
                templateUrl: './multiple-cards.component.html',
                styleUrls: ['./multiple-cards.component.css']
            }]
    }], function () { return [{ type: _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"] }]; }, { users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "epPz":
/*!********************************************!*\
  !*** ./src/app/routing/routing.service.ts ***!
  \********************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RoutingService {
    constructor(http) {
        this.http = http;
        this.userurl = 'http://testapplication-env.eba-ymzz7z5z.us-east-1.elasticbeanstalk.com/api';
        // private userurl =  'http://localhost:3000/api';
        this.authorization = { headers: { Authorization: `Bearer ${localStorage.getItem('auth_tkn')}` } };
    }
    /**
     * POST d'un User
     */
    addEolien(user) {
        console.log('Post du Service', user);
        return this.http.post(this.userurl, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((newUser) => {
            return newUser;
        }));
    }
    /**
    * Get d'un User
    */
    getData() {
        return this.http.get(this.userurl + '/users')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            return data;
        }));
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fmvc":
/*!********************************************************!*\
  !*** ./src/app/home-content/home-content.component.ts ***!
  \********************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isAuth/user/nav-bar-user/navbarUser.service */ "5B2U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "toggled": a0 }; };
class HomeContentComponent {
    constructor(navBarServiceUser) {
        this.navBarServiceUser = navBarServiceUser;
    }
    ngOnInit() {
    }
    getSideBarState() {
        return this.navBarServiceUser.getSidebarState();
    }
}
HomeContentComponent.ɵfac = function HomeContentComponent_Factory(t) { return new (t || HomeContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"])); };
HomeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeContentComponent, selectors: [["app-home-content"]], decls: 10, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "page-wrapper", 3, "ngClass"], [1, "page-content"]], template: function HomeContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome Home Contente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.getSideBarState()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29udGVudC9ob21lLWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-content',
                templateUrl: './home-content.component.html',
                styleUrls: ['./home-content.component.css']
            }]
    }], function () { return [{ type: _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"] }]; }, null); })();


/***/ }),

/***/ "g3e5":
/*!********************************************************************!*\
  !*** ./src/app/isAuth/user/nav-bar-user/nav-bar-user.component.ts ***!
  \********************************************************************/
/*! exports provided: NavBarUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarUserComponent", function() { return NavBarUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _navbarUser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbarUser.service */ "5B2U");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");








function NavBarUserComponent_li_42_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r4.title);
} }
function NavBarUserComponent_li_42_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", menu_r4.badge.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r4.badge.text);
} }
function NavBarUserComponent_li_42_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarUserComponent_li_42_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggle(menu_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavBarUserComponent_li_42_a_2_span_4_Template, 2, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](menu_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.badge);
} }
function NavBarUserComponent_li_42_div_3_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submenu_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", submenu_r16.badge.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](submenu_r16.badge.text);
} }
function NavBarUserComponent_li_42_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarUserComponent_li_42_div_3_li_2_span_3_Template, 2, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const submenu_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", submenu_r16.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", submenu_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submenu_r16.badge);
} }
function NavBarUserComponent_li_42_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarUserComponent_li_42_div_3_li_2_Template, 4, 3, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slide", ctx_r7.getState(menu_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menu_r4.submenus);
} }
const _c0 = function (a0, a1, a2) { return { "active": a0, "sidebar-dropdown": a1, "header-menu": a2 }; };
function NavBarUserComponent_li_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarUserComponent_li_42_span_1_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarUserComponent_li_42_a_2_Template, 5, 5, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarUserComponent_li_42_div_3_Template, 3, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, menu_r4.active, menu_r4.type === "dropdown", menu_r4.type === "header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.type === "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.type !== "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.type === "dropdown");
} }
function NavBarUserComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 6 minutes ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Yesterday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "View all notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarUserComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Jhon doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Jhon doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Jhon doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "View all messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarUserComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "toggled": a0 }; };
class NavBarUserComponent {
    constructor(navBarServiceUser, auth, router) {
        this.navBarServiceUser = navBarServiceUser;
        this.auth = auth;
        this.router = router;
        this.menus = [];
        this.menus = navBarServiceUser.getMenuList();
    }
    ngOnInit() {
    }
    // Open/close nav
    toggleSidebar() {
        this.navBarServiceUser.setSidebarState(!this.navBarServiceUser.getSidebarState());
    }
    getSideBarState() {
        return this.navBarServiceUser.getSidebarState();
    }
    // Permet de recuperer le service
    toggle(currentMenu) {
        if (currentMenu.type === 'dropdown') {
            this.menus.forEach(element => {
                if (element === currentMenu) {
                    currentMenu.active = !currentMenu.active;
                }
                else {
                    element.active = false;
                }
            });
        }
    }
    getState(currentMenu) {
        if (currentMenu.active) {
            return 'down';
        }
        else {
            return 'up';
        }
    }
    // logout session
    logout() {
        this.auth.logout();
        this.router.navigate(['/auth/login'], { queryParams: { loggedOut: 'success' } });
    }
}
NavBarUserComponent.ɵfac = function NavBarUserComponent_Factory(t) { return new (t || NavBarUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbarUser_service__WEBPACK_IMPORTED_MODULE_2__["NavBarServiceUser"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NavBarUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarUserComponent, selectors: [["app-nav-bar-user"]], decls: 64, vars: 4, consts: [["lang", "en"], ["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["name", "description", "content", "Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3"], [1, "page-wrapper", 3, "ngClass"], ["id", "show-sidebar", 1, "btn", "btn-sm", "btn-dark", 3, "click"], [1, "fas", "fa-bars"], ["id", "sidebar", 1, "sidebar"], [1, "sidebar-content"], [1, "sidebar-header"], ["href", "/"], ["id", "close-sidebar", 3, "click"], [1, "fas", "fa-times"], [1, "sidebar-profile"], [1, "user-pic"], ["src", "https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg", "alt", "User picture", 1, "img-responsive", "img-rounded"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "user-status"], [1, "fa", "fa-circle"], [1, "sidebar-search"], [1, "input-group"], ["type", "text", "placeholder", "Search...", 1, "form-control", "search-menu"], [1, "input-group-append"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "sidebar-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], ["dropdown", "", 1, "dropdown"], ["href", "#", "dropdownToggle", ""], [1, "fa", "fa-bell"], [1, "badge", "badge-pill", "badge-warning", "notification"], ["class", "dropdown-menu notifications", 4, "dropdownMenu"], [1, "fa", "fa-envelope"], [1, "badge", "badge-pill", "badge-success", "notification"], ["class", "dropdown-menu messages", 4, "dropdownMenu"], ["dropdownToggle", ""], [1, "fa", "fa-cog"], [1, "badge-sonar"], ["class", "dropdown-menu", 4, "dropdownMenu"], ["href", "#", 3, "click"], [1, "fa", "fa-power-off"], [3, "ngClass"], [4, "ngIf"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "sidebar-submenu", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["class", "badge badge-pill", 3, "ngClass", 4, "ngIf"], [1, "badge", "badge-pill", 3, "ngClass"], [1, "sidebar-submenu"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "dropdown-menu", "notifications"], [1, "notifications-header"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item"], [1, "notification-content"], [1, "icon"], [1, "fas", "fa-check", "text-success", "border", "border-success"], [1, "content"], [1, "notification-detail"], [1, "notification-time"], [1, "fas", "fa-exclamation", "text-info", "border", "border-info"], [1, "fas", "fa-exclamation-triangle", "text-warning", "border", "border-warning"], ["href", "#", 1, "dropdown-item", "text-center"], [1, "dropdown-menu", "messages"], [1, "messages-header"], [1, "message-content"], [1, "pic"], ["src", "https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg", "alt", ""], [1, "message-title"], [1, "message-detail"], [1, "dropdown-menu"], ["href", "/profile", 1, "dropdown-item"]], template: function NavBarUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Navbar User template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarUserComponent_Template_a_click_10_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Menuu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarUserComponent_Template_div_click_17_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Jhon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NavBarUserComponent_li_42_Template, 4, 8, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, NavBarUserComponent_div_49_Template, 35, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, NavBarUserComponent_div_55_Template, 38, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, NavBarUserComponent_div_60_Template, 7, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarUserComponent_Template_a_click_62_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.getSideBarState()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@keyframes swing {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    10% {\r\n      transform: rotate(10deg);\r\n    }\r\n    30% {\r\n      transform: rotate(0deg);\r\n    }\r\n    40% {\r\n      transform: rotate(-10deg);\r\n    }\r\n    50% {\r\n      transform: rotate(0deg);\r\n    }\r\n    60% {\r\n      transform: rotate(5deg);\r\n    }\r\n    70% {\r\n      transform: rotate(0deg);\r\n    }\r\n    80% {\r\n      transform: rotate(-5deg);\r\n    }\r\n    100% {\r\n      transform: rotate(0deg);\r\n    }\r\n  }\r\n  @keyframes sonar {\r\n    0% {\r\n      transform: scale(0.9);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      transform: scale(2);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 260px;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0px;\r\n    z-index: 999;\r\n    transition: left .3s ease;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    transition: color .3s ease;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%] {\r\n    max-height: calc(100% - 30px);\r\n    height: calc(100% - 30px);\r\n    overflow-y: auto;\r\n    position: relative;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    flex-grow: 1;\r\n    text-decoration: none;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n    transition: color .3s ease;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    overflow: hidden;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 60px;\r\n    padding: 2px;\r\n    border-radius: 12px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    object-fit: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    margin-top: 4px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 8px;\r\n    margin-right: 4px;\r\n    color: #5cb85c;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    border-left: 0;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n    padding-bottom: 10px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    padding: 15px 20px 5px 20px;\r\n    display: inline-block;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    position: relative;\r\n    padding: 8px 30px 8px 20px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    font-size: 12px;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    border-radius: 4px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]::before {\r\n    color: #16c7ff;\r\n    display: inline-block;\r\n    animation: swing ease-in-out .5s 1 alternate;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 8px;\r\n    margin-left: 5px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    content: \"\\f105\";\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    background: 0 0;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 14px;\r\n    transition: transform .3s ease;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 5px 0;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n    content: \"\\f111\";\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    display: inline-block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    margin-right: 10px;\r\n    font-size: 8px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 0px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    transform: rotate(90deg);\r\n    right: 15px;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n    display: flex;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    position: static;\r\n    display: flex;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    bottom: 31px !important;;\r\n    left: 0 !important;\r\n    top: initial !important;\r\n    right: 0 !important;\r\n    transform: none !important;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    font-size: .9rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    padding: .25rem 1rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .messages-header[_ngcontent-%COMP%] {\r\n    padding: 0 1rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    object-fit: cover;\r\n    height: 100%;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    line-height: 1.6;\r\n    padding-left: 5px;\r\n    width: calc(100% - 40px);\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-detail[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    padding: .25rem 1rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notifications-header[_ngcontent-%COMP%] {\r\n    padding: 0 1rem;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 35px;\r\n    text-align: center;\r\n    line-height: 35px;\r\n    border-radius: 4px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    line-height: 1.6;\r\n    padding-left: 5px;\r\n    width: calc(100% - 40px);\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\r\n    font-size: .7rem;\r\n    color: #828282;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notification-detail[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .badge-sonar[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background: #980303;\r\n    border-radius: 50%;\r\n    height: 8px;\r\n    width: 8px;\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .badge-sonar[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border: 2px solid #980303;\r\n    opacity: 0;\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    height: 100%;\r\n    animation: sonar 1.5s infinite;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%] {\r\n    background-color: #1d1d1d;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #2b2b2b;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    border-color: #2b2b2b;\r\n    box-shadow: none;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n    color: #bdbdbd;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\r\n    color: red;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus    + span[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    background-color: #2b2b2b;\r\n    border: none;\r\n    margin-left: 1px;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #6c7b88;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\r\n    background-color: #131212;;\r\n    box-shadow: 0px -1px 5px #131212;\r\n    border-top: 1px solid #3a3a3a;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n    border-left: none;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\r\n    border-right: none;\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: rgba(29, 29, 29, 0.8);\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-profile[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    border-color: rgba(255, 255, 255, 0.1);\r\n    box-shadow: none;\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n  }\r\n  .sidebar.sidebar-bg[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\r\n    background-color: rgba(43, 43, 43, 0.5);\r\n    box-shadow: 0px -1px 5px rgba(43, 43, 43, 0.5);\r\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n  }\r\n  \r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n        background: #31353D;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n        border-top: 1px solid #3a3f48;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n        border-color: transparent;\r\n        box-shadow: none;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        color: #818896;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n        color: #b8bfce;\r\n    }\r\n  .page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n        color: #bdbdbd;\r\n    }\r\n  .page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\r\n        color: #ffffff;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        color: #16c7ff;\r\n        text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n        background: #3a3f48;\r\n    }\r\n  .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        color: #6c7b88;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNBdXRoL3VzZXIvbmF2LWJhci11c2VyL25hdi1iYXItdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDRTtJQUNFO01BRVUsdUJBQXVCO0lBQ2pDO0lBQ0E7TUFFVSx3QkFBd0I7SUFDbEM7SUFDQTtNQUVVLHVCQUF1QjtJQUNqQztJQUNBO01BRVUseUJBQXlCO0lBQ25DO0lBQ0E7TUFFVSx1QkFBdUI7SUFDakM7SUFDQTtNQUVVLHVCQUF1QjtJQUNqQztJQUNBO01BRVUsdUJBQXVCO0lBQ2pDO0lBQ0E7TUFFVSx3QkFBd0I7SUFDbEM7SUFDQTtNQUVVLHVCQUF1QjtJQUNqQztFQUNGO0VBYUE7SUFDRTtNQUVVLHFCQUFxQjtNQUM3QixVQUFVO0lBQ1o7SUFDQTtNQUVVLG1CQUFtQjtNQUMzQixVQUFVO0lBQ1o7RUFDRjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUVaLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UscUJBQXFCO0lBRXJCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFFbEIsYUFBYTtJQUVMLG1CQUFtQjtFQUM3QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUVULFlBQVk7SUFDcEIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUVmLDBCQUEwQjtFQUM1QjtFQUVBLDJEQUEyRDtFQUMzRDtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFFSyxpQkFBaUI7SUFDcEIsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0VBSUYsZ0VBQWdFO0VBQzlEO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBRUEsOERBQThEO0VBQzlEO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7SUFFYiw0Q0FBNEM7RUFDdEQ7RUFDQTs7SUFFRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFHVCw4QkFBOEI7RUFFaEM7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLGVBQWU7RUFDakI7RUFDQTtJQUVVLHdCQUF3QjtJQUNoQyxXQUFXO0VBQ2I7RUFFQSxzRUFBc0U7RUFDdEU7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFFVCxhQUFhO0VBQ2Y7RUFDQTtJQUVVLFlBQVk7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBRWhCLGFBQWE7RUFDZjtFQUNBO0lBRVUsWUFBWTtFQUN0QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBRVgsMEJBQTBCO0lBQ2xDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFFSyxpQkFBaUI7SUFDcEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBRUosOEJBQThCO0VBQ3hDO0VBRUEsK0VBQStFO0VBQy9FO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7OztJQUdFLDZCQUE2QjtFQUMvQjtFQUNBOztJQUVFLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7RUFDQTs7Ozs7Ozs7SUFRRSxjQUFjO0VBQ2hCO0VBQ0E7Ozs7OztJQU1FLGNBQWM7RUFDaEI7RUFFQTtJQUNFLFVBQVU7RUFDWjtFQUVBOzs7O0lBSUUsY0FBYztFQUNoQjtFQUNBOzs7O0lBSUUseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHVDQUF1QztFQUN6QztFQUNBOzs7SUFHRSw4Q0FBOEM7RUFDaEQ7RUFDQTs7SUFFRSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0VBQ2xCO0VBQ0E7Ozs7SUFJRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLHVDQUF1QztJQUN2Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0VBQ2hEO0VBR0UsOEZBQThGO0VBRTlGO1FBQ0ksbUJBQW1CO0lBQ3ZCO0VBRUE7OztRQUdJLDZCQUE2QjtJQUNqQztFQUVBOztRQUVJLHlCQUF5QjtRQUN6QixnQkFBZ0I7SUFDcEI7RUFFQTs7Ozs7O1FBTUksY0FBYztJQUNsQjtFQUVBOzs7O1FBSUksY0FBYztJQUNsQjtFQUVBO1FBQ0ksY0FBYztJQUNsQjtFQUVBO1FBQ0ksY0FBYztJQUNsQjtFQUVBOzs7O1FBSUksY0FBYztRQUNkLGdEQUFnRDtJQUNwRDtFQUVBOzs7O1FBSUksbUJBQW1CO0lBQ3ZCO0VBRUE7UUFDSSxjQUFjO0lBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaXNBdXRoL3VzZXIvbmF2LWJhci11c2VyL25hdi1iYXItdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHN3aW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc29uYXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc29uYXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IC4zcyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLWhlYWRlciA+IGEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLWhlYWRlciAjY2xvc2Utc2lkZWJhciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1oZWFkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItcHJvZmlsZSAudXNlci1waWMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItcGljIGltZyB7XHJcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItcHJvZmlsZSAudXNlci1pbmZvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItcHJvZmlsZSAudXNlci1pbmZvIC51c2VyLXJvbGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyAudXNlci1zdGF0dXMge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyAudXNlci1zdGF0dXMgaSB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgY29sb3I6ICM1Y2I4NWM7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1zZWFyY2gtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItc2VhcmNoID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLW1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSAuaGVhZGVyLW1lbnUgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweCA1cHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCAuc2lkZWJhci1tZW51IHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogOHB4IDMwcHggOHB4IDIwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSB1bCBsaSBhIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCAuc2lkZWJhci1tZW51IHVsIGxpIGE6aG92ZXIgPiBpOjpiZWZvcmUge1xyXG4gICAgY29sb3I6ICMxNmM3ZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgLjVzIDEgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHN3aW5nIGVhc2UtaW4tb3V0IC41cyAxIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCAuc2lkZWJhci1tZW51IHVsIGxpIGEgc3Bhbi5sYWJlbCxcclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmJhZGdlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biA+IGE6YWZ0ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSB1bCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItY29udGVudCAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjExMVwiO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhIC5iYWRnZSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1jb250ZW50IC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhIC5sYWJlbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWNvbnRlbnQgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93bi5hY3RpdmUgPiBhOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICByaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlLWZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgPiBkaXYge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgPiBkaXYgPiBhIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyID4gZGl2IGEgLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3R0b206IDMxcHggIWltcG9ydGFudDs7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2VzLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCAucGljIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5tZXNzYWdlcyAubWVzc2FnZS1jb250ZW50IC5waWMgaW1nIHtcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCAuY29udGVudCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCAuY29udGVudCAubWVzc2FnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubWVzc2FnZXMgLm1lc3NhZ2UtY29udGVudCAuY29udGVudCAubWVzc2FnZS1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5ub3RpZmljYXRpb25zIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgLm5vdGlmaWNhdGlvbnMgLm5vdGlmaWNhdGlvbnMtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5ub3RpZmljYXRpb25zIC5ub3RpZmljYXRpb24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubm90aWZpY2F0aW9ucyAubm90aWZpY2F0aW9uLWNvbnRlbnQgLmljb24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAubm90aWZpY2F0aW9ucyAubm90aWZpY2F0aW9uLWNvbnRlbnQgLmljb24gaSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgLm5vdGlmaWNhdGlvbnMgLm5vdGlmaWNhdGlvbi1jb250ZW50IC5jb250ZW50IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5ub3RpZmljYXRpb25zIC5ub3RpZmljYXRpb24tY29udGVudCAuY29udGVudCAubm90aWZpY2F0aW9uLXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgLm5vdGlmaWNhdGlvbnMgLm5vdGlmaWNhdGlvbi1jb250ZW50IC5jb250ZW50IC5ub3RpZmljYXRpb24tZGV0YWlsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciAuYmFkZ2Utc29uYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzk4MDMwMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyIC5iYWRnZS1zb25hcjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTgwMzAzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNvbmFyIDEuNXMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc29uYXIgMS41cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1kZWZhdWx0IHRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAuc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1wcm9maWxlLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXNlYXJjaCxcclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMmIyYjJiO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzJiMmIyYjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyAudXNlci1yb2xlLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXByb2ZpbGUgLnVzZXItaW5mbyAudXNlci1zdGF0dXMsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuICAuc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgPiBhLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgPiBkaXYgPiBhLFxyXG4gIC5zaWRlYmFyICNjbG9zZS1zaWRlYmFyIHtcclxuICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IHVsIGxpOmhvdmVyID4gYSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSA+IGEsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItcHJvZmlsZSAudXNlci1pbmZvLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWhlYWRlciA+IGE6aG92ZXIsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItZm9vdGVyID4gZGl2ID4gYTpob3ZlciBpLFxyXG4gIC5zaWRlYmFyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIgI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIHVsIGxpOmhvdmVyIGEgaSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6aG92ZXI6YmVmb3JlLFxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudTpmb2N1cyArIHNwYW4sXHJcbiAgLnNpZGViYXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93bi5hY3RpdmUgYSBpIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IHVsIGxpIGEgaSxcclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcclxuICAuc2lkZWJhciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgLnNpZGViYXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcclxuICAgIGNvbG9yOiAjNmM3Yjg4O1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTIxMjs7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggIzEzMTIxMjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2EzYTNhO1xyXG4gIH1cclxuICAuc2lkZWJhciAuc2lkZWJhci1mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5zaWRlYmFyLWZvb3RlciA+IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyOSwgMjksIDAuOCk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLnNpZGViYXItYmcgLnNpZGViYXItcHJvZmlsZSxcclxuICAuc2lkZWJhci5zaWRlYmFyLWJnIC5zaWRlYmFyLXNlYXJjaCxcclxuICAuc2lkZWJhci5zaWRlYmFyLWJnIC5zaWRlYmFyLW1lbnUge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICB9XHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuc2lkZWJhci5zaWRlYmFyLWJnIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpLFxyXG4gIC5zaWRlYmFyLnNpZGViYXItYmcgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biBkaXYsXHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgLnNpZGViYXIuc2lkZWJhci1iZyAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIH1cclxuICAuc2lkZWJhci5zaWRlYmFyLWJnIC5zaWRlYmFyLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggcmdiYSg0MywgNDMsIDQzLCAwLjUpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICB9XHJcblxyXG4gIFxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoaWxsZXItdGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMTM1M0Q7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2gsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2EzZjQ4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItcm9sZSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItc3RhdHVzLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQ+YSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogIzgxODg5NjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpOmhvdmVyPmEsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlPmEsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZD5hOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2I4YmZjZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXIge1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhcjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgdWwgbGk6aG92ZXIgYSBpLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6aG92ZXI6YmVmb3JlLFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnU6Zm9jdXMrc3BhbixcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93bi5hY3RpdmUgYSBpIHtcclxuICAgICAgICBjb2xvcjogIzE2YzdmZjtcclxuICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDEwcHggcmdiYSgyMiwgMTk5LCAyNTUsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIGksXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gZGl2LFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNhM2Y0ODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzZjN2I4ODtcclxuICAgIH1cclxuXHJcblxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('up <=> down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar-user',
                templateUrl: './nav-bar-user.component.html',
                styleUrls: ['./nav-bar-user.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('up <=> down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200))
                    ])
                ]
            }]
    }], function () { return [{ type: _navbarUser_service__WEBPACK_IMPORTED_MODULE_2__["NavBarServiceUser"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "qAfB":
/*!******************************************************!*\
  !*** ./src/app/isNotAuth/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 0, consts: [[2, "display", "flex", "float", "right"], ["mat-button", "", "color", "primary", "routerLink", "/", "routerLinkActive", "active"], ["mat-button", "", "color", "primary", "routerLink", "/auth/login", "routerLinkActive", "active"], ["mat-button", "", "color", "primary", "routerLink", "/auth/register", 1, "nav-link"], ["mat-button", "", "color", "primary", "routerLink", "#r", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzTm90QXV0aC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






const jwt = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
class DecodedToken {
}
class AuthService {
    constructor(http) {
        this.http = http;
        this.uriseg = 'http://testapplication-env.eba-ymzz7z5z.us-east-1.elasticbeanstalk.com/api';
        this.decodedToken = JSON.parse(localStorage.getItem('auth_meta')) || new DecodedToken();
    }
    register(userData) {
        const URI = this.uriseg + '/register';
        return this.http.post(URI, userData);
    }
    login(userData) {
        const URI = this.uriseg + '/login';
        //const base = this.http.get(this.uriseg, { headers: { Authorization: `Bearer ${localStorage.getItem('auth_tkn')}` } });
        return this.http.post(URI, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((token) => {
            return this.saveToken(token.token);
        }));
    }
    saveToken(token) {
        this.decodedToken = jwt.decodeToken(token);
        localStorage.setItem('auth_tkn', token);
        localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
        return token;
    }
    logout() {
        localStorage.removeItem('auth_tkn');
        localStorage.removeItem('auth_meta');
        this.decodedToken = new DecodedToken();
    }
    /*Si l'utilisateur est connecté,
      nous afficherons un lien de déconnexion et un nom d'utilisateur dans la barre de navigation;
      sinon, nous afficherons le lien de connexion et d'enregistrement.*/
    isAuthenticated() {
        return moment__WEBPACK_IMPORTED_MODULE_3__().isBefore(moment__WEBPACK_IMPORTED_MODULE_3__["unix"](this.decodedToken.exp));
    }
    /* le nom d'utilisateur connecté, Le decodedToken a userId et username */
    getUsername() {
        return this.decodedToken.username;
    }
    isAdmin() {
        const localToken = JSON.parse(localStorage.getItem('auth_meta'));
        const isAdmin = localToken.admin;
        return isAdmin;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ral3":
/*!*************************************************!*\
  !*** ./src/app/isAuth/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar-admin/nav-bar-admin.component */ "1NIe");



class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 1, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar-admin");
    } }, directives: [_nav_bar_admin_nav_bar_admin_component__WEBPACK_IMPORTED_MODULE_1__["NavBarAdminComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzQXV0aC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uEnK":
/*!**********************************************************!*\
  !*** ./src/app/routing/post-user/post-user.component.ts ***!
  \**********************************************************/
/*! exports provided: PostUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostUserComponent", function() { return PostUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isAuth/user/nav-bar-user/navbarUser.service */ "5B2U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "toggled": a0 }; };
class PostUserComponent {
    constructor(navBarServiceUser) {
        this.navBarServiceUser = navBarServiceUser;
    }
    ngOnInit() {
    }
    getSideBarState() {
        return this.navBarServiceUser.getSidebarState();
    }
}
PostUserComponent.ɵfac = function PostUserComponent_Factory(t) { return new (t || PostUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"])); };
PostUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostUserComponent, selectors: [["app-post-user"]], decls: 11, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "page-wrapper", 3, "ngClass"], [1, "page-content"], ["type", "button", 1, "btn", "btn-primary", 2, "display", "block", "margin-left", "150px"]], template: function PostUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.getSideBarState()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRpbmcvcG9zdC11c2VyL3Bvc3QtdXNlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-user',
                templateUrl: './post-user.component.html',
                styleUrls: ['./post-user.component.css']
            }]
    }], function () { return [{ type: _isAuth_user_nav_bar_user_navbarUser_service__WEBPACK_IMPORTED_MODULE_1__["NavBarServiceUser"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _routing_update_by_id_update_by_id_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/update-by-id/update-by-id.component */ "TmP7");
/* harmony import */ var _routing_delete_by_id_delete_by_id_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing/delete-by-id/delete-by-id.component */ "+DWY");
/* harmony import */ var _routing_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing/get-user/get-user.component */ "d2Ar");
/* harmony import */ var _routing_post_user_post_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/post-user/post-user.component */ "uEnK");
/* harmony import */ var _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-content/home-content.component */ "fmvc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");











const routes = [
    { path: '', component: _home_content_home_content_component__WEBPACK_IMPORTED_MODULE_4__["HomeContentComponent"], },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'addUser', component: _routing_post_user_post_user_component__WEBPACK_IMPORTED_MODULE_3__["PostUserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'getUser', component: _routing_get_user_get_user_component__WEBPACK_IMPORTED_MODULE_2__["GetUserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'updateID', component: _routing_update_by_id_update_by_id_component__WEBPACK_IMPORTED_MODULE_0__["UpdateByIdComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'deleteID', component: _routing_delete_by_id_delete_by_id_component__WEBPACK_IMPORTED_MODULE_1__["DeleteByIdComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
                providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");









class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
                ],
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
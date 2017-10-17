webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<td-layout>\r\n\r\n    <!-- Menu -->\r\n    <td-navigation-drawer flex sidenavTitle=\"Agenda\" name=\"Administrador\" email=\"admin@admin.com\">\r\n\r\n        <md-nav-list>\r\n            <a *ngFor=\"let item of menus\" md-list-item md-list-item [routerLink]=\"item.route\">\r\n                <md-icon>{{item.icon}}</md-icon>{{item.title}}</a>\r\n        </md-nav-list>\r\n\r\n        <div td-navigation-drawer-menu>\r\n            <md-nav-list>\r\n                <a *ngFor=\"let item of usermenu\" md-list-item md-list-item [routerLink]=\"item.route\">\r\n                    <md-icon>{{item.icon}}</md-icon>{{item.title}}</a>\r\n            </md-nav-list>\r\n        </div>\r\n\r\n    </td-navigation-drawer>\r\n\r\n    <td-layout-nav toolbarTitle=\"Agenda de Tarefas\" navigationRoute=\"/\">\r\n        <button md-icon-button td-menu-button tdLayoutToggle>\r\n            <md-icon>menu</md-icon>\r\n        </button>\r\n\r\n        <div td-toolbar-content>\r\n            <!-- Aqui vai as coisas do toolbar -->\r\n        </div>\r\n\r\n        <md-content class=\"content-tabs-button tarefa-background\">\r\n            <!-- Aqui é meu content -->\r\n            <router-outlet></router-outlet>\r\n        </md-content>\r\n\r\n        <td-layout-footer color=\"primary\" class=\"tarefa-background\">\r\n            <!-- Aqui é meu footer -->\r\n            <copyright-footer></copyright-footer>\r\n        </td-layout-footer>\r\n\r\n    </td-layout-nav>\r\n</td-layout>"

/***/ }),

/***/ "../../../../../src/tarefa/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.menus = [{
                icon: 'home',
                route: './tarefa',
                title: 'Início',
            },
            {
                icon: 'add_circle',
                route: './tarefa/cadastro',
                title: 'Criar Nova Tarefa',
            }
        ];
        this.usermenu = [{
                icon: 'exit_to_app',
                route: '.',
                title: 'Sair da conta',
            }
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/tarefa/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/concluir-confirm/concluir-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Deseja <b>concluir</b> a tarefa?</h1>\r\n<div md-dialog-content>\r\n  <p>Comentário:</p>\r\n  <md-input-container>\r\n    <input mdInput tabindex=\"1\" [(ngModel)]=\"data.comentario\" [formControl]=\"comentarioFormControl\">\r\n    <md-error *ngIf=\"comentarioFormControl.hasError('required')\">\r\n      Comentário é <strong>necessário</strong>\r\n    </md-error>\r\n  </md-input-container>\r\n</div>\r\n<div md-dialog-actions>\r\n  <button md-button (click)=\"onYesClick()\" tabindex=\"2\" disabled=\"{{!data.comentario}}\">Sim</button>\r\n  <button md-button (click)=\"onNoClick()\" tabindex=\"-1\">Não</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/concluir-confirm/concluir-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcluirConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ConcluirConfirmComponent = (function () {
    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/
    /**
     *
     * @param dialogRef
     * @param data
     */
    function ConcluirConfirmComponent(snackBar, dialogRef, data) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        /*-------------------------------------------------------------------
        *                           ATTRIBUTES
        *-------------------------------------------------------------------*/
        /**
         *
         */
        this.comentarioFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
        ]);
    }
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     *
     */
    ConcluirConfirmComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConcluirConfirmComponent.prototype.onYesClick = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_eits_ng2__["a" /* Broker */].of("tarefaService").promise("updateTarefaToConcluida", this.data.id, this.data.comentario)
            .then(function (result) {
            _this.dialogRef.close(result);
            _this.openSnackBar("Tarefa concluida com sucesso!");
        })
            .catch(function (exception) {
            console.log(exception);
        });
    };
    ConcluirConfirmComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    };
    ConcluirConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'concluir-confirm',
            template: __webpack_require__("../../../../../src/tarefa/app/controls/concluir-confirm/concluir-confirm.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialogRef */]) === "function" && _b || Object, Object])
    ], ConcluirConfirmComponent);
    return ConcluirConfirmComponent;
    var _a, _b;
}());

//# sourceMappingURL=concluir-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/copyright-footer/copyright-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"start center\">\r\n    <span class=\"md-caption\">eits – make it simple &copy; 2017. Todos os direitos reservados.</span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/copyright-footer/copyright-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyrightFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CopyrightFooterComponent = (function () {
    function CopyrightFooterComponent() {
    }
    CopyrightFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'copyright-footer',
            template: __webpack_require__("../../../../../src/tarefa/app/controls/copyright-footer/copyright-footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CopyrightFooterComponent);
    return CopyrightFooterComponent;
}());

//# sourceMappingURL=copyright-footer.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/excluir-confirm/excluir-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <h1 md-dialog-title>Deseja <b>deletar</b> a tarefa?</h1>\r\n    <div md-dialog-content>\r\n    </div>\r\n    <div md-dialog-actions>\r\n      <button md-button (click)=\"onYesClick()\" tabindex=\"2\">Sim</button>\r\n      <button md-button (click)=\"onNoClick()\" tabindex=\"-1\">Não</button>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/excluir-confirm/excluir-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcluirConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ExcluirConfirmComponent = (function () {
    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/
    /**
     *
     * @param dialogRef
     * @param data
     */
    function ExcluirConfirmComponent(snackBar, dialogRef, data) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        /*-------------------------------------------------------------------
        *                           ATTRIBUTES
        *-------------------------------------------------------------------*/
        /**
         *
         */
        this.comentarioFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
        ]);
    }
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     *
     */
    ExcluirConfirmComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ExcluirConfirmComponent.prototype.onYesClick = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_eits_ng2__["a" /* Broker */].of("tarefaService").promise("deleteTarefa", this.data.id)
            .then(function (result) {
            _this.dialogRef.close(_this.data.id);
            _this.openSnackBar("Tarefa deletada com sucesso!");
        })
            .catch(function (exception) {
            _this.openSnackBar(exception.message);
            _this.dialogRef.close();
        });
    };
    ExcluirConfirmComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    };
    ExcluirConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'excluir-confirm',
            template: __webpack_require__("../../../../../src/tarefa/app/controls/excluir-confirm/excluir-confirm.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialogRef */]) === "function" && _b || Object, Object])
    ], ExcluirConfirmComponent);
    return ExcluirConfirmComponent;
    var _a, _b;
}());

//# sourceMappingURL=excluir-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/impedir-confirm/impedir-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"meuForm\">\r\n  <h1 md-dialog-title>Deseja <b>impedir</b> a tarefa?</h1>\r\n  <div md-dialog-content>\r\n    <p>Comentário:</p>\r\n    <md-input-container>\r\n      <input mdInput tabindex=\"1\" [(ngModel)]=\"data.comentario\" formControlName=\"comentario\">\r\n      <!-- <md-error *ngIf=\"comentarioFormControl.hasError('required')\">\r\n        Comentário é <strong>necessário</strong>\r\n      </md-error> -->\r\n      <md-error *ngIf=\"!meuForm.controls.comentario.valid\">\r\n        <md-error *ngIf=\"meuForm.controls.comentario.errors.required\">\r\n          Comentário é <strong>necessário</strong>\r\n        </md-error>\r\n        <md-error *ngIf=\"meuForm.controls.comentario.errors.maxlength\">\r\n          Não pode ser maior que <strong>144</strong>\r\n        </md-error>\r\n      </md-error>\r\n    </md-input-container>\r\n  </div>\r\n  <div md-dialog-actions>\r\n    <!-- <button md-button (click)=\"onYesClick()\" tabindex=\"2\" disabled=\"{{!data.comentario}}\">Sim</button> -->\r\n    <button md-button (click)=\"onYesClick()\" tabindex=\"2\" [disabled]=\"!meuForm.valid\">Sim</button>\r\n    <button md-button (click)=\"onNoClick()\" tabindex=\"-1\">Não</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/impedir-confirm/impedir-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpedirConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ImpedirConfirmComponent = (function () {
    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/
    /**
     *
     * @param dialogRef
     * @param data
     */
    function ImpedirConfirmComponent(fb, snackBar, dialogRef, data) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.meuForm = fb.group({
            comentario: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].maxLength(144)
                ])]
        });
    }
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     *
     */
    ImpedirConfirmComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ImpedirConfirmComponent.prototype.onYesClick = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_eits_ng2__["a" /* Broker */].of("tarefaService").promise("updateTarefaToEmImpedimento", this.data.id, this.data.comentario)
            .then(function (result) {
            _this.dialogRef.close(result);
            _this.openSnackBar("Tarefa impedida com sucesso!");
        })
            .catch(function (exception) {
            console.log(exception);
        });
    };
    ImpedirConfirmComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    };
    ImpedirConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'impedir-confirm',
            template: __webpack_require__("../../../../../src/tarefa/app/controls/impedir-confirm/impedir-confirm.component.html"),
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialogRef */]) === "function" && _c || Object, Object])
    ], ImpedirConfirmComponent);
    return ImpedirConfirmComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=impedir-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/iniciar-confirm/iniciar-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Deseja <b>iniciar</b> a tarefa?</h1>\r\n<div md-dialog-content>\r\n</div>\r\n<div md-dialog-actions>\r\n  <button md-button tabindex=\"2\" (click)=\"onYesClick()\">Sim</button>\r\n  <button md-button (click)=\"onNoClick()\" tabindex=\"-1\">Não</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/iniciar-confirm/iniciar-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciarConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var IniciarConfirmComponent = (function () {
    /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/
    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/
    /**
     *
     * @param dialogRef
     * @param data
     */
    function IniciarConfirmComponent(snackBar, router, dialogRef, data) {
        this.snackBar = snackBar;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     *
     */
    IniciarConfirmComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        this.router.navigate([""]);
    };
    IniciarConfirmComponent.prototype.onYesClick = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_eits_ng2__["a" /* Broker */].of("tarefaService").promise("updateTarefaToEmExecucao", this.data.id)
            .then(function (result) {
            _this.dialogRef.close(result);
            _this.openSnackBar("Tarefa iniciada com sucesso!");
        })
            .catch(function (exception) {
            console.log(exception);
        });
    };
    IniciarConfirmComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    };
    IniciarConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'iniciar-confirm',
            template: __webpack_require__("../../../../../src/tarefa/app/controls/iniciar-confirm/iniciar-confirm.component.html")
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdDialogRef */]) === "function" && _c || Object, Object])
    ], IniciarConfirmComponent);
    return IniciarConfirmComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=iniciar-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/invalidar-confirm/invalidar-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Deseja <b>invalidar</b> a tarefa?</h1>\r\n<div md-dialog-content>\r\n  <p>Comentário:</p>\r\n  <md-input-container>\r\n    <input mdInput tabindex=\"1\" [(ngModel)]=\"data.comentario\" [formControl]=\"comentarioFormControl\">\r\n    <md-error *ngIf=\"comentarioFormControl.hasError('required')\">\r\n      Comentário é <strong>necessário</strong>\r\n    </md-error>\r\n  </md-input-container>\r\n</div>\r\n<div md-dialog-actions>\r\n  <button md-button (click)=\"onYesClick()\" tabindex=\"2\" disabled=\"{{!data.comentario}}\">Sim</button>\r\n  <button md-button (click)=\"onNoClick()\" tabindex=\"-1\">Não</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/tarefa/app/controls/invalidar-confirm/invalidar-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidarConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var InvalidarConfirmComponent = (function () {
    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/
    /**
     *
     * @param dialogRef
     * @param data
     */
    function InvalidarConfirmComponent(snackBar, dialogRef, data) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        /*-------------------------------------------------------------------
        *                           ATTRIBUTES
        *-------------------------------------------------------------------*/
        /**
         *
         */
        this.comentarioFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required
        ]);
    }
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     *
     */
    InvalidarConfirmComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    InvalidarConfirmComponent.prototype.onYesClick = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_eits_ng2__["a" /* Broker */].of("tarefaService").promise("updateTarefaToInvalida", this.data.id, this.data.comentario)
            .then(function (result) {
            _this.dialogRef.close(result);
            _this.openSnackBar("Tarefa invalidada com sucesso!");
        })
            .catch(function (exception) {
            _this.openSnackBar(exception.message);
        });
    };
    InvalidarConfirmComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    };
    InvalidarConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'invalidar-confirm',
            template: __webpack_require__("../../../../../src/tarefa/app/controls/invalidar-confirm/invalidar-confirm.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialogRef */]) === "function" && _b || Object, Object])
    ], InvalidarConfirmComponent);
    return InvalidarConfirmComponent;
    var _a, _b;
}());

//# sourceMappingURL=invalidar-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controls_copyright_footer_copyright_footer_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/copyright-footer/copyright-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls_invalidar_confirm_invalidar_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/invalidar-confirm/invalidar-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controls_iniciar_confirm_iniciar_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/iniciar-confirm/iniciar-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_excluir_confirm_excluir_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/excluir-confirm/excluir-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_impedir_confirm_impedir_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/impedir-confirm/impedir-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controls_concluir_confirm_concluir_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/concluir-confirm/concluir-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_tarefa_tarefa_details_historico_tarefa_details_historico_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-details-historico/tarefa-details-historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_tarefa_tarefa_form_tarefa_form_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-form/tarefa-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_tarefa_tarefa_card_tarefa_card_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-card/tarefa-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_tarefa_tarefa_details_tarefa_details_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-details/tarefa-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_tarefa_tarefa_list_tarefa_list_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-list/tarefa-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/tarefa/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_tarefa_tarefa_view_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_md2_datepicker__ = __webpack_require__("../../../../md2/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routing_module__ = __webpack_require__("../../../../../src/tarefa/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { ConsultarUsuariosComponent } from './controls/consultar-usuarios/consultar-usuarios.component';













//===============================ANGULAR MODULES=================================









//===============================COVALENT MODULES================================

//===============================APP MODULES=====================================


//==============================APP SERVICES=====================================
//==============================APP COMPONENTS===================================
//=============================APP DIRECTIVES====================================
//===============================APP MODELS======================================
// Ngx-Translate
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'static/i18n/', '.json');
}
/**
 *
 */
var Module = (function () {
    function Module() {
    }
    Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                //TAREFA
                __WEBPACK_IMPORTED_MODULE_12__views_tarefa_tarefa_view_component__["a" /* TarefaViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_tarefa_tarefa_list_tarefa_list_component__["a" /* TarefaListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__views_tarefa_tarefa_form_tarefa_form_component__["a" /* TarefaFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_tarefa_tarefa_card_tarefa_card_component__["a" /* TarefaCardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_tarefa_tarefa_details_tarefa_details_component__["a" /* TarefaDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__views_tarefa_tarefa_details_historico_tarefa_details_historico_component__["a" /* TarefaDetailsHistoricoComponent */],
                __WEBPACK_IMPORTED_MODULE_0__controls_copyright_footer_copyright_footer_component__["a" /* CopyrightFooterComponent */],
                // ConsultarUsuariosComponent,
                __WEBPACK_IMPORTED_MODULE_5__controls_concluir_confirm_concluir_confirm_component__["a" /* ConcluirConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_4__controls_impedir_confirm_impedir_confirm_component__["a" /* ImpedirConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_2__controls_iniciar_confirm_iniciar_confirm_component__["a" /* IniciarConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_3__controls_excluir_confirm_excluir_confirm_component__["a" /* ExcluirConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_1__controls_invalidar_confirm_invalidar_confirm_component__["a" /* InvalidarConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_5__controls_concluir_confirm_concluir_confirm_component__["a" /* ConcluirConfirmComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["g" /* CovalentLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["l" /* CovalentStepsModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["a" /* CovalentChipsModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["f" /* CovalentFileModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["e" /* CovalentExpansionPanelModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["k" /* CovalentPagingModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["h" /* CovalentLoadingModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["i" /* CovalentMediaModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["j" /* CovalentMessageModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["b" /* CovalentCommonModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["c" /* CovalentDataTableModule */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["d" /* CovalentDialogsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["b" /* MdAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["p" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["A" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["E" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["t" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["r" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["g" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["y" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["D" /* MdSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["G" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["m" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["f" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["d" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["H" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["s" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["j" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["u" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["I" /* MdTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["x" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["e" /* MdButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_18__angular_http__["a" /* Http */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_23__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21_md2_datepicker__["a" /* Md2DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["o" /* MdGridListModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__controls_concluir_confirm_concluir_confirm_component__["a" /* ConcluirConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_4__controls_impedir_confirm_impedir_confirm_component__["a" /* ImpedirConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_2__controls_iniciar_confirm_iniciar_confirm_component__["a" /* IniciarConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_3__controls_excluir_confirm_excluir_confirm_component__["a" /* ExcluirConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_1__controls_invalidar_confirm_invalidar_confirm_component__["a" /* InvalidarConfirmComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__routing_module__["b" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["n" /* TdLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__covalent_core__["m" /* TdDialogService */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_15__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]
            ]
        })
    ], Module);
    return Module;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_tarefa_tarefa_details_historico_tarefa_details_historico_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-details-historico/tarefa-details-historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_tarefa_tarefa_details_tarefa_details_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-details/tarefa-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_tarefa_tarefa_form_tarefa_form_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-form/tarefa-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_tarefa_tarefa_list_tarefa_list_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-list/tarefa-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_tarefa_tarefa_view_component__ = __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'tarefa', pathMatch: 'full' },
    { path: 'tarefa', component: __WEBPACK_IMPORTED_MODULE_4__views_tarefa_tarefa_view_component__["a" /* TarefaViewComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__views_tarefa_tarefa_list_tarefa_list_component__["a" /* TarefaListComponent */] },
            { path: 'editar/:id', component: __WEBPACK_IMPORTED_MODULE_2__views_tarefa_tarefa_form_tarefa_form_component__["a" /* TarefaFormComponent */] },
            { path: 'cadastro', component: __WEBPACK_IMPORTED_MODULE_2__views_tarefa_tarefa_form_tarefa_form_component__["a" /* TarefaFormComponent */] },
            { path: 'detalhes/:id', component: __WEBPACK_IMPORTED_MODULE_1__views_tarefa_tarefa_details_tarefa_details_component__["a" /* TarefaDetailsComponent */] },
            { path: 'historicos/:id', component: __WEBPACK_IMPORTED_MODULE_0__views_tarefa_tarefa_details_historico_tarefa_details_historico_component__["a" /* TarefaDetailsHistoricoComponent */] }
        ] },
];
var routing = __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });
/**
 *
 */
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
            imports: [routing],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());

var appRoutingProviders = [];
//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-card/tarefa-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"tarefa\">\r\n    <md-card-title layout-align=\"center center\" class=\"truncate\">{{tarefa.titulo}}</md-card-title>\r\n    <md-divider></md-divider>\r\n    <md-card-content>\r\n        Responsável: {{ tarefa?.donoTarefa.nome }}\r\n        <br> \r\n        Data Inicial: {{ tarefa?.dataInicial | date: \"dd/MM/yyyy\" }}\r\n        <br> \r\n        Prioriodade: {{ tarefa?.prioridade }} \r\n        <br> \r\n        Situação: {{ tarefa?.situacao }}\r\n        <br>\r\n    </md-card-content>\r\n    <md-divider></md-divider>\r\n    <md-card-actions>\r\n        <a *ngIf=\"canUpdateToEmExecucao(tarefa.situacao)\"\r\n            md-icon-button mdTooltip=\"Iniciar tarefa\"\r\n            (click)=\"openDialogIniciarConfirm()\">\r\n            <md-icon>play_circle_outline</md-icon>\r\n        </a>\r\n        <a  md-icon-button mdTooltip=\"Editar tarefa\"\r\n            [routerLink]=\"['editar', tarefa.id]\">\r\n            <md-icon>mode_edit</md-icon>\r\n        </a>\r\n        <a  md-icon-button mdTooltip=\"Visualizar detalhes da tarefa\"\r\n            [routerLink]=\"['detalhes', tarefa.id]\">\r\n            <md-icon>search</md-icon>\r\n        </a>\r\n        <a *ngIf=\"canUpdateToInvalida(tarefa.situacao)\"\r\n            md-icon-button mdTooltip=\"Invalidar Tarefa\"\r\n            (click)=\"openDialogInvalidarConfirm()\">\r\n            <md-icon>close</md-icon>\r\n        </a>\r\n        <a *ngIf=\"canUpdateToEmImpedimento(tarefa.situacao)\" \r\n            md-icon-button mdTooltip=\"Colocar tarefa em impedimento\" \r\n            (click)=\"openDialogImpedirConfirm()\">\r\n            <md-icon>error_outline</md-icon>\r\n        </a>\r\n        <a *ngIf=\"canDelete(tarefa.situacao)\"\r\n            md-icon-button mdTooltip=\"Exluir tarefa\"\r\n            (click)=\"openDialogExcluirConfirm()\">\r\n            <md-icon>delete</md-icon>\r\n        </a>\r\n        <a *ngIf=\"canUpdateToConcluida(tarefa.situacao)\"\r\n            md-icon-button mdTooltip=\"Concluir tarefa\" \r\n            (click)=\"openDialogConcluirConfirm()\">\r\n            <md-icon>check_circle</md-icon>\r\n        </a>\r\n    </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-card/tarefa-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls_excluir_confirm_excluir_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/excluir-confirm/excluir-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controls_iniciar_confirm_iniciar_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/iniciar-confirm/iniciar-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_invalidar_confirm_invalidar_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/invalidar-confirm/invalidar-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_impedir_confirm_impedir_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/impedir-confirm/impedir-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controls_concluir_confirm_concluir_confirm_component__ = __webpack_require__("../../../../../src/tarefa/app/controls/concluir-confirm/concluir-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TarefaCardComponent = (function () {
    /**
     *
     * @param dialog
     */
    function TarefaCardComponent(dialog) {
        this.dialog = dialog;
        /**
         * Emitter para quando deletar emitir para o list tirar o card da tarefa
         */
        this.onDeleteTarefa = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */];
        /**
         * Situação mockada para md-select
         */
        this.situacao = {
            INVALIDA: 'INVALIDA',
            EM_EXECUCAO: 'EM_EXECUCAO',
            EM_IMPEDIMENTO: 'EM_IMPEDIMENTO',
            A_FAZER: 'A_FAZER',
            CONCLUIDA: 'CONCLUIDA'
        };
        /**
         * Controle de exibição de ícones para colocar em Em Execução
         */
        this.canUpdateToEmExecucao = function (situacao) {
            return situacao != this.situacao.EM_EXECUCAO;
        };
        /**
         * Controle de exibição de ícones para colocar em Invalida
         */
        this.canUpdateToInvalida = function (situacao) {
            return ((situacao == this.situacao.A_FAZER)
                || (situacao == this.situacao.EM_IMPEDIMENTO)
                || (situacao == this.situacao.EM_EXECUCAO));
        };
        /**
         * Controle de exibição de ícones para colocar em Em Impedimento
         */
        this.canUpdateToEmImpedimento = function (situacao) {
            return ((situacao == this.situacao.INVALIDA)
                || (situacao == this.situacao.EM_EXECUCAO));
        };
        /**
        * Controle de exibição de ícones para colocar em Concluida
         */
        this.canUpdateToConcluida = function (situacao) {
            return ((situacao != this.situacao.CONCLUIDA)
                && (situacao == this.situacao.EM_EXECUCAO));
        };
        /**
         * Controle de exibição de ícones para Excluir tarefa
         */
        this.canDelete = function (situacao) {
            return situacao == this.situacao.A_FAZER
                || situacao == this.situacao.INVALIDA;
        };
    }
    /**
     *
     */
    TarefaCardComponent.prototype.ngOnInit = function () {
    };
    /**
     * Abrir dialog Concluir
     * Envia um this.tarefa.id no data
     */
    TarefaCardComponent.prototype.openDialogConcluirConfirm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__controls_concluir_confirm_concluir_confirm_component__["a" /* ConcluirConfirmComponent */], {
            width: '300px',
            data: { id: this.tarefa.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.tarefa = result;
            }
        });
    };
    /**
     * Abrir dialog Impedir
     * Envia um this.tarefa.id no data
     */
    TarefaCardComponent.prototype.openDialogImpedirConfirm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__controls_impedir_confirm_impedir_confirm_component__["a" /* ImpedirConfirmComponent */], {
            width: '300px',
            data: { id: this.tarefa.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.tarefa = result;
            }
        });
    };
    /**
     * Abrir dialog Invalidar
     * Envia um this.tarefa.id no data
     */
    TarefaCardComponent.prototype.openDialogInvalidarConfirm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__controls_invalidar_confirm_invalidar_confirm_component__["a" /* InvalidarConfirmComponent */], {
            width: '300px',
            data: { id: this.tarefa.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.tarefa = result;
            }
        });
    };
    /**
     * Abrir dialog Iniciar
     * Envia um this.tarefa.id no data
     */
    TarefaCardComponent.prototype.openDialogIniciarConfirm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__controls_iniciar_confirm_iniciar_confirm_component__["a" /* IniciarConfirmComponent */], {
            width: '300px',
            data: { id: this.tarefa.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.tarefa = result;
            }
        });
    };
    /**
     * Abrir dialog Excluir
     * Envia um this.tarefa.id no data
     */
    TarefaCardComponent.prototype.openDialogExcluirConfirm = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__controls_excluir_confirm_excluir_confirm_component__["a" /* ExcluirConfirmComponent */], {
            width: '300px',
            data: { id: this.tarefa.id }
        });
        dialogRef.afterClosed().subscribe(function (tarefaId) {
            if (tarefaId) {
                _this.tarefa = tarefaId;
                _this.onDeleteTarefa.emit(tarefaId);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TarefaCardComponent.prototype, "titulo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TarefaCardComponent.prototype, "tarefa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], TarefaCardComponent.prototype, "onDeleteTarefa", void 0);
    TarefaCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'tarefa-card',
            template: __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-card/tarefa-card.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MdDialog */]) === "function" && _b || Object])
    ], TarefaCardComponent);
    return TarefaCardComponent;
    var _a, _b;
}());

//# sourceMappingURL=tarefa-card.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-details-historico/tarefa-details-historico.component.html":
/***/ (function(module, exports) {

module.exports = "<div flex layout=\"column\" layout-align=\"center center\">\r\n\r\n        <md-card class=\"pad\">\r\n\r\n                <div flex layout=\"row\" layout-align=\"center center\">\r\n                        <h1 flex class=\"md-headline tc-blue-grey-800 no-margin push\">Historicos da Tarefa</h1>\r\n                </div>\r\n\r\n                <md-divider></md-divider>\r\n\r\n                <table td-data-table>\r\n                        <thead>\r\n                                <tr td-data-table-column-row>\r\n\r\n                                        <th td-data-table-column [numeric]=\"1\">Alterado por</th>\r\n                                        <th td-data-table-column [numeric]=\"2\">Comentário</th>\r\n                                        <th td-data-table-column [numeric]=\"3\">Data alteração</th>\r\n                                        <th td-data-table-column [numeric]=\"4\">Situação anterior</th>\r\n                                        <th td-data-table-column [numeric]=\"5\">Situação atual</th>\r\n\r\n                                </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                                <tr td-data-table-row *ngFor=\"let historico of historicos\">\r\n                                        <td td-data-table-cell [numeric]=\"1\">{{historico?.alteradoPor.nome}}</td>\r\n                                        <td td-data-table-cell [numeric]=\"2\">{{historico?.comentario}}</td>\r\n                                        <td td-data-table-cell [numeric]=\"3\">{{historico?.dataAlteracao | date: 'dd/MM/yyyy'}}</td>\r\n                                        <td td-data-table-cell [numeric]=\"4\">{{historico?.situacaoAnterior}}</td>\r\n                                        <td td-data-table-cell [numeric]=\"5\">{{historico?.situacaoAtual}}</td>\r\n                                </tr>\r\n                        </tbody>\r\n                </table>\r\n\r\n                <md-divider></md-divider>\r\n\r\n                <div flex layout=\"row\">\r\n                        <div flex></div>\r\n                        <button flex=\"20\" class=\"push\" md-raised-button [routerLink]=\"['']\">Voltar</button>\r\n                </div>\r\n        </md-card>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-details-historico/tarefa-details-historico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaDetailsHistoricoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TarefaDetailsHistoricoComponent = (function () {
    /**
     * @param activatedRoute
     */
    function TarefaDetailsHistoricoComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        /**
         *
         */
        this.historicos = [];
        /**
         *
         */
        this.listHistoricosByTarefaId = function (tarefaId) {
            var _this = this;
            __WEBPACK_IMPORTED_MODULE_0_eits_ng2__["a" /* Broker */].of("tarefaService").promise("listHistoricosByTarefaId", tarefaId, null)
                .then(function (result) {
                _this.historicos = result.content;
            })
                .catch(function (exception) {
                console.log(exception.message);
            });
        };
    }
    /**
     *
     */
    TarefaDetailsHistoricoComponent.prototype.ngOnInit = function () {
        var tarefaId = this.activatedRoute.snapshot.params['id'];
        this.listHistoricosByTarefaId(tarefaId);
    };
    TarefaDetailsHistoricoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'tarefa-details',
            template: __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-details-historico/tarefa-details-historico.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
    ], TarefaDetailsHistoricoComponent);
    return TarefaDetailsHistoricoComponent;
    var _a;
}());

//# sourceMappingURL=tarefa-details-historico.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-details/tarefa-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div flex=\"100\" layout=\"column\" layout-align=\"center center\">\r\n        <md-card flex>\r\n                <div>\r\n                        <h1 flex layout=\"row\" layout-align=\"start center\" class=\"md-headline tc-blue-grey-800 no-margin push\">Detalhes da Tarefa</h1>\r\n                        <div layout=\"row\" layout-align=\"start center\" layout-margin flex>\r\n                                <div layout=\"column\" *ngIf=\"tarefa\">\r\n                                        <md-divider></md-divider>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500 text-break\" *ngIf=\"tarefa.titulo\">\r\n                                                <b>Titulo:</b> {{tarefa?.titulo}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500 text-break\" *ngIf=\"tarefa.descricao\">\r\n                                                <b>Descrição:</b> {{tarefa?.descricao}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500\" *ngIf=\"tarefa.dataInicial\">\r\n                                                <b>Data inicial:</b> {{tarefa?.dataInicial | date: 'dd/MM/yyyy'}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500\" *ngIf=\"tarefa.dataPrevistaFinal\">\r\n                                                <b>Data de previsão final:</b> {{tarefa?.dataPrevistaFinal | date: 'dd/MM/yyyy'}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500\" *ngIf=\"tarefa.prioridade\">\r\n                                                <b>Prioridade:</b> {{tarefa?.prioridade}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500\" *ngIf=\"tarefa.dataConclusao\">\r\n                                                <b>Data conclusão:</b> {{tarefa?.dataConclusao | date: 'dd/MM/yyyy'}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500\" *ngIf=\"tarefa.donoTarefa.nome\">\r\n                                                <b> Dono da tarefa:</b> {{tarefa?.donoTarefa.nome}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500\" *ngIf=\"tarefa.tempoEstimado\">\r\n                                                <b>Tempo estimado (em horas):</b> {{tarefa?.tempoEstimado}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500\" *ngIf=\"tarefa.tempoGasto\">\r\n                                                <b>Tempo gasto (em horas):</b> {{tarefa?.tempoGasto}}\r\n                                        </h1>\r\n                                        <h1 flex class=\"md-subhead tc-blue-grey-500\" *ngIf=\"tarefa.situacao\">\r\n                                                <b>Situação:</b> {{tarefa?.situacao}}\r\n                                        </h1>\r\n                                        <md-divider></md-divider>\r\n                                        <div class=\"push\" flex layout=\"row\">\r\n                                                <span flex></span>\r\n                                                <button type=\"button\" md-raised-button [routerLink]=\"['/tarefa/historicos', tarefa.id]\" color=\"primary\">Histórico</button>\r\n                                                <button md-raised-button [routerLink]=\"['']\">Voltar</button>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-details/tarefa-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TarefaDetailsComponent = (function () {
    /**
     *
     * @param activatedRoute
     */
    function TarefaDetailsComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        /**
         * @param tarefaId
         */
        this.findTarefaById = function (tarefaId) {
            var _this = this;
            __WEBPACK_IMPORTED_MODULE_0_eits_ng2__["a" /* Broker */].of("tarefaService").promise("findTarefaById", +tarefaId)
                .then(function (result) {
                _this.tarefa = result;
            });
        };
    }
    /**
     *
     */
    TarefaDetailsComponent.prototype.ngOnInit = function () {
        var tarefaId = this.activatedRoute.snapshot.params['id'];
        if (tarefaId) {
            this.findTarefaById(tarefaId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TarefaDetailsComponent.prototype, "tarefa", void 0);
    TarefaDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'tarefa-details',
            template: __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-details/tarefa-details.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
    ], TarefaDetailsComponent);
    return TarefaDetailsComponent;
    var _a;
}());

//# sourceMappingURL=tarefa-details.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-form/tarefa-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"tarefaForm\">\r\n        <md-card class=\"pad\">\r\n                <div>\r\n                        <div>\r\n                                <h1>\r\n                                        <a *ngIf=\"!tarefa.id\">Cadastrar Tarefa</a>\r\n                                        <a *ngIf=\"tarefa.id\">Editar Tarefa</a>\r\n                                </h1>\r\n                        </div>\r\n                        <div>\r\n                                <md-input-container>\r\n                                        <input mdInput placeholder=\"Título\" formControlName=\"tituloForm\" [(ngModel)]=\"tarefa.titulo\">\r\n                                        <md-error *ngIf=\"!tarefaForm.controls.tituloForm.valid\">\r\n                                                <md-error *ngIf=\"tarefaForm.controls.tituloForm.errors.required\">\r\n                                                        Título é <strong>necessário</strong>\r\n                                                </md-error>\r\n                                                <md-error *ngIf=\"tarefaForm.controls.tituloForm.errors.maxlength\">\r\n                                                        Título é <strong>maior que 144 caracteres</strong>\r\n                                                </md-error>\r\n                                        </md-error>\r\n                                </md-input-container>\r\n                        </div>\r\n                        <div>\r\n                                <md-input-container>\r\n                                        <textarea [rows]=\"5\" mdInput placeholder=\"Descrição\" formControlName=\"descricaoForm\" [(ngModel)]=\"tarefa.descricao\"></textarea>\r\n                                        <md-error *ngIf=\"!tarefaForm.controls.descricaoForm.valid\">\r\n                                                <md-error *ngIf=\"tarefaForm.controls.descricaoForm.errors.maxlength\">\r\n                                                        Descrição é <strong>maior que 255 caracteres</strong>\r\n                                                </md-error>\r\n                                        </md-error>\r\n                                </md-input-container>\r\n                        </div>\r\n\r\n                        <table>\r\n                                <tr>\r\n                                        <td>\r\n                                                <md-input-container>\r\n                                                        <input mdInput [mdDatepicker]=\"dataInicial\" placeholder=\"Data Inicial\" formControlName=\"dataInicialForm\" [(ngModel)]=\"tarefa.dataInicial\">\r\n                                                        <button mdSuffix [mdDatepickerToggle]=\"dataInicial\"></button>\r\n                                                        <md-datepicker #dataInicial></md-datepicker>\r\n                                                        <md-error>\r\n                                                                Data Inicial é <strong>necessária</strong>\r\n                                                        </md-error>\r\n                                                </md-input-container>\r\n                                        </td>\r\n                                        <td>\r\n                                                <md-input-container>\r\n                                                        <input mdInput [mdDatepicker]=\"dataFinalPrevista\" placeholder=\"Data Final\" formControlName=\"dataFinalPrevistaForm\" [(ngModel)]=\"tarefa.dataPrevistaFinal\">\r\n                                                        <button mdSuffix [mdDatepickerToggle]=\"dataFinalPrevista\"></button>\r\n                                                        <md-datepicker #dataFinalPrevista></md-datepicker>\r\n                                                        <md-error>\r\n                                                                Data Final é <strong>necessária</strong>\r\n                                                        </md-error>\r\n                                                </md-input-container>\r\n                                        </td>\r\n                                </tr>\r\n                        </table>\r\n                        <br>\r\n                        <table>\r\n                                <tr>\r\n                                        <td>\r\n                                                <md-select placeholder=\"Prioridade\" formControlName=\"prioridadeForm\" [(ngModel)]=\"tarefa.prioridade\">\r\n                                                        <md-option *ngFor=\"let prioridade of prioridades\" [value]=\"prioridade.value\">\r\n                                                                {{ prioridade.viewValue }}\r\n                                                        </md-option>\r\n                                                </md-select>\r\n                                                <md-error *ngIf=\"!tarefaForm.controls.prioridadeForm.valid\">\r\n                                                        <md-error (ngSubmit)=\"tarefaForm.controls.prioridadeForm.errors.required\">\r\n                                                                <span class=\"text-sm\">\r\n                                                                Prioridade é <strong>necessário</strong>\r\n                                                        </span>\r\n                                                        </md-error>\r\n                                                </md-error>\r\n\r\n                                        </td>\r\n                                        <td>\r\n                                                <md-input-container>\r\n                                                        <input mdInput placeholder=\"Tempo Estimado (horas)\" type=\"number\" formControlName=\"tempoEstimadoForm\" [(ngModel)]=\"tarefa.tempoEstimado\">\r\n                                                        <md-error *ngIf=\"!tarefaForm.controls.tempoEstimadoForm.valid\">\r\n                                                                <md-error *ngIf=\"tarefaForm.controls.tempoEstimadoForm.errors.required\">\r\n                                                                        Tempo estimado é <strong>necessário</strong>\r\n                                                                </md-error>\r\n                                                                <md-error *ngIf=\"tarefaForm.controls.tempoEstimadoForm.errors.min\">\r\n                                                                        Tempo estimado deve ser <strong> maior que 0</strong>\r\n                                                                </md-error>\r\n                                                        </md-error>\r\n                                                </md-input-container>\r\n                                        </td>\r\n                                </tr>\r\n                        </table>\r\n\r\n                        <md-input-container>\r\n                                <md-form-field>\r\n                                        <input type=\"text\" placeholder=\"Dono da tarefa\" mdInput formControlName=\"donoTarefaForm\" [(ngModel)]=\"tarefa.donoTarefa\"\r\n                                                [mdAutocomplete]=\"auto\">\r\n                                        <md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayAutocompleteUsuarioNome\">\r\n                                                <md-option *ngFor=\"let usuario  of usuarios\" [value]=\"usuario\">\r\n                                                        {{ usuario.nome }}\r\n                                                </md-option>\r\n                                        </md-autocomplete>\r\n                                </md-form-field>\r\n                                <md-error *ngIf=\"!tarefaForm.controls.donoTarefaForm.valid\">\r\n                                        <md-error *ngIf=\"tarefaForm.controls.donoTarefaForm.errors.required\">\r\n                                                Dono da tarefa é <strong>necessário</strong>\r\n                                        </md-error>\r\n                                </md-error>\r\n                        </md-input-container>\r\n\r\n                        <div flex layout=\"row\">\r\n                                <span flex></span>\r\n                                <button md-raised-button (click)=\"insertTarefa(tarefa)\" *ngIf=\"!tarefa.id\" color=\"primary\">Salvar</button>\r\n                                <button md-raised-button (click)=\"updateTarefa(tarefa)\" *ngIf=\"tarefa.id\" color=\"primary\">Salvar</button>\r\n                                <button md-raised-button [routerLink]=\"['']\">Voltar</button>\r\n                        </div>\r\n                </div>\r\n        </md-card>\r\n</form>"

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-form/tarefa-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TarefaFormComponent = (function () {
    /**
     *
     * @param snackBar
     */
    function TarefaFormComponent(snackBar, http, fb, activatedRoute, router) {
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.router = router;
        /**
         *
         */
        this.tarefa = {};
        /**
         *
         */
        this.usuarios = [];
        /**
         *
         */
        this.prioridades = [
            { value: 'BAIXA', viewValue: 'BAIXA' },
            { value: 'MEDIA', viewValue: 'MEDIA' },
            { value: 'ALTA', viewValue: 'ALTA' },
            { value: 'URGENTE', viewValue: 'URGENTE' }
        ];
        /**
         *
         */
        this.findTarefaById = function (tarefaId) {
            var _this = this;
            __WEBPACK_IMPORTED_MODULE_1_eits_ng2__["a" /* Broker */].of("tarefaService").promise("findTarefaById", +tarefaId)
                .then(function (result) {
                _this.tarefa = result;
            });
        };
        /**
         *
         */
        this.listUsuariosByFilters = function (filter, pageable) {
            var _this = this;
            __WEBPACK_IMPORTED_MODULE_1_eits_ng2__["a" /* Broker */].of("tarefaService").promise("listUsuariosByFilters", filter, pageable)
                .then(function (result) {
                _this.usuarios = result.content;
            })
                .catch(function (exception) {
                console.log(exception.message);
            });
        };
        this.http = http;
        this.tarefaForm = fb.group({
            tituloForm: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].maxLength(144)])],
            dataInicialForm: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            prioridadeForm: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            dataFinalPrevistaForm: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            tempoEstimadoForm: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].min(1)])],
            donoTarefaForm: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            descricaoForm: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].maxLength(255)]
        });
    }
    /**
     *
     */
    TarefaFormComponent.prototype.ngOnInit = function () {
        var tarefaId = this.activatedRoute.snapshot.params['id'];
        if (tarefaId) {
            this.findTarefaById(tarefaId);
        }
        ;
        this.listUsuariosByFilters(null, null);
    };
    /**
     *
     * @param tarefa
     */
    TarefaFormComponent.prototype.insertTarefa = function (tarefa) {
        var _this = this;
        if (this.tarefaForm.valid) {
            __WEBPACK_IMPORTED_MODULE_1_eits_ng2__["a" /* Broker */].of("tarefaService").promise("insertTarefa", tarefa)
                .then(function (tarefa) {
                _this.openSnackBar("Tarefa salva com sucesso!");
                _this.router.navigate([""]);
            })
                .catch(function (exception) {
                _this.openSnackBar(exception.message);
            });
        }
    };
    /**
     *
     * @param tarefa
     */
    TarefaFormComponent.prototype.updateTarefa = function (tarefa) {
        var _this = this;
        if (this.tarefaForm.valid) {
            __WEBPACK_IMPORTED_MODULE_1_eits_ng2__["a" /* Broker */].of("tarefaService").promise("updateTarefa", tarefa)
                .then(function (tarefa) {
                _this.openSnackBar("Tarefa editada com sucesso!");
                _this.router.navigate([""]);
            })
                .catch(function (exception) {
                _this.openSnackBar(exception.message);
            });
        }
    };
    /**
     *
     * @param message
     */
    TarefaFormComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, "Ok", {
            duration: 5000,
        });
    };
    /**
     *
     * @param usuario
     */
    TarefaFormComponent.prototype.displayAutocompleteUsuarioNome = function (usuario) {
        return usuario ? usuario.nome : "";
    };
    TarefaFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
            selector: 'tarefa-form',
            template: __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-form/tarefa-form.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _e || Object])
    ], TarefaFormComponent);
    return TarefaFormComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=tarefa-form.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-list/tarefa-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div flex>\r\n    <div layout=\"row\">\r\n        <md-card flex class=\"pad-none\">\r\n            <div layout=\"row\" layout-align=\"center center\">\r\n                <md-input-container flex class=\"push\">\r\n                    <input mdInput placeholder=\"Título\" [(ngModel)]=\"filtro.filter\">\r\n                </md-input-container>\r\n                <md-input-container flex class=\"push\">\r\n                    <input mdInput placeholder=\"Descrição\" [(ngModel)]=\"filtro.descricao\">\r\n                </md-input-container>\r\n                <md-select flex class=\"push\" placeholder=\"Prioridade\" [(ngModel)]=\"filtro.prioridade\">\r\n                    <md-option *ngFor=\"let prioridade of prioridades\" [value]=\"prioridade.value\">\r\n                        {{ prioridade.viewValue }}\r\n                    </md-option>\r\n                </md-select>\r\n                <md-select flex class=\"push\" placeholder=\"Situação\" [(ngModel)]=\"filtro.situacao\">\r\n                    <md-option *ngFor=\"let situacao of situacoes\" [value]=\"situacao.value\">\r\n                        {{ situacao.viewValue }}\r\n                    </md-option>\r\n                </md-select>\r\n\r\n                <button md-raised-button class=\"push\" (click)=\"filtrarTarefa(filtro)\" color=\"primary\">Filtrar</button>\r\n            </div>\r\n        </md-card>\r\n        <div layout=\"row\" layout-align=\"center center\">\r\n            <a class=\"push\" md-icon-button mdTooltip=\"Criar tarefa\">\r\n                <md-icon color=\"accent\" class=\"md-48\" [routerLink]=\"['cadastro']\">add_circle</md-icon>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <!-- Aqui dentro, é meu content onde vou mostrar as cards -->\r\n\r\n    <!-- layout-gt-sm=\"row\" tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['push-sm']\"-->\r\n    <div layout-gm-sm=\"row\">\r\n        <tarefa-card *ngFor=\"let tarefa of tarefas\" [tarefa]=\"tarefa\" (onDeleteTarefa)=\"removeTarefa(tarefa?.id)\"></tarefa-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-list/tarefa-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eits_ng2__ = __webpack_require__("../../../../eits-ng2/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TarefaListComponent = (function () {
    function TarefaListComponent() {
        this.tarefas = [];
        this.filtro = {};
        this.prioridades = [
            { value: 'BAIXA', viewValue: 'BAIXA' },
            { value: 'MEDIA', viewValue: 'MEDIA' },
            { value: 'ALTA', viewValue: 'ALTA' },
            { value: 'URGENTE', viewValue: 'URGENTE' },
            { value: null, viewValue: 'NENHUMA' }
        ];
        this.situacoes = [
            { value: 'EM_EXECUCAO', viewValue: 'EM EXECUCAO' },
            { value: 'EM_IMPEDIMENTO', viewValue: 'EM IMPEDIMENTO' },
            { value: 'INVALIDA', viewValue: 'INVALIDA' },
            { value: 'CONCLUIDA', viewValue: 'CONCLUIDA' },
            { value: 'A_FAZER', viewValue: 'A FAZER' },
            { value: null, viewValue: 'NENHUMA' }
        ];
        this.removeTarefa = function (tarefaId) {
            var tarefasId = this.tarefas.map(function (tarefa) {
                return tarefa.id;
            });
            var idx = tarefasId.indexOf(tarefaId);
            if (idx > -1) {
                this.tarefas.splice(idx, 1);
            }
        };
        this.listTarefasByFilters = function (filter, descricao, dataInicial, dataPrevistaFinal, dataConclusao, donoTarefa, criadoPor, situacao, prioridade, pageable) {
            var _this = this;
            __WEBPACK_IMPORTED_MODULE_0_eits_ng2__["a" /* Broker */].of("tarefaService").promise("listTarefasByFilters", filter, descricao, dataInicial, dataPrevistaFinal, dataConclusao, donoTarefa, criadoPor, situacao, prioridade, pageable)
                .then(function (result) {
                _this.tarefas = result.content;
            })
                .catch(function (exception) {
                console.log(exception.message);
            });
        };
        this.filtrarTarefa = function () {
            this.listTarefasByFilters(this.filtro.filter, this.filtro.descricao, this.filtro.dataInicial, this.filtro.dataPrevistaFinal, this.filtro.dataConclusao, this.filtro.donoTarefa, this.filtro.criadoPor, this.filtro.situacao, this.filtro.prioridade, this.filtro.pageable);
        };
        this.listUsuariosByFilters = function (filter, pageable) {
            var _this = this;
            __WEBPACK_IMPORTED_MODULE_0_eits_ng2__["a" /* Broker */].of("tarefaService").promise("listUsuariosByFilters", filter, pageable)
                .then(function (result) {
                _this.usuarios = result.content;
            })
                .catch(function (exception) {
                console.log(exception.message);
            });
        };
    }
    TarefaListComponent.prototype.ngOnInit = function () {
        this.listTarefasByFilters(null, null, null, null, null, null, null, null, null, null);
    };
    TarefaListComponent.prototype.displayAutocompleteUsuarioNome = function (usuario) {
        return usuario ? usuario.nome : "";
    };
    TarefaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'tarefa-list',
            template: __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-list/tarefa-list.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TarefaListComponent);
    return TarefaListComponent;
}());

//# sourceMappingURL=tarefa-list.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/tarefa/app/views/tarefa/tarefa-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TarefaViewComponent = (function () {
    function TarefaViewComponent() {
    }
    TarefaViewComponent.prototype.ngOnInit = function () {
    };
    TarefaViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'home-tarefa-view',
            template: __webpack_require__("../../../../../src/tarefa/app/views/tarefa/tarefa-view.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TarefaViewComponent);
    return TarefaViewComponent;
}());

//# sourceMappingURL=tarefa-view.component.js.map

/***/ }),

/***/ "../../../../../src/tarefa/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__("../../../../../src/tarefa/app/module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* Module */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/tarefa/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
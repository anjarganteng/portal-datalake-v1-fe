"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@angular-devkit/core"),schematics_1=require("@angular-devkit/schematics"),path=require("path"),adjust_index_1=require("../_shared/adjust-index");function service(e){return t=>{const s=t.read("/angular.json");if(!s)throw new schematics_1.SchematicsException("Could not find Angular workspace configuration");const i=s.toString(),r=JSON.parse(i);e.project||(e.project=r.defaultProject);const a=schematics_1.apply(schematics_1.url("./files"),[schematics_1.template(Object.assign({},core_1.strings,e)),schematics_1.move(core_1.normalize(e.path))]);return t.overwrite(path.join(e.path,"index.ts"),adjust_index_1.adjustIndex({indexPath:path.join(e.path,"index.ts"),variableName:e.path.split("/").pop(),importName:core_1.strings.classify(`${e.name}Service`),importPath:`./${core_1.strings.dasherize(e.name)}.service`,isObject:!1})),schematics_1.chain([schematics_1.mergeWith(a)])}}exports.default=service;
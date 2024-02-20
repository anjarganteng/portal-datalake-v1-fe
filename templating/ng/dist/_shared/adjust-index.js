"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const ts_morph_1=require("ts-morph");function _variable(e,t){if(!t.variableName)return console.warn("### WARNING: Unable to update index with exported variable.");const i=e.getVariableDeclaration(t.variableName);if(i)if(t.isObject){const e=i.getInitializerOrThrow(),r=e.getText().match(/\w+/g)||[];r.push(t.importName),e.replaceWithText(`{${r.join(", ")}}`)}else{const e=i.getInitializerOrThrow(),r=e.getText().match(/\w+/g)||[];r.push(t.importName),e.replaceWithText(`[${r.join(", ")}]`)}}exports.adjustIndex=e=>{const t=new ts_morph_1.Project({compilerOptions:{useInMemoryFileSystem:!0},manipulationSettings:{indentationText:ts_morph_1.IndentationText.FourSpaces,newLineKind:ts_morph_1.NewLineKind.LineFeed,quoteKind:ts_morph_1.QuoteKind.Single}}).addSourceFileAtPath(e.indexPath);return t.addImportDeclaration({namedImports:[e.importName],moduleSpecifier:e.importPath}),t.addExportDeclaration({namedExports:[e.importName],moduleSpecifier:e.importPath}).toNamespaceExport(),_variable(t,e),t.getText()};
"use strict";
// Para usarmos o sistema de modulos no typescript, primeiro temos que mudar duas chaves no nosso tsconfig
// primeiramente mudamos a chave "target" de "es5" para "es6" e mudamos a chave "module" de "commonjs" para "es2015"
// dessa forma nós permitimos nossos scripts a usarem o sistema de módulos do node.
exports.__esModule = true;
// caso a gente tenha um html, muda a tag script adicionando o atributo "type = "module"".
// Assim, podemos fazer nossas operações usando o sistema de módulos livremente:
var test_js_1 = require("./test.js");
// note que importamos o arquivo já com a extensão .js, porque no fim tudo vai virar javascript mesmo :b
// Você pode omitir o .js e vai funcionar também. Mas como quero que tudo fique explicito e previsível, eu prefiro manter
var obj = new test_js_1.Test('Denies');
console.log(obj);

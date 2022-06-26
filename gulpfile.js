const {src, dest} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done){

  src("src/scss/app.scss") // Identificar el archivo SASS
    .pipe(sass()) // Compilarlo
    .pipe(dest("build/css")) //Almacenarla en el Disco duro

  done();


}

exports.css = css;
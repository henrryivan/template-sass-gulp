const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

//Función que compila SASS
function css() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'expanded'
        }))
        .pipe( dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }))
        .pipe( dest('./build/css'))
}

function watchArchivos() {
    watch('src/scss/**/*.scss', css); // * = La carpeta actual - ** = Todos los archivos y carpetas con esa extensión
}

exports.minificarcss = minificarcss;

exports.default = series(css, watchArchivos);
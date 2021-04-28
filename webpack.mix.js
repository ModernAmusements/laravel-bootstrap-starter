let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.js([
  "assets/js/app.js",
  "assets/js/formSubmission.js",
  "assets/js/holder.min.js"
    ],"public/js"
);

mix.sass("assets/sass/app.scss", "public/css");

mix.browserSync("https://laravel-mix-kit.test/");


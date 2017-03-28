var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    concat  = require('gulp-concat');

gulp.task('vendor-app', function() {
  return gulp .src([
                     'app/components/angular.min.js',
                      'app/components/angular-route.js',
                      'app/components/angular-cookies.js',
                      'app/app.js',
                      'app/controllers/*.js'])
              .pipe(concat('app.concat.js'))
              .pipe(gulp.dest('app/'));
});

gulp.task('vendor-js', function() {
  return gulp .src([
                    'js/src/*.js'
                  ])
              .pipe(concat('javascript.js'))
              .pipe(gulp.dest('js/'));
});
gulp.task('vendor-css', function() {
  return gulp .src([
                      'node_modules/materialize-css/bin/materialize.css',
                      'node_modules/animate/animate.css',
                      'css/style.css'

                    ])
              .pipe(concat('style.concat.css'))
              .pipe(gulp.dest('css/'));
});

gulp.task('concat', function () {

  gulp.src('app/controllers/*.js')
      .pipe(concat('controllers.concat.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/'));

});

gulp.task('serve', function() {
  connect.server();
});

gulp.task('default', ['vendor-app','vendor-css', 'vendor-js', 'serve']);

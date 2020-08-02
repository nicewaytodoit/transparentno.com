/* global hexo window */

'use strict';

hexo.extend.generator.register('home', function(locals){
  var home = hexo.theme.config.home_page;
  var home_file;
  locals.posts.forEach(function(post){
    if(post.source == "_posts/" + home) {
      home_file = post;
    }
  })
  return {
    path: 'index.html',
    data: home_file,
    layout: ['index']
  }
});

// hexo.extend.helper.register('test_test', function(abc){
//   return window.location.hostname;
// });
/**
* Fontawesome tag
*
* Syntax:
*   {% fontawesome brand icon %}
*/

hexo.extend.tag.register('map', function(args){
    return '<div id="mapid" style="height: 400px"></div>';
  });
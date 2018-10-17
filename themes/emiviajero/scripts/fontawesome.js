/**
* Fontawesome tag
*
* Syntax:
*   {% fontawesome brand icon %}
*/

hexo.extend.tag.register('fontawesome', function(args){
  return args.length != 2 ? "" : `<i class="${args[0]} ${args[1]}"></i>`
});
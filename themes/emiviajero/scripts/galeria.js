var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

/**
* Galeria tag
*
* Syntax:
*   {% galeria path_images* %}
*/

hexo.extend.tag.register('galeria', function(args){

  var photo;
  var html = `<div class="galeria-container" style="overflow-x: scroll; width: 100%; padding: 0 15px;">`;
  html += `<div class="galeria-list" style="white-space: nowrap; list-style: none; text-align: center;">`;
  while(args.length){
    photo = args.shift()
    html += `<a class="fancybox" style="display: inline-block;" href="${photo}">
    <img class="inline-gallery" src="${photo}" style="display: block; padding:2px; max-width: 200px; height: 150px;" />
    </a>`
  }
  html += `</div>`
  html += `</div>`

  return html;
});

$(document).ready(function(){$('#contenitore').fadeIn(200);var segmento=document.location.pathname.split("/");var link='/';var percorso="/";for(var i=0;i<segmento.length;i++){if(segmento[i]!=''){segmento[i]=segmento[i].replace(/%20/g," ");percorso+=segmento[i]+'/';link+='<a href="'+percorso+'">'+segmento[i]+'</a>/';}}
$("h1").html(document.domain);$('#percorso').html(link);$('hr').parent().remove();var columns=$('th');$(columns[0]).addClass('icona');$(columns[1]).addClass('nome');$(columns[columns.length-1]).addClass('dimensione');$(columns[columns.length-2]).addClass('data');$('#refresh a').click(function(){window.location.reload(true);return false;});$('td[align="right"]').addClass('riga');$("tr:odd").css("background-color","#fafafa");$('[alt="[DIR]"]').parent().add('#percorso a, #home a, #su a').add($('[alt="[DIR]"]').parent().parent().next().children('a')).attr("href",function(i,href){return href.indexOf('?')===-1?href+document.location.search:href;});});
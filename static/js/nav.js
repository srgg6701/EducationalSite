var modules={
    1:['1'],
    2:['2'],
    3:['3.h1.1','3.h1.2','3.h2','3.h3','3.h4','3.h5.2','3.h5'],
    4:['4']
};

function setNav(module_number, current){
    var pages=modules[module_number];
    if(!current) current=1;
    var htmlNav='<div class="nav">';
    for(var i= 0, limit=pages.length; i<limit; i++){
        htmlNav+="<a href='module"+pages[i]+".html'";
        if((i+1)==current){
            htmlNav+=" class='active'";
        }
        htmlNav+=">"+(i+1)+"</a>";
    }
    htmlNav+='</div>';
    document.write(htmlNav);
}
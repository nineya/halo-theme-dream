<#if settings.search_snow!true>
   <script>
      if(window.screen.width>560){
         document.write('<script src="${theme_base!}/source/plugins/snow/snow.js" defer><\/script>');
         $(function(){
            $(".ins-search").addClass("snow-container");
         });
      }
   </script>
</#if>
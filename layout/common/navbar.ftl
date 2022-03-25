<#macro navbar>
<nav class="navbar navbar-main${(settings.navbar_show??&&settings.navbar_show!='normal')?string(' navbar-fixed' + (settings.navbar_show??&&settings.navbar_show=='dynamic')?string(' navbar-dynamic',''),'')}">
    <div class="container">
        <div class="navbar-brand is-flex-center">
            <a class="navbar-item navbar-logo" href="${context!}">
                <#if blog_logo?? && blog_logo!=''>
                    <img class="logo-img" src="${blog_logo!}" alt="${blog_title!}" height="28">
                    <img class="logo-img-dark" src="<#if settings.night_logo?? && settings.night_logo!=''>${settings.night_logo!}<#else>${blog_logo!}</#if>" alt="${blog_title!}" height="28">
                <#else>
                    ${blog_title!}
                </#if>
            </a>
        </div>
        <div class="navbar-menu">
            <@menuTag method="list">
                <#if menus?? && menus?size gt 0>
                    <div class="navbar-start">
                        <#list menus?sort_by('priority') as menu>
                            <a class="navbar-item" href="${menu.url}" target="${menu.target!}">${menu.name}</a>
                        </#list>
                    </div>
                </#if>
            </@menuTag>
            <div class="navbar-end">
                <a class="navbar-item night" id="night-nav" title="黑夜模式" href="javascript:;">
                    <i class="fas fa-moon" id="night-icon"></i>
                </a>
                ${settings.links_top!}
                <#if settings.sidebar_toc?? && settings.sidebar_toc != 'none'>
                    <a class="navbar-item is-hidden-tablet catalogue" title="Catalogue" href="javascript:;"><i class="fas fa-list-ul"></i></a>
                </#if>
                <a class="navbar-item search" title="文章搜索" onclick="openSearchPanel()" href="javascript:;">
                    <i class="fas fa-search"></i>
                </a>
            </div>
        </div>
    </div>
</nav>
</#macro>
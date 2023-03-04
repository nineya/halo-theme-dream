<#macro navbar>
<header class="navbar">
    <div class="navbar-above">
        <div class="container<#if settings.sidebar_column?? && settings.sidebar_column!='all'> two-column</#if>">
            <i class="fa fa-bars navbar-slideicon"></i>
            <a class="navbar-item logo-title" href="${context!}">
                <#if blog_logo?? && blog_logo!=''>
                    <img class="logo-img" src="${blog_logo!}" alt="${blog_title!}" height="28">
                    <img class="logo-img-dark" src="${settings.night_logo!blog_logo!}" alt="${blog_title!}" height="28">
                <#else>
                    ${blog_title!}
                </#if>
            </a>
            <nav class="navbar-nav active-animate">
                <@menuTag method="tree">
                    <#list menus?sort_by('priority') as menu>
                        <#if menu.children?? && menu.children?size gt 0>
                            <#if menu.name?default('')?starts_with('#hide') != true>
                                <div class="item-dropdown" trigger="hover" placement="60px">
                                    <div class="item-dropdown-link">
                                        <#if menu.url!='#'>
                                            <a class="item" href="${menu.url!}" target="${menu.target!}" title="${menu.name!}"><#if menu.icon?? && menu.icon!=''><i class="m-icon ${menu.icon}"></i></#if>${menu.name!}</a>
                                        <#else>
                                            <a class="item" style="cursor:default;" href="javascript:" title="${menu.name!}"><#if menu.icon?? && menu.icon!=''><i class="m-icon ${menu.icon}"></i></#if>${menu.name!}</a>
                                        </#if>
                                        <i class="fa fa-angle-down item-dropdown-link-icon" style="color:var(--main)"></i>
                                    </div>
                                    <nav class="item-dropdown-menu">
                                        <#list menu.children?sort_by('priority') as child>
                                            <#if child.children?? && child.children?size gt 0>
                                                <#if child.name?default('')?starts_with('#hide') != true>
                                                    <li class="item-sub-li">
                                                        <a class="item" href="${child.url!}" target="${child.target!}" title="${child.name!}"><#if child.icon?? && child.icon!=''><i class="m-icon ${child.icon}"></i></#if>${child.name!}</a>
                                                        <ol class="item-sub">
                                                            <#list child.children?sort_by('priority') as child1>
                                                                <#if child1.name?default('')?starts_with('#hide') != true>
                                                                    <li>
                                                                        <a class="item" href="${child1.url!}" target="${child1.target!}" title="${child1.name!}"><#if child1.icon?? && child1.icon!=''><i class="m-icon ${child1.icon}"></i></#if>${child1.name!}</a>
                                                                    </li>
                                                                </#if>
                                                            </#list>
                                                        </ol>
                                                    </li>
                                                </#if>
                                            <#else>
                                                <#if child.name?default('')?starts_with('#hide') != true>
                                                    <li>
                                                        <a class="item" href="${child.url!}"
                                                           target="${child.target!}" title="${child.name!}"><#if child.icon?? && child.icon!=''><i class="m-icon ${child.icon}"></i></#if>${child.name!}</a>
                                                    </li>
                                                </#if>
                                            </#if>
                                        </#list>
                                    </nav>
                                </div>
                            </#if>
                        <#else>
                            <#if menu.name?default('')?starts_with('#hide') != true>
                                <a class="item" href="${menu.url!}" target="${menu.target!}" title="${menu.name!}"><#if menu.icon?? && menu.icon!=''><i class="m-icon ${menu.icon}"></i></#if>${menu.name!}</a>
                            </#if>
                        </#if>
                    </#list>
                </@menuTag>
            </nav>
            <form data-pjax class="navbar-search" method="get" action="/search">
                <input maxlength="16" autocomplete="off" placeholder="搜索内容..." name="keyword" value class="input" type="text">
                <button type="submit" class="submit" aria-label="搜索按钮"><i class="fa fa-search"></i></button>
                <span class="icon"></span>
                <@postTag method="latest" top="5">
                    <nav class="result">
                        <#list posts as post>
                            <a href="${post.fullPath!}" title="${post.title!}" class="item">
                                <span class="sort">${post_index+1}</span>
                                <span class="text">${post.title!}</span>
                            </a>
                        </#list>
                    </nav>
                </@postTag>
            </form>
            <i class="fa fa-search navbar-searchicon"></i>
        </div>
    </div>

    <#--  mobile菜单  -->
    <div class="navbar-slideout">
        <div class="navbar-slideout-wrap">
            <div class="navbar-slideout-author">
                <img width="50" height="50" src="${user.avatar!}" class="avatar" alt="${user.nickname!}"/>
                <div class="info">
                    <a class="link" target="_blank" rel="noopener noreferrer nofollow">${user.nickname!}</a>
                    <p class="motto">${user.description!'一句话介绍自己吧！'}</p>
                </div>
            </div>
            <ul class="navbar-slideout-menu">
                <li class="item">
                    <i class="fa fa-pencil-square-o"></i>
                    <@postTag method="count"><span>累计撰写 <strong>${count!"0"}</strong> 篇文章</span></@postTag>
                </li>
                <li class="item">
                    <i class="fa fa-tags"></i>
                    <@tagTag method="count"><span>累计创建 <strong>${count!"0"}</strong> 个标签</span></@tagTag>
                </li>
                <li class="item">
                    <i class="fa fa-commenting-o"></i>
                    <@commentTag method="count"><span>累计收到 <strong>${count!"0"}</strong> 条评论</span></@commentTag>
                </li>
            </ul>
            <ul class="navbar-slideout-menu not-toc">
                <li>
                    <a class="link panel" href="#" rel="nofollow">
                        <span>导航</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                    <ul class="slides panel-body panel-side-menu">
                        <@menuTag method="tree">
                            <#list menus?sort_by('priority') as menu>
                                <#if menu.children?? && menu.children?size gt 0>
                                    <#if menu.name?default('')?starts_with('#hide') != true>
                                        <li>
                                            <div class="link panel">
                                                <a href="${menu.url!}" title="${menu.name!}">${menu.name!}</a>
                                                <i class="fa fa-angle-right"></i>
                                            </div>
                                            <ul class="slides panel-body">
                                                <#if menu.children?? && menu.children?size gt 0>
                                                    <#list menu.children?sort_by('priority') as child>
                                                        <#if child.children?? && child.children?size gt 0>
                                                            <#if child.name?default('')?starts_with('#hide') != true>
                                                                <li>
                                                                    <div class="link panel">
                                                                        <a href="${child.url!}" title="${child.name!}">${child.name!}</a>
                                                                        <i class="fa fa-angle-right"></i>
                                                                    </div>
                                                                    <ul class="slides panel-body">
                                                                        <#list child.children?sort_by('priority') as child1>
                                                                            <#if child1.name?default('')?starts_with('#hide') != true>
                                                                                <li>
                                                                                    <a class="link" href="${child1.url!}" title="${child1.name!}">${child1.name!}</a>
                                                                                </li>
                                                                            </#if>
                                                                        </#list>
                                                                    </ul>
                                                                </li>
                                                            </#if>
                                                        <#else>
                                                            <#if child.name?default('')?starts_with('#hide') != true>
                                                                <li>
                                                                    <a class="link" href="${child.url!}" title="${child.name!}">${child.name!}</a>
                                                                </li>
                                                            </#if>
                                                        </#if>
                                                    </#list>
                                                </#if>
                                            </ul>
                                        </li>
                                    </#if>
                                <#else>
                                    <#if menu.name?default('')?starts_with('#hide') != true>
                                        <li>
                                            <a class="link" href="${menu.url!}" title="${menu.name!}">${menu.name!}</a>
                                        </li>
                                    </#if>
                                </#if>
                            </#list>
                        </@menuTag>
                    </ul>
                </li>
            </ul>
            <#if settings.drawer_toc!true>
                <ul class="navbar-slideout-menu is-toc">
                    <a class="link in" href="#" rel="nofollow"><span>目录</span></a>
                    <div class="toc-content">
                    </div>
                </ul>
            </#if>
        </div>
    </div>

    <#--  mobile搜索  -->
    <div class="navbar-searchout">
        <div class="search-container">
            <div class="navbar-searchout-inner">
                <form data-pjax class="navbar-search-mobile" method="get" action="/search">
                    <input maxlength="16" autocomplete="off" placeholder="请输入关键字..." name="keyword" value class="input" type="text"/>
                    <button type="submit" class="submit">搜索</button>
                </form>
                <@tagTag method="list">
                    <#if tags?size gt 0>
                        <div class="tag-search">
                            <i class="fa fa-bullseye"></i>标签搜索
                        </div>
                        <ul class="cloud">
                            <#assign colors=["#F8D800", "#0396FF", "#EA5455", "#7367F0", "#32CCBC", "#F6416C", "#28C76F", "#9F44D3", "#F55555", "#736EFE", "#E96D71", "#DE4313", "#D939CD", "#4C83FF", "#F072B6", "#C346C2", "#5961F9", "#FD6585", "#465EFB", "#FFC600", "#FA742B", "#5151E5", "#BB4E75", "#FF52E5", "#49C628", "#00EAFF", "#F067B4", "#F067B4", "#ff9a9e", "#00f2fe", "#4facfe", "#f093fb", "#6fa3ef", "#bc99c4", "#46c47c", "#f9bb3c", "#e8583d", "#f68e5f"]>
                            <#assign nextRandom = .now?string["HHmmssSSS"]?number>
                            <#list tags as tag>
                                <li class="item">
                                    <a style="background:${colors[nextRandom % colors?size]}" href="${tag.fullPath!}" title="${tag.name!}">${tag.name!}</a>
                                </li>
                                <#assign nextRandom = nextRandom * 10 % 38>
                            </#list>
                        </ul>
                    </#if>
                </@tagTag>
            </div>
        </div>
    </div>

    <div class="navbar-mask"></div>
</header>
</#macro>
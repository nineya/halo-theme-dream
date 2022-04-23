<#macro article_list posts>
    <#list posts as post>
        <div class="card">
            <#if post.thumbnail?? && post.thumbnail!=''>
                <a href="${post.fullPath!}">
                    <div class="thumbnail" style="background-image: url(${post.thumbnail!})">
                    </div>
                </a>
            </#if>
            <div class="card-content main">
                <h2 class="title">
                    <#if post.topPriority==1><span class="top">置顶</span></#if><a href="${post.fullPath!}">${post.title!}</a>
                </h2>
                <div class="meta">
                    <ul class="breadcrumb">
                        <li><@global.timeline datetime=post.createTime/></li>
                        <li><i class="fa fa-eye"></i>${post.visits?c}</li>
                        <li><i class="fa fa-comments-o"></i>${post.commentCount?c}</li>
                        <li><i class="fa fa-thumbs-o-up"></i>${post.likes?c}</li>
                        <#assign heat= (24+post.visits*0.1+post.likes*2+post.commentCount*3) />
                        <#assign heatColor= '#'+(heat < 37)?string('ffa87e',(heat < 120)?string('fb734a','e0081c')) />
                        <li style="color: ${heatColor}">${heat}℃</li>
                    </ul>
                    <#if post.categories?? && post.categories?size gt 0>
                        <div class="level-item">
                            <#list post.categories as category>
                                <a href="${category.fullPath!}">${category.name!}</a>&nbsp;
                            </#list>
                        </div>
                    </#if>
                </div>
                <hr/>
                <div class="content">${post.summary!}</div>
            </div>
        </div>
    </#list>
</#macro>
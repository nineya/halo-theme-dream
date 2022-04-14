<#macro article_list posts>
    <#include "comment.ftl">
    <#list posts.content as post>
        <div class="card">
            <#if post.thumbnail?? && post.thumbnail!=''>
                <div class="card-image">
                    <a href="${post.fullPath!}">
                        <div class="thumbnail" style="background-image: url(${post.thumbnail!})">
                        </div>
                    </a>
                </div>
            </#if>
            <div class="card-content main">
                <h2 class="title is-size-3 is-size-4-mobile has-text-weight-normal">
                    <#if post.topPriority==1>
                        <span class="level-item">置顶</span>
                    </#if>
                    <a class="title has-link-black-ter" href="${post.fullPath!}">${post.title!}</a>
                </h2>
                <div class="meta">
                    <ul class="items">
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
<#include "template/layout.ftl">
<#include "template/common/article.ftl">
<@layout title="动态 - ${blog_title!}" canonical="${journals_url!}">
    <script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
    <script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/halo-dev/halo-comment@latest/dist/halo-comment.min.js'}"></script>
    <#if (journals.content)?? && journals.content?size gt 0>
        <#list journals.content as journal>
            <div class="card card-content journal">
                <p class="journal-date">
                    <i class="fa fa-paper-plane-o"></i>
                    <em>${journal.createTime?string('yyyy年MM月dd日 HH:mm:ss')}</em>
                </p>
                <div class="journal-content main-content">${journal.content}</div>
                <div class="journal-operation">
                    <span class="journal-operation-item">
                        <a class="like" data-id="${journal.id}" data-likes="${journal.likes!0}"><i
                                    class="fa fa-heart-o"></i></a><em>${(journal.likes != 0)?string(journal.likes?c,'喜欢')}</em>
                    </span>
                    <span class="journal-operation-item">
                        <a class="comment"><i
                                    class="fa fa-commenting-o"></i><em><#if journal.commentCount==0>评论<#else>${journal.commentCount}</#if></em></a>
                    </span>
                </div>
                <div class="journal-comment">
                    <halo-comment id="${journal.id?c}" type="journal"/>
                </div>
            </div>
        </#list>
        <#include "template/common/pagination.ftl">
        <@pagination method="journals" datas=journals display="${settings.page_number!5}" />
    <#else>
        <div class="card widget none">
            <div class="card-content">
                <div class="none-content">
                    <span class="text-muted"><i class="fas fa-inbox fa-7x"></i></span>
                    <span class="text-muted none-text">还没有发布过动态，回<a class="font-weight-bold" href="${blog_url!}">主页</a>看看吧</span>
                </div>
            </div>
        </div>
    </#if>
</@layout>
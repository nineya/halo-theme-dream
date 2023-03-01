<#include "template/layout.ftl">
<@layout title="动态 - ${blog_title!}" canonical="${journals_url!}">
    <#if journals.content?? && journals.content?size gt 0>
        <#list journals.content as journal>
            <div class="card card-content journal">
                <p class="journal-date">
                    <i class="fa fa-paper-plane-o"></i>
                    <em>${journal.createTime?string('yyyy年MM月dd日 HH:mm:ss')}</em>
                </p>
                <div class="journal-content fold">
                    <div data-id="${journal.id?c}" data-target="journals" class="main-content not-toc">${journal.content}</div>
                </div>
                <div class="journal-operation">
                    <span class="journal-operation-item">
                        <a class="like" data-id="${journal.id?c}" data-likes="${(journal.likes!0)?c}"><i
                                    class="fa fa-heart-o"></i><em>${(journal.likes != 0)?string(journal.likes?c,'喜欢')}</em></a>
                    </span>

                    <#if settings.enable_journals_comment!true>
                    <span class="journal-operation-item">
                        <a class="comment"><i
                                    class="fa fa-commenting-o"></i><em><#if journal.commentCount==0>评论<#else>${journal.commentCount}</#if></em></a>
                    </span>
                    </#if>
                    <#if enable_share>
                    <span class="journal-operation-item">
                        <a class="share"><i class="fa fa-share"></i><em>分享</em></a>
                    </span>
                    </#if>
                </div>
                <#if settings.enable_journals_comment!true>
                <div class="journal-comment">
                    <#include "template/main/comment.ftl">
                    <@comment journal.id?c, "journal" />
                </div>
                </#if>
            </div>
        </#list>
        <#include "template/main/pagination.ftl">
        <@pagination method="journals" datas=journals display="${settings.page_number!5}" />
    <#else>
        <div class="card card-empty">
            <i class="fa fa-inbox"></i>
            还没有发表过动态，回<a href="${context!}">主页</a>看看吧
        </div>
    </#if>
</@layout>
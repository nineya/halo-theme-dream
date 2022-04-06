<#macro comment post,type>
    <#if !post.disallowComment!false>
    <div class="card" id="comment-wrapper">
        <div class="card-content">
            <h3 class="title is-5 has-text-weight-normal">评论</h3>
        	<script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
        	<script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/halo-dev/halo-comment@latest/dist/halo-comment.min.js'}"></script>
        	<halo-comment id="${post.id?c}" type="${type}"/>
        </div>
    </div>
    </#if>
</#macro>
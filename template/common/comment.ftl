<#macro comment post,type>
    <#if !post.disallowComment!false>
    <div class="card" id="comment-wrapper">
        <div class="card-content">
            <h3 class="title">评论</h3>
        	<halo-comment id="${post.id?c}" type="${type}"/>
        </div>
    </div>
    </#if>
</#macro>
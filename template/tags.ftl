<div class="card widget">
    <div class="card-content">
        <div class="menu">
            <h3 class="menu-label">
                标签
            </h3>
            <@tagTag method="list">
			<#if tags?? && tags?size gt 0>
				<div class="field is-grouped is-grouped-multiline">
                    <#list tags as tag>
                        <div class="control">
                            <a class="tags has-addons" href="${tag.fullPath!}">
                                <span class="tag">${tag.name}</span>
                                <span class="tag is-grey">${tag.postCount!}</span>
                            </a>
                        </div>
                    </#list>
				</div>
			<#else>
			<div><p>&emsp;&emsp;欢迎来访${blog_title!}，目前还没有任何标签呢。</p></div>
			</#if>
            </@tagTag>
        </div>
    </div>
</div>
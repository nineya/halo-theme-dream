<div class="card widget">
    <div class="card-content">
        <h3 class="menu-label">
            最新文章
        </h3>
        <@postTag method="latest" top="5">
			<#if posts?? && posts?size gt 0>
            <#list posts as post>
                <article class="media">
                    <a href="${context!}/archives/${post.url!}" class="media-left">
                        <p class="image is-64x64">
                            <img class="thumbnail" src="<#if post.thumbnail?? && post.thumbnail!=''>
							${post.thumbnail!}
							<#else>
							${theme_base!}/source/images/thumbnail.svg
							</#if>" alt="${post.title!}">
                        </p>
                    </a>
                    <div class="media-content">
                        <div class="content">
                            <div><time class="has-text-grey is-size-7 is-uppercase" datetime="${post.createTime!}">${post.createTime?string('yyyy-MM-dd')}</time></div>
                            <a href="${post.fullPath!}" class="title has-link-black-ter is-size-6 has-text-weight-normal">${post.title!}</a>
                        </div>
                    </div>
                </article>
            </#list>
			<#else>
			<div><p>&emsp;&emsp;欢迎来访${blog_title!}，最近${user.nickname!}没有更新过文章呢。</p></div>
            </#if>
        </@postTag>
    </div>
</div>
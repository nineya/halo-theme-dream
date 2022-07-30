<footer class="footer">
    <div class="container">
        <div class="level">
            <div class="footer-info">
                <a class="logo-title" href="${context!}">
                    <#if blog_logo?? && blog_logo!=''>
                        <img src="${blog_logo!}" alt="${blog_title!}" height="28">
                        <img class="logo-img-dark"
                             src="<#if settings.night_logo?? && settings.night_logo!=''>${settings.night_logo!}<#else>${blog_logo!}</#if>"
                             alt="${blog_title!}" height="28">
                    <#else>
                        ${blog_title!}
                    </#if>
                </a>
                <p>&copy; ${.now?string('yyyy')} ${user.nickname!} Powered by <a class="powered"
                                                                                 href="https://halo.run/"
                                                                                 target="_blank">Halo</a> & <a
                            class="powered" href="https://github.com/nineya/halo-theme-dream" target="_blank">Dream</a>
                </p>
                <#if settings.record_number?? && settings.record_number!=''>
                    <p><a href="http://beian.miit.gov.cn/publish/query/indexFirst.action"
                          target="_blank" rel="noopener noreferrer nofollow">${settings.record_number!}</a></p>
                </#if>
                <#if settings.record_number_ps?? && settings.record_number_ps!=''>
                    <p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${settings.record_number_ps!}"
                          target="_blank" rel="noopener noreferrer nofollow">公安备案：${settings.record_number_ps!}</a></p>
                </#if>
                <#if settings.website_time?? && settings.website_time!=''>
                    <p id="websiteDate"></p>
                </#if>
                <#if settings.enable_busuanzi!true>
                    <p>
                        <span id="busuanzi_container_site_uv">
                            <i class="fa fa-user" aria-hidden="true"></i>
						    <span class="stand" id="busuanzi_value_site_uv">0</span>个访客
					    </span>
                        <span id="busuanzi_container_site_pv">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
						    <span class="stand" id="busuanzi_value_site_pv">0</span>次访问
					    </span>
                    </p>
                </#if>
                <#if settings.cloud_by_logo?? && settings.cloud_by_logo!=''>
                    <p>本站由<a class="cloud-driven" target="_blank"
                             rel="noopener noreferrer nofollow"${(settings.cloud_by_url?? && settings.cloud_by_url!='')?then(' href="${settings.cloud_by_url}"', '')}><img
                                    alt="云服务商" src="${settings.cloud_by_logo}"/></a>提供云服务</p>
                </#if>
            </div>
            <div class="footer-supplement">
                ${settings.links_footer!}
                <@global.footer_info />
            </div>
        </div>
    </div>
</footer>
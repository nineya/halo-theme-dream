<footer class="footer">
    <div class="container">
        <ul class="footer-container">
            <li>
                <a class="logo-title" href="${context!}">
                    <#if blog_logo?? && blog_logo!=''>
                        <img class="logo-img" src="${blog_logo!}" alt="${blog_title!}" height="28">
                        <img class="logo-img-dark"
                             src="<#if settings.night_logo?? && settings.night_logo!=''>${settings.night_logo!}<#else>${blog_logo!}</#if>"
                             alt="${blog_title!}" height="28">
                    <#else>
                        ${blog_title!}
                    </#if>
                </a>
            </li>
            <li>
                <p class="icon-spot">
                    <span>&copy; ${.now?string('yyyy')} ${user.nickname!}</span><#if settings.record_number?? && settings.record_number!=''><a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" target="_blank" rel="noopener noreferrer nofollow">${settings.record_number!
                    }</a></#if><span class="footer-truncation">Powered by <a class="powered" href="https://halo.run/" target="_blank">Halo</a> & <a class="powered" href="https://github.com/nineya/halo-theme-dream" target="_blank">Dream</a></span></p>
                <#if (settings.website_time?? && settings.website_time!='') || settings.enable_busuanzi!true>
                    <p class="icon-spot">
                    <#if settings.website_time?? && settings.website_time!=''>
                        <span id="websiteDate">建站<span class="stand">00</span>天<span class="stand">0</span>时<span class="stand">0</span>分<span class="stand">0</span>秒</span>
                    </#if>
                    <#if settings.enable_busuanzi!true>
                        <span class="icon-spot footer-truncation">
                            <span id="busuanzi_container_site_uv" style="display: none">
                            <i class="fa fa-user" aria-hidden="true"></i>
					        <span class="stand" id="busuanzi_value_site_uv">0</span>访客
					        </span>
                            <span id="busuanzi_container_site_pv" style="display: none">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
					        <span class="stand" id="busuanzi_value_site_pv">0</span>访问
                        </span>
					</span>
                    </#if>
                    </p>
                </#if>
                <#if settings.record_number_ps?? && settings.record_number_ps!=''>
                    <p><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${settings.record_number_ps?replace('[^\\d]','','ri')}"
                          target="_blank" rel="noopener noreferrer nofollow"><img src="https://www.beian.gov.cn/portal/download" alt="公网安备" style="vertical-align: text-top; width: 1.2em; margin-right: 4px;"/>${settings.record_number_ps!}</a></p>
                </#if>
                <#if settings.cloud_by_logo?? && settings.cloud_by_logo!=''>
                    <p>本站由<a class="cloud-driven" target="_blank"
                             rel="noopener noreferrer nofollow"${(settings.cloud_by_url?? && settings.cloud_by_url!='')?then(' href="${settings.cloud_by_url}"', '')}><img
                                    alt="云服务商" src="${settings.cloud_by_logo}"/></a>提供云服务</p>
                </#if>
            </li>
            <li>
                <@global.footer_info />
            </li>
        </ul>
    </div>
</footer>
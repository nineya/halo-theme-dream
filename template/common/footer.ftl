<footer class="footer">
    <div class="container">
        <div class="level">
            <div class="level-start has-text-centered-mobile">
                <a class="footer-logo is-block has-mb-6" href="${context!}">
                    <#if blog_logo?? && blog_logo!=''>
                        <img class="logo-img" src="${blog_logo!}" alt="${blog_title!}" height="28">
                        <img class="logo-img-dark" src="<#if settings.night_logo?? && settings.night_logo!=''>${settings.night_logo!}<#else>${blog_logo!}</#if>" alt="${blog_title!}" height="28">
                    <#else>
                        ${blog_title!}
                    </#if>
                </a>
                <p class="is-size-7">
                    &copy; ${.now?string('yyyy')} ${user.nickname!}&nbsp;
                    Powered by <a href="https://halo.run/" target="_blank">Halo</a> & <a
                            href="https://github.com/nineya/halo-theme-dream" target="_blank">Dream</a>
                    <#if settings.record_number?? && settings.record_number!=''>
                    <br />
					<a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" target="_blank">${settings.record_number!}</a>
					</#if>
                    <#if settings.record_number_ps?? && settings.record_number_ps!=''>
                    <br />
					<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${settings.record_number_ps!}" target="_blank">公安备案：${settings.record_number_ps!}</a>
					</#if>
                    <br />
                    <#if settings.website_time?? && settings.website_time!=''>
                        <span id="websiteDay">载入天数...</span><span id="websiteTime">载入时分秒...</span>
                        <script>
                        $(document).ready(function(){
                            websiteTime("${settings.website_time!}", "websiteDay", "websiteTime")
                        });
                        </script>
                    </#if>
					<#if settings.busuanzi!true>
					<span id="busuanzi_container_site_uv">
						<span id="busuanzi_value_site_uv">0</span>个访客
					</span>
					<span id="busuanzi_container_site_pv">
						<span id="busuanzi_value_site_pv">0</span>次访问
					</span>
                    <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
					</#if>
                    <br />
                </p>
                <@global.footer />
            </div>
            <div class="level-end">
                <div class="field has-addons is-flex-center-mobile has-mt-5-mobile is-flex-wrap is-flex-middle">
                    ${settings.links_footer!}
                </div>
            </div>
        </div>
    </div>
</footer>
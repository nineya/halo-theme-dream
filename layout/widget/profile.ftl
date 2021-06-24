<div class="card widget">
    <div class="card-content">
        <nav class="level">
            <div class="level-item has-text-centered" style="flex-shrink: 1">
                <div>
                    <figure class="image is-128x128 has-mb-6">
                        <img id="head_img" class="${((settings.profile_avatar_type!'avatar_square')=='avatar_rounded')?string('is-rounded','')}" src="${user.avatar!}" alt="${user.nickname!}">
                    </figure>
                    <p class="is-size-4 is-block">
                        ${user.nickname!}
                    </p>
                    <p class="is-size-6 is-block" id="binft"></p>
					<script>
					//彩字轮播
					  function binft(r,list) {
					  function t() {
						return b[Math.floor(Math.random() * b.length)]
					  }  
					  function e() {
						return String.fromCharCode(94 * Math.random() + 33)
					  }
					  function n(r) {
						for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
						  var l = document.createElement("span");
						  l.textContent = e(), l.style.color = t(), n.appendChild(l)
						}
						return n
					  }
					  function i() {
						var t = o[c.skillI];
						c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
					  }
					  var l = "",
					  o = list.map(function (r) {
					  return r + ""
					  }),
					  a = 2,
					  g = 1,
					  s = 5,
					  d = 75,
					  b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
					  c = {
						text: "",
						prefixP: -s,
						skillI: 0,
						skillP: 0,
						direction: "forward",
						delay: a,
						step: g
					  };
					  i()
					  };
					  binft(document.getElementById('binft'), ['${user.description!}'<#if settings.color_character?? && settings.color_character!=''>,${settings.color_character!}</#if>]);
					</script>
                    <#if settings.profile_location?? && settings.profile_location!=''>
                    <p class="is-size-6 is-flex is-flex-center has-text-grey">
                        <i class="fas fa-map-marker-alt has-mr-7"></i>
                        <span>${settings.profile_location!}</span>
                    </p>
                    </#if>
                </div>
            </div>
        </nav>
        <nav class="level is-mobile">
            <div class="level-item has-text-centered is-marginless">
                <div>
                    <p class="heading">
                        文章
                    </p>
                    <p class="title has-text-weight-normal">
                        <@postTag method="count">${count}</@postTag>
                    </p>
                </div>
            </div>
            <div class="level-item has-text-centered is-marginless">
                <div>
                    <p class="heading">
                        分类
                    </p>
                    <p class="title has-text-weight-normal">
                        <@categoryTag method="count">${count}</@categoryTag>
                    </p>
                </div>
            </div>
            <div class="level-item has-text-centered is-marginless">
                <div>
                    <p class="heading">
                        标签
                    </p>
                    <p class="title has-text-weight-normal">
                        <@tagTag method="count">${count}</@tagTag>
                    </p>
                </div>
            </div>
        </nav>
        <div class="level">
            <a class="level-item button is-link is-rounded" href="${settings.profile_follow_url!'${context!}'}" target="_blank">关注我</a>
        </div>
        <div class="level is-mobile">
            <#if settings.social_github?? && settings.social_github!=''>
                <a class="level-item button is-white is-marginless" target="_blank" title="Github主页" href="https://github.com/${settings.social_github}">
                    <i class="fab fa-github"></i>
                </a>
            </#if>
            <#if settings.social_qq?? && settings.social_qq!=''>
                <a class="level-item button is-white is-marginless" target="_blank" title="QQ聊天" href="tencent://message/?uin=${settings.social_qq}&Site=&Menu=yes">
                    <i class="fab fa-qq"></i>
                </a>
            </#if>
            <#if settings.social_weibo?? && settings.social_weibo!=''>
                <a class="level-item button is-white is-marginless" target="_blank" title="Weibo" href="https://weibo.com/${settings.social_weibo}">
                    <i class="fab fa-weibo"></i>
                </a>
            </#if>
            <#if settings.social_twitter?? && settings.social_twitter!=''>
                <a class="level-item button is-white is-marginless" target="_blank" title="Twitter" href="https://twitter.com/${settings.social_twitter}">
                    <i class="fab fa-twitter"></i>
                </a>
            </#if>
            <#if settings.social_facebook?? && settings.social_facebook!=''>
                <a class="level-item button is-white is-marginless" target="_blank" title="Facebook" href="https://www.facebook.com/${settings.social_facebook}">
                    <i class="fab fa-facebook"></i>
                </a>
            </#if>
            <#if settings.social_email?? && settings.social_email!=''>
                <a class="level-item button is-white is-marginless" target="_blank" title="给我发邮件" href="mailto:${settings.social_email}">
                    <i class="fas fa-envelope"></i>
                </a>
            </#if>
            <#if settings.social_telegram?? && settings.social_telegram!=''>
                <a class="level-item button is-white is-marginless" target="_blank" title="Telegram" href="https://t.me/${settings.social_telegram}">
                    <i class="fab fa-telegram"></i>
                </a>
            </#if>
            <#if settings.social_csdn?? && settings.social_csdn!=''>
                <a class="level-item button is-white is-marginless" target="_blank" title="CSDN主页" href="${settings.social_csdn}">
                    <i class="fa fa-copyright"></i>
                </a>
            </#if>
            <a class="level-item button is-white is-marginless" target="_blank" title="RSS订阅" href="${rss_url!}">
                <i class="fas fa-rss"></i>
            </a>
        </div>
    </div>
</div>
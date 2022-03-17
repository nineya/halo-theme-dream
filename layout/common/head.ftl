    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title>${title!}<#if settings.small_title?? && settings.small_title!=''>|${settings.small_title!}</#if></title>

    <meta name="keywords" content="${meta_keywords!}"/>
    <meta name="description" content="${meta_description!}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title!}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:site_name" content="${title!}">
    <meta property="og:description" content="${meta_description!}">
    <meta property="og:locale" content="zh">
    <meta property="og:image" content="${user.avatar!}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${title!}">
    <meta name="twitter:description" content="${meta_description!}">
    <meta name="twitter:image" content="${user.avatar!}">

    <link rel="canonical" href="${canonical!}" />

    <link rel="alternative" href="${atom_url!}" title="${blog_title!}" type="application/atom+xml">

    <@global.head />

    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/bulma@0.7.5/css/bulma.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.4.1/css/all.min.css">
    <link rel="stylesheet" href="//fonts.loli.net/css?family=Ubuntu:400,600|Source+Code+Pro">

    <style>
        body>.footer, body>.navbar, body>.section {
            opacity: 0
        }
        body:before {
            background: url("${settings.background_pc!}") center 0 no-repeat;
        }
        @media screen and (max-width: 768px) {
            body:before {
                background-image: url("${settings.background_mobile!}");
            }
        }
        @media screen and (min-width: 769px) {
            .column-left.is-sticky,
            .column-main.is-sticky,
            .column-right-shadow.is-sticky,
            .column-right.is-sticky {
                top: ${(settings.navbar_top??&&settings.navbar_top)?string('70','10')}px;
            }
        }
    </style>
	
    <#if is_post?? || is_sheet?? || is_photos?? >
        <link rel="stylesheet" href="${theme_base!}/source/plugins/lightGallery/css/lightgallery.css">
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/justifiedGallery@3.7.0/dist/css/justifiedGallery.min.css">
    </#if>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/outdatedbrowser@1.1.5/outdatedbrowser/outdatedbrowser.min.css">

    <script src="//cdn.jsdelivr.net/npm/pace-js@1.0.2/pace.min.js"></script>
    <link rel="stylesheet" href="${theme_base!}/source/css/progressbar.css">

    <link rel="stylesheet" href="${theme_base!}/source/css/style.css">
    <link rel="stylesheet" href="${theme_base!}/source/css/back-to-top.css">
    <link rel="stylesheet" href="${theme_base!}/source/css/search.css">
	<script src="//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
    <#if post??>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/${settings.code_pretty!'atom-one-light'}.min.css">
        <link rel="stylesheet" type="text/css" href="${theme_base!}/source/css/post.css" />
    </#if>
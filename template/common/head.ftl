<title>${title!}<#if settings.small_title?? && settings.small_title!=''>|${settings.small_title!}</#if></title>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<meta name="keywords" content="${meta_keywords!}"/>
<meta name="description" content="${meta_description!}">
<meta name="author" content="${user.nickname!}">
<meta name="site" content="${blog_url!}">
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
<link rel="canonical" href="${canonical!}"/>
<link rel="alternative" href="${atom_url!}" title="${blog_title!}" type="application/atom+xml">

<@global.head />

<link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/theme.min.css">
<link rel="preload stylesheet" as="style" href="//cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/style.min.css">

<#if post?? || is_journals?? || is_error??>
    <link data-pjax rel="preload stylesheet" as="style"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/${settings.code_pretty!'atom-one-light'}.min.css"/>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/post.min.css"/>
</#if>

<#if is_links??>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/links.min.css"/>
<#elseif is_archives??>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/archives.min.css"/>
<#elseif is_journals??>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/journals.min.css">
<#elseif is_tags??>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/tags.min.css"/>
<#elseif is_photos??>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/photos.min.css">
</#if>

<#if is_post?? || is_sheet?? || is_photos?? || is_journals??>
    <link data-pjax rel="stylesheet" href="//cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.css">
</#if>
<link rel="stylesheet" href="${theme_base!}/source/lib/qmsg/qmsg.min.css">

<#include "config.ftl">

<script src="//cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>

<#if settings.external_css?? && settings.external_css!=''>
    <link rel="stylesheet" href="${settings.external_css!}">
</#if>
<#if settings.inline_css?? && settings.inline_css!=''>
    <style type="text/css">${settings.inline_css!}</style>
</#if>
${settings.external_js_head!}
<#if settings.inline_js_head?? && settings.inline_js_head!=''>
    <script type="text/javascript">
        ${settings.inline_js_head!}
    </script>
</#if>
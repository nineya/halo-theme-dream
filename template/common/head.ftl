<title>${title!}<#if settings.small_title?? && settings.small_title!=''>|${settings.small_title!}</#if></title>
<#if settings.enable_sw?? && settings.enable_sw != "false">
    <script src="${(settings.enable_sw == "uninstall")?then('${theme_base!}/source/js/sw.min.js?mew=1.0.5','/sw.min.js?mew=1.0.5${settings.enable_sw!}')}"></script>
</#if>
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

<link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/theme.min.css?mew=${theme_version!}">
<link rel="preload stylesheet" as="style" href="${theme_base!}/source/lib/font-awesome@4.7.0/css/font-awesome.min.css">
<link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/style.min.css?mew=${theme_version!}">

<#if is_tags??>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/tags.min.css?mew=${theme_version!}"/>
<#elseif is_photos??>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/photos.min.css?mew=${theme_version!}">
</#if>

<#if post?? || is_journals?? || is_error??>
    <link data-pjax rel="preload stylesheet" as="style"
          href="${theme_base!}/source/lib/highlightjs@11.5.1/styles/${settings.code_pretty!'atom-one-light'}.min.css"/>
    <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/css/post.min.css?mew=${theme_version!}"/>
    <#assign enable_katex = (metas?? && metas.enable_katex?? && metas.enable_katex?trim!='')?then(metas.enable_katex?trim, (settings.enable_katex!false)?c)>
    <#if enable_katex=='true'>
        <link data-pjax rel="preload stylesheet" as="style" href="${theme_base!}/source/lib/katex@0.12.0/katex.min.css"/>
    </#if>
</#if>

<link rel="stylesheet" href="${theme_base!}/source/css/mew-custom.min.css?mew=${theme_version!}">
<#if is_post?? || is_sheet?? || is_photos?? || is_journals??>
    <link data-pjax rel="stylesheet" href="${theme_base!}/source/lib/fancybox@5.3.7/jquery.fancybox.min.css">
</#if>
<link rel="stylesheet" href="${theme_base!}/source/lib/qmsg/qmsg.min.css">

<#if settings.cursor_style?? && settings.cursor_style!='none'>
    <link rel="stylesheet" href="${theme_base!}/source/css/cursor/${settings.cursor_style}.min.css?mew=${theme_version!}">
</#if>

<#include "config.ftl">

<script src="${theme_base!}/source/lib/jquery@3.5.1/jquery.min.js"></script>

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
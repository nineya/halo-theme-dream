<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
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

<link rel="canonical" href="${canonical!}"/>

<link rel="alternative" href="${atom_url!}" title="${blog_title!}" type="application/atom+xml">

<@global.head />

<link rel="stylesheet" href="${theme_base!}/source/css/theme.min.css">
<link rel="stylesheet" href="//cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="${theme_base!}/source/css/style.min.css">
<script src="//cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
<link rel="stylesheet" type="text/css"
      href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.2.0/build/styles/${settings.code_pretty!'atom-one-light'}.min.css"/>
<link rel="stylesheet" type="text/css" href="${theme_base!}/source/css/post.min.css"/>
<link rel="stylesheet" type="text/css" href="${theme_base!}/source/css/links.min.css"/>
<link href="https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.min.js"></script>
<#include "../config.ftl">

<style>
    body:before {
        background: url("${settings.background_pc!}") center 0 no-repeat;
        content: '';
        position: fixed;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
        transition: opacity 1s;
    }
    @media screen and (max-width: 768px) {
        body:before {
            background-image: url("${settings.background_mobile!}");
        }
    }
</style>
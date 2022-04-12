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
<#include "../config.ftl">
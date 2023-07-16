<#include "template/layout.ftl">
<#include "template/main/article.ftl">
<@layout title="私密内容访问 - ${blog_title!}" canonical="${blog_url!}">
    <style>
        .post-password {
            margin: 40px auto 64px auto;
            padding: 20px;
            max-width: 360px;
        }

        .post-password .title {
            text-align: center;
        }

        .password-input {
            position: relative;
            margin-top: 32px;
        }

        .password-input input {
            box-sizing: border-box;
            width: 100%;
            color: var(--main);
            outline: none;
            font-size: inherit;
            font-family: inherit;
            background-color: var(--bg-g);
            padding: 0.5em 1em;
            border: 1px solid transparent;
            transition: background-color 0.3s ease-in-out;
        }

        .password-input span {
            position: absolute;
            background-color: var(--theme);
            transition: transform 0.1s ease;
        }

        .password-input .bottom,
        .password-input .top {
            height: 1px;
            left: 0;
            right: 0;
            transform: scaleX(0);
        }

        .password-input .left,
        .password-input .right {
            width: 1px;
            top: 0;
            bottom: 0;
            transform: scaleY(0);
        }

        .password-input .bottom {
            bottom: 0;
            transform-origin: bottom right;
        }

        .password-input input:focus ~ .bottom {
            transform-origin: bottom left;
            transform: scaleX(1);
        }

        .password-input .right {
            right: 0;
            transform-origin: top right;
            transition-delay: 0.05s;
        }

        .password-input input:focus ~ .right {
            transform-origin: bottom right;
            transform: scaleY(1);
        }

        .password-input .top {
            top: 0;
            transform-origin: top left;
            transition-delay: 0.15s;
        }

        .password-input input:focus ~ .top {
            transform-origin: top right;
            transform: scaleX(1);
        }

        .password-input .left {
            left: 0;
            transform-origin: bottom left;
            transition-delay: 0.25s;
        }

        .password-input input:focus ~ .left {
            transform-origin: top left;
            transform: scaleY(1);
        }

        .post-password button {
            width: 100%;
            position: relative;
            font-size: inherit;
            font-family: inherit;
            color: white;
            cursor: pointer;
            padding: 0.5em 1em;
            margin-top: 24px;
            outline: none;
            border: 1px solid transparent;
            background-color: var(--theme);
        }

        .post-password button::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 4px solid var(--theme);
            transform-origin: center;
            transform: scale(1);
        }

        .post-password button:hover::before {
            transition: all 0.75s ease-in-out;
            transform-origin: center;
            transform: scale(1.75);
            opacity: 0;
        }
    </style>
    <div class="card">
        <form class="post-password" method="post" action="${blog_url!}/content/${type!}/${slug!}/authentication">
            <h2 class="title">私密内容访问</h2>
            <div class="password-input">
                <input type="password" name="password" placeholder="请输入访问密码">
                <span class="bottom"></span>
                <span class="right"></span>
                <span class="top"></span>
                <span class="left"></span>
            </div>
            <button type="submit">验证</button>
            <div style="margin-top: 8px;color: red; text-align: center">${errorMsg!}</div>
        </form>
    </div>
</@layout>
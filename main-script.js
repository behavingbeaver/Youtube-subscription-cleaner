// ==UserScript==
// @name         Shorts and Featured
// @namespace    http://tampermonkey.net/
// @version      2026-01-07
// @description  Remove shorts and featured rows from youtube subscription page
// @author       You
// @match        https://www.youtube.com/feed/subscriptions
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function() {
    'use strict';
        waitForKeyElements("#contents", function() {
            setTimeout(function() {
                for (let x = 0; x < document.getElementsByClassName("style-scope ytd-rich-grid-renderer").length; x++) {if (document.getElementsByClassName("style-scope ytd-rich-grid-renderer")[x].tagName == "YTD-RICH-SECTION-RENDERER") {document.getElementsByClassName("style-scope ytd-rich-grid-renderer")[x].innerText = ""}}
            }, 1000)
        }, true);
})();

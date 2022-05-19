// ==UserScript==
// @name         NiFi Theme Changer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  NiFi theme changer using dark reader API
// @author       You
// @match        http://localhost:8080/nifi/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM.addStyle
// @require      https://cdn.jsdelivr.net/npm/darkreader@4.9.46/darkreader.js
// @run-at document-start
// ==/UserScript==

(async function() {
    'use strict';
    DarkReader.enable({
        brightness: 100,
        contrast: 90,
        sepia: 10
    });
    const CSS = await DarkReader.exportGeneratedCSS();

    DarkReader.disable();
    GM.addStyle(CSS);
    var css = "";
    css += [
        "#splash {",
        "    background: rgb(37, 37, 38);",
        "}",
        "",
        "md-progress-circular.md-default-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-warn .md-inner .md-left .md-half-circle {",
        "    border-left-color: rgb(122, 193, 255);",
        "}",
        "",
        "md-progress-circular.md-default-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-default-theme.md-warn .md-inner .md-right .md-half-circle, md-progress-circular.md-warn .md-inner .md-right .md-half-circle{",
        "    border-top-color: rgb(122, 193, 255);",
        "}",
        "",
        "md-progress-circular.md-default-theme.md-warn .md-inner .md-right .md-half-circle, md-progress-circular.md-warn .md-inner .md-right .md-half-circle {",
        "    border-right-color: rgb(122, 193, 255);",
        "}",
        "",
        "md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar).md-accent,",
        "md-toolbar.md-hue-1:not(.md-menu-toolbar).md-accent {",
        "    background-color: rgb(45,51,59);",
        "    color: rgba(241, 241, 241, .87);",
        "}",
        "",
        ".context-menu {",
        "    background-color: rgba(45,51,59,.7);",
        "    border: 1px dashed #000;",
        "    box-shadow: 0 3px 6px rgba(0,0,0,0.3);",
        "    color: rgb(122, 193, 255);",
        "}",
        "",
        "div.context-menu-item-text {",
        "    color: rgb(241, 241, 241);",
        "}",
        "#global-menu-button {",
        "    background-color: rgb(45,51,59);",
        "}",
        "#global-menu-content {",
        "    background-color: rgba(27, 29, 30, 0.97);",
        "    border-color: rgb(128, 119, 105);",
        "    box-shadow: rgb(0 0 0 / 30%) 0px 3px 6px;",
        "}",
        "#global-menu-content a {",
        "    color: #3391ff;",
        "}",
        "#search-button,",
        "#bulletin-button{",
        "    border: 1px dashed #000;",
        "    background-color: rgb(122, 193, 255) !important;",
        "}",
        "#header .icon, #header .fa,",
        ".graph-control-header-icon.fa,",
        "div.graph-control div.graph-control-expansion{",
        "    color: rgb(122, 193, 255);",
        "}",
        "div.graph-control {",
        "    box-shadow: 0 1px 6px rgba(0,0,0,0.25);",
        "    background-color: rgba(37, 37, 38, 0.7);",
        "    border-top: 1px dashed #000;",
        "    border-right: 1px dashed #000;",
        "    border-bottom: 1px dashed #000;",
        "}",
        "",
        "div.graph-control canvas{",
        "    background-color: rgba(37, 37, 38, 0.7);",
        "}",
        "",
        "div.graph-control button {",
        "    line-height: 28px;",
        "    border: none;",
        "    background: none;",
        "    color: rgb(122, 193, 255);",
        "}",
        "",
        "div.graph-control button:disabled {",
        "    color: #ccdadb;",
        "    cursor: not-allowed;",
        "    border: none;",
        "}",
        "#breadcrumbs {",
        "    background-color: rgba(62, 62, 66, 0.9);",
        "}",
        "#data-flow-title-container {",
        "    color: rgba(241, 241, 241, .87);",
        "}",
        "#breadcrumbs-left-border,",
        "#breadcrumbs-right-border {",
        "    background: none;",
        "}",
        "#operation-context-id {",
        "    color: rgb(241, 241, 241)",
        "}",
        "#flow-status .fa span,",
        "span.link,",
        "stats-label,",
        "#operation-context-name,",
        "#operation-context-type",
        "{",
        "    color: rgb(241, 241, 241);",
        "}",
        "text.processor-name,",
        "text.stats-label,",
        "text.process-group-name,",
        "text.process-group-contents-count",
        "{",
        "    fill: rgb(241, 241, 241);",
        "}",
        "text.stats-value {",
        "    fill: rgb(0, 122, 204);",
        "}",
        "",
        "#flow-status {",
        "    background-color: rgb(45, 45, 48);",
        "    border-bottom: 1px solid #aabbc3;",
        "}",
        "#canvas-container {",
        "    background-color: #333333;",
        "    background-image: linear-gradient(to right,rgba(122, 193, 255,.3) 1px,transparent 1px),linear-gradient(to bottom,rgba(122, 193, 255,.3) 1px,transparent 1px);",
        "}",
        "g.connection path.connection-path {",
        "    stroke: #ffffff;",
        "}",
        "g.component > rect.body {",
        "    fill: rgb(37, 37, 38);",
        "}",
        "rect.processor-icon-container,",
        "g.connection rect.body,",
        "g.connection-name-container > rect.connection-label-background",
        "{",
        "    fill: rgb(37, 37, 38);",
        "}",
        "g.process-group > rect:nth-child(3) {",
        "    fill: rgb(0, 122, 204);",
        "}",
        "g.processor-canvas-details > rect:nth-child(4),",
        "g.processor-canvas-details > rect:nth-child(8),",
        "g.process-group-details > rect:nth-child(1),",
        "g.process-group-details > rect:nth-child(14),",
        "g.process-group-details > rect:nth-child(2),",
        "g.process-group-details > rect:nth-child(27),",
        "g.process-group-details > rect:nth-child(31),",
        "g.process-group-details > rect:nth-child(18) {",
        "    fill: rgb(37, 37, 38);",
        "}",
        "g.processor-canvas-details > rect:nth-child(6),",
        "g.processor-canvas-details > rect:nth-child(10),",
        "g.process-group-details > rect:nth-child(16),",
        "g.process-group-details > rect:nth-child(25),",
        "g.process-group-details > rect:nth-child(29),",
        "g.process-group-details > rect:nth-child(20),",
        "g.queued-container > rect.connection-label-background{",
        "	fill: rgb(62, 62, 66);",
        "}"
    ].join("\n");
    GM.addStyle(css);
})();


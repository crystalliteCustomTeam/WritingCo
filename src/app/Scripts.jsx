"use client";
import { useEffect } from "react";

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // ✅ Google Tag Manager
            const gtmScript = document.createElement("script");
            gtmScript.async = true;
            gtmScript.src =
                "https://www.googletagmanager.com/gtm.js?id=GTM-K9S7GGNQ";
            document.head.appendChild(gtmScript);

            // ✅ GTM noscript
            const noscriptDiv = document.createElement("noscript");
            noscriptDiv.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9S7GGNQ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
            document.body.insertBefore(noscriptDiv, document.body.firstChild);

            // ✅ Google Analytics
            const analyticsScript = document.createElement("script");
            analyticsScript.src =
                "https://www.googletagmanager.com/gtag/js?id=G-EK1JCS1WF5";
            analyticsScript.async = true;
            analyticsScript.defer = true;
            document.head.appendChild(analyticsScript);

            window.gtag =
                window.gtag ||
                function () {
                    (window.dataLayer = window.dataLayer || []).push(arguments);
                };

            analyticsScript.onload = () => {
                gtag("js", new Date());
                gtag("config", "G-EK1JCS1WF5");
            };

            // ✅ LiveChat
            window.__lc = window.__lc || {};
            window.__lc.license = 19288255;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";

            (function (n, t, c) {
                function i(n) {
                    return e._h ? e._h.apply(null, n) : e._q.push(n);
                }
                var e = {
                    _q: [],
                    _h: null,
                    _v: "2.0",
                    on: function () {
                        i(["on", c.call(arguments)]);
                    },
                    once: function () {
                        i(["once", c.call(arguments)]);
                    },
                    off: function () {
                        i(["off", c.call(arguments)]);
                    },
                    get: function () {
                        if (!e._h)
                            throw new Error(
                                "[LiveChatWidget] You can't use getters before load."
                            );
                        return i(["get", c.call(arguments)]);
                    },
                    call: function () {
                        i(["call", c.call(arguments)]);
                    },
                    init: function () {
                        var n = t.createElement("script");
                        n.async = !0;
                        n.type = "text/javascript";
                        n.src = "https://cdn.livechatinc.com/tracking.js";
                        t.head.appendChild(n);
                    },
                };
                !n.__lc.asyncInit && e.init(),
                    (n.LiveChatWidget = n.LiveChatWidget || e);
            })(window, document, [].slice);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default Scripts;

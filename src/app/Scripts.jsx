"use client";
import { useEffect } from "react";

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            /* ----------------------------
             ✅ Google Tag Manager
            ----------------------------- */
            const gtmScript = document.createElement("script");
            gtmScript.async = true;
            gtmScript.src =
                "https://www.googletagmanager.com/gtm.js?id=GTM-K9S7GGNQ";
            document.head.appendChild(gtmScript);

            // GTM noscript
            const noscriptDiv = document.createElement("noscript");
            noscriptDiv.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9S7GGNQ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
            document.body.insertBefore(noscriptDiv, document.body.firstChild);

            /* ----------------------------
             ✅ Google Analytics (GA4)
            ----------------------------- */
            const gaScript = document.createElement("script");
            gaScript.async = true;
            gaScript.src =
                "https://www.googletagmanager.com/gtag/js?id=G-EK1JCS1WF5";
            document.head.appendChild(gaScript);

            gaScript.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                gtag("js", new Date());
                gtag("config", "G-EK1JCS1WF5");
            };

            /* ----------------------------
             ✅ Google Ads (bookwriting.us)
            ----------------------------- */
            const adsScript = document.createElement("script");
            adsScript.async = true;
            adsScript.src =
                "https://www.googletagmanager.com/gtag/js?id=AW-338427708";
            document.head.appendChild(adsScript);

            adsScript.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                gtag("js", new Date());
                gtag("config", "AW-338427708");
            };
        }, 100);

        /* ----------------------------
         ✅ LiveChat (moved outside setTimeout)
        ----------------------------- */
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
                    const n = t.createElement("script");
                    n.async = true;
                    n.type = "text/javascript";
                    n.src = "https://cdn.livechatinc.com/tracking.js";
                    t.head.appendChild(n);
                },
            };
            !n.__lc.asyncInit && e.init();
            n.LiveChatWidget = n.LiveChatWidget || e;
        })(window, document, [].slice);

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default Scripts;

"use client";
import { useEffect } from 'react';

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // Google Tag Manager (for <head>)
            const gtmScript = document.createElement("script");
            gtmScript.async = true;
            gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K9S7GGNQ';
            document.head.appendChild(gtmScript);

            // Google Tag Manager for noscript (for <body>)
            const noscriptDiv = document.createElement("noscript");
            noscriptDiv.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9S7GGNQ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
            document.body.insertBefore(noscriptDiv, document.body.firstChild);

            // Optionally add Google Analytics Tag if needed
            const analyticsScript = document.createElement("script");
            analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-EK1JCS1WF5";
            analyticsScript.async = true;
            analyticsScript.defer = true;
            document.head.appendChild(analyticsScript);

            // Define gtag globally
            window.gtag = window.gtag || function () {
                (window.dataLayer = window.dataLayer || []).push(arguments);
            };

            // Initialize gtag for Google Analytics
            analyticsScript.onload = () => {
                gtag('js', new Date());
                gtag('config', 'G-EK1JCS1WF5');
            };

        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return null;
};

export default Scripts;

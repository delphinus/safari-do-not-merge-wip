(() => {
    if (window.top !== window || !/\bgithub\b/.test(window.location.host)) {
        return;
    }
    const re = [
        /\bWIP\b/i,
        /\bDo Not Merge\b/i,
        /\bDNM\b/i
    ];
    const isWIP = () => {
        if (!/\/pull\/\d+\b/.test(window.location.pathname)) {
            return false;
        }
        const $title = document.querySelector('.js-issue-title');
        if (!$title) {
            return false;
        }
        const title = $title.textContent;
        if (re.every(r => !r.test(title))) {
            return false;
        }
        return true;
    };
    window.setInterval(() => {
        const w = isWIP();
        document.querySelectorAll('.mergeability-details button').
            forEach($b => $b.disabled = w);
    }, 1000);
})();

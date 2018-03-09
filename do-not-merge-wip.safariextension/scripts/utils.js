(() => {
    const log = (...mes) => console.log('[Do Not Merge WIP]', ...mes);
    this.Utils = {
        log: log
    };
}).call(() => this || typeof window !== 'undefined' ? window : global);

document.addEventListener("DOMContentLoaded", () => {
    const transitionEl = document.querySelector(".page-transition");

    // Animate in when page loads (optional)
    setTimeout(() => {
        transitionEl.classList.remove("active");
    }, 100); 

    // Intercept clicks on internal links
    document.querySelectorAll("a[href]").forEach(link => {
        const url = new URL(link.href, window.location.origin);
        if (url.origin === window.location.origin) { // same site
            link.addEventListener("click", e => {
                e.preventDefault();
                const target = link.href;

                transitionEl.classList.add("active");

                setTimeout(() => {
                    window.location.href = target;
                }, 600); // match CSS duration
            });
        }
    });
});

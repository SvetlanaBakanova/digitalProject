document.addEventListener("DOMContentLoaded", function () {
    
    const hamburger = document.querySelector('.hamburger')
    const mobileMenu = document.querySelector('.mobile-menu')

    const toggleMobileMenu = () => {
        hamburger.classList.toggle("is-active")
        mobileMenu.classList.toggle("mobile-menu--active")
        document.body.classList.toggle("no-scroll")
    }

    hamburger.addEventListener("click", toggleMobileMenu)
})
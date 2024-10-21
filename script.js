// parallax effect

const parallax = document.getElementById('img');

window.addEventListener('scroll', function() {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * -0.7 + 'px';
});

// sticky headers

const stickyNav = () => {
    let headerHeight = document.querySelector('#starter').offsetHeight / 6;
    let header = document.querySelector('header');
    let navbar = document.getElementById('navbar');
    let scrollValue = window.scrollY;

    if (scrollValue > headerHeight) {
        header.classList.add('header-sticky');
        navbar.classList.remove('navbar_hidden');
    } else {
        header.classList.remove('header-sticky');
        navbar.classList.add('navbar_hidden');
    }
}

window.addEventListener('scroll', stickyNav);

// scroll-padding

const navigationHeight = document.querySelector('header').offsetHeight * 2 + 'px';

document.documentElement.style.setProperty('--scroll-padding', navigationHeight);



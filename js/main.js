setTimeout (function () {
    const loadingPage = document.getElementById('loading-page')

    loadingPage.className += "loaded";
    loadingPage.style.zIndex = "-1";
}, 3000);

function theme() {
    const element = document.body;

    element.classList.toggle('dark-mode')
}

function menuToggle() {
    const menuBtn = document.getElementById('hamburger');
    const desktopMenuBtn = document.getElementById('desktop-hamburger');
    const menu = document.getElementById('hamburger-menu');
    const jobs = document.getElementById('desktop-jobs');
    const navbar = document.querySelector('.desktop-nav');
    // only querySelector gets a . for class

    navbar.classList.toggle('bg-none');
    menuBtn.classList.toggle('open');
    desktopMenuBtn.classList.toggle('open');
    jobs.classList.toggle('hidden');
    menu.classList.toggle('open-menu');
}

function numberCount() {
    const counters = document.querySelectorAll('.counter-number');

    counters.forEach((counter) => {
        // console.log(counter);
        counter.innerText = '00'

        const updateCounter = () => {
            // get count target //
            const target = +counter.getAttribute('data-target')

            // console.log(target);

            // get current count value //
            const countValue = +counter.innerText;

            // create an increment //
            const increment = target / 100;

            // if counter is less than target, add increment //
            if (countValue < target) {
            // Round up and set counter value //
            counter.innerText = `${Math.ceil(countValue + increment)}`;

            setTimeout(updateCounter, 50)
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

setTimeout(numberCount, 3000);

function letterCount() {
    // get letter element
    const letter = document.getElementById('counter-text')

    // set letter to A
    letter.innerText = 'A';

    // get target letter
    const updateLetter = () => {
        letterTarget = letter.getAttribute('data-target')

        // console.log(letterTarget);

        // get current letter
        const letterValue = letter.innerText;

        // console.log(letterValue);

        const increment = 1

        // if letter < target, add increment
        if (letterValue !== letterTarget) {
            const charCode = letterValue.charCodeAt(0)
            const nextChar = String.fromCharCode(charCode + increment);

            letter.innerText = nextChar

            // time duration for counting
            setTimeout(updateLetter, 200);
        } else {
            letter.innerText = letterTarget;
        }
    };
    updateLetter()
}

// for the dashboard and home page to have different loading times
if (document.body.getAttribute('page') === 'home'){
    setTimeout(letterCount, 3000);
} else {
    numberCount();
    // wait 3 seconds for loading screen to finish
}

// Admin Forms 
const tabItems = document.querySelectorAll('.tab-item');
const tabFormItems = document.querySelectorAll('.tab-form-item');

function removeActive() {
    tabFormItems.forEach((item) => item.classList.remove('active'));
}
    
function selectItem(e) {
    // e for event
    removeActive();

    const tabFormItem = document.querySelector(`#${this.id}-form`);
    // template literals ${variable}
    // concatination as another alternative...
    tabFormItem.classList.add('active');
}

tabItems.forEach((item) => item.addEventListener('click', selectItem));
// event listeners

// Category Hover
const iconElements = document.querySelectorAll('.icon');

iconElements.forEach((icon) => {
    const iconTag = icon.querySelector('.icon-tag');
    const iconText = icon.querySelector('.icon-text');
    const iconDescription = icon.querySelector('.icon-description');

    icon.addEventListener('mouseover', () => {
        if(iconTag) {
            iconTag.style.opacity = 0;
            iconTag.style.transition = 'all 0.3s ease-in-out';
        }
        if(iconText) {
            iconText.style.opacity = 0;
            iconText.style.transition = 'all 0.3s ease-in-out';
        }
        if(iconDescription) {
            iconDescription.style.opacity = 1;
            iconDescription.style.transition = 'all 0.3s ease-in-out';
        }
    });

    icon.addEventListener('mouseout', () => {
        if(iconTag) {
            iconTag.style.opacity = 1;
            // no transition needed because ease-in & ease-out already in place above
        }
        if(iconText) {
            iconText.style.opacity = 1;
        }
        if(iconDescription) {
            iconDescription.style.opacity = 0;
        }
    });
});



// use loading screen for pages with long load times - like page images, etc. //
//HERO1
const hero1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            (document.getElementById('hero1-img') as HTMLElement).style.transform = 'translateY(0)';
            (document.getElementById('hero1-circle1') as HTMLElement).style.transform = 'scale(1)';
            (document.getElementById('hero1-circle2') as HTMLElement).style.transform = 'scale(1)';
        }
    });
});
hero1.observe(document.getElementById('hero1-img')!);

//SLIDE
const slide = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), 300)
    })
})
document.querySelectorAll('.hero2 .hero-list > div').forEach(count => slide.observe(count))
document.querySelectorAll('.hero3 .hero-list > div').forEach(count => slide.observe(count))
document.querySelectorAll('circle1, circle2, circle3, circle4').forEach(count => slide.observe(count))
slide.observe(document.querySelector('.form')!);

//HERO5
const hero5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            (document.getElementById('hero5-img') as HTMLElement).style.transform = 'translateY(0)';
            (document.getElementById('hero5-circle1') as HTMLElement).style.transform = 'scale(1)';
            (document.getElementById('hero5-circle2') as HTMLElement).style.transform = 'scale(1)';
        }
    });
});
hero5.observe(document.getElementById('hero5-img')!);

//HERO6
const hero6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetElement = entry.target as HTMLElement
            targetElement.style.opacity = '1'
        }
    })
})
document.querySelectorAll('.hero6 > div > div > div').forEach(count => hero6.observe(count))

document.querySelector(".form")!.addEventListener("submit", (e)=> {
    let submit = document.getElementById("submitBTN") as HTMLInputElement
        submit.disabled = true
})

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    let input = document.querySelector('input[name="m"]') as HTMLInputElement;
    let params_m = params.get('m');
    if(input && params_m) input.value = params_m;
}
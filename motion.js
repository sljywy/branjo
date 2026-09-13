(() => {
    'use strict';

    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.classList.add('motion-capable');

    const progressBar = document.querySelector('.scroll-progress__bar');
    const hero = document.querySelector('.cinematic-hero');
    const story = document.querySelector('.scrolly-story');
    let ticking = false;

    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

    function updateScrollMotion() {
        ticking = false;
        const scrollTop = window.scrollY || window.pageYOffset || 0;
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        if (progressBar) progressBar.style.transform = `scaleX(${clamp(scrollTop / maxScroll)})`;

        if (hero && !reduceMotion) {
            const heroProgress = clamp(scrollTop / Math.max(1, hero.offsetHeight));
            hero.style.setProperty('--hero-y', `${heroProgress * 48}px`);
            hero.style.setProperty('--hero-y-soft', `${heroProgress * 70}px`);
            hero.style.setProperty('--hero-scale', String(1.045 + heroProgress * .035));
        }

        if (story) {
            const rect = story.getBoundingClientRect();
            const travel = Math.max(1, story.offsetHeight - window.innerHeight);
            story.style.setProperty('--story-progress', String(clamp(-rect.top / travel)));
            activateClosestStoryStep();
        }
    }

    function requestScrollUpdate() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateScrollMotion);
    }

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate, { passive: true });

    if (hero && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
        hero.addEventListener('pointermove', event => {
            const x = (event.clientX / window.innerWidth - .5) * 18;
            const y = (event.clientY / window.innerHeight - .5) * 12;
            hero.style.setProperty('--hero-x', `${x}px`);
            hero.style.setProperty('--hero-y-soft', `${y}px`);
        }, { passive: true });
    }

    const revealTargets = [
        ...document.querySelectorAll('[data-reveal]'),
        ...document.querySelectorAll('section:not(#home):not(#story) h2, .proof-grid, .service-card, .project-card, #technologie .grid > div, #cennik .grid > div, #reviewsGrid, .faq-item')
    ];
    const uniqueRevealTargets = [...new Set(revealTargets)];
    uniqueRevealTargets.forEach((element, index) => {
        element.setAttribute('data-reveal', element.getAttribute('data-reveal') || 'up');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
        uniqueRevealTargets.forEach(element => element.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });
        uniqueRevealTargets.forEach(element => revealObserver.observe(element));
    }

    const storySteps = [...document.querySelectorAll('[data-story-step]')];
    const storyMedia = [...document.querySelectorAll('[data-story-media]')];
    const storyCaption = document.querySelector('[data-story-caption]');
    let activeStep = -1;

    function setStoryStep(index) {
        index = clamp(index, 0, Math.max(0, storySteps.length - 1));
        if (index === activeStep || !storySteps.length) return;
        activeStep = index;
        storySteps.forEach((step, i) => step.classList.toggle('is-active', i === index));
        storyMedia.forEach((media, i) => media.classList.toggle('is-active', i === index));
        if (storyCaption) {
            const key = storySteps[index].dataset.storyCaption;
            storyCaption.setAttribute('data-i18n', key || 'story_stage_1');
            const lang = localStorage.getItem('gtifab-lang') || 'sk';
            if (typeof i18n !== 'undefined' && i18n[lang] && i18n[lang][key]) {
                storyCaption.textContent = i18n[lang][key];
            }
        }
    }

    function activateClosestStoryStep() {
        if (!storySteps.length) return;
        const center = window.innerHeight * .55;
        let bestIndex = 0;
        let bestDistance = Infinity;
        storySteps.forEach((step, index) => {
            const rect = step.getBoundingClientRect();
            const stepCenter = rect.top + rect.height / 2;
            const distance = Math.abs(stepCenter - center);
            if (distance < bestDistance) {
                bestDistance = distance;
                bestIndex = index;
            }
        });
        setStoryStep(bestIndex);
    }

    const counters = [...document.querySelectorAll('[data-count]')];
    function animateCounter(element) {
        if (element.dataset.counted === 'true') return;
        element.dataset.counted = 'true';
        const target = Number(element.dataset.count || 0);
        const suffix = element.dataset.suffix || '';
        const duration = 1250;
        const start = performance.now();
        function frame(now) {
            const progress = clamp((now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 4);
            const value = Math.round(target * eased);
            element.textContent = target >= 1000 ? `${value.toLocaleString('sk-SK')}${suffix}` : `${value}${suffix}`;
            if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    if (reduceMotion || !('IntersectionObserver' in window)) {
        counters.forEach(element => {
            element.textContent = `${Number(element.dataset.count).toLocaleString('sk-SK')}${element.dataset.suffix || ''}`;
        });
    } else {
        const counterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            });
        }, { threshold: .6 });
        counters.forEach(element => counterObserver.observe(element));
    }

    setStoryStep(0);

    const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
    const navSections = navLinks
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);
    if ('IntersectionObserver' in window && navSections.length) {
        const navObserver = new IntersectionObserver(entries => {
            const visible = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (!visible) return;
            navLinks.forEach(link => {
                const active = link.getAttribute('href') === `#${visible.target.id}`;
                link.classList.toggle('is-current', active);
                if (active) link.setAttribute('aria-current', 'page');
                else link.removeAttribute('aria-current');
            });
        }, { threshold: [.18, .4, .62], rootMargin: '-18% 0px -55% 0px' });
        navSections.forEach(section => navObserver.observe(section));
    }

    updateScrollMotion();
})();

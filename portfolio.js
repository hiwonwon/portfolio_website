function handleScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// 최초 실행 및 스크롤 이벤트 연결
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

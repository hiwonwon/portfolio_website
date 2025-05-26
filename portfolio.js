function handleScroll() {
    const sections = document.querySelectorAll('section');
    const techStackSection = document.querySelector('.tech-stack-section');
    const projectsSection = document.querySelector('.projects-section');

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // tech-stack-section과 projects-section은 애니메이션 없이 바로 표시
        if (section === techStackSection || section === projectsSection) {
            section.classList.add('visible');
        } else {
            if (rect.top < window.innerHeight * 0.8) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        }
    });
}

// 최초 실행 및 스크롤 이벤트 연결
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// 카테고리 탭 기능
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.category-tab');
    const icons = document.querySelectorAll('.stack-icon');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 활성화된 탭 스타일 변경
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            // 아이콘 필터링
            icons.forEach(icon => {
                if (category === 'all') {
                    icon.classList.remove('inactive');
                } else {
                    if (icon.classList.contains(category)) {
                        icon.classList.remove('inactive');
                    } else {
                        icon.classList.add('inactive');
                    }
                }
            });
        });
    });
});

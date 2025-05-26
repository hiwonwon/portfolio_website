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

// 모달 관련 함수들
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    // 프로젝트별 상세 정보
    const projectDetails = {
        'history': {
            title: 'History',
            description: '역사관련 커뮤니티앱',
            details: '역사에 관심있는 사람들을 위한 커뮤니티 앱입니다. 사용자들은 역사 관련 글을 작성하고 공유할 수 있습니다.',
            technologies: ['React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/hiwonwon/history-app'
        },
        'librog': {
            title: 'Librog',
            description: '독서 기록 관리 앱',
            details: '독서 기록을 관리하고 공유할 수 있는 앱입니다. 독서 목록 관리, 독후감 작성, 독서 통계 기능을 제공합니다.',
            technologies: ['React Native', 'Firebase'],
            github: 'https://github.com/hiwonwon/librog'
        },
        'eyphone': {
            title: 'Eyphone',
            description: '시각장애인 보조장치 앱',
            details: '시각장애인을 위한 보조 앱으로, 음성 인식과 텍스트 음성 변환 기능을 제공합니다.',
            technologies: ['Python', 'OpenCV', 'TensorFlow'],
            github: 'https://github.com/hiwonwon/eyphone'
        },
        'hiwonshop': {
            title: 'Hiwon shop',
            description: 'Spring Boot를 이용한 쇼핑몰 사이트 프로젝트',
            details: 'Spring Boot를 활용한 온라인 쇼핑몰 프로젝트입니다. 상품 관리, 장바구니, 결제 기능을 구현했습니다.',
            technologies: ['Spring Boot', 'MySQL', 'Thymeleaf'],
            github: 'https://github.com/hiwonwon/hiwon-shop'
        }
    };

    const project = projectDetails[projectId];
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <div class="project-details">
            <h3>프로젝트 상세</h3>
            <p>${project.details}</p>
            <h3>사용 기술</h3>
            <ul>
                ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <a href="${project.github}" target="_blank" class="github-link">GitHub 보기</a>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// 모달 외부 클릭시 닫기
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

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

// 최초 실행 및 스크롤 이벤트 연결
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

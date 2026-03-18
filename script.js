/**
 * ASHEN DESCENT - Official Website
 * Epic Dark Fantasy Roguelite
 *
 * Features:
 * - Bilingual support (EN/ZH)
 * - Dynamic content rendering
 * - Scroll animations
 * - Particle effects
 * - Smooth interactions
 */

// ============================================
// GLOBAL STATE
// ============================================
let currentLang = 'en';
let content = { en: {}, zh: {} };
let isLoading = false;

// ============================================
// ICONS LIBRARY (SVG)
// ============================================
const icons = {
  pixel: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  combat: '<svg viewBox="0 0 24 24"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M3 3l6 6"/></svg>',
  roguelite: '<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  rift: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="6" ry="2.5" stroke-dasharray="2 2"/></svg>',
  altar: '<svg viewBox="0 0 24 24"><path d="M12 2L8 8h8l-4-6zM8 8v4l4 4 4-4V8H8zM8 16v4h8v-4"/></svg>',
  death: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><path d="M8 15c0 2.21 1.79 4 4 4s4-1.79 4-4"/></svg>',
  player: '<svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21v-2a7 7 0 0 1 13 0v2"/></svg>',
  enemy: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><path d="M8 15c0 2.21 1.79 4 4 4s4-1.79 4-4"/></svg>',
  rooms: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  rewards: '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  bosses: '<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  hub: '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  meta: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  move: '<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  dash: '<svg viewBox="0 0 24 24"><path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/></svg>',
  attack: '<svg viewBox="0 0 24 24"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6"/></svg>',
  interact: '<svg viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',
  fracture: '<svg viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/><path d="M12 2l4 4-4 4-4-4 4-4zM12 18l4-4-4-4-4 4 4 4zM2 12l4-4 4 4-4 4-4-4zM18 12l-4-4 4-4 4 4-4 4z"/></svg>',
  relic: '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  guardian: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>'
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', init);

async function init() {
  try {
    await loadContent();
    setupEventListeners();
    setupScrollAnimations();
    setupStickyNav();
    setupHeroParticles();
    applyLanguage(currentLang);
  } catch (error) {
    console.error('Initialization error:', error);
    // Fallback: try loading inline content
    loadFallbackContent();
  }
}

// ============================================
// CONTENT LOADING
// ============================================
async function loadContent() {
  const [enResponse, zhResponse] = await Promise.all([
    fetch('site-content/en.json'),
    fetch('site-content/zh.json')
  ]);

  if (!enResponse.ok || !zhResponse.ok) {
    throw new Error('Failed to load content files');
  }

  content.en = await enResponse.json();
  content.zh = await zhResponse.json();
}

function loadFallbackContent() {
  // Minimal fallback content if JSON fails to load
  content.en = {
    site: { title: 'Ashen Descent', tagline: 'Every Death Brings Restoration Closer' },
    hero: { title: 'ASHEN DESCENT', subtitle: 'A Dark Fantasy Action Roguelite' },
    nav: { overview: 'Overview', world: 'World', mechanics: 'Mechanics' }
  };
  content.zh = {
    site: { title: '灰烬降临', tagline: '每次死亡都使修复更近一步' },
    hero: { title: '灰烬降临', subtitle: '暗黑幻想动作肉鸽' },
    nav: { overview: '概述', world: '世界', mechanics: '机制' }
  };
}

// ============================================
// LANGUAGE SYSTEM
// ============================================
function applyLanguage(lang) {
  currentLang = lang;
  const data = content[lang] || content.en;

  if (!data) return;

  // Update document language
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(data, key);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Update language toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.querySelector('.lang-en').classList.toggle('active', lang === 'en');
    langToggle.querySelector('.lang-zh').classList.toggle('active', lang === 'zh');
  }

  // Re-render all dynamic sections
  renderAllSections();
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
  // Language toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'zh' : 'en';
      applyLanguage(newLang);
    });
  }

  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 80; // Account for sticky nav
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

// ============================================
// STICKY NAVIGATION
// ============================================
function setupStickyNav() {
  const nav = document.getElementById('mainNav');
  const hero = document.getElementById('hero');

  if (!nav || !hero) return;

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      nav.classList.toggle('visible', !entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  heroObserver.observe(hero);
}

// ============================================
// HERO PARTICLES
// ============================================
function setupHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${8 + Math.random() * 8}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.width = `${2 + Math.random() * 3}px`;
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

// ============================================
// RENDER ALL SECTIONS
// ============================================
function renderAllSections() {
  const data = content[currentLang] || content.en;
  if (!data) return;

  renderFeatures(data);
  renderLore(data);
  renderLoop(data);
  renderControls(data);
  renderSystems(data);
  renderDeath(data);
  renderBuilds(data);
  renderArt(data);
  renderRoadmap(data);
  renderTimeline(data);
}

// ============================================
// RENDER: FEATURES
// ============================================
function renderFeatures(data) {
  const grid = document.getElementById('featuresGrid');
  if (!grid || !data.overview) return;

  const featureIcons = ['pixel', 'combat', 'roguelite', 'rift', 'altar', 'death'];

  grid.innerHTML = data.overview.features.map((feature, i) => `
    <div class="feature-card">
      <div class="feature-icon">${icons[featureIcons[i]] || icons.pixel}</div>
      <h3 class="feature-label">${feature.label}</h3>
      <p class="feature-desc">${feature.desc}</p>
    </div>
  `).join('');
}

// ============================================
// RENDER: LORE
// ============================================
function renderLore(data) {
  const grid = document.getElementById('loreGrid');
  if (!grid || !data.world) return;

  const loreIcons = ['fracture', 'altar', 'rift', 'relic', 'guardian'];

  grid.innerHTML = data.world.lore.map((item, i) => `
    <div class="lore-card">
      <div class="lore-icon">${icons[loreIcons[i]] || icons.fracture}</div>
      <h3 class="lore-title">${item.title}</h3>
      <p class="lore-desc">${item.desc}</p>
    </div>
  `).join('');
}

// ============================================
// RENDER: GAMEPLAY LOOP
// ============================================
function renderLoop(data) {
  const flow = document.getElementById('loopFlow');
  if (!flow || !data.mechanics || !data.mechanics.loop) return;

  const stepIcons = ['player', 'rooms', 'combat', 'rewards', 'roguelite', 'bosses', 'death', 'hub', 'altar'];

  flow.innerHTML = data.mechanics.loop.steps.map((step, i) => `
    <div class="loop-step">
      <div class="loop-icon">${icons[stepIcons[i]] || icons.player}</div>
      <span class="loop-phase">${step.phase}</span>
      <h4 class="loop-step-title">${step.title}</h4>
      <p class="loop-step-desc">${step.desc}</p>
    </div>
  `).join('');
}

// ============================================
// RENDER: CONTROLS
// ============================================
function renderControls(data) {
  const grid = document.getElementById('controlsGrid');
  if (!grid || !data.mechanics || !data.mechanics.controls) return;

  const controls = [
    { key: 'move', icon: 'move', ...data.mechanics.controls },
    { key: 'dash', icon: 'dash' },
    { key: 'attack', icon: 'attack' },
    { key: 'interact', icon: 'interact' }
  ];

  grid.innerHTML = `
    <div class="control-card">
      <div class="control-header">
        <div class="control-icon">${icons.move}</div>
        <h4 class="control-title">${data.mechanics.controls.move}</h4>
      </div>
      <p class="control-desc">${data.mechanics.controls.moveDesc}</p>
    </div>
    <div class="control-card">
      <div class="control-header">
        <div class="control-icon">${icons.dash}</div>
        <h4 class="control-title">${data.mechanics.controls.dash}</h4>
      </div>
      <p class="control-desc">${data.mechanics.controls.dashDesc}</p>
    </div>
    <div class="control-card">
      <div class="control-header">
        <div class="control-icon">${icons.attack}</div>
        <h4 class="control-title">${data.mechanics.controls.attack}</h4>
      </div>
      <p class="control-desc">${data.mechanics.controls.attackDesc}</p>
    </div>
    <div class="control-card">
      <div class="control-header">
        <div class="control-icon">${icons.interact}</div>
        <h4 class="control-title">${data.mechanics.controls.interact}</h4>
      </div>
      <p class="control-desc">${data.mechanics.controls.interactDesc}</p>
    </div>
  `;
}

// ============================================
// RENDER: SYSTEMS
// ============================================
function renderSystems(data) {
  const grid = document.getElementById('systemsGrid');
  if (!grid || !data.systems) return;

  const iconMap = {
    'player': icons.player,
    'combat': icons.combat,
    'enemy': icons.enemy,
    'rooms': icons.rooms,
    'rewards': icons.rewards,
    'bosses': icons.bosses,
    'hub': icons.hub,
    'meta': icons.meta
  };

  grid.innerHTML = data.systems.categories.map(sys => `
    <div class="system-card">
      <div class="system-icon">${iconMap[sys.icon] || icons.player}</div>
      <h3 class="system-title">${sys.title}</h3>
      <p class="system-desc">${sys.desc}</p>
    </div>
  `).join('');
}

// ============================================
// RENDER: DEATH
// ============================================
function renderDeath(data) {
  const lostList = document.getElementById('deathLostList');
  const preservedList = document.getElementById('deathPreservedList');

  if (lostList && data.death) {
    lostList.innerHTML = data.death.lost.items.map(item => `<li>${item}</li>`).join('');
  }

  if (preservedList && data.death) {
    preservedList.innerHTML = data.death.preserved.items.map(item => `<li>${item}</li>`).join('');
  }
}

// ============================================
// RENDER: BUILDS
// ============================================
function renderBuilds(data) {
  const grid = document.getElementById('buildsGrid');
  if (!grid || !data.builds) return;

  grid.innerHTML = data.builds.archetypes.map(arch => `
    <div class="build-card">
      <div class="build-header">
        <span class="build-id">${arch.id}</span>
        <h3 class="build-title">${arch.title}</h3>
        <span class="build-tagline">${arch.tagline}</span>
      </div>
      <p class="build-desc">${arch.desc}</p>
      <div class="build-details">
        <div class="build-detail">
          <span class="build-detail-label">Relics:</span>
          <span class="build-detail-value">${arch.relics}</span>
        </div>
        <div class="build-detail">
          <span class="build-detail-label">Style:</span>
          <span class="build-detail-value">${arch.playstyle}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================
// RENDER: ART
// ============================================
function renderArt(data) {
  const grid = document.getElementById('artGrid');
  if (!grid || !data.art) return;

  grid.innerHTML = data.art.pillars.map(pillar => `
    <div class="art-card">
      <h3 class="art-card-title">${pillar.title}</h3>
      <p class="art-card-desc">${pillar.desc}</p>
    </div>
  `).join('');
}

// ============================================
// RENDER: ROADMAP
// ============================================
function renderRoadmap(data) {
  const timeline = document.getElementById('roadmapTimeline');
  if (!timeline || !data.roadmap) return;

  timeline.innerHTML = data.roadmap.versions.map(version => `
    <div class="roadmap-item">
      <div class="roadmap-header">
        <span class="roadmap-version">v${version.id}</span>
      </div>
      <h3 class="roadmap-name">${version.name}</h3>
      <span class="roadmap-tagline">${version.tagline}</span>
      <p class="roadmap-purpose">${version.purpose}</p>
      <span class="roadmap-milestone">${version.milestone}</span>
      <div class="roadmap-details">
        <div class="roadmap-must">
          <strong>Must Have:</strong>
          <span>${version.must.join(' • ')}</span>
        </div>
        <div class="roadmap-optional">
          <strong>Optional:</strong>
          <span>${version.optional.join(' • ')}</span>
        </div>
      </div>
      <p class="roadmap-why">"${version.why}"</p>
    </div>
  `).join('');
}

// ============================================
// RENDER: TIMELINE
// ============================================
function renderTimeline(data) {
  const timeline = document.getElementById('timelineGrid');
  if (!timeline || !data.timeline) return;

  timeline.innerHTML = data.timeline.weeks.map(week => `
    <div class="timeline-item">
      <span class="timeline-week">W${week.week}</span>
      <div class="timeline-content">
        <h3 class="timeline-title">${week.title}</h3>
        <p class="timeline-focus">${week.focus}</p>
        <div class="timeline-deliverables">
          ${week.deliverables.map(d => `<span>${d}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

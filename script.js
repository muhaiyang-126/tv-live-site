const liveChannels = [
  {
    name: 'CCTV-5',
    type: '体育',
    status: 'LIVE',
    color: '#3d6dff',
    meta: '高清 · 1080P · 中国大陆',
    category: '体育',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    badge: 'LIVE',
    chip: '节目中',
  },
  {
    name: '凤凰资讯',
    type: '新闻',
    status: 'LIVE',
    color: '#ff9f43',
    meta: '实时 · 720P · 港澳',
    category: '新闻',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    badge: 'LIVE',
    chip: '播报中',
  },
  {
    name: 'HBO',
    type: '电影',
    status: 'HD',
    color: '#50d59a',
    meta: '电影精选 · 1080P',
    category: '电影',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    badge: 'HD',
    chip: '电影中',
  },
  {
    name: 'BTV',
    type: '综艺',
    status: 'LIVE',
    color: '#b05cff',
    meta: '热播节目 · 1080P',
    category: '综艺',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    badge: 'LIVE',
    chip: '综艺中',
  },
  {
    name: 'ESPN',
    type: '体育',
    status: 'HD',
    color: '#ff7b54',
    meta: '赛事直播 · 1080P',
    category: '体育',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    badge: 'HD',
    chip: '比赛中',
  },
  {
    name: 'NHK World',
    type: '国际',
    status: 'LIVE',
    color: '#63a6ff',
    meta: '国际新闻 · 720P',
    category: '新闻',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    badge: 'LIVE',
    chip: '实时',
  },
  {
    name: '探索频道',
    type: '纪录',
    status: 'HD',
    color: '#82d8bc',
    meta: '探索世界 · 1080P',
    category: '电影',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    badge: 'HD',
    chip: '纪录中',
  },
  {
    name: '优酷热播',
    type: '综艺',
    status: 'LIVE',
    color: '#ffc857',
    meta: '热门综艺 · 1080P',
    category: '综艺',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    badge: 'LIVE',
    chip: '热播中',
  }
];

const fallbackResources = {
  首页: [
    { title: '热门电影', type: '电影精选', tag: '爆款', poster: 'linear-gradient(135deg, #22d3ee, #2563eb)', subtitle: '热映中', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '人气追剧', type: '电视剧精选', tag: '热播', poster: 'linear-gradient(135deg, #34d399, #10b981)', subtitle: '更新中', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '综艺精选', type: '娱乐综艺', tag: '精选', poster: 'linear-gradient(135deg, #f59e0b, #f97316)', subtitle: '本周热播', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '动漫热榜', type: '动漫推荐', tag: '新品', poster: 'linear-gradient(135deg, #a78bfa, #6366f1)', subtitle: '新番上线', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' }
  ],
  电视剧: [
    { title: '长安十二时辰', type: '历史传奇', tag: '热播', poster: 'linear-gradient(135deg, #3b82f6, #38bdf8)', subtitle: '8.9分 · 48集', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '山海情', type: '现实题材', tag: '高清', poster: 'linear-gradient(135deg, #22c55e, #34d399)', subtitle: '8.8分 · 46集', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '狂飙', type: '犯罪悬疑', tag: '强推', poster: 'linear-gradient(135deg, #f97316, #fb7185)', subtitle: '9.3分 · 39集', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '以家人之名', type: '家庭伦理', tag: '热播', poster: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', subtitle: '8.7分 · 32集', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '庆余年', type: '古风奇幻', tag: '爆款', poster: 'linear-gradient(135deg, #f59e0b, #f43f5e)', subtitle: '9.1分 · 46集', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' }
  ],
  电影: [
    { title: '流浪地球2', type: '科幻灾难', tag: '热映', poster: 'linear-gradient(135deg, #0ea5e9, #2563eb)', subtitle: '8.9分 · 2D/4K', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '唐人街探案3', type: '喜剧悬疑', tag: '高清', poster: 'linear-gradient(135deg, #f59e0b, #ef4444)', subtitle: '8.6分 · 4K', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '星际穿越', type: '科幻经典', tag: '重温', poster: 'linear-gradient(135deg, #14b8a6, #0f766e)', subtitle: '9.4分 · 4K', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '你的名字', type: '动画恋爱', tag: '精选', poster: 'linear-gradient(135deg, #8b5cf6, #ec4899)', subtitle: '9.0分 · 2D', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '阿凡达', type: '科幻冒险', tag: 'IMAX', poster: 'linear-gradient(135deg, #60a5fa, #1d4ed8)', subtitle: '8.8分 · 3D', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' }
  ],
  综艺: [
    { title: '奔跑吧', type: '真人秀', tag: '热播', poster: 'linear-gradient(135deg, #10b981, #22d3ee)', subtitle: '8.7分 · 更新中', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '快乐大本营', type: '综艺娱乐', tag: '经典', poster: 'linear-gradient(135deg, #f472b6, #ec4899)', subtitle: '9.1分 · 综艺', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '最强大脑', type: '知识竞技', tag: '精选', poster: 'linear-gradient(135deg, #fbbf24, #f97316)', subtitle: '8.9分 · 赛事', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '向往的生活', type: '生活旅拍', tag: '热播', poster: 'linear-gradient(135deg, #34d399, #14b8a6)', subtitle: '9.0分 · 生活', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '披荆斩棘', type: '音乐竞技', tag: '综艺', poster: 'linear-gradient(135deg, #38bdf8, #6366f1)', subtitle: '8.8分 · 音乐', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' }
  ],
  动漫: [
    { title: '海贼王', type: '冒险热血', tag: '连载', poster: 'linear-gradient(135deg, #38bdf8, #2563eb)', subtitle: '9.2分 · 连载中', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '凹凸世界', type: '异能冒险', tag: '热播', poster: 'linear-gradient(135deg, #f59e0b, #f97316)', subtitle: '8.8分 · 24集', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '鬼灭之刃', type: '动作奇幻', tag: '精选', poster: 'linear-gradient(135deg, #ec4899, #8b5cf6)', subtitle: '9.5分 · 26集', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '名侦探柯南', type: '推理侦探', tag: '经典', poster: 'linear-gradient(135deg, #22c55e, #0ea5e9)', subtitle: '9.3分 · 经典', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { title: '斗破苍穹', type: '修炼奇幻', tag: '热推', poster: 'linear-gradient(135deg, #f97316, #ef4444)', subtitle: '8.9分 · 更新中', streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' }
  ]
};

const defaultApiConfig = {
  首页: '',
  直播: '',
  电视剧: '',
  电影: '',
  综艺: '',
  动漫: ''
};

const channelList = document.getElementById('channelList');
const videoEl = document.getElementById('videoPlayer');
const channelTitle = document.getElementById('channelTitle');
const channelMeta = document.getElementById('channelMeta');
const currentTime = document.getElementById('currentTime');
const streamBadge = document.getElementById('streamBadge');
const statusText = document.getElementById('statusText');
const programChip = document.getElementById('programChip');
const panelTitle = document.getElementById('panelTitle');
const filterBar = document.getElementById('filterBar');
const filterButtons = document.querySelectorAll('.filter-btn');
const navButtons = document.querySelectorAll('.nav-item');
const epgTitle = document.getElementById('epgTitle');
const epgGrid = document.getElementById('epgGrid');
const apiConfigForm = document.getElementById('apiConfigForm');
const settingsModal = document.getElementById('settingsModal');
const settingsButton = document.getElementById('settingsButton');
const closeSettings = document.getElementById('closeSettings');
const resetApiConfig = document.getElementById('resetApiConfig');

let activeFilter = '全部';
let activeView = '首页';
let hls = null;

function getApiConfig() {
  const raw = localStorage.getItem('tvApiConfig');
  if (!raw) {
    localStorage.setItem('tvApiConfig', JSON.stringify(defaultApiConfig));
    return { ...defaultApiConfig };
  }

  try {
    return { ...defaultApiConfig, ...JSON.parse(raw) };
  } catch (error) {
    localStorage.setItem('tvApiConfig', JSON.stringify(defaultApiConfig));
    return { ...defaultApiConfig };
  }
}

function saveApiConfig(config) {
  localStorage.setItem('tvApiConfig', JSON.stringify(config));
}

function patchFormValues() {
  const apiConfig = getApiConfig();
  Array.from(apiConfigForm.elements).forEach((element) => {
    if (element.name && element.type === 'url') {
      element.value = apiConfig[element.name] || '';
    }
  });
}

function normalizeList(payload) {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.data)) return payload.data;
  if (payload && Array.isArray(payload.items)) return payload.items;
  if (payload && Array.isArray(payload.result)) return payload.result;
  if (payload && Array.isArray(payload.list)) return payload.list;
  return [];
}

function mapFields(item, view) {
  const title = item.title || item.name || item.movieName || item.resourceName || '未知内容';
  const type = item.type || item.category || item.genre || '推荐';
  const tag = item.tag || item.label || item.status || '热播';
  const subtitle = item.subtitle || item.desc || item.description || item.score || `${type} · 更新中`;
  const poster = item.poster || item.cover || item.image || item.thumb || `linear-gradient(135deg, #3b82f6, #38bdf8)`;
  const streamUrl = item.streamUrl || item.url || item.playUrl || 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  return {
    title,
    type,
    tag,
    subtitle,
    poster,
    streamUrl,
    category: view,
    name: title
  };
}

async function fetchResourcesByView(view) {
  const apiConfig = getApiConfig();
  const endpoint = apiConfig[view];

  if (!endpoint) {
    return fallbackResources[view] || fallbackResources.首页;
  }

  try {
    const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('请求失败');
    const json = await response.json();
    const list = normalizeList(json).map((item) => mapFields(item, view));
    if (list.length) return list;
  } catch (error) {
    console.warn(`读取 ${view} API 失败，使用默认资源：`, error);
  }

  return fallbackResources[view] || fallbackResources.首页;
}

function updateClock() {
  const now = new Date();
  currentTime.textContent = now.toLocaleTimeString('zh-CN', { hour12: false });
}

function setVideoSource(url) {
  if (Hls.isSupported()) {
    if (hls) {
      hls.destroy();
    }
    hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(videoEl);
  } else if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
    videoEl.src = url;
  } else {
    console.warn('当前浏览器不支持 HLS 播放。');
  }
}

function renderEPGForView(view) {
  const epgMap = {
    首页: [
      { time: '08:30', title: '晨间精选', channel: '电影频道' },
      { time: '11:00', title: '热门综艺', channel: '综艺台' },
      { time: '15:30', title: '热播剧场', channel: '电视剧台' },
      { time: '20:00', title: '黄金档电影', channel: '电影台' },
      { time: '22:30', title: '动漫精选', channel: '动漫台' }
    ],
    直播: [
      { time: '19:00', title: '新闻联播', channel: 'CCTV-1' },
      { time: '20:00', title: '中国好声音', channel: 'CCTV-3' },
      { time: '21:00', title: 'NBA 直播', channel: 'CCTV-5' },
      { time: '22:30', title: '电影频道', channel: '电影台' },
      { time: '23:30', title: '晚间综艺', channel: 'BTV' }
    ],
    电视剧: [
      { time: '07:50', title: '经典剧场', channel: '电视剧台' },
      { time: '12:00', title: '热播新剧', channel: '电视剧台' },
      { time: '18:30', title: '黄金档剧场', channel: '电视剧台' },
      { time: '21:00', title: '人间烟火', channel: '电视剧台' },
      { time: '23:00', title: '深夜精选', channel: '电视剧台' }
    ],
    电影: [
      { time: '09:30', title: '电影精选', channel: '电影台' },
      { time: '13:00', title: '院线大片', channel: '电影台' },
      { time: '17:20', title: '经典回放', channel: '电影台' },
      { time: '20:30', title: '热门上映', channel: '电影台' },
      { time: '23:10', title: '午夜影院', channel: '电影台' }
    ],
    综艺: [
      { time: '09:00', title: '早间综艺', channel: '综艺台' },
      { time: '12:30', title: '真人秀', channel: '综艺台' },
      { time: '17:00', title: '娱乐节目', channel: '综艺台' },
      { time: '20:00', title: '综艺热播', channel: '综艺台' },
      { time: '22:00', title: '深夜精选', channel: '综艺台' }
    ],
    动漫: [
      { time: '08:00', title: '动漫晨间剧', channel: '动漫台' },
      { time: '11:30', title: '新番精选', channel: '动漫台' },
      { time: '15:00', title: '经典回顾', channel: '动漫台' },
      { time: '18:30', title: '热血冒险', channel: '动漫台' },
      { time: '21:00', title: '深夜动漫', channel: '动漫台' }
    ]
  };

  epgTitle.textContent = view === '直播' ? '节目单' : `${view}节目单`;
  epgGrid.innerHTML = (epgMap[view] || epgMap.首页)
    .map(
      (item, index) => `
        <article class="epg-item ${index === 0 ? 'active' : ''}">
          <div class="epg-time">${item.time}</div>
          <div class="epg-text">
            <strong>${item.title}</strong>
            <span>${item.channel}</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderResourceList(view, items) {
  const list = items || fallbackResources[view] || fallbackResources.首页;

  channelList.className = 'resource-list';
  channelList.innerHTML = list
    .map(
      (item, index) => `
        <article class="resource-item ${index === 0 ? 'active' : ''}" data-title="${item.title}">
          <div class="resource-poster" style="background: ${item.poster || 'linear-gradient(135deg, #3b82f6, #38bdf8)'};">${(item.title || '内容').slice(0, 2).toUpperCase()}</div>
          <div class="resource-name">
            <strong>${item.title}</strong>
            <span>${item.type || '推荐'}</span>
          </div>
          <div class="resource-tag">${item.tag || '热播'}</div>
        </article>
      `
    )
    .join('');

  const itemEls = channelList.querySelectorAll('.resource-item');
  itemEls.forEach((itemEl) => {
    itemEl.addEventListener('click', () => {
      const title = itemEl.dataset.title;
      const selected = list.find((entry) => entry.title === title);
      if (!selected) return;

      channelList.querySelectorAll('.resource-item').forEach((el) => el.classList.remove('active'));
      itemEl.classList.add('active');

      channelTitle.textContent = selected.title;
      channelMeta.textContent = `${selected.type || '推荐'} · ${selected.subtitle || '更新中'}`;
      streamBadge.textContent = selected.tag || '热播';
      statusText.textContent = selected.type || '推荐';
      programChip.textContent = '正在播放';
      setVideoSource(selected.streamUrl || 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
    });
  });

  if (itemEls.length > 0) {
    const firstNode = itemEls[0];
    const firstItem = list.find((entry) => entry.title === firstNode.dataset.title) || list[0];
    if (firstItem) {
      channelTitle.textContent = firstItem.title;
      channelMeta.textContent = `${firstItem.type || '推荐'} · ${firstItem.subtitle || '更新中'}`;
      streamBadge.textContent = firstItem.tag || '热播';
      statusText.textContent = firstItem.type || '推荐';
      programChip.textContent = '正在播放';
      setVideoSource(firstItem.streamUrl || 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
    }
  }
}

function renderLiveList() {
  const filtered =
    activeFilter === '全部'
      ? liveChannels
      : liveChannels.filter((channel) => channel.category === activeFilter);

  channelList.className = 'channel-list';
  channelList.innerHTML = filtered
    .map(
      (channel, index) => `
        <article class="channel-item ${index === 0 ? 'active' : ''}" data-name="${channel.name}">
          <div class="channel-logo" style="background: linear-gradient(135deg, ${channel.color}, #7bb3ff);">
            ${channel.name.slice(0, 2).toUpperCase()}
          </div>
          <div class="channel-name">
            <strong>${channel.name}</strong>
            <span>${channel.type}</span>
          </div>
          <div class="channel-state">${channel.status}</div>
        </article>
      `
    )
    .join('');

  const items = document.querySelectorAll('.channel-item');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const target = liveChannels.find((channel) => channel.name === item.dataset.name);
      if (!target) return;

      document.querySelectorAll('.channel-item').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');

      channelTitle.textContent = target.name;
      channelMeta.textContent = target.meta;
      streamBadge.textContent = target.badge;
      statusText.textContent = target.meta;
      programChip.textContent = target.chip;
      setVideoSource(target.streamUrl);
    });
  });

  if (items.length > 0) {
    const first = items[0];
    const firstChannel = liveChannels.find((c) => c.name === first.dataset.name);
    if (firstChannel) {
      channelTitle.textContent = firstChannel.name;
      channelMeta.textContent = firstChannel.meta;
      streamBadge.textContent = firstChannel.badge;
      statusText.textContent = firstChannel.meta;
      programChip.textContent = firstChannel.chip;
      setVideoSource(firstChannel.streamUrl);
    }
  }
}

async function renderListByView(view) {
  activeView = view;
  navButtons.forEach((button) => button.classList.toggle('active', button.dataset.view === view));

  if (view === '直播') {
    panelTitle.textContent = '频道列表';
    filterBar.style.display = 'flex';
    renderLiveList();
    renderEPGForView(view);
    return;
  }

  panelTitle.textContent = `${view}资源`;
  filterBar.style.display = 'none';
  const list = await fetchResourcesByView(view);
  renderResourceList(view, list);
  renderEPGForView(view);
}

navButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    renderListByView(button.dataset.view);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    if (activeView === '直播') {
      renderLiveList();
    }
  });
});

videoEl.addEventListener('loadeddata', () => {
  const overlay = document.querySelector('.video-overlay');
  if (overlay) overlay.style.opacity = '0';
});

settingsButton.addEventListener('click', () => {
  settingsModal.classList.remove('hidden');
  settingsModal.setAttribute('aria-hidden', 'false');
  patchFormValues();
});

closeSettings.addEventListener('click', () => {
  settingsModal.classList.add('hidden');
  settingsModal.setAttribute('aria-hidden', 'true');
});

settingsModal.addEventListener('click', (event) => {
  if (event.target === settingsModal) {
    settingsModal.classList.add('hidden');
    settingsModal.setAttribute('aria-hidden', 'true');
  }
});

apiConfigForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(apiConfigForm);
  const config = {};
  formData.forEach((value, key) => {
    config[key] = value.trim();
  });

  saveApiConfig({ ...defaultApiConfig, ...config });
  settingsModal.classList.add('hidden');
  settingsModal.setAttribute('aria-hidden', 'true');
  renderListByView(activeView);
});

resetApiConfig.addEventListener('click', () => {
  saveApiConfig({ ...defaultApiConfig });
  patchFormValues();
  renderListByView(activeView);
});

updateClock();
setInterval(updateClock, 1000);
patchFormValues();
renderListByView(activeView);

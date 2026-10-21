const channels = [
  {
    name: 'CCTV-5',
    type: '体育',
    status: 'LIVE',
    color: '#3d6dff',
    meta: '高清 · 1080P · 中国大陆',
    category: '体育',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: '凤凰资讯',
    type: '新闻',
    status: 'LIVE',
    color: '#ff9f43',
    meta: '实时 · 720P · 港澳',
    category: '新闻',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: 'HBO',
    type: '电影',
    status: 'HD',
    color: '#50d59a',
    meta: '电影精选 · 1080P',
    category: '电影',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: 'BTV',
    type: '综艺',
    status: 'LIVE',
    color: '#b05cff',
    meta: '热播节目 · 1080P',
    category: '综艺',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: 'ESPN',
    type: '体育',
    status: 'HD',
    color: '#ff7b54',
    meta: '赛事直播 · 1080P',
    category: '体育',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: 'NHK World',
    type: '国际',
    status: 'LIVE',
    color: '#63a6ff',
    meta: '国际新闻 · 720P',
    category: '新闻',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: '探索频道',
    type: '纪录',
    status: 'HD',
    color: '#82d8bc',
    meta: '探索世界 · 1080P',
    category: '电影',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: '优酷热播',
    type: '综艺',
    status: 'LIVE',
    color: '#ffc857',
    meta: '热门综艺 · 1080P',
    category: '综艺',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  }
];

const videoEl = document.getElementById('videoPlayer');
const channelList = document.getElementById('channelList');
const channelTitle = document.getElementById('channelTitle');
const channelMeta = document.getElementById('channelMeta');
const currentTime = document.getElementById('currentTime');
const filterButtons = document.querySelectorAll('.filter-btn');

let activeFilter = '全部';
let hls = null;

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

function renderChannels() {
  const filtered =
    activeFilter === '全部'
      ? channels
      : channels.filter((channel) => channel.category === activeFilter);

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
      const target = channels.find((channel) => channel.name === item.dataset.name);
      if (!target) return;

      document.querySelectorAll('.channel-item').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');

      channelTitle.textContent = target.name;
      channelMeta.textContent = target.meta;
      setVideoSource(target.streamUrl);
    });
  });

  if (items.length > 0) {
    const first = items[0];
    const firstChannel = channels.find((c) => c.name === first.dataset.name);
    if (firstChannel) {
      channelTitle.textContent = firstChannel.name;
      channelMeta.textContent = firstChannel.meta;
      setVideoSource(firstChannel.streamUrl);
    }
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.textContent.trim();
    renderChannels();
  });
});

videoEl.addEventListener('loadeddata', () => {
  const overlay = document.querySelector('.video-overlay');
  if (overlay) overlay.style.opacity = '0';
});

updateClock();
setInterval(updateClock, 1000);
renderChannels();

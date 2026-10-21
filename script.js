const channels = [
  {
    name: 'CCTV-5',
    type: '体育',
    status: 'LIVE',
    color: '#3d6dff',
    meta: '高清 · 1080P · 中国大陆',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: '凤凰资讯',
    type: '新闻',
    status: 'LIVE',
    color: '#ff9f43',
    meta: '实时 · 720P · 港澳',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: 'HBO',
    type: '电影',
    status: 'HD',
    color: '#50d59a',
    meta: '电影精选 · 1080P',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: 'BTV',
    type: '综艺',
    status: 'LIVE',
    color: '#b05cff',
    meta: '热播节目 · 1080P',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: 'ESPN',
    type: '体育',
    status: 'HD',
    color: '#ff7b54',
    meta: '赛事直播 · 1080P',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    name: 'NHK World',
    type: '国际',
    status: 'LIVE',
    color: '#63a6ff',
    meta: '国际新闻 · 720P',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
];

const channelList = document.getElementById('channelList');
const videoEl = document.getElementById('videoPlayer');
const channelTitle = document.getElementById('channelTitle');
const channelMeta = document.getElementById('channelMeta');
const currentTime = document.getElementById('currentTime');

let hls = null;

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('zh-CN', {
    hour12: false,
  });
  currentTime.textContent = timeString;
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
    console.warn('当前浏览器不支持 HLS，无法播放该直播流。');
  }
}

function renderChannels() {
  channelList.innerHTML = channels
    .map(
      (channel, index) => `
        <article class="channel-item ${index === 0 ? 'active' : ''}" data-index="${index}">
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

  Array.from(document.querySelectorAll('.channel-item')).forEach((item) => {
    item.addEventListener('click', () => {
      const index = Number(item.dataset.index);
      const channel = channels[index];

      Array.from(document.querySelectorAll('.channel-item')).forEach((el) => el.classList.remove('active'));
      item.classList.add('active');

      channelTitle.textContent = channel.name;
      channelMeta.textContent = channel.meta;
      setVideoSource(channel.streamUrl);
    });
  });
}

renderChannels();
setVideoSource(channels[0].streamUrl);
channelTitle.textContent = channels[0].name;
channelMeta.textContent = channels[0].meta;

videoEl.addEventListener('loadeddata', () => {
  const overlay = document.querySelector('.video-overlay');
  if (overlay) overlay.style.opacity = '0';
});

updateClock();
setInterval(updateClock, 1000);

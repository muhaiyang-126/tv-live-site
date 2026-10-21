const channels = [
  { name: 'CCTV-5', type: '体育', status: 'LIVE', color: '#3d6dff' },
  { name: '凤凰资讯', type: '新闻', status: 'LIVE', color: '#ff9f43' },
  { name: 'HBO', type: '电影', status: 'HD', color: '#50d59a' },
  { name: 'BTV', type: '综艺', status: 'LIVE', color: '#b05cff' },
  { name: 'ESPN', type: '体育', status: 'HD', color: '#ff7b54' },
  { name: 'NHK World', type: '国际', status: 'LIVE', color: '#63a6ff' },
];

const channelList = document.getElementById('channelList');

channelList.innerHTML = channels
  .map(
    (channel, index) => `
      <article class="channel-item ${index === 0 ? 'active' : ''}">
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

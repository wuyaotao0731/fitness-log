'use strict';

/* ========== Config ========== */
const CFG = {
  groupCode: (window.APP_CONFIG && window.APP_CONFIG.groupCode) || 'fitness2026',
  photoBucket: (window.APP_CONFIG && window.APP_CONFIG.photoBucket) || 'photos',
  minDuration: 30,
  defaultWeeklyGoal: 2,
};

/* ========== Constants ========== */
const CN_MONTHS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
const CN_WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];
const CN_NUMS = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

const QUOTES = [
  // —— 文学 / 名人 ——
  { t: '身体是我们唯一必须终生居住的房子。', s: '— Jim Rohn' },
  { t: '吐气时,一切远去;吸气时,世界重新属于我。', s: '— 三岛由纪夫' },
  { t: '人的意志,栖息在肌肉里。', s: '— 村上春树' },
  { t: '身体是灵魂的花园,意志是它的园丁。', s: '— 莎士比亚' },
  { t: '痛楚难以避免,而磨难可以选择。', s: '— 村上春树' },
  { t: '凡不能杀死我的,必使我更强大。', s: '— 尼采' },
  { t: '生命在于运动。', s: '— 伏尔泰' },
  { t: '千里之行,始于足下。', s: '— 《老子》' },
  { t: '不积跬步,无以至千里。', s: '— 《荀子·劝学》' },
  { t: '天行健,君子以自强不息。', s: '— 《周易》' },
  { t: '苟日新,日日新,又日新。', s: '— 《大学》' },
  { t: '业精于勤,荒于嬉。', s: '— 韩愈' },
  { t: '少壮不努力,老大徒伤悲。', s: '— 《长歌行》' },
  { t: '有志者事竟成。', s: '— 《后汉书》' },
  { t: '学如逆水行舟,不进则退。', s: '— 传统' },
  { t: '一日不作,一日不食。', s: '— 百丈禅师' },
  { t: '知者不惑,仁者不忧,勇者不惧。', s: '— 《论语》' },
  { t: '千锤万凿出深山,烈火焚烧若等闲。', s: '— 于谦《石灰吟》' },
  { t: '非学无以广才,非志无以成学。', s: '— 诸葛亮《诫子书》' },
  { t: '学而时习之,不亦说乎。', s: '— 《论语》' },

  // —— 现代流行 ——
  { t: '身体是革命的本钱。', s: '' },
  { t: '生命不息,运动不止。', s: '' },
  { t: '越自律,越自由。', s: '' },
  { t: '你今天的样子,是三年前的选择。', s: '' },
  { t: '想要的东西,自己给。', s: '' },

  // —— 格言体 / 原创短句 ——
  { t: '汗水不会说谎。', s: '' },
  { t: '自律,即自由。', s: '' },
  { t: '所谓自由,就是想去哪里就能去,想举起什么就能举起。', s: '' },
  { t: '训练的目的,不是变成谁,是回到自己。', s: '' },
  { t: '身体记得每一次坚持。', s: '' },
  { t: '流下的汗,是身体给你的回信。', s: '' },
  { t: '肌肉是唯一你越取用越丰盈的东西。', s: '' },
  { t: '今天不动,明天酸也是白酸。', s: '' },
  { t: '身体不会撒谎,它记录着我们所有偷懒和用力。', s: '' },
  { t: '训练身体,就是训练心灵接受身体在做的事。', s: '' },
  { t: '步子迈开,方向就有了。', s: '' },
  { t: '强壮不是目的,自由才是。', s: '' },
  { t: '每一次呼吸,都是身体和你达成的协议。', s: '' },
  { t: '你的身体正在做一件比想象更聪明的事。', s: '' },
  { t: '一切酸痛,都是身体在告诉你:今天,我记得。', s: '' },
  { t: '意志不在心里,在下一次呼吸里。', s: '' },
  { t: '疲倦是身体对轻慢的回应。', s: '' },
  { t: '慢慢来,比较快。', s: '' },
  { t: '状态不好的日子,也算一次。', s: '' },
  { t: '你比昨天多走的一步,就是新的自己。', s: '' },
  { t: '力量,是你对自己不厌其烦的耐心。', s: '' },
  { t: '每次训练,都是给未来的自己写信。', s: '' },
  { t: '身体永远知道你在偷懒,但它从不为此责怪你。', s: '' },
  { t: '与其等待动力,不如成为动力。', s: '' },
  { t: '稳定,比强度更难。', s: '' },
  { t: '疼痛不是敌人,是老师。', s: '' },
  { t: '沉重是一种诚实。', s: '' },
  { t: '有一件事你可以永远从头开始:再做一组。', s: '' },
  { t: '呼吸稳,人就稳。', s: '' },
  { t: '心跳加快的时候,时间反而变慢。', s: '' },
  { t: '身体是最诚实的日记本。', s: '' },
  { t: '你可以停下来,但不必永远停下来。', s: '' },
  { t: '疲惫是一种被身体理解的时间。', s: '' },
  { t: '出汗是流出去的时间。', s: '' },
  { t: '一件事重复一百次,就成了你身体的意见。', s: '' },
  { t: '举起的重量,是替明天的自己举的。', s: '' },
  { t: '你已经在路上,就已经赢了那些还没上路的自己。', s: '' },
  { t: '意志一半在肌肉里,一半在起床的那一刻。', s: '' },
  { t: '身体是最长情的伴侣。', s: '' },
  { t: '训练教会你两件事:承担和释放。', s: '' },
  { t: '每一次坚持,都是对昨天你的答复。', s: '' },
  { t: '慢跑五公里,能想清楚一件事。', s: '' },
  { t: '举起哑铃的那一秒,世界安静下来。', s: '' },
  { t: '训练不需要每天进步,只需要每天在场。', s: '' },
  { t: '完成,比完美有价值。', s: '' },
  { t: '一次不好的训练,也胜过一次没做的训练。', s: '' },
  { t: '力量,是长在时间里的植物。', s: '' },
  { t: '你不需要相信自己,只需要开始。', s: '' },
  { t: '心情差的时候,去出一身汗,再回来审视自己。', s: '' },
  { t: '别人是你训练路上的风景,不是终点。', s: '' },
  { t: '身体的每一次挑战,都是心灵的一次预演。', s: '' },
  { t: '规律的乏味,才是自由的形状。', s: '' },
  { t: '走过的路会留在身体里,不会消失。', s: '' },
  { t: '从来没有白流的汗,只有还没开始流的。', s: '' },
  { t: '起身穿鞋,就已经赢了一半。', s: '' },

  // —— 幽默 / 群友腔 ——
  { t: '二头肌不会因为你迟到就不来。', s: '' },
  { t: '举得起哑铃,举不动懒散。', s: '' },
  { t: '当你抱怨累的时候,你的对手正在多做一组。', s: '— 健身房大爷' },
  { t: '你不来,肌肉不长;你来了,理由不缺。', s: '' },
  { t: '冰箱开三次,也不会瘦。', s: '' },
  { t: '卧推的重量,是你今晚睡得香的原因。', s: '' },
  { t: '一个人,一根杠铃,一种理直气壮。', s: '' },
  { t: '早上跑步的人,比早上刷手机的人,活得更亮。', s: '' },
  { t: '你以为躺着能省力气,其实躺着最费。', s: '' },
  { t: '蛋白质摄入不达标,肌肉就在拆自己的墙。', s: '' },
  { t: '今天不练腿,明天走路就有意见。', s: '' },
  { t: '你今天没去的健身房,昨天还在等你。', s: '' },
  { t: '力量训练最大的意外收获,是心情稳。', s: '' },
  { t: '拉伸五分钟,值得所有借口跳过。', s: '' },
  { t: '手机能省下 30 分钟,就够跑五公里。', s: '' },
  { t: '姿势不对,举得再重都是白费。', s: '' },
  { t: '睡够 8 小时,是每次训练的最后一组。', s: '' },
  { t: '你以为在锻炼身体,其实是身体在锻炼你。', s: '' },
  { t: '想瘦一斤,先从少吃一口开始。', s: '' },
  { t: '一周训练三次,不多;一周找借口三次,太多。', s: '' },
];

/* ========== Storage (local: 仅缓存身份和偏好) ========== */
const KEY_AUTH = 'fitness_authed';
const KEY_USER = 'fitness_user';
const KEY_PHOTO_MODE = 'fitness_photo_mode';

const store = {
  loadUser() { const s = localStorage.getItem(KEY_USER); return s ? JSON.parse(s) : null; },
  saveUser(u) { localStorage.setItem(KEY_USER, JSON.stringify(u)); },
};

/* ========== Cloud (Supabase) ========== */
let _sb = null;
function getSupabase() {
  if (_sb) return _sb;
  if (!window.supabase || !window.APP_CONFIG) {
    throw new Error('Supabase SDK 或 config 未加载');
  }
  _sb = window.supabase.createClient(window.APP_CONFIG.supabaseUrl, window.APP_CONFIG.supabaseKey);
  return _sb;
}

// camelCase(前端) ↔ snake_case(数据库) 映射
function toUser(r) {
  return { nickname: r.nickname, weeklyGoal: r.weekly_goal, groupCode: r.group_code, createdAt: r.created_at };
}
function toCheckin(r) {
  return {
    id: r.id, nickname: r.nickname, groupCode: r.group_code,
    exerciseType: r.exercise_type, durationMin: r.duration_min,
    note: r.note || '', photo: r.photo || null, createdAt: r.created_at,
  };
}
function toLeave(r) {
  return {
    id: r.id, nickname: r.nickname, groupCode: r.group_code,
    weekMondayKey: r.week_monday_key, yearMonth: r.year_month, createdAt: r.created_at,
  };
}
function toLike(r) {
  return { id: r.id, checkinId: r.checkin_id, nickname: r.nickname, groupCode: r.group_code, createdAt: r.created_at };
}
function toComment(r) {
  return { id: r.id, checkinId: r.checkin_id, nickname: r.nickname, groupCode: r.group_code, content: r.content, createdAt: r.created_at };
}

const cloud = {
  async fetchAll(groupCode) {
    const sb = getSupabase();
    const [u, c, l, lk, cm] = await Promise.all([
      sb.from('users').select('*').eq('group_code', groupCode),
      sb.from('checkins').select('*').eq('group_code', groupCode),
      sb.from('leaves').select('*').eq('group_code', groupCode),
      sb.from('likes').select('*').eq('group_code', groupCode),
      sb.from('comments').select('*').eq('group_code', groupCode),
    ]);
    const anyErr = [u, c, l, lk, cm].find((r) => r.error);
    if (anyErr) throw anyErr.error;
    return {
      users: (u.data || []).map(toUser),
      checkins: (c.data || []).map(toCheckin),
      leaves: (l.data || []).map(toLeave),
      likes: (lk.data || []).map(toLike),
      comments: (cm.data || []).map(toComment),
    };
  },
  async upsertUser(user) {
    const sb = getSupabase();
    const { error } = await sb.from('users').upsert({
      nickname: user.nickname,
      weekly_goal: user.weeklyGoal,
      group_code: user.groupCode,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'nickname,group_code' });
    if (error) throw error;
  },
  async insertCheckin(c) {
    const sb = getSupabase();
    const { data, error } = await sb.from('checkins').insert({
      nickname: c.nickname,
      group_code: c.groupCode,
      exercise_type: c.exerciseType,
      duration_min: c.durationMin,
      note: c.note || '',
      photo: c.photo || null,
    }).select().single();
    if (error) throw error;
    return toCheckin(data);
  },
  async deleteCheckin(id) {
    const sb = getSupabase();
    const { error } = await sb.from('checkins').delete().eq('id', id);
    if (error) throw error;
  },
  async insertLeave(l) {
    const sb = getSupabase();
    const { data, error } = await sb.from('leaves').insert({
      nickname: l.nickname,
      group_code: l.groupCode,
      week_monday_key: l.weekMondayKey,
      year_month: l.yearMonth,
    }).select().single();
    if (error) throw error;
    return toLeave(data);
  },
  async insertLike(l) {
    const sb = getSupabase();
    const { data, error } = await sb.from('likes').insert({
      checkin_id: l.checkinId,
      nickname: l.nickname,
      group_code: l.groupCode,
    }).select().single();
    if (error) throw error;
    return toLike(data);
  },
  async deleteLike(checkinId, nickname) {
    const sb = getSupabase();
    const { error } = await sb.from('likes').delete()
      .eq('checkin_id', checkinId).eq('nickname', nickname);
    if (error) throw error;
  },
  async insertComment(c) {
    const sb = getSupabase();
    const { data, error } = await sb.from('comments').insert({
      checkin_id: c.checkinId,
      nickname: c.nickname,
      group_code: c.groupCode,
      content: c.content,
    }).select().single();
    if (error) throw error;
    return toComment(data);
  },
  async deleteComment(id) {
    const sb = getSupabase();
    const { error } = await sb.from('comments').delete().eq('id', id);
    if (error) throw error;
  },
  async uploadPhoto(dataUrl) {
    const sb = getSupabase();
    // dataUrl 已是压缩后的 base64,转 Blob 上传
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const ext = (blob.type.split('/')[1] || 'jpg').replace('jpeg', 'jpg');
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { data, error } = await sb.storage.from(CFG.photoBucket).upload(filename, blob, {
      contentType: blob.type, upsert: false,
    });
    if (error) throw error;
    const { data: pub } = sb.storage.from(CFG.photoBucket).getPublicUrl(data.path);
    return pub.publicUrl;
  },
};

/* ========== Date helpers ========== */
const pad = (n) => (n < 10 ? '0' + n : '' + n);

function toChineseDay(n) {
  if (n < 10) return CN_NUMS[n];
  if (n === 10) return '十';
  if (n < 20) return '十' + CN_NUMS[n - 10];
  if (n === 20) return '二十';
  if (n < 30) return '二十' + CN_NUMS[n - 20];
  if (n === 30) return '三十';
  return '三十' + CN_NUMS[n - 30];
}

function formatCnDate(dt) {
  return `${CN_MONTHS[dt.getMonth()]}月${toChineseDay(dt.getDate())}日 · 星期${CN_WEEKDAYS[dt.getDay()]}`;
}

function ymKey(dt) { return dt.getFullYear() + '-' + pad(dt.getMonth() + 1); }
function ymdKey(dt) { return dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate()); }

function weekStart(dt) {
  const d = new Date(dt);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}
function weekEnd(dt) {
  const s = weekStart(dt);
  s.setDate(s.getDate() + 7);
  return s;
}
function weekKey(dt) { return ymdKey(weekStart(dt)); }

function isOnLeave(nickname, dt) {
  const wk = ymdKey(weekStart(dt));
  return state.leaves.some((l) => l.nickname === nickname && l.weekMondayKey === wk);
}

/* ========== State ========== */
const state = {
  user: null,
  checkins: [],
  leaves: [],
  others: [],
  likes: [],
  comments: [],
  selectedExercise: '练背',
  leaderboardWeek: 0,
  quoteIndex: 0,
  pendingPhoto: null,
  photoMode: 'compact',
  openPersonNick: null,
};

function applyPhotoMode() {
  const app = document.getElementById('app');
  if (!app) return;
  if (state.photoMode === 'compact') app.classList.add('compact-photos');
  else app.classList.remove('compact-photos');
}

/* ========== DOM helpers ========== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function toast(msg, ms = 2000) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add('hidden'), ms);
}

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[ch]));
}

/* ========== Business logic ========== */
function myCheckinsInWeek(dt) {
  const ws = weekStart(dt);
  const we = weekEnd(dt);
  return state.checkins.filter((c) =>
    c.nickname === state.user.nickname &&
    new Date(c.createdAt) >= ws &&
    new Date(c.createdAt) < we
  );
}

function computeWeekProgress() {
  const now = new Date();
  const myWeek = myCheckinsInWeek(now);
  const days = new Set(myWeek.map((c) => ymdKey(new Date(c.createdAt))));
  const goal = state.user.weeklyGoal;
  const onLeaveThisWeek = isOnLeave(state.user.nickname, now);
  const effGoal = onLeaveThisWeek ? 0 : goal;
  return { done: days.size, goal, effGoal, onLeaveThisWeek };
}

function collectAllUsers() {
  return [state.user, ...state.others];
}

/* ========== Likes & Comments ========== */
function isDemoOrTmpId(id) {
  return typeof id === 'string' && (id.startsWith('demo_') || id.startsWith('tmp_'));
}
function getLikes(checkinId) {
  return state.likes.filter((l) => l.checkinId === checkinId);
}
function myLikedIt(checkinId) {
  return state.likes.some((l) => l.checkinId === checkinId && l.nickname === state.user.nickname);
}
async function toggleLike(checkinId) {
  const me = state.user.nickname;
  const isDemo = isDemoOrTmpId(checkinId);
  const idx = state.likes.findIndex((l) => l.checkinId === checkinId && l.nickname === me);
  if (idx >= 0) {
    const removed = state.likes.splice(idx, 1)[0];
    if (isDemo || isDemoOrTmpId(removed.id)) return;  // demo 只改本地
    try {
      await cloud.deleteLike(checkinId, me);
    } catch (e) {
      console.error(e);
      state.likes.push(removed);
      refreshUI();
      toast('取消点赞失败');
    }
  } else {
    const tmpId = 'tmp_' + Date.now();
    const tmp = { id: tmpId, checkinId, nickname: me, groupCode: CFG.groupCode, createdAt: new Date().toISOString() };
    state.likes.push(tmp);
    if (isDemo) return;
    try {
      const saved = await cloud.insertLike(tmp);
      const i = state.likes.findIndex((l) => l.id === tmpId);
      if (i >= 0) state.likes[i] = saved;
    } catch (e) {
      console.error(e);
      state.likes = state.likes.filter((l) => l.id !== tmpId);
      refreshUI();
      toast('点赞失败');
    }
  }
}
function getComments(checkinId) {
  return state.comments
    .filter((c) => c.checkinId === checkinId)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}
async function submitCommentAsync(checkinId, content) {
  const text = content.trim();
  if (!text) return false;
  const isDemo = isDemoOrTmpId(checkinId);
  const tmpId = 'tmp_' + Date.now();
  const tmp = {
    id: tmpId, checkinId, nickname: state.user.nickname,
    groupCode: CFG.groupCode, content: text.slice(0, 100),
    createdAt: new Date().toISOString(),
  };
  state.comments.push(tmp);
  if (isDemo) return true;  // demo checkin 上的评论不写云端
  try {
    const saved = await cloud.insertComment(tmp);
    const i = state.comments.findIndex((c) => c.id === tmpId);
    if (i >= 0) state.comments[i] = saved;
    return true;
  } catch (e) {
    console.error(e);
    state.comments = state.comments.filter((c) => c.id !== tmpId);
    refreshUI();
    toast('评论失败');
    return false;
  }
}
async function deleteCommentAsync(commentId) {
  const cm = state.comments.find((c) => c.id === commentId);
  if (!cm || cm.nickname !== state.user.nickname) return false;
  const backup = { ...cm };
  state.comments = state.comments.filter((c) => c.id !== commentId);
  if (isDemoOrTmpId(commentId)) return true;  // 本地演示评论,不用调云端
  try {
    await cloud.deleteComment(commentId);
    return true;
  } catch (e) {
    console.error(e);
    state.comments.push(backup);
    refreshUI();
    toast('删除失败');
    return false;
  }
}

/* ========== Rendering ========== */
function renderQuote() {
  const q = QUOTES[state.quoteIndex] || QUOTES[0];
  $('#quote-text').textContent = q.t;
  $('#quote-source').textContent = q.s;
}

function renderTodayTab() {
  const p = computeWeekProgress();
  $('#week-done').textContent = p.done;
  $('#week-goal').textContent = p.effGoal;
  const pct = p.effGoal > 0 ? Math.min(100, (p.done / p.effGoal) * 100) : 100;
  $('#progress-fill').style.width = pct + '%';

  const noteEl = $('#progress-note');
  if (p.onLeaveThisWeek) {
    noteEl.textContent = '本周请假中 · 好好休息';
  } else if (p.effGoal > 0 && p.done >= p.effGoal) {
    noteEl.textContent = '本周目标已达成 · 剩下的每一次都是加冕';
  } else {
    const rem = p.effGoal - p.done;
    noteEl.textContent = rem > 0 ? `还差 ${rem} 次` : '';
  }

  const today = ymdKey(new Date());
  const todayEntries = state.checkins
    .filter((c) => c.nickname === state.user.nickname && ymdKey(new Date(c.createdAt)) === today)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const list = $('#today-entries');
  if (todayEntries.length === 0) {
    list.innerHTML = '<div class="empty">今天还未记。</div>';
  } else {
    list.innerHTML = todayEntries.map(entryHtml).join('');
  }
  bindEntryActions();
}

function entryHtml(c) {
  const dt = new Date(c.createdAt);
  const canDelete = ymdKey(dt) === ymdKey(new Date()) && c.nickname === state.user.nickname;
  const photo = c.photo ? `<div class="entry-photo"><img src="${c.photo}" alt="现场照"></div>` : '';
  const note = c.note ? `<div class="entry-note">${escapeHtml(c.note)}</div>` : '';
  const actions = canDelete
    ? `<div class="entry-actions"><button class="entry-delete" data-id="${c.id}">删除</button></div>`
    : '';

  // Reactions & comments
  const likes = getLikes(c.id);
  const liked = myLikedIt(c.id);
  const likeNames = likes.map((l) => escapeHtml(l.nickname)).join(' ');
  const comments = getComments(c.id);
  const commentsHtml = comments.length === 0 ? '' : `
    <div class="comment-list">
      ${comments.map((cm) => {
        const mine = cm.nickname === state.user.nickname;
        const del = mine ? `<button class="comment-delete" data-id="${cm.id}" aria-label="删除">×</button>` : '';
        const reply = `<button class="comment-reply-mini" data-cid="${c.id}" data-nick="${escapeHtml(cm.nickname)}">回复</button>`;
        return `<div class="comment">
          <span class="comment-name">${escapeHtml(cm.nickname)}</span>
          <span class="comment-content">${escapeHtml(cm.content)}</span>
          <span class="comment-actions">${reply}${del}</span>
        </div>`;
      }).join('')}
    </div>`;
  const social = `
    <div class="entry-social">
      <div class="reaction-row">
        <button class="reaction-btn${liked ? ' liked' : ''}" data-id="${c.id}" aria-label="点赞">
          <span class="heart">${liked ? '♥' : '♡'}</span>
          <span class="count">${likes.length}</span>
        </button>
        <button class="comment-btn" data-id="${c.id}">评论</button>
        ${likes.length ? `<span class="reaction-list">${likeNames}</span>` : ''}
      </div>
      ${commentsHtml}
      <div class="reply-slot">
        <div class="comment-input">
          <input class="comment-input-field" data-id="${c.id}" type="text" maxlength="100" placeholder="说点什么">
          <button class="comment-send" data-id="${c.id}">发送</button>
          <button class="comment-cancel" data-id="${c.id}" aria-label="取消">×</button>
        </div>
      </div>
    </div>`;

  return `
    <div class="entry">
      <div class="entry-date">${formatCnDate(dt)}</div>
      <div class="entry-main">
        <span class="entry-exercise">${escapeHtml(c.exerciseType)}</span>
        <span class="entry-duration">${c.durationMin} min</span>
      </div>
      ${photo}
      ${note}
      ${social}
      ${actions}
    </div>
  `;
}

function bindEntryActions() {
  $$('.entry-delete').forEach((btn) => {
    btn.onclick = async () => {
      if (!confirm('删除这条记录?点赞和评论也会一起没。')) return;
      const id = btn.dataset.id;
      const backupCheckin = state.checkins.find((c) => c.id === id);
      const backupLikes = state.likes.filter((l) => l.checkinId === id);
      const backupComments = state.comments.filter((c) => c.checkinId === id);
      state.checkins = state.checkins.filter((c) => c.id !== id);
      state.likes = state.likes.filter((l) => l.checkinId !== id);
      state.comments = state.comments.filter((c) => c.checkinId !== id);
      refreshUI();
      if (isDemoOrTmpId(id)) { toast('已删除'); return; }
      try {
        await cloud.deleteCheckin(id);
        toast('已删除');
      } catch (e) {
        console.error(e);
        if (backupCheckin) state.checkins.push(backupCheckin);
        state.likes.push(...backupLikes);
        state.comments.push(...backupComments);
        refreshUI();
        toast('删除失败');
      }
    };
  });
  $$('.entry-photo img').forEach((img) => {
    img.onclick = () => openPhotoViewer(img.src);
  });
  $$('.reaction-btn').forEach((btn) => {
    btn.onclick = () => {
      toggleLike(btn.dataset.id);  // fire-and-forget,内部已乐观更新 state
      refreshUI();
    };
  });
  $$('.comment-delete').forEach((btn) => {
    btn.onclick = async () => {
      if (!confirm('删除这条评论?')) return;
      const ok = await deleteCommentAsync(btn.dataset.id);
      if (ok) {
        refreshUI();
        toast('已删除');
      }
    };
  });
  const submitFromInput = (inputEl) => {
    const id = inputEl.dataset.id;
    const text = inputEl.value;
    if (!text.trim()) return;
    inputEl.value = '';
    submitCommentAsync(id, text);  // fire-and-forget
    refreshUI();
  };
  $$('.comment-input-field').forEach((inp) => {
    inp.onkeydown = (e) => {
      if (e.key === 'Enter') { e.preventDefault(); submitFromInput(inp); }
    };
  });
  $$('.comment-send').forEach((btn) => {
    btn.onclick = () => {
      const inp = btn.parentElement.querySelector('.comment-input-field');
      if (inp) submitFromInput(inp);
    };
  });
  $$('.comment-reply-btn').forEach((btn) => {
    btn.onclick = () => {
      const slot = btn.parentElement;
      slot.classList.add('open');
      const inp = slot.querySelector('.comment-input-field');
      if (inp) setTimeout(() => inp.focus(), 50);
    };
  });
  $$('.comment-btn').forEach((btn) => {
    btn.onclick = () => {
      const entryEl = btn.closest('.entry');
      if (!entryEl) return;
      const slot = entryEl.querySelector('.reply-slot');
      if (!slot) return;
      slot.classList.add('open');
      const inp = slot.querySelector('.comment-input-field');
      if (inp) {
        inp.placeholder = '说点什么';
        setTimeout(() => inp.focus(), 50);
      }
    };
  });
  $$('.comment-reply-mini').forEach((btn) => {
    btn.onclick = () => {
      const entryEl = btn.closest('.entry');
      if (!entryEl) return;
      const slot = entryEl.querySelector('.reply-slot');
      if (!slot) return;
      slot.classList.add('open');
      const inp = slot.querySelector('.comment-input-field');
      if (inp) {
        const nick = btn.dataset.nick;
        inp.value = `@${nick} `;
        inp.placeholder = '回复…';
        setTimeout(() => {
          inp.focus();
          inp.setSelectionRange(inp.value.length, inp.value.length);
        }, 50);
      }
    };
  });
  $$('.comment-cancel').forEach((btn) => {
    btn.onclick = () => {
      const slot = btn.closest('.reply-slot');
      if (!slot) return;
      slot.classList.remove('open');
      const inp = slot.querySelector('.comment-input-field');
      if (inp) inp.value = '';
    };
  });
}

function renderJournalTab() {
  const mine = state.checkins
    .filter((c) => c.nickname === state.user.nickname)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const container = $('#journal-entries');
  if (mine.length === 0) {
    container.innerHTML = '<div class="empty">还没有记录 · 从记一次开始</div>';
    return;
  }
  const groups = {};
  mine.forEach((c) => {
    const wk = weekKey(new Date(c.createdAt));
    (groups[wk] = groups[wk] || []).push(c);
  });
  const keys = Object.keys(groups).sort().reverse();
  const now = new Date();
  const thisWk = weekKey(now);
  const lastWk = weekKey(new Date(now.getTime() - 7 * 86400000));
  container.innerHTML = keys.map((wk) => {
    const dt = new Date(wk + 'T00:00:00');
    let label;
    if (wk === thisWk) label = 'this week';
    else if (wk === lastWk) label = 'last week';
    else label = `week of ${dt.getMonth() + 1}/${dt.getDate()}`;
    return `
      <div class="week-group">
        <div class="week-group-header">${label}</div>
        ${groups[wk].map(entryHtml).join('')}
      </div>
    `;
  }).join('');
  bindEntryActions();
}

function renderLeaderboardTab() {
  const now = new Date();
  const wsThis = weekStart(now);
  const offset = state.leaderboardWeek;
  const targetMonday = new Date(wsThis.getTime() + offset * 7 * 86400000);
  const ws = targetMonday;
  const we = new Date(ws.getTime() + 7 * 86400000);
  const isCurrentWeek = offset === 0;

  // 周切换 chips
  const weekOffsets = [0, -1, -2, -3, -4, -5];
  $('#week-nav').innerHTML = weekOffsets.map((off) => {
    const cls = off === offset ? 'week-chip active' : 'week-chip';
    return `<button class="${cls}" data-off="${off}">${weekOffsetLabel(off)}</button>`;
  }).join('');
  $$('#week-nav .week-chip').forEach((chip) => {
    chip.onclick = () => {
      state.leaderboardWeek = parseInt(chip.dataset.off, 10);
      renderLeaderboardTab();
    };
  });

  // 目标周内的打卡
  const inWeek = state.checkins.filter((c) => new Date(c.createdAt) >= ws && new Date(c.createdAt) < we);
  const byName = {};
  inWeek.forEach((c) => {
    (byName[c.nickname] = byName[c.nickname] || new Set()).add(ymdKey(new Date(c.createdAt)));
  });
  const users = collectAllUsers();
  const rows = users.map((u) => {
    const days = (byName[u.nickname] || new Set()).size;
    const onLeave = isOnLeave(u.nickname, ws);
    const eff = onLeave ? 0 : u.weeklyGoal;
    const done = onLeave || (eff > 0 && days >= eff);
    const pct = onLeave ? 100 : (eff > 0 ? Math.min(100, (days / eff) * 100) : 100);
    return { name: u.nickname, days, goal: u.weeklyGoal, effGoal: eff, done, pct, onLeave };
  });
  rows.sort((a, b) => b.pct - a.pct || b.days - a.days || a.name.localeCompare(b.name));

  const container = $('#leaderboard-list');
  if (rows.length === 0) {
    container.innerHTML = '<div class="empty">还没有同伴数据</div>';
    return;
  }
  container.innerHTML = rows.map((r, i) => {
    const isMe = r.name === state.user.nickname;
    const leaveLabel = isCurrentWeek ? '请假中' : '请假';
    const countCell = r.onLeave
      ? `<div class="rank-count rank-leave">${leaveLabel}</div>`
      : `<div class="rank-count ${r.done ? 'rank-done' : ''}">${r.days}/${r.effGoal}</div>`;
    return `
      <div class="rank-row ${isMe ? 'me' : ''}" data-nick="${escapeHtml(r.name)}">
        <div class="rank-num">${i + 1}</div>
        <div class="rank-name">${escapeHtml(r.name)}${isMe ? '<span class="me-tag">me</span>' : ''}</div>
        <div class="rank-track"><div class="rank-fill" style="width:${r.pct}%"></div></div>
        ${countCell}
      </div>
    `;
  }).join('');
  $$('#leaderboard-list .rank-row').forEach((row) => {
    row.onclick = () => openPersonModal(row.dataset.nick);
  });
}

function weekOffsetLabel(offset) {
  if (offset === 0) return '本周';
  if (offset === -1) return '上周';
  const ws = new Date(weekStart(new Date()).getTime() + offset * 7 * 86400000);
  return `${ws.getMonth() + 1}/${ws.getDate()} 那周`;
}

function renderMeTab() {
  $('#setting-nickname').value = state.user.nickname;
  $('#setting-nickname').disabled = true;
  $('#setting-nickname').title = '要换昵称请「清空并退出」重登';
  $('#setting-goal').value = state.user.weeklyGoal;
  const now = new Date();
  const wYm = ymKey(weekStart(now));
  const monthlyUsed = state.leaves.find((l) => l.nickname === state.user.nickname && l.yearMonth === wYm);
  const onThisWeek = isOnLeave(state.user.nickname, now);
  const btn = $('#leave-btn');
  if (onThisWeek) {
    btn.disabled = true;
    btn.textContent = '本周已请假';
  } else if (monthlyUsed) {
    btn.disabled = true;
    const dt = new Date(monthlyUsed.weekMondayKey + 'T00:00:00');
    btn.textContent = `本月已请过(${dt.getMonth() + 1}/${dt.getDate()} 那周)`;
  } else {
    btn.disabled = false;
    btn.textContent = '本周请假';
  }
  $$('.mode-chip').forEach((c) => {
    c.classList.toggle('active', c.dataset.mode === state.photoMode);
  });
}

function renderAll() {
  renderQuote();
  renderTodayTab();
  renderJournalTab();
  renderLeaderboardTab();
  renderMeTab();
}

/* ========== Gate ========== */
async function syncFromCloud() {
  const data = await cloud.fetchAll(CFG.groupCode);
  state.checkins = data.checkins;
  state.leaves = data.leaves;
  state.likes = data.likes;
  state.comments = data.comments;
  state.others = data.users.filter((u) => u.nickname !== state.user.nickname);
  // 拉到云端里我的最新 weeklyGoal(可能在其他设备改过)
  const meFromCloud = data.users.find((u) => u.nickname === state.user.nickname);
  if (meFromCloud) {
    state.user = { ...state.user, weeklyGoal: meFromCloud.weeklyGoal, groupCode: meFromCloud.groupCode };
    store.saveUser(state.user);
  }
}

async function bootFromStorage() {
  const savedMode = localStorage.getItem(KEY_PHOTO_MODE);
  if (savedMode === 'compact' || savedMode === 'full') state.photoMode = savedMode;
  if (localStorage.getItem(KEY_AUTH) === 'true' && store.loadUser()) {
    state.user = store.loadUser();
    // 老版本可能没存 groupCode,补上
    if (!state.user.groupCode) state.user.groupCode = CFG.groupCode;
    $('#gate').classList.add('hidden');
    $('#app').classList.remove('hidden');
    applyPhotoMode();
    renderAll();  // 先空 render 让 UI 显示
    toast('同步中…', 1200);
    try {
      await syncFromCloud();
      renderAll();
    } catch (e) {
      console.error(e);
      toast('云端连不上,请检查网络');
    }
  } else {
    $('#gate').classList.remove('hidden');
    $('#app').classList.add('hidden');
    setTimeout(() => $('#gate-code').focus(), 100);
  }
}

function bindGate() {
  const submitCode = () => {
    const val = $('#gate-code').value.trim();
    if (val === CFG.groupCode) {
      $('#gate-step-code').classList.add('hidden');
      $('#gate-step-nickname').classList.remove('hidden');
      setTimeout(() => $('#gate-nickname').focus(), 100);
    } else {
      toast('口令不对,再问问群主');
    }
  };
  const submitNickname = async () => {
    const val = $('#gate-nickname').value.trim();
    if (!val) { toast('给自己起个名字吧'); return; }
    state.user = {
      nickname: val,
      weeklyGoal: CFG.defaultWeeklyGoal,
      groupCode: CFG.groupCode,
      createdAt: new Date().toISOString(),
    };
    store.saveUser(state.user);
    localStorage.setItem(KEY_AUTH, 'true');
    $('#gate').classList.add('hidden');
    $('#app').classList.remove('hidden');
    applyPhotoMode();
    renderAll();
    toast('同步中…', 1200);
    try {
      await cloud.upsertUser(state.user);
      await syncFromCloud();
      renderAll();
    } catch (e) {
      console.error(e);
      toast('云端连不上,请检查网络');
    }
  };
  $('#gate-code-btn').onclick = submitCode;
  $('#gate-nickname-btn').onclick = submitNickname;
  $('#gate-code').onkeydown = (e) => { if (e.key === 'Enter') submitCode(); };
  $('#gate-nickname').onkeydown = (e) => { if (e.key === 'Enter') submitNickname(); };
}

/* ========== Tabs ========== */
let _lastSync = 0;
async function bgSync() {
  if (Date.now() - _lastSync < 8000) return;  // 8 秒内不重复拉
  _lastSync = Date.now();
  try {
    await syncFromCloud();
    renderAll();
  } catch (e) {
    console.warn('bg sync failed', e);
  }
}

function bindTabs() {
  $$('.tab-btn').forEach((btn) => {
    btn.onclick = () => {
      $$('.tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      $$('.tab').forEach((t) => t.classList.remove('active'));
      $('#tab-' + target).classList.add('active');
      bgSync();  // 切 tab 时静默同步(限流 8s)
    };
  });
}

/* ========== Check-in modal ========== */
function openModal() {
  $('#modal-today-date').textContent = formatCnDate(new Date());
  state.selectedExercise = '练背';
  $$('#chips button').forEach((b) => b.classList.toggle('active', b.dataset.value === '练背'));
  $('#input-exercise-custom').value = '';
  $('#input-duration').value = 60;
  $('#input-note').value = '';
  state.pendingPhoto = null;
  $('#photo-preview').classList.add('hidden');
  $('#photo-add-btn').classList.remove('hidden');
  $('#photo-preview-img').src = '';
  $('#input-photo').value = '';
  $('#modal').classList.remove('hidden');
}
function closeModal() { $('#modal').classList.add('hidden'); }

function bindModal() {
  $('#checkin-btn').onclick = openModal;
  $('#modal-close').onclick = closeModal;
  $('#modal').onclick = (e) => { if (e.target.id === 'modal') closeModal(); };
  $$('#chips button').forEach((b) => {
    b.onclick = () => {
      $$('#chips button').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      state.selectedExercise = b.dataset.value;
      $('#input-exercise-custom').value = '';
    };
  });
  $('#input-exercise-custom').oninput = () => {
    if ($('#input-exercise-custom').value.trim()) {
      $$('#chips button').forEach((x) => x.classList.remove('active'));
      state.selectedExercise = null;
    }
  };
  $('#photo-add-btn').onclick = () => $('#input-photo').click();
  $('#input-photo').onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const dataUrl = await compressImage(file);
      state.pendingPhoto = dataUrl;
      $('#photo-preview-img').src = dataUrl;
      $('#photo-preview').classList.remove('hidden');
      $('#photo-add-btn').classList.add('hidden');
    } catch (err) {
      toast('照片处理失败');
      console.error(err);
    }
    e.target.value = '';
  };
  $('#photo-remove-btn').onclick = () => {
    state.pendingPhoto = null;
    $('#photo-preview').classList.add('hidden');
    $('#photo-add-btn').classList.remove('hidden');
    $('#photo-preview-img').src = '';
  };
  $('#modal-submit').onclick = submitCheckin;
}

async function submitCheckin() {
  const custom = $('#input-exercise-custom').value.trim();
  const exercise = custom || state.selectedExercise;
  const duration = parseInt($('#input-duration').value, 10);
  const note = $('#input-note').value.trim();
  if (!exercise) { toast('选一个项目或写点什么'); return; }
  if (!Number.isFinite(duration) || duration < CFG.minDuration) {
    toast(`至少 ${CFG.minDuration} 分钟哦`);
    return;
  }

  // 关闭弹窗 + 显示进行中
  closeModal();
  toast('提交中…', 1500);

  // 有照片先上传 Storage
  let photoUrl = null;
  if (state.pendingPhoto) {
    try {
      photoUrl = await cloud.uploadPhoto(state.pendingPhoto);
    } catch (e) {
      console.error(e);
      toast('照片上传失败,但打卡照常记');
    }
  }

  const entry = {
    nickname: state.user.nickname,
    groupCode: CFG.groupCode,
    exerciseType: exercise,
    durationMin: duration,
    note,
    photo: photoUrl,
    createdAt: new Date().toISOString(),
  };
  try {
    const saved = await cloud.insertCheckin(entry);
    state.checkins.push(saved);
    state.pendingPhoto = null;
    renderAll();
    toast('记住了');
  } catch (e) {
    console.error(e);
    toast('云端提交失败,请检查网络后重试');
  }
}

/* ========== Me tab (settings) ========== */
function bindMeTab() {
  $('#save-settings').onclick = async () => {
    const newNick = $('#setting-nickname').value.trim();
    const newGoal = parseInt($('#setting-goal').value, 10);
    if (!newNick) { toast('昵称不能空'); return; }
    if (!Number.isFinite(newGoal) || newGoal < 1 || newGoal > 14) {
      toast('每周目标 1~14 之间');
      return;
    }
    if (newNick !== state.user.nickname) {
      // MVP 阶段不支持改昵称:改了会牵连历史打卡/点赞/评论的作者字段,复杂度大
      // 想改名 → 清空退出重新登录
      toast('要换昵称的话,点「清空并退出」重登');
      $('#setting-nickname').value = state.user.nickname;
      return;
    }
    state.user = { ...state.user, weeklyGoal: newGoal };
    store.saveUser(state.user);
    try {
      await cloud.upsertUser(state.user);
      renderAll();
      toast('已保存');
    } catch (e) {
      console.error(e);
      toast('云端同步失败,本地已保存');
    }
  };

  $('#leave-btn').onclick = async () => {
    const now = new Date();
    const wMonday = weekStart(now);
    const wMondayKey = ymdKey(wMonday);
    const wYm = ymKey(wMonday);
    if (state.leaves.some((l) => l.nickname === state.user.nickname && l.yearMonth === wYm)) {
      toast('本月已请过一次');
      return;
    }
    if (!confirm('把本周设为请假?本月只有这一次机会,本周目标将设为 0。')) return;
    const tmpId = 'tmp_' + Date.now();
    const tmp = {
      id: tmpId,
      nickname: state.user.nickname,
      groupCode: CFG.groupCode,
      weekMondayKey: wMondayKey,
      yearMonth: wYm,
      createdAt: new Date().toISOString(),
    };
    state.leaves.push(tmp);
    renderAll();
    try {
      const saved = await cloud.insertLeave(tmp);
      const i = state.leaves.findIndex((l) => l.id === tmpId);
      if (i >= 0) state.leaves[i] = saved;
      toast('本周请假 · 好好休息');
    } catch (e) {
      console.error(e);
      state.leaves = state.leaves.filter((l) => l.id !== tmpId);
      renderAll();
      toast('请假登记失败');
    }
  };

  $('#seed-demo').onclick = () => {
    if (!confirm('生成演示数据?演示数据只在本机内存,刷新页面就消失,不会污染真实群友的账号。')) return;
    seedDemoData();
    renderAll();
    toast('演示数据已生成 · 刷新页面即恢复真实数据');
  };

  $('#logout').onclick = () => {
    if (!confirm('清空本机身份并退出?云端数据不会被删,同昵称重新登录可以拿回。')) return;
    [KEY_AUTH, KEY_USER, KEY_PHOTO_MODE].forEach((k) => localStorage.removeItem(k));
    location.reload();
  };

  $$('.mode-chip').forEach((chip) => {
    chip.onclick = () => {
      state.photoMode = chip.dataset.mode;
      localStorage.setItem(KEY_PHOTO_MODE, state.photoMode);
      applyPhotoMode();
      renderMeTab();
    };
  });
}

function seededHash(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickDaysDeterministic(seedStr, n) {
  const pool = [0, 1, 2, 3, 4, 5, 6];
  let h = seededHash(seedStr);
  const picked = [];
  for (let i = 0; i < n && pool.length > 0; i++) {
    h = Math.imul(h ^ (i + 1), 16777619) >>> 0;
    const idx = h % pool.length;
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked.sort((a, b) => a - b);
}

function seedDemoData() {
  const now = new Date();
  const wsThis = weekStart(now);
  const meNick = state.user.nickname;

  const others = [
    { nickname: '小夏', weeklyGoal: 3, createdAt: new Date(now.getTime() - 42 * 86400000).toISOString() },
    { nickname: '阿丁', weeklyGoal: 2, createdAt: new Date(now.getTime() - 42 * 86400000).toISOString() },
    { nickname: '青野', weeklyGoal: 4, createdAt: new Date(now.getTime() - 42 * 86400000).toISOString() },
  ];
  state.others = others;

  // Density: 6 weeks ago -> this week (0 = 请假一整周)
  // Photos: 稀疏,只在少数几条历史打卡上加一张,让效果看得见但不喧宾
  const profiles = {
    [meNick]: {
      exercises: ['练背', '练胸', '练腿', '跑步', '瑜伽', '游泳'],
      density: [2, 3, 2, 2, 3, 2],
      notes: {
        '-5_0': '第一次记录,试试看。',
        '-4_2': '腿抖了半小时。',
        '-2_2': '',
        '-1_2': '沿江跑,风好大。',
      },
      photos: {},
    },
    '小夏': {
      exercises: ['瑜伽', '跑步', '力量', 'HIIT'],
      density: [3, 3, 0, 3, 3, 3],
      notes: {
        '-4_1': '流汗如淋浴。',
        '-2_0': '恢复了。',
        '-1_5': '这周状态好。',
      },
      photos: {
        '-4_1': 0,
        '-1_5': 2,
      },
    },
    '阿丁': {
      exercises: ['游泳', '骑行', '跑步'],
      density: [2, 1, 2, 2, 1, 2],
      notes: {
        '-5_2': '仰泳 20 圈。',
        '-1_3': '慢慢来。',
      },
      photos: {
        '-5_2': 1,
      },
    },
    '青野': {
      exercises: ['骑行', '跑步', '练腿', '力量'],
      density: [3, 4, 3, 4, 3, 3],
      notes: {
        '-5_0': '沿江 30km',
        '-4_2': '深蹲 4 组',
        '-2_5': '半马 · 累但爽。',
      },
      photos: {
        '-5_0': 2,
        '-2_5': 3,
      },
    },
  };

  state.checkins = state.checkins.filter((c) => !c.id.startsWith('demo_'));
  state.leaves = state.leaves.filter((l) => !l.id || !l.id.startsWith('demo_leave_'));

  const myThisWeek = state.checkins.some(
    (c) => c.nickname === meNick && new Date(c.createdAt) >= wsThis
  );

  const newCheckins = [];
  const newLeaves = [];

  Object.entries(profiles).forEach(([nick, prof]) => {
    for (let wOff = -5; wOff <= 0; wOff++) {
      const wIdx = wOff + 5;
      const density = prof.density[wIdx];
      const wMonday = new Date(wsThis.getTime() + wOff * 7 * 86400000);

      if (density === 0) {
        newLeaves.push({
          id: `demo_leave_${nick}_${wOff}`,
          nickname: nick,
          weekMondayKey: ymdKey(wMonday),
          yearMonth: ymKey(wMonday),
          createdAt: new Date(wMonday.getTime() + 20 * 3600000).toISOString(),
        });
        continue;
      }
      // 不覆盖当前用户本周已经真实打过的记录
      if (nick === meNick && wOff === 0 && myThisWeek) continue;

      const dayOffs = pickDaysDeterministic(nick + '|' + wOff, density);
      dayOffs.forEach((dOff, i) => {
        const dt = new Date(wMonday.getTime() + dOff * 86400000 + (18 + i * 2) * 3600000);
        const h = seededHash(nick + '|' + wOff + '|' + dOff);
        const ex = prof.exercises[h % prof.exercises.length];
        const dur = 45 + (h % 4) * 15;
        const key = `${wOff}_${dOff}`;
        const note = prof.notes[key] || '';
        const photoIdx = prof.photos && prof.photos[key];
        const photo = (photoIdx != null && DEMO_PHOTOS[photoIdx]) ? DEMO_PHOTOS[photoIdx] : null;
        newCheckins.push({
          id: `demo_${nick}_${wOff}_${dOff}`,
          nickname: nick,
          exerciseType: ex,
          durationMin: dur,
          note,
          photo,
          createdAt: dt.toISOString(),
        });
      });
    }
  });

  state.checkins.push(...newCheckins);
  state.leaves.push(...newLeaves);

  // 生成假的点赞和评论(deterministic,基于 seededHash)
  state.likes = state.likes.filter((l) => !l.id || !l.id.startsWith('demo_'));
  state.comments = state.comments.filter((c) => !c.id || !c.id.startsWith('demo_'));

  const allNicks = [meNick, '小夏', '阿丁', '青野'];
  const commentPool = [
    '加油', '厉害', '这个节奏稳', '一起打', '状态好',
    '慢慢来', '打卡收到', '腿要练爆了', '有内味儿了', '这周稳',
  ];
  const newLikes = [];
  const newComments = [];

  newCheckins.forEach((c) => {
    const h = seededHash('social|' + c.id);
    const eligibleLike = allNicks.filter((n) => n !== c.nickname);
    const likeCount = h % 4;  // 0-3
    for (let i = 0; i < likeCount && eligibleLike.length > 0; i++) {
      const idx = (h >>> (i * 3)) % eligibleLike.length;
      const nick = eligibleLike.splice(idx, 1)[0];
      newLikes.push({
        id: `demo_lk_${c.id}_${i}`,
        checkinId: c.id,
        nickname: nick,
        createdAt: new Date(new Date(c.createdAt).getTime() + (i + 1) * 3600 * 1000).toISOString(),
      });
    }
    const eligibleCm = allNicks.filter((n) => n !== c.nickname);
    const commentCount = (h >>> 12) % 3;  // 0-2
    for (let i = 0; i < commentCount && eligibleCm.length > 0; i++) {
      const idx = (h >>> (16 + i * 4)) % eligibleCm.length;
      const nick = eligibleCm.splice(idx, 1)[0];
      const content = commentPool[(h >>> (24 + i * 2)) % commentPool.length];
      newComments.push({
        id: `demo_cm_${c.id}_${i}`,
        checkinId: c.id,
        nickname: nick,
        content,
        createdAt: new Date(new Date(c.createdAt).getTime() + (i + 2) * 3600 * 1000).toISOString(),
      });
    }
  });

  state.likes.push(...newLikes);
  state.comments.push(...newComments);
}

/* ========== Demo SVG photos (inline, no network needed) ========== */
const DEMO_PHOTOS = [
  // 0 · 晨光:夜色渐入海青,一轮月/日
  'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2332"/><stop offset="0.62" stop-color="#2d8b8b"/><stop offset="1" stop-color="#a8dadc"/></linearGradient></defs><rect width="600" height="400" fill="url(#a)"/><circle cx="470" cy="130" r="42" fill="#f1faee" opacity="0.78"/></svg>'),
  // 1 · 水波:三层波浪,像泳池/晨湖
  'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice"><rect width="600" height="400" fill="#1a2332"/><path d="M0 220 C150 180,300 260,600 200 L600 400 L0 400 Z" fill="#2d8b8b"/><path d="M0 290 C150 250,300 330,600 270 L600 400 L0 400 Z" fill="#4fa7a7" opacity="0.72"/><path d="M0 360 C150 320,300 400,600 340 L600 400 L0 400 Z" fill="#a8dadc" opacity="0.55"/></svg>'),
  // 2 · 山影:远山剪影
  'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2d8b8b"/><stop offset="1" stop-color="#f1faee"/></linearGradient></defs><rect width="600" height="400" fill="url(#c)"/><polygon points="0,310 130,180 240,250 360,140 490,230 600,200 600,400 0,400" fill="#1a2332" opacity="0.72"/></svg>'),
  // 3 · 跑道:横向道线
  'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="d" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2332"/><stop offset="1" stop-color="#2d8b8b"/></linearGradient></defs><rect width="600" height="400" fill="url(#d)"/><line x1="0" y1="140" x2="600" y2="140" stroke="#a8dadc" stroke-width="1" opacity="0.5"/><line x1="0" y1="220" x2="600" y2="220" stroke="#f1faee" stroke-width="2" opacity="0.72"/><line x1="0" y1="300" x2="600" y2="300" stroke="#a8dadc" stroke-width="1" opacity="0.5"/></svg>'),
];
function compressImage(file, maxWidth = 900, quality = 0.72) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type || !file.type.startsWith('image/')) {
      reject(new Error('not an image'));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('read failed'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('image load failed'));
      img.onload = () => {
        try {
          const scale = Math.min(1, maxWidth / img.width);
          const w = Math.round(img.width * scale);
          const h = Math.round(img.height * scale);
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch (err) {
          reject(err);
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function bindPhotoViewer() {
  const viewer = $('#photo-viewer');
  viewer.onclick = () => viewer.classList.add('hidden');
}

function openPhotoViewer(src) {
  $('#photo-viewer-img').src = src;
  $('#photo-viewer').classList.remove('hidden');
}

/* ========== Person detail modal ========== */
function openPersonModal(nickname) {
  const person = collectAllUsers().find((u) => u.nickname === nickname);
  if (!person) return;

  const entries = state.checkins
    .filter((c) => c.nickname === nickname)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const now = new Date();
  const thisWk = weekKey(now);
  const lastWk = weekKey(new Date(now.getTime() - 7 * 86400000));

  const groups = {};
  entries.forEach((c) => {
    const wk = weekKey(new Date(c.createdAt));
    (groups[wk] = groups[wk] || []).push(c);
  });
  const keys = Object.keys(groups).sort().reverse();

  const bodyHtml = keys.length === 0
    ? '<div class="empty">还没有记录</div>'
    : keys.map((wk) => {
        const dt = new Date(wk + 'T00:00:00');
        let label;
        if (wk === thisWk) label = 'this week';
        else if (wk === lastWk) label = 'last week';
        else label = `week of ${dt.getMonth() + 1}/${dt.getDate()}`;
        return `<div class="week-group"><div class="week-group-header">${label}</div>${groups[wk].map(entryHtml).join('')}</div>`;
      }).join('');

  const isMe = nickname === state.user.nickname;
  $('#person-modal-name').textContent = nickname;
  $('#person-modal-meta').textContent = `每周目标 ${person.weeklyGoal} 次 · 共 ${entries.length} 条记录${isMe ? ' · 就是你' : ''}`;
  $('#person-modal-body').innerHTML = bodyHtml;
  $('#person-modal').classList.remove('hidden');
  state.openPersonNick = nickname;

  // 绑定 person modal 内的照片点击 + 反应/评论(bindEntryActions 是全局的, modal 里也生效)
  bindEntryActions();
  $$('#person-modal-body .entry-photo img').forEach((img) => {
    img.onclick = (e) => {
      e.stopPropagation();
      openPhotoViewer(img.src);
    };
  });
}

function closePersonModal() {
  $('#person-modal').classList.add('hidden');
  state.openPersonNick = null;
}

function refreshUI() {
  renderAll();
  if (state.openPersonNick) openPersonModal(state.openPersonNick);
}

function bindPersonModal() {
  $('#person-modal-close').onclick = closePersonModal;
  $('#person-modal').onclick = (e) => { if (e.target.id === 'person-modal') closePersonModal(); };
}

/* ========== Boot ========== */
document.addEventListener('DOMContentLoaded', () => {
  state.quoteIndex = Math.floor(Math.random() * QUOTES.length);
  bindGate();
  bindTabs();
  bindModal();
  bindMeTab();
  bindPhotoViewer();
  bindPersonModal();
  bootFromStorage();
});

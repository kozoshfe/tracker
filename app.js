const icons = {
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M21 15.5A8.5 8.5 0 1 1 8.5 3a6.7 6.7 0 0 0 12.5 12.5Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>',
  list: '<svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  bar: '<svg viewBox="0 0 24 24"><path d="M6 20V10M12 20V4M18 20v-7"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.65 8.94a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.88.34H9a1.7 1.7 0 0 0 1-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.88V9c.12.58.76 1 1.56 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z"/></svg>',
  dots: '<svg viewBox="0 0 24 24"><path d="M12 12h.01M19 12h.01M5 12h.01"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24"><path d="M6 7v10M18 7v10M2 9v6M22 9v6M6 12h12"/></svg>',
  ban: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.5 3 7.7 7 10 4-2.3 7-5.5 7-10V6l-7-3Z"/><path d="M12 8v5"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M20 4c-8 0-13 4.5-13 11a5 5 0 0 0 5 5c6.5 0 8-8 8-16Z"/><path d="M4 20c3-6 8-9 14-11"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M4 9h16"/><rect x="4" y="5" width="16" height="16" rx="2"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
};

const defaults = [
  { id: crypto.randomUUID(), type: 'goals', title: 'Заробляти 3000$ в місяць', color: 'purple', icon: 'target' },
  { id: crypto.randomUUID(), type: 'goals', title: 'Вага 88 кг', color: 'green', icon: 'dumbbell' },
  { id: crypto.randomUUID(), type: 'goals', title: 'Не їсти солодке і мучне', color: 'amber', icon: 'ban' },
  { id: crypto.randomUUID(), type: 'rules', title: 'Не пропускати тренування', color: 'purple', icon: 'shield' },
  { id: crypto.randomUUID(), type: 'rules', title: 'Не їсти сміття', color: 'green', icon: 'leaf' },
  { id: crypto.randomUUID(), type: 'rules', title: 'Працювати кожен день', color: 'orange', icon: 'calendar' },
  { id: crypto.randomUUID(), type: 'rules', title: 'Не витрачати час даремно', color: 'blue', icon: 'clock' },
];

const copy = {
  appTitle: 'Мої цілі',
  goals: 'Цілі',
  rules: 'Правила',
  list: 'Список',
  stats: 'Статистика',
  settings: 'Налаштування',
  mainNav: 'Основна навігація',
  tabsNav: 'Тип списку',
  lightTheme: 'Світла тема',
  themeHint: 'Перемикай вигляд одним натисканням',
  fontSize: 'Розмір шрифту',
  fontSizeHint: 'Від меншого до більшого',
  sleepPoints: 'днів підряд',
  syncLocal: 'Локальне збереження',
  syncReady: 'Синхронізація увімкнена',
  syncSaved: 'Збережено в Supabase',
  syncLoading: 'Завантажую з Supabase',
  syncError: 'Supabase недоступний',
  syncNeedsLogin: 'Увійди, щоб синхронізувати',
  syncLoggedIn: 'Вхід активний',
  syncInvalidRedirect: 'Додай localhost у Redirect URLs в Supabase',
  syncEmailDisabled: 'Увімкни Email auth у Supabase',
  syncBadRequest: 'Перевір налаштування Supabase',
  syncNeedHttp: 'Відкрий додаток через localhost, не через file://',
  authNeedCredentials: 'Введи email і пароль',
  authLoginError: 'Помилка входу',
  installIos: 'На iPhone: Поділитися -> На екран Додому',
  installUnavailable: 'Відкрий сайт через HTTPS у Chrome або Safari',
  installOpen: 'Додаток вже встановлено',
  installReady: 'Можна встановити як додаток',
  installAndroidSteps: 'На Android відкрий меню браузера і вибери "Install app" або "Додати на головний екран".',
  item: 'Пункт',
  title: 'Назва',
  section: 'Розділ',
  color: 'Колір',
  delete: 'Видалити',
  save: 'Зберегти',
  add: 'Додати пункт',
  theme: 'Змінити тему',
  close: 'Закрити',
  colors: ['Фіолетовий', 'Зелений', 'Жовтий', 'Помаранчевий', 'Синій'],
};

const storageKey = 'goals-pwa-state';
const state = loadState();
const els = {
  list: document.querySelector('.list'),
  appShell: document.getElementById('appShell'),
  authScreen: document.getElementById('authScreen'),
  tabs: document.querySelector('.tabs'),
  tabButtons: document.querySelectorAll('.tab'),
  navButtons: document.querySelectorAll('.nav-item'),
  add: document.querySelector('.add-button'),
  dialog: document.querySelector('.editor'),
  form: document.querySelector('.editor-card'),
  delete: document.querySelector('.delete-item'),
  themeToggle: document.querySelector('.theme-toggle'),
  themeSwitch: document.querySelector('.theme-switch'),
  fontSizeButtons: document.querySelectorAll('[data-font-size]'),
  sleepCalendar: document.querySelector('.sleep-calendar'),
  sleepMonth: document.querySelector('.sleep-month'),
  sleepStreakNumber: document.querySelector('.sleep-streak-number'),
  sleepStreakText: document.querySelector('.sleep-streak-text'),
  syncStatus: document.querySelector('.sync-status'),
  authForm: document.querySelector('.auth-form'),
  authEmail: document.getElementById('simpleLogin'),
  authPassword: document.getElementById('simplePassword'),
  authMessage: document.getElementById('simpleLoginMsg'),
  authLogout: document.querySelector('.auth-logout'),
  installButton: document.querySelector('.install-app'),
  installHint: document.querySelector('.install-hint'),
  statsView: document.querySelector('.stats-view'),
  settingsView: document.querySelector('.settings-view'),
};

let editingId = null;
let supabaseClient = null;
let syncTimer = null;
let isHydratingRemote = false;
let currentUser = null;
let deferredInstallPrompt = null;

document.querySelectorAll('[data-icon]').forEach((node) => {
  node.innerHTML = icons[node.dataset.icon] || '';
});

applyTheme();
applyCopy();
applyFontSize();
setupInstallPrompt();
recordBedtimeOpen();
render();
initSupabaseSync();

els.tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.activeTab = button.dataset.tab;
    saveState();
    render();
  });
});

els.navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.activeView = button.dataset.view;
    saveState();
    render();
  });
});

els.add.addEventListener('click', () => openEditor());
els.themeToggle.addEventListener('click', toggleTheme);
els.themeSwitch.addEventListener('click', toggleTheme);

els.fontSizeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.fontSize = button.dataset.fontSize;
    saveState();
    applyFontSize();
  });
});

els.authForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await authLogin();
});

els.authLogout.addEventListener('click', async () => {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
});

els.installButton.addEventListener('click', async () => {
  await handleInstallClick();
});

els.form.addEventListener('submit', (event) => {
  if (event.submitter?.value !== 'save') return;
  const data = Object.fromEntries(new FormData(els.form));
  const icon = data.type === 'rules' ? iconForRule(data.title) : iconForGoal(data.title);

  if (editingId) {
    state.items = state.items.map((item) => item.id === editingId ? { ...item, ...data, icon } : item);
  } else {
    state.items.unshift({ id: crypto.randomUUID(), title: data.title, type: data.type, color: data.color, icon });
    state.activeTab = data.type;
    state.activeView = 'list';
  }

  editingId = null;
  saveState();
  render();
});

els.delete.addEventListener('click', () => {
  if (!editingId) return;
  state.items = state.items.filter((item) => item.id !== editingId);
  editingId = null;
  els.dialog.close();
  saveState();
  render();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

window.addEventListener('focus', () => {
  recordBedtimeOpen();
  renderStats();
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    recordBedtimeOpen();
    renderStats();
  }
});

setInterval(() => {
  recordBedtimeOpen();
  renderStats();
}, 60_000);

function render() {
  els.tabButtons.forEach((button) => button.classList.toggle('active', button.dataset.tab === state.activeTab));
  els.navButtons.forEach((button) => button.classList.toggle('active', button.dataset.view === state.activeView));

  const isList = state.activeView === 'list';
  els.list.hidden = !isList;
  els.tabs.hidden = !isList;
  els.statsView.hidden = state.activeView !== 'stats';
  els.settingsView.hidden = state.activeView !== 'settings';

  if (isList) renderList();
  renderStats();
}

function renderList() {
  const items = state.items.filter((item) => item.type === state.activeTab);
  els.list.innerHTML = items.map((item) => `
    <button class="item-card" type="button" data-id="${item.id}">
      <span class="item-icon ${item.color}">${icons[item.icon] || icons.target}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <span class="item-menu">${icons.dots}</span>
    </button>
  `).join('');

  els.list.querySelectorAll('.item-card').forEach((card) => {
    card.addEventListener('click', () => openEditor(card.dataset.id));
  });
}

function renderStats() {
  renderSleepCalendar();
}

function showAuthScreen() {
  els.appShell.hidden = true;
  els.authScreen.hidden = false;
}

function showAppShell() {
  els.authScreen.hidden = true;
  els.appShell.hidden = false;
}

function openEditor(id) {
  const item = state.items.find((entry) => entry.id === id);
  editingId = item?.id || null;
  els.form.title.value = item?.title || '';
  els.form.type.value = item?.type || state.activeTab;
  els.form.color.value = item?.color || 'purple';
  els.delete.hidden = !item;
  els.dialog.showModal();
  els.form.title.focus();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applyTheme();
}

function applyTheme() {
  document.documentElement.classList.toggle('light', state.theme === 'light');
  document.querySelector('.theme-toggle span').innerHTML = icons[state.theme === 'light' ? 'sun' : 'moon'];
  els.themeSwitch.classList.toggle('is-on', state.theme === 'light');
  els.themeSwitch.setAttribute('aria-pressed', String(state.theme === 'light'));
  document.querySelector('meta[name="theme-color"]').setAttribute('content', state.theme === 'light' ? '#f6f6f8' : '#11121b');
}

function applyCopy() {
  document.documentElement.lang = 'uk';
  document.title = t('appTitle');
  document.querySelector('.app-shell').setAttribute('aria-label', t('appTitle'));
  document.querySelector('h1').textContent = t('appTitle');
  document.querySelector('.tabs').setAttribute('aria-label', t('tabsNav'));
  document.querySelector('.bottom-nav').setAttribute('aria-label', t('mainNav'));
  document.querySelector('[data-tab="goals"]').textContent = t('goals');
  document.querySelector('[data-tab="rules"]').textContent = t('rules');
  document.querySelector('[data-view="list"] small').textContent = t('list');
  document.querySelector('[data-view="list"]').setAttribute('aria-label', t('list'));
  document.querySelector('[data-view="stats"]').setAttribute('aria-label', t('stats'));
  document.querySelector('[data-view="settings"]').setAttribute('aria-label', t('settings'));
  document.querySelector('.add-button').setAttribute('aria-label', t('add'));
  document.querySelector('.add-button').setAttribute('title', t('add'));
  document.querySelector('.theme-toggle').setAttribute('aria-label', t('theme'));
  els.themeSwitch.setAttribute('aria-label', t('lightTheme'));
  document.querySelector('.font-size-options').setAttribute('aria-label', t('fontSize'));
  document.querySelector('.close-editor').setAttribute('aria-label', t('close'));
  document.querySelector('.editor-card h2').textContent = t('item');
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.sleepStreakText.textContent = t('sleepPoints');
  els.installHint.textContent = getInstallHintText();

  const labels = document.querySelectorAll('.editor-card label > span');
  labels[0].textContent = t('title');
  labels[1].textContent = t('section');
  labels[2].textContent = t('color');
  const typeOptions = els.form.type.options;
  typeOptions[0].textContent = t('goals');
  typeOptions[1].textContent = t('rules');
  [...els.form.color.options].forEach((option, index) => {
    option.textContent = t('colors')[index];
  });
  els.delete.textContent = t('delete');
  document.querySelector('.editor-card .primary-action').textContent = t('save');
}

function applyFontSize() {
  const size = ['10', '12', '14'].includes(String(state.fontSize)) ? String(state.fontSize) : '12';
  document.documentElement.style.setProperty('--content-font-size', `${size}px`);
  els.fontSizeButtons.forEach((button) => button.classList.toggle('active', button.dataset.fontSize === size));
}

function setupInstallPrompt() {
  updateInstallUi();

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallUi();
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    updateInstallUi();
  });
}

async function handleInstallClick() {
  if (isStandaloneMode()) {
    els.installHint.textContent = t('installOpen');
    window.alert(t('installOpen'));
    return;
  }

  if (deferredInstallPrompt) {
    await deferredInstallPrompt.prompt();
    deferredInstallPrompt = null;
    updateInstallUi();
    return;
  }

  els.installHint.textContent = getInstallHintText();
  window.alert(getInstallGuideText());
}

function updateInstallUi() {
  if (isStandaloneMode()) {
    els.installButton.hidden = true;
    els.installHint.textContent = t('installOpen');
    return;
  }

  els.installButton.hidden = false;
  els.installHint.textContent = getInstallHintText();
}

function getInstallHintText() {
  if (isStandaloneMode()) return t('installOpen');
  if (deferredInstallPrompt) return t('installReady');
  if (isIos()) return t('installIos');
  return t('installUnavailable');
}

function getInstallGuideText() {
  if (isStandaloneMode()) return t('installOpen');
  if (deferredInstallPrompt) return t('installReady');
  if (isIos()) return t('installIos');
  return t('installAndroidSteps');
}

function recordBedtimeOpen() {
  const now = new Date();
  const hour = now.getHours();
  let dateToMark = null;

  if (hour >= 21) {
    dateToMark = now;
  } else if (hour <= 3) {
    dateToMark = addDays(now, -1);
  }

  if (!dateToMark) return;

  if (state.bedtimeOpens[dateKey(dateToMark)]) return;
  state.bedtimeOpens[dateKey(dateToMark)] = true;
  saveState();
}

function renderSleepCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const todayKey = dateKey(now);
  const firstDay = new Date(year, month, 1);
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = new Intl.DateTimeFormat('uk-UA', { month: 'long' }).format(now);
  const cells = [];

  for (let i = 0; i < firstWeekday; i += 1) {
    cells.push('<span class="sleep-day empty"></span>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const key = dateKey(date);
    const isDone = Boolean(state.bedtimeOpens[key]);
    const isPast = key < todayKey;
    const isToday = key === todayKey;
    const status = isDone ? 'done' : isPast ? 'missed' : '';
    const label = isDone ? 'відкрито перед сном' : isPast ? 'пропущено' : 'сьогодні';
    cells.push(`<span class="sleep-day ${status} ${isToday ? 'today' : ''}" title="${day}: ${label}">${day}</span>`);
  }

  els.sleepMonth.textContent = monthName;
  els.sleepCalendar.innerHTML = cells.join('');
  els.sleepStreakNumber.textContent = countSleepStreak();
}

function countSleepStreak() {
  let cursor = state.bedtimeOpens[dateKey(new Date())] ? new Date() : addDays(new Date(), -1);
  let count = 0;

  while (state.bedtimeOpens[dateKey(cursor)]) {
    count += 1;
    cursor = addDays(cursor, -1);
  }

  return count;
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    return normalizeState();
  }

  try {
    return normalizeState(JSON.parse(saved));
  } catch {
    return normalizeState();
  }
}

function saveState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(storageKey, JSON.stringify(state));
  scheduleCloudSync();
}

function iconForGoal(title) {
  const text = title.toLowerCase();
  if (text.includes('вага') || text.includes('спорт')) return 'dumbbell';
  if (text.includes('солод') || text.includes('не ')) return 'ban';
  return 'target';
}

function iconForRule(title) {
  const text = title.toLowerCase();
  if (text.includes('трен')) return 'shield';
  if (text.includes('їсти') || text.includes('сміт')) return 'leaf';
  if (text.includes('час')) return 'clock';
  return 'calendar';
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[char]);
}

function t(key) {
  return copy[key] ?? key;
}

function initSupabaseSync() {
  const config = window.TRACKER_SUPABASE || {};
  if (window.location.protocol === 'file:') {
    showAuthScreen();
    setSyncStatus(t('syncNeedHttp'));
    if (els.authMessage) els.authMessage.textContent = t('syncNeedHttp');
    updateAuthUi();
    return;
  }
  if (!config.url || !config.anonKey || !window.supabase?.createClient) {
    showAppShell();
    setSyncStatus(t('syncLocal'));
    updateAuthUi();
    return;
  }

  supabaseClient = window.supabase.createClient(config.url, config.anonKey);
  setupAuth();
}

async function setupAuth() {
  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    await handleSession(data.session);
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      handleSession(session);
    });
  } catch (error) {
    console.warn('Supabase auth init failed', error);
    showAuthScreen();
    setSyncStatus(humanizeSupabaseError(error));
  }
}

async function handleSession(session) {
  currentUser = session?.user || null;
  updateAuthUi();

  if (!currentUser) {
    showAuthScreen();
    setSyncStatus(t('syncNeedsLogin'));
    return;
  }

  showAppShell();
  setSyncStatus(t('syncLoading'));
  await hydrateFromCloud();
}

async function authLogin() {
  if (!supabaseClient) {
    setSyncStatus(t('syncLocal'));
    return;
  }

  const email = els.authEmail.value.trim();
  const password = els.authPassword.value;
  if (els.authMessage) els.authMessage.textContent = '';

  if (!email || !password) {
    if (els.authMessage) els.authMessage.textContent = t('authNeedCredentials');
    return;
  }

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    const message = `${t('authLoginError')}: ${error.message}`;
    if (els.authMessage) els.authMessage.textContent = message;
    setSyncStatus(humanizeSupabaseError(error));
  }
}

async function hydrateFromCloud() {
  const config = getSupabaseConfig();
  if (!supabaseClient || !currentUser) return;

  try {
    const { data, error } = await supabaseClient
      .from(config.table)
      .select('state, updated_at')
      .eq('id', config.rowId)
      .maybeSingle();

    if (error) throw error;

    if (data?.state && isRemoteNewer(data.state.updatedAt || data.updated_at)) {
      isHydratingRemote = true;
      Object.assign(state, normalizeState(data.state));
      localStorage.setItem(storageKey, JSON.stringify(state));
      isHydratingRemote = false;
      applyTheme();
      applyCopy();
      applyFontSize();
      render();
    } else if (!data) {
      await syncToCloud();
    }

    setSyncStatus(t('syncReady'));
  } catch (error) {
    isHydratingRemote = false;
    console.warn('Supabase sync failed', error);
    setSyncStatus(humanizeSupabaseError(error));
  }
}

function scheduleCloudSync() {
  if (!supabaseClient || !currentUser || isHydratingRemote) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(syncToCloud, 600);
}

async function syncToCloud() {
  const config = getSupabaseConfig();
  if (!supabaseClient || !currentUser) return;

  try {
    const payload = {
      id: config.rowId,
      state: sanitizeStateForCloud(state),
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabaseClient.from(config.table).upsert(payload, { onConflict: 'id' });
    if (error) throw error;
    setSyncStatus(t('syncSaved'));
  } catch (error) {
    console.warn('Supabase save failed', error);
    setSyncStatus(humanizeSupabaseError(error));
  }
}

function getSupabaseConfig() {
  const config = window.TRACKER_SUPABASE || {};
  return {
    table: config.table || 'tracker_state',
    rowId: currentUser?.id || config.rowId || 'main',
  };
}

function updateAuthUi() {
  if (!els.authForm) return;
  const isConfigured = Boolean(supabaseClient);
  els.authScreen.hidden = !isConfigured && !currentUser;
  els.authEmail.disabled = Boolean(currentUser);
  els.authPassword.disabled = Boolean(currentUser);
  els.authLogout.hidden = !currentUser;
  if (currentUser?.email) {
    els.authEmail.value = currentUser.email;
    els.authPassword.value = '';
    if (els.authMessage) els.authMessage.textContent = '';
    setSyncStatus(t('syncLoggedIn'));
  } else {
    if (els.authMessage) els.authMessage.textContent = '';
  }
}

function normalizeState(value = {}) {
  return {
    items: structuredClone(defaults),
    activeTab: 'goals',
    activeView: 'list',
    theme: 'dark',
    fontSize: '12',
    bedtimeOpens: {},
    ...value,
  };
}

function sanitizeStateForCloud(value) {
  return {
    items: value.items,
    activeTab: value.activeTab,
    activeView: value.activeView,
    theme: value.theme,
    fontSize: value.fontSize,
    bedtimeOpens: value.bedtimeOpens,
    updatedAt: value.updatedAt,
  };
}

function isRemoteNewer(remoteUpdatedAt) {
  if (!remoteUpdatedAt) return false;
  if (!state.updatedAt) return true;
  return new Date(remoteUpdatedAt).getTime() > new Date(state.updatedAt).getTime();
}

function setSyncStatus(text) {
  if (els.syncStatus) els.syncStatus.textContent = text;
}

function humanizeSupabaseError(error) {
  const message = String(error?.message || error?.error_description || error || '').toLowerCase();
  if (message.includes('redirect') || message.includes('email_redirect_to')) return t('syncInvalidRedirect');
  if (message.includes('email provider') || message.includes('otp') || message.includes('email not confirmed')) return t('syncEmailDisabled');
  if (message.includes('invalid api key') || message.includes('bad request') || message.includes('fetch')) return t('syncBadRequest');
  return t('syncError');
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function isStandaloneMode() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function isIos() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

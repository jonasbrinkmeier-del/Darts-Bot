// ── CHECKOUT TABLE ────────────────────────────────────────
const CHECKOUTS = {
  170:['T20','T20','Bull'], 167:['T20','T19','Bull'], 164:['T20','T18','Bull'],
  161:['T20','T17','Bull'], 160:['T20','T20','D20'], 158:['T20','T20','D19'],
  157:['T20','T19','D20'], 156:['T20','T20','D18'], 155:['T20','T19','D19'],
  154:['T20','T18','D20'], 153:['T20','T19','D18'], 152:['T20','T20','D16'],
  151:['T20','T17','D20'], 150:['T20','T18','D18'], 149:['T20','T19','D16'],
  148:['T20','T16','D20'], 147:['T20','T17','D18'], 146:['T20','T18','D16'],
  145:['T20','T15','D20'], 144:['T20','T20','D12'], 143:['T20','T17','D16'],
  142:['T20','T14','D20'], 141:['T20','T19','D12'], 140:['T20','T16','D16'],
  139:['T20','T13','D20'], 138:['T20','T18','D12'], 137:['T20','T19','D10'],
  136:['T20','T20','D8'],  135:['T20','T17','D12'], 134:['T20','T14','D16'],
  133:['T20','T19','D8'],  132:['T20','T16','D12'], 131:['T20','T13','D16'],
  130:['T20','T18','D8'],  129:['T19','T16','D12'], 128:['T18','T14','D16'],
  127:['T20','T17','D8'],  126:['T19','T19','D6'],  125:['T20','T15','D10'],
  124:['T20','T16','D8'],  123:['T19','T16','D9'],  122:['T18','T18','D7'],
  121:['T20','T11','D14'], 120:['T20','S20','D20'], 119:['T19','T12','D13'],
  118:['T20','S18','D20'], 117:['T20','S17','D20'], 116:['T20','S16','D20'],
  115:['T20','S15','D20'], 114:['T20','S14','D20'], 113:['T20','S13','D20'],
  112:['T20','S12','D20'], 111:['T20','S11','D20'], 110:['T20','S10','D20'],
  109:['T20','S9','D20'],  108:['T20','S8','D20'],  107:['T20','S7','D20'],
  106:['T20','S6','D20'],  105:['T20','S5','D20'],  104:['T20','S4','D20'],
  103:['T20','S3','D20'],  102:['T20','S2','D20'],  101:['T20','S1','D20'],
  100:['T20','D20',null],  99:['T19','S10','D16'],  98:['T20','D19',null],
  97:['T19','D20',null],   96:['T20','D18',null],   95:['T19','D19',null],
  94:['T18','D20',null],   93:['T19','D18',null],   92:['T20','D16',null],
  91:['T17','D20',null],   90:['T18','D18',null],   89:['T19','D16',null],
  88:['T16','D20',null],   87:['T17','D18',null],   86:['T18','D16',null],
  85:['T15','D20',null],   84:['T20','D12',null],   83:['T17','D16',null],
  82:['T14','D20',null],   81:['T19','D12',null],   80:['T20','D10',null],
  79:['T13','D20',null],   78:['T18','D12',null],   77:['T19','D10',null],
  76:['T20','D8',null],    75:['T17','D12',null],   74:['T14','D16',null],
  73:['T19','D8',null],    72:['T16','D12',null],   71:['T13','D16',null],
  70:['T18','D8',null],    69:['T19','D6',null],    68:['T20','D4',null],
  67:['T17','D8',null],    66:['T10','D18',null],   65:['T19','D4',null],
  64:['T16','D8',null],    63:['T17','D6',null],    62:['T10','D16',null],
  61:['T15','D8',null],    60:['S20','D20',null],   59:['S19','D20',null],
  58:['S18','D20',null],   57:['S17','D20',null],   56:['T16','D4',null],
  55:['S15','D20',null],   54:['S14','D20',null],   53:['S13','D20',null],
  52:['S12','D20',null],   51:['S11','D20',null],   50:['Bull',null,null],
  49:['S9','D20',null],    48:['S16','D16',null],   47:['S15','D16',null],
  46:['S14','D16',null],   45:['S13','D16',null],   44:['S12','D16',null],
  43:['S11','D16',null],   42:['S10','D16',null],   41:['S9','D16',null],
  40:['D20',null,null],    39:['S7','D16',null],    38:['D19',null,null],
  37:['S5','D16',null],    36:['D18',null,null],    35:['S3','D16',null],
  34:['D17',null,null],    33:['S1','D16',null],    32:['D16',null,null],
  31:['S15','D8',null],    30:['D15',null,null],    29:['S13','D8',null],
  28:['D14',null,null],    27:['S11','D8',null],    26:['D13',null,null],
  25:['S9','D8',null],     24:['D12',null,null],    23:['S7','D8',null],
  22:['D11',null,null],    21:['S5','D8',null],     20:['D10',null,null],
  19:['S3','D8',null],     18:['D9',null,null],     17:['S1','D8',null],
  16:['D8',null,null],     15:['S7','D4',null],     14:['D7',null,null],
  13:['S5','D4',null],     12:['D6',null,null],     11:['S3','D4',null],
  10:['D5',null,null],     9:['S1','D4',null],      8:['D4',null,null],
  7:['S3','D2',null],      6:['D3',null,null],      5:['S1','D2',null],
  4:['D2',null,null],      3:['S1','D1',null],      2:['D1',null,null]
};

// ── BOGEY NUMBERS ─────────────────────────────────────────
const BOGEY_NUMBERS = [159,162,163,165,166,168,169];
const BOGEY_AVOID_T20 = new Set();
for (let s = 171; s <= 501; s++) {
  if (BOGEY_NUMBERS.includes(s - 60)) BOGEY_AVOID_T20.add(s);
}

// ── BOT PROFILES ──────────────────────────────────────────
const BOT_PROFILES = {
  'Club Player': {
    targetAvg: 70,
    doublePhases: {
      cold:   { accuracy:0.14, weight:0.25 },
      normal: { accuracy:0.33, weight:0.50 },
      hot:    { accuracy:0.54, weight:0.25 }
    },
    phaseTransitions: {
      cold:   { hit:{cold:0.30,normal:0.55,hot:0.15}, miss:{cold:0.55,normal:0.38,hot:0.07} },
      normal: { hit:{cold:0.10,normal:0.50,hot:0.40}, miss:{cold:0.35,normal:0.50,hot:0.15} },
      hot:    { hit:{cold:0.05,normal:0.30,hot:0.65}, miss:{cold:0.20,normal:0.45,hot:0.35} }
    },
    t20Distribution: [
      { label:'T20', number:20, multiplier:3, score:60, prob:0.45 },
      { label:'S20', number:20, multiplier:1, score:20, prob:0.22 },
      { label:'T5',  number:5,  multiplier:3, score:15, prob:0.12 },
      { label:'T1',  number:1,  multiplier:3, score:3,  prob:0.06 },
      { label:'S5',  number:5,  multiplier:1, score:5,  prob:0.07 },
      { label:'S1',  number:1,  multiplier:1, score:1,  prob:0.04 },
      { label:'D20', number:20, multiplier:2, score:40, prob:0.03 },
      { label:'Miss',number:0,  multiplier:0, score:0,  prob:0.01 }
    ],
    t19Distribution: [
      { label:'T19', number:19, multiplier:3, score:57, prob:0.45 },
      { label:'S19', number:19, multiplier:1, score:19, prob:0.22 },
      { label:'T7',  number:7,  multiplier:3, score:21, prob:0.12 },
      { label:'T3',  number:3,  multiplier:3, score:9,  prob:0.06 },
      { label:'S7',  number:7,  multiplier:1, score:7,  prob:0.07 },
      { label:'S3',  number:3,  multiplier:1, score:3,  prob:0.04 },
      { label:'D19', number:19, multiplier:2, score:38, prob:0.03 },
      { label:'Miss',number:0,  multiplier:0, score:0,  prob:0.01 }
    ]
  }
};

const ADJACENT = {
  20:[1,5],   1:[20,18], 18:[1,4],   4:[18,13], 13:[4,6],
  6:[13,10],  10:[6,15], 15:[10,2],  2:[15,17], 17:[2,3],
  3:[17,19],  19:[3,7],  7:[19,16],  16:[7,8],  8:[16,11],
  11:[8,14],  14:[11,9], 9:[14,12],  12:[9,5],  5:[12,20]
};

// ── SESSION ───────────────────────────────────────────────
let session = {
  mode:null, names:['',''], isBot:[false,false],
  format:'firstTo', formatValue:1, legsToWin:1,
  legsWon:[0,0], legStartPlayer:0
};

// ── BOT STATE ─────────────────────────────────────────────
let botState = { doublePhase:'normal', rethrowPending:false, rethrowIndex:0 };

// ── VISIT HISTORY (für visit-übergreifendes Undo) ─────────
let visitHistory = [];
let botVisitRestored = false; // verhindert Bot-Rethrow nach Undo einer Bot-Visit

// ── GAME ID — verhindert alte Bot-Timeouts nach Neustart ──
// Jedes neue Spiel bekommt eine neue ID. Bot-Timeouts prüfen
// ob ihre ID noch aktuell ist bevor sie ausführen.
let gameId = 0;
let pendingEndTurnId = null;
let pendingBotId = null;

// ── GAME STATE ────────────────────────────────────────────
let game = {
  scores:[501,501], turn:0, dartsThrown:0, dartScores:[],
  totalThrows:[0,0], totalScored:[0,0],
  pendingMultiplier:1, scoreAtTurnStart:501,
  inputLocked:false  // Punkt 5: blockiert Input während Bust/Finish-Delay
};

// ── SHOW MENU ─────────────────────────────────────────────
function showMenu() {
  gameId++; // Alle laufenden Bot-Timeouts ungültig machen
  const confirm = document.getElementById('menu-confirm');
  if (confirm) confirm.style.display = 'none';
  document.getElementById('screen-menu').style.display = 'flex';
  document.getElementById('screen-setup').style.display = 'none';
  document.getElementById('screen-game').style.display = 'none';
  document.getElementById('screen-gameover').style.display = 'none';
  document.getElementById('screen-stats').style.display = 'none';
}

// ── PENDING TURN HELPERS ─────────────────────────────────
function cancelPendingEndTurn() {
  if (pendingEndTurnId !== null) { clearTimeout(pendingEndTurnId); pendingEndTurnId = null; }
  game.inputLocked = false;
}

function cancelPendingBotThrow() {
  if (pendingBotId !== null) { clearTimeout(pendingBotId); pendingBotId = null; }
}

function scheduleEndTurn(bust, delayMs) {
  const capturedId = gameId;
  pendingEndTurnId = setTimeout(() => {
    pendingEndTurnId = null;
    if (capturedId !== gameId) return;
    endTurn(bust);
  }, delayMs);
}

// ── LIVE AVERAGE ─────────────────────────────────────────
function updateLiveAvg(who) {
  const scoredSoFar = game.dartScores.reduce((a,b) => a+b.score, 0);
  const totalT = game.totalThrows[who] + game.dartsThrown;
  if (totalT === 0) return;
  const avg = ((game.totalScored[who] + scoredSoFar) / totalT * 3).toFixed(1);
  document.getElementById(who === 0 ? 'block-p1' : 'block-p2')
    .querySelector('.player-avg').textContent = 'Avg: ' + avg;
}

// ── UNDO LAST DART (shared) ───────────────────────────────
function undoLastDart() {
  const dart = game.dartScores.pop();
  game.dartsThrown--;
  if (dart) {
    if (dart.number > 0) {
      const h = game.dartHits[game.turn];
      if (h[dart.label]) { h[dart.label]--; if (!h[dart.label]) delete h[dart.label]; }
      const lh = game.legDartHits[game.turn];
      if (lh[dart.label]) { lh[dart.label]--; if (!lh[dart.label]) delete lh[dart.label]; }
    }
    if (dart.isCheckoutAttempt) {
      game.checkoutAttempts[game.turn] = Math.max(0, game.checkoutAttempts[game.turn] - 1);
      game.legCheckoutAttempts[game.turn] = Math.max(0, game.legCheckoutAttempts[game.turn] - 1);
    }
  }
  const slot = document.getElementById('dart-' + (game.dartsThrown + 1));
  slot.innerHTML = '—';
  slot.classList.remove('filled');
  slot.style.borderColor = '';
  slot.style.color = '';
  game.inputLocked = false;
  resetMultiplierUI();
  updateLiveScore();
  updateLiveAvg(game.turn);
  updateCheckout();
  updateActiveSlot();
}

// ── FORMAT SELECTION ─────────────────────────────────────
function setFormat(type, value) {
  session.format = type;
  session.formatValue = value;
  document.querySelectorAll('.format-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.format-btn[data-type="${type}"][data-value="${value}"]`);
  if (btn) btn.classList.add('active');
}

// ── LEG CIRCLES ──────────────────────────────────────────
function updateLegCircles() {
  [0,1].forEach(p => {
    const el = document.getElementById('leg-circles-p' + (p+1));
    if (!el) return;
    if (session.legsToWin <= 1) { el.innerHTML = ''; return; }
    let html = '';
    for (let i = 0; i < session.legsToWin; i++) {
      html += `<span class="leg-dot${i < session.legsWon[p] ? ' won' : ''}"></span>`;
    }
    el.innerHTML = html;
  });
}

// ── SCREENS ───────────────────────────────────────────────
function showModeSetup(mode) {
  session.mode = mode;
  document.getElementById('screen-menu').style.display = 'none';
  document.getElementById('screen-setup').style.display = 'flex';
  document.querySelectorAll('.format-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.format-btn[data-type="${session.format}"][data-value="${session.formatValue}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  const p2label = document.getElementById('setup-p2-label');
  const p2options = document.getElementById('setup-p2-options');
  if (mode === 'bot') {
    p2label.textContent = 'OPPONENT (BOT)';
    p2options.innerHTML = `
      <div class="bot-profile-box">
        <span class="bot-profile-name">Club Player</span>
        <span class="bot-profile-avg">~70 avg</span>
      </div>
      <button class="saved-btn disabled">
        <span>More bot profiles</span>
        <span class="coming-soon">Coming soon</span>
      </button>`;
  } else {
    p2label.textContent = 'PLAYER 2';
    p2options.innerHTML = `
      <div class="setup-input-row">
        <input type="text" id="input-p2" placeholder="Enter name…" maxlength="12" />
      </div>
      <button class="saved-btn disabled">
        <span>Saved players</span>
        <span class="coming-soon">Coming soon</span>
      </button>`;
  }
}

function startGame() {
  const p1name = document.getElementById('input-p1').value.trim() || 'Player 1';
  let p2name;
  if (session.mode === 'bot') {
    p2name = 'Club Player'; session.isBot = [false,true];
  } else {
    p2name = (document.getElementById('input-p2')?.value.trim()) || 'Player 2';
    session.isBot = [false,false];
  }
  session.names = [p1name, p2name];
  session.legsToWin = session.format === 'firstTo'
    ? session.formatValue
    : Math.ceil(session.formatValue / 2);
  session.legsWon = [0, 0];
  session.legStats = [];

  document.getElementById('label-p1').textContent = p1name;
  document.getElementById('label-p2').textContent = p2name;
  document.getElementById('block-p1').querySelector('.player-avg').textContent = 'Avg: —';
  document.getElementById('block-p2').querySelector('.player-avg').textContent = 'Avg: —';

  game = {
    scores:[501,501], turn:0, dartsThrown:0, dartScores:[],
    totalThrows:[0,0], totalScored:[0,0],
    pendingMultiplier:1, scoreAtTurnStart:501,
    inputLocked:false,
    visits:[[],[]],
    checkoutAttempts:[0,0],
    checkoutHits:[0,0],
    dartHits:[{},{}],
    legVisits:[[],[]],
    legDartHits:[{},{}],
    legTotalScored:[0,0],
    legTotalThrows:[0,0],
    legCheckoutAttempts:[0,0],
    legCheckoutHits:[0,0]
  };

  updateLegCircles();

  document.getElementById('screen-setup').style.display = 'none';
  document.getElementById('screen-game').style.display = 'flex';

  startLeg(0);
}

function startLeg(startPlayer) {
  gameId++;
  cancelPendingEndTurn();
  cancelPendingBotThrow();
  session.legStartPlayer = startPlayer;

  game.scores = [501, 501];
  game.inputLocked = false;
  game.legVisits = [[], []];
  game.legDartHits = [{}, {}];
  game.legTotalScored = [0, 0];
  game.legTotalThrows = [0, 0];
  game.legCheckoutAttempts = [0, 0];
  game.legCheckoutHits = [0, 0];

  botState = { doublePhase:'normal', rethrowPending:false, rethrowIndex:0 };
  visitHistory = [];
  botVisitRestored = false;

  document.getElementById('score-p1').textContent = '501';
  document.getElementById('score-p2').textContent = '501';
  ['p1','p2'].forEach(p => {
    const d = document.getElementById('visit-darts-' + p);
    const s = document.getElementById('visit-score-' + p);
    if (d) d.textContent = '';
    if (s) s.textContent = '';
  });
  document.getElementById('turn-bar').style.background = '';
  document.getElementById('turn-bar').style.color = '';

  resetTurn();
  switchTurn(startPlayer);
}

// ── MULTIPLIER BUTTONS ────────────────────────────────────
function setMultiplier(mult) {
  if (game.inputLocked) return;
  if (session.isBot[game.turn]) return;
  if (game.dartsThrown >= 3) return;
  game.pendingMultiplier = game.pendingMultiplier === mult ? 1 : mult;
  updateMultiplierUI();
}

function updateMultiplierUI() {
  document.getElementById('btn-double').classList.toggle('active', game.pendingMultiplier === 2);
  document.getElementById('btn-treble').classList.toggle('active', game.pendingMultiplier === 3);
}

function resetMultiplierUI() {
  game.pendingMultiplier = 1;
  updateMultiplierUI();
  updateActiveSlot();
}

function updateActiveSlot() {
  ['dart-1','dart-2','dart-3'].forEach((id,i) => {
    const el = document.getElementById(id);
    el.classList.toggle('active-slot', i === game.dartsThrown && game.dartsThrown < 3 && !session.isBot[game.turn]);
  });
}

// ── ZAHL EINGEBEN ─────────────────────────────────────────
function enterNumber(num) {
  if (game.inputLocked) return;
  if (session.isBot[game.turn]) return;
  if (game.dartsThrown >= 3) return;
  if (num === 0) { registerDart(0,0,0,'Miss'); return; }
  const mult = game.pendingMultiplier;
  const score = num * mult;
  let label;
  if (num === 25 && mult === 2) label = 'Bull';
  else if (num === 25 && mult === 3) { shakeCurrent(); return; }
  else if (num === 25) label = '25';
  else if (mult === 1) label = 'S' + num;
  else if (mult === 2) label = 'D' + num;
  else label = 'T' + num;
  registerDart(num, mult, score, label);
}

// ── DART REGISTRIEREN ─────────────────────────────────────
function registerDart(number, multiplier, score, label) {
  const dart = { number, multiplier, score, label, isCheckoutAttempt: false };
  game.dartScores.push(dart);
  if (number > 0) {
    const h = game.dartHits[game.turn]; h[label] = (h[label]||0)+1;
    const lh = game.legDartHits[game.turn]; lh[label] = (lh[label]||0)+1;
  }
  const _rb = game.scoreAtTurnStart - game.dartScores.slice(0,-1).reduce((a,b)=>a+b.score,0);
  if (_rb >= 2 && CHECKOUTS[_rb]) {
    if (multiplier === 2 || label === 'Bull' || (score === 0 && _rb % 2 === 0 && _rb <= 50)) {
      dart.isCheckoutAttempt = true;
      game.checkoutAttempts[game.turn]++;
      game.legCheckoutAttempts[game.turn]++;
    }
  }
  game.dartsThrown++;
  updateLiveAvg(game.turn);
  const slot = document.getElementById('dart-' + game.dartsThrown);
  slot.innerHTML = `<span>${label}</span><span class="slot-label">${score}</span>`;
  slot.classList.add('filled');
  slot.classList.remove('active-slot');
  resetMultiplierUI();
  const scoreSoFar = game.dartScores.reduce((a,b) => a+b.score, 0);
  const remaining = game.scoreAtTurnStart - scoreSoFar;
  const validFinish = multiplier === 2 || label === 'Bull';
  const isBust = remaining < 0 || remaining === 1 || (remaining === 0 && !validFinish);
  if (isBust) {
    game.inputLocked = true;
    slot.style.borderColor = '#c0392b';
    slot.style.color = '#c0392b';
    scheduleEndTurn(true, game.dartsThrown >= 3 ? 2000 : 600);
    return;
  }
  if (remaining === 0) {
    game.inputLocked = true;
    updateLiveScore();
    scheduleEndTurn(false, 400);
    return;
  }
  updateLiveScore();
  updateCheckout();
  updateActiveSlot();
  if (game.dartsThrown >= 3) {
    game.inputLocked = true;
    scheduleEndTurn(false, 2000);
  }
}

// ── UNDO ABGESCHLOSSENE VISIT ─────────────────────────────
function undoLastVisit() {
  if (visitHistory.length === 0) return;

  cancelPendingEndTurn();
  cancelPendingBotThrow();

  const entry = visitHistory.pop();
  const who = entry.who;

  // dartHits und checkoutAttempts für alle Darts der Visit rückgängig
  for (const dart of entry.darts) {
    if (dart.number > 0) {
      const h = game.dartHits[who];
      if (h[dart.label]) { h[dart.label]--; if (!h[dart.label]) delete h[dart.label]; }
      const lh = game.legDartHits[who];
      if (lh[dart.label]) { lh[dart.label]--; if (!lh[dart.label]) delete lh[dart.label]; }
    }
    if (dart.isCheckoutAttempt) {
      game.checkoutAttempts[who] = Math.max(0, game.checkoutAttempts[who] - 1);
      game.legCheckoutAttempts[who] = Math.max(0, game.legCheckoutAttempts[who] - 1);
    }
  }

  // totalScored / totalThrows auf Vor-Visit-Zustand zurücksetzen
  game.totalScored[who] = entry.totalScoredBefore;
  game.totalThrows[who] = entry.totalThrowsBefore;
  game.legTotalScored[who] = entry.legTotalScoredBefore;
  game.legTotalThrows[who] = entry.legTotalThrowsBefore;

  // Letzten visits-Eintrag entfernen
  if (game.visits[who].length > 0) game.visits[who].pop();
  if (game.legVisits[who].length > 0) game.legVisits[who].pop();

  // Score und Turn-State wiederherstellen
  game.scores[who] = entry.scoreBefore;
  game.scoreAtTurnStart = entry.scoreBefore;
  game.dartScores = entry.darts.slice();
  game.dartsThrown = entry.darts.length;
  game.turn = who;
  game.pendingMultiplier = 1;
  game.inputLocked = false;

  // Score-Anzeige aktualisieren
  const scoreId = who === 0 ? 'score-p1' : 'score-p2';
  if (entry.bust) {
    document.getElementById(scoreId).textContent = entry.scoreBefore;
  } else {
    updateLiveScore();
  }

  // Turn-Indikatoren
  document.getElementById('block-p1').classList.toggle('active', who === 0);
  document.getElementById('block-p2').classList.toggle('active', who === 1);
  const isBot = session.isBot[who];
  document.getElementById('turn-text').textContent = isBot
    ? session.names[who] + ' is throwing…'
    : session.names[who] + ' — pick a number';

  // Dart-Slots mit alten Darts befüllen
  ['dart-1','dart-2','dart-3'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (i < entry.darts.length) {
      const d = entry.darts[i];
      el.innerHTML = `<span>${d.label}</span><span class="slot-label">${d.score}</span>`;
      el.classList.add('filled');
      el.classList.remove('active-slot');
      if (entry.bust && i === entry.darts.length - 1) {
        el.style.borderColor = '#c0392b';
        el.style.color = '#c0392b';
      } else {
        el.style.borderColor = '';
        el.style.color = '';
      }
    } else {
      el.innerHTML = '—';
      el.classList.remove('filled', 'active-slot');
      el.style.borderColor = '';
      el.style.color = '';
    }
  });

  // Last-Visit-Anzeige des Spielers leeren (vorherige Darts unbekannt)
  const dartsEl = document.getElementById('visit-darts-p' + (who + 1));
  const scoreEl = document.getElementById('visit-score-p' + (who + 1));
  if (dartsEl) dartsEl.textContent = '';
  if (scoreEl) scoreEl.textContent = '';

  updateMultiplierUI();
  updateActiveSlot();
  updateCheckout();
  updateAvg(who);
  updateLiveAvg(who);

  if (isBot) {
    // Kein neuer Bot-Wurf - stattdessen Timer damit Spieler ⌫ drücken oder abwarten kann
    botVisitRestored = true;
    scheduleEndTurn(entry.bust, 1500);
  }
}

// ── UNDO ──────────────────────────────────────────────────
function clearEntry() {
  // Sonderfall: Bot-Visit wurde gerade wiederhergestellt → nochmal ⌫ geht eine Visit weiter zurück
  if (botVisitRestored) {
    botVisitRestored = false;
    cancelPendingEndTurn();
    cancelPendingBotThrow();
    undoLastVisit();
    return;
  }
  if (game.dartsThrown === 0) {
    undoLastVisit();
    return;
  }
  cancelPendingEndTurn();
  cancelPendingBotThrow();
  undoLastDart();
  if (session.isBot[game.turn]) {
    const dartIndex = game.dartsThrown;
    const capturedId = gameId;
    pendingBotId = setTimeout(() => {
      pendingBotId = null;
      if (capturedId !== gameId) return;
      throwBotDart(BOT_PROFILES['Club Player'], dartIndex, false);
    }, 2500);
  }
}

// ── LIVE SCORE ────────────────────────────────────────────
function updateLiveScore() {
  const scored = game.dartScores.reduce((a,b) => a+b.score, 0);
  const remaining = game.scoreAtTurnStart - scored;
  const id = game.turn === 0 ? 'score-p1' : 'score-p2';
  document.getElementById(id).textContent = Math.max(0, remaining);
}

// ── CHECKOUT ──────────────────────────────────────────────
function updateCheckout() {
  const scored = game.dartScores.reduce((a,b) => a+b.score, 0);
  const remaining = game.scoreAtTurnStart - scored;
  const dartsLeft = 3 - game.dartsThrown;
  const bar = document.getElementById('checkout-bar');
  const text = document.getElementById('checkout-text');
  if (!bar) return;
  if (session.isBot[game.turn]) { bar.style.display='none'; return; }
  if (remaining <= 170 && remaining >= 2 && CHECKOUTS[remaining]) {
    const route = CHECKOUTS[remaining].filter(d => d !== null);
    if (route.length <= dartsLeft) {
      text.textContent = route.join('  ·  ');
      bar.style.display = 'flex';
      return;
    }
  }
  bar.style.display = 'none';
}

// ── LAST VISIT ────────────────────────────────────────────
function updateLastVisit(who, darts) {
  const total = darts.reduce((a,b) => a+b.score, 0);
  const labels = darts.map(d => d.label).join('·');
  const dartsEl = document.getElementById('visit-darts-p' + (who + 1));
  const scoreEl = document.getElementById('visit-score-p' + (who + 1));
  if (!dartsEl || !scoreEl) return;
  dartsEl.textContent = labels;
  scoreEl.textContent = total;
}

// ── END TURN ──────────────────────────────────────────────
function endTurn(bust) {
  botVisitRestored = false;
  botState.rethrowPending = false;
  pendingEndTurnId = null;
  const who = game.turn;

  // Snapshot vor den Stat-Änderungen (für visit-übergreifendes Undo)
  const visitSnapshot = {
    who,
    darts: game.dartScores.map(d => ({...d})),
    scoreBefore: game.scoreAtTurnStart,
    bust,
    totalScoredBefore: game.totalScored[who],
    totalThrowsBefore: game.totalThrows[who],
    legTotalScoredBefore: game.legTotalScored[who],
    legTotalThrowsBefore: game.legTotalThrows[who]
  };

  if (bust) {
    game.totalThrows[who] += game.dartsThrown;
    game.legTotalThrows[who] += game.dartsThrown;
    updateAvg(who);
    updateLastVisit(who, game.dartScores);
    const id = who === 0 ? 'score-p1' : 'score-p2';
    document.getElementById(id).textContent = game.scoreAtTurnStart;
    game.scores[who] = game.scoreAtTurnStart;
    game.visits[who].push(0);
    game.legVisits[who].push(0);
  } else {
    const total = game.dartScores.reduce((a,b) => a+b.score, 0);
    const remaining = game.scoreAtTurnStart - total;
    game.scores[who] = remaining;
    game.totalScored[who] += total;
    game.totalThrows[who] += game.dartsThrown;
    game.legTotalScored[who] += total;
    game.legTotalThrows[who] += game.dartsThrown;
    updateAvg(who);
    updateLastVisit(who, game.dartScores);
    const id = who === 0 ? 'score-p1' : 'score-p2';
    document.getElementById(id).textContent = remaining;
    game.visits[who].push(total);
    game.legVisits[who].push(total);
  }
  if (game.scores[who] === 0) {
    game.checkoutHits[who]++;
    game.legCheckoutHits[who]++;
    endGame(who);
    return; // Gewinn-Visit nicht in visitHistory (undoFromGameover kümmert sich darum)
  }
  visitHistory.push(visitSnapshot);
  resetTurn();
  switchTurn(1 - who);
}

// ── SWITCH TURNS ──────────────────────────────────────────
function switchTurn(who) {
  game.turn = who;
  game.scoreAtTurnStart = game.scores[who];
  document.getElementById('block-p1').classList.toggle('active', who === 0);
  document.getElementById('block-p2').classList.toggle('active', who === 1);
  const name = session.names[who];
  const isBot = session.isBot[who];
  document.getElementById('turn-text').textContent = isBot
    ? name + ' is throwing…'
    : name + ' — pick a number';
  updateCheckout();
  updateActiveSlot();
  if (isBot) {
    const currentGameId = gameId;
    pendingBotId = setTimeout(() => {
      pendingBotId = null;
      if (currentGameId !== gameId) return;
      botThrowSequence();
    }, 1120);
  }
}

// ── RESET TURN ────────────────────────────────────────────
function resetTurn() {
  game.dartsThrown = 0;
  game.dartScores = [];
  game.pendingMultiplier = 1;
  game.inputLocked = false; // Punkt 5: Input freischalten
  ['dart-1','dart-2','dart-3'].forEach(id => {
    const el = document.getElementById(id);
    el.innerHTML = '—';
    el.classList.remove('filled','active-slot');
    el.style.borderColor = '';
    el.style.color = '';
  });
  resetMultiplierUI();
  document.getElementById('checkout-bar').style.display = 'none';
}

// ── BOT ZIELZONE ──────────────────────────────────────────
function getBotScoringZone(profile, remaining, dartsLeft, alreadySwitchedToT19) {
  if (remaining <= 170 && remaining >= 2 && CHECKOUTS[remaining]) {
    const route = CHECKOUTS[remaining].filter(d => d !== null);
    if (route.length <= dartsLeft) return 'checkout';
  }
  if (BOGEY_AVOID_T20.has(remaining)) return 't19';
  if (alreadySwitchedToT19) return 't19';
  if (game.dartScores.length > 0 && Math.random() < 0.25) {
    const lastDart = game.dartScores[game.dartScores.length - 1];
    if (lastDart.number === 1 || lastDart.number === 5) return 't19';
  }
  return 't20';
}

// ── BOT HAUPTSEQUENZ ──────────────────────────────────────
function botThrowSequence() {
  throwBotDart(BOT_PROFILES['Club Player'], 0, false);
}

function throwBotDart(profile, dartIndex, alreadySwitchedToT19) {
  const currentGameId = gameId;

  // Rubber band: subtle avg-based nudge on scoring distributions (never touches BOT_PROFILES)
  let t20Dist = profile.t20Distribution;
  let t19Dist = profile.t19Distribution;
  if (game.totalThrows[game.turn] > 9) {
    const currentAvg = (game.totalScored[game.turn] / game.totalThrows[game.turn]) * 3;
    const rawAdj = currentAvg > 82 ? -0.04 : currentAvg < 56 ? 0.04 : 0;
    if (rawAdj !== 0) {
      const adj = Math.sign(rawAdj) * Math.min(Math.abs(rawAdj), 0.06);
      const nudge = (dist, heroLabel) => dist.map(e => {
        if (e.label === heroLabel) return { ...e, prob: Math.max(0, e.prob + adj) };
        if (e.label === 'Miss')    return { ...e, prob: Math.max(0, e.prob - adj) };
        return e;
      });
      t20Dist = nudge(profile.t20Distribution, 'T20');
      t19Dist = nudge(profile.t19Distribution, 'T19');
    }
  }

  if (dartIndex >= 3) return;
  const scoredSoFar = game.dartScores.reduce((a,b) => a+b.score, 0);
  const remaining = game.scoreAtTurnStart - scoredSoFar;
  const dartsLeft = 3 - dartIndex;
  const zone = getBotScoringZone(profile, remaining, dartsLeft, alreadySwitchedToT19);
  const nowOnT19 = alreadySwitchedToT19 || zone === 't19';
  let isCheckoutAttempt = false;
  let result;
  if (zone === 'checkout') {
    const route = CHECKOUTS[remaining].filter(d => d !== null);
    const _tgt = route[0];
    if (_tgt[0] === 'D' || _tgt === 'Bull') {
      isCheckoutAttempt = true;
      game.checkoutAttempts[game.turn]++;
      game.legCheckoutAttempts[game.turn]++;
    }
    result = resolveFinishingDart(profile, _tgt);
  } else if (zone === 't19') {
    result = drawFromDistribution(t19Dist);
  } else {
    result = drawFromDistribution(t20Dist);
  }
  result.isCheckoutAttempt = isCheckoutAttempt;
  game.dartScores.push(result);
  if (result.number > 0) {
    const h = game.dartHits[game.turn]; h[result.label] = (h[result.label]||0)+1;
    const lh = game.legDartHits[game.turn]; lh[result.label] = (lh[result.label]||0)+1;
  }
  game.dartsThrown = dartIndex + 1;
  updateLiveAvg(game.turn);
  const slot = document.getElementById('dart-' + game.dartsThrown);
  slot.innerHTML = `<span>${result.label}</span><span class="slot-label">${result.score}</span>`;
  slot.classList.add('filled');
  const newScored = game.dartScores.reduce((a,b) => a+b.score, 0);
  const newRemaining = game.scoreAtTurnStart - newScored;
  const validFinish = result.multiplier === 2 || result.label === 'Bull';
  const isBust = newRemaining < 0 || newRemaining === 1 || (newRemaining === 0 && !validFinish);
  if (isBust) {
    slot.style.borderColor = '#c0392b';
    slot.style.color = '#c0392b';
    scheduleEndTurn(true, dartIndex + 1 >= 3 ? 2000 : 600);
    return;
  }
  const scoreId = game.turn === 0 ? 'score-p1' : 'score-p2';
  document.getElementById(scoreId).textContent = Math.max(0, newRemaining);
  if (newRemaining === 0) { scheduleEndTurn(false, 400); return; }
  if (dartIndex + 1 >= 3) { scheduleEndTurn(false, 2000); return; }
  const isCheckout = newRemaining <= 170 && CHECKOUTS[newRemaining] &&
    CHECKOUTS[newRemaining].filter(d => d !== null).length <= (3 - dartIndex - 1);
  const delay = isCheckout ? 2800 : 1680;
  pendingBotId = setTimeout(() => {
    pendingBotId = null;
    if (currentGameId !== gameId) return;
    throwBotDart(profile, dartIndex + 1, nowOnT19);
  }, delay);
}

// ── DISTRIBUTION DRAW ─────────────────────────────────────
function drawFromDistribution(distribution) {
  const rand = Math.random();
  let cumulative = 0;
  for (const entry of distribution) {
    cumulative += entry.prob;
    if (rand <= cumulative) {
      return { number:entry.number, multiplier:entry.multiplier, score:entry.score, label:entry.label };
    }
  }
  const last = distribution[distribution.length - 1];
  return { number:last.number, multiplier:last.multiplier, score:last.score, label:last.label };
}

// ── FINISHING DART ────────────────────────────────────────
function resolveFinishingDart(profile, targetStr) {
  const target = parseTarget(targetStr);
  const rand = Math.random();
  let accuracy;
  if (target.multiplier === 2 || targetStr === 'Bull') {
    accuracy = profile.doublePhases[botState.doublePhase].accuracy;
  } else if (target.multiplier === 3) {
    accuracy = 0.45;
  } else {
    accuracy = 0.82;
  }
  const hit = rand < accuracy;
  if (target.multiplier === 2 || targetStr === 'Bull') updateDoublePhase(profile, hit);
  if (hit) return buildDart(target.number, target.multiplier);
  const missRoll = Math.random();
  const adj = ADJACENT[target.number] || [20];
  const adjNum = adj[Math.floor(Math.random() * adj.length)];
  if (target.multiplier === 2) {
    if (missRoll < 0.50) return buildDart(target.number, 1);
    else if (missRoll < 0.72) return buildDart(adjNum, 2);
    else if (missRoll < 0.90) return buildDart(adjNum, 1);
    else return buildDart(0, 0);
  }
  if (target.multiplier === 3) {
    if (missRoll < 0.45) return buildDart(target.number, 1);
    else if (missRoll < 0.70) return buildDart(adjNum, 3);
    else if (missRoll < 0.92) return buildDart(adjNum, 1);
    else return buildDart(adjNum, 2);
  }
  return buildDart(adjNum, 1);
}

// ── DOUBLE PHASE ──────────────────────────────────────────
function updateDoublePhase(profile, hit) {
  const transitions = profile.phaseTransitions[botState.doublePhase];
  const probs = hit ? transitions.hit : transitions.miss;
  const rand = Math.random();
  let cumulative = 0;
  for (const [phase, prob] of Object.entries(probs)) {
    cumulative += prob;
    if (rand <= cumulative) { botState.doublePhase = phase; return; }
  }
}

// ── HILFSFUNKTIONEN ───────────────────────────────────────
function parseTarget(str) {
  if (str === 'Bull') return { number:25, multiplier:2 };
  if (str === '25')   return { number:25, multiplier:1 };
  const mult = str[0]==='T' ? 3 : str[0]==='D' ? 2 : 1;
  const num  = parseInt(str.slice(1));
  return { number:num, multiplier:mult };
}

function buildDart(number, multiplier) {
  const score = number * multiplier;
  let label;
  if (number === 0) label = 'Miss';
  else if (number === 25 && multiplier === 1) label = '25';
  else if (number === 25 && multiplier === 2) label = 'Bull';
  else if (multiplier === 1) label = 'S' + number;
  else if (multiplier === 2) label = 'D' + number;
  else label = 'T' + number;
  return { number, multiplier, score, label };
}

function updateAvg(who) {
  if (game.totalThrows[who] === 0) return;
  const avg = (game.totalScored[who] / game.totalThrows[who] * 3).toFixed(1);
  const block = document.getElementById(who === 0 ? 'block-p1' : 'block-p2');
  block.querySelector('.player-avg').textContent = 'Avg: ' + avg;
}

// ── GAME OVER ─────────────────────────────────────────────
function endGame(who) {
  session.legsWon[who]++;
  session.legStats.push({
    visits:         game.legVisits.map(a => [...a]),
    dartHits:       game.legDartHits.map(h => ({...h})),
    totalScored:    [...game.legTotalScored],
    totalThrows:    [...game.legTotalThrows],
    checkoutAttempts: [...game.legCheckoutAttempts],
    checkoutHits:   [...game.legCheckoutHits]
  });
  updateLegCircles();

  if (session.legsWon[who] >= session.legsToWin) {
    const avg = game.totalThrows[who] > 0
      ? (game.totalScored[who] / game.totalThrows[who] * 3).toFixed(1) : '—';
    document.getElementById('gameover-name').textContent = session.names[who];
    const matchLine = session.legsToWin > 1
      ? `${session.legsWon[0]} – ${session.legsWon[1]}<br>` : '';
    document.getElementById('gameover-stats').innerHTML =
      matchLine + 'Average: ' + avg + '<br>Darts thrown: ' + game.totalThrows[who];
    document.getElementById('screen-game').style.display = 'none';
    document.getElementById('screen-gameover').style.display = 'flex';
  } else {
    const capturedId = gameId;
    const nextStarter = 1 - session.legStartPlayer;
    document.getElementById('turn-text').textContent =
      session.names[who] + ' wins! ' + session.legsWon[0] + '–' + session.legsWon[1];
    document.getElementById('turn-bar').style.background = '#1a3a1a';
    document.getElementById('turn-bar').style.color = '#7ec87e';
    setTimeout(() => {
      if (capturedId !== gameId) return;
      startLeg(nextStarter);
    }, 1800);
  }
}

// ── UNDO VOM GAME OVER ────────────────────────────────────
// Punkt 3: Stats sauber zurücksetzen beim Undo
function undoFromGameover() {
  botState.rethrowPending = false;
  const who = game.turn;

  // Gesamte Visit erfassen VOR dem Pop (endTurn hatte die volle Visit gezählt)
  const visitTotal = game.dartScores.reduce((a,b) => a+b.score, 0);
  const visitDarts = game.dartsThrown;

  // Letzten Dart entfernen
  const lastDart = game.dartScores.pop();
  game.dartsThrown--;

  if (lastDart) {
    // Undo overall stats
    game.totalThrows[who] = Math.max(0, game.totalThrows[who] - visitDarts);
    game.totalScored[who] = Math.max(0, game.totalScored[who] - visitTotal);
    updateAvg(who);
    const h = game.dartHits[who];
    [...game.dartScores, lastDart].forEach(d => {
      if (d && d.number > 0 && h[d.label]) { h[d.label]--; if (!h[d.label]) delete h[d.label]; }
    });
    // Undo leg stats
    game.legTotalThrows[who] = Math.max(0, game.legTotalThrows[who] - visitDarts);
    game.legTotalScored[who] = Math.max(0, game.legTotalScored[who] - visitTotal);
    const lh = game.legDartHits[who];
    [...game.dartScores, lastDart].forEach(d => {
      if (d && d.number > 0 && lh[d.label]) { lh[d.label]--; if (!lh[d.label]) delete lh[d.label]; }
    });
    if (lastDart.isCheckoutAttempt) {
      game.checkoutAttempts[who] = Math.max(0, game.checkoutAttempts[who] - 1);
      game.legCheckoutAttempts[who] = Math.max(0, game.legCheckoutAttempts[who] - 1);
    }
  }
  if (game.visits[who].length > 0) game.visits[who].pop();
  if (game.legVisits[who].length > 0) game.legVisits[who].pop();
  game.checkoutHits[who] = Math.max(0, game.checkoutHits[who] - 1);
  game.legCheckoutHits[who] = Math.max(0, game.legCheckoutHits[who] - 1);
  if (session.legStats.length > 0) session.legStats.pop();
  session.legsWon[who] = Math.max(0, session.legsWon[who] - 1);
  updateLegCircles();

  game.scores[who] = game.scoreAtTurnStart;
  game.inputLocked = false;

  const slot = document.getElementById('dart-' + (game.dartsThrown + 1));
  slot.innerHTML = '—';
  slot.classList.remove('filled');
  slot.style.borderColor = '';
  slot.style.color = '';

  const id = who === 0 ? 'score-p1' : 'score-p2';
  document.getElementById(id).textContent = game.scoreAtTurnStart;

  document.getElementById('screen-gameover').style.display = 'none';
  document.getElementById('screen-game').style.display = 'flex';

  updateLiveScore();
  updateCheckout();
  updateActiveSlot();

  if (session.isBot[who]) {
    const dartIndex = game.dartsThrown;
    const currentGameId = gameId;
    botState.rethrowPending = true;
    botState.rethrowIndex = dartIndex;
    setTimeout(() => {
      if (currentGameId !== gameId) return;
      if (!botState.rethrowPending) return;
      if (game.dartsThrown !== botState.rethrowIndex) return;
      botState.rethrowPending = false;
      throwBotDart(BOT_PROFILES['Club Player'], dartIndex, false);
    }, 2520);
  }
}

// ── MENU CONFIRM ──────────────────────────────────────────
function confirmMenu() {
  document.getElementById('menu-confirm').style.display = 'flex';
}

function closeConfirm() {
  document.getElementById('menu-confirm').style.display = 'none';
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

let statsActiveTab = 0;

function showStats() {
  statsActiveTab = 0;
  buildStatsScreen();
  document.getElementById('screen-gameover').style.display = 'none';
  document.getElementById('screen-stats').style.display = 'flex';
}

function hideStats() {
  statsActiveTab = 0;
  document.getElementById('screen-stats').style.display = 'none';
  document.getElementById('screen-gameover').style.display = 'flex';
}

function selectStatsTab(idx) {
  statsActiveTab = idx;
  document.querySelectorAll('.stats-tab').forEach((btn, i) => btn.classList.toggle('active', i === idx));
  document.getElementById('stats-data-content').innerHTML = buildStatsHtml(getStatsTabs()[idx].data);
}

function getStatsTabs() {
  const overall = {
    visits: game.visits, dartHits: game.dartHits,
    totalScored: game.totalScored, totalThrows: game.totalThrows,
    checkoutAttempts: game.checkoutAttempts, checkoutHits: game.checkoutHits
  };
  const tabs = [{ label: 'Overall', data: overall }];
  session.legStats.forEach((ls, i) => tabs.push({ label: 'Leg ' + (i + 1), data: ls }));
  return tabs;
}

function buildStatsScreen() {
  const tabs = getStatsTabs();
  const tabsHtml = tabs.length > 1
    ? '<div class="stats-tabs">' +
      tabs.map((t, i) => `<button class="stats-tab${i === statsActiveTab ? ' active' : ''}" onclick="selectStatsTab(${i})">${escHtml(t.label)}</button>`).join('') +
      '</div>'
    : '';
  document.getElementById('stats-content').innerHTML = tabsHtml + '<div id="stats-data-content"></div>';
  document.getElementById('stats-data-content').innerHTML = buildStatsHtml(tabs[statsActiveTab].data);
}

function buildStatsHtml(data) {
  const stats = [0,1].map(p => {
    const v = data.visits[p];
    const avg = data.totalThrows[p] > 0
      ? (data.totalScored[p] / data.totalThrows[p] * 3).toFixed(1) : '—';
    const first3 = v.slice(0,3);
    const first9avg = first3.length > 0
      ? (first3.reduce((a,b)=>a+b,0) / first3.length).toFixed(1) : '—';
    const best = v.length > 0 ? Math.max(...v) : '—';
    const n = v.length;
    const pct = x => n > 0 ? Math.round(x/n*100) : 0;
    const c60m  = v.filter(s=>s<60).length;
    const c60p  = v.filter(s=>s>=60&&s<100).length;
    const c100p = v.filter(s=>s>=100&&s<140).length;
    const c140p = v.filter(s=>s>=140).length;
    const co = data.checkoutAttempts[p], ch = data.checkoutHits[p];
    const coStr = co > 0 ? `${ch}/${co} (${Math.round(ch/co*100)}%)` : '—';
    return { avg, first9avg, best,
      c60m, p60m:pct(c60m), c60p, p60p:pct(c60p),
      c100p, p100p:pct(c100p), c140p, p140p:pct(c140p), coStr };
  });
  const [s0,s1] = stats;
  return `
    <div class="stats-names-row">
      <div class="stats-player-name">${escHtml(session.names[0])}</div>
      <div class="stats-player-name">${escHtml(session.names[1])}</div>
    </div>
    <div class="stats-grid">
      <div class="sv gold">${s0.avg}</div><div class="sk">AVG</div><div class="sv gold">${s1.avg}</div>
      <div class="sv">${s0.first9avg}</div><div class="sk">FIRST&nbsp;9</div><div class="sv">${s1.first9avg}</div>
      <div class="sv">${s0.best}</div><div class="sk">BEST</div><div class="sv">${s1.best}</div>
    </div>
    <div class="stats-section-label">SCORE DISTRIBUTION</div>
    <div class="stats-grid">
      <div class="sv-d">${s0.c60m}x / ${s0.p60m}%</div><div class="sk">60−</div><div class="sv-d">${s1.c60m}x / ${s1.p60m}%</div>
      <div class="sv-d">${s0.c60p}x / ${s0.p60p}%</div><div class="sk">60+</div><div class="sv-d">${s1.c60p}x / ${s1.p60p}%</div>
      <div class="sv-d">${s0.c100p}x / ${s0.p100p}%</div><div class="sk">100+</div><div class="sv-d">${s1.c100p}x / ${s1.p100p}%</div>
      <div class="sv-d gold">${s0.c140p}x / ${s0.p140p}%</div><div class="sk">140+</div><div class="sv-d gold">${s1.c140p}x / ${s1.p140p}%</div>
    </div>
    <div class="stats-section-label">CHECKOUT</div>
    <div class="stats-grid">
      <div class="sv">${s0.coStr}</div><div class="sk">HIT/ATT</div><div class="sv">${s1.coStr}</div>
    </div>
    <div class="stats-section-label">DART HEATMAP</div>
    <div class="stats-heatmaps">
      <div class="stats-heatmap">
        <div class="stats-heatmap-name">${escHtml(session.names[0])}</div>
        ${buildHeatmapSVG(data.dartHits[0])}
      </div>
      <div class="stats-heatmap">
        <div class="stats-heatmap-name">${escHtml(session.names[1])}</div>
        ${buildHeatmapSVG(data.dartHits[1])}
      </div>
    </div>`;
}

function buildHeatmapSVG(hits) {
  const BOARD = [20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];
  const CX=120, CY=120;
  const R = {b:8, b25:20, si:64, to:74, so:105, dout:116, lbl:128};
  let max = 1;
  for (const v of Object.values(hits)) if (v > max) max = v;
  function pt(deg, r) {
    const a = (deg-90)*Math.PI/180;
    return [CX + r*Math.cos(a), CY + r*Math.sin(a)];
  }
  function seg(r1, r2, a1, a2) {
    const [x1,y1]=pt(a1,r2), [x2,y2]=pt(a2,r2), [x3,y3]=pt(a2,r1), [x4,y4]=pt(a1,r1);
    return `M${x1.toFixed(1)},${y1.toFixed(1)}A${r2},${r2},0,0,1,${x2.toFixed(1)},${y2.toFixed(1)}L${x3.toFixed(1)},${y3.toFixed(1)}A${r1},${r1},0,0,0,${x4.toFixed(1)},${y4.toFixed(1)}Z`;
  }
  function col(n) {
    if (!n) return '#141414';
    const t = n / max;
    return `rgb(${~~(20+t*180)},${~~(20+t*148)},${~~(20+t*55)})`;
  }
  let s = `<rect x="-15" y="-15" width="270" height="270" fill="#0d0d0d" rx="4"/>`;
  BOARD.forEach((num, i) => {
    const a1 = i*18-9, a2 = i*18+9;
    s += `<path d="${seg(R.b25,R.si,a1,a2)}" fill="${col(hits['S'+num])}" stroke="#222" stroke-width="0.5"/>`;
    s += `<path d="${seg(R.si,R.to,a1,a2)}" fill="${col(hits['T'+num])}" stroke="#222" stroke-width="0.5"/>`;
    s += `<path d="${seg(R.to,R.so,a1,a2)}" fill="${col(hits['S'+num])}" stroke="#222" stroke-width="0.5"/>`;
    s += `<path d="${seg(R.so,R.dout,a1,a2)}" fill="${col(hits['D'+num])}" stroke="#222" stroke-width="0.5"/>`;
  });
  s += `<circle cx="${CX}" cy="${CY}" r="${R.b25}" fill="${col(hits['25'])}" stroke="#222" stroke-width="0.5"/>`;
  s += `<circle cx="${CX}" cy="${CY}" r="${R.b}" fill="${col(hits['Bull'])}" stroke="#222" stroke-width="0.5"/>`;
  BOARD.forEach((num, i) => {
    const [lx,ly] = pt(i*18, R.lbl);
    s += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="#666" font-size="9" font-family="monospace">${num}</text>`;
  });
  return `<svg viewBox="-15 -15 270 270" width="100%" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}

function shakeCurrent() {
  const slot = document.getElementById('dart-' + (game.dartsThrown + 1));
  if (!slot) return;
  slot.style.borderColor = '#c0392b';
  setTimeout(() => slot.style.borderColor = '', 600);
}

// ── START ─────────────────────────────────────────────────
showMenu();
(() => {
  'use strict';

  const PIN = '4323';
  const RECENT_KEY = 'gtifab-box-recent-v2';
  const SAVED_KEY = 'gtifab-box-saved-v1';
  const LANGUAGE_KEY = 'gtifab-box-language';
  const INSTALL_KEY = 'gtifab-box-install-dismissed';
  const data = typeof vehicleData === 'object' && vehicleData ? vehicleData : {};

  const i18n = {
    sk: {
      secureAccess:'ZABEZPEČENÝ PRÍSTUP', enterPin:'Zadajte PIN', pinCopy:'Odomknite kompletnú databázu výkonových úprav.', pinLabel:'PIN kód', unlock:'Odomknúť aplikáciu', wrongPin:'Nesprávny PIN. Skúste to znova.', offlineReady:'Databáza pripravená na offline použitie', language:'Jazyk', online:'Online', offline:'Offline · databáza dostupná', installTitle:'Majte GTIFAB vždy poruke', installCopy:'Pridajte aplikáciu na plochu a používajte ju aj bez internetu.', install:'Pridať', databaseEyebrow:'DATABÁZA VÝKONU', heroTitle:'Nájdite potenciál vozidla.', heroCopy:'Originálny výkon, Stage 1 výsledok, ECU a dostupné možnosti — na jednom mieste.', brands:'značiek', models:'modelov', engines:'motorov', fastestWay:'NAJRÝCHLEJŠIA CESTA', searchEverything:'Vyhľadať celé vozidlo', searchHint:'napr. BMW 530d 265', searchLabel:'Vyhľadajte značku, model alebo motor', searchPlaceholder:'Značka, model, motor alebo výkon…', continueLabel:'POKRAČOVAŤ', recentTitle:'Posledné vozidlá', clear:'Vymazať', guidedSelection:'SPRIEVODCA VÝBEROM', browseDatabase:'Prechádzať databázu', reset:'Od začiatku', back:'Späť', filterLabel:'Filtrovať aktuálny zoznam', browse:'Výber', search:'Hľadať', recent:'Posledné', iphoneInstall:'INŠTALÁCIA NA IPHONE', installDialogTitle:'GTIFAB aj bez internetu', installDialogCopy:'Po prvom načítaní zostane kompletná databáza uložená v telefóne.', installStep1Title:'Otvorte Zdieľanie', installStep1Copy:'V Safari klepnite na ikonu zdieľania v spodnej lište.', installStep2Title:'Pridať na plochu', installStep2Copy:'V zozname vyberte „Pridať na plochu“.', installStep3Title:'Potvrďte Pridať', installStep3Copy:'Aplikácia sa otvorí na celej obrazovke a funguje offline.', understand:'Rozumiem', make:'Značka', base:'Model', gen:'Generácia', engine:'Motor', selectMake:'Vyberte značku', selectBase:'Vyberte model', selectGen:'Vyberte generáciu', selectEngine:'Vyberte motor', step:'KROK', filterMake:'Filtrovať značky…', filterBase:'Filtrovať modely…', filterGen:'Filtrovať generácie…', filterEngine:'Filtrovať motory…', results:'výsledkov', result:'výsledok', noResults:'Nenašli sa žiadne vozidlá', noResultsCopy:'Skúste názov značky, modelu, motora alebo pôvodný výkon.', quickResults:'RÝCHLE VÝSLEDKY', showFirst:'Zobrazených prvých', generation:'generácia', generations:'generácií', original:'Originál', otherEngine:'Vybrať iný motor', specifications:'Technické údaje', fuel:'Palivo', method:'Metóda', tuneType:'Typ úpravy', displacement:'Objem', compression:'Kompresný pomer', bore:'Vŕtanie × zdvih', engineCode:'Kód motora', ecu:'Riadiaca jednotka', gearboxEcu:'Riadiaca jednotka prevodovky', tools:'Nástroje na čítanie', options:'Ďalšie možnosti', share:'Zdieľať výsledok', saved:'Uložené', save:'Uložiť', copied:'Výsledok bol skopírovaný.', shareTitle:'GTIFAB výkonový výsledok', disclaimer:'Hodnoty sú orientačné. Finálny výsledok závisí od technického stavu konkrétneho vozidla.', installed:'Aplikácia je pripravená na offline použitie.', updateReady:'Nová verzia aplikácie je pripravená.', installUnavailable:'V Safari použite Zdieľať → Pridať na plochu.', allVehicles:'Všetky vozidlá zostali dostupné.', dataPending:'Údaje sa pripravujú', dataPendingTitle:'Vozidlo je evidované', dataPendingCopy:'Tuningové hodnoty pre tento motor zatiaľ nie sú overené. Vozidlo zostáva dostupné vo vyhľadávaní.', indexedData:'EVIDOVANÉ VOZIDLO'
    },
    en: {
      secureAccess:'SECURE ACCESS', enterPin:'Enter PIN', pinCopy:'Unlock the complete performance tuning database.', pinLabel:'PIN code', unlock:'Unlock application', wrongPin:'Incorrect PIN. Please try again.', offlineReady:'Database ready for offline use', language:'Language', online:'Online', offline:'Offline · database available', installTitle:'Keep GTIFAB within reach', installCopy:'Add the app to your Home Screen and use it without internet.', install:'Add', databaseEyebrow:'PERFORMANCE DATABASE', heroTitle:'Find the vehicle’s potential.', heroCopy:'Stock power, Stage 1 result, ECU and available options — all in one place.', brands:'brands', models:'models', engines:'engines', fastestWay:'FASTEST ROUTE', searchEverything:'Search the complete vehicle', searchHint:'e.g. BMW 530d 265', searchLabel:'Search by brand, model or engine', searchPlaceholder:'Brand, model, engine or power…', continueLabel:'CONTINUE', recentTitle:'Recent vehicles', clear:'Clear', guidedSelection:'GUIDED SELECTION', browseDatabase:'Browse the database', reset:'Start over', back:'Back', filterLabel:'Filter the current list', browse:'Browse', search:'Search', recent:'Recent', iphoneInstall:'INSTALL ON IPHONE', installDialogTitle:'GTIFAB even without internet', installDialogCopy:'After the first load, the complete database remains stored on your phone.', installStep1Title:'Open Share', installStep1Copy:'In Safari, tap the Share icon in the bottom toolbar.', installStep2Title:'Add to Home Screen', installStep2Copy:'Choose “Add to Home Screen” from the list.', installStep3Title:'Confirm Add', installStep3Copy:'The app opens full-screen and works offline.', understand:'Got it', make:'Brand', base:'Model', gen:'Generation', engine:'Engine', selectMake:'Choose a brand', selectBase:'Choose a model', selectGen:'Choose a generation', selectEngine:'Choose an engine', step:'STEP', filterMake:'Filter brands…', filterBase:'Filter models…', filterGen:'Filter generations…', filterEngine:'Filter engines…', results:'results', result:'result', noResults:'No vehicles found', noResultsCopy:'Try a brand, model, engine or original power figure.', quickResults:'QUICK RESULTS', showFirst:'Showing first', generation:'generation', generations:'generations', original:'Stock', otherEngine:'Choose another engine', specifications:'Technical data', fuel:'Fuel', method:'Method', tuneType:'Tune type', displacement:'Displacement', compression:'Compression ratio', bore:'Bore × stroke', engineCode:'Engine code', ecu:'Engine control unit', gearboxEcu:'Gearbox control unit', tools:'Reading tools', options:'Additional options', share:'Share result', saved:'Saved', save:'Save', copied:'Result copied.', shareTitle:'GTIFAB performance result', disclaimer:'Values are indicative. The final result depends on the technical condition of the specific vehicle.', installed:'The app is ready for offline use.', updateReady:'A new app version is ready.', installUnavailable:'In Safari use Share → Add to Home Screen.', allVehicles:'All vehicles remain available.', dataPending:'Data pending', dataPendingTitle:'Vehicle indexed', dataPendingCopy:'Tuning figures for this engine have not yet been verified. The vehicle remains available in search.', indexedData:'INDEXED VEHICLE'
    },
    de: {
      secureAccess:'GESICHERTER ZUGANG', enterPin:'PIN eingeben', pinCopy:'Öffnen Sie die komplette Datenbank für Leistungsoptimierung.', pinLabel:'PIN-Code', unlock:'App entsperren', wrongPin:'Falsche PIN. Bitte erneut versuchen.', offlineReady:'Datenbank für Offline-Nutzung bereit', language:'Sprache', online:'Online', offline:'Offline · Datenbank verfügbar', installTitle:'GTIFAB immer griffbereit', installCopy:'Zum Home-Bildschirm hinzufügen und auch ohne Internet nutzen.', install:'Hinzufügen', databaseEyebrow:'LEISTUNGSDATENBANK', heroTitle:'Finden Sie das Potenzial des Fahrzeugs.', heroCopy:'Serienleistung, Stage-1-Ergebnis, ECU und verfügbare Optionen — an einem Ort.', brands:'Marken', models:'Modelle', engines:'Motoren', fastestWay:'SCHNELLSTER WEG', searchEverything:'Komplettes Fahrzeug suchen', searchHint:'z. B. BMW 530d 265', searchLabel:'Marke, Modell oder Motor suchen', searchPlaceholder:'Marke, Modell, Motor oder Leistung…', continueLabel:'WEITERMACHEN', recentTitle:'Letzte Fahrzeuge', clear:'Löschen', guidedSelection:'GEFÜHRTE AUSWAHL', browseDatabase:'Datenbank durchsuchen', reset:'Neu beginnen', back:'Zurück', filterLabel:'Aktuelle Liste filtern', browse:'Auswahl', search:'Suchen', recent:'Letzte', iphoneInstall:'AUF DEM IPHONE INSTALLIEREN', installDialogTitle:'GTIFAB auch ohne Internet', installDialogCopy:'Nach dem ersten Laden bleibt die komplette Datenbank auf dem Telefon gespeichert.', installStep1Title:'Teilen öffnen', installStep1Copy:'Tippen Sie in Safari unten auf das Teilen-Symbol.', installStep2Title:'Zum Home-Bildschirm', installStep2Copy:'Wählen Sie „Zum Home-Bildschirm“ aus der Liste.', installStep3Title:'Hinzufügen bestätigen', installStep3Copy:'Die App öffnet sich im Vollbild und funktioniert offline.', understand:'Verstanden', make:'Marke', base:'Modell', gen:'Generation', engine:'Motor', selectMake:'Marke auswählen', selectBase:'Modell auswählen', selectGen:'Generation auswählen', selectEngine:'Motor auswählen', step:'SCHRITT', filterMake:'Marken filtern…', filterBase:'Modelle filtern…', filterGen:'Generationen filtern…', filterEngine:'Motoren filtern…', results:'Ergebnisse', result:'Ergebnis', noResults:'Keine Fahrzeuge gefunden', noResultsCopy:'Versuchen Sie Marke, Modell, Motor oder Serienleistung.', quickResults:'SCHNELLE ERGEBNISSE', showFirst:'Erste Treffer angezeigt:', generation:'Generation', generations:'Generationen', original:'Serie', otherEngine:'Anderen Motor wählen', specifications:'Technische Daten', fuel:'Kraftstoff', method:'Methode', tuneType:'Optimierung', displacement:'Hubraum', compression:'Verdichtung', bore:'Bohrung × Hub', engineCode:'Motorkennbuchstabe', ecu:'Motorsteuergerät', gearboxEcu:'Getriebesteuergerät', tools:'Lesewerkzeuge', options:'Weitere Optionen', share:'Ergebnis teilen', saved:'Gespeichert', save:'Speichern', copied:'Ergebnis kopiert.', shareTitle:'GTIFAB Leistungsergebnis', disclaimer:'Die Werte sind Richtwerte. Das Endergebnis hängt vom technischen Zustand des jeweiligen Fahrzeugs ab.', installed:'Die App ist für die Offline-Nutzung bereit.', updateReady:'Eine neue App-Version ist bereit.', installUnavailable:'In Safari: Teilen → Zum Home-Bildschirm.', allVehicles:'Alle Fahrzeuge bleiben verfügbar.', dataPending:'Daten werden vorbereitet', dataPendingTitle:'Fahrzeug erfasst', dataPendingCopy:'Die Tuningwerte für diesen Motor sind noch nicht verifiziert. Das Fahrzeug bleibt in der Suche verfügbar.', indexedData:'ERFASSTES FAHRZEUG'
    },
    sr: {
      secureAccess:'ZAŠTIĆEN PRISTUP', enterPin:'Unesite PIN', pinCopy:'Otključajte kompletnu bazu performansi i modifikacija.', pinLabel:'PIN kod', unlock:'Otključaj aplikaciju', wrongPin:'Pogrešan PIN. Pokušajte ponovo.', offlineReady:'Baza je spremna za offline rad', language:'Jezik', online:'Online', offline:'Offline · baza je dostupna', installTitle:'GTIFAB uvek pri ruci', installCopy:'Dodajte aplikaciju na početni ekran i koristite je bez interneta.', install:'Dodaj', databaseEyebrow:'BAZA PERFORMANSI', heroTitle:'Pronađite potencijal vozila.', heroCopy:'Fabrička snaga, Stage 1 rezultat, ECU i dostupne opcije — na jednom mestu.', brands:'marke', models:'modela', engines:'motora', fastestWay:'NAJBRŽI PUT', searchEverything:'Pretražite celo vozilo', searchHint:'npr. BMW 530d 265', searchLabel:'Pretražite marku, model ili motor', searchPlaceholder:'Marka, model, motor ili snaga…', continueLabel:'NASTAVI', recentTitle:'Poslednja vozila', clear:'Obriši', guidedSelection:'VOĐENI IZBOR', browseDatabase:'Pregledajte bazu', reset:'Od početka', back:'Nazad', filterLabel:'Filtrirajte trenutnu listu', browse:'Izbor', search:'Pretraga', recent:'Poslednje', iphoneInstall:'INSTALACIJA NA IPHONE', installDialogTitle:'GTIFAB i bez interneta', installDialogCopy:'Posle prvog učitavanja kompletna baza ostaje sačuvana na telefonu.', installStep1Title:'Otvorite Deljenje', installStep1Copy:'U Safariju dodirnite ikonu za deljenje u donjoj traci.', installStep2Title:'Dodaj na početni ekran', installStep2Copy:'Na listi izaberite „Add to Home Screen“.', installStep3Title:'Potvrdite Dodaj', installStep3Copy:'Aplikacija se otvara preko celog ekrana i radi offline.', understand:'Razumem', make:'Marka', base:'Model', gen:'Generacija', engine:'Motor', selectMake:'Izaberite marku', selectBase:'Izaberite model', selectGen:'Izaberite generaciju', selectEngine:'Izaberite motor', step:'KORAK', filterMake:'Filtriraj marke…', filterBase:'Filtriraj modele…', filterGen:'Filtriraj generacije…', filterEngine:'Filtriraj motore…', results:'rezultata', result:'rezultat', noResults:'Nema pronađenih vozila', noResultsCopy:'Pokušajte sa markom, modelom, motorom ili fabričkom snagom.', quickResults:'BRZI REZULTATI', showFirst:'Prikazano prvih', generation:'generacija', generations:'generacija', original:'Fabrički', otherEngine:'Izaberi drugi motor', specifications:'Tehnički podaci', fuel:'Gorivo', method:'Metoda', tuneType:'Vrsta modifikacije', displacement:'Zapremina', compression:'Kompresioni odnos', bore:'Prečnik × hod', engineCode:'Kod motora', ecu:'Motorni računar', gearboxEcu:'Računar menjača', tools:'Alati za čitanje', options:'Dodatne opcije', share:'Podeli rezultat', saved:'Sačuvano', save:'Sačuvaj', copied:'Rezultat je kopiran.', shareTitle:'GTIFAB rezultat performansi', disclaimer:'Vrednosti su informativne. Konačan rezultat zavisi od tehničkog stanja konkretnog vozila.', installed:'Aplikacija je spremna za offline rad.', updateReady:'Nova verzija aplikacije je spremna.', installUnavailable:'U Safariju koristite Share → Add to Home Screen.', allVehicles:'Sva vozila su i dalje dostupna.', dataPending:'Podaci se pripremaju', dataPendingTitle:'Vozilo je evidentirano', dataPendingCopy:'Tuning vrednosti za ovaj motor još nisu potvrđene. Vozilo ostaje dostupno u pretrazi.', indexedData:'EVIDENTIRANO VOZILO'
    },
    uk: {
      secureAccess:'ЗАХИЩЕНИЙ ДОСТУП', enterPin:'Введіть PIN', pinCopy:'Відкрийте повну базу даних налаштування потужності.', pinLabel:'PIN-код', unlock:'Відкрити застосунок', wrongPin:'Неправильний PIN. Спробуйте ще раз.', offlineReady:'База готова для роботи офлайн', language:'Мова', online:'Онлайн', offline:'Офлайн · база доступна', installTitle:'GTIFAB завжди поруч', installCopy:'Додайте застосунок на головний екран і користуйтеся без інтернету.', install:'Додати', databaseEyebrow:'БАЗА ПОТУЖНОСТІ', heroTitle:'Знайдіть потенціал автомобіля.', heroCopy:'Заводська потужність, результат Stage 1, ECU та доступні опції — в одному місці.', brands:'марок', models:'моделей', engines:'двигунів', fastestWay:'НАЙШВИДШИЙ ШЛЯХ', searchEverything:'Знайти весь автомобіль', searchHint:'напр. BMW 530d 265', searchLabel:'Пошук марки, моделі або двигуна', searchPlaceholder:'Марка, модель, двигун або потужність…', continueLabel:'ПРОДОВЖИТИ', recentTitle:'Останні автомобілі', clear:'Очистити', guidedSelection:'ПОКРОКОВИЙ ВИБІР', browseDatabase:'Переглянути базу', reset:'Почати спочатку', back:'Назад', filterLabel:'Фільтрувати поточний список', browse:'Вибір', search:'Пошук', recent:'Останні', iphoneInstall:'ВСТАНОВЛЕННЯ НА IPHONE', installDialogTitle:'GTIFAB навіть без інтернету', installDialogCopy:'Після першого завантаження повна база залишається збереженою на телефоні.', installStep1Title:'Відкрийте Поділитися', installStep1Copy:'У Safari торкніться іконки поширення на нижній панелі.', installStep2Title:'На початковий екран', installStep2Copy:'Оберіть «На початковий екран» зі списку.', installStep3Title:'Підтвердьте додавання', installStep3Copy:'Застосунок відкривається на весь екран і працює офлайн.', understand:'Зрозуміло', make:'Марка', base:'Модель', gen:'Покоління', engine:'Двигун', selectMake:'Оберіть марку', selectBase:'Оберіть модель', selectGen:'Оберіть покоління', selectEngine:'Оберіть двигун', step:'КРОК', filterMake:'Фільтр марок…', filterBase:'Фільтр моделей…', filterGen:'Фільтр поколінь…', filterEngine:'Фільтр двигунів…', results:'результатів', result:'результат', noResults:'Автомобілів не знайдено', noResultsCopy:'Спробуйте марку, модель, двигун або заводську потужність.', quickResults:'ШВИДКІ РЕЗУЛЬТАТИ', showFirst:'Показано перші', generation:'покоління', generations:'поколінь', original:'Заводські', otherEngine:'Обрати інший двигун', specifications:'Технічні дані', fuel:'Паливо', method:'Метод', tuneType:'Тип налаштування', displacement:'Обʼєм', compression:'Ступінь стиснення', bore:'Діаметр × хід', engineCode:'Код двигуна', ecu:'Блок керування двигуном', gearboxEcu:'Блок керування коробкою', tools:'Інструменти читання', options:'Додаткові опції', share:'Поділитися результатом', saved:'Збережено', save:'Зберегти', copied:'Результат скопійовано.', shareTitle:'Результат потужності GTIFAB', disclaimer:'Значення орієнтовні. Остаточний результат залежить від технічного стану конкретного автомобіля.', installed:'Застосунок готовий для роботи офлайн.', updateReady:'Нова версія застосунку готова.', installUnavailable:'У Safari: Поділитися → На початковий екран.', allVehicles:'Усі автомобілі залишаються доступними.', dataPending:'Дані готуються', dataPendingTitle:'Автомобіль внесено до бази', dataPendingCopy:'Значення тюнінгу для цього двигуна ще не перевірені. Автомобіль залишається доступним у пошуку.', indexedData:'АВТОМОБІЛЬ У БАЗІ'
    }
  };

  const $ = id => document.getElementById(id);
  const els = {
    app:$('app'), lock:$('lock'), pin:$('pin'), pinForm:$('pinForm'), pinErr:$('pinErr'),
    language:$('languageSelect'), connection:$('connectionBadge'), connectionText:$('connectionText'),
    installBanner:$('installBanner'), installBtn:$('installBtn'), dismissInstall:$('dismissInstall'), installDialog:$('installDialog'),
    homeBtn:$('homeBtn'), globalSearch:$('globalSearch'), clearSearch:$('clearSearch'), globalResults:$('globalResults'),
    recentSection:$('recentSection'), recentList:$('recentList'), clearRecent:$('clearRecent'),
    resetBtn:$('resetBtn'), stepper:$('stepper'), workspace:$('browserWorkspace'), backBtn:$('backBtn'),
    stepEyebrow:$('stepEyebrow'), stepTitle:$('stepTitle'), itemCount:$('itemCount'), filterWrap:$('filterWrap'),
    stepFilter:$('stepFilter'), browserList:$('browserList'), detail:$('vehicleDetail'),
    navBrowse:$('navBrowse'), navSearch:$('navSearch'), navRecent:$('navRecent'), toast:$('toast')
  };

  let language = localStorage.getItem(LANGUAGE_KEY) || 'sk';
  if (!i18n[language]) language = 'sk';
  let state = { make:null, base:null, modelKey:null, engine:null };
  let recent = readJSON(RECENT_KEY, []);
  let saved = new Set(readJSON(SAVED_KEY, []));
  let installPrompt = null;
  let toastTimer = null;

  const STEP_ORDER = ['make', 'base', 'gen', 'engine'];
  const flatIndex = [];
  let modelCount = 0;
  Object.keys(data).forEach(make => {
    const models = Object.keys(data[make]);
    modelCount += models.length;
    models.forEach(modelKey => {
      const parsed = parseModel(modelKey);
      Object.keys(data[make][modelKey]).forEach(engine => {
        const itemData = data[make][modelKey][engine];
        const haystack = normalize(`${make} ${modelKey} ${engine} ${itemData.origHP || ''} ${itemData.tunedHP || ''} ${itemData.enum || ''} ${itemData.ecu || ''}`);
        flatIndex.push({ make, modelKey, base:parsed.base, gen:parsed.gen, engine, data:itemData, haystack });
      });
    });
  });

  function t(key) { return i18n[language][key] || i18n.sk[key] || key; }
  function normalize(value) { return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
  function esc(value) { return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  function readJSON(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return Array.isArray(value) ? value : fallback; } catch (_) { return fallback; } }
  function formatNumber(value) { return new Intl.NumberFormat(language === 'uk' ? 'uk-UA' : language === 'sr' ? 'sr-Latn' : language).format(value); }
  function sortSK(items) { return [...items].sort((a,b) => a.localeCompare(b, language === 'uk' ? 'uk' : language)); }
  function parseModel(key) {
    const match = String(key).match(/^(.*?)\(([\s\S]*)\)\s*$/);
    return match ? { base:match[1].trim() || key.trim(), gen:match[2].trim() } : { base:String(key).trim(), gen:'' };
  }
  function yearKey(gen) { const match = String(gen).match(/(19|20)\d{2}/); return match ? Number(match[0]) : 9999; }
  function vehicleId(item = state) { return [item.make, item.modelKey, item.engine].join('|||'); }
  function currentStep() {
    if (!state.make) return 'make';
    if (!state.base) return 'base';
    if (!state.modelKey) return 'gen';
    if (!state.engine) return 'engine';
    return 'detail';
  }
  function isValidVehicle(item) { return !!(item && data[item.make] && data[item.make][item.modelKey] && data[item.make][item.modelKey][item.engine]); }
  function getVehicle(item = state) { return isValidVehicle(item) ? data[item.make][item.modelKey][item.engine] : null; }
  function isPendingVehicle(details) { return details?.sourceStatus === 'INDEX_ONLY'; }
  function brandCode(make) {
    const preferred = { 'Alfa Romeo':'AR', 'Aston Martin':'AM', 'Land Rover':'LR', 'Mercedes-Benz':'MB', 'Rolls Royce':'RR', 'Volkswagen':'VW', 'Volvo Trucks':'VT', 'Lynk & Co':'L&C' };
    if (preferred[make]) return preferred[make];
    const words = String(make).split(/[\s-]+/).filter(Boolean);
    if (words.length > 1) return words.map(word => word[0]).join('').slice(0, 3).toUpperCase();
    return String(make).replace(/[^a-z0-9]/gi, '').slice(0, 3).toUpperCase();
  }
  function pluralResults(count) { return count === 1 ? t('result') : t('results'); }
  function iconArrow() { return '<svg class="row-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>'; }

  function applyLanguage() {
    document.documentElement.lang = language;
    els.language.value = language;
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    updateConnection();
    renderRecent();
    renderBrowser();
    if (els.globalSearch.value.trim()) renderGlobalSearch();
  }

  function unlock() {
    sessionStorage.setItem('gtifab-box', 'ok');
    els.lock.hidden = true;
    els.app.hidden = false;
    document.body.classList.add('unlocked');
    showInstallOffer();
  }

  function tryPin(event) {
    event.preventDefault();
    if (els.pin.value === PIN) {
      els.pinErr.hidden = true;
      unlock();
    } else {
      els.pinErr.hidden = false;
      els.pin.select();
      if (navigator.vibrate) navigator.vibrate(80);
    }
  }

  function updateStats() {
    $('makeCount').textContent = formatNumber(Object.keys(data).length);
    $('modelCount').textContent = formatNumber(modelCount);
    $('engineCount').textContent = formatNumber(flatIndex.length);
  }

  function resetState(scroll = false) {
    state = { make:null, base:null, modelKey:null, engine:null };
    els.stepFilter.value = '';
    els.globalSearch.value = '';
    els.globalResults.hidden = true;
    els.clearSearch.hidden = true;
    renderBrowser();
    if (scroll) document.querySelector('.browser-panel').scrollIntoView({behavior:'smooth', block:'start'});
  }

  function goBack() {
    const step = currentStep();
    if (step === 'detail') state.engine = null;
    else if (step === 'engine') state.modelKey = null;
    else if (step === 'gen') state.base = null;
    else if (step === 'base') state.make = null;
    els.stepFilter.value = '';
    renderBrowser();
  }

  function jumpToStep(step) {
    if (step === 'make') state = { make:null, base:null, modelKey:null, engine:null };
    if (step === 'base' && state.make) Object.assign(state, {base:null, modelKey:null, engine:null});
    if (step === 'gen' && state.base) Object.assign(state, {modelKey:null, engine:null});
    if (step === 'engine' && state.modelKey) state.engine = null;
    els.stepFilter.value = '';
    renderBrowser();
  }

  function renderStepper() {
    const step = currentStep();
    const activeIndex = step === 'detail' ? STEP_ORDER.length : STEP_ORDER.indexOf(step);
    const labels = {
      make:state.make || t('make'),
      base:state.base || t('base'),
      gen:state.modelKey ? (parseModel(state.modelKey).gen || t('gen')) : t('gen'),
      engine:state.engine || t('engine')
    };
    els.stepper.innerHTML = '';
    STEP_ORDER.forEach((key,index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `step-button ${index < activeIndex ? 'done' : ''} ${index === activeIndex ? 'active' : ''}`;
      button.disabled = index > activeIndex;
      button.setAttribute('aria-current', index === activeIndex ? 'step' : 'false');
      button.innerHTML = `<span>${index < activeIndex ? '✓' : index + 1}</span><span>${esc(labels[key])}</span>`;
      if (index <= activeIndex) button.addEventListener('click', () => jumpToStep(key));
      els.stepper.appendChild(button);
    });
  }

  function browserItems(step) {
    if (step === 'make') return sortSK(Object.keys(data)).map(make => ({
      label:make,
      sub:`${formatNumber(Object.keys(data[make]).length)} ${t('models')}`,
      badge:brandCode(make),
      select:() => { state.make = make; }
    }));
    if (step === 'base') {
      const parsed = Object.keys(data[state.make]).map(key => ({key,...parseModel(key)}));
      return sortSK([...new Set(parsed.map(item => item.base))]).map((base,index) => {
        const generations = parsed.filter(item => item.base === base);
        const engines = generations.reduce((sum,item) => sum + Object.keys(data[state.make][item.key]).length, 0);
        return { label:base, sub:`${formatNumber(generations.length)} ${generations.length === 1 ? t('generation') : t('generations')} · ${formatNumber(engines)} ${t('engines')}`, badge:String(index + 1).padStart(2,'0'), select:() => { state.base = base; } };
      });
    }
    if (step === 'gen') {
      return Object.keys(data[state.make]).map(key => ({key,...parseModel(key)})).filter(item => item.base === state.base)
        .sort((a,b) => yearKey(a.gen) - yearKey(b.gen) || a.gen.localeCompare(b.gen))
        .map((item,index) => ({ label:item.gen || item.key, sub:`${formatNumber(Object.keys(data[state.make][item.key]).length)} ${t('engines')}`, badge:String(index + 1).padStart(2,'0'), select:() => { state.modelKey = item.key; } }));
    }
    if (step === 'engine') return sortSK(Object.keys(data[state.make][state.modelKey])).map((engine,index) => {
      const d = data[state.make][state.modelKey][engine];
      const sub = isPendingVehicle(d)
        ? `${d.origHP ?? '—'} HP · ${t('dataPending')}`
        : `${d.origHP ?? '—'} → ${d.tunedHP ?? '—'} HP · ${d.origNM ?? '—'} → ${d.tunedNM ?? '—'} Nm`;
      return { label:engine, sub, badge:String(index + 1).padStart(2,'0'), select:() => { state.engine = engine; addRecent(); } };
    });
    return [];
  }

  function renderBrowser() {
    renderStepper();
    const step = currentStep();
    const isDetail = step === 'detail';
    els.workspace.hidden = isDetail;
    els.detail.hidden = !isDetail;
    els.resetBtn.hidden = !state.make;
    if (isDetail) { renderDetail(); return; }

    const titles = { make:'selectMake', base:'selectBase', gen:'selectGen', engine:'selectEngine' };
    const filters = { make:'filterMake', base:'filterBase', gen:'filterGen', engine:'filterEngine' };
    els.backBtn.hidden = step === 'make';
    els.stepEyebrow.textContent = `${t('step')} ${STEP_ORDER.indexOf(step) + 1} / 4`;
    els.stepTitle.textContent = t(titles[step]);
    els.stepFilter.placeholder = t(filters[step]);

    const query = normalize(els.stepFilter.value.trim());
    const items = browserItems(step).filter(item => !query || normalize(`${item.label} ${item.sub}`).includes(query));
    els.itemCount.textContent = `${formatNumber(items.length)} ${pluralResults(items.length)}`;
    els.browserList.innerHTML = '';
    if (!items.length) {
      els.browserList.innerHTML = emptyState();
      return;
    }
    items.forEach(item => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'browser-row';
      button.innerHTML = `<span class="browser-row-index">${esc(item.badge)}</span><span class="browser-row-copy"><strong>${esc(item.label)}</strong><span>${esc(item.sub)}</span></span>${iconArrow()}`;
      button.addEventListener('click', () => { item.select(); els.stepFilter.value = ''; renderBrowser(); });
      els.browserList.appendChild(button);
    });
  }

  function emptyState() {
    return `<div class="empty-state"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg><strong>${esc(t('noResults'))}</strong><p>${esc(t('noResultsCopy'))}</p></div>`;
  }

  function searchScore(item, query, tokens) {
    if (!tokens.every(token => item.haystack.includes(token))) return -1;
    const make = normalize(item.make), base = normalize(item.base), engine = normalize(item.engine);
    let score = 0;
    if (item.haystack.startsWith(query)) score += 60;
    if (make === query) score += 100;
    if (make.startsWith(query)) score += 30;
    if (base.startsWith(query)) score += 28;
    if (engine.startsWith(query)) score += 24;
    score += Math.max(0, 20 - item.haystack.indexOf(tokens[0]));
    return score;
  }

  function renderGlobalSearch() {
    const raw = els.globalSearch.value.trim();
    const query = normalize(raw);
    els.clearSearch.hidden = !raw;
    if (query.length < 2) {
      els.globalResults.hidden = true;
      els.globalResults.innerHTML = '';
      return;
    }
    const tokens = query.split(/\s+/).filter(Boolean);
    const all = flatIndex.map(item => ({item, score:searchScore(item, query, tokens)})).filter(entry => entry.score >= 0).sort((a,b) => b.score - a.score || a.item.make.localeCompare(b.item.make));
    const hits = all.slice(0, 24);
    els.globalResults.hidden = false;
    els.globalResults.innerHTML = `<div class="global-results-head"><span>${esc(t('quickResults'))}</span><span>${esc(formatNumber(all.length))} ${esc(pluralResults(all.length))}${all.length > hits.length ? ` · ${esc(t('showFirst'))} ${hits.length}` : ''}</span></div>`;
    if (!hits.length) { els.globalResults.insertAdjacentHTML('beforeend', emptyState()); return; }
    hits.forEach(({item}) => els.globalResults.appendChild(createResultRow(item)));
  }

  function createResultRow(item) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'result-row';
    const power = isPendingVehicle(item.data)
      ? `<span class="power-mini pending"><strong>${esc(item.data.origHP ?? '—')} HP</strong><span>${esc(t('dataPending'))}</span></span>`
      : `<span class="power-mini"><span>${esc(item.data.origHP ?? '—')}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 7 7-7 7"/></svg><strong>${esc(item.data.tunedHP ?? '—')} HP</strong></span>`;
    button.innerHTML = `<span class="result-title"><strong>${esc(item.make)} ${esc(item.base)}</strong><span>${esc(item.gen || item.modelKey)} · ${esc(item.engine)}</span></span>${power}${iconArrow()}`;
    button.addEventListener('click', () => selectVehicle(item));
    return button;
  }

  function selectVehicle(item) {
    state = { make:item.make, base:item.base || parseModel(item.modelKey).base, modelKey:item.modelKey, engine:item.engine };
    els.globalSearch.value = '';
    els.clearSearch.hidden = true;
    els.globalResults.hidden = true;
    els.stepFilter.value = '';
    addRecent();
    renderBrowser();
    document.querySelector('.browser-panel').scrollIntoView({behavior:'smooth', block:'start'});
  }

  function addRecent() {
    if (!getVehicle()) return;
    const item = { make:state.make, modelKey:state.modelKey, engine:state.engine };
    const id = vehicleId(item);
    recent = [item, ...recent.filter(entry => vehicleId(entry) !== id && isValidVehicle(entry))].slice(0, 6);
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    renderRecent();
  }

  function renderRecent() {
    recent = recent.filter(isValidVehicle).slice(0, 6);
    els.recentSection.hidden = !recent.length;
    els.recentList.innerHTML = '';
    recent.forEach(item => {
      const d = getVehicle(item), parsed = parseModel(item.modelKey);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'recent-card';
      button.innerHTML = `<small>${esc(item.make)} · ${esc(isPendingVehicle(d) ? t('dataPending') : (d.type || 'Stage 1'))}</small><strong>${esc(parsed.base)} · ${esc(item.engine)}</strong><span>${isPendingVehicle(d) ? `${esc(d.origHP ?? '—')} HP` : `${esc(d.origHP ?? '—')} → ${esc(d.tunedHP ?? '—')} HP`}</span>`;
      button.addEventListener('click', () => selectVehicle({...item, base:parsed.base, gen:parsed.gen, data:d}));
      els.recentList.appendChild(button);
    });
  }

  function specRow(label, value) {
    if (value === undefined || value === null || value === '') return '';
    return `<div class="spec-row"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;
  }

  function renderDetail() {
    const d = getVehicle();
    if (!d) { resetState(); return; }
    const pending = isPendingVehicle(d);
    const parsed = parseModel(state.modelKey);
    const hpGain = Number.isFinite(Number(d.origHP)) && Number.isFinite(Number(d.tunedHP)) ? Number(d.tunedHP) - Number(d.origHP) : null;
    const nmGain = Number.isFinite(Number(d.origNM)) && Number.isFinite(Number(d.tunedNM)) ? Number(d.tunedNM) - Number(d.origNM) : null;
    const id = vehicleId();
    const isSaved = saved.has(id);
    const specs = [
      [t('fuel'), d.fuel], [t('method'), d.method], [t('tuneType'), d.type], [t('displacement'), d.cc],
      [t('compression'), d.comp], [t('bore'), d.bore], [t('engineCode'), d.enum], [t('ecu'), d.ecu], [t('gearboxEcu'), d.gecu]
    ].map(([label,value]) => specRow(label,value)).join('');
    const tools = Array.isArray(d.tools) && d.tools.length ? `<div class="tag-group"><h5>${esc(t('tools'))}</h5><div class="tag-list">${d.tools.map(tool => `<span class="tag">${esc(tool)}</span>`).join('')}</div></div>` : '';
    const options = Array.isArray(d.opts) && d.opts.length ? `<div class="tag-group"><h5>${esc(t('options'))}</h5><div class="tag-list">${d.opts.map(option => `<span class="tag option">${esc(option)}</span>`).join('')}</div></div>` : '';
    els.detail.innerHTML = `
      <div class="detail-top">
        <div class="detail-actions">
          <button id="detailBack" class="detail-back" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>${esc(t('otherEngine'))}</button>
          <div class="detail-action-set">
            <button id="saveVehicle" class="round-action ${isSaved ? 'saved' : ''}" type="button" aria-label="${esc(isSaved ? t('saved') : t('save'))}" title="${esc(isSaved ? t('saved') : t('save'))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg></button>
            <button id="shareVehicle" class="round-action" type="button" aria-label="${esc(t('share'))}" title="${esc(t('share'))}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="19" r="2"/><path d="m8 11 8-5M8 13l8 5"/></svg></button>
          </div>
        </div>
        <div class="detail-heading"><span class="make-label">${esc(state.make)} · ${esc(pending ? t('indexedData') : (d.type || 'Stage 1'))}</span><h3>${esc(parsed.base)}</h3><p>${esc(parsed.gen || state.modelKey)} · ${esc(state.engine)}</p></div>
        ${pending ? `<div class="pending-notice"><span>i</span><div><strong>${esc(t('dataPendingTitle'))}</strong><p>${esc(t('dataPendingCopy'))}</p></div></div>` : ''}
        <div class="power-comparison">
          <div class="power-card"><small>${esc(t('original'))}</small><div class="power-value"><strong>${esc(d.origHP ?? '—')}</strong><span>HP</span></div><div class="torque-value">${esc(d.origNM ?? '—')} Nm</div></div>
          <div class="power-arrow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 7 7-7 7"/></svg></div>
          <div class="power-card tuned"><small>${esc(pending ? t('dataPending') : (d.type || 'Stage 1'))}</small><div class="power-value"><strong>${esc(d.tunedHP ?? '—')}</strong><span>HP</span></div><div class="torque-value">${esc(d.tunedNM ?? '—')} Nm</div></div>
        </div>
        ${(hpGain !== null || nmGain !== null) ? `<div class="gain-strip">${hpGain !== null ? `<span>+${esc(hpGain)} HP</span>` : ''}${nmGain !== null ? `<span>+${esc(nmGain)} Nm</span>` : ''}</div>` : ''}
      </div>
      <div class="detail-grid">
        <section class="spec-card"><h4>${esc(t('specifications'))}</h4>${specs ? `<div class="spec-table">${specs}</div>` : `<div class="empty-state"><strong>${esc(t('dataPendingTitle'))}</strong><p>${esc(t('dataPendingCopy'))}</p></div>`}</section>
        <aside class="spec-card">${tools}${options}${!tools && !options ? `<div class="empty-state"><strong>GTIFAB</strong><p>${esc(pending ? t('dataPending') : t('allVehicles'))}</p></div>` : ''}</aside>
      </div>
      <div class="detail-footer"><p>${esc(pending ? t('dataPendingCopy') : t('disclaimer'))}</p><button id="shareVehicleBottom" class="primary-button" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="19" r="2"/><path d="m8 11 8-5M8 13l8 5"/></svg>${esc(t('share'))}</button></div>`;
    $('detailBack').addEventListener('click', () => { state.engine = null; renderBrowser(); });
    $('saveVehicle').addEventListener('click', toggleSaved);
    $('shareVehicle').addEventListener('click', shareVehicle);
    $('shareVehicleBottom').addEventListener('click', shareVehicle);
  }

  function toggleSaved() {
    const id = vehicleId();
    if (saved.has(id)) saved.delete(id); else saved.add(id);
    localStorage.setItem(SAVED_KEY, JSON.stringify([...saved]));
    renderDetail();
    showToast(saved.has(id) ? t('saved') : t('save'));
  }

  async function shareVehicle() {
    const d = getVehicle(), parsed = parseModel(state.modelKey);
    const tuningLine = isPendingVehicle(d)
      ? t('dataPendingCopy')
      : `${d.type || 'Stage 1'}: ${d.tunedHP ?? '—'} HP / ${d.tunedNM ?? '—'} Nm`;
    const text = `${state.make} ${parsed.base} ${parsed.gen}\n${state.engine}\n${t('original')}: ${d.origHP ?? '—'} HP / ${d.origNM ?? '—'} Nm\n${tuningLine}\nGTIFAB`;
    try {
      if (navigator.share) await navigator.share({title:t('shareTitle'), text});
      else if (navigator.clipboard) { await navigator.clipboard.writeText(text); showToast(t('copied')); }
      else fallbackCopy(text);
    } catch (error) { if (error && error.name !== 'AbortError') fallbackCopy(text); }
  }

  function fallbackCopy(text) {
    const area = document.createElement('textarea');
    area.value = text; area.style.position = 'fixed'; area.style.opacity = '0';
    document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); showToast(t('copied'));
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    els.toast.textContent = message;
    els.toast.hidden = false;
    toastTimer = setTimeout(() => { els.toast.hidden = true; }, 2800);
  }

  function updateConnection() {
    const online = navigator.onLine !== false;
    els.connection.classList.toggle('offline', !online);
    els.connectionText.textContent = online ? t('online') : t('offline');
  }

  function isStandalone() { return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true; }
  function isIOS() { return /iphone|ipad|ipod/i.test(navigator.userAgent); }
  function showInstallOffer() {
    const dismissed = localStorage.getItem(INSTALL_KEY) === 'yes';
    els.installBanner.hidden = isStandalone() || dismissed || (!isIOS() && !installPrompt);
  }

  async function handleInstall() {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      showInstallOffer();
    } else if (isIOS() && els.installDialog.showModal) {
      els.installDialog.showModal();
    } else showToast(t('installUnavailable'));
  }

  function setupServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js', {scope:'./'}).then(registration => {
      navigator.serviceWorker.ready.then(() => showToast(t('installed')));
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) showToast(t('updateReady'));
        });
      });
    }).catch(() => {});
  }

  els.pinForm.addEventListener('submit', tryPin);
  els.pin.addEventListener('input', () => { els.pinErr.hidden = true; });
  els.language.addEventListener('change', () => { language = els.language.value; localStorage.setItem(LANGUAGE_KEY, language); applyLanguage(); updateStats(); });
  els.globalSearch.addEventListener('input', renderGlobalSearch);
  els.globalSearch.addEventListener('keydown', event => { if (event.key === 'Escape') { els.globalSearch.value = ''; renderGlobalSearch(); els.globalSearch.blur(); } });
  els.clearSearch.addEventListener('click', () => { els.globalSearch.value = ''; renderGlobalSearch(); els.globalSearch.focus(); });
  els.stepFilter.addEventListener('input', renderBrowser);
  els.backBtn.addEventListener('click', goBack);
  els.resetBtn.addEventListener('click', () => resetState(false));
  els.homeBtn.addEventListener('click', () => { resetState(false); window.scrollTo({top:0,behavior:'smooth'}); });
  els.clearRecent.addEventListener('click', () => { recent = []; localStorage.removeItem(RECENT_KEY); renderRecent(); });
  els.navBrowse.addEventListener('click', () => document.querySelector('.browser-panel').scrollIntoView({behavior:'smooth',block:'start'}));
  els.navSearch.addEventListener('click', () => { document.querySelector('.search-panel').scrollIntoView({behavior:'smooth',block:'center'}); setTimeout(() => els.globalSearch.focus(), 350); });
  els.navRecent.addEventListener('click', () => { (els.recentSection.hidden ? document.querySelector('.browser-panel') : els.recentSection).scrollIntoView({behavior:'smooth',block:'center'}); });
  els.installBtn.addEventListener('click', handleInstall);
  els.dismissInstall.addEventListener('click', () => { localStorage.setItem(INSTALL_KEY, 'yes'); els.installBanner.hidden = true; });
  window.addEventListener('online', updateConnection);
  window.addEventListener('offline', updateConnection);
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; showInstallOffer(); });
  window.addEventListener('appinstalled', () => { els.installBanner.hidden = true; showToast(t('installed')); });
  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k' && !els.app.hidden) { event.preventDefault(); els.globalSearch.focus(); }
  });

  applyLanguage();
  updateStats();
  renderRecent();
  renderBrowser();
  updateConnection();
  setupServiceWorker();
  if (sessionStorage.getItem('gtifab-box') === 'ok') unlock();
})();

const CACHE='kelvin-gig-charts-v5';
const ASSETS=['./','./index.html','./manifest.json','./audio/05-someday-soon.mp3','./audio/06-im-down-to-my-last-cigarette.mp3','./audio/08-heart-over-mind.mp3','./audio/01-guitars-cadillacs.mp3','./audio/02-all-my-exs.mp3','./audio/07-apartment-9.mp3','./audio/09-tous-les-soirs.mp3','./audio/10-today-i-started.mp3','./audio/11-country-club.mp3','./audio/12-four-winds-blow.mp3','./audio/13-afraid-of-losing.mp3','./audio/14-joy-to-the-world.mp3','./audio/15-dannys-song.mp3'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});

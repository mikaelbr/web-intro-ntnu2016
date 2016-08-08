(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var gest = require('./gest');

setupSlideshow();
setupSoundButton();

document.querySelector('#change-image').addEventListener('click', function (e) {
  e.preventDefault();
  var myImage = document.querySelector('#my-image-1');
  myImage.src = 'assets/dance.gif';
});

var myImage2 = document.querySelector('#my-image-2');
myImage2.addEventListener('click', function (e) {
  e.preventDefault();
  myImage2.src = 'assets/dance.gif';
});

var isStarted = false;
document.querySelector('#gest-button').addEventListener('click', function (e) {
  if (isStarted) {
    gest.stop();
    isStarted = false;
  } else {
    gest.start();
    isStarted = true;
  }
}, false);

var isDebug = false;
document.querySelector('#gest-button-debug').addEventListener('click', function (e) {
  isDebug = !isDebug;
  gest.options.debug(isDebug);
}, false);


function setupSlideshow () {
  var data = "class: front-page\n\n# Introduksjon til Web-teknologi\n## Et lite innblikk i det moderne web\n\nMikael Brevik\n\n19/08/2015\n\n---\nclass: agenda\n\n# Del 1: Grunnleggende Interaksjon\n\n * Historie\n * Hva er Web?\n * Apper, været og likes\n\n---\nclass: agenda\n\n# Del 2: HTML, CSS og JavaScript\n\n* Bak kulissene\n* HTML: Innhold\n* CSS: Design\n* JavaScript: Oppførsel\n* Web and Beyond\n\n---\nclass: middle center\n\n# Historisk Web\n\n---\nbackground-image: url(assets/stevebuschemi.gif)\n\n---\nclass: middle center\n\n![Windows 95 Dail Up](assets/win95dialup.png)\n\n<a href=\"#\" class=\"btn\" id=\"sound-button\">Lyd</a>\n\n???\n\nHastigheter var typisk rundt 28 kbps eller 56 kbps. Etterhvert var det noen heldige som hadde ISDN og kunne bruke dobbel linje for å øke det til 128 kbps! Det kunne bety en vanlig MP3 sang på rundt 5 minutter. Som var veldig, veldig raskt. Jeg husket jeg lå på rundt nedlastingshastighet på 6 KB/s. Som gjorde at om alle planeter lå på linje, kunne jeg laste ned en sang på rundt 12 minutter.\n\n---\nbackground-image: url(assets/ie20years.jpg)\n\n???\n\nHer er et bilde av Internet Explorer 1 i Windows 95, som er 20 år nå!\n\n---\nbackground-image: url(assets/apple-website.png)\nclass: middle center\n\n???\n\nPå grunn av lav hastighet, lite modent teknologi, store krangler mellom nettlesere osv, var det ikke veldig mye man kunne gjøre på web-en i starten. Det var for det meste mye tekst og noen bilder. Dette er et bilde av Apple sine sider fra 1997, som ellers er forholdsvis kjent for sin gode design-stil.\n\nLegg særlig merke til datoen som står oppe i høyre hjørne. Av en eller annen grunn var det utrolig vanlig for nettsider å vise klokke og/eller dato på nettsiden.\n\n---\nclass: middle center\n\n![Windows 95 bar](assets/clock.png)\n\n???\n\nMen det var ikke slik at det var et behov for det. I 97, var det vanligste OS-et Windows 95, eller kanskje Windows 98. Men begge hadde startlinja der klokken var synlig hele tiden.\n\n---\nbackground-image: url(assets/google.png)\nclass: middle center\n\n???\nDa Google kom, kanskje først for fullt rundt 1998, ble det plutselig mulig å skikkelig kunne søke på nettet etter innhold. Starten på informasjonsalderen der vi kunne ha all slags mulig \"redaktørstyrt\" innhold.  \n\n---\nbackground-image: url(assets/ms-encarta.jpg)\nclass: middle center\n\n???\n\nFør internett ble kraftig nok, måtte man kjøpe det meste på disketter eller CD-er dersom man ville ha noe digitalt. Det var ikke båndbredde til å laste ned noe særlig stort. Et eksempel på noe vi kanskje tar for gitt i dag er leksikon på nett. Før var det Encarta som Microsoft ga ut. Der kunne man lese om alt slags mulig interessant.\n---\nbackground-image: url(assets/encarta-game.jpg)\nclass: middle center\n\n???\n\ndet var til og med et uhyre langsomt spill som jeg aldri klarte å komme meg noe langt på.\n\n---\nbackground-image: url(assets/first-wikipedia.png)\nclass: middle center\n\n???\n\nI 2001, fikk vi selvfølgelig Wikipedia som var første store lexicon på nett. I den tiden hadde også med seg alderen for brukergenerert innhold. Ikke lengre skulle det bare være \"redaktørstyrt\" innhold. Innhold der det var noen webmasters og de som sto bak sidene skulle legge ut, men brukerne av sidene skulle bidra til å legge ut innhold.\n\nWikier er selvfølgelig av den typen side. Alle brukere kan opprette innhold i en Wiki, og redaktørjobben blir overlatt til miljøet. Noe som har vist seg å fungere for mange sider.\n\n\n---\nbackground-image: url(assets/digg-2004.png)\n\n\n???\n\nEtt av de nettstedene som var tidlig ute med brukergenerert innhold var siden Digg. Digg var (og er vel kanskje fremdeles) en nyhetsaggregeringsside. Som da er sider som samler lenker til alle slags andre sider. I dag er Digg ikke like populært, men de fleste av brukerene har gått over til Reddit, som kanskje de aller fleste kjenner til.\n\n---\nbackground-image: url(assets/first-facebook.png)\n\n\n???\n\nPå samme tiden, rundt 2004, kom det en ganske kjent side for mange. Riktig nok, så ble den først den Facebook vi kjenner i dag rundt 2008. Da kom det et stort re-design og den fikk flesteparten av de featurene vi ser. I Norge hadde vi først noen andre sider som løste mye av de samme \"behovene\".\n\n---\nbackground-image: url(assets/blink.png)\n\n???\n\nFørst var Dagbladets blink en stor greie\n\n---\nbackground-image: url(assets/nettby.png)\n\n???\n\nOg VG kunne selvfølgelig ikke være noe dårligere og kjøpte opp Nettby, som etterhvert tok mer eller mindre over for Blink.\n\nVi var inne i en ny alder der det ble mer og mer populært å være sosial på nettet. Vi skulle ikke bare lese informasjon og dele informasjon, men vi skulle interagere med mennesker. I denne tiden begynte ting å bevege selv veldig raskt. Samtidig som sosiale medier ble født, fikk vi også underholdning i mye større grad.\n\n---\nbackground-image: url(assets/janetjackson.jpg)\n\n\n???\n\nI 2004, gjorde Janet Jackson og Justin Timberlake et stort stunt på Super Bowl. Etter over å frustrere seg over at det ikke var mulig å finne videoen noe sted, bestemte Hurley, Chen og Karin seg for å lage YouTube.\n\n---\nbackground-image: url(assets/first-youtube.png)\n\n\n???\n\nFørst, skulle YouTube være en slags Online Dating side bare for videoer. Etterhvert muterte derimot Youtube til å bli mer likt det vi kjenner det som i dag.\n\n---\nbackground-image: url(assets/second-youtube.png)\n\n\n???\n\nEn side der hvor alle kan dele alle slags videoer.\n\n---\nbackground-image: url(assets/first-iphone.jpg)\n\n???\n\nMot 2007, skjedde det noe annet stort. Vi fikk skikkelig fungerende smart-telefoner. I alle fall starten på en fungerende smartphone. I utgangspunktet var det f.eks ikke en App Store. Tanken var at det skulle være web-apps på alt. Man skulle kun bruke weben til å gjøre alt man trengte. Men behovet kom for å ha mer native apps og App Storen ble født.\n\n---\nclass: middle center\n\n![Wordfeud](assets/wordfeud.jpeg)\n\n???\n\nF.eks apper som Wordfeud.\n\n---\nclass: middle center\n\n![Angry birds](assets/angrybirds.jpg)\n\n???\n\nEller ting som Angry Birds.\n\n---\nclass: middle center\n\n![Fun Run](assets/funrun.jpg)\n\n???\n\nEller Fun Run..\n\n\n---\nclass: middle center\n\n![Angry birds](assets/gobi.png)\n\n???\n\nOg til og med Gobi. Alle slike apper, baserer seg på Web-teknologi. Vi skal se litt mer om hvordan senere.\n\n\n---\nclass: middle center\n\n# Hva er Web?\n\n???\n\nMen først. Hva er egentlig web? Hvordan funker det?\n\n---\nclass: middle center\n\n![Request/Response](assets/request-response.png)\n\n???\n\nNettleseren sender en spørring inn til en tjener ved å slå opp i et register for å endre fra domene til en adresse (IP). Så får man svar med tjeneren om man finner et innhold eller ikke. Dersom innholdet finnes kommer innholdet også.\n\n---\n\n# Request\n\n```\ncurl -v http://www.vg.no\n```\n\n```\n* Connected to www.vg.no (195.88.55.16) port 80 (#0)\n> GET / HTTP/1.1\n> User-Agent: curl/7.37.1\n> Host: www.vg.no\n> Accept: */*\n```\n\n\n---\n# Response\n\n```\n< HTTP/1.1 200 OK\n< Server: Apache/2.2.15 (CentOS)\n< X-VG-WebServer: vgphoenix-web-03\n< Last-Modified: Sun, 16 Aug 2016 19:15:45 GMT\n< Content-Type: text/html; charset=UTF-8\n< X-VG-SolveMe: uggc://jjj.it.ab/ynxfrgngg.ugzy\n< Cache-Control: max-age=30,must-revalidate\n< Transfer-Encoding: chunked\n< Date: Sun, 16 Aug 2015 19:18:48 GMT\n< Connection: keep-alive\n< X-Cache: HIT:4326\n< Vary: Accept-Encoding,User-Agent\n< X-VG-WebCache: m323-varnish-01\n< X-Age: 174\n< Age: 0\n```\n\n---\nbackground-image: url(assets/carusel.gif)\nclass: middle center\n\n???\n\nAll den teknologien slik at vi kan se gif-er på nett.\n\n\n---\n\n# HTTP\n\n_Hypertext Transfer Protocol_\n\nEr en protokoll for å kommunisere mellom systemer.\n\n---\n# HTTP: Verb\n\nVerb: Definerer hva man ønsker å gjøre.\n\n```\nGET\nPOST\nPUT\nDELETE\n...\n```\n---\n# HTTP: Statuskoder\n\nStatuskoder: Hva ble resultatet?\n\n```\n200 - OK\n404 - Not Found\n403 - Forbidden\n500 - Internal Server Error\n418 - I'm a teapot\n```\n\n---\nclass: middle center\n\n\n# Apps, været og likes\n\n???\n\nSå hvordan er Web relatert til Apps og alt vi gjør på telefonen, tablets, etc, hver dag?\n\n---\nbackground-image: url(assets/phone-response.png)\n\n\n???\n\nI bakgrunnen, isteden for at vi går direkte inn på en nettadresse, et domene, så gjør appen det for oss.\n\n---\nbackground-image: url(assets/yr.png)\n\n???\n\nSå f.eks, om Yr skal hente ut været. Går den egentlig inn på en nett-addresse i bakgrunnen, som henter ut et format som dataen kan lese og lage et grensesnitt ut av.\n\n---\n\n```\nhttp://www.yr.no/sted/Norway/S%C3%B8r-Tr%C3%B8ndelag/Trondheim/Trondheim/varsel.xml\n```\n\n```xml\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<weatherdata>\n  <location>\n    <name>Trondheim</name>\n    <type>By</type>\n    <country>Norge</country>\n    <timezone id=\"Europe/Oslo\" utcoffsetMinutes=\"120\" />\n    <location altitude=\"8\" latitude=\"63.4304873907371\" longitude=\"10.3950612843065\" geobase=\"ssr\" geobaseid=\"211102\" />\n  </location>\n  <forecast>\n    <text>\n      <location name=\"Trondheim\">\n        <time from=\"2016-08-16\" to=\"2016-08-16\">\n          <title>søndag</title>\n          <body>&lt;strong&gt;Trøndelag:&lt;/strong&gt; Søraust bris, frisk bris utsatte steder. Pent vær.</body>\n        </time>\n```\n\n???\n\nSå om du åpner en nettside, vil nettleseren gå å hente ut innholdet til den nettsiden, og du vil få tilbake et format som nettleseren kan vise med et tilhørende design (kalt HTML og CSS). For apps, vil appen hente ut et innhold og få tilbake et format som kan konsumeres enkelt for den, f.eks JSON eller XML.\n\n---\nbackground-image: url(assets/facebook-app.png)\n\n???\n\nDet samme skjer når man f.eks trykker \"Like\" på Facebook App-en. Facebook går i bakrunnen og åpner en side, som gjør den handlingen man ønsker.\n\n\n---\n\n```\nhttp://api.facebook.com/actions/do-like/01307572/some-post\n```\n\n```json\n{\n  \"success\": true,\n  \"likes\": 56,\n  \"youLiked\": true\n}\n```\n\n???\n\nVi kan forestille oss at den ser ut som noe slik, for eksempel.\n\n---\nclass: middle center\n\n![Fun Run](assets/funrun.jpg)\n\n???\n\nSamme da med fun run. Bare at man kan tenke seg at man sender litt andre ting. F.eks kan det være at den kontinuerlig sender sin posisjon til en server som igjen sprer den videre til alle andre mobil-telefoner som er med i spillet.\n\n---\n\n# Request\n\n```\nPOST http://api.some-funrun-page.com/coordinates/game-id/12f938abc321adf\n```\n\n## Body\n```json\n{ \"x\": 1205, \"y\": 300 }\n```\n\n# Response\n```json\n{ \"message\": \"ok\" }\n```\n\n\n---\nclass: middle center\n\n# Pause\n\n---\n\n# Re-cap: Del 1\n\n\n * Web baserer seg på HTTP\n * Fungerer som Request og Response\n * Kan vise forskjellige typer innhold (tekst, bilder, data-format etc)\n * Kommunikasjon i apper er og ofte basert på Web-teknologi.\n\n---\nclass: middle center\n\n\n![Request/Response](assets/request-response.png)\n\n???\n\nNettleseren sender en spørring inn til en tjener ved å slå opp i et register for å endre fra domene til en adresse (IP). Så får man svar med tjeneren om man finner et innhold eller ikke. Dersom innholdet finnes kommer innholdet også.\n\n---\n\nclass: agenda\n\n# Del 2: HTML, CSS og JavaScript\n\n * Bak kulissene\n * HTML: Innhold\n * CSS: Design\n * JavaScript: Oppførsel\n * Web and Beyond\n\n\n---\n\n# HTML: Innhold\n\n## _HyperText Markup Language_\n\n_Markup: Et språk for å definere hvordan vi vil at strukturen på en nettside skal være._\n\n\n## Format\n\n```html\n<tag attribute=\"attribute-value\">content</tag>\n```\n\n---\n\n# HTML\n\n```html\n<h1>Min sidetittel</h1>\n<p>\n  Dette er et avsnitt med litt <strong>fet tekst</strong>\n  og en <a href=\"https://bekk.no/\">kul lenke</a>.\n</p>\n```\n\n---\n\n# HTML\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Web Intro 2016</title>\n  </head>\n  <body>\n    <h1>Min sidetittel</h1>\n  </body>\n</html>\n```\n\n\n---\n\n# CSS: Design\n\n## _Cascading Style Sheets_\n\n_Stilsett definert som design for nettsiden din._\n\n## Format\n\n```CSS\nselector {\n  property: value;\n}\n```\n\nInkluderes i HTML ved en `<link>`-tag\n```html\n<link href=\"stylesheet.css\" type=\"text/css\" rel=\"stylesheet\">\n```\n\n---\n\n# CSS\n\n```CSS\narticle h1 {\n  font-size: 150%;\n  color: #FF0000; /* same as red */\n}\n```\n\n<h1 style=\"font-size: 150%; color: #FF0000;\">Min tittel</h1>\n\n---\n# CSS\n\n```CSS\narticle img {\n  width: 350px;\n  float: left;\n}\n```\n\n<img style=\"width: 350px; float: left;\" src=\"./assets/kungfubaby.gif\" alt=\"Kung Fu Baby\" />\n<h1 style=\"font-size: 150%; color: #FF0000;\">Min tittel</h1>\n\n---\n\n# CSS: Selectorer\n\nMan kan velge elementer ut i fra tag, ID, klasse (og litt til)\n\n```html\n<img id=\"my-image\" class=\"image\" src=\"./assets/kungfubaby.gif\" alt=\"Kung Fu Baby\" />\n```\n\n```CSS\n/* Alle henter ut samme element: */\nimg { /* .. */ }\n#my-image { /* .. */ }\n.image { /* .. */ }\n\n/* Til og med kombinere */\nimg#my-image.image { /* .. */ }\n```\n\n\n---\n\n# JavaScript\n\nEt programmeringsspråk. Brukt til å gjøre dynamisk endringer på HTML og CSS.\nIkke relatert til «Java»\n\n> \"Java is to Javascript, as Car is to Carpenter\"\n> – Someone\n\n## Eksempel\n\n```js\nvar hello = 'Hello, ';\nvar name = 'Abakus';\nvar helloAbakus = hello + name; //> 'Hello, Abakus'\n```\n\n---\n\n# Javascript\n\nInkluderes i HTML ved en `<script>`-tag\n```html\n<script src=\"myFile.js\" type=\"text/javascript\"></script>\n\n// Or inline\n\n<script type=\"text/javascript\">\nvar hello = 'Hello!';\n</script>\n```\n\n\n---\n# JavaScript\n\n```js\n// Som med matte: f(x, y) = x + y\nvar add = function (x, y) {\n  return x + y;\n};\n\n// Som med matte f(40, 2) -> 42\nvar number = add(40, 2); //> 42\n\nvar number2 = add(add(20, 20), 2); //> 42\n\n```\n\n---\n# JavaScript\n\nKan konstruere \"objeker\" som holder på informasjon:\n\n```js\nvar myPoint = { x: 40, y: 2 };\n\n// Funksjon som tar inn point:\nvar add = function (point) {\n  return point.x + point.y;\n};\nadd(myPoint); //> 42\n```\n\n\n---\n# JavaScript\n\nKommunisere med HTML\n\n```html\n<img src=\"assets/kungfubaby.gif\" id=\"my-image\" alt=\"Gif\" />\n```\n\nVi kan hente det ut i Javascript:\n\n```js\n// Samme selectorer som i CSS\nvar myImage = document.querySelector('#my-image');\n\n// Endre kilde til bilde\nmyImage.src = 'assets/dance.gif';\n```\n\n---\n# JavaScript\n\n<img src=\"assets/kungfubaby.gif\" id=\"my-image-1\" alt=\"Gif\" />\n<a href=\"#\" id=\"change-image\" class=\"btn\" id=\"sound-button\">Kjør kode</a>\n\n\n---\n# Javascript\n\nLytte til brukerinteraksjon.\n```html\n<img src=\"assets/kungfubaby.gif\" id=\"my-image\" alt=\"Gif\" />\n```\n\n```js\nvar myImage = document.querySelector('#my-image');\n\n// Lytte til når noen klikker på bildet\nmyImage.addEventListener('click', function () {\n  myImage.src = 'assets/dance.gif';\n});\n```\n\n---\n\n<img src=\"assets/kungfubaby.gif\" id=\"my-image-2\" alt=\"Gif\" />\n\n\n---\n\n# Javascript: Lister\n\n```js\nvar listOfNumbers = [5, 4, 3, 4, 5];\n\n// Første tall:\nlistOfNumbers[0]; //> 5\nlistOfNumbers[1]; //> 4\n\n// Gå over listen\nvar sum = 0;\nlistOfNumbers.forEach(function (number) {\n  sum = sum + number;\n});\n\nsum; //> 21\n```\n\n---\n\n# Javascript: AJAX\n\nI Javascript kan man gjøre HTTP-kall fra koden:\n\n```js\nhttpRequest.onreadystatechange = function() {\n  if (httpRequest.readyState === 4) {\n    var data = httpRequest.responseText;\n  }\n};\n\nhttpRequest.open('GET', 'http://bekk.no/');\nhttpRequest.send();\n```\n\n---\nclass: middle center\n\n# Demo: jifs!\n\n## Enkel side for GIF-er\n\n<a href=\"./example/static.html\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n---\nclass: middle center\n\n# Demo: jifs!\n\n## Søkeside for GIF-er\n\n<a href=\"./example/index.html\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n---\n\n# Oppsumert\n\n* HTTP — transport\n* HTML – Innhold\n* CSS – Design\n* JavaScript – Oppførsel\n\n---\n\n# Kamera-iteraksjon\n\n<button class=\"btn\" target=\"_blank\" id=\"gest-button\">Toggle demo</button>\n\n<button class=\"btn\" target=\"_blank\" id=\"gest-button-debug\">Show debug</button>\n\n<div id=\"cam-debug\"></div>\n\n---\nbackground-image: url(assets/racing.png)\nclass: cover\n\n# Racer S: WebGL\n\n<a href=\"http://helloracer.com/racer-s/\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nbackground-image: url(assets/gotham.png)\nclass: cover\n\n# Witness Gotham: WebGL\n\n<a href=\"http://witnessgotham.com//\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nbackground-image: url(assets/music.png)\nclass: cover\n\n# Technitone: Web Audio API\n\n<a href=\"http://www.technitone.com/gallery/recent\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nbackground-image: url(assets/quake.png)\nclass: cover\n\n# Quake: EMSCRIPTEN\n\n<a href=\"http://www.quakejs.com/\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nbackground-image: url(assets/ttd.png)\nclass: cover\n\n# Transport Tycoon Deluxe: EMSCRIPTEN\n\n<a href=\"http://epicport.com/en/ttd\" class=\"btn\" target=\"_blank\" id=\"sound-button\">Kjør demo</a>\n\n\n---\nclass: front-page\n\n# Spørsmål?\n\n## mikael.brevik@bekk.no – @mikaelbrevik\n\nSlides: http://github.com/mikaelbr/web-intro-ntnu2016\n";
  document.querySelector('#source').innerHTML = data;

  var slideshow = remark.create({
    ratio: '16:9',
    highlightStyle: 'monokai'
  });

  document.addEventListener('gest', function(gesture) {
    //handle gesture .direction .up .down .left .right .error
    if (gesture.left) {
      slideshow.gotoPreviousSlide();
    } else if (gesture.right) {
      slideshow.gotoNextSlide();
    }
  }, false);
}

function setupSoundButton () {
  var dialupButton = document.querySelector('#sound-button');
  var sound = null;
  dialupButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (sound && sound.paused) {
      return sound.play();
    }
    if (sound && !sound.paused) {
      return sound.pause();
    }
    sound = new Audio('./assets/dial-up-modem-01.mp3');
    sound.play();
  }, false);
}

},{"./gest":2}],2:[function(require,module,exports){
/*
 * @name: gest.js
 * @description: gest.js is a webcam based gesture recognition library that helps developers make webpages more immersive
 * @version: 0.5.0
 * @author: Hadi Michael (http://hadi.io)
 * @acknowledgements: gest.js is an extension of work started by William Wu (https://github.com/wvvvw)
 * @license: MIT License
	The MIT License (MIT)

	Copyright (c) 2013-2014 Hadi Michael (http://hadi.io)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

//setup getUserMedia - this could screw up another implementation of getUserMedia on the page, but really, they shouldn't be using the camera for anything else
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

//initialise default settings
var	settings = {
	framerate: 25,
	videoCompressionRate: 4,
	sensitivity: 80,	//value from 0 to 100 (100 => very sensitive)
	skinFilter: false,
	debug: {
		state: false,
		canvas: null,
		context: null
	}
},

//manage gest's run states - I do this is to keep track of what the user wants to do and where gest is up to in it's initialisation
	gestIsInitialised = false,
	userHasAskedToStart = false,

//declare global stream object that we can stop at any point
	stream,

//declare DOM elements
	video, canvas, context,

/* @constructor */
gest = function() {
	//use singleton design pattern - adopted from https://code.google.com/p/jslibs/wiki/JavascriptTips#Singleton_pattern
	//this shouldn't *really* be a problem, because we only ever return a single instance
	if (gest.prototype._singletonInstance) {
		return gest.prototype._singletonInstance;
	}
	gest.prototype._singletonInstance = this;

	//check if the dom is already ready - this technique is borrowed from jQuery
	if (document.readyState === 'complete') {
		_DOMready.call();
	} else {
		//otherwise wait for DOM to be ready before initialising
		utils.addEventListener('DOMContentLoaded', document, _DOMready);

		//fallback to window.onload, this will always work
		utils.addEventListener('load', window, _DOMready);
	}

	//the ready event handler and self cleanup method
	function _DOMready() {
		utils.removeEventListener('DOMContentLoaded', document, _DOMready);
		utils.removeEventListener('load', window, _DOMready);

		//we need to call and wait for init to finish before we know that we are actually ready
		if (init()) { gestIsInitialised = true; }

		if (userHasAskedToStart && gestIsInitialised) {
			//the user has already asked us to start, but we weren't ready. Now we are... let's try again
			return window.gest.start();
		}

		return false;
	}

	return true;
},

/* @private */
dispatchGestEvent = function(_gestEvent) {
	//console.log(_gestEvent);
	var eventObj = utils.createCustomEvent('gest', document);

	//setup the event object with gesture information
	eventObj.direction = _gestEvent.direction || null;	//direction as a string, ex. left, right, up, down
	eventObj.up = _gestEvent.up || false;				//bool
	eventObj.down = _gestEvent.down || false;			//bool
	eventObj.left = _gestEvent.left || false;			//bool
	eventObj.right = _gestEvent.right || false;			//bool
	eventObj.error = _gestEvent.error || null;			//error message as an object {error (int), message (string)}

	//fire eventObj
	utils.fireEvent(eventObj);
},

/* @private */
init = function () {
	//create required DOM elements
	video = document.createElement('video');
	canvas = document.createElement('canvas');

	if (!!video.canPlayType && !!(canvas.getContext && canvas.getContext('2d')) && !!navigator.getUserMedia) { //check browser support
		//setup DOM elements

		video.width = 300;
		video.height = 225;
		video.setAttribute('style', 'visibility: hidden;');
		document.body.appendChild(video);

		canvas.setAttribute('style', 'width: 300px; display: none;');
		document.body.appendChild(canvas);
		context = canvas.getContext('2d');
	} else {
		throwError(0);
		return false;
	}

	return true;
},

/* @private */
throwError = function(_code, _obj) {
	// setup up error codes
	var _error;

	switch (_code) {
		case 0:
			_error = {code: _code, message: 'gest.js can\'t run in your browser :('};
			break;

		case 1:
			_error = {code: _code, message: 'gest.js could not start.'};
			break;

		case 2:
			_error = {code: _code, message: 'gest.js has already started.'};
			break;

		case 10:
			_error = {code: _code, message: 'DEEENIED! gest.js needs webcam access.', obj: _obj};
			break;

		case 11:
			_error = {code: _code, message: 'A constraint specified is not supported by the web-browser.', obj: _obj};
			break;

		case 12:
			_error = {code: _code, message: 'No media tracks of the type specified in the constraints are found.', obj: _obj};
			break;

		case 13:
			_error = {code: _code, message: 'Couldn\'t get access to webcam.', obj: _obj};
			break;

		default:
			_error = null;
			break;
	}

	//tell the developer and user about the error
	if (settings.debug.state) { console.error(_error.message); }
	dispatchGestEvent( {error: _error} );
},

/* @private */
grabVideoFrame = function (width, height) {
	//grab a frame from the video and compress it to the width/height specified - we do this by drawing it onto a temporary canvas
	try {
		//copy the get the current frame from the video and draw it (compressed) on the canvas
		context.drawImage(video, 0, 0, width, height);

		var currentFrame = context.getImageData(0, 0, width, height);

		//calculate the difference map
		if (settings.skinFilter) {
			differenceMap.get(skinFilter.apply(currentFrame), settings.sensitivity, width, height);
		} else {
			differenceMap.get(currentFrame, settings.sensitivity, width, height);
		}
	} catch (e) {
		if (e.name === "NS_ERROR_NOT_AVAILABLE") {
			//firefox isn't ready yet... hang tight, it'll kick in shortly
			return false;
		} else {
			throw e;
		}
	}
},

/* @private */
/* skin filtering using HUE (colour) SATURATION (dominance of the colour) VALUE (brightness of the colour)
 * this algorithms reliability is heavily dependant on lighting conditions - see this journal article http://wwwsst.ums.edu.my/data/file/Su7YcHiV9AK5.pdf
 */
skinFilter = {
	//TODO: fine tune these values
	huemin: 0.0,
	huemax: 0.1,
	satmin: 0.3,
	satmax: 1.0,
	valmin: 0.4,
	valmax: 1.0,
	rgb2hsv: function (r, g, b){
		r = r / 255;
		g = g / 255;
		b = b / 255;

		var max = Math.max(r, g, b),
			min = Math.min(r, g, b),

			h, s, v = max,

			d = max - min;

		if (max === 0) {
			s = 0;
		} else {
			s = d/max;
		}

		if (max == min) {
			h = 0; // achromatic
		} else {
			switch(max){
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
				default:
					break;
			}
			h /= 6;
		}

		return [h, s, v];
	},
	apply: function(currentFrame) {
		var totalPix = currentFrame.width * currentFrame.height,
			indexValue = totalPix * 4,
			countDataBigAry = 0;

		for (var y = 0; y < currentFrame.height; y++)
		{
			for (var x = 0 ; x < currentFrame.width ; x++)
			{
				indexValue = x + y * currentFrame.width;
				var r = currentFrame.data[countDataBigAry],
					g = currentFrame.data[countDataBigAry+1],
					b = currentFrame.data[countDataBigAry+2],
					a = currentFrame.data[countDataBigAry+3],

					hsv = this.rgb2hsv(r,g,b);

				//when the hand is too close (hsv[0] > 0.59 && hsv[0] < 1.0)
				//skin range on HSV values
				if ( ( (hsv[0] > this.huemin && hsv[0] < this.huemax) || (hsv[0] > 0.59 && hsv[0] < 1.0) ) && (hsv[1] > this.satmin && hsv[1] < this.satmax) && (hsv[2] > this.valmin && hsv[2] < this.valmax) ) {
					currentFrame[countDataBigAry]   = r;
					currentFrame[countDataBigAry+1] = g;
					currentFrame[countDataBigAry+2] = b;
					currentFrame[countDataBigAry+3] = a;
				} else {
					currentFrame.data[countDataBigAry]		= 255;
					currentFrame.data[countDataBigAry+1]	= 255;
					currentFrame.data[countDataBigAry+2]	= 255;
					currentFrame.data[countDataBigAry+3]	= 0;
				}
				countDataBigAry = indexValue * 4;
			}
		}
		return currentFrame;
	}
},

/* @private */
differenceMap = {
	priorFrame: false,

	get: function (currentFrame, sensitivity, width, height) {
		var delt = context.createImageData(width, height),
			totalx = 0,
			totaly = 0,
			totald = 0; //total number of changed pixels

		if (this.priorFrame !== false) {
			var totaln	= delt.width * delt.height,
				pix		= totaln * 4,
				maxAssessableColorChange = 256 * 3;

			while ((pix -= 4) >= 0) {
				//find the total change in color for this pixel-set
				var d = Math.abs(currentFrame.data[pix] - this.priorFrame.data[pix]) +
						Math.abs(currentFrame.data[pix+1] - this.priorFrame.data[pix+1]) +
						Math.abs(currentFrame.data[pix+2] - this.priorFrame.data[pix+2]); //don't do [pix+3] because alpha doesn't change

				if (d > maxAssessableColorChange*Math.abs((sensitivity-100)/100)) {
					//if there has been significant change in color, mark the changed pixel
					delt.data[pix]		= 255;	//R
					delt.data[pix+1]	= 0;	//G
					delt.data[pix+2]	= 0;	//B
					delt.data[pix+3]	= 255;	//alpha
					totald += 1;
					totalx += ((pix/4) % delt.width);
					totaly += (Math.floor((pix/4) / delt.height));
				} else {
					//otherwise keep it the same color
					delt.data[pix]		= currentFrame.data[pix];
					delt.data[pix+1]	= currentFrame.data[pix+1];
					delt.data[pix+2]	= currentFrame.data[pix+2];
					delt.data[pix+3]	= currentFrame.data[pix+3]; //change to 0 to hide user video
				}
			}
		}

		//console.log(totald);
		if (totald > 0) {
			//if any pixels have changed, check for a gesture
			lookForGesture.search( {x: totalx, y: totaly, d: totald} );

			//show in debug canvas
			if (settings.debug.state && settings.debug.context.putImageData) {
				settings.debug.canvas.width = width;
				settings.debug.canvas.height = height;
				settings.debug.context.putImageData(delt, 0, 0);
			}
		}
		this.priorFrame = currentFrame;
	}
},

/* @private */
lookForGesture = {
	prior: false,
	filteringFactor: 0.9,
	filteredTotal: 0,		//number of changed pixel after filtering
	minTotalChange: 300,	//minimum total number of pixels that need to change, before we decide that a gesture is happening
	minDirChange: 2,		//minimum number of pixels that need to change to assert a directional change
	longDirChange: 7,		//minimum number of pixels that need to change to assert a LONG directional change
	state: 0,				//States: 0 waiting for gesture, 1 waiting for next move after gesture, 2 waiting for gesture to end
	search: function(_movement){
		var movement = {
			x: _movement.x / _movement.d,
			y: _movement.y / _movement.d,
			d: _movement.d //delta (or total change)
		};

		//filtering
		this.filteredTotal = (this.filteringFactor * this.filteredTotal) + ((1-this.filteringFactor) * movement.d);

		var dfilteredTotal = movement.d - this.filteredTotal,
			good = dfilteredTotal > this.minTotalChange; //check that total pixel change is grater than threshold

		//console.log(good, dfilteredTotal);
		switch(this.state){
			case 0:
				if (good) {
					//found a gesture, waiting for next move
					this.state = 1;
					lookForGesture.prior = movement;
				}
				break;

			case 1:
				//got next move, do something based on direction
				this.state = 2;

				var dx = movement.x - lookForGesture.prior.x,
					dy = movement.y - lookForGesture.prior.y,

					dirx = Math.abs(dy) < Math.abs(dx); //(dx,dy) is on a bowtie

				//console.log(dirx, dx, dy);
				if (dx < -this.minDirChange && dirx) {
					dispatchGestEvent({
						direction: 'Right',
						right: true
					});
				} else if (dx > this.minDirChange && dirx) {
					dispatchGestEvent({
						direction: 'Left',
						left: true
					});
				}

				if (dy > this.minDirChange && !dirx) {
					if (Math.abs(dy) > this.longDirChange) {
						dispatchGestEvent({
							direction: 'Long down',
							down: true
						});
					} else {
						dispatchGestEvent({
							direction: 'Down',
							down: true
						});
					}
				} else if (dy < -this.minDirChange && !dirx) {
					if (Math.abs(dy) > this.longDirChange) {
						dispatchGestEvent({
							direction: 'Long up',
							up: true
						});
					} else {
						dispatchGestEvent({
							direction: 'Up',
							up: true
						});
					}
				}
				break;

			case 2:
				//wait for gesture to end
				if (!good) {
					this.state = 0; //gesture ended
				}
				break;

			default:
				break;
		}
	}
},

/* @private */
utils = {
	/* Event Handling utility by @hadi_michael - MIT License */
	htmlEvents: { //list of real events
		//<body> and <frameset> Events
		onload:1,
		onunload:1,
		//Form Events
		onblur:1,
		onchange:1,
		onfocus:1,
		onreset:1,
		onselect:1,
		onsubmit:1,
		//Image Events
		onabort:1,
		//Keyboard Events
		onkeydown:1,
		onkeypress:1,
		onkeyup:1,
		//Mouse Events
		onclick:1,
		ondblclick:1,
		onmousedown:1,
		onmousemove:1,
		onmouseout:1,
		onmouseover:1,
		onmouseup:1
	},

	addEventListener: function(evntName, elem, func) {
		if (elem.addEventListener)  //W3C
			elem.addEventListener(evntName, func, false);
		else if (elem.attachEvent && this.htmlEvents['on'+evntName]) { //OLD IE < 9
			elem.attachEvent('on'+evntName, func);
		} else {
			elem['on'+evntName] = func;
		}
	},

	removeEventListener: function(evntName, elem, func) {
		if (elem.removeEventListener)  //W3C
			elem.removeEventListener(evntName, func, false);
		else if (elem.detachEvent && this.htmlEvents['on'+evntName]) { //OLD IE < 9
			elem.detachEvent('on'+evntName, func);
		} else {
			elem['on'+evntName] = null;
		}
	},

	createCustomEvent: function(evntName, elem) {
		try {
			var evnt;
			if (elem.createEvent) { //W3C
				evnt = elem.createEvent('Event');
				evnt.initEvent(evntName, true, true);
			} else if (elem.createEventObject) { //OLD IE < 9
				evnt = elem.createEventObject();
				evnt.eventType = evntName;
			}
			evnt.evntName = evntName;
			evnt.evntElement = elem;
			return evnt;
		} catch (e) {
			console.error(e);
			return false;
		}
	},

	fireEvent: function(evntObj) {
		try {
			if (evntObj.evntElement.dispatchEvent){
				evntObj.evntElement.dispatchEvent(evntObj);
			} else if (evntObj.evntElement.fireEvent && this.htmlEvents['on'+evntObj.evntName]) { // IE < 9
				evntObj.evntElement.fireEvent('on'+evntObj.eventType, evntObj); // can only fire real events (such as 'click')
			} else if (evntObj.evntElement[evntObj.evntName]){
				evntObj.evntElement[evntObj.evntName]();
			} else if (evntObj.evntElement['on'+evntObj.evntName]){
				evntObj.evntElement['on'+evntObj.evntName]();
			}
		} catch (e) {
			console.error(e);
		}
	}
	/* /Event Handling utility */
};

/* @public */
gest.prototype.start = function () {
	userHasAskedToStart = true;

	//so, the user wants us to start, but are we ready to? Stop, if we're not. This will get called again when we are ready.
	if (!gestIsInitialised) { return false; }

	//check to see if we are already running
	if (!video || !(video.paused || video.ended || video.seeking || video.readyState < video.HAVE_FUTURE_DATA)) { throwError(2); return false; }

	navigator.getUserMedia(
		// constraints
		{
			audio: false,
			video: true
		},

		// successCallback
		function(_LocalMediaStream) {
			stream = _LocalMediaStream;

			window.URL = window.URL || window.webkitURL;
			video.src = window.URL.createObjectURL(stream);

			utils.addEventListener('canplaythrough', video,
				//play the video once it can play through
				function() {
					video.play();

					utils.addEventListener('playing', video,
						function() {

							var width = Math.floor(video.getBoundingClientRect().width / settings.videoCompressionRate),
								height = Math.floor(video.getBoundingClientRect().height / settings.videoCompressionRate);

							//define canvas sizes
							canvas.width = width;
							canvas.height = height;

							//capture frames on set intervals
							setInterval(function() { grabVideoFrame(width, height); }, 1000/settings.framerate);
						}
					);
				}
			);
		},

		// errorCallback
		function(error) {
			if (error.PERMISSION_DENIED || error.name === 'PERMISSION_DENIED') {
				throwError(10, error);
			} else if (error.NOT_SUPPORTED_ERROR || error.name === 'NOT_SUPPORTED_ERROR') {
				throwError(11, error);
			} else if (error.MANDATORY_UNSATISFIED_ERROR || error.name === 'MANDATORY_UNSATISFIED_ERROR') {
				throwError(12, error);
			} else {
				throwError(13, error);
		}
	});

	return !!navigator.getUserMedia;
};

/* @public */
gest.prototype.stop = function () {
	if (!gestIsInitialised || !userHasAskedToStart) { return false; }

	if (video) { video.src = ''; }
	return !!stream.getTracks()[0].stop();
};

/* @public */
gest.prototype.options = {
	subscribeWithCallback: function(callback) {
		if (callback) {
			utils.addEventListener('gest', document, function(gesture) {
				callback(gesture);
			});
		}
	},
	sensitivity: function(_value) {
		if (_value >= 100) {
			settings.sensitivity = 100;
		} else if (_value <= 0) {
			settings.sensitivity = 0;
		} else {
			settings.sensitivity = _value;
		}
	},
	debug: function(_state, parent) {
		settings.debug.state = _state;

    if (!parent) {
      parent = document.body;
    }

		if (_state) {
			//for visualising the diff map
			settings.debug.canvas = document.createElement('canvas');
			settings.debug.canvas.setAttribute('style', 'width: 300px; height: 230px; display: block; position: absolute; right: 0; bottom: 0; z-index:9999;');
			parent.appendChild(settings.debug.canvas);
			settings.debug.context = settings.debug.canvas.getContext('2d');

			//settings.debug.canvas.setAttribute('style', 'width: 300px; display: block;');
			//video.setAttribute('style', 'visibility: visible');
			//canvas.setAttribute('style', 'visibility: visible');
		} else {
			settings.debug.canvas.setAttribute('style', 'display: none;');
			settings.debug.canvas.parentNode.removeChild(settings.debug.canvas);
			// video.setAttribute('style', 'visibility: hidden');
			// canvas.setAttribute('style', 'visibility: hidden');
		}

		return settings.debug;
	},
	skinFilter: function(_state) {
		settings.skinFilter = _state;
	}
};

module.exports = new gest();

},{}]},{},[1]);

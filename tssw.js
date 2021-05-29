importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if(workbox)
{
	console.log('Workbox Loaded!');
}
else
{
	console.log('workbox failed to load? wtf');
}

const urlsToCache = [
	{ url: "/", revision: '1' },
	{ url: "/index.html", revision: '1' },
	{ url: "/service-worker.js", revision: '1' },
	{ url: "/assets/css/materialize.min.css", revision: '1' },
	{ url: "/assets/styles/style.css", revision: '1' },
	{ url: "/assets/js/index.js", revision: '1' },
	{ url: "/assets/js/sw.js", revision: '1' },
	{ url: "/assets/js/jquery-migrate-3.3.0.min.js", revision: '1' },
	{ url: "/assets/js/jquery-3.5.1.min.js", revision: '1' },
	{ url: "/assets/js/slick/slick.min.js", revision: '1' },
	{ url: "/assets/js/slick/slick.css", revision: '1' },
	{ url: "/assets/js/slick/slick-theme.css", revision: '1' },
	{ url: "/assets/js/slick/ajax-loader.gif", revision: '1' },
	{ url: "/assets/js/slick/fonts/slick.woff", revision: '1' },
	{ url: "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js", revision: '1' },
	{ url: "https://kit.fontawesome.com/fd0c5ab4fe.js", revision: '1' },
	{ url: "https://kit-free.fontawesome.com/releases/latest/js/free-v4-shims.min.js", revision: '1' },
	{ url: "https://kit-free.fontawesome.com/releases/latest/js/free.min.js", revision: '1' },
	{ url: "/pages/home.html", revision: '1' }
];

workbox.precaching.precacheAndRoute(urlsToCache);

workbox.routing.registerRoute(
	({request}) => request.destination === 'pages',
	new workbox.strategies.StaleWhileRevalidate()
);

/*
const CACHE_NAME = "cache-akuradz-web-v1";
var urlsToCache = [
	"/",
	"/nav.html",
	"/index.html",
	"/manifest.json",
	"/pages/home.html",
	"/pages/aboutus.html",
	"/pages/contact.html",
	"/pages/product.html",
	"assets/css/materialize.min.css",
	"assets/css/style-custom.css",
	"assets/js/materialize.min.js",
	"assets/images/landing-image.png",
	"assets/images/icon24x24.png",
	"assets/images/icon192x192.png",	
	"assets/images/icon512x512.png",
	"assets/images/apple-icon192x192.png",
	"assets/js/nav.js",
	"assets/js/href.js",
	"https://fonts.googleapis.com/icon?family=Material+Icons",
	"https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"
];*/
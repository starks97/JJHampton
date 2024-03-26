/* empty css                          */
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import 'react';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, i as addAttribute, k as renderSlot, l as renderHead } from '../astro_BSb6jHE3.mjs';
import { $ as $$Image } from './generic_CxTAtxPa.mjs';
import { create } from 'zustand';

const gallery = [
	{
		src: "src/images/auto1.webp",
		title: "Image 1",
		id: 1,
		category: "wrap-vinyl"
	},
	{
		src: "src/images/auto2.webp",
		title: "Image 2",
		id: 2,
		category: "auto-detailing"
	},
	{
		src: "src/images/auto3.webp",
		title: "Image 3",
		id: 3,
		category: "car-wash"
	},
	{
		src: "src/images/auto4.webp",
		title: "Image 4",
		id: 4,
		category: "painting"
	},
	{
		src: "src/images/auto4.webp",
		title: "Image 4",
		id: 5,
		category: "painting"
	},
	{
		src: "src/images/auto3.webp",
		title: "Image 3",
		id: 6,
		category: "car-wash"
	},
	{
		src: "src/images/auto3.webp",
		title: "Image 3",
		id: 7,
		category: "car-wash"
	},
	{
		src: "src/images/auto3.webp",
		title: "Image 3",
		id: 8,
		category: "car-wash"
	}
];
const social = [
	{
		title: "Facebook",
		link: "https://www.facebook.com"
	},
	{
		title: "Instagram",
		link: "https://www.instagram.com"
	},
	{
		title: "TikTok",
		link: "https://www.tiktok.com"
	}
];
const contact = {
	phone: "+123456789",
	email: "",
	address: "1234 Street Name, City Name"
};
const about = {
	title: "About Us",
	description: "Welcome to our auto body shop, where automotive excellence and personalized service converge. With a profound passion for cars and an unwavering commitment to quality craftsmanship, we strive to surpass your expectations with every repair and customization project. Our seasoned team blends expertise with meticulous attention to detail, ensuring your vehicle receives the utmost care it deserves. At our shop, we're dedicated to delivering exceptional service and unmatched results, making us your premier destination for all your auto body needs."
};
const services = [
	{
		title: "Auto Detailing",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "src/images/auto2.webp"
	},
	{
		title: "Car Wash",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "src/images/auto3.webp"
	},
	{
		title: "Wrap Vinyl",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "src/images/auto3.webp"
	},
	{
		title: "Painting",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		image: "src/images/auto4.webp"
	}
];
const menu = [
	{
		title: "About",
		link: "#about"
	},
	{
		title: "Services",
		link: "#services"
	},
	{
		title: "Gallery",
		link: "#gallery"
	},
	{
		title: "Contact",
		link: "#contact"
	}
];
const data = {
	gallery: gallery,
	social: social,
	contact: contact,
	about: about,
	services: services,
	menu: menu
};

const logo = new Proxy({"src":"/_astro/logo.DB7uwMix.webp","width":577,"height":432,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jeffersonespinoza/Desktop/body-shop/src/images/logo.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$6 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="border-b border-gray-500" id="navbar" data-astro-cid-5blmo7yk> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-1" data-astro-cid-5blmo7yk> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Image", $$Image, { "src": logo, "class": "", "alt": "JJ Hampton Luxury Autowork", "width": 120, "height": 150, "data-astro-cid-5blmo7yk": true })} </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" data-astro-cid-5blmo7yk> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-base rounded-lg text-sm px-6 py-3 text-center" data-astro-cid-5blmo7yk> <a href="#contact" data-astro-cid-5blmo7yk>Contact Us</a> </button> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" data-astro-cid-5blmo7yk> <span class="sr-only" data-astro-cid-5blmo7yk>Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-astro-cid-5blmo7yk> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-astro-cid-5blmo7yk></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky" data-astro-cid-5blmo7yk> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0" data-astro-cid-5blmo7yk> ${data["menu"].map((item) => renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(item.link, "href")} class="block py-2 px-3 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-lg" data-astro-cid-5blmo7yk> ${item.title} </a> </li>`)} </ul> </div> </div> </nav> `;
}, "/Users/jeffersonespinoza/Desktop/body-shop/src/components/Navbar.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="footer" data-astro-cid-sz7xmlte> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8" data-astro-cid-sz7xmlte> <div class="flex flex-col md:flex-row justify-center items-center md:justify-between" data-astro-cid-sz7xmlte> <div class="mb-6 md:mb-0" data-astro-cid-sz7xmlte> <a href="/" class="flex items-center" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": logo, "width": 250, "height": 300, "alt": "FlowBite Logo", "data-astro-cid-sz7xmlte": true })} </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase" data-astro-cid-sz7xmlte>
Resources
</h2> <ul class="text-gray-500 font-medium" data-astro-cid-sz7xmlte> ${data["menu"].map((item) => {
    return renderTemplate`<li class="mb-4" data-astro-cid-sz7xmlte> <a${addAttribute(item.link, "href")} class="hover:underline" data-astro-cid-sz7xmlte> ${item.title} </a> </li>`;
  })} </ul> </div> <div data-astro-cid-sz7xmlte> <h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase" data-astro-cid-sz7xmlte>
Follow us
</h2> <ul class="text-gray-500 font-medium" data-astro-cid-sz7xmlte> ${data["social"].map((item) => renderTemplate`<li class="mb-4" data-astro-cid-sz7xmlte> <a${addAttribute(item.link, "href")} class="hover:underline" data-astro-cid-sz7xmlte> ${item.title} </a> </li>`)} </ul> </div> <div data-astro-cid-sz7xmlte> <h2 class="mb-6 text-sm font-semibold text-gray-200 uppercase" data-astro-cid-sz7xmlte>
Legal
</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium" data-astro-cid-sz7xmlte> <li class="mb-4" data-astro-cid-sz7xmlte> <a href="#" class="hover:underline" data-astro-cid-sz7xmlte>Privacy Policy</a> </li> <li data-astro-cid-sz7xmlte> <a href="#" class="hover:underline" data-astro-cid-sz7xmlte>Terms &amp; Conditions</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" data-astro-cid-sz7xmlte> <div class="sm:flex sm:items-center sm:justify-between" data-astro-cid-sz7xmlte> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400" data-astro-cid-sz7xmlte>© 2023 <a href="https://flowbite.com/" class="hover:underline" data-astro-cid-sz7xmlte>JJ Hampton Luxury Autowork™</a>. All Rights Reserved.
</span> <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse items-center" data-astro-cid-sz7xmlte> <a href="#" class="text-gray-400 hover:text-gray-200" data-astro-cid-sz7xmlte> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19" data-astro-cid-sz7xmlte> <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" data-astro-cid-sz7xmlte></path> </svg> <span class="sr-only" data-astro-cid-sz7xmlte>Facebook page</span> </a> <a href="#" class="text-gray-400 hover:text-gray-200" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sz7xmlte><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-sz7xmlte></path></svg> <span class="sr-only" data-astro-cid-sz7xmlte>Discord community</span> </a> <a href="#" class="text-gray-400 hover:text-gray-400" data-astro-cid-sz7xmlte> <svg class="w-10 h-10 bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" data-astro-cid-sz7xmlte> <path fill="#212121" fill-rule="evenodd" d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191	C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z" clip-rule="evenodd" data-astro-cid-sz7xmlte></path><path fill="#ec407a" fill-rule="evenodd" d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011	c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413	c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413V20.607L29.208,20.607z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1	c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391	C17.213,29.127,17.972,30.274,19.079,30.832z" clip-rule="evenodd" data-astro-cid-sz7xmlte></path><path fill="#fff" fill-rule="evenodd" d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157	c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923V28.79c-0.007,1.867-1.523,3.379-3.393,3.379	c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391	c0.359,0,0.705,0.056,1.03,0.159v-3.19c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183	c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z" clip-rule="evenodd" data-astro-cid-sz7xmlte></path><path fill="#81d4fa" fill-rule="evenodd" d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848	C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019	c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338	c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069	c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183	C14.374,24.749,17.611,21.463,21.635,21.38z" clip-rule="evenodd" data-astro-cid-sz7xmlte></path> </svg> <span class="sr-only" data-astro-cid-sz7xmlte>TikTok</span> </a> </div> </div> </div> </footer> `;
}, "/Users/jeffersonespinoza/Desktop/body-shop/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", "</head> <body> ", " ", " ", ' <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/jeffersonespinoza/Desktop/body-shop/src/layouts/Layout.astro", void 0);

const useGalleryStore = create((set) => ({
  images: data["gallery"],
  filteredImages: data["gallery"],
  setImageFilter: (filter) => {
    set((state) => ({
      ...state,
      filteredImages: filter === "all" ? state.images : state.images.filter((image) => image.category === filter)
    }));
  }
}));

function FilterButton({
  handleFilter,
  category,
  filter
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ",
      onClick: () => handleFilter(filter),
      children: category
    }
  ) });
}

function Gallery() {
  const gallery = useGalleryStore();
  const handleFilter = (filter) => {
    gallery.setImageFilter(filter);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center py-4 md:py-8 flex-wrap ", children: [
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          handleFilter,
          category: "All Categories",
          filter: "all"
        }
      ),
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          handleFilter,
          category: "Wrap Vinyl",
          filter: "wrap-vinyl"
        }
      ),
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          handleFilter,
          category: "Auto Detailing",
          filter: "auto-detailing"
        }
      ),
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          handleFilter,
          category: "Car Wash",
          filter: "car-wash"
        }
      ),
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          handleFilter,
          category: "Painting",
          filter: "painting"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10", children: gallery.filteredImages.map((image) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative hover:scale-105 transition-transform duration-300 ease-in-out w-full h-80 ",
        role: "button",
        id: "gallery-image",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image.src,
            alt: image.title,
            className: "w-full h-full object-cover rounded-lg"
          }
        )
      },
      image.id
    )) })
  ] });
}

const $$Astro$3 = createAstro();
const $$ServiceCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative hover:scale-105 transition-transform duration-300 ease-in-out w-full h-80 transition-all duration-300 filter grayscale-0 hover:grayscale" data-astro-cid-uhzbvkqe> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover rounded-lg" data-astro-cid-uhzbvkqe> <div class="absolute inset-0 text-xl flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100" data-astro-cid-uhzbvkqe> <p class="text-2xl font-bold mb-5 text-gray-200 text-center" id="card-title" data-astro-cid-uhzbvkqe> ${title}.
</p> </div> </div> `;
}, "/Users/jeffersonespinoza/Desktop/body-shop/src/components/ServiceCard.astro", void 0);

const AutoInfo = new Proxy({"src":"/_astro/auto.BpEjF3d1.webp","width":1097,"height":981,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jeffersonespinoza/Desktop/body-shop/src/images/auto.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 w-full h-full items-center my-20 gap-10" data-astro-cid-vxl4wgev> <div id="info-image" class="justify-self-center" data-astro-cid-vxl4wgev> ${renderComponent($$result, "Image", $$Image, { "src": AutoInfo, "alt": "Auto", "class": "", "data-astro-cid-vxl4wgev": true })} </div> <div class="w-full" data-astro-cid-vxl4wgev> <h2 class="text-xl font-bold text-start mb-5 text-gray-200" data-astro-cid-vxl4wgev>Contact Us</h2> <h3 class="text-4xl font-bold text-start mb-5 text-gray-200" data-astro-cid-vxl4wgev>
HAVE QUESTIONS?
</h3> <h3 class="text-4xl font-bold text-start mb-5 text-gray-200" data-astro-cid-vxl4wgev>
WE'RE HERE TO HELP
</h3> <form class="max-w-md" data-astro-cid-vxl4wgev> <div class="grid md:grid-cols-2 md:gap-6" data-astro-cid-vxl4wgev> <div class="relative z-0 w-full mb-5 group" data-astro-cid-vxl4wgev> <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required data-astro-cid-vxl4wgev> <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" data-astro-cid-vxl4wgev>First name</label> </div> <div class="relative z-0 w-full mb-5 group" data-astro-cid-vxl4wgev> <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required data-astro-cid-vxl4wgev> <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" data-astro-cid-vxl4wgev>Last name</label> </div> </div> <div class="relative z-0 w-full mb-5 group" data-astro-cid-vxl4wgev> <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required data-astro-cid-vxl4wgev> <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" data-astro-cid-vxl4wgev>Phone number (123-456-7890)</label> </div> <div class="relative z-0 w-full mb-5 group" data-astro-cid-vxl4wgev> <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required data-astro-cid-vxl4wgev> <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" data-astro-cid-vxl4wgev>Email address</label> </div> <div class="relative z-0 w-full mb-5 group" data-astro-cid-vxl4wgev> <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required data-astro-cid-vxl4wgev> <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" data-astro-cid-vxl4wgev>Message</label> </div> <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-6 py-3 text-center font-bold" data-astro-cid-vxl4wgev>Submit</button> </form> </div> </div> `;
}, "/Users/jeffersonespinoza/Desktop/body-shop/src/components/Info.astro", void 0);

const auto2 = new Proxy({"src":"/_astro/auto2.DAVZ3Z7-.webp","width":1080,"height":806,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jeffersonespinoza/Desktop/body-shop/src/images/auto2.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-full p-5 md:my-20" data-astro-cid-v2cbyr3p> <div class="flex flex-col justify-center items-start h-full" data-astro-cid-v2cbyr3p> <h3 class="text-md font-bold mb-5 text-gray-200" data-astro-cid-v2cbyr3p>WHAT WE DO</h3> <h1 class="text-4xl font-bold mb-5 text-blue-900" data-astro-cid-v2cbyr3p>FULL-SERVICE</h1> <span class="text-4xl font-bold mb-5 text-blue-900" data-astro-cid-v2cbyr3p>DETAILING FOR CARS</span> <span class="text-4xl font-bold mb-5 text-blue-600 text-white" data-astro-cid-v2cbyr3p>Welcome to JJ Hampton Luxury Autowork!</span> <p class="text-gray-200 text-lg" data-astro-cid-v2cbyr3p> ${data["about"]["description"]} </p> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-full sm:w-auto focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3 text-center mt-5" data-astro-cid-v2cbyr3p> <a href="#contact" data-astro-cid-v2cbyr3p>Get A Quote</a> </button> </div> <div id="about-image" class="w-full flex items-center justify-center" data-astro-cid-v2cbyr3p> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg shadow", "src": auto2, "alt": "Auto", "width": 500, "height": 500, "data-astro-cid-v2cbyr3p": true })} </div> </div> `;
}, "/Users/jeffersonespinoza/Desktop/body-shop/src/components/About.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to QuickLinkr", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-5 md:p-10" data-astro-cid-j7pv25f6> <div id="#about" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} </div> <div id="divider" data-astro-cid-j7pv25f6></div> <div class="mb-10" id="services" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center mb-20" data-astro-cid-j7pv25f6> <h2 class="text-6xl my-10 font-bold mb-5" id="main-title" data-astro-cid-j7pv25f6>
Our services
</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" data-astro-cid-j7pv25f6> ${data["services"].map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": service.title, "image": service.image, "data-astro-cid-j7pv25f6": true })}`)} </div> </div> <div id="divider" data-astro-cid-j7pv25f6></div> <div class="mb-20" id="gallery" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center my-15" data-astro-cid-j7pv25f6> <h2 class="text-6xl my-10 font-bold mb-5" id="main-title" data-astro-cid-j7pv25f6>
Our Gallery
</h2> </div> ${renderComponent($$result2, "Gallery", Gallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/jeffersonespinoza/Desktop/body-shop/src/components/gallery", "client:component-export": "Gallery", "data-astro-cid-j7pv25f6": true })} </div> <div id="divider" data-astro-cid-j7pv25f6></div> <div id="contact" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Info", $$Info, { "data-astro-cid-j7pv25f6": true })} </div> </main> ` })} `;
}, "/Users/jeffersonespinoza/Desktop/body-shop/src/pages/index.astro", void 0);

const $$file = "/Users/jeffersonespinoza/Desktop/body-shop/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

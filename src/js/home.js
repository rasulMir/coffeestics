import '../scss/home.scss';
import { Dropdown } from 'bootstrap';
import $ from 'jquery';
import 'slick-carousel';

function addDelClass( node, className ) {
	if ( node.classList.contains(`${ className }_active`) ) {
			node.classList.remove(`${ className }_active`)
		} else {
			node.classList.add(`${ className }_active`)
		}
}

document.addEventListener('DOMContentLoaded', () => {

	if ( +window.innerWidth <  640) {
		
		const menuIcon = document.querySelector('.navbar__menu-icon')
		const navbarMenu = document.querySelector('.navbar__menu')

		menuIcon.addEventListener('click', () => {
			addDelClass(menuIcon, 'navbar__menu-icon')
			addDelClass(navbarMenu, 'navbar__menu')
		})
		
	}

	const drinksMenu = document.querySelector('.navbar__menu-drinks')
	const navbarMenuSublist = document.querySelector('.navbar__menu-sublist')
	const navbarMenuSubitems = document.querySelectorAll('.navbar__menu-subitem')
	const topFilterBtns = document.querySelectorAll('.price__currency-btn')
	const countryFilterBtns = document.querySelectorAll('.country-prices__filter-btn')
	const cityFilterBtns = document.querySelectorAll('.city-prices__filter-btn')

	drinksMenu.addEventListener('click', () => {
		addDelClass(drinksMenu, 'navbar__menu-drinks')
		addDelClass(navbarMenuSublist, 'navbar__menu-sublist')

		if ( +window.innerWidth <  640) {
			if (drinksMenu.classList.contains('navbar__menu-drinks_active')) {
				drinksMenu.style.height = drinksMenu.clientHeight + navbarMenuSublist.clientHeight + 'px'
			} else {
				drinksMenu.style.height = drinksMenu.clientHeight - navbarMenuSublist.clientHeight + 'px'
			}
		}

		navbarMenuSubitems.forEach(( child ) => {

			child.addEventListener('click', (e) => {
				navbarMenuSubitems.forEach(item => item.classList.remove('navbar__menu-subitem_active'))
				addDelClass(e.currentTarget, 'navbar__menu-subitem')
			})
		});
	})

	topFilterBtns.forEach(child => {
		child.addEventListener('click', (e) => {
			topFilterBtns.forEach(item => item.classList.remove('top-filter-btn_active'))
			addDelClass(e.currentTarget, 'top-filter-btn')
		})
	})

	countryFilterBtns.forEach(child => {
		child.addEventListener('click', (e) => {
			countryFilterBtns.forEach(item => item.classList.remove('top-filter-btn_active'))
			addDelClass(e.currentTarget, 'top-filter-btn')
		})
	})

	cityFilterBtns.forEach(child => {
		child.addEventListener('click', (e) => {
			cityFilterBtns.forEach(item => item.classList.remove('top-filter-btn_active'))
			addDelClass(e.currentTarget, 'top-filter-btn')
		})
	})

	$('.coffees-slider').slick({
		accessibility: true,
		infinite: true,
		autoplay: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>',
		slidesToScroll: 1,
		slidesToShow: 4,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 639,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 7
				}
			},
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 8
				}
			}
		]
	});
	
	$('.price-slider').slick({
		centerMode: false,
		slidesToShow: 1,
		slidesToScroll: 1, 
		prevArrow: '<button type="button" class="slick-prev price-slider-arrow"><i class="icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next  price-slider-arrow"><i class="icon-arrow-right"></i></button>',
	})


})

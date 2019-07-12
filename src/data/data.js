import powerBank from './../img/powerbank.jpg';
import ps4 from './../img/ps4.jpg';
import iPhone7 from './../img/iphone7+.jpg';
import dxRacer from './../img/dxRacer.jpg';
import AppleiPad from './../img/Apple iPad.jpg';
import MacBook from './../img/macBook.jpg';
import fridge from './../img/fridge.jpg';
import washer from './../img/washer.jpg';
import dishwasher from './../img/dishwasher.jpg';
import teapot from './../img/teapot.jpg';
import blender from './../img/blender.jpg';
import computerDesk from './../img/computerDesk.jpg';
import sofa from './../img/sofa.jpg';
import bed from './../img/bed.jpg';
import closet from './../img/closet.jpg';
import householdAppliances from './../img/household-appliances.jpg';
import furniture from './../img/furniture.jpg';
import electronics from './../img/electronics.jpg';

export const electronicsItems = [
  {
    name: 'iPhone 7+',
    category: 'Електроніка',
    price: '20 940.30 грн',
    img: iPhone7,
    to: 'electronics',
    id: 1,
    info: 'info about item',
  },
  {
    name: 'power Bank',
    category: 'Електроніка',
    price: '520.00 грн',
    img: powerBank,
    to: 'electronics',
    id: 2,
    info: 'info about item',
  },
  {
    name: 'ps4',
    category: 'Електроніка',
    price: '10 500.00 грн',
    img: ps4,
    to: 'electronics',
    id: 3,
    info: 'info about item',
  },
  {
    name: 'Apple iPad 2018 Wi-Fi + LTE 128GB Silver',
    category: 'Електроніка',
    price: '16 100.00 грн',
    img: AppleiPad,
    to: 'electronics',
    id: 4,
    info: 'info about item',
  },
  {
    name: 'MacBook',
    category: 'Електроніка',
    price: '31 400.00 грн',
    img: MacBook,
    to: 'electronics',
    id: 5,
    info: 'info about item',
  },
];

export const householdAppliancesItems = [
  {
    name: 'Холодильник',
    category: 'Побутова техніка',
    price: '14 061.09 грн',
    img: fridge,
    to: 'household-appliances',
    id: 1,
    info: 'info about item',
  },
  {
    name: 'Стиралка',
    category: 'Побутова техніка',
    price: '12 860.33 грн',
    img: washer,
    to: 'household-appliances',
    id: 2,
    info: 'info about item',
  },
  {
    name: 'Посудомойка',
    category: 'Побутова техніка',
    price: '13 317.00 грн',
    img: dishwasher,
    to: 'household-appliances',
    id: 3,
    info: 'info about item',
  },
  {
    name: 'Чайник',
    category: 'Побутова техніка',
    price: '600.00 грн',
    img: teapot,
    to: 'household-appliances',
    id: 4,
    info: 'info about item',
  },
  {
    name: 'Блендер',
    category: 'Побутова техніка',
    price: '615.00 грн',
    img: blender,
    to: 'household-appliances',
    id: 5,
    info: 'info about item',
  },
];

export const furnitureItems = [
  {
    name: 'dxRacer',
    category: 'Меблі',
    price: '9 950.00 грн',
    img: dxRacer,
    to: 'furniture',
    id: 1,
    info: 'info about item',
  },
  {
    name: "Комп'ютерний стіл",
    category: 'Меблі',
    price: '2 237.00 грн.',
    img: computerDesk,
    to: 'furniture',
    id: 2,
    info: 'info about item',
  },
  {
    name: 'Диван',
    category: 'Меблі',
    price: '25 466.00 грн.',
    img: sofa,
    to: 'furniture',
    id: 3,
    info: 'info about item',
  },
  {
    name: 'Кровать',
    category: 'Меблі',
    price: '75 780.00 грн.',
    img: bed,
    to: 'furniture',
    id: 4,
    info: 'info about item',
  },
  {
    name: 'Шафа купе',
    category: 'Меблі',
    price: '5 286.35грн.',
    img: closet,
    to: 'furniture',
    id: 5,
    info: 'info about item',
  },
];

export const headerNav = [
  {
    name: 'Головна',
    to: '/',
    scrollToId: false,
  },
  {
    name: 'Магазин',
    to: '/shop',
    scrollToId: false,
  },
  {
    name: 'Контакты',
    to: 'about-us',
    scrollToId: true,
  },
];

export const category = [
  {
    name: 'Побутова техніка',
    img: householdAppliances,
    to: '/shop/household-appliances',
    categoryClass: true,
  },
  {
    name: 'Меблі',
    img: furniture,
    to: '/shop/furniture',
    categoryClass: true,
  },
  {
    name: 'Електроніка',
    img: electronics,
    to: '/shop/electronics',
    categoryClass: true,
  },
];

export const dataSlider = [
  {
    name: 'iPhone 7+',
    category: 'Електроніка',
    price: '20 940.30 грн',
    img: iPhone7,
    to: 'electronics',
    id: 1,
    info: 'info about item',
  },
  {
    name: 'MacBook',
    category: 'Електроніка',
    price: '31 400.00 грн',
    img: MacBook,
    to: 'electronics',
    id: 5,
    info: 'info about item',
  },
  {
    name: 'dxRacer',
    category: 'Меблі',
    price: '9 950.00 грн',
    img: dxRacer,
    to: 'furniture',
    id: 1,
    info: 'info about item',
  },
  {
    name: 'power Bank',
    category: 'Електроніка',
    price: '520.00 грн',
    img: powerBank,
    to: 'electronics',
    id: 2,
    info: 'info about item',
  },
  {
    name: 'ps4',
    category: 'Електроніка',
    price: '10 500.00 грн',
    img: ps4,
    to: 'electronics',
    id: 3,
    info: 'info about item',
  },
];

export const popularItems = [
  {
    name: 'iPhone 7+',
    category: 'Електроніка',
    price: '20 940.30 грн',
    img: iPhone7,
    to: 'electronics',
    id: 1,
    info: 'info about item',
  },
  {
    name: 'dxRacer',
    category: 'Меблі',
    price: '9 950.00 грн',
    img: dxRacer,
    to: 'furniture',
    id: 1,
    info: 'info about item',
  },
  {
    name: 'power Bank',
    category: 'Електроніка',
    price: '520.00 грн',
    img: powerBank,
    to: 'electronics',
    id: 2,
    info: 'info about item',
  },
  {
    name: 'ps4',
    category: 'Електроніка',
    price: '10 500.00 грн',
    img: ps4,
    to: 'electronics',
    id: 3,
    info: 'info about item',
  },
];

export let allItem = electronicsItems
  .concat(householdAppliancesItems, furnitureItems)
  .sort(() => Math.random() - 0.5);

export let navsBurgerMenu = headerNav.slice();

category.forEach(elem => navsBurgerMenu.splice(2, 0, elem));

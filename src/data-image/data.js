import powerBank from './powerbank.jpg';
import ps_four from './ps4.jpg';
import iphone_seven_plus from './iphone7+.jpg';
import dx_racer from './dxRacer.jpg';
import apple_ipad from './Apple iPad.jpg';
import mac_book from './macBook.jpg';
import fridge from './fridge.jpg';
import washer from './washer.jpg';
import dishwasher from './dishwasher.jpg';
import teapot from './teapot.jpg';
import blender from './blender.jpg';
import computer_desk from './computerDesk.jpg';
import sofa from './sofa.jpg';
import bed from './bed.jpg';
import closet from './closet.jpg';
import household_appliances from './household-appliances.jpg';
import furniture from './furniture.jpg';
import electronics from './electronics.jpg';

export const electronicsItems = [
  {
    name: 'iPhone 7+',
    category: 'Електроніка',
    price: '20 940.30 грн',
    img: iphone_seven_plus,
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
    img: ps_four,
    to: 'electronics',
    id: 3,
    info: 'info about item',
  },
  {
    name: 'Apple iPad 2018 Wi-Fi + LTE 128GB Silver',
    category: 'Електроніка',
    price: '16 100.00 грн',
    img: apple_ipad,
    to: 'electronics',
    id: 4,
    info: 'info about item',
  },
  {
    name: 'macBook',
    category: 'Електроніка',
    price: '31 400.00 грн',
    img: mac_book,
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
    name: 'dx_racer',
    category: 'Меблі',
    price: '9 950.00 грн',
    img: dx_racer,
    to: 'furniture',
    id: 1,
    info: 'info about item',
  },
  {
    name: "Комп'ютерний стіл",
    category: 'Меблі',
    price: '2 237.00 грн.',
    img: computer_desk,
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
    img: household_appliances,
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
    img: iphone_seven_plus,
    to: 'electronics',
    id: 1,
    info: 'info about item',
  },
  {
    name: 'macBook',
    category: 'Електроніка',
    price: '31 400.00 грн',
    img: mac_book,
    to: 'electronics',
    id: 5,
    info: 'info about item',
  },
  {
    name: 'dx_racer',
    category: 'Меблі',
    price: '9 950.00 грн',
    img: dx_racer,
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
    img: ps_four,
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
    img: iphone_seven_plus,
    to: 'electronics',
    id: 1,
    info: 'info about item',
  },
  {
    name: 'dx_racer',
    category: 'Меблі',
    price: '9 950.00 грн',
    img: dx_racer,
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
    img: ps_four,
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

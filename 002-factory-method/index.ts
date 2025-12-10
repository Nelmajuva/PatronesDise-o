import { BeefRestaurant, ChickenRestaurant, Restaurant } from "./feed.ts";
import type { THamburguer } from "./feed.ts";

let restaurant: Restaurant;
let burgerType: THamburguer = 'chicken';

if (burgerType === 'chicken') restaurant = new ChickenRestaurant();
else restaurant = new BeefRestaurant();

restaurant.orderHamburguer();
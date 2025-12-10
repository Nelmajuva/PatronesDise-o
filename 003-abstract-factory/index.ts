import { FastFoodRestaurantFactory, HealthyRestaurantFactory } from "./feed.ts";
import type { IRestaurantFactory } from "./feed.js";

const main = (factory: IRestaurantFactory) => {
    const hamburguer = factory.createHamburguer();
    const drink = factory.createDrink();

    hamburguer.prepare();
    drink.pour();


}

console.log('-- FastFood --');

main( new FastFoodRestaurantFactory() );

console.log('\n-- HealthyFood --');

main( new HealthyRestaurantFactory() );
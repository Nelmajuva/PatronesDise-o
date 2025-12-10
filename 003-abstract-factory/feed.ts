/**
 * ! Patrón Abstract Factory:
 * Es un patrón que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente, creamos
 * fábricas que producen un conjunto de objetos relacionados.
 *
 * Es útil cuando necesitas crear objetos que son parte de una familia y
 * quieres asegurarte de que estos objetos se complementen entre sí.
 * 
 * El propósito del Abstract Factory es crear familias de objetos
 * relacionados sin especificar las clases concretas de cada uno
 * de esos objetos en el código principal.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

interface IHamburguer {
    prepare(): void;
}

interface IDrink {
    pour(): void;
}

interface IRestaurantFactory {
    createHamburguer(): IHamburguer;
    createDrink(): IDrink;
}

class ChickenHamburguer implements IHamburguer {
    prepare(): void {
        console.log('Crafting a chicken hamburguer... 🐔');
    }
}

class BeefHamburguer implements IHamburguer {
    prepare(): void {
        console.log('Crafting a beef hamburguer... 🐂');
    }
}

class Water implements IDrink {
    pour(): void {
        console.log('Pour a glass of water.');
    }
}

class Soda implements IDrink {
    pour(): void {
        console.log('Pour a glass of soda.');
    }
}

class FastFoodRestaurantFactory implements IRestaurantFactory {
    createHamburguer(): IHamburguer {
        return new BeefHamburguer();
    }

    createDrink(): IDrink {
        return new Soda();
    }
}

class HealthyRestaurantFactory implements IRestaurantFactory {
    createHamburguer(): IHamburguer {
        return new ChickenHamburguer();
    }

    createDrink(): IDrink {
        return new Water();
    }
}

export type { IRestaurantFactory };
export { FastFoodRestaurantFactory, HealthyRestaurantFactory }
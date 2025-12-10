/**
 * ! Patrón Factory Method:
 * Es un patrón que permite crear objetos sin especificar la clase
 * exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o
 * métodos que encapsulan esta lógica.
 *
 * Es útil cuando una clase no puede anticipar la clase de objetos que
 * se debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 */

type THamburguer = 'chicken' | 'beef';

interface IHamburguer {
    prepare(): void;
}

class ChickenHamburguer implements IHamburguer {
    prepare(): void {
        console.log('This is a chicken hamburguer! 🐔');
    }
}

class BeefHamburguer implements IHamburguer {
    prepare(): void {
        console.log('This is a beef hamburguer! 🐂');
    }
}

abstract class Restaurant {
    abstract createHamburguer(): IHamburguer;
    orderHamburguer(): void {
        const hamburguer = this.createHamburguer();
        hamburguer.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburguer(): IHamburguer {
        return new ChickenHamburguer();
    }
}

class BeefRestaurant extends Restaurant {
    override createHamburguer(): IHamburguer {
        return new BeefHamburguer();
    }
}

export type { THamburguer };
export { BeefRestaurant, ChickenRestaurant, Restaurant }
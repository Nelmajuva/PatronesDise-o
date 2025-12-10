/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * y queremos que el proceso de construcción sea independiente de las partes
 * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  private cpu: string;
  private ram: string;
  private storage: string;
  private gpu: string;

  constructor(
    cpu: string = "CPU not found",
    ram: string = "RAM not found",
    storage: string = "Storage not found",
    gpu: string = "GPU not found"
  ) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
    this.gpu = gpu;
  }

  displayConfiguration() {
    console.log(`
        Computer Configuration
        ================================
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Storage: ${this.storage}
        GPU: ${this.gpu}    
    `);
  }

  public set setCPU(cpu: string) {
    this.cpu = cpu;
  }

  public set setRAM(ram: string) {
    this.ram = ram;
  }

  public set setStorage(storage: string) {
    this.storage = storage;
  }

  public set setGPU(gpu: string) {
    this.gpu = gpu;
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.setCPU = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.setRAM = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.setStorage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.setGPU = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

export default ComputerBuilder;

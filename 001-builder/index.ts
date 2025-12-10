import ComputerBuilder from "./computer.ts";

const computerOne = new ComputerBuilder()
                                .setCPU('AMD')
                                .setRAM('32GB')
                                .setStorage('2TB SSD')
                                .setGPU('Nvidia 5070 TI')
                                .build();

const computerTwo = new ComputerBuilder()
                                .setCPU('Intel')
                                .setRAM('24GB')
                                .setStorage('1TB SSD')
                                .setGPU('Nvidia 5070 TI')
                                .build();

console.log(computerOne);
console.log(computerTwo);
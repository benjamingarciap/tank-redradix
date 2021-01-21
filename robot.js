"use strict";

async function main(tank) {

  // auxiliary functions

  async function fireLeftOrRight(tank) {
    let dir = 0;
    if (Math.random() > 0.5) {
      dir = 180;
    }
    await tank.shoot(dir, 700);
  }

  // main loop

  while (true) {

    // go down
    while (await tank.getY() > 500) {
      await tank.scan(270, 10) !== 0 ? await tank.shoot(270, 700): null; 
      await tank.scan(300, 10) !== 0 ? await tank.shoot(300, 700): null; 
      await tank.scan(360, 10) !== 0 ? await tank.shoot(360, 700): null
      await tank.scan(35, 10) !== 0 ? await tank.shoot(35, 700): null ; 
      await tank.scan(90, 10) !== 0 ? await tank.shoot(90, 700): null; 
      await tank.scan(120, 10) !== 0 ? await tank.shoot(120, 700): null;
      await tank.scan(180, 10) !== 0 ? await tank.shoot(180, 700): null;
      await tank.scan(200, 10) !== 0 ? await tank.shoot(200, 700): null; 
      await tank.drive(270, 50);
    }

    // go right
    while (await tank.getX() < 500) {
      await tank.scan(360, 10) !== 0 ? await tank.shoot(360, 700): null ; // dispara izquierda
      await tank.scan(35, 10) !== 0 ? await tank.shoot(35, 700): null ; // dispara izquierda
      await tank.scan(90, 10) !== 0 ? await tank.shoot(90, 700): null; 
      await tank.drive(360, 50);
    }
  
    // go up
    while (await tank.getY() < 600) {
        await tank.scan(90, 10) !== 0 ? await tank.shoot(90, 700): null; // dispara izquierda
        await tank.scan(120, 10) !== 0 ? await tank.shoot(120, 700): null;
        await tank.scan(180, 10) !== 0 ? await tank.shoot(180, 700): null;
        await tank.drive(90, 50);
    }

    // go left
    while (await tank.getX() > 600) {
      await tank.scan(180, 10) !== 0 ? await tank.shoot(180, 700): null; // dispara izquierda
      await tank.scan(200, 10) !== 0 ? await tank.shoot(200, 700): null; // dispara izquierda
      await tank.scan(270, 10) !== 0 ? await tank.shoot(270, 700): null; // dispara abajo;
      await tank.drive(180, 50);
    }


    
    // shoot
    //   // go up
    //   while (await tank.getY() < 600) {
      //     await tank.drive(90, 50);
      // }
    // await tank.shoot(90, 200);

    // await tank.shoot(270, 200); // dispara abajo
    // await tank.shoot(360, 200);
    // await fireLeftOrRight(tank);
    // // shoot
    // await tank.shoot(90, 700);
    // await fireLeftOrRight(tank);
    // // shoot
    // await tank.shoot(90, 700);
    // await fireLeftOrRight(tank);
    // // shoot
    // await tank.shoot(90, 700);
    // await fireLeftOrRight(tank);
    // // shoot
    // await tank.shoot(90, 700);
    // await fireLeftOrRight(tank);
  }
}

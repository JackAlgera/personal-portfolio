import {Boid, Coordinate} from './boid.model';

export const BOID_SIZE = 20;
const TOTAL_BOIDS = 150;

const VISUAL_RANGE = 45;
const ALIGNMENT_FACTOR = 0.1;
const COHESION_FACTOR = 0.001;

const TURN_MARGIN = 150;
const TURN_FACTOR = 0.20;

const AVOID_RANGE = 20;
const AVOID_FACTOR = 0.05;

const AVOID_MOUSE_RANGE = 60;
const AVOID_MOUSE_FACTOR = 0.1;

const INIT_SPEED = 4;
const MAX_SPEED = 6;
const MIN_SPEED = 3;

export function initBoids(container: HTMLDivElement) {
  const rekt = container.getBoundingClientRect();

  return [...Array(TOTAL_BOIDS)].map((_, index) => {
    const x = Math.random() * rekt.width;
    const y = Math.random() * rekt.height;
    const theta = Math.random() * 2 * Math.PI;
    const vx = Math.sin(theta) * INIT_SPEED;
    const vy = -Math.cos(theta) * INIT_SPEED;
    return {
      pos: { x: x, y: y },
      vel: { x: vx, y: vy },
      index: { i: 0, j: 0 }
    } as Boid;
  })
}

export function updateBoids(boids: Boid[], mouseX: number, mouseY: number,  container: HTMLDivElement): Boid[] {
  const rekt = container.getBoundingClientRect();
  return boids.map(boid => updateBoid(boid, boids, mouseX, mouseY, rekt));
}

function updateBoid(boid: Boid, boids: Boid[], mouseX: number, mouseY: number, rekt: DOMRect): Boid {
  let pos = boid.pos;
  let vel = boid.vel;

  let visualRange: Boid[] = [];
  let avoidNeighbors: Boid[] = [];

  boids.forEach(otherBoid => {
    const dist = Math.sqrt(Math.pow(boid.pos.x - otherBoid.pos.x, 2) + Math.pow(boid.pos.y - otherBoid.pos.y, 2));
    if (dist < VISUAL_RANGE) {
      visualRange.push(otherBoid);
    }
    if (dist < AVOID_RANGE) {
      avoidNeighbors.push(otherBoid);
    }
  });

  vel = avoid(pos, vel, avoidNeighbors);
  vel = alignment(vel, visualRange);
  vel = cohesion(pos, vel, visualRange);
  vel = checkEdges(pos, vel, rekt);
  vel = limitVelocity(vel);
  vel = avoidMouse(pos, vel, mouseX, mouseY);

  return {
    ...boid,
    vel: vel,
    pos: {
      x: pos.x + vel.x,
      y: pos.y + vel.y
    },
  };
}

function avoidMouse(pos: Coordinate, vel: Coordinate, mouseX: number, mouseY: number): Coordinate {
  const dist = Math.sqrt(Math.pow(pos.x - mouseX, 2) + Math.pow(pos.y - mouseY, 2));
  if (dist > AVOID_MOUSE_RANGE) {
    return vel;
  }
  let closeDx = pos.x - mouseX;
  let closeDy = pos.y - mouseY;
  return {
    x: vel.x + closeDx * AVOID_MOUSE_FACTOR,
    y: vel.y + closeDy * AVOID_MOUSE_FACTOR
  };
}

function avoid(pos: Coordinate, vel: Coordinate, boids: Boid[]): Coordinate {
  let closeDx = 0;
  let closeDy = 0;
  boids.forEach(otherBoid => {
    closeDx += pos.x - otherBoid.pos.x;
    closeDy += pos.y - otherBoid.pos.y;
  });
  return {
    x: vel.x + closeDx * AVOID_FACTOR,
    y: vel.y + closeDy * AVOID_FACTOR
  };
}

function alignment(vel: Coordinate, boids: Boid[]): Coordinate {
  let avgVelX = 0;
  let avgVelY = 0;
  boids.forEach(otherBoid => {
    avgVelX += otherBoid.vel.x;
    avgVelY += otherBoid.vel.y;
  });

  if (boids.length > 0) {
    avgVelX /= boids.length;
    avgVelY /= boids.length;
  }

  return {
    x: vel.x + (avgVelX - vel.x) * ALIGNMENT_FACTOR,
    y: vel.y + (avgVelY - vel.y) * ALIGNMENT_FACTOR
  };
}

function cohesion(pos: Coordinate, vel: Coordinate, boids: Boid[]): Coordinate {
  let avgPosX = 0;
  let avgPosY = 0;
  boids.forEach(otherBoid => {
    avgPosX += otherBoid.pos.x;
    avgPosY += otherBoid.pos.y;
  });

  if (boids.length > 0) {
    avgPosX /= boids.length;
    avgPosY /= boids.length;
  }

  return {
    x: vel.x + (avgPosX - pos.x) * COHESION_FACTOR,
    y: vel.y + (avgPosY - pos.y) * COHESION_FACTOR
  };
}

function checkEdges(pos: Coordinate, vel: Coordinate, rekt: DOMRect): Coordinate {
  let velX = vel.x;
  let velY = vel.y;
  if (pos.x < 0 - BOID_SIZE + TURN_MARGIN) {
    velX += TURN_FACTOR;
  }
  if (pos.x > rekt.width - TURN_MARGIN) {
    velX -= TURN_FACTOR;
  }
  if (pos.y < 30 + TURN_MARGIN) {
    velY += TURN_FACTOR;
  }
  if (pos.y > rekt.height - TURN_MARGIN) {
    velY -= TURN_FACTOR;
  }
  return {
    x: velX,
    y: velY
  };
}

function limitVelocity(vel: Coordinate): Coordinate {
  const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
  if (speed > MAX_SPEED) {
    return {
      x: (vel.x / speed) * MAX_SPEED,
      y: (vel.y / speed) * MAX_SPEED
    };
  }
  if (speed < MIN_SPEED) {
    return {
      x: (vel.x / speed) * MIN_SPEED,
      y: (vel.y / speed) * MIN_SPEED
    };
  }
  return vel;
}

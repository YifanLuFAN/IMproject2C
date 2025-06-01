//Note! The structure of this code 
//is borrowed from openprocessing, and some parts directly quote the source code on the website.
let ps;
let bigger = 3;

function setup() {
  createCanvas(640, 460);
  ps = new ParticleSystem(createVector(width / 2, height / 2));
}

function draw() {
  background(0);
  ps.run();
  ps.addParticle();
}

class ParticleSystem {
  constructor(location) {
    this.origin = location.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}

class Particle {
  constructor(l) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.location = l.copy();
    this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    if (mouseIsPressed) {
      if (mouseButton === LEFT) {
        let strength = 0.002;
        for (let i = 0; i < 100; i++) {
          strength = 0.001 * i;
        }
        this.applyAttraction(createVector(mouseX, mouseY), strength);
      } else {
        let strength = 100.1;
        for (let i = 0; i < 10; i++) {
          strength = 0.1 * i / 10;
        }
        this.applyWind(createVector(mouseX, mouseY), strength);
      }
    }

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 3.0;
  }

  display() {
    stroke(0, this.lifespan);
    fill(random(255), random(255), random(255), this.lifespan);
    rectMode(CENTER);
    rect(this.location.x, this.location.y, 8 + bigger, 8 + bigger);
    bigger += 0.515;
    if (bigger > 30) {
      bigger = 3;
    }
  }

  applyAttraction(targetPos, strength) {
    let difference = p5.Vector.sub(targetPos, this.location);
    let force = p5.Vector.mult(difference, strength + 0.1);
    this.acceleration = force;
  }

  applyWind(targetPos, strength) {
    let difference = p5.Vector.sub(this.location, targetPos);
    let distance = p5.Vector.dist(this.location, targetPos);
    let force = p5.Vector.mult(difference, strength / distance);
    this.acceleration = force;
  }

  isDead() {
    return this.lifespan < 0.0001;
  }
}

import { Stage } from './render';
import { Block } from './block';
import { setCamera } from './motion';
import * as THREE from 'three';
import { gsap } from 'gsap';

export class Game {
  static STATES = {
    LOADING: 'loading',
    PLAYING: 'playing',
    READY: 'ready',
    ENDED: 'ended',
    RESETTING: 'resetting'
  };

  blocks: Block[] = [];
  state: string = Game.STATES.LOADING;

  newBlocks: THREE.Group;
  placedBlocks: THREE.Group;
  choppedBlocks: THREE.Group;

  scoreContainer: HTMLElement;
  mainContainer: HTMLElement;
  startButton: HTMLElement;
  instructions: HTMLElement;

  stage: Stage;

  constructor() {
    this.stage = new Stage();

    this.mainContainer = document.getElementById('container') as HTMLElement;
    this.scoreContainer = document.getElementById('score') as HTMLElement;
    this.startButton = document.getElementById('start-button') as HTMLElement;
    this.instructions = document.getElementById('instructions') as HTMLElement;
    this.scoreContainer.innerHTML = '0';

    this.newBlocks = new THREE.Group();
    this.placedBlocks = new THREE.Group();
    this.choppedBlocks = new THREE.Group();

    this.stage.add(this.newBlocks);
    this.stage.add(this.placedBlocks);
    this.stage.add(this.choppedBlocks);

    this.addBlock();
    this.tick();

    this.updateState(Game.STATES.READY);

    document.addEventListener('keydown', e => {
      if (e.keyCode == 32) this.onAction();
    });

    document.addEventListener('click', e => {
      this.onAction();
    });

    document.addEventListener('touchstart', e => {
      e.preventDefault();
    });
  }

  updateState(newState: string) {
    for (let key in Game.STATES) this.mainContainer.classList.remove(Game.STATES[key as keyof typeof Game.STATES]);
    this.mainContainer.classList.add(newState);
    this.state = newState;
  }

  onAction() {
    switch (this.state) {
      case Game.STATES.READY:
        this.startGame();
        break;
      case Game.STATES.PLAYING:
        this.placeBlock();
        break;
      case Game.STATES.ENDED:
        this.restartGame();
        break;
    }
  }

  startGame() {
    if (this.state != Game.STATES.PLAYING) {
      this.scoreContainer.innerHTML = '0';
      this.updateState(Game.STATES.PLAYING);
      this.addBlock();
    }
  }

  restartGame() {
    this.updateState(Game.STATES.RESETTING);

    let oldBlocks = this.placedBlocks.children;
    let removeSpeed = 0.2;
    let delayAmount = 0.02;
    for (let i = 0; i < oldBlocks.length; i++) {
      gsap.to(oldBlocks[i].scale, { duration: removeSpeed, x: 0, y: 0, z: 0, delay: (oldBlocks.length - i) * delayAmount, ease: "power1.in", onComplete: () => { this.placedBlocks.remove(oldBlocks[i]); } });
      gsap.to(oldBlocks[i].rotation, { duration: removeSpeed, y: 0.5, delay: (oldBlocks.length - i) * delayAmount, ease: "power1.in" });
    }
    let cameraMoveSpeed = removeSpeed * 2 + (oldBlocks.length * delayAmount);
    setCamera(this.stage.camera, 2, cameraMoveSpeed);

    let countdown = { value: this.blocks.length - 1 };
    gsap.to(countdown, { duration: cameraMoveSpeed, value: 0, onUpdate: () => { this.scoreContainer.innerHTML = String(Math.round(countdown.value)); } });

    this.blocks = this.blocks.slice(0, 1);

    setTimeout(() => {
      this.startGame();
    }, cameraMoveSpeed * 1000);
  }

  placeBlock() {
    let currentBlock = this.blocks[this.blocks.length - 1];
    let newBlocks: any = currentBlock.place();
    this.newBlocks.remove(currentBlock.mesh);
    if (newBlocks.placed) this.placedBlocks.add(newBlocks.placed);
    if (newBlocks.chopped) {
      this.choppedBlocks.add(newBlocks.chopped);
      let positionParams: { [key: string]: any } = { y: '-=30', ease: "power1.in", onComplete: () => this.choppedBlocks.remove(newBlocks.chopped) };
      let rotateRandomness = 10;
      let rotationParams = {
        delay: 0.05,
        x: newBlocks.plane == 'z' ? ((Math.random() * rotateRandomness) - (rotateRandomness / 2)) : 0.1,
        z: newBlocks.plane == 'x' ? ((Math.random() * rotateRandomness) - (rotateRandomness / 2)) : 0.1,
        y: Math.random() * 0.1,
      };
      if (newBlocks.chopped.position[newBlocks.plane] > newBlocks.placed.position[newBlocks.plane]) {
        positionParams[newBlocks.plane as 'x' | 'y' | 'z'] = '+=' + (40 * Math.abs(newBlocks.direction));
      } else {
        positionParams[newBlocks.plane as 'x' | 'y' | 'z'] = '-=' + (40 * Math.abs(newBlocks.direction));
      }
      gsap.to(newBlocks.chopped.position, { duration: 1, ...positionParams });
      gsap.to(newBlocks.chopped.rotation, { duration: 1, ...rotationParams });
    }

    this.addBlock();
  }

  addBlock() {
    let lastBlock = this.blocks[this.blocks.length - 1];

    if (lastBlock && lastBlock.state == Block.STATES.MISSED) {
      return this.endGame();
    }

    this.scoreContainer.innerHTML = String(this.blocks.length - 1);

    let newKidOnTheBlock = new Block(lastBlock);
    this.newBlocks.add(newKidOnTheBlock.mesh);
    this.blocks.push(newKidOnTheBlock);

    setCamera(this.stage.camera, this.blocks.length * 2);

    if (this.blocks.length >= 5) this.instructions.classList.add('hide');
  }

  endGame() {
    this.updateState(Game.STATES.ENDED);
  }

  tick() {
    this.blocks[this.blocks.length - 1].tick();
    this.stage.render();
    requestAnimationFrame(() => { this.tick() });
  }
}
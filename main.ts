import { IAEngine } from './IAEngine';
import { IAPlayer } from './IAPlayer';

class Main {
    private engineDiv: HTMLElement;
    private engine: IAEngine;
    constructor() {
        this.engineDiv = document.getElementById('engineDiv') as HTMLElement;
        this.engine = new IAEngine('InteractiveAudioDemo_HTML');
        this.engine.style.transform = `translateX(${IAPlayer.PLAYER_WIDTH / -2}px`;
        this.initEngine();
        this.scaleEngine();
        this.execEngine();
    }
    private initEngine() {
        this.engine.appendToParent(this.engineDiv);
    }
    private scaleEngine() {
        let scaleValue: number;
        const isLandscape = window.matchMedia('(orientation: landscape)').matches;
        if (isLandscape) {
            const percentageWidth = window.innerWidth * 0.25;
            scaleValue = Math.max(1, percentageWidth / IAPlayer.PLAYER_WIDTH);
        } else {
            const maxWidth = window.innerWidth - 20;
            scaleValue = maxWidth / IAPlayer.PLAYER_WIDTH;
        }
        this.engineDiv.style.transform = `scale(${scaleValue})`;
    }
    private execEngine() {
        this.engine.exec();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Main();
});
document.addEventListener('dragstart', (event: Event) => {
    event.preventDefault();
});

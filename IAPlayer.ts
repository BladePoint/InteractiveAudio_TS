import { UIElement } from '../UserInterface_TS/UIElement.js';
import { ShadedRect } from '../UserInterface_TS/iPlayer';
/*import { CircleButton, DoubleProgressSeekBar, GlassPanel, RectButton, ShadedRect, TriangleShadow,
         iconDownGradient, iconUpGradient, ICON_UP_TOP_HEX, ICON_UP_BOTTOM_HEX, ICON_DOWN_TOP_HEX, ICON_DOWN_BOTTOM_HEX, SHADOW_UP_HEX, SHADOW_DOWN_HEX
       } from '../UserInterface_TS/iPlayer';*/
import { TextField } from '../UserInterface_TS/TextField';
import { AcuteTriangle, Rectangle } from '../UserInterface_TS/Primitives';
import { secondsToHHMMSS } from '../Utilities_TS/mathUtils';

export class IAPlayer extends UIElement {
    static PLAYER_WIDTH = 352;
    static PLAYER_HEIGHT = 103;

    rectButtonLeft = 6;
    rectButtonTop = 15;
    circleButtonLeft = 4;
    circleButtonTop = 51;
    sceneGlassWidth = 136;
    sceneGlassLeft = 108;
    rectButtonWidth = 44;
    rectButtonHeight = 32;
    circleButtonDiameter = 48;
    titleGlassWidth = 248;
    titleGlassLeft = 52;

    /*replayFunction: Function;
    pauseFunction: Function;
    playFunction: Function;
    skipFunction: Function;*/

    shadedRect!: ShadedRect;
    /*titleGlass: GlassPanel;
    sceneGlass: GlassPanel;

    resetButton: ResetButton;
    optionsButton: OptionsButton;
    replayButton: ReplayButton;
    pauseButton: PauseButton;
    playButton: PlayButton;
    skipButton: SkipButton;

    iae: TextField;
    titleText: TextField;
    sceneText: TextField;
    progressText: TextField;
    totalText: TextField;
    doubleProgressSeekBar: DoubleProgressSeekBar;*/

    constructor() {
        super();
        this.createBackground();
        /*this.createRectButtons();
        this.createCircleButtons();
        this.createSeekBar();
        this.createText();*/
        this.appendChild(this.shadedRect);
        /*this.appendChild(this.titleGlass);
        this.appendChild(this.sceneGlass);
        this.appendChild(this.resetButton);
        this.appendChild(this.optionsButton);
        this.appendChild(this.replayButton);
        this.appendChild(this.pauseButton);
        this.appendChild(this.playButton);
        this.appendChild(this.skipButton);
        this.appendChild(this.iae);
        this.appendChild(this.titleText);
        this.appendChild(this.sceneText);
        this.appendChild(this.progressText);
        this.appendChild(this.totalText);
        this.appendChild(this.doubleProgressSeekBar);
        this.notReadyState();*/
    }
    createBackground(): void {
        this.shadedRect = new ShadedRect({ width: IAPlayer.PLAYER_WIDTH, height: IAPlayer.PLAYER_HEIGHT });
        //this.titleGlass = new GlassPanel({ width: this.titleGlassWidth, height: 32, left: this.titleGlassLeft, top: this.rectButtonTop });
        //this.sceneGlass = new GlassPanel({ width: this.sceneGlassWidth, height: 26, left: this.sceneGlassLeft, top: this.circleButtonTop });
    }/*
    createRectButtons(): void {
        this.resetButton = new ResetButton({
            width: this.rectButtonWidth,
            height: this.rectButtonHeight,
            left: this.rectButtonLeft,
            top: this.rectButtonTop
        });
        this.optionsButton = new OptionsButton({
            width: this.rectButtonWidth,
            height: this.rectButtonHeight,
            left: IAPlayer.PLAYER_WIDTH - this.rectButtonWidth - this.rectButtonLeft,
            top: this.rectButtonTop
        });
    }
    createCircleButtons(): void {
        this.replayButton = new ReplayButton({
            upFunction: this.replayCallback,
            diameter: this.circleButtonDiameter,
            left: this.circleButtonLeft,
            top: this.circleButtonTop
        });
        this.pauseButton = new PauseButton({
            upFunction: this.pauseCallback,
            diameter: this.circleButtonDiameter,
            left: this.circleButtonLeft * 2 + this.circleButtonDiameter,
            top: this.replayButton.style.top
        });
        this.playButton = new PlayButton({
            upFunction: this.playCallback,
            diameter: this.circleButtonDiameter,
            left: IAPlayer.PLAYER_WIDTH - this.circleButtonLeft * 2 - this.circleButtonDiameter * 2,
            top: this.replayButton.style.top
        });
        this.skipButton = new SkipButton({
            upFunction: this.skipCallback,
            diameter: this.circleButtonDiameter,
            left: IAPlayer.PLAYER_WIDTH - this.circleButtonLeft - this.circleButtonDiameter,
            top: this.replayButton.style.top
        });
    }
    createSeekBar(): void {
        this.doubleProgressSeekBar = new DoubleProgressSeekBar({
            width: this.sceneGlassWidth - 4,
            height: 6,
            left: this.sceneGlassLeft + 2,
            top: this.circleButtonTop + 30
        });
    }
    createText(): void {
        this.iae = new TextField({
            text: 'Interactive Audio Engine',
            width: IAPlayer.PLAYER_WIDTH,
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            fontSize: 10,
            color: '#000000',
            textAlign: 'center',
            top: 2,
        });
        this.iae.style.textShadow = '1px 1px 0px #ffffff';
        this.titleText = new TextField({
            width: this.titleGlassWidth - 2,
            fontFamily: 'Consolas, monospace',
            fontSize: 16,
            textAlign: 'center',
            color: '#000000',
            top: `${this.rectButtonTop + 10}px`,
            left: `${this.titleGlassLeft + 1}px`
        });
        this.sceneText = new TextField({
            width: this.sceneGlassWidth - 2,
            fontFamily: 'Consolas, monospace',
            fontSize: 12,
            textAlign: 'center',
            color: '#000000',
            left: this.sceneGlassLeft + 1,
            top: this.circleButtonTop + 10
        });
        this.progressText = new TextField({
            text: '--:--',
            fontFamily: 'Consolas, monospace',
            fontSize: 10,
            textAlign: 'left',
            color: '#000000',
            left: this.sceneGlassLeft + 2,
            top: IAPlayer.PLAYER_HEIGHT - 14
        });
        this.totalText = new TextField({
            text: '--:--',
            fontFamily: 'Consolas, monospace',
            fontSize: 10,
            textAlign: 'right',
            color: '#000000',
            right: 2 - this.sceneGlassLeft - this.sceneGlassWidth,
            top: IAPlayer.PLAYER_HEIGHT - 14
        });
    }
    setTitleText(newText: string): void {
        const cleanedText = this.cleanText(newText);
        this.titleText.text = cleanedText;
    }
    setSceneText(newText: string): void {
        const cleanedText = this.cleanText(newText);
        this.sceneText.text = cleanedText;
    }
    setTotalTime(seconds: number): void {
        this.totalText.text = secondsToHHMMSS(seconds);
    }
    setProgressTime(seconds: number): void {
        this.progressText.text = secondsToHHMMSS(seconds);
    }
    setLoadProgress(percent: number): void {
        this.doubleProgressSeekBar.setProgressRear(percent);
    }
    setPlayProgress(percent: number): void {
        this.doubleProgressSeekBar.setProgressFront(percent);
    }
    cleanText(text: string): string {
        return text.replace(/\n/g, ''); // Replace carriage returns with nothing
    }
    disablePlayer(): void {
        UIElement.assignStyles(this, {
            filter: 'brightness(50%)'
        });
    }
    notReadyState(): void {
        this.replayButton.disable();
        this.pauseButton.disable();
        this.playButton.disable();
        this.skipButton.disable();
    }
    initState(): void {
        this.playButton.enable();
    }
    playState(): void {
        this.replayButton.enable();
        this.pauseButton.enable();
        this.playButton.disable();
        this.skipButton.enable();
    }
    pauseState(): void {
        this.pauseButton.disable();
        this playButton.enable();
    }
    doneState(): void {
        this.pauseButton.disable();
        this.playButton.disable();
        this.skipButton.disable();
    }
    replayCallback = () => {
        this.playState();
        this.replayFunction();
    }
    pauseCallback = () => {
        this.pauseState();
        this.pauseFunction();
    }
    playCallback = () => {
        this.playState();
        this.playFunction();
    }
    skipCallback = () => {
        this.doneState();
        this.skipFunction();
    }*/
}

/*
class ResetButton extends RectButton {
    constructor(options: RectButtonOptions) {
        super(options);
    }
}

class OptionsButton extends RectButton {
    constructor(options: RectButtonOptions) {
        super(options);
    }
}

class ReplayButton extends CircleButton {
    constructor(options: CircleButtonOptions) {
        super(options);
    }
}

class PauseButton extends CircleButton {
    constructor(options: CircleButtonOptions) {
        super(options);
        const rectWidth = 4;
        const rectHeight = 21;
        const leftL = 19;
        const leftR = leftL + 6;
        const upTop = 13.5;
        const leftShadowOptions = {
            width: rectWidth + 1,
            height: rectHeight + 1,
            left: leftL - 1
        }
        const rightShadowOptions = {
            width: rectWidth + 1,
            height: rectHeight + 1,
            left: leftR,
        }
        this.leftShadowUpOptions = {
            background: `linear-gradient(${SHADOW_DOWN_HEX}, #dddddd)`,
            top: upTop
        };
        this.rightShadowUpOptions = {
            background: `linear-gradient(${SHADOW_DOWN_HEX}, #dddddd)`,
            top: upTop
        };
        this.leftRectUpOptions = {
            width: rectWidth,
            height: rectHeight,
            background: `linear-gradient(${ICON_UP_TOP_HEX}, ${ICON_UP_BOTTOM_HEX})`,
            left: leftL,
            top: upTop
        }
        this.rightRectUpOptions = {
            width: rectWidth,
            height: rectHeight,
            background: `linear-gradient(${ICON_UP_TOP_HEX}, ${ICON_UP_BOTTOM_HEX})`,
            left: leftR,
            top: upTop
        }
        this.leftShadow = new Rectangle(leftShadowOptions);
        this.rightShadow = new Rectangle(rightShadowOptions);
        this.leftRect = new Rectangle(this.leftRectUpOptions);
        this.rightRect = new Rectangle(this.rightRectUpOptions);
        this.appendChild(this.leftShadow);
        this.appendChild(this.rightShadow);
        this.appendChild(this.leftRect);
        this.appendChild(this.rightRect);
    }
    // downState, upState methods...
}

class PlayButton extends CircleButton {
    constructor(options: CircleButtonOptions) {
        super(options);
        const triangleOptions = {
            orientation: AcuteTriangle.RIGHT,
            width: 18,
            height: 21,
        };
        this.triangleUpOptions = {
            color: iconUpGradient,
            left: 18,
            top: 13.5
        }
        this.triangleDownOptions = {
            color: iconDownGradient,
            left: this.triangleUpOptions.left,
            top: 14
        }
        this.shadowUpOptions = {
            left: this.triangleUpOptions.left,
            top: this.triangleUpOptions.top,
            colorHex: SHADOW_UP_HEX
        };
        this.shadowDownOptions = {
            left: this.triangleUpOptions.left,
            top: this.triangleDownOptions.top,
            colorHex: SHADOW_DOWN_HEX
        };
        this.shadow = new TriangleShadow(triangleOptions);
        this.shadow.parseStateOptions(this.shadowUpOptions);
        this.triangle = new AcuteTriangle(triangleOptions);
        this.triangle.parseStateOptions(this.triangleUpOptions);
        this.appendChild(this.shadow);
        this.appendChild(this.triangle);
    }
    // downState, upState methods...
}

class SkipButton extends CircleButton {
    constructor(options: CircleButtonOptions) {
        super(options);
    }
}
*/
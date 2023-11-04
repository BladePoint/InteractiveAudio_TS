import { UIElement } from '../UserInterface_TS/UIElement';
import { AssetLoader } from '../Utilities_TS/AssetLoader';
import { Variables } from '../Utilities_TS/Variables';
import { IAPlayer } from './IAPlayer';

export class IAEngine extends UIElement {
    private projectName: string;
    private player: IAPlayer;
    /*private assetLoader: AssetLoader;
    private script: Document | null;
    private variables: Variables;
    private nextSceneName: string | null;
    private nextNodeName: string | null;
    private currentScene: Element | null;
    private currentNode: Element | null;
    private promptArray: Element[];
    private audioArray: Element[];
    private choiceArray: Element[];
    private promptIndex: number | undefined;
    private cumulativeTime: number | undefined;
    private totalTime: number | undefined;
    private firstAudio: boolean;*/
    constructor(projectName: string) {
        super();
        this.projectName = projectName;
        this.player = new IAPlayer();
        //this.player.playFunction = this.playPromptAudio;
        this.appendChild(this.player);
        /*this.assetLoader = new AssetLoader({
            requestLogFunction: this.requestLog,
            progressFunction: this.requestProgress
        });
        this.script = null;
        this.variables = new Variables();
        this.nextSceneName = null;
        this.nextNodeName = null;
        this.currentScene = null;
        this.currentNode = null;
        this.promptArray = [];
        this.audioArray = [];
        this.choiceArray = [];
        this.promptIndex = undefined;
        this.cumulativeTime = undefined;
        this.totalTime = undefined;
        this.firstAudio = true;*/
    }

    exec() {
        /*this.addEventListener(this.#LOAD_SCRIPT, this.onLoadScript);
        this.loadScript('script.iae')
            .then((xmlData) => {
                this.script = xmlData;
                this.dispatchEventWith(this.#LOAD_SCRIPT);
            })
            .catch((error) => {
                console.error(error);
            });*/
    }
}
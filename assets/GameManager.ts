import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property({ type: Node })
    endScreen: Node = null!; 

    public foundCount: number = 0;
    private totalItems: number = 4; 

    start() {
        if (this.endScreen) {
            this.endScreen.active = false;
        }
    }

    public onItemFound() {
        this.foundCount++;
        console.log("Found: " + this.foundCount);

        if (this.foundCount >= this.totalItems) {
            this.showWin();
        }
    }

    private showWin() {
        console.log("Game Over - You Win!");
        if (this.endScreen) {
            this.endScreen.active = true; 
        }
    }

    public onInstallClicked() {
        console.log("CTA Clicked");
    }
}
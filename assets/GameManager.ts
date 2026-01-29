import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property({ type: Node })
    endScreen: Node = null!; // Slot for the EndScreen

    public foundCount: number = 0;
    private totalItems: number = 4; // Total objects to find

    start() {
        // 1. Ensure End Screen is hidden at start
        if (this.endScreen) {
            this.endScreen.active = false;
        }
    }

    public onItemFound() {
        this.foundCount++;
        console.log("Found: " + this.foundCount);

        // CHECK WIN CONDITION
        if (this.foundCount >= this.totalItems) {
            this.showWin();
        }
    }

    private showWin() {
        console.log("Game Over - You Win!");
        if (this.endScreen) {
            this.endScreen.active = true; // Show the screen
        }
    }

    public onInstallClicked() {
        console.log("CTA Clicked");
        // In a real ad, this is where you redirect to the App Store
    }
}
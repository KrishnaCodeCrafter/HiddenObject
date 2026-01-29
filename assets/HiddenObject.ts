import { _decorator, Component, Node, Label, Color, tween, Vec3 } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('HiddenObject')
export class HiddenObject extends Component {

    @property({ type: Label })
    nameLabel: Label = null!; 

    @property({ type: GameManager })
    gameManager: GameManager = null!; 

    start() {
        this.node.on(Node.EventType.TOUCH_END, this.onClicked, this);
    }

    private onClicked() {
        if (this.nameLabel) {
            this.nameLabel.color = new Color(0, 255, 0, 255); 
        }

        if (this.gameManager) {
            this.gameManager.onItemFound();
        }

        tween(this.node)
            .to(0.2, { scale: new Vec3(0, 0, 0) })
            .call(() => { this.node.active = false; })
            .start();
    }
}
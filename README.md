# 🕵️ Hidden Object Game (Playable Ad Template)

A 2D "Seek and Find" game built with **Cocos Creator 3.8.8** and **TypeScript**. 
Designed as a lightweight template for playable ads, featuring object interaction, UI state management, and a custom Call-to-Action (CTA) end screen.

## 🎮 Gameplay Features
* **Hidden Object Mechanics:** Players search for specific items (Apple, Box, Key, Mouse) in a cluttered environment.
* **Dynamic UI:** The bottom bar lists target items; labels turn **Green** instantly when an item is found.
* **Win Condition Logic:** Automatically detects when all objects are found to trigger the victory state.
* **End Screen (CTA):** Displays a "Great Job!" overlay with an "Play Now" button upon completion.

## 🛠️ Tech Stack
* **Engine:** Cocos Creator 3.8.8
* **Language:** TypeScript


## 📸 Video


https://github.com/user-attachments/assets/d582e3d4-85c7-4ae7-ba1c-f382ca5df204



## 📂 Project Structure

### 1. `GameManager.ts` (The Brain)
Manages the global game state.
* Tracks the `foundCount` variable.
* Checks if the player has won (`foundCount >= totalItems`).
* Controls the visibility of the **EndScreen** and **Install Button**.

### 2. `HiddenObject.ts` (The Interaction)
Attached to every hideable item (Apple, Key, etc.).
* Listens for touch/click events.
* Updates the specific UI Label (turns text green).
* Plays a shrinking animation (`tween`) before destroying the object.
* Reports progress to the `GameManager`.

## 🚀 How to Run
1.  **Clone the Repository**
    ```bash
    git clone https://github.com/KrishnaCodeCrafter/HiddenObject.git
    ```
2.  **Open in Cocos Creator**
    * Open **Cocos Dashboard**.
    * Click **"Add"** and select the project folder.
    * Open the project (Editor version 3.8.8 recommended).
3.  **Play**
    * Open `assets/Scene/GameScene.scene`.
    * Click the **Play** button (Triangle icon) at the top.


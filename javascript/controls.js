class Controls {
    constructor(type) {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.backwards = false;

        switch (type) {
            case "KEYS":
                this.#addKeyboardLiseners();
                break;
            case "DUMMY":
                this.forward = true;
                break;
        }
    }

    #addKeyboardLiseners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.backwards = true;
                    break;
            }
        }

        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.backwards = false;
                    break;
            }
        }
    }
}
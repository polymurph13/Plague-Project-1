// lose screen
class Lose extends State {

    constructor() {
        super();
        this.state = 'lose';
    }

    changeState() {
        window.score = 0;
        window.activeGameState = new Game();
    }

    update() {
        super.update();
        if(this.panels.length <= 0) {

            this.changeState();
            
        }
    }

    draw() {
        super.draw();
        if(this.visibleText) {
            super.drawCenteredText('Click To Try Again', window.palette.active.bright);
            this.drawScore(window.palette.active.bright);
            this.drawWin(window.palette.active.bright);
            this.drawHighscore(window.palette.active.bright);
        }
    }

    drawScore(color) {
        ctx.font = "10rem Poppins";
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`Score: ${window.score}`, (window.canvas.width/2), (window.canvas.height/1.3));
    }

    drawWin(color) {
        ctx.font = "10rem Poppins";
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`YOU LOSE`, (window.canvas.width/2), (window.canvas.height/4));
    }

    clickEvent() {
        super.clickEvent();
    }

    drawHighscore(color) {

        let text = `Highscore: ${window.highscore}`;

        if(window.highscore < window.score) {
            text = `!!! New Highscore: ${window.score} !!!`;
        }

        ctx.font = "1.5rem Poppins";
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, (window.canvas.width/2), (window.canvas.height/1.15));
    }

}
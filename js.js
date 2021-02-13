const box = 25;
document.getElementById('re').style.display = "none";
var audio = new Audio('appleeat.wav');


function globalmake() {
    globalThis.socre = 0;
    globalThis.direction = 0;
}

function checkuseragent() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
globalThis.mobileCheck = checkuseragent()

function up() {
    newdirction("up")
}

function right() {
    newdirction("right")
}

function down() {
    newdirction("down")
}

function left() {
    newdirction("left")
}

function showbuttons(classname, action) {
    if (mobileCheck) {
        var x = document.getElementsByClassName(classname);
        for (let i = 0; i < x.length; i++) {
            if (i == 0 || i == x.length - 1) {
                if (action === "show") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            } else {
                if (action === "show") {
                    x[i].style.display = "inline-block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }
    }
}

function getsize() {
    var sizes = document.getElementsByName('size');
    var size;
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            size = sizes[i].value;
        }
    }
    return parseInt(size);

}

function getborad() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    return ctx;
}

//to hide that shiiittt

function showOrHideE(id, sh) {
    var x = document.getElementById(id);
    if (sh === "show") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function updatescore() {
    globalThis.socre += 1
}


function hideboard(id) {
    var x = document.getElementById(id);
    x.style.display = "none";
}

function showboard(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function setupborad(c) {
    var n = 25 * getsize();
    c.width = n;
    c.height = n;
}



function drawapple(borad, posApple) {
    this.borad = borad;
    this.borad.fillStyle = "red";
    var n = 25 * getsize();
    let [xapple, yapple] = posApple;
    this.borad.fillRect(xapple, yapple, 25, 25);
    this.borad.strokeStyle = "black";
    this.borad.strokeRect(xapple, yapple, 25, 25);
}


//render the boraad 
function drawlines(borad, c) {

    var n = 25 * getsize();
    this.borad = borad
    var size = Math.floor(n / 25);
    var i;
    this.borad.fillStyle = "#e6ffff"
    this.borad.fillRect(0, 0, c.width, c.height)
    for (i = 0; i < size + 1; i++) {
        this.borad.moveTo(box * i, 0);
        this.borad.lineTo(box * i, n);
        this.borad.moveTo(0, box * i);
        this.borad.lineTo(n, box * i);
        this.borad.stroke();
    }
}

class snake {
    constructor(params) {
        var c = document.getElementById("canvas");
        this.ctx = c.getContext("2d");
        this.xchange = 0;
        this.ychange = 0;
        this.n = getsize();
        const [intialx, intialy] = [((this.n + 1) / 2) - 1, ((this.n + 1) / 2) - 1];
        this.snBodyCordinates = [];
        this.headx = (intialx + this.xchange) * box;
        this.heady = (intialx + this.xchange) * box;
        this.applecord = [25, 25];
        this.eating = false;
        this.alive = true;

    }
    posApple() {
        var n = 25 * getsize();
        let xapple = Math.floor((Math.random() * n) / box) * box;
        let yapple = Math.floor((Math.random() * n) / box) * box;
        let applecord = [xapple, yapple];
        if (this.checkonbody(applecord)) {
            return this.posApple();
        } else {
            return applecord;
        }
    }


    darw() {
        var cord = this.snBodyCordinates;
        for (let i = 0; i < cord.length; i++) {
            if (i == 0) {
                this.ctx.fillStyle = "#006600";
                this.ctx.fillRect(cord[i][0], cord[i][1], 25, 25);
            } else if (0 < i && i < 6) {
                this.ctx.fillStyle = "#238509";
                this.ctx.fillRect(cord[i][0], cord[i][1], 25, 25);
            } else if (5 < i && i < 13) {
                this.ctx.fillStyle = "#45a313";
                this.ctx.fillRect(cord[i][0], cord[i][1], 25, 25);
            } else if (12 < i && i < 23) {
                this.ctx.fillStyle = "#70c91f";
                this.ctx.fillRect(cord[i][0], cord[i][1], 25, 25);
            } else {
                this.ctx.fillStyle = "#a4f72d";
                this.ctx.fillRect(cord[i][0], cord[i][1], 25, 25);
            }


        }
    }

    eatingapp() {
        if (this.headx == this.applecord[0] && this.heady == this.applecord[1]) {
            audio.play();
            var ap = this.posApple();
            drawapple(this.ctx, ap);

            this.eating = true;
            this.applecord = ap;
            updatescore();
        }
    }
    checkbondary() {
        if (this.headx >= this.n * box || this.headx < 0 || this.heady >= this.n * box || this.heady < 0) {
            this.alive = false;
            gameover()
        }
    }
    checkonbody(cord) {
        if (direction == 0) {
            return false;
        } else {
            var z;
            for (z = 0; z < this.snBodyCordinates.length - 1; z++) {

                if (cord[0] == this.snBodyCordinates[z][0] && cord[1] == this.snBodyCordinates[z][1]) {

                    return true;
                }

            }
            return false
        }

    }

    fixtail() {
        if (this.snBodyCordinates.length > 1) {
            this.tailcord = this.snBodyCordinates[this.snBodyCordinates.length - 1]
            if (this.eating) {
                this.eating = false;
            } else {
                this.snBodyCordinates.pop();
            }
            this.ctx.fillStyle = "#e6ffff";
            this.ctx.fillRect(this.tailcord[0], this.tailcord[1], 25, 25);
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(this.tailcord[0], this.tailcord[1], 25, 25);

        }
    }
    newhead() {
        if (this.checkonbody([this.headx, this.heady])) {
            gameover();
        } else {
            this.snBodyCordinates.unshift([this.headx, this.heady]);
        }
    }

    move() {
        var d = getdirection();
        if (d == "left") {
            this.headx -= box;
        }
        if (d == "right") {
            this.headx += box;
        }
        if (d == "up") {
            this.heady -= box;
        }
        if (d == "down") {
            this.heady += box;
        }
    }

}

function hidebyclass(classname, action) {
    var x = document.getElementsByClassName(classname);
    for (let i = 0; i < x.length; i++) {
        if (action === "show") {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}
//input of movement

document.addEventListener('keydown', function(event) {

    //left  key
    let key = event.keyCode;
    if (key == 37 && direction != "right") {
        event.preventDefault();
        newdirction("left");
    } else if (key == 38 && direction != "down") {
        event.preventDefault();
        newdirction("up");
    } else if (key == 39 && direction != "left") {
        event.preventDefault();
        newdirction("right");
    } else if (key == 40 && direction != "up") {
        event.preventDefault();
        newdirction("down");
    }
});
//direction
function newdirction(direction) {
    globalThis.direction = direction;
}

function getdirection() {
    return direction
}


function clearboard() {
    getborad().clearRect(0, 0, canvas.width, canvas.height);
}

function fixrestrat() {
    if (running) {
        clearInterval(loop);
        globalThis.running = false;
    }
    document.getElementById("testing").innerHTML = ""
}

function gameover() {
    document.getElementById("testing").innerHTML = "Your score:" + socre;
    clearInterval(loop);
    globalThis.running = false;
}


function main() {
    var apple = [25, 25];
    var sn = new snake();
    var c = document.getElementById("canvas");
    showOrHideE("sizeform", 'hide');
    showOrHideE("canvas", 'show');
    setupborad(c);

    var board = getborad()
    clearboard();
    drawlines(board, c);
    drawapple(board, apple);


    globalThis.loop = setInterval(function() { game(sn, apple, board); }, 160);
    globalThis.running = true;
}


function game(sn, apple, board) {

    sn.move();
    sn.newhead();
    sn.darw();
    sn.eatingapp();
    sn.fixtail();
    sn.checkbondary();

}

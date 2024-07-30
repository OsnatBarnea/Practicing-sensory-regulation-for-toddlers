"use strict";

(() => {
    //canvas:
    const myCanvas = document.getElementById("myCanvas");
    const canvas2D = myCanvas.getContext("2d");
    const title = document.getElementById("title");
    const clearCanvas = document.getElementById("clearCanvas");
    //canvas dimensions
    const canvasDimensions = myCanvas.getBoundingClientRect();

    myCanvas.addEventListener("mouseover", () => {
        mark();
    });
    myCanvas.addEventListener("mousedown", () => {
        mark();
    });

    //start drawing
    function mark() {
        canvas2D.beginPath();
    }

    myCanvas.addEventListener("mousemove", (event) => {
        if (event.buttons !== 1) return; //draw only with left mouse button
        draw(event);
    });

    function draw(event) {
        //draw where the mouse arrow points in the canvas
        canvas2D.lineTo(event.clientX - canvasDimensions.left, event.clientY - canvasDimensions.top);
        canvas2D.stroke();
    }

    //Color buttons:
    const colorButtons = document.querySelectorAll(".colorButton");

    colorButtons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.querySelector("img").alt
            colorPick(color);
        });
    })

    // change color of drawing
    function colorPick(color) {
        canvas2D.strokeStyle = color;
    }

    //show color name when hovering above it
    colorButtons.forEach(button => {
        const colorSpan = button.querySelector(".colorSpan");
        button.addEventListener("mouseenter", () => {
            colorSpan.style.visibility = 'visible';
        });

        button.addEventListener("mouseleave", () => {
            colorSpan.style.visibility = 'hidden';
        });
    });

    //Thickness:
    const thickPen = document.querySelectorAll(".thickPen");
    thickPen.forEach(button => {
        button.addEventListener("click", () => {
            const thickness = button.querySelector("img").alt
            panThickness(thickness);
        });
    })

    function panThickness(thickness) {
        canvas2D.lineWidth = thickness;
    }

    //thickness name tags (shown when hovering on them)
    thickPen.forEach(button => {
        const thickSpan = button.querySelector(".thickSpan");
        button.addEventListener("mouseenter", () => {
            thickSpan.style.visibility = 'visible';
        });

        button.addEventListener("mouseleave", () => {
            thickSpan.style.visibility = 'hidden';
        });
    });

    //clear button
    clearCanvas.addEventListener("click", () => {
        canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
        title.innerHTML = "Drawing practice for toddlers";
    });

    //erase tag
    const eraserTag = document.getElementById("eraserTag")
    clearCanvas.addEventListener("mouseenter", () => {
        eraserTag.style.visibility = 'visible';
    });

    clearCanvas.addEventListener("mouseleave", () => {
        eraserTag.style.visibility = 'hidden';
    });

    const mouseMaze = document.getElementById("mouseMaze");
    mouseMaze.addEventListener("click", () => {
        title.innerHTML = "Help the mouse get to the cheese";
        const backgroundImage = new Image();
        backgroundImage.src = 'assets/images/mouseMaze.svg';
        backgroundImage.onload = function () {
            canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height); // Clear the canvas first
            canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
        };
    })

    //the optional images to draw in:
    const houseMaze = document.getElementById("houseMaze");
    houseMaze.addEventListener("click", () => {
        title.innerHTML = "Can you connect the key to the house?";
        const backgroundImage = new Image();
        backgroundImage.src = 'assets/images/houseMaze.svg';

        backgroundImage.onload = function () {
            canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
            canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
        }
    });

    const beeMaze = document.getElementById("beeMaze");
    beeMaze.addEventListener("click", () => {
        title.innerHTML = "Help the bee get to the flower";
        const backgroundImage = new Image();
        backgroundImage.src = 'assets/images/beeMaze.svg';
        backgroundImage.onload = function () {
            canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height); // Clear the canvas first
            canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
        };
    })

    const sunColoringPage = document.getElementById("sunColoringPage");
    sunColoringPage.addEventListener("click", () => {
        title.innerHTML = "Color the sun and the cloud. Try not to go out of line";
        const backgroundImage = new Image();
        backgroundImage.src = 'assets/images/sunClouds.jpeg';
        backgroundImage.onload = function () {
            canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
            canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
        }
    })

    const squirrelColoringPage = document.getElementById("squirrelColoringPage");
    squirrelColoringPage.addEventListener("click", () => {
        title.innerHTML = "Color the squirrel. Try not to go out of line";
        const backgroundImage = new Image();
        backgroundImage.src = 'assets/images/squirrelNut.jpeg';
        backgroundImage.onload = function () {
            canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
            canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
        }
    })

    const dogColoringPage = document.getElementById("dogColoringPage");
    dogColoringPage.addEventListener("click", () => {
        title.innerHTML = "Color the dog. Try not to go out of lines";
        const backgroundImage = new Image();
        backgroundImage.src = 'assets/images/dog.jpeg';
        backgroundImage.onload = function () {
            canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
            canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
        }
    })
})();

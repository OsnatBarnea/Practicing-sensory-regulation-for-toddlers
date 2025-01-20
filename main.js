"use strict";

(() => {
    const myCanvas = document.getElementById("myCanvas");
    const canvas2D = myCanvas.getContext("2d");
    const title = document.getElementById("title");
    const clearCanvas = document.getElementById("clearCanvas");
    
    // Track canvas dimensions and scaling
    let canvasDimensions = myCanvas.getBoundingClientRect();
    let scaleX = myCanvas.width / canvasDimensions.width;
    let scaleY = myCanvas.height / canvasDimensions.height;

    // Update dimensions on window resize
    window.addEventListener('resize', () => {
        canvasDimensions = myCanvas.getBoundingClientRect();
        scaleX = myCanvas.width / canvasDimensions.width;
        scaleY = myCanvas.height / canvasDimensions.height;
    });

    // Mouse events
    myCanvas.addEventListener("mouseover", mark);
    myCanvas.addEventListener("mousedown", mark);
    myCanvas.addEventListener("mousemove", handleDrawEvent);

    // Touch events
    myCanvas.addEventListener("touchstart", handleTouchStart);
    myCanvas.addEventListener("touchmove", handleTouchMove);

    function mark() {
        canvas2D.beginPath();
    }

    function getCoordinates(event) {
        const rect = myCanvas.getBoundingClientRect();
        if (event.touches) {
            // Touch event
            const touch = event.touches[0];
            return {
                x: (touch.clientX - rect.left) * scaleX,
                y: (touch.clientY - rect.top) * scaleY
            };
        } else {
            // Mouse event
            return {
                x: (event.clientX - rect.left) * scaleX,
                y: (event.clientY - rect.top) * scaleY
            };
        }
    }

    function handleDrawEvent(event) {
        if (event.buttons !== 1) return;
        event.preventDefault();
        draw(event);
    }

    function handleTouchStart(event) {
        event.preventDefault();
        mark();
        draw(event);
    }

    function handleTouchMove(event) {
        event.preventDefault();
        draw(event);
    }

    function draw(event) {
        const coords = getCoordinates(event);
        canvas2D.lineTo(coords.x, coords.y);
        canvas2D.stroke();
    }

    // Color buttons
    const colorButtons = document.querySelectorAll(".colorButton");
    colorButtons.forEach(button => {
        // Click event for desktop
        button.addEventListener("click", () => {
            const color = button.querySelector("img").alt;
            colorPick(color);
        });
        
        // Touch event for mobile
        button.addEventListener("touchstart", (e) => {
            e.preventDefault();
            const color = button.querySelector("img").alt;
            colorPick(color);
        });

        // Show color name on hover
        const colorSpan = button.querySelector(".colorSpan");
        button.addEventListener("mouseenter", () => {
            colorSpan.style.visibility = 'visible';
        });
        button.addEventListener("mouseleave", () => {
            colorSpan.style.visibility = 'hidden';
        });
    });

    function colorPick(color) {
        canvas2D.strokeStyle = color;
    }

    // Thickness controls
    const thickPen = document.querySelectorAll(".thickPen");
    thickPen.forEach(button => {
        // Click event for desktop
        button.addEventListener("click", () => {
            const thickness = button.querySelector("img").alt;
            panThickness(thickness);
        });
        
        // Touch event for mobile
        button.addEventListener("touchstart", (e) => {
            e.preventDefault();
            const thickness = button.querySelector("img").alt;
            panThickness(thickness);
        });

        // Show thickness name on hover
        const thickSpan = button.querySelector(".thickSpan");
        button.addEventListener("mouseenter", () => {
            thickSpan.style.visibility = 'visible';
        });
        button.addEventListener("mouseleave", () => {
            thickSpan.style.visibility = 'hidden';
        });
    });

    function panThickness(thickness) {
        canvas2D.lineWidth = thickness;
    }

    // Clear canvas functionality
    clearCanvas.addEventListener("click", clearAll);
    clearCanvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        clearAll();
    });

    function clearAll() {
        canvas2D.clearRect(0, 0, myCanvas.width, myCanvas.height);
        title.innerHTML = "Drawing practice for toddlers";
    }

    // Eraser tag visibility
    const eraserTag = document.getElementById("eraserTag");
    clearCanvas.addEventListener("mouseenter", () => {
        eraserTag.style.visibility = 'visible';
    });
    clearCanvas.addEventListener("mouseleave", () => {
        eraserTag.style.visibility = 'hidden';
    });

    // Image loading functions
    function loadImage(src, titleText) {
        const backgroundImage = new Image();
        backgroundImage.src = src;
        backgroundImage.onload = function() {
            canvas2D.clearRect(0, 0, myCanvas.width, myCanvas.height);
            canvas2D.drawImage(backgroundImage, 0, 0, myCanvas.width, myCanvas.height);
            title.innerHTML = titleText;
        };
    }

    // Mouse maze
    const mouseMaze = document.getElementById("mouseMaze");
    mouseMaze.addEventListener("click", () => {
        loadImage('assets/images/mouseMaze.svg', "Help the mouse get to the cheese");
    });
    mouseMaze.addEventListener("touchstart", (e) => {
        e.preventDefault();
        loadImage('assets/images/mouseMaze.svg', "Help the mouse get to the cheese");
    });

    // House maze
    const houseMaze = document.getElementById("houseMaze");
    houseMaze.addEventListener("click", () => {
        loadImage('assets/images/houseMaze.svg', "Can you connect the key to the house?");
    });
    houseMaze.addEventListener("touchstart", (e) => {
        e.preventDefault();
        loadImage('assets/images/houseMaze.svg', "Can you connect the key to the house?");
    });

    // Bee maze
    const beeMaze = document.getElementById("beeMaze");
    beeMaze.addEventListener("click", () => {
        loadImage('assets/images/beeMaze.svg', "Help the bee get to the flower");
    });
    beeMaze.addEventListener("touchstart", (e) => {
        e.preventDefault();
        loadImage('assets/images/beeMaze.svg', "Help the bee get to the flower");
    });

    // Sun coloring page
    const sunColoringPage = document.getElementById("sunColoringPage");
    sunColoringPage.addEventListener("click", () => {
        loadImage('assets/images/sunClouds.jpeg', "Color the sun and the cloud. Try not to go out of line");
    });
    sunColoringPage.addEventListener("touchstart", (e) => {
        e.preventDefault();
        loadImage('assets/images/sunClouds.jpeg', "Color the sun and the cloud. Try not to go out of line");
    });

    // Squirrel coloring page
    const squirrelColoringPage = document.getElementById("squirrelColoringPage");
    squirrelColoringPage.addEventListener("click", () => {
        loadImage('assets/images/squirrelNut.jpeg', "Color the squirrel. Try not to go out of line");
    });
    squirrelColoringPage.addEventListener("touchstart", (e) => {
        e.preventDefault();
        loadImage('assets/images/squirrelNut.jpeg', "Color the squirrel. Try not to go out of line");
    });

    // Dog coloring page
    const dogColoringPage = document.getElementById("dogColoringPage");
    dogColoringPage.addEventListener("click", () => {
        loadImage('assets/images/dog.jpeg', "Color the dog. Try not to go out of lines");
    });
    dogColoringPage.addEventListener("touchstart", (e) => {
        e.preventDefault();
        loadImage('assets/images/dog.jpeg', "Color the dog. Try not to go out of lines");
    });
})();
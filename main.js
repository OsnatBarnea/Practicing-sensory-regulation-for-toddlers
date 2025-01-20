// "use strict";

// (() => {
//     //canvas:
//     const myCanvas = document.getElementById("myCanvas");
//     const canvas2D = myCanvas.getContext("2d");
//     const title = document.getElementById("title");
//     const clearCanvas = document.getElementById("clearCanvas");
//     //canvas dimensions
//     const canvasDimensions = myCanvas.getBoundingClientRect();

//     myCanvas.addEventListener("mouseover", () => {
//         mark();
//     });
//     myCanvas.addEventListener("mousedown", () => {
//         mark();
//     });

//     //start drawing
//     function mark() {
//         canvas2D.beginPath();
//     }

//     myCanvas.addEventListener("mousemove", (event) => {
//         if (event.buttons !== 1) return; //draw only with left mouse button
//         draw(event);
//     });

//     function draw(event) {
//         //draw where the mouse arrow points in the canvas
//         canvas2D.lineTo(event.clientX - canvasDimensions.left, event.clientY - canvasDimensions.top);
//         canvas2D.stroke();
//     }

//     //Color buttons:
//     const colorButtons = document.querySelectorAll(".colorButton");

//     colorButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const color = button.querySelector("img").alt
//             colorPick(color);
//         });
//     })

//     // change color of drawing
//     function colorPick(color) {
//         canvas2D.strokeStyle = color;
//     }

//     //show color name when hovering above it
//     colorButtons.forEach(button => {
//         const colorSpan = button.querySelector(".colorSpan");
//         button.addEventListener("mouseenter", () => {
//             colorSpan.style.visibility = 'visible';
//         });

//         button.addEventListener("mouseleave", () => {
//             colorSpan.style.visibility = 'hidden';
//         });
//     });

//     //Thickness:
//     const thickPen = document.querySelectorAll(".thickPen");
//     thickPen.forEach(button => {
//         button.addEventListener("click", () => {
//             const thickness = button.querySelector("img").alt
//             panThickness(thickness);
//         });
//     })

//     function panThickness(thickness) {
//         canvas2D.lineWidth = thickness;
//     }

//     //thickness name tags (shown when hovering on them)
//     thickPen.forEach(button => {
//         const thickSpan = button.querySelector(".thickSpan");
//         button.addEventListener("mouseenter", () => {
//             thickSpan.style.visibility = 'visible';
//         });

//         button.addEventListener("mouseleave", () => {
//             thickSpan.style.visibility = 'hidden';
//         });
//     });

//     //clear button
//     clearCanvas.addEventListener("click", () => {
//         canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
//         title.innerHTML = "Drawing practice for toddlers";
//     });

//     //erase tag
//     const eraserTag = document.getElementById("eraserTag")
//     clearCanvas.addEventListener("mouseenter", () => {
//         eraserTag.style.visibility = 'visible';
//     });

//     clearCanvas.addEventListener("mouseleave", () => {
//         eraserTag.style.visibility = 'hidden';
//     });

//     const mouseMaze = document.getElementById("mouseMaze");
//     mouseMaze.addEventListener("click", () => {
//         title.innerHTML = "Help the mouse get to the cheese";
//         const backgroundImage = new Image();
//         backgroundImage.src = 'assets/images/mouseMaze.svg';
//         backgroundImage.onload = function () {
//             canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height); // Clear the canvas first
//             canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
//         };
//     })

//     //the optional images to draw in:
//     const houseMaze = document.getElementById("houseMaze");
//     houseMaze.addEventListener("click", () => {
//         title.innerHTML = "Can you connect the key to the house?";
//         const backgroundImage = new Image();
//         backgroundImage.src = 'assets/images/houseMaze.svg';

//         backgroundImage.onload = function () {
//             canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
//             canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
//         }
//     });

//     const beeMaze = document.getElementById("beeMaze");
//     beeMaze.addEventListener("click", () => {
//         title.innerHTML = "Help the bee get to the flower";
//         const backgroundImage = new Image();
//         backgroundImage.src = 'assets/images/beeMaze.svg';
//         backgroundImage.onload = function () {
//             canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height); // Clear the canvas first
//             canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
//         };
//     })

//     const sunColoringPage = document.getElementById("sunColoringPage");
//     sunColoringPage.addEventListener("click", () => {
//         title.innerHTML = "Color the sun and the cloud. Try not to go out of line";
//         const backgroundImage = new Image();
//         backgroundImage.src = 'assets/images/sunClouds.jpeg';
//         backgroundImage.onload = function () {
//             canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
//             canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
//         }
//     })

//     const squirrelColoringPage = document.getElementById("squirrelColoringPage");
//     squirrelColoringPage.addEventListener("click", () => {
//         title.innerHTML = "Color the squirrel. Try not to go out of line";
//         const backgroundImage = new Image();
//         backgroundImage.src = 'assets/images/squirrelNut.jpeg';
//         backgroundImage.onload = function () {
//             canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
//             canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
//         }
//     })

//     const dogColoringPage = document.getElementById("dogColoringPage");
//     dogColoringPage.addEventListener("click", () => {
//         title.innerHTML = "Color the dog. Try not to go out of lines";
//         const backgroundImage = new Image();
//         backgroundImage.src = 'assets/images/dog.jpeg';
//         backgroundImage.onload = function () {
//             canvas2D.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
//             canvas2D.drawImage(backgroundImage, 0, 0, canvasDimensions.width, canvasDimensions.height);
//         }
//     })
// })();


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
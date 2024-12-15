// const container = document.querySelector(".container");

// // const imageUrl = prompt();

// function createImage(url, alt) {
//     const image = document.createElement("img");

//     image.setAttribute("src", url);

//     image.setAttribute("alt", alt);

//     image.style.width = "250px";
//     image.style.aspectRatio = "1/1";

//     //test
//     container.style.display = "flex";
//     container.style.gap = "40px"

//     container.append(image);
    
// }

// const testSpan = document.querySelector("span");

// function deleteImage() {
//     console.log(container.children);
//     container.removeChild(container.children[1]);

//     // container.removeChild(testSpan);

// }

// createImage("https://img1.akspic.ru/previews/1/6/0/6/7/176061/176061-yablochnyj_pejzazh-yabloko-illustracia-prirodnyj_landshaft-purpur-500x.jpg", "winter");
// createImage("https://png.pngtree.com/thumb_back/fw800/background/20230612/pngtree-images-of-winter-and-white-background-wallpapers-free-download-image_2935697.jpg", "qew");
// createImage("https://cakeshop.com.ua/images/AcpSe7kFpmzMfgJUwhyXbNbja_gwkleunua5ZVM9jTQ/h:5000/bG9jYWw/6Ly8vY2FrZXNob3AuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcvcHJvZHVjdC81NzEzXzEuanBn", "ewds");

// deleteImage()

const container = document.querySelector(".container");

function getRandomValue() {
    const random = Math.floor(Math.random() * 255);
    return random;
}

function deleteRedBoxes() {
    for (let i = 0; i < container.children.length; i++) {
        let color = container.children[i].getAttribute("style");
        const startIndex = color.indexOf("rgb(") + 4;
        const endIndex = color.indexOf(")");
    
        const rgbString = color.substring(startIndex, endIndex);
    
        const red = rgbString.split(", ")[0];
    
        if (red >= 100) {
            container.children[i].remove();
            i--
        }
        console.log(red);
    }
}

function generateSquares(count = 100) {
    for (let i = 0; i < count; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        const red = getRandomValue()
        const blue = getRandomValue()
        const green = getRandomValue()
        box.style.backgroundColor = `rgb(${red},${blue},${green})`;

        container.append(box);
    }
}

generateSquares(100);

deleteRedBoxes()


const cub = document.querySelector(".black-cub");

cub.style.width = prompt("Введите ширину значение например") + ("px");
cub.style.height = prompt("Введите высоту значение например") + ("px");

cub.style.backgroundColor = prompt("введите цвет напирмер: blue");

let userBorderWidth = prompt("Введите ширину border") + ("px");
let userBorderColor = prompt("Введите цвет border");

cub.style.border = `${userBorderWidth} solid ${userBorderColor}`;
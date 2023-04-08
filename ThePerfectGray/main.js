let colors = [];

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function generateColors (difference, modify_intensity) { 
    colors = [];
    for (let i=0; i<=16; i++) {
        let value = difference*i;
        let red = value-(i*modify_intensity);
        let green = value;
        let blue = value+(i*2);
        switch (green) {
            case 0:
                break;
            default:
                colors.push(rgbToHex(red, green, blue))
        }
    }
}

function setElementsToColors () {
    let css = document.getElementById("css");
    css.textContent = "";
    for (let i=0; i<=document.getElementsByClassName("first_row")[0].childNodes.length-1; i++) {
        let colorNode = document.getElementsByClassName("first_row")[0].childNodes[i];
        let color = colors[colorNode.textContent];
        colorNode.textContent = "#" + color;
        css.textContent = css.textContent + "."+"color"+color+"{background-color:#"+color+"}";
        colorNode.className = "color color" + color;
    }
    for (let i=0; i<=document.getElementsByClassName("second_row")[0].childNodes.length-1; i++) {
        let colorNode = document.getElementsByClassName("second_row")[0].childNodes[i]
        let color = colors[colorNode.textContent];
        colorNode.textContent = "#" + color;
        css.textContent = css.textContent + "."+"color"+color+"{background-color:#"+color+"}";
        colorNode.className = "color color" + color;
    }
} 

generateColors(5, 2);
setElementsToColors();

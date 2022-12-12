fetch("https://jaegerwalddev.github.io/english/more_3.data.json")
    .then((response) => response.json())
    .then((json) => window.alert(json));

function Debug_ReturnToIndex () { location.replace("./index.html"); }
function Debug_PickRandVocab () { window.alert(MoreThree_Data); }

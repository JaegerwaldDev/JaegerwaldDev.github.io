console.log("Hello World from index.js!");

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
            .test(navigator.userAgent);

    /* for a more detailed test
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
            .test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    .test(navigator.userAgent.substr(0, 4))
     */
}

if (isMobileDevice()) {
    document.body.innerHTML = "";
};

async function getJson(url) {
    let result = {};
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        result = data;
    });
    return result;
};

let nav = document.querySelector(".nav");

function selectPage(page, name, bannerImage) {
    let pages = document.querySelectorAll(".files");
    let selectedPage = document.querySelector(".files#" + page);

    let bannerText = document.querySelector(".banner-text");
    bannerText.textContent = name;

    let banner = document.querySelector(".banner");
    banner.style = `background-image: url("${bannerImage}");`;

    for (let i=0; i<pages.length; i++) {
        pages[i].className = "files";
    };
    selectedPage.className = "files selected";
};

function closePageMenu() {
    let pages = document.querySelectorAll(".files");

    for (let i=0; i<pages.length; i++) {
        pages[i].className = "files";
    };
    
    pages = document.querySelectorAll(".nav > span");
    for (let i=0; i<pages.length; i++) {
        if (pages[i].className != "divider") {
            pages[i].className = "";
        };
    };
};

function createPage(item) {
    let page = document.createElement("span");

    if (item == "---") {
        page.className = "divider";
        nav.appendChild(page);
        return;
    };
    
    page.id = item.id;
    page.style = `background-image: url("${item.icon_url}");`;
    page.setAttribute("name", item.name);

    pill = document.createElement("span");
    pill.className = "pill";
    page.appendChild(pill);

    nav.appendChild(page);
    page.addEventListener("click", function() {
        let pages = document.querySelectorAll(".nav > span");
        for (let i=0; i<pages.length; i++) {
            if (pages[i].className != "divider") {
                pages[i].className = "";
            };
        };
        selectPage(item.id, item.name, item.banner_url);
        page.className = "selected";
    });
};

function createTreeFile(item) {
    let file = document.createElement("span");
    file.className = "file";
    file.textContent = item.name;

    file.addEventListener("click", function() {
        document.querySelector("iframe.content").src = item.file;
        window.location.hash = item.file;
    });

    return file;
};

function createTreeFolder(item) {
    let folder = document.createElement("div");
    folder.className = "folder";
    
    let folderName = document.createElement("span");
    folderName.className = "folder";
    folderName.textContent = item.name;
    folderName.addEventListener("click", function() {
        let parent = folderName.parentElement;
        if (parent.className == "folder") {
            parent.className = "folder closed";
        } else {
            parent.className = "folder";
        };
    });

    let folderFiles = document.createElement("div");
    let folderFilesChildren = createFolderFiles(item.children);
    for (let i=0; i<folderFilesChildren.length; i++) {
        folderFiles.appendChild(folderFilesChildren[i]);
    };

    folder.appendChild(folderName);
    folder.appendChild(folderFiles);

    return folder;
};

function createFolderFiles(tree) {
    let files = [];

    for (let i=0; i<tree.length; i++) {
        if (tree[i].type == "file") {
            files.push(createTreeFile(tree[i]));
        } else if (tree[i].type == "folder") {
            files.push(createTreeFolder(tree[i]));
        };
    };

    return files;
};

async function createFileTree(item) {
    if (item == "---") {
        return;
    };

    let fileTree = document.createElement("div");
    fileTree.className = "files";
    fileTree.id = item.id;

    const index = await getJson(item.index);

    let folderFiles = createFolderFiles(index);
    for (let i=0; i<folderFiles.length; i++) {
        fileTree.appendChild(folderFiles[i]);
    };

    document.querySelector(".page-files").appendChild(fileTree);
};

async function createPages() {
    const pages_json = await getJson("./pages.json");
    const pages = pages_json.trees;

    for (let i=0; i<pages.length; i++) {
        createPage(pages[i]);
        createFileTree(pages[i]);
    };

    if (window.location.hash == "") {
        document.querySelector("iframe.content").src = pages_json.default_page;
        window.location.hash = pages_json.default_page.replace("./","");
    } else {
        document.querySelector("iframe.content").src = "./" + window.location.hash.replace("#", "");
        document.querySelector(".nav > span" + window.location.hash.split("/")[0]).className = "selected";
    };
};

document.querySelector(".page-close").addEventListener("click", closePageMenu);

createPages();
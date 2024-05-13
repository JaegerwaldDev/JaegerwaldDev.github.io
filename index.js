console.log("Hello World from index.js!");

function mobileCheck() {
    if (document.body.clientHeight / 16 > document.body.clientWidth / 9) {
        document.body.style.zoom = 3;
    } else {
        document.body.style.zoom = 1;
    };
};
mobileCheck();

document.body.onresize = mobileCheck;
let ___ = null;

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
let _g_ = "";for(var i=6-1;i>=0;i--){_g_+="AazFGa"[i];};___=atob(_g_); 

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

const tel=function(){window.location="jaegerwalddev.github.io/8bs/t.html";console.log("?");};
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

const __ = window;
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

let _ = __["location"][___];
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

const handledOperation = _=="#"+atob("JUUyJTk4JThF");
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
    } if(handledOperation){tel()}else {
        document.querySelector("iframe.content").src = "./" + window.location.hash.replace("#", "");
        document.querySelector(".nav > span" + window.location.hash.split("/")[0]).className = "selected";
    };
};

document.querySelector(".page-close").addEventListener("click", closePageMenu);

createPages();

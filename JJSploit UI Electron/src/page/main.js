const executorPage = document.getElementsByClassName("executorPage")[0];
const buttonsPage = document.getElementsByClassName("buttonsPage")[0];
const scriptsLibrary = document.getElementsByClassName("scriptsLibrary")[0];

var editor;

require(["vs/editor/editor.main"], () => {
    editor = monaco.editor.create(document.getElementById("editor"), {
        value: '',
        language: "lua",
        theme: "vs-dark",
        automaticLayout: true
    });
});

luaExecutor_click = () => {
    executorPage.setAttribute("style", "display: block;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibrary.setAttribute("style", "display: none;");
}

buttons_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: block;");
    scriptsLibrary.setAttribute("style", "display: none;");
}

scriptsLibrary_click = () => {
    executorPage.setAttribute("style", "display: none;");
    buttonsPage.setAttribute("style", "display: none;");
    scriptsLibrary.setAttribute("style", "display: block;");
}
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

addScript_click = () => {
    var scriptName = document.getElementById("scriptName");
    var scriptContent = document.getElementById("scriptContent");
    var scriptsList = document.getElementsByClassName("scriptsList")[0];

    if (scriptName.value.length >= 6 || scriptContent.value.length >= 10) {
        var container = document.createElement("div");
        container.setAttribute("class", "script");

        var title = document.createElement("h3");
        title.innerText = scriptName.value;

        var content = scriptContent.value;

        var textArea = document.createElement("textarea");
        textArea.setAttribute("style", "display: none;");
        textArea.value = content;

        var buttons = document.createElement("div");
        buttons.setAttribute("class", "buttons");

        var viewButton = document.createElement("button");
        viewButton.innerText = "View content";
        var isViewing = false;
        viewButton.addEventListener("click", () => {
            if (isViewing == false) {
                isViewing = true;
                textArea.setAttribute("style", "display: block;");
            } else {
                isViewing = false;
                textArea.setAttribute("style", "display: none;");
            }
        });

        var executeButton = document.createElement("button");
        executeButton.innerText = "Execute";
        executeButton.addEventListener("click", () => {
            console.log(content);
        });

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            scriptsList.removeChild(container);
        });

        buttons.appendChild(viewButton);
        buttons.appendChild(executeButton);
        buttons.appendChild(deleteButton);
        container.appendChild(title);
        container.appendChild(textArea);
        container.appendChild(buttons);
        scriptsList.appendChild(container);
    } else {
        console.log("Script Name must be more than or equal than 6 characters in length and Script content must be more or equal than 10 characters in length");
    }
}
var editor;

require(["vs/editor/editor.main"], () => {
    monaco.languages.registerCompletionItemProvider("lua", {
        provideCompletionItems: function (model, position) {
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            return {
                suggestions: lua(range)
            };
        }
    });

    editor = monaco.editor.create(document.getElementById("editor"), {
        value: '',
        language: "lua",
        theme: "vs-dark",
        automaticLayout: true
    });
});

scriptLibraryCreator = (name, desc, url, parent) => {
    var div = document.createElement("div");
    div.setAttribute("class", "script");
    div.setAttribute("style", "display: block;");
    
    var h3 = document.createElement("h3");
    h3.innerText = name;

    var p = document.createElement("p");
    p.innerText = desc;

    var input = document.createElement("input");
    input.type = "text";
    input.readOnly = true;
    input.value = url;

    var buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");

    var execute = document.createElement("button");
    execute.innerText = "Execute";
    execute.addEventListener("click", () => {
        window.electronAPI.executeScriptLibraryItem(name);
    });

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
        window.electronAPI.scriptLibraryDeleteItem(name);
        parent.removeChild(div);
    });

    buttons.appendChild(execute);
    buttons.appendChild(deleteButton);

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(input);
    div.appendChild(buttons);

    parent.appendChild(div);
}
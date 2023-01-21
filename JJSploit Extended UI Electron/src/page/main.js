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
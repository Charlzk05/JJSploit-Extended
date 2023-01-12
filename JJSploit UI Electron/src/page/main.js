var editor;

require(["vs/editor/editor.main"], () => {
    editor = monaco.editor.create(document.getElementById("editor"), {
        value: '',
        language: "javascript",
        theme: "vs-dark",
        automaticLayout: true
    });
});
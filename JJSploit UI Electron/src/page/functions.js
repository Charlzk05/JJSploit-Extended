execPageExecuteButton_click = () => {
    window.electronAPI.execPageExecuteButton(editor.getValue());
}

execPageClearButton_click = () => {
    editor.setValue("");
}

openFileButton_click = () => {
    window.electronAPI.openFileButton_Call();
}

window.electronAPI.openFileButton_Content((event, script) => {
    editor.setValue(script);
});

saveFileButton_click = () => {
    window.electronAPI.saveFileButton_Call();
}
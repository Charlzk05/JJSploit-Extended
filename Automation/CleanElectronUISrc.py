import os, shutil

def main():
    bin_dir = "./../JJSploit Extended UI Electron/Bin"
    scripts_dir = "./../JJSploit Extended UI Electron/Scripts"
    consoleApp_dir = "./../JJSploit Extended UI Electron/src/page/Console App"

    if (os.path.isdir(bin_dir)):
        shutil.rmtree(bin_dir)
    if (os.path.isdir(scripts_dir)):
        shutil.rmtree(scripts_dir)
    if (os.path.isdir(consoleApp_dir)):
        shutil.rmtree(consoleApp_dir)

    if (os.path.exists("./../JJSploit Extended UI Electron/src/page/JJSploit Extended Files.zip")):
        os.unlink("./../JJSploit Extended UI Electron/src/page/JJSploit Extended Files.zip")
    
if __name__ == "__main__":
    main()
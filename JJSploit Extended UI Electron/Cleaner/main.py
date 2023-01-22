import os, shutil

def main():
    console_app_dir = "./../src/page/Console App"
    
    if (os.path.exists(console_app_dir)):
        for i in os.listdir(console_app_dir):
            if ("." in i):
                os.unlink(f"./../src/page/Console App/{i}")
            else:
                shutil.rmtree(f"./../src/page/Console App/{i}", ignore_errors=True)
    else:
        os.makedirs(console_app_dir)
        
    downloaded_file = "./../src/page/JJSploit Extended Server.zip"
    if (os.path.exists(downloaded_file)):
        os.unlink(downloaded_file)
        
    if (os.path.isdir("./../Bin")):
        shutil.rmtree("./../Bin")
    if (os.path.isdir("./../Scripts")):
        shutil.rmtree("./../Scripts")
    
if __name__ == "__main__":
    main()
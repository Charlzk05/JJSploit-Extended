import os, shutil

def main():
    debug_src = "./../JJSploit Extended Console App/JJSploit Extended Console App/bin/Debug"
    server_output = "./../JJSploit Extended Server/Downloads"
    
    if (os.path.isdir(server_output)):
        os.rmdir(server_output)
        shutil.copytree(debug_src, server_output)
    else:
        shutil.copytree(debug_src, server_output)

if __name__ == "__main__":
    main()
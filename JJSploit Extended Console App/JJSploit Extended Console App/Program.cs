using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using WeAreDevs_API;

namespace JJSploit_Extended_Console_App
{
    internal class Program
    {

        static void Main(string[] args)
        {
            ExploitAPI api = new ExploitAPI();

            if (args != null)
            {
                if (args[0] == "--attach")
                {
                    if (api.IsUpdated() == true)
                    {
                        if (api.isAPIAttached() == false)
                        {
                            api.LaunchExploit();
                        }
                    }
                    else
                    {
                        MessageBox.Show("WeAreDevs is not updated", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
                    }
                } 
                else if (args[0] == "--isUpdated")
                {
                    if (api.IsUpdated() == true)
                    {
                        MessageBox.Show("WeAreDevs is updated", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
                    }
                    else
                    {
                        MessageBox.Show("WeAreDevs is not updated", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
                    }
                }
                else if (args[0] == "--executeScriptLua")
                {
                    try
                    {
                        if (File.Exists("./Script.lua"))
                        {
                            if (api.IsUpdated() == true)
                            {
                                if (api.isAPIAttached() == true)
                                {
                                    api.SendLuaScript(File.ReadAllText("./Script.lua"));
                                }
                                else
                                {
                                    MessageBox.Show("WeAreDevs is not attached", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
                                }
                            }
                            else
                            {
                                MessageBox.Show("WeAreDevs is not updated", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
                            }
                        }
                        else
                        {
                            MessageBox.Show("Couldn't find Script.txt", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                        }
                    }
                    catch (Exception e)
                    {
                        MessageBox.Show(e.Message, "Exception", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
            }
            else
            {
                Console.WriteLine("Hello World");
            }
        }
    }
}

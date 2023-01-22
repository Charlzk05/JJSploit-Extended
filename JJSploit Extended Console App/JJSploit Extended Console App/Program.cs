using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using WeAreDevs_API;
using System.Diagnostics;

namespace JJSploit_Extended_Console_App
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ExploitAPI api = new ExploitAPI();

            if (args.Length != 0)
            {
                if (args[0] == "--attach")
                {
                    Process[] processes = Process.GetProcessesByName("RobloxPlayerBeta");
                    if (processes.Length > 0)
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
                    else
                    {
                        MessageBox.Show("Couldn't find roblox", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
                else if (args[0] == "--isUpdated")
                {
                    if (api.IsUpdated() == true)
                    {
                        MessageBox.Show("WeAreDevs is updated", "Information", MessageBoxButton.OK,MessageBoxImage.Information);
                    }
                    else
                    {
                        MessageBox.Show("WeAreDevs is not updated", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
                    }
                }
                else if (args[0] == "--executeScriptTxt")
                {
                    try
                    {
                        if (File.Exists("./Script.txt"))
                        {
                            if (api.IsUpdated() == true)
                            {
                                if (api.isAPIAttached() == true)
                                {
                                    api.SendLuaScript(File.ReadAllText("./Script.txt"));
                                }
                                else
                                {
                                    MessageBox.Show("WeAreDevs is not attached","Warning",MessageBoxButton.OK,MessageBoxImage.Warning);
                                }
                            }
                            else
                            {
                                MessageBox.Show("WeAreDevs is not updated","Warning",MessageBoxButton.OK,MessageBoxImage.Warning);
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
                else if (args[0] == "--executeFile")
                {
                    try
                    {
                        if (args[1] != null)
                        {
                            if (api.isAPIAttached() == true)
                            {
                                api.SendLuaScript(File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), args[1])));
                            }
                            else
                            {
                                MessageBox.Show("WeAreDevs is not attached","Warning",MessageBoxButton.OK,MessageBoxImage.Warning);
                            }
                        }
                        else
                        {
                            MessageBox.Show("Invalid file", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                        }
                    }
                    catch (Exception e)
                    {
                        MessageBox.Show(e.Message, "Exception", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
                else if (args[0] == "--executeUrl")
                {
                    try
                    {
                        if (args[1] != null)
                        {
                            if (api.isAPIAttached() == true)
                            {
                                using (WebClient client = new WebClient())
                                {
                                    api.SendLuaScript(client.DownloadString(args[1]));
                                }
                            }
                            else
                            {
                                MessageBox.Show("WeAreDevs is not attached", "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
                            }
                        }
                        else
                        {
                            MessageBox.Show("Invalid url", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
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
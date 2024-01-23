/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

import  { ipcRenderer } from 'electron';


const main = async () => {
    const select = document.getElementById('select')
    const output = document.getElementById("outputField")

    select.onclick = async () => {

        const dialogConfig = {
            title: 'Select a file',
            buttonLabel: 'This one will do',
            properties: ['openFile']
        };
 
        const win:any = window
         
    win.electronAPI.openFile().then(async(result:any) => {
        for (const file of result) {
            const node = document.createElement("li");
            const hr = document.createElement("hr");
            const textnode = document.createTextNode(`Converting ${file}`);
            node.appendChild(textnode);
            output.append(node)
            const newPath = await win.electronAPI.convertFile(file)
            const newNode = document.createElement("li");
            const newTextnode = document.createTextNode(`${newPath} was generated!`);
            newNode.appendChild(newTextnode);
            output.append(newNode)
            output.append(hr)
        }
    })
      

       
}

}




main()

console.log('👋 This message is being logged by "renderer.js", included via webpack');
#!/usr/bin/env node


const exect = require('child_process').exec;
const path = require('path');
const fs = require('fs');

const mainPath = path.dirname(fs.realpathSync(__filename));
const soundPath = path.join(mainPath, './jovirone');

const jovirone = function () {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const linuxcmd = 'paplay ' + soundPath + '.ogg';
    const windowscmd = path.join(mainPath, './compWin.vbs') + ' ' + soundPath + '.mp3';
    const maccmd = 'afplay ' + soundPath + '.mp3';
    const fotita = "start https://github.com/caiotheodoro/jovirone#readme";
    const platform = process.platform;

    if (platform === 'linux') {
        return exec(linuxcmd);
    }
    else if (platform === 'win32') {

        exec(windowscmd);

    } else if (platform === 'darwin') {

        exec(maccmd);

    }

    function exec(cmd) {
        return exect(cmd, function (error, stdout, stderr) {
            if (error)
                console.error(error);
        });
    }

    function func1() { exec(fotita) };
    setTimeout(func1, 15500);

}

module.exports = jovirone;

if (!module.parent) {
    jovirone();
}
部署环境：云服务器 Ubuntu_16.04_64位英文系统

已知问题：
1、
```
internal/streams/legacy.js:59
      throw er; // Unhandled stream error in pipe.
      ^

Error: Command failed: /root/node_ws/mdtopdf/server/node_modules/markdown-pdf/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs /root/node_ws/mdtopdf/server/node_modules/markdown-pdf/phantom/render.js /tmp/tmp-631624JQxTiPn0Xh.html /tmp/tmp-6316LzC3zxXeefBD.pdf /root/node_ws/mdtopdf/server /root/node_ws/mdtopdf/server/node_modules/markdown-pdf/runnings.js /root/node_ws/mdtopdf/server/node_modules/markdown-pdf/css/pdf.css /root/node_ws/mdtopdf/server/node_modules/markdown-pdf/css/highlight.css A4 portrait 2cm 0 10000
/root/node_ws/mdtopdf/server/node_modules/markdown-pdf/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs: error while loading shared libraries: libfontconfig.so.1: cannot open shared object file: No such file or directory

    at ChildProcess.exithandler (child_process.js:204:12)
    at emitTwo (events.js:106:13)
    at ChildProcess.emit (events.js:191:7)
    at maybeClose (internal/child_process.js:886:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:226:5)

```
执行`sudo apt-get install libfontconfig`

2、
```

internal/streams/legacy.js:59
      throw er; // Unhandled stream error in pipe.
      ^

Error: spawn /root/node_ws/mdtopdf/server/node_modules/markdown-pdf/node_modules/phantomjs-prebuilt/lib/phantom\bin\phantomjs.exe ENOENT
    at exports._errnoException (util.js:1018:11)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:193:32)
    at onErrorNT (internal/child_process.js:367:16)
    at _combinedTickCallback (internal/process/next_tick.js:80:11)
    at process._tickCallback (internal/process/next_tick.js:104:9)

```

解决方法：删除server/node_modules/markdown-pdf/node_modules文件夹，然后在markdown-pdf文件夹执行`npm install` 命令



部署环境：云服务器 Ubuntu_16.04_64位英文系统

已知问题：
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

解决方法：删除server/node_modules/mdpdf/node_modules文件夹，然后在mdpdf文件夹执行`npm install` 命令



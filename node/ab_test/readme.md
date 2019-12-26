- js 是一个单线程语言
  中台 让大型公司要更好的复用开发能力/资源
  node 的性能就有了要求， 可以像 java一样多线程？
  node app.js 1234端口启动，
  前端 mount #app CPU
  进程 process 操作系统挂载运行程序的单元
  拥有独立的资源
  工作交给子进程， 一个人做事

  req => 请求 ？
  分配资源给他 完成这次请求 + 响应
  线程是运算调度的单元， 进程的计算都在一个线程上跑
  内存， 计算资源 用户的并发， 电脑可以运行正常

  ab test

  1. 一个进程， 1234 使用资源 内存， 读写IO， CPU进程， 线程{n}，物理上限
  2. node cluster 


CPU 跑起来， 多核跑， 尽可能多的去未更多用户服务， cluster 横向扩容， 请求分配给这些机器， 负载均衡  nginix apache tomcat
www.taobao.com/search?a=1   (浏览器 proxy， 手机， 小程序 app ) 中央服务器发送请求 -> ngnix ->  选中一台当前还有运算能力的服务器， IP -> 用户返回 （TCP/IP 三次） 分布式， 每个CPU 都会跑同样的程序 ip 响应服务
每台机器上都要部署同样的代码， 同样的运行环境 （docker ）

证据  性能  docker + ab test + node 
cluster + nginx 压力测试
测试驱动开发  mocha

- docker 启动
  集装箱， 50 台机器， 百万并发
  开发环境镜像
  统一所有开发环境  centos 7 取代了虚拟机， 优势是不用提前分配超大硬盘，以及内存

- docker run -p 1234:1234 -it 镜像的唯一id /bi/bash
  yum install wget
  export PATH=NODE环境:$PATH
  echo $PATH
  yum -y install httpd-tools
  npm config registry https://registry.npm.taobao.org
  npm i -g pm2
  pm2 start app.js
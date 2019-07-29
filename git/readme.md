- cli
    1. git status 仓库的状态
    2. git add README.md 文件的快照 暂存区
    3. git commit -m '提交的理由' 确认提交 本地仓库
    4. git push origin master 将本地的代码推送到 github 仓库
    5. github 仓库 origin master 分支
    6. git rm <file>  移除
    7. git checkout -- <file> 检查路径
    8. git log 查询日志文件 q 退出
    9. git reset --hard HARD^ 其中HARD 代表了 当前版本 其中^代表了上一个版本 要返回多少个版本就相当于有多少个^符号 例如 上两个版本就是 HARD^^ 100个版本就用HARD~100来简洁表达
    10. git relog 查看未来的日志 未来是指的是 经过git reset 的版本 然后再根据 git reset 返回原先的版本

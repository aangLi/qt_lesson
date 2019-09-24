import ora from 'ora';  // loading 效果
import inquirer from 'inquirer'; // 命令行交互
import downloadGit from 'download-git-repo'; // git 的模板
import { type } from 'os';


// async 异步的处理
let install = async () => {
  let loading = ora('fetching template.....');
  let answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '项目名称',
      default: 'aangli-demo'
    }
  ]); // 弹出对话框

  console.log(answer, '-------------');
  let project = answer.projectName
  loading.start();
  downloadGit('xlei1123/aangli-cli', process.cwd() + '/' + project, (err) => {
    console.log(err);
    return;
  }); // 新建一个目录
  loading.succeed();

}

export default install;
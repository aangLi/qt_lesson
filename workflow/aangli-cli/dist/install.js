'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

var _os = require('os');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// async 异步的处理
// 命令行交互
var install = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var loading, answer, project;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loading = (0, _ora2.default)('fetching template.....');
            _context.next = 3;
            return _inquirer2.default.prompt([{
              type: 'input',
              name: 'projectName',
              message: '项目名称',
              default: 'aangli-demo'
            }]);

          case 3:
            answer = _context.sent;
            // 弹出对话框

            console.log(answer, '-------------');
            project = answer.projectName;

            loading.start();
            (0, _downloadGitRepo2.default)('xlei1123/aangli-cli', process.cwd() + '/' + project, function (err) {
              console.log(err);
              return;
            }); // 新建一个目录
            loading.succeed();

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function install() {
    return _ref.apply(this, arguments);
  };
}(); // git 的模板
// loading 效果
exports.default = install;
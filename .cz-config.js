'use strict'

module.exports = {
  types: [
    {
      value: '💪 WIP',
      name: '进度: 工作进度',
    },
    {
      value: '✨ feat',
      name: '功能: 新功能',
    },
    {
      value: '🐞 fix',
      name: '修复: 修复bug',
    },
    {
      value: '🛠 refactor',
      name: '重构: 代码重构',
    },
    {
      value: '📚  docs',
      name: '文档: 只有文档变更',
    },
    {
      value: '🏁  test',
      name: '测试: 添加一个测试',
    },
    {
      value: '🗯 chore',
      name: '工具: 没有修改源代码，只是变更构建流程或辅助工具。',
    },
    {
      value: '💅 style',
      name: '样式: 空格，分号等格式修复。',
    },
    {
      value: '⏪ revert',
      name: '回滚: 代码回退。',
    },
    {
      value: '🏎  perf',
      name: '性能: 提升性能。',
    },
    {
      value: '🏗 build',
      name: '构建: 变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）',
    },
    {
      value: '🕹 ci',
      name:
        '集成: 更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等',
    },
  ],
  scopes: [],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明？',
  },
  footerPrefix: 'TAPD: ',
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  skipQuestions: ['scope', 'body', 'footer'],
}

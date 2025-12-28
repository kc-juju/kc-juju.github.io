'use strict';

module.exports = {
    types: [
        { value: 'feat', name: '✨ feat:\t add module or testcase' },
        { value: 'fix', name: '🐞 fix:\t fix module or testcase, and may CHANGE the result' },
        { value: 'refactor', name: '🛠  refactor:\t refactor module or testcase, and NOT change the result' },
        { value: 'style', name: '💅 style:\t codebase is formatted or linted (e.g., pylint, pycodestyle)' },
        { value: 'docs', name: '📚 docs:\t documentation is updated, e.g., *.md' },
        { value: 'ci', name: '⏰ ci:\t changes of CI/CD pipeline' },
        { value: 'chore', name: '🗯  chore:\t none of the above are applicable' }
    ],

    messages: {
        customScope: 'Denote the SCOPE of this change (module or testcase scope, e.g, platformcmd, RESTful):',
    },
    allowCustomScopes: true,
    skipQuestions: ['breaking', 'footer'],
};

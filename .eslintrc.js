module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        // 缩进
        "indent": [
            "error",
            4 //我的是编辑器自动格式化，不是使用tabs，而是四个空格
        ]
    }
}
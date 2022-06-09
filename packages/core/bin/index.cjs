// const process = require("process");
process.on("unhandledRejection", err => {
    throw err
});

function init() {
    const command = process.argv[2];

    if (command)
        console.log(command);
    else
        console.log("请输入命令！");
}

module.exports = {
    init
}
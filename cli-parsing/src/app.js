"use strict";
exports.__esModule = true;
var ts_command_line_1 = require("@microsoft/ts-command-line");
// Define the parser
var commandLineParser = new ts_command_line_1.DynamicCommandLineParser({
    toolFilename: 'widget',
    toolDescription: 'The widget tool is really great.'
});
commandLineParser.defineFlagParameter({
    parameterLongName: '--verbose',
    parameterShortName: '-v',
    description: 'Show extra logging detail'
});
// Define the action
var action = new ts_command_line_1.DynamicCommandLineAction({
    actionName: 'push',
    summary: 'Pushes a widget to the service',
    documentation: 'More detail about the "push" action'
});
commandLineParser.addAction(action);
action.defineFlagParameter({
    parameterLongName: '--force',
    parameterShortName: '-f',
    description: 'Push and overwrite any existing state'
});
// Parse the command line
commandLineParser.execute(process.argv).then(function () {
    console.log('The action is: ' + commandLineParser.selectedAction.actionName);
    console.log('The force flag is: ' + action.getFlagParameter('--force').value);
});

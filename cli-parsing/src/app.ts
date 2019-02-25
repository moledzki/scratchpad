import { DynamicCommandLineAction, DynamicCommandLineParser } from "@microsoft/ts-command-line";


console.log(process.argv);

// Define the parser
const commandLineParser: DynamicCommandLineParser = new DynamicCommandLineParser({
  toolFilename: 'widget',
  toolDescription: 'The widget tool is really great.'
});
commandLineParser.defineFlagParameter({
  parameterLongName: '--verbose',
  parameterShortName: '-v',
  description: 'Show extra logging detail'
});

// Define the action
const action: DynamicCommandLineAction = new DynamicCommandLineAction({
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
commandLineParser.execute(process.argv.slice(2)).then(() => {
  console.log('The action is: ' + commandLineParser.selectedAction!.actionName);
  console.log('The force flag is: ' + action.getFlagParameter('--force').value);
});
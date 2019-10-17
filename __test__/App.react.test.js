import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

test('Fake test', () => {
  expect(true).toBeTruthy();
});

describe('test <App />', () => {
  // render the App in document
  // const App = shallow(<App />);
});

//  Test suite failed to run
//     Jest encountered an unexpected token

//     This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaS
// cript.

//     By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

//     Here's what you can do:
//      • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
//      • If you need a custom transformation specify a "transform" option in your config.
//      • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

//     You'll find more details and examples of these config options in the docs:
//     https://jestjs.io/docs/en/configuration.html

//     Details:

//     /Users/ParteekSSandhu/hrsf123/recommendations/__test__/App.react.test.js:1
//     ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import React from 'react';
//                                                                                              ^^^^^^

//     SyntaxError: Unexpected token import

//       at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)
//       at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:579:25)
// "transform": {
//   "^.+\\.jsx?$": "babel-jest"
// },
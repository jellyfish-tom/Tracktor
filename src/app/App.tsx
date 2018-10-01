import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';

declare let module: any

if (module.hot) {
   module.hot.accept();
}

ReactDOM.render(
	<Hello
		compiler="Typescript"
		framework="React"
		bundler="Webpack"
	/>,
	document.getElementById('root')
);


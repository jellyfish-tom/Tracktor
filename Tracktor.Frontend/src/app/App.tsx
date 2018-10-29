import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Hello } from './components/Hello';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import Navigation from './components/Navigation';
import Main from './components/Main';

import 'antd/dist/antd.css';

OfflinePluginRuntime.install();

declare let module: any

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
	//SET SOME VISUAL INDICATOR IN APP
}

if (module.hot) {
   module.hot.accept();
}

const App = () => (
	<React.Fragment>
		<Navigation/>
		<Main/>
	</React.Fragment>
)

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
);


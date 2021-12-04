import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
	<HelmetProvider>
		<App />
		<Toaster />
	</HelmetProvider>,
  document.getElementById('root')
);

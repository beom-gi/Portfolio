import { createGlobalStyle } from 'styled-components';
import Navbar from './Component/Section_navBar';
import Home from './Component/Section_home';
import Profile from './Component/Section_profile';
import Projects from './Component/Section_projects';
import Skills from './Component/Section_skills';
import Footer from './Component/Section_footer';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	-ms-overflow-style: none;
}
::-webkit-scrollbar {
    display: none;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

function App() {

	useEffect(() => {
		window.onbeforeunload = function pushRefresh() {
			window.scrollTo(0, 0);
		};

	}, []);

	return (
		<div className="App">
			<GlobalStyle />
			<Navbar />
			<Home />
			<Profile />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;

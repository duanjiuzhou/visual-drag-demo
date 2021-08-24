import * as history from "history";

console.log('process.env.PUBLIC_URL==>', process.env.PUBLIC_URL);

export default history.createBrowserHistory({ basename: process.env.PUBLIC_URL });

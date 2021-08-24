import * as history from "history";

export default history.createBrowserHistory({ basename: process.env.PUBLIC_URL });

import { App } from './app'

async function init({ token, appName }){
    const app = new App(token, appName);
    window.getTMASessionId = app.getSessionId;
    app.init()
}

export default {
    init,
};

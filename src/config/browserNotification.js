import { messageTypes } from './db';

const pushNotification = async (title, body, icon) => {
    if (!window.Notification) return
    if (Notification.permission === 'denied') return
    if (Notification.permission !== 'granted') await Notification.requestPermission()

    new Notification(title, { body, icon })
}

export const requestPermission = async () => {
    if (Notification.permission === 'default') await Notification.requestPermission()
}

export const newMessage = (user, message) => {
    switch (message.type) {
        case messageTypes.TEXT:
            pushNotification(user.displayName, message.content, user.avatarURL)
            break
        case messageTypes.FILE:
            pushNotification(user.displayName, message.content.name, user.avatarURL)
            break
        default:
    }
}

export let isPageVisible = true;

(() => {
    let hidden, visibilityChange; 
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }
    if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
        return
    } else {
        document.addEventListener(visibilityChange, () => {
            isPageVisible = !document[hidden]
        }, false);
    }
})();
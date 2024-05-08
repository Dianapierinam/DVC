import{ navigateTo } from "../router.js"
export function groupChat() {
    const groupElement = document.createElement('div');

    groupElement.innerHTML = `
        <button class="returnChat">Regresar</button>
        <div id="groupchatfondo"></div>
    `;
    return groupElement;
}

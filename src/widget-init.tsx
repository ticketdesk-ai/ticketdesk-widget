import { createRoot, Root } from 'react-dom/client';
import { ChatWidget } from './ChatWidget';

let popupRoot: Root | null = null;
let container: HTMLElement | null = null;

function initChatbot(ticketdeskId: string) {
  // Avoid duplicate container
  if (!container) {
    container = document.createElement('div');
    container.id = 'ticketdesk-ai';
    container.setAttribute('style', 'color-scheme: light;');
    document.body.appendChild(container);
  }

  const close = () => {
    if (popupRoot) {
      popupRoot.unmount();
      popupRoot = null;
    }
    if (container) {
      container.remove();
      container = null;
    }
  };

  popupRoot = createRoot(container);
  popupRoot.render(<ChatWidget ticketdeskId={ticketdeskId} />);
  return { close };
}

export { initChatbot };

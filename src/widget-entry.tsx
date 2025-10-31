import r2wc from '@r2wc/react-to-web-component';
import { ChatWidget } from './ChatWidget';
import { initChatbot } from './widget-init';

const chatWidget = r2wc(ChatWidget, {
  props: {
    ticketdeskId: 'string',
  },
});

customElements.define('ticketdesk-chatbot', chatWidget);

// Attach popup API globally
declare global {
  interface Window {
    TICKETDESK_ID?: string;
    ticketdesk: {
      initChatbot: typeof initChatbot;
    };
  }
}

window.ticketdesk = {
  initChatbot,
};

// Auto-init if chatbotId is provided
if (window.TICKETDESK_ID) {
  window.ticketdesk.initChatbot(window.TICKETDESK_ID);
}

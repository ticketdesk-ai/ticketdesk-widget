import { create } from 'zustand';
import { PartySocket } from 'partysocket';

interface SocketState {
  sockets: Record<string, PartySocket>;
  getSocket: (roomId: string, siteId: string) => PartySocket;
}

export const useSocketStore = create<SocketState>((set, get) => ({
  sockets: {},
  getSocket: (roomId: string, siteId: string) => {
    const key = `${siteId}_${roomId}`;
    const existing = get().sockets[key];
    if (existing) return existing;

    const socket = new PartySocket({
      host: import.meta.env.PROD
        ? 'https://api.ticketdesk.ai'
        : 'http://localhost:8787',
      party: 'chatroom',
      room: roomId,
      query: {
        site_id: siteId,
        session_id: localStorage.getItem(`ti_${siteId}_session_id`),
      },
    });

    set((state) => ({
      sockets: { ...state.sockets, [key]: socket },
    }));

    return socket;
  },
}));

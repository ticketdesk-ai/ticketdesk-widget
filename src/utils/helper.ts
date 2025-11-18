export const setLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
};

export const getLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('Failed to read from localStorage:', error);
    return null;
  }
};

export const generateId = (): string => {
  return `m_` + crypto.randomUUID();
};

export const playPopOffSound = () => {
  const audio = new Audio('https://ticketdesk.ai/sounds/pop-up-off.mp3');
  audio.volume = 0.25;
  audio.play().catch(() => {});
};

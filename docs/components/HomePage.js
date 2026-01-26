class WebSocketManager {
  constructor(relativePath) {
    this.relativePath = relativePath;
    this.url = null;
    this.ws = null;
    this.intervalId = null;
    this.listeners = new Array(4);
    this.time = 0n;
    this.buf = new ArrayBuffer(12);
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 3;
  }

  connect() {
    if (this.ws)
      this.ws.close();
      
    // 检查 listeners 是否已初始化
    if (!this.listeners) {
      this.listeners = new Array(4);
    }
    
    try {
      const ws = new WebSocket(this.url);
      ws.binaryType = "arraybuffer";

      ws.onopen = () => {
        console.log('WebSocket connected');
        this.reconnectAttempts = 0;
        this.intervalId = setInterval(() => {
          this.sendMessage(0);
        }, 20000);
      };

      ws.onmessage = (event) => {
        try {
          const data = event.data;
          const all = new DataView(data);
          const listener = this.listeners[all.getInt32(8)];
          if (listener) {
            listener(all.getBigInt64(), new DataView(data, 12));
          }
        } catch (error) {
          console.error('WebSocket message error:', error);
        }
      };

      ws.onclose = () => {
        console.log('WebSocket closed');
        this.listeners = null;
        clearInterval(this.intervalId);
        this.intervalId = null;
        
        // 尝试重新连接，最多尝试 3 次
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
          this.reconnectAttempts++;
          console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
          setTimeout(() => {
            this.connect();
          }, 5000);
        }
      };

      ws.onerror = (error) => {
        console.warn('WebSocket connection error (expected in preview mode):', error.message);
        // 不抛出错误，避免影响页面显示
      };
      
      this.ws = ws;
    } catch (error) {
      console.warn('Failed to create WebSocket connection (expected in preview mode):', error.message);
    }
  }
  
  sendMessage(type, time = this.time) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const v = new DataView(this.buf);
      v.setBigInt64(0, time);
      v.setInt32(8, type);
      this.ws.send(this.buf);
    } else {
      console.error('WebSocket is not connected');
    }
  }

  addListener(type, listener) {
    this.listeners[type] = listener;
  }
  
  setUrl(location) {
    const fullUrl = new URL(this.relativePath, location.origin);
    fullUrl.protocol = fullUrl.protocol === 'https:' ? 'wss:' : 'ws:';
    this.url = fullUrl.href;
    //this.url = 'ws://localhost:8080/home'
    this.relativePath = null;
  }
}

export const wsMan = new WebSocketManager('/mc/home');

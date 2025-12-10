
<style scoped>
.left-container, .right-container {
  background-color: rgba(110, 75, 147, 0.2);
  border: 3px solid;
  border-color: gray;
  border-radius: 16px;
  min-height: 45px;
  padding: 8px;
  padding-left: 24px;
}

.title {
  text-align: center;
  line-height: 2.5;
  font-size: x-large;
}

.info {
  line-height: 0.6;
  font-size: large;
  width: calc(50%);
}

.warn {
  text-align: center;
  font-size: large;
}
</style>

<script lang="ts">
import { wsMan } from './HomePage';

const DECODER = new TextDecoder('utf-8');

class BasicInfo {
  mspt: string[];
  ram: Int16Array;
  entities: number;
  chunks: number;
  inb: string;
  oub: string;
  index = 0;

  constructor(data: object) {
    this.mspt = data.mspt10.map((x: number) => (x / 10).toFixed(1))
    this.ram = data.ram
    this.entities = data.entities
    this.chunks = data.chunks
    this.inb = (data.inb / 1024).toFixed(2)
    this.oub = (data.oub / 1024).toFixed(2)
  }
}

export default {
  data() {
    return {
      Mark: {
        TIMEOUT: -1,
        LOADING: 0,
        ONLINE: 1,
        OFFLINE: 2,
      },

      basic: null as BasicInfo | null,
      cache: null as object | null,
      players: null,
      basicTime: 0n,
      playerTime: 0n,
      intervalId: null,
      tick: 0,
      mark: 0,
    };
  },

  methods: {
    handleOffline(time: bigint) {
      if (this.basicTime < time) {
        wsMan.time = this.basicTime = time;
        if (this.mark !== this.Mark.OFFLINE) {
          this.mark = this.Mark.OFFLINE;
          this.basic = this.cache = null;
        }
        this.tick = -190;
      }
    },

    handleBasicInfo(time: bigint, data: DataView) {
      if (this.basicTime < time) {
        this.basicTime = time;
        const c = {};
        c.mspt10 = new Array(10);
        for (let i = 0; i < 10; ++i)
          c.mspt10[i] = data.getInt16(i << 1);
        c.ram = new Int16Array(10);
        for (let i = 0; i < 10; ++i)
          c.ram[i] = data.getInt16(20 + (i << 1));
        c.entities = data.getInt32(40);
        c.chunks = data.getInt32(44);
        c.inb = data.getInt32(48);
        c.oub = data.getInt32(52);
        this.cache = c;
      }
    },

    handlePlayerInfo(time: bigint, data: DataView) {
      if (this.playerTime < time) {
        wsMan.time = this.playerTime = time;
        this.players = JSON.parse(DECODER.decode(data));
      }
    },
    
    clear() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      wsMan.ws?.close();
    },
    
    tickBasic() {
      const t: number = ++this.tick;
      const cache = this.cache;
      if (this.mark === this.Mark.ONLINE && t < 10 && this.basic !== null) {
        this.basic.index = t;
      } else if (cache !== null) {
        this.basic = new BasicInfo(cache);
        this.cache = null;
        this.mark = this.Mark.ONLINE;
        this.tick = 0;
      } else if (t > 16 && (this.mark === this.Mark.ONLINE || this.mark === this.Mark.OFFLINE)) {
        this.mark = this.Mark.LOADING;
        this.basic = null;
        wsMan.sendMessage(0, this.basicTime);
      } else if (t > 100 && this.mark !== this.Mark.TIMEOUT) {
        this.mark = this.Mark.TIMEOUT;
        this.basic = this.cache = this.players = null;
        this.clear();
      }
    }
  },

  mounted() {
    wsMan.setUrl(window.location);
    wsMan.addListener(0, this.handleOffline);
    wsMan.addListener(1, this.handleBasicInfo);
    wsMan.addListener(2, this.handlePlayerInfo);
    wsMan.connect();
    this.intervalId = setInterval(this.tickBasic, 100);
  },
  
  beforeDestroy() { this.clear(); }
}
</script>
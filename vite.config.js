export default {
  server: {
    allowedHosts: ['f.jingyucloud.cn'],
    fs: {
      strict: false
    },
    hmr: {
      overlay: false
    }
  },
  build: {
    chunkSizeWarningLimit: 10000,
    assetsInlineLimit: 0
  },
  assetsInclude: ['**/*.mp4']
}
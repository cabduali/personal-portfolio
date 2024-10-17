export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react', 'react-dom'],
  },
});

# Spin & Win

This project is a scaffold for a kiosk friendly "Spin the Wheel" game. It
includes React components and utility modules for weighted random selection,
segment inventory and simple internationalisation.

## Development

1. Install dependencies (requires internet access):
   ```bash
   npm install
   ```
2. Start a dev server:
   ```bash
   npm run dev
   ```

## Testing

Unit tests use Node's built-in test runner:

```bash
npm test
```

## Configuration

Edit `src/data/segments.ts` to customise wheel segments. An admin panel stub is
available at `/admin` when the app is running.

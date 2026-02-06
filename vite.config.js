import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about_us.html'),
                bikes: resolve(__dirname, 'bikes.html'),
                contact: resolve(__dirname, 'contact.html'),
                ellipticals: resolve(__dirname, 'ellipticals.html'),
                franchisee: resolve(__dirname, 'franchisee.html'),
                privacy: resolve(__dirname, 'privacy_policy.html'),
                stair_climber: resolve(__dirname, 'stair_climber.html'),
                terms: resolve(__dirname, 'terms_conditions.html'),
                treadmill: resolve(__dirname, 'treadmill.html'),
            },
        },
    },
});

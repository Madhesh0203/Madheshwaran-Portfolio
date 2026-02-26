import { useEffect, useRef } from 'react';

export const BinaryRainBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const fontSize = 14;
        const columns = Math.floor(width / fontSize);
        const drops: number[] = new Array(columns).fill(1);

        // Binary characters
        const chars = '01';

        const draw = () => {
            // Semi-transparent black background to create trail effect
            // Using the theme background color precisely: hsl(222 47% 5%)
            ctx.fillStyle = 'rgba(7, 11, 20, 0.1)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = 'rgba(59, 235, 245, 0.35)'; // Primary Teal color with 0.35 opacity
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                // Reset drop to top randomly or if it's off screen
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Re-initialize drops if width changes significantly, or just extend array
            const newColumns = Math.floor(width / fontSize);
            if (newColumns > drops.length) {
                const added = new Array(newColumns - drops.length).fill(0);
                drops.push(...added);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ background: '#070b14' }} // Initial background
        />
    );
};

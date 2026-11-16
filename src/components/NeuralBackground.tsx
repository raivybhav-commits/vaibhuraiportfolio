import React, { useEffect, useRef } from 'react';

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for neural graph in light mode
    const particleCount = Math.min(Math.floor((width * height) / 19000), 70);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;
    }> = [];

    const colors = [
      'rgba(37, 99, 235, 0.55)',  // electric blue (blue-600)
      'rgba(14, 165, 233, 0.55)', // cyan (sky-500)
      'rgba(79, 70, 229, 0.45)',  // indigo (indigo-600)
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      const maxDistance = 140;
      const maxDistanceSq = maxDistance * maxDistance;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce on boundary
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse interaction: subtle pull/repulsion
        const dxMouse = mouseX - p1.x;
        const dyMouse = mouseY - p1.y;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
        if (distMouseSq < 35000 && distMouseSq > 0) {
          const force = (35000 - distMouseSq) / 35000 * 0.015;
          p1.x -= dxMouse * force;
          p1.y -= dyMouse * force;
        }

        // Draw node
        const pulse = Math.sin(tick * p1.pulseSpeed + p1.pulseOffset);
        const currentRadius = p1.radius + pulse * 0.4;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();

        // Connect to nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistanceSq) {
            const alpha = (1 - distSq / maxDistanceSq) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect to mouse if near
        if (distMouseSq < 22000) {
          const alpha = (1 - distMouseSq / 22000) * 0.28;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};

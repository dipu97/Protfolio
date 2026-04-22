import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 42;
const CONNECTION_DISTANCE = 160;

const random = (min, max) => Math.random() * (max - min) + min;

export const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return undefined;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles = [];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: random(0, width),
        y: random(0, height),
        vx: random(-0.28, 0.28),
        vy: random(-0.2, 0.2),
        r: random(1.2, 2.6),
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
        }

        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
        }
      });

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        context.beginPath();
        context.fillStyle = "rgba(255,255,255,0.75)";
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();

        for (let inner = index + 1; inner < particles.length; inner += 1) {
          const target = particles[inner];
          const dx = particle.x - target.x;
          const dy = particle.y - target.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            context.beginPath();
            context.strokeStyle = `rgba(255,255,255,${0.18 - distance / 1200})`;
            context.lineWidth = 1;
            context.moveTo(particle.x, particle.y);
            context.lineTo(target.x, target.y);
            context.stroke();
          }
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
};

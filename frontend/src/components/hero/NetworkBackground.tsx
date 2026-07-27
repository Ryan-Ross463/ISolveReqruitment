import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const NetworkBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <ParticlesProvider init={particlesInit}>
        <Particles
          id="tsparticles"
          className="h-full w-full"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
              color: { value: "#D4AF37" },
              links: {
                color: "#D4AF37",
                distance: 250,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: true,
                speed: 0.4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                value: 35,
              },
              opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: {
                  enable: true,
                  speed: 0.5,
                  sync: false,
                },
              },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>
    </div>
  );
};

export default NetworkBackground;
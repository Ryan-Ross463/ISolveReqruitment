const nodes = [
  { x: "15%", y: "25%" },
  { x: "35%", y: "45%" },
  { x: "55%", y: "20%" },
  { x: "75%", y: "35%" },
  { x: "25%", y: "75%" },
  { x: "65%", y: "70%" },
];


const NetworkBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-30">

      <svg className="h-full w-full">

        {/* Connections */}
        <line
          x1="15%"
          y1="25%"
          x2="35%"
          y2="45%"
          stroke="var(--color-green-forest)"
          strokeWidth="1"
        />

        <line
          x1="35%"
          y1="45%"
          x2="55%"
          y2="20%"
          stroke="var(--color-green-forest)"
          strokeWidth="1"
        />


        <line
          x1="55%"
          y1="20%"
          x2="75%"
          y2="35%"
          stroke="var(--color-green-forest)"
          strokeWidth="1"
        />


        <line
          x1="25%"
          y1="75%"
          x2="65%"
          y2="70%"
          stroke="var(--color-green-forest)"
          strokeWidth="1"
        />


      </svg>


      {nodes.map((node, index) => (
        <span
          key={index}
          className="
            absolute
            h-3
            w-3
            rounded-full
            bg-[var(--color-green-forest)]
            animate-pulse
          "
          style={{
            left: node.x,
            top: node.y,
          }}
        />
      ))}

    </div>
  );
};

export default NetworkBackground;
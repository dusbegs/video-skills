import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

// Contoh minimal komposisi Remotion 9:16 — dari TUTORIAL.md Bagian 2.
// Pakai di proyek hasil `npx create-video@latest --yes --blank --no-tailwind`.
// Daftarkan sebagai komposisi 1080x1920, 30fps, 1800 frame (60 detik).
export const ShortPertama = ({ title }: { title: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 0.5 * fps], [0, 1]);
  const y = interpolate(frame, [0, 0.5 * fps], [50, 0]);

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: "#0a0f14",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1
        style={{
          opacity,
          transform: `translateY(${y}px)`,
          fontSize: 96,
          color: "#f5c518",
          textAlign: "center",
          margin: 0,
        }}
      >
        {title}
      </h1>
      <p style={{ color: "#f5f5f5", fontSize: 36, opacity: 0.8 }}>
        Jangan buka kamar nomor 7.
      </p>
    </div>
  );
};

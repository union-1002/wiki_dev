export default function MemberTemplate({ title, color, image, children }) {
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        borderRadius: '10px',
        padding: '1rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        background: `${color}10` // 살짝 투명 배경
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '120px',
          height: '120px',
          objectFit: 'cover',
          borderRadius: '8px',
          border: `2px solid ${color}`
        }}
      />
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', color }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}
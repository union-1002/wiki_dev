export default function MemberTemplate({
  title,            // 팀명
  image,            // 이미지 경로
  codename,
  gender,
  age,
  height,
  affiliation,
  ability,
  headerBg = '#333',   // 첫 번째 행 배경색
  headerColor = '#fff',// 첫 번째 행 글자색
  labelBg = '#f9f9f9', // 정보행 첫 열 배경색
  labelColor = '#000', // 정보행 첫 열 글자색
}) {
  return (
    <table
      className="member-table"
      style={{
        display: 'table',
        borderCollapse: 'collapse',
        width: '100%',
        maxWidth: '400px',
        margin: '1rem 0',
        border: `1px solid ${headerBg}`,
        textAlign: 'center'
      }}
    >
      <tbody>
        {/* 1행: 제목 */}
        <tr>
          <th
            colSpan={2}
            style={{
              background: headerBg,
              color: headerColor,
              padding: '0.5rem',
              fontSize: '1.2rem',
              textAlign: 'center',
            }}
          >
            {title}
          </th>
        </tr>

        {/* 2행: 이미지 */}
        <tr>
          <td colSpan={2} style={{ textAlign: 'center', padding: '0.5rem' }}>
            <img
              src={image}
              alt={title}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '6px',
                border: `2px solid ${headerBg}`
              }}
            />
          </td>
        </tr>

        {/* 정보 행들 */}
        {[
          ['코드네임', codename],
          ['성별', gender],
          ['나이', age],
          ['키', height],
          ['소속', affiliation],
          ['능력', ability],
        ].map(([label, value]) => (
          <tr key={label}>
            <th
              style={{
                width: '30%',
                padding: '0.4rem',
                background: labelBg,
                color: labelColor
              }}
            >
              {label}
            </th>
            <td style={{ padding: '0.4rem' }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

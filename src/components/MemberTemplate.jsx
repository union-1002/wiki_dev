import useBaseUrl from '@docusaurus/useBaseUrl';

export default function MemberTemplate({
  title,            // 팀명
  image,            // 이미지 경로
  codename,
  gender,
  age,
  height,
  affiliation,
  ability,
  bg = '#333',   // 첫 번째 행 배경색
  cr = '#fff'// 첫 번째 행 글자색
}) {

  const resolvedSrc = typeof image === 'string' ? useBaseUrl(image) : image; 

  return (
    <table
      className="member-table"
      style={{
        display: 'table',
        borderCollapse: 'collapse',
        width: '100%',
        maxWidth: '400px',
        margin: '1rem 0',
        border: `1px solid ${bg}`,
        textAlign: 'center'
      }}
    >
      <tbody>
        {/* 1행: 제목 */}
        <tr style={{ border: 'none' }}>
          <th
            colSpan={2}
            style={{
              background: bg,
              color: cr,
              padding: '0.5rem',
              fontSize: '1.2rem',
              textAlign: 'center',
            }}
          >
            {title}
          </th>
        </tr>

        {/* 2행: 이미지 */}
        <tr style={{ border: 'none' }}>
          <td colSpan={2} style={{ textAlign: 'center', padding: '0.5rem' }}>
            <img
              src={resolvedSrc}
              alt={title}
              style={{
                maxWidth: '100%',
                height: 'auto',
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
                background: bg,
                color: cr
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

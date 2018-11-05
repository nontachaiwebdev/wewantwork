export default (props) => {
  const { title = 'ตำแหน่งงานล่าสุด' } = props
  return (
    <section>
      <div className='container'>
        <h3>{title}</h3>
        <table className='table is-striped is-narrow is-hoverable is-fullwidth'>
          <tr>
            <th>ตำแหน่ง</th>
            <th>บริษัท</th>
            <th>วันที่</th>
            <th>อัตรา</th>
          </tr>
          {
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((item) => {
              return (
                <tr>
                  <td>Steward</td>
                  <td>The Pago Desing Hotel Phuket</td>
                  <td>05 พ.ย. 61</td>
                  <td>2</td>
                </tr>
              )
            })
          }
          <tr>
            <td className='see-more'>ดูตำแหน่งงานอื่นๆ>></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <style jsx>{`
        section {
          padding: 50px 0;
        }
        h3 {
          font-family: 'Kanit', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 1px;
          color: black;
          margin-bottom: 30px;
        }
        table {
          width: 100%;
        }
        th {
          font-size: 1.1rem;
          letter-spacing: 1px;
        }
        td {
          font-size: 1rem;
          letter-spacing: 1px;
        }
        .see-more {
          color: #00d1b2;
          font-weight: bold;
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  )
}

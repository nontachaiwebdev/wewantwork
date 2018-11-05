export default (props) => {
  return (
    <section>
      <div className='section-background'></div>
      <div className='container'>
        <h1 className='center'>wewantwork.com</h1>
        <h2 className='center'>หางาน ตำแหน่งงานว่าง จังหวัดภูเก็ต</h2>
        <div className='center'>
          <a className='button is-primary'>ดูตำแหน่งงานว่าง</a>
        </div>
      </div>
      <style jsx>{`
        section {
          position: relative;
          width: 100%;
          min-height: 500px;
        }
        .section-background {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('/static/header.jpg');
          background-size: cover;
          background-position: center;
          filter: brightness(0.6);
        }
        .center {
          text-align: center;
        }
        h1 {
          font-family: 'Kanit', sans-serif;
          color: white;
          font-size: 4rem;
          font-weight: 300;
          letter-spacing: 1px;
          padding: 50px 0 30px 0;
        }
        h2 {
          font-family: 'Kanit', sans-serif;
          color: white;
          font-size: 4rem;
          font-weight: 300;
          letter-spacing: 1px;
          padding: 0 0 50px 0;
        }
        a {
          font-family: 'Kanit', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 1px;
        }
      `}</style>
    </section>
  )
}

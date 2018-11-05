export default (props) => {
  return (
    <header>
      <div className='container'>
        <div className='top-navigation'>
          <h1>WE WANT WORK</h1>
          <nav>
            <ul>
              <li><a href="#">หางาน</a></li>
              <li><a href="#">นักศึกษาหางาน</a></li>
              <li><a href="#">ติดต่อ</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .top-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h1 {
          font-size: 1.3rem;
          letter-spacing: 1px;
          font-weight: bold;
        }
        ul {
          display: flex;
        }
        li {
          padding: 15px 0 15px 17px;
        }
        li a {
          padding: 15px 0 15px 17px;
          color: black;
          letter-spacing: 1px;
          font-size: 1.1rem;
        }
        li a:hover {
          color: #00d1b2;
        }
      `}</style>
    </header>
  )
}

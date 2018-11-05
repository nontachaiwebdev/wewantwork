export default (props) => {
  return (
    <footer>
      <div className="container">
        <div className='footer-container'>
          <nav>
            <ul>
              <li><a href="#">หางาน</a></li>
              <li><a href="#">นักศึกษาหางาน</a></li>
              <li><a href="#">ติดต่อ</a></li>
            </ul>
          </nav>
          <div className='social'>
            <nav>
              <ul>
                <li><a href="#"><img src='/static/facebook.png' /></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <style jsx>{`
        footer {
          background: black;
        }
        ul {
          display: flex;
        }
        li {
          padding: 15px 17px 15px 0;
        }
        li a {
          padding: 15px 17px 15px 0;
          color: white;
          letter-spacing: 1px;
          font-size: 1.1rem;
        }
        li a:hover {
          color: #00d1b2;
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .social img {
          width: 30px;
        }
        .social a {
          padding: 0;
        }
        .social li {
          padding: 0;
        }
      `}</style>
    </footer>
  )
}

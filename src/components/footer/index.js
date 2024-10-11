import '../../styles/footer/index.css'
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer className="footer container-fluid p-2 d-flex flex-column align-items-center justify-content-center column-gap-5">
            
            <div className='d-flex align-items-center justify-content-center column-gap-5'>
                <Link to='/'><i className="bi bi-house-door-fill fs-2"></i></Link>
                <Link to='/' onClick={() => {
                    setTimeout(()=>{
                        document.getElementById('input-search').focus()
                    }, 100)
                }}><i className="bi bi-search fs-2"></i></Link>
                <Link to='/cart'><i className="bi bi-cart-fill fs-2"></i></Link>
            </div>
        </footer>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUser } from '../store/action'
import { useEffect } from 'react';


const rooms = [

    {
        title: "STANDARD ROOM",
        price: "$350.00",
        img:
            "https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp",

    },
    {
        title: "FAMILY ROOM",
        price: "$400.00",
        img:
            "https://preview.colorlib.com/theme/suites/images/ximg_2.jpg.pagespeed.ic.jAvfEkr8MX.webp",
    },
    {
        title: "SINGLE ROOM",
        price: "$250.00",
        img:
            "https://preview.colorlib.com/theme/suites/images/ximg_3.jpg.pagespeed.ic.osxKtu1h5b.webp",
    },
    {
        title: "DELUXE ROOM",
        price: "$350.00",
        img:
            "https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp",
    },
    {
        title: "LUXURY ROOM",
        price: "$450.00",
        img:
            "https://preview.colorlib.com/theme/suites/images/ximg_2.jpg.pagespeed.ic.jAvfEkr8MX.webp",
    },
    {
        title: "SINGLE ROOM",
        price: "$150.00",
        img:
            "https://preview.colorlib.com/theme/suites/images/ximg_3.jpg.pagespeed.ic.osxKtu1h5b.webp",
    }

]

const Rooms = (props) => {
    const { img, title, price, btn } = props.room;
    
    return (

        <div className="card my-4 card_items">
            <img src={img} />
            <h4>{title}</h4>
            <h4 className="price">{price} / per night</h4>
            <Link to='/' ><button className=" card_btn btn btn-primary" type="button">{btn}Details</button></Link>
        </div>

    );
};

function Main() {

    const { id } = useParams()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser(id))
    }, [])
    return (
        <div>
            <div className='main'>

                <nav className="container bg-transparent navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand navhead" href="#">HACKATHON RESORT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                               <Link to="/rooms">
                               <a className="nav-link" href="#">Rooms</a>
                               </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' ><button className="btn navbtn btn-primary mx-2" type="button">Login</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signup' ><button className="btn navbtn btn-primary mx-2" type="button">Signup</button></Link>
                            </li>
                            <li className="nav-item">
                                <h4>{user.email}</h4>
                                <h5>{user.username}</h5>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
            <div className="roomTop">
                <div>
                    <h1 className='roomsHeading'>Rooms</h1>
                </div>
                <div className=" room_card container">
                    {rooms.map((room) => {
                        return <Rooms room={room} />
                    })}
                </div>
            </div>
            <div>
                <h1 className='roomsHeading'>Hotel Features</h1>
            </div>
        </div>
    )
}

export default Main

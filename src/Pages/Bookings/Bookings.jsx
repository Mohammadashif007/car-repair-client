import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/authProviders";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    // console.log(user.email);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, []);
    return <div>
        <h2>Booking : {bookings.length}</h2>
    </div>;
};

export default Bookings;

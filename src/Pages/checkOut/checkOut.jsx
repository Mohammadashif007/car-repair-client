import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/authProviders";
import Swal from "sweetalert2";

const CheckOut = () => {
    const params = useLoaderData();
    const { title, price, service_id, img } = params;
    const { user } = useContext(AuthContext);

    const handleBookService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const date = form.date.value;
        const order = {
            customerName: name,
            email,
            price,
            date,
            service_id: service_id,
            service_title: title,
            img,
        };
        console.log(order);
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Order placed successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div>
            <h1>checkout: {title}</h1>
            <div className="hero min-h-screen bg-base-200 p-5">
                <div className="w-full">
                    <form onSubmit={handleBookService}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    defaultValue={user?.email}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="$00.00"
                                    defaultValue={"$" + price}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <input
                                className="btn btn-block btn-primary"
                                type="submit"
                                value="Order Confirm"
                            />
                        </div>
                        <div className=" mt-6 "></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;

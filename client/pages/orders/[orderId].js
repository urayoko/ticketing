import { useEffect, useState } from 'react';
import Router from 'next/router';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';

const OrderShow = ({ order, currentUser }) => {   
    const [timeLeft, setTimeLeft] = useState(0);
    const { doRequest, errors } = useRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: order.id
        },
        onSuccess: (payment) => Router.push('/orders')
    })
    
    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000));
        };

        findTimeLeft();
        const timerId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    // const msLeft = new Date(order.expiresAt) - new Date();
    // return <div>{msLeft / 1000} seconds until order expires</div>
    if(timeLeft < 0){
        return <div>Order Expired</div>
    }

    return <div>
        Time left to pay: {timeLeft} seconds
        <StripeCheckout 
            token={({ id }) => doRequest({ token: id })}
            stripeKey="pk_test_51ICTuxELsuNnbH0aduy32yGXFE8HtqfuOWHLudRMmKs9tIjcYzQO3kzUL1c7EiylvLdqmjMCAVhYqdi00xkoH8oc00gWuGjcBg"
            amount={order.ticket.price * 100} 
            email={currentUser.email}           
        />
        {errors}
    </div>;
};

OrderShow.getInitialProps = async (context, client) => {
    const {orderId} = context.query;
    const {data} = await client.get(`/api/orders/${orderId}`);

    return { order: data };
}

export default OrderShow;
import { Publisher, Subjects, OrderCancelledEvent } from '@uratickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}
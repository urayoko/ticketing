import { Publisher, OrderCreatedEvent, Subjects } from '@uratickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}
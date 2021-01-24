import { Subjects, Publisher, PaymentCreatedEvent } from '@uratickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;    
}
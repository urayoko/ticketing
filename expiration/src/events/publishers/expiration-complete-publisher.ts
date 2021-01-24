import { Subjects, Publisher, ExpirationCompleteEvent } from '@uratickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;    

}
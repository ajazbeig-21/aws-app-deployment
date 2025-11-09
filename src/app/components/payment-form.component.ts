import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var Razorpay: any;

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="overlay">
      <div class="modal">
        <h3>Enter Details to Buy "{{ product.name }}"</h3>
        <form (ngSubmit)="pay()" #paymentForm="ngForm">
          <input type="text" placeholder="Your Name" [(ngModel)]="customer.name" name="name" required />
          <input type="email" placeholder="Email Address" [(ngModel)]="customer.email" name="email" required />
          <input type="text" placeholder="Phone Number" [(ngModel)]="customer.phone" name="phone" required />
          <button type="submit" [disabled]="!paymentForm.valid">Proceed to Pay</button>
          <button type="button" (click)="close.emit()">Cancel</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; }
    .modal { background: white; padding: 20px; border-radius: 8px; width: 300px; text-align: center; }
    input { width: 100%; margin-bottom: 10px; padding: 8px; }
    button { margin: 5px; padding: 10px; }
  `]
})
export class PaymentFormComponent {
  @Input() product: any;
  @Output() close = new EventEmitter<void>();

  customer = {
    name: '',
    email: '',
    phone: ''
  };

  pay() {
    const options = {
      key: 'YOUR_KEY_ID',
      amount: this.product.price,
      currency: 'INR',
      name: 'Your Store Name',
      description: this.product.name,
      prefill: {
        name: this.customer.name,
        email: this.customer.email,
        contact: this.customer.phone,
      },
      notes: {
        productName: this.product.name,
        productId: this.product.id,
        customerEmail: this.customer.email,
      },
      handler: (response: any) => {
        console.log('Payment Success', response);
        alert('Payment Successful! Email will be sent with product link.');
        this.close.emit();
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}

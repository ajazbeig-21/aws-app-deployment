import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  product = {
    name: 'Interview Preparation eBook',
    price: 49900, // amount in paise (₹499)
  };

  customer = {
    name: '',
    email: '',
    phone: ''
  };

  pay() {
    const options: any = {
      key: 'rzp_test_bMkrP3e2dYnt0P', // Replace with Razorpay key
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
        customerEmail: this.customer.email,
      },
      theme: {
        color: '#3399cc',
      },
      handler: (response: any) => {
        this.handlePaymentSuccess(response);
      },
      modal: {
        ondismiss: () => {
          console.log('Payment Popup Closed');
        },
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }

  handlePaymentSuccess(response: any) {
    console.log('Payment Successful!', response);
    // Send payment + customer details to backend
    // Backend can verify payment and send email with digital product link
  }
}
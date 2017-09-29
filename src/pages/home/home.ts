import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BookingProvider } from "../../providers/booking/booking";
import { CreateBookingPage } from "../create-booking/create-booking";
import { BookingDetailPage } from "../booking-detail/booking-detail";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  providers: [BookingProvider]
})
export class HomePage {
  bookings = [];

  constructor(
    public navCtrl: NavController,
    public bookingProvider: BookingProvider
  ) {}

  ionViewDidLoad() {
    console.log("load");
  }

  ionViewDidEnter() {
    console.log("enter");
    this.getBookings();
  }

  getBookings() {
    this.bookingProvider
      .getBookings()
      .subscribe(bookings => (this.bookings = bookings));
  }

  createBooking() {
    this.navCtrl.push(CreateBookingPage);
  }

  showDetails(booking) {
    this.navCtrl.push(BookingDetailPage, { booking });
  }
}

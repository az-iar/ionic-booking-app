import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BookingProvider } from "../../providers/booking/booking";

/**
 * Generated class for the CreateBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-create-booking",
  templateUrl: "create-booking.html"
})
export class CreateBookingPage {
  data = {
    name: "",
    room: "",
    from: "",
    to: "",
    purpose: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public bookingProvider: BookingProvider
  ) {}

  ionViewDidLoad() {}

  submit() {
    this.bookingProvider.createBooking(this.data).subscribe(response => {
      this.navCtrl.pop();
    });
  }
}

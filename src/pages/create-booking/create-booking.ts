import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController,
  LoadingController
} from "ionic-angular";
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
  templateUrl: "create-booking.html",
  providers: [BookingProvider]
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
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toast: ToastController,
    public bookingProvider: BookingProvider
  ) {}

  ionViewDidLoad() {}

  submit() {
    let loader = this.loadingCtrl.create({
      content: "Processing.."
    });

    loader.present();

    this.bookingProvider.createBooking(this.data).subscribe(
      response => {
        this.navCtrl.pop();

        loader.dismiss();
      },
      errorResponse => {
        console.log(errorResponse.json());
        let errors = errorResponse.json();

        // this.alertCtrl
        //   .create({
        //     message: errors.message,
        //     title: "Error!"
        //   })
        //   .present();

        this.toast
          .create({
            message: errors.message,
            duration: 3000
          })
          .present();

        loader.dismiss();
      },
      () => {
        console.log("complete");
      }
    );
  }
}

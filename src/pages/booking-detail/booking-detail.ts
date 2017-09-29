import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the BookingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-booking-detail",
  templateUrl: "booking-detail.html"
})
export class BookingDetailPage {
  booking = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.booking = navParams.get("booking");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BookingDetailPage");
  }
}

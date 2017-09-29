import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

/*
  Generated class for the BookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingProvider {
  constructor(public http: Http) {}

  getBookings() {
    return this.http
      .get("https://27b08483.ngrok.io/api/bookings")
      .map(response => response.json())
      .map(response => response.data);
  }

  getBooking(id) {
    return this.http
      .get("https://27b08483.ngrok.io/api/bookings/" + id)
      .map(response => response.json())
      .map(response => response.data);
  }

  createBooking(data) {
    return this.http
      .post("https://27b08483.ngrok.io/api/bookings", data)
      .map(response => response.json())
      .map(response => response.data);
  }

  deleteBooking(booking) {
    return this.http
      .delete("https://27b08483.ngrok.io/api/bookings/" + booking.id)
      .map(response => response.json())
      .map(response => response.data);
  }
}

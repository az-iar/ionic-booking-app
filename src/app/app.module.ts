import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BookingProvider } from "../providers/booking/booking";
import { HttpModule } from "@angular/http";
import { CreateBookingPageModule } from "../pages/create-booking/create-booking.module";
import { CreateBookingPage } from "../pages/create-booking/create-booking";
import { BookingDetailPageModule } from "../pages/booking-detail/booking-detail.module";
import { BookingDetailPage } from "../pages/booking-detail/booking-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CreateBookingPage,
    BookingDetailPage
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreateBookingPage,
    BookingDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

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

@NgModule({
  declarations: [MyApp, HomePage, ListPage],
  imports: [
    BrowserModule,
    HttpModule,
    CreateBookingPageModule,
    BookingDetailPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, CreateBookingPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BookingProvider
  ]
})
export class AppModule {}

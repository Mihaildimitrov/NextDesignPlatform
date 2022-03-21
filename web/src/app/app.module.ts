import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactOneComponent } from './components/pages/contact-one/contact-one.component';
import { ContactTwoComponent } from './components/pages/contact-two/contact-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutOneComponent } from './components/pages/about-one/about-one.component';
import { AboutTwoComponent } from './components/pages/about-two/about-two.component';
import { BannerOneComponent } from './components/pages/banner-one/banner-one.component';
import { BannerOneSolidComponent } from './components/pages/banner-one-solid/banner-one-solid.component';
import { BannerTwoComponent } from './components/pages/banner-two/banner-two.component';
import { BannerTwoSolidComponent } from './components/pages/banner-two-solid/banner-two-solid.component';
import { BannerThreeComponent } from './components/pages/banner-three/banner-three.component';
import { BannerThreeSolidComponent } from './components/pages/banner-three-solid/banner-three-solid.component';
import { BannerFourComponent } from './components/pages/banner-four/banner-four.component';
import { BannerFourSolidComponent } from './components/pages/banner-four-solid/banner-four-solid.component';
import { BannerSixComponent } from './components/pages/banner-six/banner-six.component';
import { BannerSixSolidComponent } from './components/pages/banner-six-solid/banner-six-solid.component';
import { BannerSevenComponent } from './components/pages/banner-seven/banner-seven.component';
import { BannerSevenSolidComponent } from './components/pages/banner-seven-solid/banner-seven-solid.component';
import { BannerEightComponent } from './components/pages/banner-eight/banner-eight.component';
import { BannerEightSolidComponent } from './components/pages/banner-eight-solid/banner-eight-solid.component';
import { BannerNineComponent } from './components/pages/banner-nine/banner-nine.component';
import { BannerNineSolidComponent } from './components/pages/banner-nine-solid/banner-nine-solid.component';
import { BannerTenComponent } from './components/pages/banner-ten/banner-ten.component';
import { BannerTenSolidComponent } from './components/pages/banner-ten-solid/banner-ten-solid.component';
import { BannerElevenComponent } from './components/pages/banner-eleven/banner-eleven.component';
import { BannerElevenSolidComponent } from './components/pages/banner-eleven-solid/banner-eleven-solid.component';
import { BannerTwelveComponent } from './components/pages/banner-twelve/banner-twelve.component';
import { BannerTwelveSolidComponent } from './components/pages/banner-twelve-solid/banner-twelve-solid.component';
import { BannerThirteenComponent } from './components/pages/banner-thirteen/banner-thirteen.component';
import { BannerThirteenSolidComponent } from './components/pages/banner-thirteen-solid/banner-thirteen-solid.component';
import { BannerFourteenComponent } from './components/pages/banner-fourteen/banner-fourteen.component';
import { BannerFourteenSolidComponent } from './components/pages/banner-fourteen-solid/banner-fourteen-solid.component';
import { BlogDetailLeftComponent } from './components/pages/blog-detail-left/blog-detail-left.component';
import { BlogDetailRightComponent } from './components/pages/blog-detail-right/blog-detail-right.component';
import { BlogGridOneComponent } from './components/pages/blog-grid-one/blog-grid-one.component';
import { BlogGridTwoComponent } from './components/pages/blog-grid-two/blog-grid-two.component';
import { BlogLeftComponent } from './components/pages/blog-left/blog-left.component';
import { BlogRightComponent } from './components/pages/blog-right/blog-right.component';
import { ComingSoonOneComponent } from './components/pages/coming-soon-one/coming-soon-one.component';
import { ComingSoonTwoComponent } from './components/pages/coming-soon-two/coming-soon-two.component';
import { FaqOneComponent } from './components/pages/faq-one/faq-one.component';
import { FaqTwoComponent } from './components/pages/faq-two/faq-two.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { PricingOneComponent } from './components/pages/pricing-one/pricing-one.component';
import { PricingTwoComponent } from './components/pages/pricing-two/pricing-two.component';
import { PricingThreeComponent } from './components/pages/pricing-three/pricing-three.component';
import { ProjectOneComponent } from './components/pages/project-one/project-one.component';
import { ProjectTwoComponent } from './components/pages/project-two/project-two.component';
import { ProjectThreeComponent } from './components/pages/project-three/project-three.component';
import { ServiceOneComponent } from './components/pages/service-one/service-one.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { ServiceThreeComponent } from './components/pages/service-three/service-three.component';
import { ServiceFourComponent } from './components/pages/service-four/service-four.component';
import { ServiceFiveComponent } from './components/pages/service-five/service-five.component';
import { ServiceSixComponent } from './components/pages/service-six/service-six.component';
import { TeamOneComponent } from './components/pages/team-one/team-one.component';
import { TeamTwoComponent } from './components/pages/team-two/team-two.component';
import { TeamThreeComponent } from './components/pages/team-three/team-three.component';
import { TeamFourComponent } from './components/pages/team-four/team-four.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { FooterTwoComponent } from './components/layouts/footer-two/footer-two.component';
import { FooterThreeComponent } from './components/layouts/footer-three/footer-three.component';
import { FooterFourComponent } from './components/layouts/footer-four/footer-four.component';
import { FooterFiveComponent } from './components/layouts/footer-five/footer-five.component';
import { BlogSidebarComponent } from './components/layouts/blog-sidebar/blog-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactOneComponent,
    ContactTwoComponent,
    ErrorComponent,
    AboutOneComponent,
    AboutTwoComponent,
    BannerOneComponent,
    BannerOneSolidComponent,
    BannerTwoComponent,
    BannerTwoSolidComponent,
    BannerThreeComponent,
    BannerThreeSolidComponent,
    BannerFourComponent,
    BannerFourSolidComponent,
    BannerSixComponent,
    BannerSixSolidComponent,
    BannerSevenComponent,
    BannerSevenSolidComponent,
    BannerEightComponent,
    BannerEightSolidComponent,
    BannerNineComponent,
    BannerNineSolidComponent,
    BannerTenComponent,
    BannerTenSolidComponent,
    BannerElevenComponent,
    BannerElevenSolidComponent,
    BannerTwelveComponent,
    BannerTwelveSolidComponent,
    BannerThirteenComponent,
    BannerThirteenSolidComponent,
    BannerFourteenComponent,
    BannerFourteenSolidComponent,
    BlogDetailLeftComponent,
    BlogDetailRightComponent,
    BlogGridOneComponent,
    BlogGridTwoComponent,
    BlogLeftComponent,
    BlogRightComponent,
    ComingSoonOneComponent,
    ComingSoonTwoComponent,
    FaqOneComponent,
    FaqTwoComponent,
    HomeComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    PricingOneComponent,
    PricingTwoComponent,
    PricingThreeComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceFourComponent,
    ServiceFiveComponent,
    ServiceSixComponent,
    TeamOneComponent,
    TeamTwoComponent,
    TeamThreeComponent,
    TeamFourComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTwoComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    FooterFourComponent,
    FooterFiveComponent,
    BlogSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

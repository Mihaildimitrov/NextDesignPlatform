import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { AboutOneComponent } from './components/pages/about-one/about-one.component';
import { AboutTwoComponent } from './components/pages/about-two/about-two.component';
import { BlogGridOneComponent } from './components/pages/blog-grid-one/blog-grid-one.component';
import { BlogGridTwoComponent } from './components/pages/blog-grid-two/blog-grid-two.component';
import { BlogLeftComponent } from './components/pages/blog-left/blog-left.component';
import { BlogRightComponent } from './components/pages/blog-right/blog-right.component';
import { BlogDetailLeftComponent } from './components/pages/blog-detail-left/blog-detail-left.component';
import { BlogDetailRightComponent } from './components/pages/blog-detail-right/blog-detail-right.component';
import { TeamOneComponent } from './components/pages/team-one/team-one.component';
import { TeamTwoComponent } from './components/pages/team-two/team-two.component';
import { TeamThreeComponent } from './components/pages/team-three/team-three.component';
import { TeamFourComponent } from './components/pages/team-four/team-four.component';
import { ServiceOneComponent } from './components/pages/service-one/service-one.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { ServiceThreeComponent } from './components/pages/service-three/service-three.component';
import { ServiceFourComponent } from './components/pages/service-four/service-four.component';
import { ServiceFiveComponent } from './components/pages/service-five/service-five.component';
import { ServiceSixComponent } from './components/pages/service-six/service-six.component';
import { ProjectOneComponent } from './components/pages/project-one/project-one.component';
import { ProjectTwoComponent } from './components/pages/project-two/project-two.component';
import { ProjectThreeComponent } from './components/pages/project-three/project-three.component';
import { PricingOneComponent } from './components/pages/pricing-one/pricing-one.component';
import { PricingTwoComponent } from './components/pages/pricing-two/pricing-two.component';
import { PricingThreeComponent } from './components/pages/pricing-three/pricing-three.component';
import { FaqOneComponent } from './components/pages/faq-one/faq-one.component';
import { FaqTwoComponent } from './components/pages/faq-two/faq-two.component';
import { ComingSoonOneComponent } from './components/pages/coming-soon-one/coming-soon-one.component';
import { ComingSoonTwoComponent } from './components/pages/coming-soon-two/coming-soon-two.component';
import { ContactOneComponent } from './components/pages/contact-one/contact-one.component';
import { ContactTwoComponent } from './components/pages/contact-two/contact-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { BannerOneComponent } from './components/pages/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/pages/banner-two/banner-two.component';
import { BannerThreeComponent } from './components/pages/banner-three/banner-three.component';
import { BannerFourComponent } from './components/pages/banner-four/banner-four.component';
import { BannerSixComponent } from './components/pages/banner-six/banner-six.component';
import { BannerSevenComponent } from './components/pages/banner-seven/banner-seven.component';
import { BannerEightComponent } from './components/pages/banner-eight/banner-eight.component';
import { BannerNineComponent } from './components/pages/banner-nine/banner-nine.component';
import { BannerTenComponent } from './components/pages/banner-ten/banner-ten.component';
import { BannerElevenComponent } from './components/pages/banner-eleven/banner-eleven.component';
import { BannerTwelveComponent } from './components/pages/banner-twelve/banner-twelve.component';
import { BannerThirteenComponent } from './components/pages/banner-thirteen/banner-thirteen.component';
import { BannerFourteenComponent } from './components/pages/banner-fourteen/banner-fourteen.component';
import { BannerOneSolidComponent } from './components/pages/banner-one-solid/banner-one-solid.component';
import { BannerTwoSolidComponent } from './components/pages/banner-two-solid/banner-two-solid.component';
import { BannerThreeSolidComponent } from './components/pages/banner-three-solid/banner-three-solid.component';
import { BannerFourSolidComponent } from './components/pages/banner-four-solid/banner-four-solid.component';
import { BannerSixSolidComponent } from './components/pages/banner-six-solid/banner-six-solid.component';
import { BannerSevenSolidComponent } from './components/pages/banner-seven-solid/banner-seven-solid.component';
import { BannerEightSolidComponent } from './components/pages/banner-eight-solid/banner-eight-solid.component';
import { BannerNineSolidComponent } from './components/pages/banner-nine-solid/banner-nine-solid.component';
import { BannerTenSolidComponent } from './components/pages/banner-ten-solid/banner-ten-solid.component';
import { BannerElevenSolidComponent } from './components/pages/banner-eleven-solid/banner-eleven-solid.component';
import { BannerTwelveSolidComponent } from './components/pages/banner-twelve-solid/banner-twelve-solid.component';
import { BannerThirteenSolidComponent } from './components/pages/banner-thirteen-solid/banner-thirteen-solid.component';
import { BannerFourteenSolidComponent } from './components/pages/banner-fourteen-solid/banner-fourteen-solid.component';



const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home-two',component:HomeTwoComponent},
  {path:'home-three',component:HomeThreeComponent},
  {path:'home-four',component:HomeFourComponent},
  {path:'home-five',component:HomeFiveComponent},
  {path:'home-six',component:HomeSixComponent},
  {path:'about-one',component:AboutOneComponent},
  {path:'about-two',component:AboutTwoComponent},
  {path:'blog-grid-one',component:BlogGridOneComponent},
  {path:'blog-grid-two',component:BlogGridTwoComponent},
  {path:'blog-left',component:BlogLeftComponent},
  {path:'blog-right',component:BlogRightComponent},
  {path:'blog-detail-left',component:BlogDetailLeftComponent},
  {path:'blog-detail-right',component:BlogDetailRightComponent},
  {path:'banner-one',component:BannerOneComponent},
  {path:'banner-two',component:BannerTwoComponent},
  {path:'banner-three',component:BannerThreeComponent},
  {path:'banner-four',component:BannerFourComponent},
  {path:'banner-six',component:BannerSixComponent},
  {path:'banner-seven',component:BannerSevenComponent},
  {path:'banner-eight',component:BannerEightComponent},
  {path:'banner-nine',component:BannerNineComponent},
  {path:'banner-ten',component:BannerTenComponent},
  {path:'banner-eleven',component:BannerElevenComponent},
  {path:'banner-twelve',component:BannerTwelveComponent},
  {path:'banner-thirteen',component:BannerThirteenComponent},
  {path:'banner-fourteen',component:BannerFourteenComponent},
  {path:'banner-one-solid',component:BannerOneSolidComponent},
  {path:'banner-two-solid',component:BannerTwoSolidComponent},
  {path:'banner-three-solid',component:BannerThreeSolidComponent},
  {path:'banner-four-solid',component:BannerFourSolidComponent},
  {path:'banner-six-solid',component:BannerSixSolidComponent},
  {path:'banner-seven-solid',component:BannerSevenSolidComponent},
  {path:'banner-eight-solid',component:BannerEightSolidComponent},
  {path:'banner-nine-solid',component:BannerNineSolidComponent},
  {path:'banner-ten-solid',component:BannerTenSolidComponent},
  {path:'banner-eleven-solid',component:BannerElevenSolidComponent},
  {path:'banner-twelve-solid',component:BannerTwelveSolidComponent},
  {path:'banner-thirteen-solid',component:BannerThirteenSolidComponent},
  {path:'banner-fourteen-solid',component:BannerFourteenSolidComponent},
  {path:'team-one',component:TeamOneComponent},
  {path:'team-two',component:TeamTwoComponent},
  {path:'team-three',component:TeamThreeComponent},
  {path:'team-four',component:TeamFourComponent},
  {path:'service-one',component:ServiceOneComponent},
  {path:'service-two',component:ServiceTwoComponent},
  {path:'service-three',component:ServiceThreeComponent},
  {path:'service-four',component:ServiceFourComponent},
  {path:'service-five',component:ServiceFiveComponent},
  {path:'service-six',component:ServiceSixComponent},
  {path:'project-one',component:ProjectOneComponent},
  {path:'project-two',component:ProjectTwoComponent},
  {path:'project-three',component:ProjectThreeComponent},
  {path:'pricing-one',component:PricingOneComponent},
  {path:'pricing-two',component:PricingTwoComponent},
  {path:'pricing-three',component:PricingThreeComponent},
  {path:'faq-one',component:FaqOneComponent},
  {path:'faq-two',component:FaqTwoComponent},
  {path:'coming-soon-one',component:ComingSoonOneComponent},
  {path:'coming-soon-two',component:ComingSoonTwoComponent},
  {path:'contact-one',component:ContactOneComponent},
  {path:'contact-two',component:ContactTwoComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

webpackJsonp([0],{0:function(t,n,o){"use strict";function e(){i.bootstrap(l.AppComponent,[c.HTTP_PROVIDERS,d.APP_ROUTER_PROVIDERS,s.disableDeprecatedForms(),s.provideForms(),{provide:r.LocationStrategy,useClass:r.HashLocationStrategy},p.FIREBASE_PROVIDERS,p.defaultFirebase({apiKey:"AIzaSyABlDFTj5lUcR9e_I2ZzrB6D26c5FU9mE8",authDomain:"parkabler.firebaseapp.com",databaseURL:"https://parkabler.firebaseio.com",storageBucket:"parkabler.appspot.com"})])["catch"](function(t){return console.error(t)})}var a=o(1),i=o(111),r=o(112),c=o(328),s=o(349),p=o(386),l=o(436),d=o(502);a.enableProdMode(),window.cordova?document.addEventListener("deviceready",e,!1):e()},436:function(t,n,o){"use strict";var e=o(1),a=o(437),i=o(471),r=o(476);o(496);var c=function(){function t(){}return t=__decorate([e.Component({selector:"my-app",providers:[i.SpotApiService,i.GeolocationService,i.MapLocationService],directives:a.ROUTER_DIRECTIVES.concat([r.HeaderComponent]),template:o(500),styles:[o(501)]}),__metadata("design:paramtypes",[])],t)}();n.AppComponent=c},471:function(t,n,o){"use strict";function e(t){for(var o in t)n.hasOwnProperty(o)||(n[o]=t[o])}e(o(472)),e(o(473)),e(o(474))},472:function(t,n,o){"use strict";var e=o(1),a=function(){function t(){}return t.prototype.currentLocation=function(){return new Promise(function(t,n){window.navigator.geolocation.getCurrentPosition(function(n){t({lat:n.coords.latitude,lng:n.coords.longitude})},function(){throw new Error("LocationService: currentLocation failed")})})},t=__decorate([e.Injectable(),__metadata("design:paramtypes",[])],t)}();n.GeolocationService=a},473:function(t,n,o){"use strict";var e=o(1),a=o(472),i=o(33),r=function(){function t(t){var n=this;this.geolocation=t,this._location=new i.Subject,this.current=this._location.asObservable(),this.geolocation.currentLocation().then(function(t){n._location.next(t)})}return t.prototype.set=function(t){this._location.next(t)},t=__decorate([e.Injectable(),__metadata("design:paramtypes",[a.GeolocationService])],t)}();n.MapLocationService=r},474:function(t,n,o){"use strict";var e=o(1),a=o(386),i=o(475),r=function(){function t(t){this.spots=i.spots,this.items=t.database.list("spots")}return t=__decorate([e.Injectable(),__metadata("design:paramtypes",[a.AngularFire])],t)}();n.SpotApiService=r},475:function(t,n){t.exports={spots:[{lat:42.3605884,lng:-71.0566478},{lat:42.3597105,lng:-71.0529804},{lat:42.358866,lng:-71.0530764},{lat:42.3621599,lng:-71.0609191},{lat:42.362289,lng:-71.0607594},{lat:42.3614474,lng:-71.0605307},{lat:42.3587902,lng:-71.061605},{lat:42.3590545,lng:-71.0628802},{lat:42.3590336,lng:-71.0628288},{lat:42.3590456,lng:-71.062739},{lat:42.2999349,lng:-71.0722702},{lat:42.3604596,lng:-71.065081},{lat:42.360917,lng:-71.0652568},{lat:42.3595269,lng:-71.0653017},{lat:42.3585008,lng:-71.0645667},{lat:42.3594206,lng:-71.063973},{lat:42.3599005,lng:-71.1194061},{lat:42.3620373,lng:-71.0635527},{lat:42.3644379,lng:-71.063972},{lat:42.3639065,lng:-71.0625429},{lat:42.3639688,lng:-71.0621671},{lat:42.3642348,lng:-71.0603951},{lat:42.3634469,lng:-71.0594548},{lat:42.3804097,lng:-71.0606693},{lat:42.3584392,lng:-71.0572881},{lat:42.3576883,lng:-71.0568698},{lat:42.3557565,lng:-71.0580338},{lat:42.3553195,lng:-71.0584263},{lat:42.3560286,lng:-71.0540513},{lat:42.357281,lng:-71.059575},{lat:42.3650128,lng:-71.0534021},{lat:42.3649048,lng:-71.0533043},{lat:42.3668374,lng:-71.0527874},{lat:42.3667707,lng:-71.0526204},{lat:42.3619877,lng:-71.0528514},{lat:42.3623309,lng:-71.0516395},{lat:42.3630802,lng:-71.0518589},{lat:42.3660619,lng:-71.050973},{lat:42.3661621,lng:-71.0513005},{lat:42.3667785,lng:-71.0521156},{lat:42.3676835,lng:-71.0534823},{lat:42.3682843,lng:-71.0561109},{lat:42.366843,lng:-71.053588},{lat:42.36712,lng:-71.054198},{lat:42.36726,lng:-71.054511},{lat:42.3672465,lng:-71.0546981},{lat:42.366389,lng:-71.052565},{lat:42.366245,lng:-71.0525357},{lat:42.3662128,lng:-71.0523245},{lat:42.3634196,lng:-71.0532428},{lat:42.3637823,lng:-71.0520096}]}},476:function(t,n,o){"use strict";function e(t){for(var o in t)n.hasOwnProperty(o)||(n[o]=t[o])}e(o(477))},477:function(t,n,o){"use strict";var e=o(1),a=o(478),i=o(479),r=function(){function t(t){}return t.prototype.ngOnInit=function(){},t=__decorate([e.Component({selector:"header",template:o(494),styles:[o(495)],directives:[a.MdToolbar,i.MdIcon],viewProviders:[i.MdIconRegistry]}),__metadata("design:paramtypes",[i.MdIconRegistry])],t)}();n.HeaderComponent=r},494:function(t,n){t.exports='<md-toolbar color="primary">\n  <md-icon>menu</md-icon>\n  <span>ParkAbler</span>\n</md-toolbar>\n'},495:function(t,n){t.exports="md-toolbar{position:absolute;z-index:1}span{margin-left:15px}\n"},496:function(t,n){},500:function(t,n){t.exports="<header></header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n"},501:function(t,n){t.exports=":host{display:block}main{font-family:Arial, Helvetica, sans-serif;text-align:center;display:block}footer{text-align:center;font-size:0.8em}\n"},502:function(t,n,o){"use strict";var e=o(437),a=o(503),i=o(544);n.routes=[{path:"",component:a.HomeComponent},{path:"text",component:i.TextComponent}],n.APP_ROUTER_PROVIDERS=[e.provideRouter(n.routes)]},503:function(t,n,o){"use strict";function e(t){for(var o in t)n.hasOwnProperty(o)||(n[o]=t[o])}e(o(504))},504:function(t,n,o){"use strict";var e=o(1),a=o(505),i=o(509),r=o(538),c=function(){function t(){}return t.prototype.ngOnInit=function(){},t=__decorate([e.Component({selector:"my-home",template:o(542),styles:[o(543)],directives:[a.MapComponent,i.EditSpotComponent,r.PlacesComponent]}),__metadata("design:paramtypes",[])],t)}();n.HomeComponent=c},505:function(t,n,o){"use strict";function e(t){for(var o in t)n.hasOwnProperty(o)||(n[o]=t[o])}e(o(506))},506:function(t,n,o){"use strict";var e=o(1),a=o(471),i=function(){function t(t,n){this.spotApi=t,this.mapLocation=n}return t.prototype.ngOnInit=function(){},t.prototype.addSpots=function(){var t=this;this.spotApi.spots.forEach(function(n){new window.google.maps.Marker({position:n,map:t.map})})},t.prototype.ngAfterViewInit=function(){this.initializeMap()},t.prototype.initializeMap=function(){var t=this,n=this.googleMapsDiv.nativeElement;this.map=new window.google.maps.Map(n,{zoom:15,disableDefaultUI:!0}),this.mapLocation.current.subscribe(function(n){t.map.setCenter(n),t.addSpots()})},__decorate([e.ViewChild("googleMapsDiv"),__metadata("design:type",Object)],t.prototype,"googleMapsDiv",void 0),t=__decorate([e.Component({selector:"main-map",template:o(507),styles:[o(508)]}),__metadata("design:paramtypes",[a.SpotApiService,a.MapLocationService])],t)}();n.MapComponent=i},507:function(t,n){t.exports='<div #googleMapsDiv class="map">\n</div>\n\n<!-- Test getting firebase data -->\n<!-- <ul>\n  <li *ngFor="let item of spotApi.items | async">\n    {{item.lat}}\n  </li>\n</ul> -->\n'},508:function(t,n){t.exports=".map{width:100%;height:100%;position:absolute;top:0;left:0}\n"},509:function(t,n,o){"use strict";function e(t){for(var o in t)n.hasOwnProperty(o)||(n[o]=t[o])}e(o(510))},510:function(t,n,o){"use strict";var e=o(1),a=o(112),i=o(511),r=o(530),c=o(531),s=o(532),p=o(533),l=o(534),d=function(){function t(){this.enteringSpot=!1}return t.prototype.ngOnInit=function(){},t.prototype.addSpot=function(){this.enteringSpot=!0},t.prototype.cancelAddSpot=function(){this.enteringSpot=!1},t=__decorate([e.Component({selector:"edit-spot",template:o(536),styles:[o(537)],providers:[i.MdUniqueSelectionDispatcher],directives:[a.NgClass,r.MD_CARD_DIRECTIVES,s.MdCheckbox,c.MdButton,p.MdRadioGroup,p.MdRadioButton,l.MdInput]}),__metadata("design:paramtypes",[])],t)}();n.EditSpotComponent=d},536:function(t,n){t.exports='<div class="container" [ngClass]="{ editing: enteringSpot }">\n  <button *ngIf="!enteringSpot" md-raised-button color="primary" (click)="addSpot()">\n    ADD SPOT\n  </button>\n\n  <md-card *ngIf="enteringSpot" class="md-card-raised">\n    <md-card-subtitle>Report a Parking Sport</md-card-subtitle>\n    <md-card-content>\n      <md-input aria-label="description" placeholder="Description"></md-input>\n      <md-card-subtitle>How many spaces are there?</md-card-subtitle>\n      <div class="spaces-buttons">\n        <button md-button color="primary">1</button>\n        <button md-button color="primary">2</button>\n        <button md-raised-button color="primary">3</button>\n        <button md-button color="primary">4</button>\n        <button md-button color="primary">Many</button>\n      </div>\n      <md-card-subtitle>What type of space is this?</md-card-subtitle>\n      <md-radio-group>\n        <md-radio-button>Commercial</md-radio-button>\n        <md-radio-button>Residential</md-radio-button>\n        <md-radio-button>Don\'t know</md-radio-button>\n      </md-radio-group>\n      <br/>\n      <button md-button color="primary" (click)="cancelAddSpot()">Cancel</button>\n      <button md-raised-button color="primary" id="submit">Submit</button>\n    </md-card-content>\n  </md-card>\n</div>\n'},537:function(t,n){t.exports=".container{position:absolute;bottom:40px;left:7%;text-align:left;width:300px}md-card-header{height:30px;margin:0px;padding:0px}.spaces-buttons button[md-raised-button],.spaces-buttons button[md-button]{min-width:0px}#submit{float:right}md-input,md-radio-group,.spaces-buttons{display:block;padding-bottom:15px}md-radio-button{margin:10px}\n"},538:function(t,n,o){"use strict";function e(t){for(var o in t)n.hasOwnProperty(o)||(n[o]=t[o])}e(o(539))},539:function(t,n,o){"use strict";var e=o(1),a=o(479),i=o(531),r=o(471),c=function(){function t(t){this.mapLocation=t}return t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){var t=this,n=this.placesInput.nativeElement;this.autocomplete=new window.google.maps.places.Autocomplete(n),this.autocomplete.addListener("place_changed",function(){var n=t.autocomplete.getPlace();return n.geometry?void t.mapLocation.set(n.geometry.location):void console.log("places api did not return geometry")})},__decorate([e.ViewChild("placesInput"),__metadata("design:type",Object)],t.prototype,"placesInput",void 0),t=__decorate([e.Component({selector:"places-search",template:o(540),styles:[o(541)],directives:[a.MdIcon,i.MdButton],viewProviders:[a.MdIconRegistry]}),__metadata("design:paramtypes",[r.MapLocationService])],t)}();n.PlacesComponent=c},540:function(t,n){t.exports='<div class="places-search">\n  <input #placesInput type="text"/><!-- remove space between elements\n  --><button md-icon-button color="primary">\n    <md-icon>search</md-icon>\n  </button>\n</div>\n'},541:function(t,n){t.exports=".places-search{color:black;position:absolute;z-index:1;top:60px;left:0;right:0;margin-left:auto;margin-right:auto;padding:20px 0px;white-space:nowrap;text-align:center}.places-search input{font-size:18px;font-family:Roboto;font-weight:300;display:inline-block;vertical-align:middle;border:none;padding:9px;width:70%;text-overflow:ellipsis}.places-search button{color:white;background-color:#009688;border-radius:0px;display:inline-block}\n"},542:function(t,n){t.exports="<places-search></places-search>\n<main-map></main-map>\n<edit-spot></edit-spot>\n"},543:function(t,n){t.exports=""},544:function(t,n,o){"use strict";function e(t){for(var o in t)n.hasOwnProperty(o)||(n[o]=t[o])}e(o(545))},545:function(t,n,o){"use strict";var e=o(1),a=function(){function t(){}return t.prototype.ngOnInit=function(){console.log("Hello TextView")},t=__decorate([e.Component({selector:"text-view",template:o(546),styles:[o(547)]}),__metadata("design:paramtypes",[])],t)}();n.TextComponent=a},546:function(t,n){t.exports="<p>\n  Text View!!\n</p>\n"},547:function(t,n){t.exports="*{color:#f87c08}\n"}});
//# sourceMappingURL=app.6ff6f95d0943a4d1227b.js.map
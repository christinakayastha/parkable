import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AddSpotSteps, AppModes } from '~/util';
import { GeolocationService } from '~/services';
import { DestinationActions, MapActions } from '~/actions';
import { IAppState } from '~/store';
// TODO-rangle: is there a better way to require this?
// Should i add this to vendor.js?
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

@Component({
  selector: 'pa-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  public supportsGL: boolean;

  public zoom: number;
  public center: GeoJSON.Position;

  public currentLocation: GeoJSON.Position;
  public destination: GeoJSON.Position;
  public geolocationAvailable: boolean;

  public spots: GeoJSON.FeatureCollection<GeoJSON.Point>;

  @select(['destination', 'coordinates']) private destination$: Observable<GeoJSON.Position>;
  @select() private spots$: Observable<GeoJSON.FeatureCollection<GeoJSON.Point>>;
  @select() private addSpotStep$: Observable<AddSpotSteps>;
  @select() private appMode$: Observable<AppModes>;
  @select(['geolocation', 'coordinates']) private geolocationCoordinates$: Observable<GeoJSON.Position>;
  @select(['geolocation', 'isAvailable']) private geolocationAvailable$: Observable<boolean>;
  @select(['map', 'zoom']) private zoom$: Observable<number>;
  @select(['map', 'center']) private center$: Observable<GeoJSON.Position>;
  @select(['map', 'interactable']) private interactable$: Observable<boolean>;
  @select(['map', 'addSpotOverlay']) private addSpotOverlay$: Observable<boolean>;

  constructor(
    private geoLocation: GeolocationService,
    private destinationActions: DestinationActions,
    private mapActions: MapActions,
    private ref: ChangeDetectorRef,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngAfterViewInit() {
    this.supportsGL = mapboxgl.supported();

    // Listen to changes on the map state
    this.zoom$.subscribe((z: number) => {
      this.zoom = z;
    });
    this.center$.subscribe((c: GeoJSON.Position) => {
      this.center = c;
    });

    // Listen to changes in currentLocation
    this.geolocationCoordinates$.subscribe((location: GeoJSON.Position) => {
      this.currentLocation = location;
    });
    this.geolocationAvailable$.subscribe((isAvailable: boolean) => {
      this.geolocationAvailable = isAvailable;
    });

    // Listen to changes on destination
    this.destination$.subscribe((destination: GeoJSON.Position) => {
      this.destination = destination;
      if (destination !== null) {
        this.center = destination;
        this.zoom = 15;
      }
    });

    // Listen to changes on spots
    this.spots$.subscribe((spots: GeoJSON.FeatureCollection<GeoJSON.Point>) => {
      this.spots = spots;
    });

  }

  setZoom(z: number): void {
    this.mapActions.setZoom(z);
  }

  setCenter(c: GeoJSON.Position): void {
    this.mapActions.setCenter(c);
  }

  recenterChange(): void {
    // Set destination to current location
    this.destinationActions.setToCurrentLocation();
  }
}

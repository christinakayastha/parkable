import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '~/store';
import { Observable } from 'rxjs';
import { AppModeActions, SpotsAddActions, MapActions } from '~/actions';
import { AppModes, Spot2 } from '~/util';

const turfHelper = require('@turf/helpers');

@Component({
  selector: 'pa-add-spot',
  templateUrl: './addspot.component.html',
  styleUrls: ['./addspot.component.scss']
})

export class AddSpotComponent {
  public open = false;
  public newSpotDetails = {
    cost: null,
    description: null,
    coordinates: null,
    quantity: 1
  };

  @select() private appMode$: Observable<AppModes>;
  @select() private spotSelected$: Observable<GeoJSON.Feature<GeoJSON.Point>>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private appModeActions: AppModeActions,
    private spotsAddActions: SpotsAddActions,
    private mapActions: MapActions
  ) {
    // Whenever add spot is opened, show the add spot overlay over the map
    this.appMode$.subscribe(appMode => {
      if (appMode === AppModes.AddSpot) {
        this.onOpen();
      }
    })
  }

  private onOpen() {
    this.open = true;
    this.mapActions.setAddSpotOverlay(true);
  }

  public onClose() {
    this.open = false;
    this.appModeActions.unsetModeAddSpot();
    this.mapActions.setAddSpotOverlay(false);
    this.mapActions.setInteractable(true);
  }

  public onSetLocation() {
    this.newSpotDetails.coordinates = this.ngRedux.getState().map.center;
    this.mapActions.setInteractable(false);
  }

  public onUnsetLocation() {
    this.newSpotDetails.coordinates = null;
    this.mapActions.setInteractable(true);
  }

  public onSubmit() {
    // Create a new Spot and add it to the addSpots
    const newSpot = turfHelper.feature({
      type: 'Point',
      coordinates: this.newSpotDetails.coordinates
    }, {
        addedBy: this.ngRedux.getState().userID,
        verified: false,
        quantity: this.newSpotDetails.quantity,
        cost: this.newSpotDetails.cost,
        description: this.newSpotDetails.description
      });

    this.spotsAddActions.addSpot(newSpot);

    // Reset the Map overlay and interactiveness
    this.mapActions.setAddSpotOverlay(false);
    this.mapActions.setInteractable(true);
  }

}

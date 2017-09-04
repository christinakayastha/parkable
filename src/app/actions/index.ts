import { DestinationActions } from './destination.actions';
import { SpotsActions } from './spots.actions';
import { SpotsDatabaseActions } from './spotsDatabase.actions';
import { SpotsAddActions } from './spotsAdd.actions';
import { SpotsReportActions } from './spotsReport.actions';
import { SpotsNearbyActions } from './spotsNearby.actions';
import { PlacesActions } from './places.actions';
import { AppModeActions } from './appmode.actions';
import { ReportSpotStepActions } from './reportspotstep.actions';
import { SpotsListModeActions } from './spotslistmode.actions';
import { GeolocationActions } from './geolocation.actions';
import { MapActions } from './map.actions';

export const ACTION_PROVIDERS = [
  SpotsActions,
  SpotsDatabaseActions,
  SpotsAddActions,
  SpotsReportActions,
  SpotsNearbyActions,
  AppModeActions,
  ReportSpotStepActions,
  SpotsListModeActions,
  GeolocationActions,
  MapActions,
  PlacesActions,
  DestinationActions
];

export {
  SpotsActions,
  SpotsDatabaseActions,
  SpotsAddActions,
  SpotsReportActions,
  SpotsNearbyActions,
  AppModeActions,
  ReportSpotStepActions,
  SpotsListModeActions,
  GeolocationActions,
  MapActions,
  PlacesActions,
  DestinationActions
};

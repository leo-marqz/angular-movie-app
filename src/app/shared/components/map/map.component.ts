import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Coordinate } from './coordinate';

@Component({
  selector: 'app-map',
  imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  ngOnInit(): void {
    if (this.initialCoordinates) {
      this.layers = this.initialCoordinates.map((coord)=>{
        const markerInstance = marker([coord.latitude, coord.longitude], this.markerOptions);
        
        return markerInstance;
      
      });
    }
  }

  @Input()
  initialCoordinates: Coordinate[] = [];

  @Output()
  postCoordinates = new EventEmitter<Coordinate>();

  markerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  options = {
    layers: [
      tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        { maxZoom: 18, attribution: '...' }
      )
    ],
    zoom: 16,
    center: latLng(13.6696048, -89.2649618)
  };

  layers: Marker<any>[] = [];

  handleClickOnMap(event: LeafletMouseEvent): void {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log(`Clicked coordinates: ${latitude}, ${longitude}`);

    this.layers = []; // Clear previous markers
    this.layers.push( marker([latitude, longitude], this.markerOptions) );
    this.postCoordinates.emit({ latitude, longitude });
  }

  
}

import { Component, OnInit, Input } from '@angular/core';
import { ColoniesService } from '../colonies.service';

@Component({
  selector: 'app-new-hive',
  templateUrl: './new-hive.component.html',
  styleUrls: ['./new-hive.component.scss'],
})
export class NewHiveComponent implements OnInit {
  @Input() colonyId: string;
  @Input() hives: number;
  @Input() overproduction: number;

  constructor(private coloniesService: ColoniesService) {}

  ngOnInit(): void {}

  onAddHive(): void {
    this.coloniesService.updateHives(this.colonyId, this.hives + 1).subscribe()
  }
}

import {
  Component, OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { VideoPreview } from '../../interfaces/video-preview.interface';
import { VideoResponseService } from '../../../core/services/video-response.service';

@Component({
  selector: 'app-detail-video-preview',
  templateUrl: './detail-video-preview.component.html',
  styleUrls: ['./detail-video-preview.component.scss'],
})
export class DetailVideoPreviewComponent implements OnInit {
  detailCard?: VideoPreview;

  date?:string | Date | null;

  constructor(
    private route: ActivatedRoute,
    private dataService: VideoResponseService,
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit() {
    this.dataService.getDataById(String(this.route.snapshot.paramMap.get('id')))
      .subscribe((video) => {
        this.detailCard = video;
        this.date = new Date(String(this.detailCard?.snippet?.publishedAt));
      });
  }
}

import {
  Component, OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { VideoPreview } from '../../interfaces/video-preview.interface';
import { VideoResponseService } from '../../../core/services/video-response.service';

@Component({
  selector: 'app-detail-video-preview',
  templateUrl: './detail-video-preview.component.html',
  styleUrls: ['./detail-video-preview.component.scss'],
})
export class DetailVideoPreviewComponent implements OnInit {
  detailCard?: VideoPreview;

  date?: Date;

  constructor(
    private route: ActivatedRoute,
    private dataService: VideoResponseService,
  ) {
  }

  ngOnInit() {
    this.dataService.getDataById([String(this.route.snapshot.paramMap.get('id'))])
      .subscribe((video) => {
        this.detailCard = video[0];
        this.date = this.detailCard?.snippet?.publishedAt;
      });
  }
}

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

  date?:string | Date | null;

  constructor(
    private route: ActivatedRoute,
    private dataService: VideoResponseService,
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit() {
    this.detailCard = this.dataService.getVideoById(String(this.route.snapshot.paramMap.get('id')));
    this.date = new Date(String(this.detailCard?.snippet?.publishedAt));
  }
}

import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.css']
})
export class VideoViewerComponent implements OnInit {

  yt_iframe_html: any;

  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";

  constructor(private embedService: EmbedVideoService) {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl, {
      attr: { width: 600, height: 600 }
    });
  }

  ngOnInit() {
  }

}

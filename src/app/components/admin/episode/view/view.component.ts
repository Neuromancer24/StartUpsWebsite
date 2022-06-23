import { Component } from '@angular/core';
import { Episode, ConfigService } from '../../../../config/config.service';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  title = 'Home';
  error: any;
  episodes: Episode[] = [];
  showContent = false;
  content: string = '';

  constructor(private configService: ConfigService) {
    this.getEpisodes()
  }

  getEpisodes() : void {
    this.configService.getEpisodes().subscribe(data => {
      this.episodes = data;
      console.log(this.episodes);
    });    
 }
  
  showContentById(id: number){
    this.showContent = true;
    this.content = this.episodes.find(x=>x.Id === id)?.Content;
  }
}

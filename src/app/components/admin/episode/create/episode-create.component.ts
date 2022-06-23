import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Episode, ConfigService } from '../../../../config/config.service';


@Component({
  selector: 'episode-create',
  templateUrl: './episode-create.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./episode-create.component.css']
})
export class EpisodeCreateComponent {
  title = 'Create Episode';

  episodeForm = new FormGroup({
    Title: new FormControl(''),
    Brief: new FormControl(''),
    Content: new FormControl(''),
  });

  constructor(private configService: ConfigService) {
  }

  onSubmit() {
    this.configService.postEpisodes(this.episodeForm.value).subscribe(() => {
      console.log("Success");
    });
  }
}

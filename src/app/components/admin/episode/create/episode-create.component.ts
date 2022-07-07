import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Episode, ConfigService } from '../../../../config/config.service';
import { AngularEditorConfig } from "@kolkov/angular-editor";


@Component({
  selector: 'episode-create',
  templateUrl: './episode-create.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./episode-create.component.css']
})
export class EpisodeCreateComponent implements OnInit {
  title = 'Create Episode';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "auto",
    minHeight: "0",
    maxHeight: "auto",
    width: "auto",
    minWidth: "0",
    translate: "yes",
    enableToolbar: true,
    showToolbar: true,
    placeholder: "Enter text here...",
    defaultParagraphSeparator: "",
    defaultFontName: "",
    defaultFontSize: "",
    fonts: [
      { class: "arial", name: "Arial" },
      { class: "times-new-roman", name: "Times New Roman" },
      { class: "calibri", name: "Calibri" },
      { class: "comic-sans-ms", name: "Comic Sans MS" }
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote"
      },
      {
        name: "redText",
        class: "redText"
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1"
      }
    ],
    sanitize: true,
    toolbarPosition: "top",
    toolbarHiddenButtons: [["bold", "italic"], ["fontSize"]]
  };

  episodeForm:FormGroup;

  constructor(private configService: ConfigService, private fb: FormBuilder) {
    this.episodeForm = this.fb.group({      
      title:[""],
      brief: [""],
      content: [""]
    });
  }

  ngOnInit(): void {
    this.episodeForm = this.fb.group({
      title:[""],
      brief: [""],
      content: [""]
    });
  }

  onSubmit() {
    this.configService.postEpisodes(this.episodeForm.value).subscribe(() => {
      console.log("Success");
    });
  }
}

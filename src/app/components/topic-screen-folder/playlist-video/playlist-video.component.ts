import { Component, OnInit, Input } from '@angular/core';
import { FileService } from 'src/app/shared/file.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-playlist-video',
  templateUrl: './playlist-video.component.html',
  styleUrls: ['./playlist-video.component.scss']
})
export class PlaylistVideoComponent implements OnInit {

  @Input() videoId: String;
  @Input() videoName: String;
  videosrc;
  constructor(private fileservice:FileService,private http:HttpClient) { }

  ngOnInit(): void {
    //this.getVideoSource();
    this.buttonFunction();
  }

  /*getVideoSource(){
    console.log(this.videoId);
    let video = this.fileservice.getVideo(this.videoId);
    video.then((url)=>{
      //this.videosrc = url;
      console.log("VIDEOSRC",url);
      //const vid = URL.createObjectURL(url);
      //console.log("URL",vid);
    })
    //console.log("VIDEOOO", video.);
    //console.log("OUTSIDE VIDEO",video);
    video.then((evt)=>{
      console.log("OUTSIDE BIDEO",evt);
      this.http.get(evt.toString(),{
        responseType:'blob'
      }).subscribe((blob)=>{
        const objectUrl = URL.createObjectURL(blob);
        console.log("URL",objectUrl)
        
      })
    })

  

  }*/

  buttonFunction () {
    //var startHandler = (<HTMLInputElement>document.getElementById('m')).value;
    var colors = [];
    var counter1 = 0;
    var counter2 = 0;

    colors.push("#E1D8F1");
    colors.push("#CCB8F1");
    colors.push("#F0F0F0");

    var startHandler = function (state) { console.log(state); }
   
 
    var stopHandler = function (state) { console.log(state); }
    var resetHandler = function (state) { console.log(state); }
    
    let StopWatch = function (selector) {
      var states = ['Not Started', 'In progress', 'Finished']
      
      var handlers = [startHandler, stopHandler, resetHandler]
      var currentState = 0;
      var element = document.querySelector(selector);
      
      var clickHandler = function () {
        // Execute 'currentState', pass anything you want to handlers
        handlers[currentState](states[currentState])
          
          
        // Update currentState after, means 'move to next state'
        if (currentState < (states.length - 1)) {
          currentState++;
        } else {
         currentState = 0;
        }
            
        element.innerHTML = states[currentState];
      }
      return {
        init: function () {
          // Initial work
          element.addEventListener('click', clickHandler);
        },
        remove: function () {
          // Cleanup
          element.removeEventListener('click', clickHandler)
        }
      }
    }
    function switchColors() {
      //var changes = document.getElementsByClassName("change");
      
      Array.prototype.forEach.call(this.states, function (state) {
          state.style.backgroundColor = colors[counter1];
      });
  
      counter1 += 1;
      if (counter1 > colors.length - 1) {
          counter1 = 0;
      }
      
    
  }
  window.addEventListener("load", function () {
    document.getElementById("stopwatch").addEventListener("click", switchColors, false);
}, false);

    StopWatch('#stopwatch').init();
  }
}

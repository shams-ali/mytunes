// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    //console.log(this);
    //console.log(this.playerView);
    // this.on('ended', function() {
    //   console.log(this);
    //   //console.log(this.play());
    //   //this.dequeue();
    //   this.remove(this.at(0));
    //   this.play(this.at(0));
    // }, this);
  },

  setSong: function(song) {
    this.model = song;
    console.log(song);
    console.log(this);
    console.log(this.model);
   
    this.render();
  },

  render: function() {

    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

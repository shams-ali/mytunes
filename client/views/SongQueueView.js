// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.on('render', function() {
      this.render();
    }, this);
  },

  render: function() {
    //recheck code in this
    this.$el.html('<th>QueueSongs</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
    
    //return this.$el; //give to us

});

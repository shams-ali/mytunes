// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',
  
  initialize: function() {
    this.render();
  },

  render: function() {
    //recheck code in this
    this.$el.children().detach();// just added
    this.$el.html('<th>QueueSongs</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
    
    //return this.$el; //give to us

});

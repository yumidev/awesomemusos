var app = app || {};

app.SongInputView = Backbone.View.extend({
  el: "#keyboard",
  render: function(){
    var songInputViewTemplate = $("#songInputViewTemplate").html();
    this.$el.html(songInputViewTemplate)
  }
})

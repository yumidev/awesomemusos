var app = app || {};

app.RecordButtonView = Backbone.View.extend({
  el: "#recordButton",

  render: function(){
    var recordButtonViewTemplate = $("#recordButtonViewTemplate").html();
    this.$el.html(recordButtonViewTemplate)
  }

})

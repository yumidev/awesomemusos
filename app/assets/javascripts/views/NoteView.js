var app = app || {};

app.NoteView = Backbone.View.extend({
  tagName: 'span',
  render: function(){
    var pitches='';
    if(note.length!== 0){
      pitches+= note[note.length-1][1];
    }
    this.$el.text( pitches );
    this.$el.appendTo( "#noteView" );
  }
})

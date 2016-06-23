var app = app || {};

app.NoteView = Backbone.View.extend({
  tagName: 'span',
  render: function(){
    var pitches='';
    // debugger;
    if(note.length!== 0){
      pitches+= note[note.length-1][1];
    }
// debugger;
    this.$el.text( pitches );
    this.$el.appendTo( "#noteView" );
  }
})

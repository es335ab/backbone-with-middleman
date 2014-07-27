var Todo = Backbone.Model.extend();
var todo = new Todo();

// textという属性を設定
todo.set('text', '原稿を書く');

// オブジェクトで複数の属性を設定
todo.set({ text: '原稿を書く', completed: true });
console.log(todo.get('text'));
console.log(todo.get('completed'));
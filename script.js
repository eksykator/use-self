function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        var self = this;
        var element = document.createElement('button');
        element.innerText = this.text;
        element.addEventListener('click', function() {
            console.log(this);
            alert(self.text);
        });
        document.body.appendChild(element);
    }
}

var btn1 = new Button('Witaj');
btn1.create();

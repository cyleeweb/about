// Mustache Sample 1
function sample1(){
    var person = {firstName:'John', lastName:'Stark', blogURL:'http://blog.john-stark.com'};
    var template = '<h3>{{firstName}} {{lastName}}</h3> <a href="{{blogURL}}">{{blogURL}}</a>';
    var html = Mustache.to_html(template, person);
    console.log(html);
    $('#sampleArea1').html(html);
} 

// Mustache Sample 2
function sample2(){
    $.getJSON ('/protox/mustache/json/data.json', function(data){
    var template = '<h3>{{firstName}} {{lastName}}</h3><a href="{{blogURL}}">{{blogURL}}</a>';
    var html = Mustache.to_html (template, data);
    $('#sampleArea2').html(html);
})
}
// Mustache Sample 3
function sample3(){
    $.getJSON ('/protox/mustache/json/data2.json', function(data){
    var template = $('#personTpl').html();
    var html = Mustache.to_html(template, data);
    $('#sampleArea3').html(html);
    })
}
// Mustache Sample 4
function sample4(){
    var data = {name:'John Stark', skills:['Javascript','PHP','Java']};
    var htmlTpl = "<h3>{{name}}</h3> <ul>{{#skills}}<li>{{.}}</li>{{/skills}}</ul> ";
    var html = Mustache.to_html(htmlTpl, data);
    $('#sampleArea4').html(html);
}
// Mustache Sample 5
function sample5(){
    var data = {employees:[
        {firstName:'John', lastName:'Stark'},{firstName:'David', lastName:'Lee'}]};
    var template = "<h3>Employees: </h3> <ul>{{#employees}}<li>{{firstName}} {{lastName}}</li>{{/employees}}</ul>";
    var html = Mustache.to_html (template, data);
    $('#sampleArea5').html(html);
}
// Mustache Sample 6
function sample6(){
    var person = {firstName:'John', lastName:'Stark', blogURL:'http://blog.JohnStark.com',
                  manager:{firstName:'Lisa', lastName:'Jones'}
                 };
    var template = "<h3>{{firstName}} {{lastName}}</h3> <p>{{blogURL}}</p>{{manager.firstName}} {{manager.lastName}}<p>";
    var html = Mustache.to_html(template, person);
    $('#sampleArea6').html(html);
}
// Mustache Sample 7
function sample7() {
    var person = {
        firstName:'John', lastName:'Stark', blogURL:'http://blog.JohnStark.com',
        manager:{
            firstName:'Lisa', lastName:'Jones'}
    }
    var template = "<h3>{{firstName}}{{lastName}}</h3> <p>{{blogURL}}</p> <p>{{#manager}}{{manager.firstName}} {{manager.lastName}}{{/manager}}</p>";
    var html = Mustache.to_html(template, person);
    $('#sampleArea7').html(html);
}
// Mustache Sample 8
function sample8() {
    var product = {
        name: 'FoodBar',
        price: 100,
        salesTax: 0.85,
        totalPrice: function(){
            return this.price + this.price * this.salesTax;}
        };
    var template = "<h3>Product: {{name}}</h3> <p>Total Price: ${{totalPrice}}</p>";
    var html = Mustache.to_html(template, product);
    $('#sampleArea8').html(html);
}
// Mustache Sample 9
function sample9(){
    var data = {
        employees:[
        {firstName:'John', lastName:'Stark', fullTime:true, phone:'614-234-5908'},
        {firstName:'Haydon', lastName:'Craig', fullTime:false, phone:'650-334-0923'},
        {firstName:'Lisa', lastName:'Jones', fullTime:true, phone:'880-123-3895'}]
        };
    var template = "<h3>Employees:</h3><ul>{{#employees}}<li>{{firstName}} {{lastName}} {{#fullTime}} {{phone}} {{/fullTime}}</li>{{/employees}}</ul>";
    var html = Mustache.to_html (template, data);
    $('#sampleArea9').html(html);
}
// Mustache Sample 10
function sample10() {
    var data = {firstName:'John', lastName:'Stark', address:'124 Holy Road', city:'San Jose', state:'CA', zip:'95234'}
    var template = "<h3>{{firstName}} {{lastName}}</h3>{{>Address}}";
    var partials = {Address: "<p>{{address}}</p>{{city}}, {{state}}{{zip}}"};
    var html = Mustache.to_html(template, data, partials);
    $('#sampleArea10').html(html);
}   
// Mustache Sample 11   
function sample11(){
    var data ={ depts:[
        {name:'Engineering', employees:[{firstName:"John", lastName:"Stark"},{firstName:'David', lastName:'Stand'}]},
        {name:'Sales', employees:[{firstName:'Caroline', lastName:'Cass'},{firstName:'Derek', lastName:'Wiki'}]}
        ]};
    var tpl = "<h3>{{#depts}} <h3>{{name}}</h1><ul>{{#employees}}{{>Employee}}{{/employees}}</ul> {{/depts}}</h1>";
    var partials = {Employee:"<li>{{firstName}} {{lastName}}</li>"};
    var html = Mustache.to_html(tpl, data, partials);
    $('#sampleArea11').html(html);
}
// EOD
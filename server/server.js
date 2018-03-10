import Express from 'express';

const app = new Express();

app.use(Express.static(__dirname + '/public'));

app.set('views', './public');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
})
.listen(7777, () => {
  console.log('Listening on 7777 ...')
});

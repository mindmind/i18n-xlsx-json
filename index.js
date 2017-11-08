var xlsx_json = require('./libs');

var i18nXlsxJson = function (record){

	var lang = ['eng','ru'];

	if (!(lang && lang.length)) return false;
	
	var output = [];
	lang.forEach(function(item){
		output.push({values:{}});
	});
	
	record.forEach(function(item,i){
		console.log(i)
		lang.forEach(function(l,i){
			if (l in item && 'id' in item) {
				output[i].values[item.id] = item[l];
			}
		});
	});

	return output;
}

xlsx_json({
  input: __dirname + '/bonum_lang.xlsx',
  output: __dirname + '/bonum/bonum.json',
  multiple: true
}, function(err, result) {
  if(err) {
    console.error(err);
  } else {
    console.log(result);
  }
},i18nXlsxJson);
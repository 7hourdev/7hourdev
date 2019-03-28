export default function(url){
	if(url.indexOf("/") === 0){
		url = url.substring(1);
	}
	return "http://7hourdev.com/" + url;
}
